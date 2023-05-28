import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryTaskRepository } from '../../repositories/in-memory/in-memory-task-repository'
import { CreateTaskUseCase } from './create'

let taskRepository: InMemoryTaskRepository
let sut: CreateTaskUseCase

describe('Create Task Use Case', () => {
  beforeEach(() => {
    taskRepository = new InMemoryTaskRepository()
    sut = new CreateTaskUseCase(taskRepository)
  })

  it('should be able to create task', async () => {
    const { task } = await sut.execute({
      title: 'teste',
      description: 'teste do teste',
      userId: '2-39i1pmsdj0pqwjḱw',
    })

    expect(task.id).toEqual(expect.any(String))
  })
})
