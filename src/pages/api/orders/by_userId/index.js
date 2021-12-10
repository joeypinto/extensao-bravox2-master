import connectToDatabase from 'config/mongodb'

export default async (req, res) => {
  const { method } = req
  const { db } = await connectToDatabase()
  const collectionUser = db.collection('USERS')
  const collectionOrder = db.collection('ORDERS')
  switch (method) {
    case 'GET':
      try {
        var tecnical = await collectionUser.findOne({
          userId: parseInt(req.query.userId)
        })
        var order = await collectionOrder
        .find({ userId: tecnical.userId })
        .toArray()
        res.status(200).json(order)
      } catch (error) {
        res.status(400).send({ error: 'O servidor não entendeu a requisição pois está com uma sintaxe inválida.' })
      }
      break
    default:
      res.status(400).send({ error: 'O servidor não entendeu a requisição pois está com uma sintaxe inválida.' })
      break
  }
}
