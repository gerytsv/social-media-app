import { ShowUserOnPostDTO } from './../../users/models/show-user-on-post.dto';
import { Publish } from '../../../transformer/decorators/publish';

export class ShowPostInfoDTO {
  @Publish()
  public id: string;

  @Publish()
  public description: string;

  @Publish()
  public photoUrl: string;

  @Publish()
  public postedOn: Date;

  @Publish()
  public isPrivate: boolean;

  @Publish(ShowUserOnPostDTO)
  public user: ShowUserOnPostDTO;
}
