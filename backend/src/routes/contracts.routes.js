const {
  createOneContract,
  getAllContracts,
  getOneContract,
  updateOneContract,
  deleteOneContract,
} = require("../controllers/contracts.controller");
const { Router } = require("express");

class ContractsRouter {
  routesFromContracts() {
    const contractsRoutes = Router();

    contractsRoutes.post("/createOneContract", createOneContract);
    contractsRoutes.get("/getAllContracts", getAllContracts);
    contractsRoutes.get("/getOneContract/:id", getOneContract);
    contractsRoutes.put("/updateOneContract/:id", updateOneContract);
    contractsRoutes.delete("/deleteOneContract/:id", deleteOneContract);

    return contractsRoutes;
  }
}
