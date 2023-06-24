import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CriarUsuarioDto } from './dto/criarUsuario.dto';
import { EditarUsuarioDto } from './dto/editarUsuario.dto';
import { UsuarioService } from './usuario.service';
import { UsuarioEntidade } from './interface/usuario.entidade';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Get()
  async listarUsuarios(): Promise<UsuarioEntidade[]> {
    return this.usuarioService.buscarTodosOsUsuarios();
  }

  @Get(':id')
  async buscarUsuarioPorId(@Param('id') id: number): Promise<UsuarioEntidade> {
    return this.usuarioService.buscarUsuarioPorId(id);
  }

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
  ): Promise<UsuarioEntidade> {
    return this.usuarioService.editarUsuario(id, editarUsuario);
  }

  @Delete(':id')
  async deletarUsuario(@Param('id') id: number) {
    this.usuarioService.deletarUsuario(id);
  }
}
