import { Router } from "express";
import express from "express";
import mongoose from 'mongoose';
import socialJusticeRouter from '../routers/socialJustice/socialJustice.router.js';
const router = Router();
const app = express();
app.use(express.json());

// Routes
app.use('/api', socialJusticeRouter);

mongoose.connect('mongodb://localhost:27017/ngo_backend')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.listen(3000, () => console.log('Server running on port 3000'));

import { healthCheck } from "../controllers/app.controller.js";

router.get("/", healthCheck);

export default router;
