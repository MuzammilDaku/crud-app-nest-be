import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

@Module({
  imports: [UserModule,ConfigModule.forRoot(),MongooseModule.forRoot('mongodb://localhost:27017/new-db')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
