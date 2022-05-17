import connectToDatabase from 'config/mongodb'
import { CALENDAR_DAYS } from 'constants/temporary'
import { getInitialWeek, getSunday,getCalendarDays } from 'utils'

export default async (req, res) => {
  const { db } = await connectToDatabase()
  const collection = db.collection('CALENDAR_DAYS')
  const params = req.query
  var week = 0
  if (params.Week) {
    week = parseInt(params.Week)
  }
  var weekday =  getInitialWeek(7 * week);
  try {
    var calendar = await collection
      .find({
        $and: [
          { ID_TECHNICAL: parseInt(params.ID_TECHNICAL) },
          { 'date': {$gte:weekday.dateInitial} },        
          { 'date': {$lte:weekday.dateFinal} }        
        ]
      }).sort( { date: 1 } )
      .toArray()
      if(calendar.length > 0) {
        res.json(calendar)
      }else{        
        res.json(getCalendarDays(7 * week))
      }
      

  } catch (error) {
    res.status(400).send({ error: 'O servidor não entendeu a requisição pois está com uma sintaxe inválida.' })
  }
}
