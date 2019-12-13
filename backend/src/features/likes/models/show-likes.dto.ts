import { Publish } from '../../../transformer/decorators/publish';
import { User } from '../../../database/entities/users.entity';
import { ShowUserOnPostDTO } from '../../users/models/show-user-on-post.dto';

export class ShowLikesDTO {
  @Publish()
  public id: string;
  @Publish()
  public postedOn: Date;
  @Publish()
  public isLiked: boolean;
  @Publish(ShowUserOnPostDTO)
  public user: User;
}
