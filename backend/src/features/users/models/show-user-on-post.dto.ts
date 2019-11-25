import { Publish } from '../../../transformer/decorators/publish';

export class ShowUserOnPost {
  @Publish()
  public username: string;

  @Publish()
  public avatarUrl: string;
}
