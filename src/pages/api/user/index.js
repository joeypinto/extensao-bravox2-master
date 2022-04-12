import connectToDatabase from 'config/mongodb'

export default async (req, res) => {
  const { method } = req

  switch (method) {
    case 'GET':
      try {
        res.status(201).json({ success: true })
      } catch (error) {
        res.status(500).json({ success: false })
      }
      break
    case 'POST':
      try {
        const { db } = await connectToDatabase()
        const collectionUser = db.collection('USERS')
        const tecnical = await collectionUser.findOne({
          userId: req.body.tray.usuario.usuarioId
        })
        if (!tecnical) {
          await collectionUser.insertOne({
            userId: req.body.tray.usuario.usuarioId,
            idTray: req.body.tray.pedidoId,
            name_client: req.body.tray.usuario.nome
          })
        }
        createOrders(db, req.body.tray)
        res.status(201).json({ success: true })
      } catch (error) {
        res.status(500)
        .send({ error: 'Houve um problema no servidor!' })
      }
      break
    default:
      res.status(500)
      .send({ error: 'Houve um problema no servidor!' })
      break
  }
}

const createOrders = async (db, data) => {
  const collectionOrder = db.collection('ORDERS')
  const order = await collectionOrder.findOne({ idTray: data.pedidoId })
  if (!order) {
    var products = []

    data.itens.forEach(element => {
      products.push({id:element.produtoVarianteId,imageProduct:'',name:element.nome,amount:element.quantidade})
    });
    await collectionOrder.insertOne({
      idTray: data.pedidoId,
      userId: data.usuario.usuarioId,
      name_client: data.usuario.nome,
      tecnicalId: null,
      dateChance: '',
      dateOrder: data.data.slice(0, 10),
      period: '',
      status: 'pendenting',
      review: null,
      description:'',
      products: products
    })
  }
}
