import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthSchema } from './auth.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'AuthModel',
        schema: AuthSchema,
      },
    ]),
  ],
  controllers: [AuthController],
})
export class AuthModule {}
