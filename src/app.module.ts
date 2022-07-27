import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './customer/customer.module';
import { FundModule } from './fund/fund.module';
import { TradeModule } from './trade/trade.module';

@Module({
  imports: [CustomerModule, MongooseModule.forRoot('mongodb://localhost/nest'), FundModule, TradeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
