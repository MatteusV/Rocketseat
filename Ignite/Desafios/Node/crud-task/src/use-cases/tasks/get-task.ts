import { Task } from '@prisma/client'
import { TaskRespository } from '../../repositories/task-repository'
import { ResourceNotFoundError } from '../errors/resource-not-found-error'

interface GetTaskUseCaseRequest {
  id: string
}

interface GetTaskUseCaseResponse {
  task: Task
}

export class GetTaskUseCase {
  constructor(private taskRepository: TaskRespository) {}

  async execute({
    id,
  }: GetTaskUseCaseRequest): Promise<GetTaskUseCaseResponse> {
    const task = await this.taskRepository.findById(id)

    if (!task) {
      throw new ResourceNotFoundError()
    }

    return { task }
  }
}
