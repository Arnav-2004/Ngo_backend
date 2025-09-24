import * as workshopService from '../service/socialJustice.service.js';

// Create
export async function createWorkshop(req, res) {
  try {
    const workshop = await workshopService.createWorkshop(req.body);
    res.status(201).json(workshop);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

// Read all
export async function getWorkshops(req, res) {
  try {
    const workshops = await workshopService.getWorkshops();
    res.json(workshops);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Read one
export async function getWorkshopById(req, res) {
  try {
    const workshop = await workshopService.getWorkshopById(req.params.id);
    if (!workshop) return res.status(404).json({ error: 'Workshop not found' });
    res.json(workshop);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Update
export async function updateWorkshop(req, res) {
  try {
    const workshop = await workshopService.updateWorkshop(req.params.id, req.body);
    if (!workshop) return res.status(404).json({ error: 'Workshop not found' });
    res.json(workshop);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

// Delete
export async function deleteWorkshop(req, res) {
  try {
    const workshop = await workshopService.deleteWorkshop(req.params.id);
    if (!workshop) return res.status(404).json({ error: 'Workshop not found' });
    res.json({ message: 'Workshop deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
