import express from 'express';
import {
  createWorkshop,
  getWorkshops,
  getWorkshopById,
  updateWorkshop,
  deleteWorkshop
} from '../../modules/socialJustice/controller/socialJustice.controller.js';
const {
    addEntitlement,
    getEntitlements,
    getEntitlement,
    editEntitlement,
    removeEntitlement
} = require("../../modules/socialJustice/controller/entitlement.controller");

const router = express.Router();

router.post('/workshops', createWorkshop);
router.get('/workshops', getWorkshops);
router.get('/workshops/:id', getWorkshopById);
router.put('/workshops/:id', updateWorkshop);
router.delete('/workshops/:id', deleteWorkshop);

router.post("/entitlements", addEntitlement);
router.get("/entitlements", getEntitlements);
router.get("/entitlements/:id", getEntitlement);
router.put("/entitlements/:id", editEntitlement);
router.delete("/entitlements/:id", removeEntitlement);

module.exports = router;
