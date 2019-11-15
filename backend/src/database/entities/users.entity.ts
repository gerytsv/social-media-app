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
import { Post } from './posts.entity';
import { Comment } from './comments.entity';
import { History } from './history.entity';
import { Notification } from './notifications.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('increment')
  public id: string;

  @Column({ type: 'nvarchar', length: 30, unique: true })
  public username: string;

  @Column({ type: 'nvarchar' })
  public password: string;

  @Column({ type: 'nvarchar', unique: true})
  public email: string;

  @CreateDateColumn({ type: 'timestamp' })
  public registered: Date;

  @Column({ type: 'boolean', default: false })
  public isDeleted: boolean;

  @ManyToMany(type => Role, { eager: true })
  @JoinTable()
  public roles: Role[];

  @ManyToMany(type => User)
  @JoinTable()
  public followers: Promise<User[]>;

  @ManyToMany(type => User)
  @JoinTable()
  public followed: Promise<User[]>;

  @Column({ type: 'nvarchar', nullable: true})
  public name: string;

  @Column({ type: 'nvarchar', nullable: true})
  public country: string;

  @Column({ type: 'nvarchar', nullable: true})
  public phone: string;

  @Column({ type: 'nvarchar', nullable: true})
  public birthDate: string;

  @Column({ type: 'nvarchar', default: '../../../default-profile-icon.jpg' })
  public avatarUrl: string;

  @OneToMany( type => Post, post => post.user )
  public posts: Promise<Post[]>;

  @OneToMany( type => Comment, comment => comment.user )
  public comments: Promise<Post[]>;

  @OneToMany( type => Notification, notifications => notifications.user )
  public notifications: Promise<Notification[]>;
}
