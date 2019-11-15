import { IsString, IsEmail } from 'class-validator';

export class CreateUserDTO {
    @IsString()
    public username: string;
    @IsString()
    public password: string;
    @IsEmail()
    public email: string;
}
