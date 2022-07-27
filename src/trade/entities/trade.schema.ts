import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TradeDocument = Trade & Document;

@Schema()
export class Trade {
  @Prop()
  startBal: string;

  @Prop()
  endBal: number;

  @Prop()
  customerID: string;

  @Prop()
  trnstAmt: number;

  @Prop()
  trnstDate: Date;

  @Prop()
  trnstType: number;
}

export const TradeSchema = SchemaFactory.createForClass(Trade);
