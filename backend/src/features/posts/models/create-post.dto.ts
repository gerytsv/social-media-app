import { IsString, IsBoolean, IsNumber } from 'class-validator';
import { Transform } from 'class-transformer';
import moment from 'moment';
import { SystemError } from '../../../common/exceptions/system.error';
import { Publish } from '../../../transformer/decorators/publish';
import { User } from '../../../database/entities/users.entity';
import { ShowUserOnPost } from '../../users/models/show-user-on-post.dto';

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
