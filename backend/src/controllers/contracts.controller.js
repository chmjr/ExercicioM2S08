const { Contracts } = require("../models/Contracts");

class ContractsController {
  async createOneContract(req, res) {
    try {
      const data = await Contracts.create({
        contract_number: req.body.contract_number,
        contract_name: req.body.contract_name,
        contract_description: req.body.contract_description,
        contract_start_date: req.body.contract_start_date,
        contract_end_date: req.body.contract_end_date,
        contract_value: req.body.contract_value,
        contract_status: req.body.contract_status,
        contract_observation: req.body.contract_observation,
        company_id: req.body.company_id,
        category_id: req.body.category_id,
        trainee_id: req.body.trainee_id,
      });

      if (
        !contract_number ||
        !contract_name ||
        !contract_description ||
        !contract_start_date ||
        !contract_end_date ||
        !contract_value ||
        !contract_status ||
        !contract_observation ||
        !company_id ||
        !category_id ||
        !trainee_id
      ) {
        return res.status(400).send({ error: "Dados incompletos!" });
      }

      const verificaContractNumber = await Contracts.findOne({
        where: { contract_number: req.body.contract_number },
      });
      if (verificaContractNumber) {
        return res
          .status(400)
          .send({ error: "Número do contrato já cadastrado!" });
      }

      return res.status(201).send({ data: "Dados salvos com sucesso!" });
    } catch (error) {
      return res.status(500).send({ error: error });
    }
  }
  async getAllContracts(req, res) {
    try {
      const data = await Contracts.findAll();

      return res.status(200).send({ data: data });
    } catch (error) {
      return res.status(500).send({ error: error });
    }
  }
  async getOneContract(req, res) {
    try {
      const data = await Contracts.findOne({
        where: { id: req.params.id },
      });
      return res.status(200).send({ data: data });
    } catch (error) {
      return res.status(500).send({ error: error });
    }
  }
  async updateOneContract(req, res) {
    try {
      const data = await Contracts.update(
        {
          contract_number: req.body.contract_number,
          contract_name: req.body.contract_name,
          contract_description: req.body.contract_description,
          contract_start_date: req.body.contract_start_date,
          contract_end_date: req.body.contract_end_date,
          contract_value: req.body.contract_value,
          contract_status: req.body.contract_status,
          contract_observation: req.body.contract_observation,
          company_id: req.body.company_id,
          category_id: req.body.category_id,
          trainee_id: req.body.trainee_id,
        },
        {
          where: { id: req.params.id },
        }
      );
      return res.status(200).send({ data: data });
    } catch (error) {
      return res.status(500).send({ error: error });
    }
  }
  async updateStatusContract(req, res) {
    try {
      const data = await Contracts.update(
        {
          contract_status: req.body.contract_status,
        },
        {
          where: { id: req.params.id },
        }
      );
      return res.status(200).send({ data: data });
    } catch (error) {
      return res.status(500).send({ error: error });
    }
  }
}

module.exports = new ContractsController();
