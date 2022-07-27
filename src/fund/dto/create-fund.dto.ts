import { IsNotEmpty } from 'class-validator';

export class CreateFundDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  investMinAmt: string;

  @IsNotEmpty()
  desc: string;

  @IsNotEmpty()
  investBal: string;
}
