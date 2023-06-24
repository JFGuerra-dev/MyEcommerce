import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'usuario' })
export class UsuarioEntidade {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ name: 'nome', nullable: false })
  nome: string;
  @Column({ name: 'email', nullable: false })
  email: string;
  @Column({ name: 'fone' })
  fone: string;
  @Column({ name: 'cpf', nullable: false })
  cpf: string;
  @Column({ name: 'password', nullable: false })
  password: string;
  @Column({ name: 'type_usuario', nullable: false })
  typeUsuario: number;
}
