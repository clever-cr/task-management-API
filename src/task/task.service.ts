import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.interface';
import { CreateTaskDto } from './task.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TaskService {
  private tasks: Task[] = [];

  createTask(task: CreateTaskDto): Task {
    const updateTask = { ...task, id: uuidv4(), status: TaskStatus.OPEN };
    this.tasks.push(updateTask);
    return updateTask;
  }
  
  getAllTasks() {
    return this.tasks;
  }

  getOneTask(id: string): Task {
    return this.tasks.find((task) => task.id === id);
  }

  deleteTask(id: string): Task[] {
    return this.tasks.filter((task) => task.id !== id);
  }

  updateTask(id: string, task: CreateTaskDto): Task {
    const OneTask = this.getOneTask(id);
    OneTask.title = task.title;
    OneTask.description = task.description;
    OneTask.label = task.label;
    OneTask.status = task.status;
    return OneTask;
  }
}
