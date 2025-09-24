const { errorWrapper } = require("../../middleware/errorWrapper");
const { responseUtils } = require("../../utils/response.utils");
const {
    createEntitlement,
    findById,
    listEntitlements,
    updateEntitlement,
    deleteEntitlement
} = require("../service/entitlement.service");

const addEntitlement = errorWrapper(async (req, res) => {
    const entitlement = await createEntitlement(req.body);
    
    responseUtils.success(res, {
        status: 201,
        data: entitlement,
    });
});

const getEntitlements = errorWrapper(async (req, res) => {
    const { entitlements, total, page, limit } = await listEntitlements(req.query);
    
    responseUtils.success(res, {
        status: 200,
        data: { entitlements, total, page, limit },
    });
});

const getEntitlement = errorWrapper(async (req, res) => {
    const entitlement = await findById(req.params.id);
    
    if (!entitlement) {
        throw { statusCode: 404, message: "Entitlement not found" };
    }
    
    responseUtils.success(res, {
        status: 200,
        data: entitlement,
    });
});

const editEntitlement = errorWrapper(async (req, res) => {
    const entitlement = await updateEntitlement(req.params.id, req.body);
    
    if (!entitlement) {
        throw { statusCode: 404, message: "Entitlement not found" };
    }
    
    responseUtils.success(res, {
        status: 200,
        data: entitlement,
    });
});

const removeEntitlement = errorWrapper(async (req, res) => {
    const entitlement = await deleteEntitlement(req.params.id);
    
    if (!entitlement) {
        throw { statusCode: 404, message: "Entitlement not found" };
    }
    
    responseUtils.success(res, {
        status: 200,
        message: "Entitlement deleted successfully",
    });
});

module.exports = {
    addEntitlement,
    getEntitlements,
    getEntitlement,
    editEntitlement,
    removeEntitlement
};