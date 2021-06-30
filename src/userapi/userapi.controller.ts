import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserapiService } from './userapi.service';
import { CreateUserapiDto } from './dto/create-userapi.dto';
import { UpdateUserapiDto } from './dto/update-userapi.dto';
import { UserapI } from './entities/userapi.interface';
import { Observable } from 'rxjs';

@Controller('userapi')
export class UserapiController {
  constructor(private readonly userapiService: UserapiService) {}

  @Post()
    add(@Body() user:UserapI): Observable<UserapI> {
        return this.userapiService.add(user);
    }

    @Get()
    findAll():Observable<UserapI[]>{
        return this.userapiService.findAll();
    }
  // @Post()
  // create(@Body() createUserapiDto: CreateUserapiDto) {
  //   return this.userapiService.create(createUserapiDto);
  // }

  // @Get()
  // findAll() {
  //   return this.userapiService.findAll();
  // }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userapiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserapiDto: UpdateUserapiDto) {
    return this.userapiService.update(+id, updateUserapiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userapiService.remove(+id);
  }
}
