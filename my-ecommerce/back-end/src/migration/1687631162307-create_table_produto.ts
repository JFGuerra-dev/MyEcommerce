import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableProduto1687631162307 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        CREATE TABLE myEcommerce.produto (
            id integer NOT NULL AUTO_INCREMENT,
            nome char NOT NULL,
            descricao  char NOT NULL,
            categoria  char NOT NULL,
            valor float NOT NULL,
            qtdEstoque integer NOT NULL,
            primary key (id)
        );`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        drop table myEcommerce.produto
    `);
  }
}
