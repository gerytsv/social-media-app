import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('roles')
export class Role {
  @PrimaryGeneratedColumn('increment')
  public id: string;

  @Column({ nullable: false, unique: true })
  public name: string;
}
