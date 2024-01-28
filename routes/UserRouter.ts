import express from 'express';
import { Router } from 'express';
import { getUserFromUserId, getAllUser } from '../global/prisma_query_user';
require('dotenv').config();

const router: Router = express.Router();

router.get("/user/:u_id",async (req, res) => {
    const u_id = req.params.u_id;
    try {
      const classify = await getUserFromUserId(u_id);
      res.status(200).json(classify);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
})

router.get("/user",async (req, res) => {
  try {
    const users = await getAllUser();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
})

export default router;