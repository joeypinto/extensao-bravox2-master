import connectToDatabase from "config/mongodb";
import { CALENDAR_DAYS } from "constants/temporary";
import { getCalendarDays, getSunday } from "utils";

export default async (req, res) => {
    const { method } = req;
    const { db } = await connectToDatabase();
    const collection = db.collection('CALENDAR_FIXED');
    switch (method) {
        case 'POST':
          console.log(req.body)
          try {
            var response = req.body
            console.log(req.body)
            response.CALENDAR.map(async val=>{                
              val['ID_TECHNICAL'] = response.ID_TECHNICAL                
              var calendar = await collection.findOne({"ID_TECHNICAL": response.ID_TECHNICAL})            
              if(!calendar){
                calendar = await collection.insertOne(val)
              }else{
                delete val['_id']
                calendar = await collection.replaceOne({"ID_TECHNICAL": response.ID_TECHNICAL},val)
              }
            })
            res.status(201).json({ success: true })
          } catch (error) {
            res.status(400).send({ error: 'O servidor não entendeu a requisição pois está com uma sintaxe inválida.' })
          }
            break;
            case 'GET':
              try {                
                var calendar = await collection.find({"ID_TECHNICAL": parseInt(req.query["ID_TECHNICAL"])}).sort( { date: 1 } )
                .toArray()
                if(calendar.length > 0) {
                  res.json(calendar)
                }else{        
                  res.json(getCalendarDays(7 * 0))
                }
              } catch (error) {
                res.status(400).send({ error: 'O servidor não entendeu a requisição pois está com uma sintaxe inválida.' })
              }
            break;
            default:
            res.status(400).send({ error: 'O servidor não entendeu a requisição pois está com uma sintaxe inválida.' })
            break;
    }

}
