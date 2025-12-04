import { Injectable } from '@nestjs/common';

@Injectable()
export class DashboardService {
  private readonly users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  ];

  getDashboard() {
    return 'Returning dashboard data';
  }
}
