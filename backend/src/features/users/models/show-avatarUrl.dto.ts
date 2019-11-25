import { Publish } from '../../../transformer/decorators/publish';

export class ShowAvatarUrlDTO {
  @Publish()
  public avatarUrl: string;
}
