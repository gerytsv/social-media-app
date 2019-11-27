import { Publish } from '../../../transformer/decorators/publish';
import { IsString } from 'class-validator';

export class UpdateInfoDTO {
@IsString()
public email: string;
@IsString()
public name: string;
@IsString()
public description: string;
@IsString()
public country: string;
@IsString()
public avatarUrl: string;
}
