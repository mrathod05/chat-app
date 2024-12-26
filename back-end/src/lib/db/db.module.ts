import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ENV_CONSTANT } from 'src/lib/constants/env';

const { DB_URL } = ENV_CONSTANT;

@Module({
  imports: [MongooseModule.forRoot(DB_URL)],
  exports: [MongooseModule],
})
export class DataBaseModule {}
