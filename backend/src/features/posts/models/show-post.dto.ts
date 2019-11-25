import { ShowUserOnPost } from './../../users/models/show-user-on-post.dto';
import { Publish } from '../../../transformer/decorators/publish';
import { ShowUsernameDTO } from '../../users/models/show-username.dto';
import { ShowAvatarUrlDTO } from '../../users/models/show-avatarUrl.dto';
import { User } from '../../../database/entities/users.entity';
import { Transform } from 'class-transformer';
import moment = require('moment');
import { SystemError } from '../../../common/exceptions/system.error';
export class ShowPostDTO {
  @Publish()
  public id: string;

  @Publish()
  public description: string;

  @Publish()
  public photoUrl: string;

  // @Publish()
  // public keywords: string;

  @Publish()
  public location: string;

  @Publish()
  public postedOn: Date;

  // @Publish()
  // public isPrivate: boolean;

  // @Publish()
  // public isDeleted: boolean;

  @Publish(ShowUserOnPost)
  public user: User;
}
