export class PostDTO {
  public id: string;

  public description: string;

  public photoUrl: string;

  public postedOn: Date;

  public isPrivate: boolean;

  public user: any;

  public comments: any[];
}
