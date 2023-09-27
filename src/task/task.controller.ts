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
import { Task, TaskStatus } from './task.interface';
import { CreateTaskDto } from './dto/task.dto';
import { taskFilterDto } from './dto/taskFilter.dto';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}
  @Post()
  create(@Body() task: CreateTaskDto): Task {
    return this.taskService.createTask(task);
  }

  @Get()
  getAllTaks(@Query() filteredTask: taskFilterDto): Task[] {
    if (Object.keys(filteredTask).length) {
      return this.taskService.searchTask(filteredTask);
    } else {
      return this.taskService.getAllTasks();
    }
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
}
