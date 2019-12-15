import { ShowUserInfoDTO } from './show-user-info.dto';

export class ShowDetailedInfoDTO {
  public id: string;
  public username: string;
  public name: string;
  public email: string;
  public registered: Date;
  public description: string;
  public country: string;
  public avatarUrl: string;
  public followers: ShowUserInfoDTO[];
  public followed: ShowUserInfoDTO[];
  public posts: any[];
}
