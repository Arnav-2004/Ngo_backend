import * as legalAidService from "../services/legalAid.service.js";

export const createLegalAid = async (req, res) => {
  try {
    const legalAid = await legalAidService.createLegalAid(req.body);
    res.status(201).json(legalAid);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getAllLegalAids = async (req, res) => {
  try {
    const legalAids = await legalAidService.getAllLegalAids();
    res.json(legalAids);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getLegalAidById = async (req, res) => {
  try {
    const legalAid = await legalAidService.getLegalAidById(req.params.id);
    if (!legalAid) return res.status(404).json({ error: "Not found" });
    res.json(legalAid);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateLegalAid = async (req, res) => {
  try {
    const legalAid = await legalAidService.updateLegalAid(
      req.params.id,
      req.body
    );
    if (!legalAid) return res.status(404).json({ error: "Not found" });
    res.json(legalAid);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteLegalAid = async (req, res) => {
  try {
    const legalAid = await legalAidService.deleteLegalAid(req.params.id);
    if (!legalAid) return res.status(404).json({ error: "Not found" });
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
