import { Task } from '@prisma/client'
import { TaskRespository } from '../../repositories/task-repository'

interface CreateTaskUseCaseRequest {
  title: string
  description: string
  userId: string
}

interface CreateTaskUseCaseResponse {
  task: Task
}

export class CreateTaskUseCase {
  constructor(private taskRepository: TaskRespository) {}

  async execute({
    title,
    description,
    userId,
  }: CreateTaskUseCaseRequest): Promise<CreateTaskUseCaseResponse> {
    const task = await this.taskRepository.create({
      title,
      description,
      userId,
    })

    return { task }
  }
}
