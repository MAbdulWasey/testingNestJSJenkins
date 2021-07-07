import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserapiModule } from './userapi/userapi.module';
import { CatsController } from './cats/cats.controller';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true}),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      autoLoadEntities: true,
      synchronize:true,
    }),
    UserapiModule,
    TasksModule
  ],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule {}
// a coment to check if it work jenkis pull and build
