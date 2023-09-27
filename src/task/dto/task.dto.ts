import { TaskStatus } from '../task.interface';

export class CreateTaskDto {
  title: string;
  description: string;
  label: string;
  status: TaskStatus;
}
