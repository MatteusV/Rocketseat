import { Task } from '@prisma/client'
import { TaskRespository } from '../../repositories/task-repository'
import { ResourceNotFoundError } from '../errors/resource-not-found-error'

interface CompleteTaskUseCaseRequest {
  id: string
}
interface CompleteTaskUseCaseResponse {
  task: Task
}

export class CompleteTaskUseCase {
  constructor(private taskRepository: TaskRespository) {}

  async execute({
    id,
  }: CompleteTaskUseCaseRequest): Promise<CompleteTaskUseCaseResponse> {
    const task = await this.taskRepository.complete(id)

    if (!task) {
      throw new ResourceNotFoundError()
    }

    return { task }
  }
}
