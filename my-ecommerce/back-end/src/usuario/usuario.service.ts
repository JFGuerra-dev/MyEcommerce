import { Injectable } from '@nestjs/common';
import { UsuarioEntidade } from './interface/usuario.entidade';
import { CriarUsuarioDto } from './dto/criarUsuario.dto';
import { hash } from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

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
    });
  }

  async buscarTodosOsUsuarios(): Promise<UsuarioEntidade[]> {
    return this.usuarioRepositorio.find();
  }
}
