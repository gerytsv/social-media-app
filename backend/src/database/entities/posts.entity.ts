import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, Like, CreateDateColumn } from 'typeorm';
import { User } from './users.entity';
import { Comment } from './comments.entity';
import { PostLike } from './posts-likes.entity';

@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ length: 300})
  public description: string;

  @Column({ type: 'nvarchar'})
  public photoUrl: string;

  @Column({ type: 'nvarchar', nullable: true})
  public keywords: string;

  @Column({ type: 'nvarchar', nullable: true})
  public location: string;

  @CreateDateColumn({ type: 'timestamp' })
  public postedOn: Date;

  @Column({type: 'boolean', default: false})
  public isPrivate: boolean;

  @Column({type: 'boolean', default: false})
  public isDeleted: boolean;

  @ManyToOne(type => User, user => user.posts , {eager : true})
  public user: User;

  @OneToMany(type => Comment, comm => comm.post, {eager : true} )
  public comments: Comment[];

  @OneToMany(type => PostLike, like => like.post, {eager : true} )
  public likes: PostLike[];

}