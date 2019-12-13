import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../database/entities/users.entity';
import { Repository, getRepository } from 'typeorm';
import { Role } from '../../database/entities/roles.entity';
import { UserLoginDTO } from './models/login-user.dto';
import { SystemError } from '../../common/exceptions/system.error';
import { CreateUserDTO } from './models/create-user.dto';
import { UserRole } from '../../common/enums/user-roles.enum';
import { History } from '../../database/entities/history.entity';
import { JwtPayload } from '../../common/types/jwt-payload';
import bcrypt from 'bcryptjs';
import { validateEmail } from '../../common/util-services/is-Email';
import { isAdmin } from '../../common/util-services/is-admin';

@Injectable()
export class UsersService {
  public constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(Role) private readonly rolesRepository: Repository<Role>,
    @InjectRepository(History)
    private readonly historyRepository: Repository<History>,
  ) {}

  public async signIn(user: UserLoginDTO): Promise<User> {
    let foundUser: User;
    if (validateEmail(user.usernameOrEmail)) {
      foundUser = await this.userRepository.findOne({
        where: {
          email: user.usernameOrEmail,
        },
      });
    } else {
      foundUser = await this.userRepository.findOne({
        where: {
          username: user.usernameOrEmail,
        },
      });
    }
    if (!foundUser) {
      throw new SystemError('No such user!', 404);
    }
    if (await bcrypt.compare(user.password, foundUser.password)) {
      return foundUser;
    } else {
      throw new SystemError('Invalid password!', 400);
    }
  }

  public async allUsers() {
    return await this.userRepository.find({ where: { isDeleted: false } });
  }

  public async createUser(body: CreateUserDTO) {
    const hashedPassword = await bcrypt.hash(body.password, 10);

    const usernameExists = await this.userRepository.findOne({
      where: { username: body.username, isDeleted: false },
    });
    const emailExists = await this.userRepository.findOne({
      where: { email: body.email, isDeleted: false },
    });

    if (usernameExists) {
      throw new SystemError(
        `Account with username ${body.username} already exist`,
        400,
      );
    }
    if (emailExists) {
      throw new SystemError(
        `Account with email ${body.email} already exist`,
        400,
      );
    }

    const user = {
      username: body.username,
      password: hashedPassword,
      roles: [
        await this.rolesRepository.findOne({ where: { name: UserRole.Basic } }),
      ],
      email: body.email,
      followers: Promise.resolve([]),
      followed: Promise.resolve([]),
      posts: Promise.resolve([]),
      comments: Promise.resolve([]),
    };

    const userEntity = this.userRepository.create(user);
    const savedUser = await this.userRepository.save(userEntity);
    if (savedUser) {
      const adminHistoryEntity = this.historyRepository.create();
      adminHistoryEntity.content = `Account with username ${
        body.username
      } has been created`;
      this.historyRepository.save(adminHistoryEntity);
    }
    return savedUser;
  }

  public async delete(userId: string, requestUserId: string) {
    const user = await this.userRepository.findOne({
      where: { id: userId, isDeleted: false },
      relations: [ 'followed', 'followers', 'posts', 'comments', 'likes']
    });
    if (!user) {
      throw new SystemError('The user is not found', 404);
    }
    const requestUser = await this.userRepository.findOne({
      where: { id: requestUserId, isDeleted: false },
    });
    if (!requestUser) {
      throw new SystemError('The user is not found', 404);
    }
    if (!isAdmin(requestUser)) {
      if (requestUser.username !== user.username) {
        throw new SystemError('Not owner of the account', 400);
      }
    }

    user.isDeleted = true;
    user.followed = Promise.resolve([]);
    user.followers = Promise.resolve([]);
    user.likes = Promise.resolve([]);
    user.posts = Promise.resolve([]);
    user.comments = Promise.resolve([]);

    const deletedUser = await this.userRepository.save(user);
    if (deletedUser) {
      const adminHistoryEntity = this.historyRepository.create();
      adminHistoryEntity.content = `Account with username ${
        user.username
      } has been deleted`;
      this.historyRepository.save(adminHistoryEntity);
    }
    return { message: 'User deleted succesfully' };
  }

  public async validate(payload: JwtPayload): Promise<User> {
    return await this.userRepository.findOne({ username: payload.username });
  }

  public async getUserInfo(username: string) {
    const user = await getRepository(User)
      .createQueryBuilder('user')
      .where('user.username = :username' , {username})
      .leftJoinAndSelect(
        'user.followers',
        'followers',
        'followers.isDeleted = false',
      )
      .leftJoinAndSelect(
        'user.followed',
        'followed',
        'followed.isDeleted = false',
      )
      .leftJoinAndSelect('user.posts', 'posts', 'posts.isDeleted = false')
      .getOne();

    if (!user) {
      throw new SystemError('The user is not found', 404);
    }

    return user;
  }

  public async updateUserInfo(
    userId: string,
    email: string,
    name: string,
    country: string,
    description: string,
    avatarUrl: string,
    requestUserId: string,
  ) {
    const user = await this.userRepository.findOne({
      where: { id: userId, isDeleted: false },
    });
    const requestUser = await this.userRepository.findOne({
      where: { id: requestUserId, isDeleted: false },
    });
    if (!user) {
      throw new SystemError('User not found', 404);
    }
    if (!requestUser) {
      throw new SystemError('User not found', 404);
    }
    if (!isAdmin(requestUser)) {
      if (requestUser.username !== user.username) {
        throw new SystemError('Not owner of the account', 400);
      }
    }
    user.email = email;
    user.name = name;
    user.country = country;
    user.description = description;
    if (avatarUrl) {
      user.avatarUrl = avatarUrl;
    }
    return await this.userRepository.save(user);
  }
}
