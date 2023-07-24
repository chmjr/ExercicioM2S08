const { Traineers } = require("../models/traineers.js");

class TraineesController {
  async createOneTrainee(req, res) {
    //metodo que cria um estagiario
    try {
      const data = await Traineers.create({
        name: req.body.name,
        email: req.body.email,
        rg: req.body.rg,
        cpf: req.body.cpf,
        primary_phone_contact: req.body.primary_phone_contact,
        secondary_phone_contact: req.body.secondary_phone_contact,
        date_birth: req.body.date_birth,
        father_name: req.body.father_name,
        mother_name: req.body.mother_name,
        have_special_needs: req.body.have_special_needs,
        created_at: req.body.created_at,
        updated_at: req.body.updated_at,
      });

      return res.status(201).send({ data: "Dados salvos com sucesso!" });
    } catch (error) {
      return res.status(400).send({
        data: "Não foi possível criar estagiário",
        error: error.message,
      });
    }
  }
  async getAllTrainees(req, res) {
    //metodo que lista todos os estagiarios
    try {
      const data = await Traineers.findAll();
      return res.status(200).send({ data: data });
    } catch (error) {
      return res
        .status(400)
        .send({ data: "Não foi possível listar os estagiários" });
    }
  }
  async getOneTrainee(req, res) {
    //metodo que busca um estagiario pelo Id
    try {
      const data = await Traineers.findByPk(req.params.id);
      return res.status(200).send({ data: data });
    } catch (error) {
      return res
        .status(400)
        .send({ data: "Não foi possível listar o estagiário" });
    }
  }
  async updateOneTrainee(req, res) {
    //metodo que atualiza os dados do estagiario pelo Id
    try {
      const data = await Traineers.update(
        {
          name: req.body.name,
          email: req.body.email,
          rg: req.body.rg,
          cpf: req.body.cpf,
          primary_phone_contact: req.body.primary_phone_contact,
          secondary_phone_contact: req.body.secondary_phone_contact,
          date_birth: req.body.date_birth,
          father_name: req.body.father_name,
          mother_name: req.body.mother_name,
          have_special_needs: req.body.have_special_needs,
          updated_at: req.body.updated_at,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      return res.status(200).send({ data: "Dados atualizados com sucesso!" });
    } catch (error) {
      return res
        .status(400)
        .send({ data: "Não foi possível atualizar o estagiário" });
    }
  }
}

module.exports = new TraineesController();
