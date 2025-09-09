const express = require("express");
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");
const router = express.Router();

router.get("/", getUsers);
router.get("/:id", /*validateUserId,*/ getUserById);
router.post("/", /*validateData,*/ createUser);
router.put("/:id"  /*validateUserId, validateData*/, updateUser);
router.delete("/:id", /*validateData,*/ deleteUser);

module.exports = router;
