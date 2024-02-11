import express from "express";
import { Router } from "express";
import { prisma } from "../global/prisma";
import { decryptAccessToken } from "../global/token_manager";
import { addNote, getNoteFromCid, readMessage } from "../global/prisma_query_note";
import { io } from "../index";
require("dotenv").config();

const router: Router = express.Router();


router.get("/note/:c_id", async (req, res) => {
  try {
    const c_id = req.params.c_id;
    const note = await getNoteFromCid(c_id);
    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/note", async (req, res) => {
  try {
    const data = req.body;
    const c_id = data.c_id;
    const token = data.token;
    const description = data.description;
    const u_id = await decryptAccessToken(token);
    const note = await addNote(description, c_id, u_id.id);
    // Emit message to specific room (sessionId)
    io.to(data.sessionId).emit('received_message', note);

    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/read_message", async (req, res) => {
  try {
    const data = req.body;
    const c_id = data.c_id;
    const token = data.token;
    const u_id = await decryptAccessToken(token);
    const note = await readMessage(u_id.id, c_id);
    res.status(200).json({message : "read", data : note});
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
