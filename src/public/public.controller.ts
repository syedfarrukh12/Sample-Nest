import { Controller, Get } from '@nestjs/common';

@Controller({ path: 'public', version: '1' })
export class PublicController {
  @Get()
  getPublicInfo() {
    return {
      message: 'This is a public endpoint',
      version: 'v1',
      timestamp: new Date().toISOString(),
    };
  }
}
