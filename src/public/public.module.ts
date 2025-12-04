import { Module } from '@nestjs/common';
import { PublicController } from './public.controller';
import { PublicV2Controller } from './public-v2.controller';

@Module({
  controllers: [PublicController, PublicV2Controller],
})
export class PublicModule {}
