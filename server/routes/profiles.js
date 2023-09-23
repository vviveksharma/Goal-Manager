import express from "express";
import { getUserDeatils } from "../controllers/users.js";
const router = express.Router();

router.get("/info/:username", getUserDeatils)
export default router