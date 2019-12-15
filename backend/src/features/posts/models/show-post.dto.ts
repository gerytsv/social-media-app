import { ShowUserOnPostDTO } from './../../users/models/show-user-on-post.dto';
import { Publish } from '../../../transformer/decorators/publish';
import { PostLike } from '../../../database/entities/posts-likes.entity';
import { Comment } from '@babel/types';
import { ShowCommentDTO } from '../../comments/models/show-comment.dto';
import { ShowLikesDTO } from '../../likes/models/show-likes.dto';
export class ShowPostDTO {
  @Publish()
  public id: string;

  @Publish()
  public description: string;

  @Publish()
  public photoUrl: string;

  @Publish(ShowLikesDTO)
  public likes: PostLike[];

  @Publish()
  public postedOn: Date;

  @Publish()
  public isPrivate: boolean;

  @Publish(ShowUserOnPostDTO)
  public user: ShowUserOnPostDTO;

  @Publish(ShowCommentDTO)
  public comments: Comment[];
}
