import connectToDatabase from 'config/mongodb'
import { getSunday } from 'utils'

export default async (req, res) => {
  const { db } = await connectToDatabase()
  const collection = db.collection('CALENDAR_DAYS')
  const params = req.query
  var week = 0
  if (params.Week) {
    week = params.Week
  }

  try {
    var calendar = await collection
      .find({
        $and: [
          { ID_TECHNICAL: parseInt(params.ID_TECHNICAL) },
          { 'CALENDAR.date': {$gte:getSunday(7 * week)} }
        ]
      })
      .toArray()
      res.json(calendar)

  } catch (error) {
    res.status(400).send({ error: 'O servidor não entendeu a requisição pois está com uma sintaxe inválida.' })
  }
}
