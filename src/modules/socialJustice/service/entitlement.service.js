const Entitlement = require("../models/entitlements.model");

const createEntitlement = async (payload) => {
    return Entitlement.create(payload);
};

const findById = async (id) => Entitlement.findById(id);

const listEntitlements = async ({ page = 1, limit = 20 }) => {
    const p = parseInt(page, 10) || 1;
    const l = parseInt(limit, 10) || 20;
    const skip = (p - 1) * l;
    
    const entitlements = await Entitlement.find()
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(l);
    
    const total = await Entitlement.countDocuments();
    return { entitlements, total, page: p, limit: l };
};

const updateEntitlement = async (id, payload) => {
    return Entitlement.findByIdAndUpdate(id, payload, { new: true });
};

const deleteEntitlement = async (id) => {
    return Entitlement.findByIdAndDelete(id);
};

module.exports = {
    createEntitlement,
    findById,
    listEntitlements,
    updateEntitlement,
    deleteEntitlement
};