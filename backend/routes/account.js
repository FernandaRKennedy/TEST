const router = require("express").Router();

const {
  createAccount,
  deleteAccountById,
  updateAccountById,
  getAccountByEmail,
  getAccountById,
} = require("../controllers/account");

//POST for creating profile
router.post("/SignUp", createAccount);

//PUT updates profile
router.put("/:id", updateAccountById);

//Delete removes a profile
router.delete("/:id", deleteAccountById);

//GET by email
router.get("/Profille", getAccountByEmail);

//GET one account
router.get("/:id", getAccountById);

module.exports = router;
