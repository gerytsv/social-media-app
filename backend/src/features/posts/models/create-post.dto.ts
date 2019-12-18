import { IsString, IsBoolean, IsOptional } from 'class-validator';

export class CreatePostDTO {
  @IsOptional()
  @IsString()
  public description: string;

  @IsString()
  public photoUrl: string;

  @IsBoolean()
  public isPrivate: boolean;
}
