import { ShowUserOnPost } from './../../users/models/show-user-on-post.dto';
import { Publish } from '../../../transformer/decorators/publish';
import { User } from '../../../database/entities/users.entity';
import moment = require('moment');
export class ShowPostDTO {
  @Publish()
  public id: string;

  @Publish()
  public description: string;

  @Publish()
  public photoUrl: string;

  // @Publish()
  // public keywords: string;

  // @Publish()
  // public location: string;

  @Publish()
  public postedOn: Date;

  // @Publish()
  // public isPrivate: boolean;

  // @Publish()
  // public isDeleted: boolean;

  @Publish(ShowUserOnPost)
  public user: User;

  @Publish()
  public comments: any;
}
