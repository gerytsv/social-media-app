import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { History } from '../../database/entities/history.entity';

@Injectable()
export class AdminHistoryService {
  public constructor(
    @InjectRepository(History)
    private readonly historyRepository: Repository<History>,
  ) {}

  public async getHistory() {
    return await this.historyRepository.find({});
  }
}
