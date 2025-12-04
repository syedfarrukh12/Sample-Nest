import { Controller, Get } from '@nestjs/common';

@Controller({ path: 'public', version: '2' })
export class PublicV2Controller {
  @Get()
  getPublicInfo() {
    return {
      message: 'This is a public endpoint (v2)',
      version: 'v2',
      timestamp: new Date().toISOString(),
      features: ['enhanced', 'improved'],
    };
  }
}
