const {
  createOneTrainee,
  getAllTrainees,
  getOneTrainee,
  updateOneTrainee,
} = require("../controllers/trainees.controller.js");
const { Router } = require("express");

class TraineesRouter {
  routesFromTrainees() {
    const traineesRoutes = Router();

    traineesRoutes.post("/createOneTrainee", createOneTrainee);
    traineesRoutes.get("/getAllTrainees", getAllTrainees);
    traineesRoutes.get("/getOneTrainee/:id", getOneTrainee);
    traineesRoutes.put("/updateOneTrainee/:id", updateOneTrainee);

    return traineesRoutes;
  }
}

module.exports = new TraineesRouter(); //exportando uma instância da classe TraineesRouter
