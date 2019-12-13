import { Publish } from '../../../transformer/decorators/publish';

export class ShowUserOnPostDTO {
  @Publish()
  public username: string;

  @Publish()
  public avatarUrl: string;
}
