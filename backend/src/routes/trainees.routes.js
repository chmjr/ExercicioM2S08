const {
  createOneTrainee,
  getAllTrainees,
  getOneTrainee,
  updateOneTrainee,
} = require("../controllers/trainees.controller.js");
const { Router } = require("express");
const { auth } = require("../middleware/auth");

class TraineesRouter {
  routesFromTrainees() {
    const traineesRoutes = Router();

    traineesRoutes.post("/createOneTrainee", auth, createOneTrainee);
    traineesRoutes.get("/getAllTrainees", auth, getAllTrainees);
    traineesRoutes.get("/getOneTrainee/:id", auth, getOneTrainee);
    traineesRoutes.put("/updateOneTrainee/:id", auth, updateOneTrainee);

    return traineesRoutes;
  }
}

module.exports = new TraineesRouter(); //exportando uma instância da classe TraineesRouter
