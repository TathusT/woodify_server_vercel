import express from 'express';
import { Router } from 'express';
import { getUserFromUserId, getAllUser, updateRoleFromId } from '../global/prisma_query_user';
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

router.put("/update_role",async (req, res) => {
  try {
    const data = req.body;
    const uid = data.u_id;
    const role = data.role
    const user = await updateRoleFromId(uid, role);
    res.status(200).json({ message: "update role success", data : user });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
})

export default router;