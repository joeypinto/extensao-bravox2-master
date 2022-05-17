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
          { 'date': { $gte: getSunday(0) } }
        ]
      }).sort( { date: 1 } )
      .toArray()    
    //Essa funcao vai ajustar o  json para o padrao exigido no frontend
    
    
    return calendar
  }
  const getCalendarFixed = async (id) => {
    var respCalendar = []
    var calendar = await collectionCalendarFixed.findOne({"ID_TECHNICAL": id})    
    if (!calendar) {
      respCalendar.push({})
    }else{
      calendar.CALENDAR.forEach(element => {
        // retorna apenas se existir vagas naquela data.
         if(element.scheduledPeriods[0].amount + element.scheduledPeriods[1].amount + element.scheduledPeriods[2].amount !== 0){
         respCalendar.push({periods:element.scheduledPeriods, dateCalender:element.date})
        }
      });
    }
    //Essa funcao vai ajustar o  json para o padrao exigido no frontend 
    return respCalendar
  }
  const { method } = req
  const { db } = await connectToDatabase()
  const collection = db.collection('TECNICALS_API')
  const collectionCalendar = db.collection('CALENDAR_DAYS')
  const collectionCalendarFixed = db.collection('CALENDAR_FIXED')

  switch (method) {
    case 'GET':
      try {
        var technical = await collection.find({}).toArray()
        //console.log(technical,"ell")
        for (const [idx, eltechnical] of technical.entries()) {
          const todo = await getCalendar(eltechnical.ID)
          //const fixed = await getCalendarFixed(eltechnical.ID) 
          //console.log(fixed,"ell")         
           eltechnical['calenderTecnical'] = todo
          //eltechnical['calenderTecnicalFixed'] = fixed          
        }
        //console.log(technical,"tec")
        res.status(201).json(technical)
      } catch (error) {
        res.status(400).send({ error: 'O servidor não entendeu a requisição pois está com uma sintaxe inválida 68.' })
      }
      break
    case 'POST':
      try {
        const technical = await collection.findOne({ EMAIL: req.body[0].EMAIL })
        if (!technical){
          const technical = req.body[0]
          technical['reviews_total'] = 0
          technical['reviews_avarage'] = 0
          await collection.insertOne(technical)
        }

        res.status(201).json({ success: 'cadastrado com sucesso.' })
      } catch (error) {
        res.status(400).send({ error: 'O servidor não entendeu a requisição pois está com uma sintaxe inválida 69.' })
      }
      break
    default:
      res.status(400).send({ error: 'O servidor não entendeu a requisição pois está com uma sintaxe inválida 69.' })
      break
  }
}
