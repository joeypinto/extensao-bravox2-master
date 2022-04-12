import jwt from 'jsonwebtoken'

const KEY_SECRET = process.env.KEY_SECRET_JWT_EXTBRAVOX

export default function (req, res) {
  if (!req.body) {
    return res
      .status(404)
      .send({ error: 'Houve um problema na passagem de informações!' })
  }
  const { id, permission } = JSON.parse(req.body)
  res.json({
    token: jwt.sign(
      {
        idUser: id,
        permissionUser: permission
      },
      KEY_SECRET
    )
  })
}
