const {
  createOneContract,
  getAllContracts,
  getOneContract,
  updateOneContract,
  updateStatusContract,
} = require("../controllers/contracts.controller");
const { Router } = require("express");
const { auth } = require("../middleware/auth");

class ContractsRouter {
  routesFromContracts() {
    const contractsRoutes = Router();

    contractsRoutes.post("/createOneContract", auth, createOneContract);
    contractsRoutes.get("/getAllContracts", auth, getAllContracts);
    contractsRoutes.get("/getOneContract/:id", auth, getOneContract);
    contractsRoutes.put("/updateOneContract/:id", auth, updateOneContract);
    contractsRoutes.delete(
      "/updateStatusContract/:id",
      auth,
      updateStatusContract
    );

    return contractsRoutes;
  }
}
