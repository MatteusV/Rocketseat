import { Task } from '@prisma/client'
import { TaskRespository } from '../../repositories/task-repository'
import { ResourceNotFoundError } from '../errors/resource-not-found-error'

interface UpdateTaskUseCaseRequest {
  id: string
}

interface UpdateTaskUseCaseResponse {
  task: Task
}

export class UpdateTaskUseCase {
  constructor(private taskRepository: TaskRespository) {}

  async execute({
    id,
  }: UpdateTaskUseCaseRequest): Promise<UpdateTaskUseCaseResponse> {
    const task = await this.taskRepository.update(id)

    if (!task) {
      throw new ResourceNotFoundError()
    }

    return { task }
  }
}
