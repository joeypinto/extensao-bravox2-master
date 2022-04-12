import connectToDatabase from "config/mongodb";


export default async (req, res) => {
  const { method } = req;
  const { db } = await connectToDatabase();
  const collectionUser = db.collection('USERS');
  const collectionOrder = db.collection('ORDERS');

    switch (method) {
        case 'GET':
            try {
              var order = []
             if(!!req.query.search){
               order = await collectionOrder.find({$and:[{ "tecnicalId": parseInt(req.query.idTechnical)}, {"status":"appointment"},{idTray:parseInt(req.query.search) } ] }).toArray();
              }else{
               order = await collectionOrder.find({$and:[{ "tecnicalId": parseInt(req.query.idTechnical)}, {"status":"appointment"} ] }).toArray();
              }
              console.log(order + "------")
              res.status(200).json(order)
            } catch (error) {
              res.status(400).send({ error: 'O servidor não entendeu a requisição pois está com uma sintaxe inválida.' })
            }
            break;
        case 'POST':
            try {
              delete req.body.order['_id']
              const order = await collectionOrder.replaceOne({idTray: req.body.order.idTray} , req.body.order)
              res.status(201).json({ success: true })
            } catch (error) {
              res.status(400).send({ error: 'O servidor não entendeu a requisição pois está com uma sintaxe inválida.' });
            }
            break;
        default:
          res.status(400).send({ error: 'O servidor não entendeu a requisição pois está com uma sintaxe inválida.' })
            break;
    }
}
