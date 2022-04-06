import { Module } from '@nestjs/common';
import { TopPageController } from './top-page.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TopPageSchema } from './schemas/top-page.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'top_page_model',
        schema: TopPageSchema,
      },
    ]),
  ],
  controllers: [TopPageController],
})
export class TopPageModule {}
