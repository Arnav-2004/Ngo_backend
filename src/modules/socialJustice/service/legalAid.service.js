import LegalAid from "../models/legalAid.model.js";

export const createLegalAid = async (data) => {
  return await LegalAid.create(data);
};

export const getAllLegalAids = async () => {
  return await LegalAid.find();
};

export const getLegalAidById = async (id) => {
  return await LegalAid.findById(id);
};

export const updateLegalAid = async (id, data) => {
  return await LegalAid.findByIdAndUpdate(id, data, { new: true });
};

export const deleteLegalAid = async (id) => {
  return await LegalAid.findByIdAndDelete(id);
};
