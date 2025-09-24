import cbucbo from "../models/cbucbo.model.js";

export const createcbucbo = async (data) => {
  return await cbucbo.create(data);
};

export const getAllcbucbo = async (filter = {}, options = {}) => {
  return await cbucbo.find(filter)
    .sort(options.sort || {})
    .skip(options.skip || 0)
    .limit(options.limit || 0);
};

export const getcbucboById = async (id) => {
  return await cbucbo.findById(id);
};

export const updatecbucbo = async (id, data) => {
  return await cbucbo.findByIdAndUpdate(id, data, { new: true });
};

export const deletecbucbo = async (id) => {
  return await cbucbo.findByIdAndDelete(id);
};
