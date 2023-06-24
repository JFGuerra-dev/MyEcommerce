import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'produto' })
export class ProdutoEntidade {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ name: 'nome', nullable: false })
  nome: string;
  @Column({ name: 'descricao', nullable: false })
  descricao: string;
  @Column({ name: 'categoria', nullable: false })
  categoria: string;
  @Column({ name: 'valor', nullable: false })
  valor: number;
  @Column({ name: 'qtd-estoque', nullable: false })
  qtdEstoque: number;
}
