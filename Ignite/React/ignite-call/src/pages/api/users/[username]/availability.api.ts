import { prisma } from '@/src/lib/prisma'
import dayjs from 'dayjs'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const username = String(req.query.username)
  const { date } = req.query

  if (!date) {
    return res.status(400).json({ message: 'Date not provide.' })
  }

  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  })
  if (!user) {
    return res.status(400).json({ message: 'User does not exist.' })
  }

  const refereceDate = dayjs(String(date))
  const isPastDate = refereceDate.endOf('day').isBefore(new Date())

  if (isPastDate) {
    return res.json({ possibleTime: [], availableTimes: [] })
  }

  const userAvailability = await prisma.userTimeInterval.findFirst({
    where: {
      user_id: user.id,
      week_day: refereceDate.get('day'),
    },
  })

  if (!userAvailability) {
    return res.json({ possibleTime: [], availableTimes: [] })
  }

  const { time_start_in_minutes, time_end_in_minutes } = userAvailability

  const startHour = time_start_in_minutes / 60 // 10
  const endHour = time_end_in_minutes / 60 // 19

  const possibleTime = Array.from({ length: endHour - startHour }).map(
    (_, i) => {
      return startHour + i
    },
  )

  const blockedTimes = await prisma.scheduling.findMany({
    select: { date: true },
    where: {
      user_id: user.id,
      date: {
        gte: refereceDate.set('hour', startHour).toDate(),
        lte: refereceDate.set('hour', endHour).toDate(),
      },
    },
  })

  const availableTimes = possibleTime.filter((time) => {
    return !blockedTimes.some(
      (blockedTime) => blockedTime.date.getHours() === time,
    )
  })

  return res.json({ possibleTime, availableTimes })
}
