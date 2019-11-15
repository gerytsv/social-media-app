import { IsEmail, IsString, IsNotEmpty } from 'class-validator';

export class UserLoginDTO {
  @IsString()
  public usernameOrEmail: string;

  @IsString()
  @IsNotEmpty()
  public password: string;
}
