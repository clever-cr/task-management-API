import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [TaskModule, UserModule],
})
export class AppModule {}
