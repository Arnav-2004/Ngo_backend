import Workshop from '../models/workshop.model.js';

// Create a workshop
export async function createWorkshop(data) {
  return await Workshop.create(data);
}

// Get all workshops
export async function getWorkshops() {
  return await Workshop.find();
}

// Get a workshop by ID
export async function getWorkshopById(id) {
  return await Workshop.findById(id);
}

// Update a workshop
export async function updateWorkshop(id, data) {
  return await Workshop.findByIdAndUpdate(id, data, { new: true });
}

// Delete a workshop
export async function deleteWorkshop(id) {
  return await Workshop.findByIdAndDelete(id);
}
