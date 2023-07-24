const {
  createOneCategory,
  getOneCategory,
} = require("../controllers/category.controller"); //chamando o controller
const { Router } = require("express"); //importando o express
const { auth } = require("../middleware/auth"); //importando o middleware auth

class CategoryRouter {
  routesFromCategory() {
    const categoryRoutes = Router();

    categoryRoutes.post("/createOneCategory", createOneCategory);
    categoryRoutes.get("/getOneCategory/:id", auth, getOneCategory);

    return categoryRoutes;
  }
}

module.exports = new CategoryRouter(); //exportando uma instância da classe CategoryRouter
