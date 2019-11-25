import { Module } from '@nestjs/common';
import { PhotoStorageService } from './photo-storage.service';
import { PhotoStorageController } from './photo-storage.controller';

@Module({
  imports: [],
  providers: [PhotoStorageService],
  controllers: [PhotoStorageController],
})
export class PhotoStorageModule {}
