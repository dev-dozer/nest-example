import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthSchema } from './schemas/auth.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'auth_model',
        schema: AuthSchema,
      },
    ]),
  ],
  controllers: [AuthController],
})
export class AuthModule {}
