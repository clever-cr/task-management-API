import { TaskStatus } from '../task.interface';

export class taskFilterDto {
  status: TaskStatus;
  keyword: string;
}
