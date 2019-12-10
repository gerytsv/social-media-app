import { IsString, IsBoolean } from 'class-validator';

export class CreatePostDTO {
  @IsString()
  public description: string;

  // @IsString()
  // public keywords: string;

  @IsString()
  public photoUrl: string;


  @IsBoolean()
  public isPrivate: boolean;
}
