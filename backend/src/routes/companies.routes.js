const {
  createOneCompany,
  getAllCompanies,
  getOneCompany,
  updateOneCompany,
  deleteOneCompany,
} = require("../controllers/companies.controller");
const { Router } = require("express");

class CompaniesRouter {
  routesFromCompanies() {
    const companiesRoutes = Router();

    companiesRoutes.post("/createOneCompany", createOneCompany);
    //companiesRoutes.get("/getAllCompanies", getAllCompanies);
    //companiesRoutes.get("/getOneCompany/:id", getOneCompany);
    //companiesRoutes.put("/updateOneCompany/:id", updateOneCompany);
    //companiesRoutes.delete("/deleteOneCompany/:id", deleteOneCompany);

    return companiesRoutes;
  }
}

module.exports = new CompaniesRouter(); //exportando uma instância da classe CompaniesRouter
