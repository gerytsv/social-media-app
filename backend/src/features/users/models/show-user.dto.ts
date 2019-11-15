import { Publish } from '../../../transformer/decorators/publish';

export class ShowUserDTO {
    @Publish()
    public id: string;
    @Publish()
    public username: string;
    @Publish()
    public email: string;
}
