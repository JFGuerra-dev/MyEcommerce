import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioEntidade } from './interface/usuario.entidade';

@Module({
  imports: [TypeOrmModule.forFeature([UsuarioEntidade])],
  controllers: [UsuarioController],
  providers: [UsuarioService],
})
export class UsuarioModule {}
