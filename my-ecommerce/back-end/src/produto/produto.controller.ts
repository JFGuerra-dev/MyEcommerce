import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { ProdutoEntidade } from './interface/produto.entidade';
import { CriarProdutoDto } from './dto/criarProduto.dto';
import { EditarProdutoDto } from './dto/editarProduto.dto';

@Controller('produto')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}
  @Get()
  async listarTodosOsProdutos(): Promise<ProdutoEntidade[]> {
    return this.produtoService.listarTodosOsProdutos();
  }

  @Get(':id')
  async buscarProdutoPorId(@Param('id') id: number): Promise<ProdutoEntidade> {
    return this.produtoService.buscarProdutoPorId(id);
  }

  @Post()
  async criarProduto(
    @Body() criarProduto: CriarProdutoDto,
  ): Promise<ProdutoEntidade> {
    return this.produtoService.criarProduto(criarProduto);
  }

  @Put(':id')
  async editarProduto(
    @Param('id') id: number,
    @Body() editarProduto: EditarProdutoDto,
  ): Promise<ProdutoEntidade> {
    return this.produtoService.editarProduto(id, editarProduto);
  }

  @Delete(':id')
  async deletarProduto(@Param('id') id: number) {
    this.produtoService.deletarProduto(id);
  }
}
