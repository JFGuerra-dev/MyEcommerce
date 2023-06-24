import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableUsuario1687630515902 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
    CREATE TABLE myEcommerce.usuario (
        id integer NOT NULL AUTO_INCREMENT,
        nome char NOT NULL,
        email char NOT NULL,
        cpf char NOT NULL,
        type_usuario integer NOT NULL,
        fone char NOT NULL,
        password  char NOT NULL,
        primary key (id)
    );`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        drop table myEcommerce.usuario;
    `);
  }
}
