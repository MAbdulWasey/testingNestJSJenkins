import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskStatusValidationPipe } from './pipes/task-status-validation.pipe';
import { TaskStatus } from './task-status.enum';
import { Task } from './task.entity';
import { TasksService } from './tasks.service';
// its is task 

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService){}
    
    @Get()
    getTasks(@Query(ValidationPipe) filterDto: GetTasksFilterDto):Promise<Task[]>{
        return this.tasksService.getTasks(filterDto);
    }
    // @Get()
    // getTasks(@Query(ValidationPipe) filterDto: GetTasksFilterDto): Task[]{
    //     if(Object.keys(filterDto).length){
    //         return this.tasksService.getTasksWithFilters(filterDto);
    //     }else{
    //         return this.tasksService.getAllTasks(); 
    //     }
    // }

    @Get('/:id')
    getTaskById(@Param('id', ParseIntPipe) id: number):Promise<Task>{
        return this.tasksService.getTaskById(id);
    }

    @Delete('/:id')
    deleteTaskById(@Param('id',ParseIntPipe) id: number):string{
        this.tasksService.deleteTaskById(id);
        return "deleted";
    }

    @Post()
    @UsePipes(ValidationPipe)
    createTask(@Body() createTaskDto: CreateTaskDto):Promise<Task>{
        return this.tasksService.createTask(createTaskDto);
    }
    @Patch('/:id/status')
    updateTaskStatus(
        @Param('id', ParseIntPipe) id:number,
        @Body('status',TaskStatusValidationPipe) status:TaskStatus
    ):Promise<Task>{
        return this.tasksService.updateTaskStatus(id, status);
    }
}
