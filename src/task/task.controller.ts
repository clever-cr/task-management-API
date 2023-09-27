import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Req,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './task.interface';
import { CreateTaskDto } from './task.dto';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}
  @Post()
  create(@Body() task: CreateTaskDto): Task {
    return this.taskService.createTask(task);
  }

  @Get()
  getAllTaks(@Req() req: Request): Task[] {
    return this.taskService.getAllTasks();
  }

  @Get('/:id')
  getTask(@Param('id') id: string): Task {
    return this.taskService.getOneTask(id);
  }

  @Delete('/:id')
  deleteTask(@Param('id') id: string): Task[] {
    return this.taskService.deleteTask(id);
  }

  @Patch('/:id')
  updateTask(@Param('id') id: string, @Body() task: CreateTaskDto): Task {
    return this.taskService.updateTask(id, task);
  }

  @Get()
  getFilteredTask(@Query() status){

  }

}
