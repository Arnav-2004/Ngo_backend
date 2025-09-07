import express from 'express';
import {
  createWorkshop,
  getWorkshops,
  getWorkshopById,
  updateWorkshop,
  deleteWorkshop
} from '../../modules/socialJustice/controller/socialJustice.controller.js';

const router = express.Router();

router.post('/workshops', createWorkshop);
router.get('/workshops', getWorkshops);
router.get('/workshops/:id', getWorkshopById);
router.put('/workshops/:id', updateWorkshop);
router.delete('/workshops/:id', deleteWorkshop);

export default router;
