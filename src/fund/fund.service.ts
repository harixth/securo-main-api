import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateFundDto } from './dto/create-fund.dto';
import { UpdateFundDto } from './dto/update-fund.dto';
import { Fund, FundDocument } from './entities/fund.schema';

@Injectable()
export class FundService {
  constructor(@InjectModel(Fund.name) private fundModel: Model<FundDocument>) {}

  create(createFundDto: CreateFundDto) {
    const createdFund = new this.fundModel(createFundDto);
    return createdFund.save();
  }

  findAll() {
    return this.fundModel.find().exec();
  }

  findOne(id: number) {
    return this.fundModel.findById(id);
  }

  update(id: number, updateFundDto: UpdateFundDto) {
    return this.fundModel.findByIdAndUpdate(id, updateFundDto);
  }

  remove(id: number) {
    return this.fundModel.findByIdAndDelete(id);
  }
}
