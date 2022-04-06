import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from './schemas/product.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'ProductModel',
        schema: ProductSchema,
      },
    ]),
  ],
  controllers: [ProductController],
})
export class ProductModule {}
