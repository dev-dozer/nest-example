import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type AuthDocument = Auth & Document;

@Schema({ timestamps: true, _id: true })
export class Auth {
  @Prop({ unique: true, required: true })
  email: string;

  @Prop({ required: true })
  passwordHash: string;
}

export const AuthSchema = SchemaFactory.createForClass(Auth);
