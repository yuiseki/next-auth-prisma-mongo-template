// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const users = await prisma.user.findMany({
    take: 100,
    orderBy: {
      updatedAt: 'desc',
    },
  })
  res.status(200).json(users)
}

export default handler
