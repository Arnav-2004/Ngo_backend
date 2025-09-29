import express from "express";
import * as legalAidController from "../modules/socialJustice/controllers/legalAid.controller.js";

const router = express.Router();

router.post("/", legalAidController.createLegalAid);
router.get("/", legalAidController.getAllLegalAids);
router.get("/:id", legalAidController.getLegalAidById);
router.put("/:id", legalAidController.updateLegalAid);
router.delete("/:id", legalAidController.deleteLegalAid);

export default router;
