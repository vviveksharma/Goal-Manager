import express from "express";
import { getUserDeatils, updateUserDetails } from "../controllers/users.js";
const router = express.Router();

router.get("/info/:username", getUserDeatils);
router.put("/updateInfo", updateUserDetails);
export default router;
