import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn } from 'typeorm';
import { User } from './users.entity';

@Entity('notifications')
export class Notification {
  @PrimaryGeneratedColumn('increment')
  public id: string;

  @Column({ length: 300})
  public content: string;

  @CreateDateColumn({ type: 'timestamp' })
  public postedOn: Date;

  @ManyToOne(type => User, user => user.notifications , {eager : true})
  public user: User;

  @Column({ type: 'boolean'})
  public isRead: boolean;

  @Column({ type: 'nvarchar', nullable: true})
  public followedByUserId: string;

  @Column({ type: 'nvarchar', nullable: true})
  public postId: string;

}
