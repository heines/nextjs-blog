import  { NextApiRequest, NextApiResponse } from 'next';

export default function handler({
  req,
  res
}: {
  req: NextApiRequest
  res: NextApiResponse
}) => {
  res.status(200).json({ text: 'Hello' })
}
