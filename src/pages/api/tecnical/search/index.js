import connectToDatabase from 'config/mongodb'
import { CALENDAR_DAYS } from 'constants/temporary'
import {getSunday} from 'utils'

export default async (req, res) => {
  const getCalendar = async (id) => {
    var respCalendar = []
    var calendar = await collectionCalendar
      .find({
        $and: [
          { ID_TECHNICAL: id },
          { 'CALENDAR.date': { $gte: getSunday(0) } }
        ]
      })
      .toArray()
    if (calendar.length < 1) {
      calendar.push({ ID_TECHNICAL: id, CALENDAR: CALENDAR_DAYS })
    }
    //Essa funcao vai ajustar o  json para o padrao exigido no frontend
    for (const [idx, elCalendar] of calendar.entries()) {
      elCalendar.CALENDAR.forEach(element => {
       // retorna apenas se existir vagas naquela data.
        if(element.scheduledPeriods[0].amount + element.scheduledPeriods[1].amount + element.scheduledPeriods[2].amount !== 0){
        respCalendar.push({periods:element.scheduledPeriods, dateCalender:element.date})
       }

     });
    }
    return respCalendar
  }

  const { method } = req
  const { db } = await connectToDatabase()
  const collection = db.collection('TECNICALS_API')
  const collectionCalendar = db.collection('CALENDAR_DAYS')

  switch (method) {
    case 'GET':
      try {
        var search = {}
        if(!!req.query.state){
          search = {ESTADO:req.query.state}
          if(!!req.query.city){
            search ={$and: [{ESTADO:req.query.state},{MUNICIPIO:req.query.city}]}
          }
        }
        var technical = await collection.find(search).toArray()
         for (const [idx, eltechnical] of technical.entries()) {
           const todo = await getCalendar(eltechnical.ID)
           eltechnical['calenderTecnical'] = todo
         }
        console.log(technical)
        res.status(201).json(technical)
      } catch (error) {
        res.status(400).send({ error: 'O servidor não entendeu a requisição pois está com uma sintaxe inválida.' })
      }
      break
    default:
      res.status(400).send({ error: 'O servidor não entendeu a requisição pois está com uma sintaxe inválida.' })
      break
  }
}
