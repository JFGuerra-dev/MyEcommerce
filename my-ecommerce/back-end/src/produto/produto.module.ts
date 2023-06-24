import { Module } from '@nestjs/common';
import { ProdutoController } from './produto.controller';
import { ProdutoService } from './produto.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutoEntidade } from './interface/produto.entidade';

@Module({
  imports: [TypeOrmModule.forFeature([ProdutoEntidade])],
  controllers: [ProdutoController],
  providers: [ProdutoService],
})
export class ProdutoModule {}
