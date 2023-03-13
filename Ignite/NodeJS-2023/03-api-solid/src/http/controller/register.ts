import { prisma } from '@/lib/prisma'
import { registerUseCases } from '@/use-cases/register'
import { hash } from 'bcryptjs'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function register(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
  })

  const { name, email, password } = registerBodySchema.parse(request.body)

  try {
    await registerUseCases({
      name,
      email,
      password,
    })
  } catch (error) {
    return reply.code(409).send({
      message: 'Email already exists',
    })
  }

  return reply.status(201).send()
}
