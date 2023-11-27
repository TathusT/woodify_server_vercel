import express from 'express';
import { Router } from 'express';
import { prisma } from '../../global/prisma';

require('dotenv').config();
const router: Router = express.Router();

router.get('/wood', async (req, res) => {
  try {
    const wood = await prisma.wood_info.findMany();
    res.json(wood);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;