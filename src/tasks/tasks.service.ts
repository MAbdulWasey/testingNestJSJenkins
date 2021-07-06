import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { title } from 'process';
// import { v1 as uuidv1 } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskStatus } from './task-status.enum';
import { Task } from './task.entity';
import { TaskRepository } from './task.repository';

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(TaskRepository)
        private taskRepository: TaskRepository
    ){}
    // private tasks:Task[] = [];
    
    // /**
    //  * 
    //  * @returns tasks array
    //  */
    getTasks(filterDto:GetTasksFilterDto):Promise<Task[]>{
        return this.taskRepository.getTasks(filterDto);
    }
    // getAllTasks():Task[]{
    //     return this.tasks;
    // }

    // getTasksWithFilters(filterDto: GetTasksFilterDto){
    //     const{ status, search }=filterDto;
        
    //     let tasks = this.getAllTasks();
    //     if(status){
    //         tasks=tasks.filter(task =>task.status === status);
    //     }
    //     if(search){
    //         tasks=tasks.filter(task => task.title.includes(search) || task.description.includes(search));
    //     }
    //     return tasks;
    // }
    /**
     * @params id integer
     * @body get id search from db and return that data
     */
    async getTaskById(id: number):Promise<Task> {
        const found = this.taskRepository.findOne(id);

        if(!found){
            throw new NotFoundException(`Task with ID "${id}" Not Found`);
        }
        return found;
    }
    // getTaskById(id:string):Task {
    //     const found= this.tasks.find(task => task.id === id);
    //     if(!found){
    //         throw new NotFoundException(`Task with ID "${id}" Not Found`);
    //     }
    //     return found;

    // }

    async deleteTaskById(id:number):Promise<void>{
        // const found = this.getTaskById(id); 
        // this.tasks= this.tasks.filter(task => task.id !== found.id);
        const result = await this.taskRepository.delete(id);
        if(result.affected === 0){
            throw new NotFoundException(`Task with ID "${id}" Not Found`);
        }
    }

    async createTask(createTaskDto: CreateTaskDto): Promise<Task>{
        return this.taskRepository.createTask(createTaskDto);
    }

    // createTask(createTaskDto:CreateTaskDto):Task{
    //     const {title, description}=createTaskDto;
    //     const task: Task ={
    //         id: uuidv1(),
    //         title,
    //         description,
    //         status: TaskStatus.OPEN,
    //     }

    //     this.tasks.push(task);
    //     return task;
    // }


    async updateTaskStatus(id: number, status:TaskStatus): Promise<Task>{
        const task = await this.getTaskById(id);
        task.status=status;
        await task.save();
        return task;
        // task.status =status;
        // return task;
    }

    
    // updateTaskStatus(id: string, status:TaskStatus): Task{
    //     const task = this.getTaskById(id);
    //     task.status =status;
    //     return task;
    // }
}
