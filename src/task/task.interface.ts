export interface Task {
  id: string;
  title: string;
  description: string;
  label: string;
  status: TaskStatus;
}

export enum TaskStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'PROGRESS',
  DONE = 'DONE',
}
