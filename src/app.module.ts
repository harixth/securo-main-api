import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './customer/customer.module';
import { FundModule } from './fund/fund.module';

@Module({
  imports: [CustomerModule, MongooseModule.forRoot('mongodb://localhost/nest'), FundModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
