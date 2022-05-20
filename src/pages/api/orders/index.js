import connectToDatabase from 'config/mongodb'
import calendar_days from '../calendar_days'
const PERIODS = {
  Manhã: {
    value: 'morning'
  },
  Tarde: {
    value: 'evening'
  },
  Noite: {
    value: 'night'
  }
}
const getPeriod = (value) =>{
  switch (value) {
    case 'night':
    case 'Noite':
      return 2
    case 'evening':
    case 'Tarde':
      return 1
    default:
      return 0
  }
}

export default async (req, res) => {
  const { method } = req
  const { db } = await connectToDatabase()
  const collectionCalendar = db.collection('CALENDAR_DAYS')
  const collectionOrder = db.collection('ORDERS')
  switch (method) {
    case 'GET':
      try {
        var order = await collectionOrder.find({}).toArray()
        res.status(200).json(order)
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        delete req.body.order['_id']
        var calendar = await collectionCalendar.findOne({ $and: [{ "ID_TECHNICAL": req.body.order.tecnicalId}, {"date":req.body.order.dateChance} ] })
        var period = getPeriod(req.body.order.period)
        var day = new Date(req.body.order.dateChance)
        var period = getPeriod(req.body.order.period)

        if(calendar.scheduledPeriods[period].amount <= 0){
          throw new Error('Nao foi possivel agendar a instalacao verifique se a mesma ja foi concluida!');
        }else{
          calendar.scheduledPeriods[period].amount -= 1
        }
        var order = await collectionOrder.findOne({
          idTray: req.body.order.idTray
        })

        if (order.status !== 'completed') {
          if(order.status == 'appointment'){
            var calendarOld = await collectionCalendar.findOne({ $and: [{ "ID_TECHNICAL": req.body.order.tecnicalId}, {"date":order.dateChance} ] })
            calendarOld.scheduledPeriods[getPeriod(order.period)].amount = calendar.scheduledPeriods[getPeriod(order.period)].amount + 1
            await collectionCalendar.replaceOne({ $and: [{ "ID_TECHNICAL": req.body.order.tecnicalId}, {"date":order.dateChance} ] },calendarOld)
          }
          order = await collectionOrder.replaceOne({ idTray: req.body.order.idTray },req.body.order)
          delete calendar['_id']
          await collectionCalendar.replaceOne({ $and: [{ "ID_TECHNICAL": req.body.order.tecnicalId}, {"date":req.body.order.dateChance} ] },calendar)
        }else{
          throw new Error('Nao foi possivel agendar a instalacao verifique se a mesma ja foi concluida!');
        }
        res.status(201).json({ success: true })
      } catch (error) {
        res.status(400).json({ error: 'Nao foi possivel agendar a instalacao verifique se a mesma ja foi concluida!' })
      }
      break
    case 'DELETE':
      try {
        const order = await collectionOrder.updateOne(
          { idTray: req.body.orderId },
          { $set: { status: 'canceled' } }
        )
        res.status(201).json({ success: true })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
      case 'PUT':
        try {
          var calendar = await collectionCalendar.findOne({ $and: [{ "ID_TECHNICAL": req.body.technical}, {"date":req.body.date} ] })
          var day = new Date(req.body.date)
          var period = getPeriod(req.body.period)
          if(calendar.scheduledPeriods[period].amount <= 0){
           throw new Error('Nao foi possivel agendar a instalacao verifique se a mesma ja foi concluida!');
          }else{
            calendar.scheduledPeriods[period].amount -= 1
         }
         var order = await collectionOrder.findOne({
           idTray: req.body.orderId
         })
         console.log(order.status,`put`)
          if (order.status !== 'completed') {
            order = await collectionOrder.updateOne(
              { idTray: req.body.orderId },{
                $set: {
                  dateChance:req.body.date,
                  period:PERIODS[req.body.period].value,
                  status:"appointment"
                }
              }

            )
            delete calendar['_id']
            await collectionCalendar.replaceOne({ $and: [{ "ID_TECHNICAL": req.body.technical}, {"date":req.body.date} ] },calendar)
          }else{
            throw new Error('Nao foi possivel agendar a instalacao verifique se a mesma ja foi concluida!');
          }
          res.status(201).json({ success: true })
        } catch (error) {
          res.status(400).json({ error: 'Nao foi possivel agendar a instalacao verifique se a mesma ja foi concluida!' })
        }
        break
    default:
      res.status(400).json({ success: false })
      break
  }
}
