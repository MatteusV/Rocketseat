import { TaskRespository } from '../../repositories/task-repository'

interface DeleteTaskUseCaseRequest {
  id: string
}
interface DeleteTaskUseCaseResponse {
  task: null
}
export class DeleteTaskUseCase {
  constructor(private taskRespository: TaskRespository) {}

  async execute({
    id,
  }: DeleteTaskUseCaseRequest): Promise<DeleteTaskUseCaseResponse> {
    const task = await this.taskRespository.delete(id)

    return { task }
  }
}
