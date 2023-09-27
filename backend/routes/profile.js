const router = require("express").Router();

const {
  getAllProfiles,
  createProfile,
  deleteProfileById,
  updateProfileById,
  getProfileById,
} = require("../controllers/profile");

//GET all profiles
router.get("/Explore", getAllProfiles);

//GET one profile
router.get("/:id", getProfileById);

//POST for creating profile
router.post("/SignUp", createProfile);

//PUT updates profile
router.put("/:id", updateProfileById);

//Delete removes a profile
router.delete("/:id", deleteProfileById);

module.exports = router;
