import * as cbucboService from "../services/cbucbo.service.js";

export const createcbucbo = async (req, res, next) => {
  try {
    const cbucbo = await cbucboService.createcbucbo(req.body);
    return res.status(201).json({ success: true, data: cbucbo });
  } catch (err) {
    next(err);
  }
};

export const getAllcbucbo = async (req, res, next) => {
  try {
    const cbucbos = await cbucboService.getAllcbucbo();
    return res.json({ success: true, data: cbucbos });
  } catch (err) {
    next(err);
  }
};

export const getcbucboById = async (req, res, next) => {
  try {
    const cbucbo = await cbucboService.getcbucboById(req.params.id);
    if (!cbucbo) {
      return res.status(404).json({ success: false, message: "cbucbo not found" });
    }
    return res.json({ success: true, data: cbucbo });
  } catch (err) {
    next(err);
  }
};

export const updatecbucbo = async (req, res, next) => {
  try {
    const cbucbo = await cbucboService.updatecbucbo(req.params.id, req.body);
    if (!cbucbo) {
      return res.status(404).json({ success: false, message: "cbucbo not found" });
    }
    return res.json({ success: true, data: cbucbo });
  } catch (err) {
    next(err);
  }
};

export const deletecbucbo = async (req, res, next) => {
  try {
    const cbucbo = await cbucboService.deletecbucbo(req.params.id);
    if (!cbucbo) {
      return res.status(404).json({ success: false, message: "cbucbo not found" });
    }
    return res.json({ success: true, message: "cbucbo deleted successfully" });
  } catch (err) {
    next(err);
  }
};
