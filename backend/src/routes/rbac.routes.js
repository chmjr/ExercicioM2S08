const {
  createOneRole,
  createOnePermission,
  addPermissionToRole,
} = require("../controllers/rbac.controller");
const { Router } = require("express");

class RBACRouter {
  routesFromRBAC() {
    const RBACrouter = Router();
    RBACrouter.post("/createOneRole", createOneRole);
    RBACrouter.post("/createOnePermission", createOnePermission);
    RBACrouter.post("/addPermissionToRole", addPermissionToRole);

    return RBACrouter;
  }
}

module.exports = new RBACRouter();
