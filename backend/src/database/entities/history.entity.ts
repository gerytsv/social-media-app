import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';

@Entity('history')
export class History {
  @PrimaryGeneratedColumn('increment')
  public id: string;

  @Column({ length: 300 })
  public content: string;

  @CreateDateColumn({ type: 'timestamp' })
  public postedOn: Date;
}
