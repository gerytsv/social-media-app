import { Publish } from '../../../transformer/decorators/publish';
export class PostDTO {
  @Publish()
  public id: string;

  @Publish()
  public description: string;

  @Publish()
  public photoUrl: string;

  @Publish()
  public keywords: string;

  @Publish()
  public location: string;

  @Publish()
  public postedOn: Date;

  @Publish()
  public isPrivate: boolean;
}
