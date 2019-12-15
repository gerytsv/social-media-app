import { Publish } from '../../../transformer/decorators/publish';
import { ShowUserDTO } from '../../users/models/show-user.dto';
export class ShowCommentDTO {
  @Publish()
  public id: string;
  @Publish()
  public content: string;
  @Publish(ShowUserDTO)
  public user: ShowUserDTO;
  @Publish()
  public createdOn: Date;
}
