import { NextApiRequest, NextApiResponse } from 'next'
import { artworks } from '../../../utils/artworks'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    res.status(200).json(artworks)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
