import { Publish } from '../../../transformer/decorators/publish';
import { IsString, IsOptional, IsEmail } from 'class-validator';

export class UpdateInfoDTO {
@IsEmail()
public email: string;
@IsString()
@IsOptional()
public name: string;
@IsString()
@IsOptional()
public description: string;
@IsString()
@IsOptional()
public country: string;
@IsString()
public avatarUrl: string;
}
