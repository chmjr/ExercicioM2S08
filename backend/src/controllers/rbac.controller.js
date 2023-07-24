const { Roles } = require("../models/roles");
const { Permissions } = require("../models/permissions");
const { config } = require("dotenv");

config(); //para usar as variáveis de ambiente
class RBAC {
  async createOneRole(req, res) {
    try {
      const { description } = req.body;
      console.log(description);
      if (!description) {
        // Verifica se a descrição foi enviada
        return res
          .status(400)
          .send({ data: "Descrição é um campo obrigatório" });
      }

      const role = await Roles.findOne({ where: { description: description } }); // Verifica se a role já existe
      if (role) {
        return res.status(400).send({ data: "Role já cadastrada" });
      }

      const newRole = await Roles.create({ description });
      return res.status(201).send({ newRole });
    } catch (error) {
      return res.status(500).send({ data: error.message });
    }
  }
  async createOnePermission(req, res) {
    try {
      const { description } = req.body;
      if (!description) {
        // Verifica se a descrição foi enviada
        return res
          .status(400)
          .send({ data: "Descrição é um campo obrigatório" });
      }
      const permission = await Permissions.findOne({
        where: { description: description },
      }); // Verifica se a permissão já existe
      if (permission) {
        return res.status(400).send({ data: "Permissão já cadastrada" });
      }
      const newPermission = await Permissions.create({ description });
      return res.status(201).send({ newPermission });
    } catch (error) {
      return res.status(500).send({ data: error.message });
    }
  }
  async addPermissionToRole(req, res) {
    try {
      const { permissionId, roleId } = req.body;

      if (!permissionId) {
        return res
          .status(400)
          .send({ message: "O id da permissão é um campo obrigatório" });
      }

      if (!roleId) {
        return res
          .status(400)
          .send({ message: "O id da função é um campo obrigatório" });
      }

      const role = await Roles.findOne({
        where: { id: roleId },
      });

      if (!role) {
        return res.status(400).send({ message: "A função não existe." });
      }

      const permission = await Permissions.findOne({
        where: { id: permissionId },
      });

      if (!permission) {
        return res.status(400).send({ message: "A permissão não existe." });
      }

      await role.addPermissions(permission);

      return res
        .status(201)
        .send({ message: "Permissão atribuida a Função com sucesso!" });
    } catch (error) {
      console.log(error.message);
      return res
        .status(400)
        .send({ message: "A Função não pôde ser atribuida!" });
    }
  }
}

module.exports = new RBAC();
