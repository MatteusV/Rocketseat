import { beforeEach, describe, expect, it } from 'vitest'
import { GetTaskUseCase } from './get-task'
import { InMemoryTaskRepository } from '../../repositories/in-memory/in-memory-task-repository'

let taskRespository: InMemoryTaskRepository
let sut: GetTaskUseCase

describe('Get User Profile Use Case', () => {
  beforeEach(() => {
    taskRespository = new InMemoryTaskRepository()
    sut = new GetTaskUseCase(taskRespository)
  })

  it('should be able to get task', async () => {
    const createdTask = await taskRespository.create({
      title: 'teste',
      description: 'teste',
      userId: 'açskdjapisjd',
    })

    const { task } = await sut.execute({
      id: createdTask.id,
    })

    expect(task.title).toEqual('teste')
  })
})
