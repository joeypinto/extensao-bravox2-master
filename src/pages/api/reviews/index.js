import connectToDatabase from "config/mongodb";


export default async (req, res) => {
  const { method } = req;
  const { db } = await connectToDatabase();
  const collectionUser = db.collection('USERS');
  const collectionOrder = db.collection('ORDERS');
  const collectionTechnical = db.collection('TECNICALS_API')
    switch (method) {
        case 'GET':
            try {
              var order = []
             if(!!req.query.search){
               order = await collectionOrder.find({$and:[{ "tecnicalId": parseInt(req.query.idTechnical)}, {"review":{$ne:null}}, {idTray:parseInt(req.query.search) }] }).toArray();
              }else{
               order = await collectionOrder.find({$and:[{ "tecnicalId": parseInt(req.query.idTechnical)}, {"review":{$ne:null}} ] }).toArray();
              }

              res.status(200).json(order)
            } catch (error) {
              res.status(400).send({ error: 'O servidor não entendeu a requisição pois está com uma sintaxe inválida.' })
            }
            break;
        case 'POST':
            try {
              delete req.body.order['_id']
              console.log(req.body.tecnicalId)
              const order = await collectionOrder.replaceOne({idTray: req.body.order.idTray} , req.body.order)
              const technical = await collectionTechnical.findOne({ ID: parseInt(req.body.order.tecnicalId)})
              if(!!technical){
              technical["reviews_total"] = technical.reviews_total + 1
              technical["reviews_avarage"] = technical.reviews_avarage + req.body.order.review
              delete technical['_id']
              technical = await collectionTechnical.replaceOne({ ID: parseInt(req.body.order.tecnicalId)},technical)
              }
              console.log(technical)
                res.status(201).json({ success: true })
            } catch (error) {
              res.status(400).json({ error: 'Nao foi possivel agendar a instalacao verifique se a mesma ja foi concluida!' })
            }
            break;
        default:
          res.status(400).send({ error: 'O servidor não entendeu a requisição pois está com uma sintaxe inválida.' })
            break;
    }
}
