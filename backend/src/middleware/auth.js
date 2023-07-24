const { config } = require("dotenv");
const { verify } = require("jsonwebtoken");

config();

class Acess{

async auth(req, res, next) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).send({ data: "Não autorizado no middleware" });
  }

  try {
    const decodedToken = verify(authorization, process.env.SECRET_JWT);
    //verifica se o token é válido
    req.user = decodedToken.user;
    next();
  } catch (error) {
    // O token é inválido
    return res.status(401).send({ data: "Não autorizado" });
  }
}
}

module.exports = new Acess();
