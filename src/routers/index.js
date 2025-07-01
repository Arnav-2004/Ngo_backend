import { Router } from "express";
const router = Router();

import { healthCheck } from "../controllers/app.controller.js";

router.get("/", healthCheck);

export default router;
