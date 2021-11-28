// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const user = await prisma.user.findMany()
  res.status(200).json(user)
}

export default handler
