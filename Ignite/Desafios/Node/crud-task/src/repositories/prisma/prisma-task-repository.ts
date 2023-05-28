import { Prisma } from '@prisma/client'
import { TaskRespository } from '../task-repository'
import { prisma } from '../../lib/prisma'

export class PrismaTaskRepository implements TaskRespository {
  async create(data: Prisma.TaskCreateInput) {
    const task = await prisma.task.create({
      data,
    })

    return task
  }

  async findById(id: string) {
    const task = await prisma.task.findUnique({
      where: {
        id,
      },
    })

    return task
  }

  async delete(id: string) {
    await prisma.task.delete({
      where: {
        id,
      },
    })

    return null
  }

  async complete(id: string) {
    const task = await prisma.task.update({
      where: {
        id,
      },
      data: {
        completed_at: new Date(),
      },
    })

    return task
  }

  async update(id: string) {
    const task = await prisma.task.update({
      where: {
        id,
      },
      data: {
        updated_at: new Date(),
      },
    })

    return task
  }
}
