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
      created_at: req.body.created_at,
      updated_at: req.body.updated_at,
    });

    return res.status(201).send({ data: "Dados salvos com sucesso!" });
  }
}

module.exports = new CompaniesController();
