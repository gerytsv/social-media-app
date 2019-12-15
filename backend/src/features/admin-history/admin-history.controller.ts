import { Controller, UseGuards } from '@nestjs/common';
import { AdminHistoryService } from './admin-history.service';
import { Get } from '@nestjs/common';
import { AdminGuard } from '../../common/guards/admin.guard';
import { AuthGuard } from '@nestjs/passport';

@Controller('admin')
export class AdminHistoryController {
  public constructor(private readonly historyService: AdminHistoryService) {}
  @Get('history')
  @UseGuards(AuthGuard('jwt'), AdminGuard)
  public async getFullHistory() {
    return await this.historyService.getHistory();
  }
}
