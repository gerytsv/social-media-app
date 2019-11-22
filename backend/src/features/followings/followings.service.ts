import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../database/entities/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FollowingsService {
  public constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}
  public async followUser(requestUserId: string, userId: string) {
    const requestUser = await this.userRepository.findOne({
      where: { id: requestUserId },
    });
    const userToBeFollowed = await this.userRepository.findOne({
      where: { id: userId },
    });
    const userToBeFollowedFollowers = await userToBeFollowed.followers;
    const newFollowersUsers = [ ...userToBeFollowedFollowers, requestUser ];
    userToBeFollowed.followers = Promise.resolve(newFollowersUsers);
    const requestUserFollowedUsers = await requestUser.followed;
    const newrequestUserFollowedUsers = [...requestUserFollowedUsers, userToBeFollowed];
    requestUser.followed = Promise.resolve(newrequestUserFollowedUsers);
    await this.userRepository.save(requestUser);
    return await this.userRepository.save(userToBeFollowed);
  }

  public async unFollowUser(requestUserId: string, userId: string) {
    const requestUser = await this.userRepository.findOne({
        where: { id: requestUserId },
      });
      const userToBeUnFollowed = await this.userRepository.findOne({
        where: { id: userId },
      });
      const followersOfuserToBeUnFollowed = await userToBeUnFollowed.followers;
      const requestUserFollowedUsers = await requestUser.followed;
      const indexOfFollower = followersOfuserToBeUnFollowed.findIndex(user => user.id === requestUserId);
      followersOfuserToBeUnFollowed.splice(indexOfFollower, 1);
      const indexOfFollowed = requestUserFollowedUsers.findIndex(user => user.id === requestUserId);
      requestUserFollowedUsers.splice(indexOfFollowed, 1);
      requestUser.followed = Promise.resolve(requestUserFollowedUsers);
      this.userRepository.save(requestUser);
      userToBeUnFollowed.followers = Promise.resolve(followersOfuserToBeUnFollowed);
      return await this.userRepository.save(userToBeUnFollowed);
  }

  public getUserFollowings(userId: string) {
    const user = this.userRepository.findOne({where: { id: userId, isDeleted: false},
    relations: ['followers', 'posts', 'followed']});
    return user;
  }
}
