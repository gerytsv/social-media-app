import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn } from 'typeorm';
import { User } from './users.entity';
import { Post } from './posts.entity';

@Entity('comments')
export class Comment {
  @PrimaryGeneratedColumn('increment')
  public id: string;

  @Column({ length: 300})
  public content: string;

  @CreateDateColumn({ type: 'timestamp' })
  public postedOn: Date;

  @Column({type: 'boolean', default: false})
  public isDeleted: boolean;

  @ManyToOne(type => User, user => user.comments , {eager : true})
  public user: User;

  @ManyToOne(type => Post, post => post.comments)
  public post: Post;

}
