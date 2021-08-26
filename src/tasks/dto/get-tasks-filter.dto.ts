import { IsIn, IsNotEmpty, IsOptional } from 'class-validator';
import { TaskStatus } from '../task.model';

export class GetTasksFilterDTO {
  @IsOptional()
  @IsIn([TaskStatus.OPEN, TaskStatus.DONE, TaskStatus.IN_PROGRESS])
  status: TaskStatus;

  @IsOptional()
  @IsNotEmpty()
  search: string;
}
