import { Prisma, Task } from '@prisma/client'

export interface TaskRespository {
  create(data: Prisma.TaskCreateInput): Promise<Task>
  findById(id: string): Promise<Task | null>
  delete(id: string): Promise<null>
  complete(id: string): Promise<Task | null>
  update(id: string): Promise<Task | null>
}
