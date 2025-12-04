import { Controller, Get } from '@nestjs/common';
import { DashboardService } from 'src/modules/dashboard/dashboard.service';

@Controller({ path: 'public', version: '1' })
export class PublicController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get()
  // No guard since it's public
  getDashboards() {
    return this.dashboardService.getDashboard();
  }
}
