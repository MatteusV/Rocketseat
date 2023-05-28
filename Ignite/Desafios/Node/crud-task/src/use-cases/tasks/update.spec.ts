import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryTaskRepository } from '../../repositories/in-memory/in-memory-task-repository'
import { UpdateTaskUseCase } from './update'

let taskRepository: InMemoryTaskRepository
let sut: UpdateTaskUseCase

describe('Complete Task Use Case', () => {
  beforeEach(() => {
    taskRepository = new InMemoryTaskRepository()
    sut = new UpdateTaskUseCase(taskRepository)
  })

  it('must be able to complete a task', async () => {
    const createdTask = await taskRepository.create({
      title: 'teste',
      description: 'teste',
      userId: 'matteus',
    })

    const { task } = await sut.execute(createdTask.id)

    expect(task.completed_at).toEqual(expect.any(Date))
  })
})
