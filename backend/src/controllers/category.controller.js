const { Category } = require("../models/category");
const { verify } = require("jsonwebtoken");
const { config } = require("dotenv");

config(); //para usar as variáveis de ambiente

class CategoryController {
  async createOneCategory(req, res) {
    const data = await Category.create({ name: req.body.name });

    return res.status(201).send({ data: "Dados salvos com sucesso!" });
  }

  async getOneCategory(req, res) {
    try {
      //verifica se o token é válido
      const data = await Category.findByPk(req.params.id);

      return res.status(200).send({ data: data });
    } catch (error) {
      return res.status(401).send({ data: "Não existe categoria com esse id" });
    }
  }
}

module.exports = new CategoryController();
