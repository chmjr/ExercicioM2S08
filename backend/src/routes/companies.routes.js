const {
  createOneCompany,
  getAllCompanies,
  getOneCompany,
  updateOneCompany,
  deleteOneCompany,
} = require("../controllers/companies.controller");
const { Router } = require("express");
const { auth } = require("../middleware/auth");

class CompaniesRouter {
  routesFromCompanies() {
    const companiesRoutes = Router();

    companiesRoutes.post("/createOneCompany", auth, createOneCompany);
    companiesRoutes.get("/getAllCompanies", auth, getAllCompanies);
    companiesRoutes.get("/getOneCompany/:id", auth, getOneCompany);
    companiesRoutes.put("/updateOneCompany/:id", auth, updateOneCompany);
    //companiesRoutes.delete("/deleteOneCompany/:id", deleteOneCompany);

    return companiesRoutes;
  }
}

module.exports = new CompaniesRouter(); //exportando uma instância da classe CompaniesRouter
