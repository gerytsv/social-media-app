export class PostDTO {
    public id: string;

    public description: string;

    public photoUrl: string;

    // public keywords: string;

    public postedOn: Date;

    public isPrivate: boolean;

    // public isDeleted: boolean;
    //ShowUserOnPost
    public user: any;

    public comments: any[];
}
