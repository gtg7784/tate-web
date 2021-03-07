import { NextApiRequest, NextApiResponse } from 'next'
import { artworks } from 'utils/artworks'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = _req.query;
    
    const artwork = artworks[parseInt(id as string)];

    if ((typeof artwork === "object" || typeof artwork === 'function') && (artwork !== null)) {
      res.status(200).json(artwork)
      return;
    }

    throw new Error(`Cannot find ${id}th artwork data`)

  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
