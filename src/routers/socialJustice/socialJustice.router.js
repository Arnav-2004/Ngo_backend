import express from "express";
import * as cbucboController from "../controllers/cbucbo.controller.js";

const router = express.Router();

// CRUD endpoints for cbucbo
router.post("/cbucbo", cbucboController.createcbucbo);
router.get("/cbucbo", cbucboController.getAllcbucbo);
router.get("/cbucbo/:id", cbucboController.getcbucboById);
router.put("/cbucbo/:id", cbucboController.updatecbucbo);
router.delete("/cbucbo/:id", cbucboController.deletecbucbo);

export default router;
