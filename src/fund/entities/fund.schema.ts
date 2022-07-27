import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FundDocument = Fund & Document;

@Schema()
export class Fund {
  @Prop()
  name: string;

  @Prop()
  investMinAmt: number;

  @Prop()
  desc: string;

  @Prop()
  investBal: number;
}

export const FundSchema = SchemaFactory.createForClass(Fund);
