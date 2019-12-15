import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Request,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { PhotoStorageService } from './photo-storage.service';

@Controller('photos')
export class PhotoStorageController {
  public constructor(
    private readonly photoStorageService: PhotoStorageService,
  ) {}

  @Get(':id')
  public async getPhotoById(@Param('id') photoId: string) {
    return await this.photoStorageService.getPhoto(photoId);
  }

  @Post('avatar')
  @UseInterceptors(FileInterceptor('file'))
  public async uploadPhoto(@UploadedFile() file: any) {
    return await this.photoStorageService.uploadPhoto(file);
  }

  @Post('post')
  public async uploadPhotoForPost(@Body() body: any) {
    return await this.photoStorageService.uploadPhotoForPost(body);
  }
}
