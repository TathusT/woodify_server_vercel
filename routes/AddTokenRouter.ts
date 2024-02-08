import express from "express";
import { Router } from "express";
import { prisma } from "../global/prisma";
import {
  decryptAccessToken,
  generateAccessToken,
} from "../global/token_manager";
import { addNote, getNoteFromCid } from "../global/prisma_query_note";
import { io } from "../index";
import { checkTimeLinkInvite } from "../global/prisma_query_addToken";
require("dotenv").config();

const router: Router = express.Router();

router.post("/token_invited", async (req, res) => {
  try {
    const data = req.body;
    const a_id = data.a_id;
    const a_token = await checkTimeLinkInvite(a_id);

    let newData: any = {};
    if (a_token.message == "update success") {
      newData["a_token"] = a_token;
      newData["access_token"] = await generateAccessToken({
        id: a_token.userid,
      });
    } else {
      newData["a_token"] = a_token;
    }
    console.log(newData);

    res.status(200).json(newData);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
