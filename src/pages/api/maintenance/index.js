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
               order = await collectionOrder.find({$and:[{ "tecnicalId": parseInt(req.query.idTechnical)}, {"status":"pendenting"},{idTray:parseInt(req.query.search) } ] }).toArray();
              }else{
              order = await collectionOrder.find({$and:[{ "tecnicalId": parseInt(req.query.idTechnical)}, {"status":"pendenting"} ] }).toArray();
              }
              var resOrden = []
              order.forEach(element => {
                resOrden.push({
                  idTechnical: element.tecnicalId,
                  purchaseNumber: element.idTray,
                  name: element.name_client,
                  period: element.period,
                  date: element.dateOrder,
                  status: element.status,
                  products: element.products
                })
              });

              res.status(200).json(resOrden)
            } catch (error) {
              res.status(400).send({ error: 'O servidor não entendeu a requisição pois está com uma sintaxe inválida.' })
            }
            break;
        case 'POST':
            try {
              delete req.body.order['_id']
              const order = await collectionOrder.updateOne({idTray: req.body.order.idTray} ,
              { $set: {
                status: req.body.order.status,
                descriptionComplet : req.body.order.descriptionComplet,
                durationInstallation : req.body.order.durationInstallation,
                hours : req.body.order.hours,
                minutes :req.body.order.minutes
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
