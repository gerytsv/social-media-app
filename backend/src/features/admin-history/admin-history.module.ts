import { Module } from '@nestjs/common';
import { AdminHistoryService } from './admin-history.service';
import { AdminHistoryController } from './admin-history.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { History } from '../../database/entities/history.entity';

@Module({
  imports: [TypeOrmModule.forFeature([History])],
  providers: [AdminHistoryService],
  controllers: [AdminHistoryController]
})
export class AdminHistoryModule {}
