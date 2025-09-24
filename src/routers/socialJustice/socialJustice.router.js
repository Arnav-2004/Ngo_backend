const express = require("express");
const {
    addEntitlement,
    getEntitlements,
    getEntitlement,
    editEntitlement,
    removeEntitlement
} = require("../../modules/socialJustice/controller/entitlement.controller");

const router = express.Router();

// Entitlement routes
router.post("/entitlements", addEntitlement);
router.get("/entitlements", getEntitlements);
router.get("/entitlements/:id", getEntitlement);
router.put("/entitlements/:id", editEntitlement);
router.delete("/entitlements/:id", removeEntitlement);

module.exports = router;