import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CriarUsuarioDto } from './dto/criarUsuario.dto';
import { EditarUsuarioDto } from './dto/editarUsuario.dto';
import { UsuarioService } from './usuario.service';
import { UsuarioEntidade } from './interface/usuario.entidade';

@Controller('usuario')
export class UsuarioController {
  @Get()
  async listarUsuarios(): Promise<UsuarioEntidade[]> {
    return this.usuarioService.buscarTodosOsUsuarios();
  }

  constructor(private readonly usuarioService: UsuarioService) {}
  @Post()
  async criarUsuario(
    @Body() criarUsuario: CriarUsuarioDto,
  ): Promise<UsuarioEntidade> {
    return this.usuarioService.criarUsuario(criarUsuario);
  }

  @Put(':id')
  async editarUsuario(
    @Param('id') id: number,
    @Body() editarUsuario: EditarUsuarioDto,
  ) {
    return {
      ...editarUsuario,
      password: undefined,
    };
  }
}
