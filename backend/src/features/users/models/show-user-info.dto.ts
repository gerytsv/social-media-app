import { Publish } from '../../../transformer/decorators/publish';

export class ShowUserInfoDTO {
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
    @Publish()
    public followersCount: number;
    @Publish()
    public followedCount: number;
    @Publish()
    public postsCount: number;
}
