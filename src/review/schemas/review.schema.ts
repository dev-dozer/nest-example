import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ReviewDocument = Review & Document;

@Schema({ timestamps: true, _id: true })
export class Review {
  @Prop()
  name: string;

  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  rating: number;

  @Prop()
  createdAt: Date;
}

export const ReviewSchema = SchemaFactory.createForClass(Review);
