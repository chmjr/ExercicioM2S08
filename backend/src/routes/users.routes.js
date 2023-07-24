const {
  createOneUser,
  getAllUsers,
  getOneUser,
} = require("../controllers/users.controller");
const { Router } = require("express");

class UsersRouter {
  routesFromUsers() {
    const usersRoutes = Router();

    usersRoutes.post("/createOneUser", createOneUser);
    usersRoutes.get("/getAllUsers", getAllUsers);
    usersRoutes.get("/getOneUser", getOneUser);
    //usersRoutes.put("/updateOneUsers", updateOneUser);
    //usersRoutes.delete("/deleteOneUsers", deleteOneUser);

    return usersRoutes;
  }
}

module.exports = new UsersRouter();
