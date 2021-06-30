import { Module } from '@nestjs/common';
import { UserapiService } from './userapi.service';
import { UserapiController } from './userapi.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Userapi } from './entities/userapi.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([Userapi])
  ],
  controllers: [UserapiController],
  providers: [UserapiService]
})
export class UserapiModule {}
