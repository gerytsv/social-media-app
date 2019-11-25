import { createConnection } from 'typeorm';

import bcrypt from 'bcryptjs';
import { UserRole } from '../../common/enums/user-roles.enum';
import { User } from '../entities/users.entity';
import { Role } from '../entities/roles.entity';
import { Post } from '../entities/posts.entity';

const main = async () => {

  const connection = await createConnection();
  const roleRepo = connection.getRepository(Role);
  const userRepo = connection.getRepository(User);
  const postRepo = connection.getRepository(Post);

  const admin = roleRepo.create({
    name: UserRole[UserRole.Admin],
  });
  const adminRole = await roleRepo.save(admin);
  const basic = roleRepo.create({
    name: UserRole[UserRole.Basic],
  });
  const basicRole = await roleRepo.save(basic);

  const firstAdmin = new User();
  firstAdmin.username = 'Administrator',
  firstAdmin.password = await bcrypt.hash('georgi123!', 10);
  firstAdmin.roles = [adminRole, basicRole];
  firstAdmin.email = 'administrator@abv.bg';
  firstAdmin.followers = Promise.resolve([]);

  userRepo.create(firstAdmin);
  const user = await userRepo.save(firstAdmin);

  const firstPost = new Post();
  firstPost.description = 'My very first post';
  firstPost.user = user;
  firstPost.likes = [];
  firstPost.comments = [];
  firstPost.photoUrl = 'https://imgur.com/vVKl3kB';
  postRepo.create(firstPost);
  const post = await postRepo.save(firstPost);

  await connection.close();

  console.log(`Data seeded successfully`);

};

main()
  .catch(console.log);
