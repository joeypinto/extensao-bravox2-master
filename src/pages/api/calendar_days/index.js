import connectToDatabase from "config/mongodb";
import { getSunday } from "utils";

export default async (req, res) => {
    const { method } = req;
    const { db } = await connectToDatabase();
    const collection = db.collection('CALENDAR_DAYS');
    switch (method) {
        case 'POST':
            try {
              var week = 0
              if(req.body.Week !== undefined){
                week = req.body.Week
              }
              var calendar = await collection.findOne({ $and: [{ "ID_TECHNICAL": req.body.ID_TECHNICAL}, {"CALENDAR.date":getSunday(7*week)} ] })
              if(!calendar){
                calendar = await collection.insertOne(req.body)
              }else{
                calendar = await collection.replaceOne({ $and: [{ "ID_TECHNICAL": req.body.ID_TECHNICAL}, {"CALENDAR.date":getSunday(7*week)} ] },req.body)
             }
              res.status(201).json({ success: true })
            } catch (error) {
              res.status(400).send({ error: 'O servidor não entendeu a requisição pois está com uma sintaxe inválida.' })
            }
            break;
            default:
            res.status(400).send({ error: 'O servidor não entendeu a requisição pois está com uma sintaxe inválida.' })
            break;
    }

}
