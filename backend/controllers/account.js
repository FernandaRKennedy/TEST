const Account = require("../models/Account");

//GETs Account by email for login purposes
async function getAccountByEmail(req, res) {
  const { emailAddress, id } = req.body;
  try {
    const account = await Account.findOne({ emailAddress: `${emailAddress}` });
    console.log("we are her", account);
    return res.json(account);
  } catch (error) {
    console.log("error fetching account", error);
    res.json({ message: "error fetching account" });
  }
}

//PUT adds a new Account
async function createAccount(req, res) {
  try {
    if (!req.body.image) req.body.image = undefined;
    await new Account(req.body).save();
    res.status(201).json({ message: "Account created" });
  } catch (error) {
    console.log("error creating Account:", error);
    res.json({ message: "error creating Account" });
  }
}
//Updates Account info
async function updateAccountById(req, res) {
  try {
    const { id } = req.params;
    if (!req.body.image) req.body.image = undefined;
    await Account.findByIdAndUpdate(id, req.body);
    res.status(204).json({ message: "Account updated" });
  } catch (error) {
    console.log("error updating Account:", error);
    res.json({ message: "error updating Account" });
  }
}
//DELETEs Account by id
async function deleteAccountById(req, res) {
  try {
    const { id } = req.params;
    await Account.findByIdAndDelete(id);
    res.status(204).json({ message: "bread deleted" });
  } catch (error) {
    console.log("error deleting Account:", error);
    res.json({ message: "error deleting Account" });
  }
}

//GETs account by id for finding a match
async function getAccountById(req, res) {
  try {
    const { id } = req.params;
    const account = await Account.findById(id);
    res.json(account);
  } catch (error) {
    console.log("error finding this Account");
    res.json({ message: "error finding this Account" });
  }
}
module.exports = {
  createAccount,
  deleteAccountById,
  updateAccountById,
  getAccountByEmail,
  getAccountById,
};
