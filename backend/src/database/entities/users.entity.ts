import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  OneToMany,
  CreateDateColumn,
} from 'typeorm';
import { Role } from './roles.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ type: 'nvarchar', length: 30, unique: true })
  public username: string;

  @Column({ type: 'nvarchar' })
  public password: string;

  @Column({ type: 'nvarchar'})
  public email: string;

  @CreateDateColumn({ type: 'timestamp' })
  public registered: Date;

  @Column({ type: 'boolean', default: false })
  public isDeleted: boolean;

  @ManyToMany(type => Role, { eager: true })
  @JoinTable()
  public roles: Role[];

}
