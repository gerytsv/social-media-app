import { Publish } from '../../../transformer/decorators/publish';
import { ShowUserInfoDTO } from './show-user-info.dto';

export class ShowDetailedInfoDTO {
    @Publish()
    public id: string;
    @Publish()
    public username: string;
    @Publish()
    public name: string;
    @Publish()
    public email: string;
    @Publish()
    public registered: Date;
    @Publish()
    public description: string;
    @Publish()
    public country: string;
    @Publish()
    public avatarUrl: string;
    @Publish(ShowUserInfoDTO)
    public followers: ShowUserInfoDTO;
    @Publish(ShowUserInfoDTO)
    public followed: ShowUserInfoDTO;
    @Publish()
    public posts: any;
}
