import { Injectable, NotFoundException } from '@nestjs/common';
import { UsuarioEntidade } from './interface/usuario.entidade';
import { CriarUsuarioDto } from './dto/criarUsuario.dto';
import { hash } from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EditarUsuarioDto } from './dto/editarUsuario.dto';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(UsuarioEntidade)
    private readonly usuarioRepositorio: Repository<UsuarioEntidade>,
  ) {}

  async criarUsuario(
    criarUsuarioDto: CriarUsuarioDto,
  ): Promise<UsuarioEntidade> {
    const saltOrRounds = 10;
    const senhaEncriptada = await hash(criarUsuarioDto.password, saltOrRounds);

    return this.usuarioRepositorio.save({
      ...criarUsuarioDto,
      password: senhaEncriptada,
      typeUsuario: 1,
    });
  }

  async buscarTodosOsUsuarios(): Promise<UsuarioEntidade[]> {
    return this.usuarioRepositorio.find();
  }

  async buscarUsuarioPorId(id: number): Promise<UsuarioEntidade> {
    const usuario = await this.usuarioRepositorio.findOne({
      where: {
        id: id,
      },
    });

    if (!usuario) {
      throw new NotFoundException('Usuário não encontrado!');
    }
    return usuario;
  }

  async editarUsuario(
    id: number,
    editarUsuario: EditarUsuarioDto,
  ): Promise<UsuarioEntidade> {
    const usuario = await this.usuarioRepositorio.findOne({
      where: {
        id: id,
      },
    });

    if (!usuario) {
      throw new NotFoundException('Usuário não encontrado!');
    }

    const saltOrRounds = 10;
    const senhaEncriptada = await hash(editarUsuario.password, saltOrRounds);

    editarUsuario.password = senhaEncriptada;
    this.usuarioRepositorio.update(id, editarUsuario);

    return { id, ...editarUsuario, typeUsuario: 1 };
  }

  async deletarUsuario(id: number) {
    this.usuarioRepositorio.delete(id);
  }
}
