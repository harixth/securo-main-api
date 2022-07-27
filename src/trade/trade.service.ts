import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTradeDto } from './dto/create-trade.dto';
import { UpdateTradeDto } from './dto/update-trade.dto';
import { Trade, TradeDocument } from './entities/trade.schema';

@Injectable()
export class TradeService {
  constructor(
    @InjectModel(Trade.name) private tradeModel: Model<TradeDocument>,
  ) {}

  create(createTradeDto: CreateTradeDto) {
    const createdTrade = new this.tradeModel(createTradeDto);
    return createdTrade;
  }

  findAll() {
    return this.tradeModel.find().exec();
  }

  findOne(id: number) {
    return this.tradeModel.findById(id);
  }

  update(id: number, updateTradeDto: UpdateTradeDto) {
    return this.tradeModel.findByIdAndUpdate(id, updateTradeDto);
  }

  remove(id: number) {
    return this.tradeModel.findByIdAndDelete(id);
  }
}
