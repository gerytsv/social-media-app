import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../database/entities/users.entity';
import { Repository } from 'typeorm';
import { Role } from '../../database/entities/roles.entity';
import { UserLoginDTO } from './models/login-user.dto';
import { SystemError } from '../../common/exceptions/system.error';
import { CreateUserDTO } from './models/create-user.dto';
import { UserRole } from '../../common/enums/user-roles.enum';
import { JwtPayload } from '../../common/types/jwt-payload';
import bcrypt from 'bcryptjs';
import { validateEmail } from '../../common/util-services/is-Email';

@Injectable()
export class UsersService {
  public constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(Role) private readonly rolesRepository: Repository<Role>,
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
      history: Promise.resolve([]),
      notifications: Promise.resolve([]),
    };

    const userEntity = this.userRepository.create(user);
    return await this.userRepository.save(userEntity);
  }

  public async delete(userId: string) {
    const user = await this.userRepository.findOne({
      where: { id: userId, isDeleted: false },
    });
    if (!user) {
      throw new SystemError('The user is not found', 404);
    }

    user.isDeleted = true;
    await this.userRepository.save(user);
    return { messege: 'User deleted succesfully' };
  }

  public async validate(payload: JwtPayload): Promise<User> {
    return await this.userRepository.findOne({ username: payload.username });
  }
}
