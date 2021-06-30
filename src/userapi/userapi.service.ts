import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { CreateUserapiDto } from './dto/create-userapi.dto';
import { UpdateUserapiDto } from './dto/update-userapi.dto';
import { Userapi } from './entities/userapi.entity';
import { UserapI } from './entities/userapi.interface';

@Injectable()
export class UserapiService {
  // create(createUserapiDto: CreateUserapiDto) {
  //   return 'This action adds a new userapi';
  // }

  // findAll() {
  //   return `This action returns all userapi`;
  // }
  constructor(
      @InjectRepository(Userapi)
      private userRepository:Repository<Userapi>
  ){}
  add(user: UserapI):Observable<UserapI>{
    return from(this.userRepository.save(user));
  }
  findAll():Observable<UserapI[]>{
      return from(this.userRepository.find());
  }

  findOne(id: number) {
    return `This action returns a #${id} userapi`;
  }

  update(id: number, updateUserapiDto: UpdateUserapiDto) {
    return `This action updates a #${id} userapi`;
  }

  remove(id: number) {
    return `This action removes a #${id} userapi`;
  }
}
