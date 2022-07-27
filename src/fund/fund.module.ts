import { Module } from '@nestjs/common';
import { FundService } from './fund.service';
import { FundController } from './fund.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Fund, FundSchema } from './entities/fund.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Fund.name, schema: FundSchema }]),
  ],
  controllers: [FundController],
  providers: [FundService],
})
export class FundModule {}
