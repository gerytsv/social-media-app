import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, Like, CreateDateColumn } from 'typeorm';
import { User } from './users.entity';
import { Post } from './posts.entity';

@Entity('post-likes')
export class PostLike {
  @PrimaryGeneratedColumn('increment')
  public id: string;

  @CreateDateColumn({ type: 'timestamp' })
  public postedOn: Date;

  @Column({type: 'boolean', default: false})
  public isLiked: boolean;

  @ManyToOne(type => User, user => user.comments , {eager : true})
  public user: User;

  @ManyToOne(type => Post, post => post.comments)
  public post: Post;

}
