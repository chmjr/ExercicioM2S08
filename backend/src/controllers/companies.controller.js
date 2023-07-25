const { Companies } = require("../models/companies");

class CompaniesController {
  async createOneCompany(req, res) {
    const data = await Companies.create({
      cnpj: req.body.cnpj,
      company_name: req.body.company_name,
      contact: req.body.contact,
      cep: req.body.cep,
      address: req.body.address,
      neighborhood: req.body.neighborhood,
      city: req.body.city,
      state: req.body.state,
      number: req.body.number,
      complement: req.body.complement,
      rh_analyst_name: req.body.rh_analyst_name,
      supervisor_name: req.body.supervisor_name,
    });

    if (
      !cnpj ||
      !company_name ||
      !contact ||
      !cep ||
      !address ||
      !neighborhood ||
      !city ||
      !state ||
      !number ||
      !rh_analyst_name ||
      !supervisor_name
    ) {
      return res.status(400).send({ error: "Dados incompletos!" });
    }

    const verificaCnpj = await Companies.findOne({
      where: { cnpj: req.body.cnpj },
    });
    if (verificaCnpj) {
      return res.status(400).send({ error: "CNPJ já cadastrado!" });
    }

    return res.status(201).send({ data: "Dados salvos com sucesso!" });
  }
  async getAllCompanies(req, res) {
    try {
      const data = await Companies.findAll();

      return res.status(200).send({ data: data });
    } catch (error) {
      return res.status(500).send({ error: error });
    }
  }
  async getOneCompany(req, res) {
    try {
      const data = await Companies.findOne({
        where: { id: req.params.id },
      });
      return res.status(200).send({ data: data });
    } catch (error) {
      return res.status(500).send({ error: error });
    }
  }
  async updateOneCompany(req, res) {
    try {
      const data = await Companies.update(
        {
          cnpj: req.body.cnpj,
          company_name: req.body.company_name,
          contact: req.body.contact,
          cep: req.body.cep,
          address: req.body.address,
          neighborhood: req.body.neighborhood,
          city: req.body.city,
          state: req.body.state,
          number: req.body.number,
          complement: req.body.complement,
          rh_analyst_name: req.body.rh_analyst_name,
          supervisor_name: req.body.supervisor_name,
          updated_at: req.body.updated_at,
        },
        {
          where: { id: req.params.id },
        }
      );
      return res.status(200).send({ data: "Dados atualizados com sucesso!" });
    } catch (error) {
      return res.status(500).send({ error: error });
    }
  }
}

module.exports = new CompaniesController();
