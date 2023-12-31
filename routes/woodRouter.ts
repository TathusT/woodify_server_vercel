import express from 'express';
import { Router } from 'express';
import { prisma } from '../global/prisma';
import { getWoodInfo } from '../global/prisma_query';
require('dotenv').config();

const router: Router = express.Router();

router.get('/wood', async (req, res) => {
  try {
    const wood = await getWoodInfo();
    res.json(wood);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;