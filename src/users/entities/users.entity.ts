import { roleEnum } from 'src/enums/role.enum';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar2', length: 50 })
  userName: string;

  @Column({ type: 'varchar2', length: 50 })
  login: string;

  @Column({ type: 'varchar2', length: 50 })
  password: string;

  @Column({ type: 'varchar2', length: 50 })
  role: roleEnum;
}
