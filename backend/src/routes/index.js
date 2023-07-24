const { Router } = require("express");
const { routesFromCategory } = require("./category.routes");
const { routesFromTrainees } = require("./trainees.routes");
const { routesFromCompanies } = require("./companies.routes");
const { routesFromUsers } = require("./users.routes");
const { routesFromRBAC } = require("./rbac.routes");

const routes = new Router(); //criando uma instância de Router
console.log("Rotas Executadas");
routes.use("/api", [
  routesFromCategory(),
  routesFromTrainees(),
  routesFromCompanies(),
  routesFromUsers(),
  routesFromRBAC(),
]); //usando as rotas de category, posso colocar quantas rotas eu quiser aqui

module.exports = routes; //exportando as rotas
