const { Users } = require("../models/users");
const { config } = require("dotenv");
const { sign } = require("jsonwebtoken");

config();

class UsersController {
  async createOneUser(req, res) {
    try {
      const data = await Users.create({
        trainee_id: req.body.trainee_id,
        email: req.body.email,
        password: req.body.password,
      });
      return res.status(201).send({ data: "Dados salvos com sucesso!" });
    } catch (error) {
      return res.status(400).send({
        data: "Não foi possível criar usuário",
        error: error.message,
      });
    }
  }
  async getAllUsers(req, res) {
    try {
      const data = await Users.findAll();
      return res.status(200).send({ data: data });
    } catch (error) {
      return res
        .status(400)
        .send({ data: "Não foi possível listar os usuários" });
    }
  }

  async getOneUser(req, res) {
    const { email, senha } = req.body;

    try {
      const user = await Users.findOne({ where: { email: email } });

      if (user) {
        // Comparar a senha fornecida com a senha armazenada no banco de dados
        if (senha === user.password) {
          //compara se a senha fornecida é igual a senha armazenada no banco de dados
          const token = sign({ user }, process.env.SECRET_JWT, {expiresIn: 1d}); //gera o token
          return res
            .status(200)
            .send({ msg: "Logado com sucesso!", id: user.id, token }); //retorna o objeto todo
        } else {
          return res.status(401).send({ data: "Senha inválida" });
        }
      } else {
        return res.status(404).send({ data: "Usuário não encontrado" });
      }
    } catch (error) {
      return res.status(500).send({ data: "Erro ao buscar o usuário" });
    }
  }
}

module.exports = new UsersController();
