import connectToDatabase from "config/mongodb";
import { getSunday } from "utils";

export default async (req, res) => {
    const { method } = req;
    const { db } = await connectToDatabase();
    const collection = db.collection('CALENDAR_DAYS');
    switch (method) {
        case 'POST':
            try {
              var response = req.body
              response.CALENDAR.map(async val=>{
                val['ID_TECHNICAL'] = response.ID_TECHNICAL
                var calendar = await collection.findOne({ $and: [{ "ID_TECHNICAL": response.ID_TECHNICAL}, {"date":val.date}]})
                if(!calendar){
                  calendar = await collection.insertOne(val)
                }else{
                  calendar = await collection.replaceOne({ $and: [{ "ID_TECHNICAL": response.ID_TECHNICAL}, {"date":val.date}]},val)
                }
              })
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
