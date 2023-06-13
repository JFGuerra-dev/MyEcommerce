import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CriarUsuarioDto } from './dto/criarUsuario.dto';
import { EditarUsuarioDto } from './dto/editarUsuario.dto';

@Controller('usuario')
export class UsuarioController {
  @Get()
  async listarUsuarios() {
    return JSON.stringify({ test: 'abc' });
  }

  @Post()
  async criarUsuario(@Body() criarUsuario: CriarUsuarioDto) {
    return {
      ...criarUsuario,
      password: undefined,
    };
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
