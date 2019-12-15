import { Publish } from '../../../transformer/decorators/publish';
export class ShowUsernameDTO {
  @Publish()
  public username: string;
}
