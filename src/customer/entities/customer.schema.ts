import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CustomerDocument = Customer & Document;

@Schema()
export class Customer {
  @Prop()
  name: string;

  @Prop({ unique: true })
  email: string;

  @Prop()
  walletAmount: number;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
