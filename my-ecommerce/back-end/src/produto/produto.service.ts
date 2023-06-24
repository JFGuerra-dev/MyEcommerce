import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ProdutoEntidade } from './interface/produto.entidade';
import { CriarProdutoDto } from './dto/criarProduto.dto';
import { EditarProdutoDto } from './dto/editarProduto.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(ProdutoEntidade)
    private readonly produtoRepositorio: Repository<ProdutoEntidade>,
  ) {}

  async criarProduto(
    criarProdutoDto: CriarProdutoDto,
  ): Promise<ProdutoEntidade> {
    return this.produtoRepositorio.save(criarProdutoDto);
  }

  async listarTodosOsProdutos(): Promise<ProdutoEntidade[]> {
    return this.produtoRepositorio.find();
  }

  async buscarProdutoPorId(id: number): Promise<ProdutoEntidade> {
    const produto = await this.produtoRepositorio.findOne({
      where: {
        id: id,
      },
    });

    if (!produto) {
      throw new NotFoundException('Produto não encontrado!');
    }

    return produto;
  }

  async editarProduto(
    id: number,
    editarProdutoDto: EditarProdutoDto,
  ): Promise<ProdutoEntidade> {
    const produto = await this.produtoRepositorio.findOne({
      where: { id: id },
    });

    if (!produto) {
      throw new NotFoundException('Produto não encontrado!');
    }

    this.produtoRepositorio.update(id, editarProdutoDto);

    return { id, ...editarProdutoDto };
  }

  async deletarProduto(id: number) {
    this.produtoRepositorio.delete(id);
  }
}
