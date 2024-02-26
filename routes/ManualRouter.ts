import express, { Router } from "express";
import {
  createManual,
  getAllManual,
  getManual,
  updateManualImage,
  updateManualNotImage,
  deleteManual,
  getAllManualWithFilter,
} from "../global/prisma_query_manual";
import { decryptAccessToken } from "../global/token_manager";
import multer from "multer";
import path from "path";
import fs from "fs";
require("dotenv").config();

const router: Router = express.Router();

const uploadDirectory = "image/manual";
let uploadedFilename: any;

if (!fs.existsSync(uploadDirectory)) {
  fs.mkdirSync(uploadDirectory);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDirectory);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    uploadedFilename =
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname);
    cb(null, uploadedFilename);
  },
});

const upload = multer({ storage: storage });

router.post("/create_manual", upload.single("image"), async (req, res) => {
  try {
    const data = req.body;
    const topic = data.title;
    const description = data.body;
    const status = data.status == "true" ? true : false;
    const token = data.token;
    const u_id = await decryptAccessToken(token);
    await createManual(topic, description, status, uploadedFilename, u_id.id);
    res.status(200).json({ message: "create success" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/edit_manual_noupdateImage", async (req, res) => {
  try {
    const data = req.body;
    const topic = data.title;
    const description = data.body;
    const status = data.status == true ? true : false;
    const token = data.token;
    const u_id = await decryptAccessToken(token);
    const id = data.id;
    await updateManualNotImage(topic, description, status, u_id.id, id);
    res.status(200).json({ message: "update success" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post(
  "/edit_manual_updateImage",
  upload.single("image"),
  async (req, res) => {
    try {
      const data = req.body;
      const topic = data.title;
      const description = data.body;
      const status = data.status == true ? true : false;
      const token = data.token;
      const u_id = await decryptAccessToken(token);
      const id = data.id;
      await updateManualImage(
        topic,
        description,
        status,
        uploadedFilename,
        u_id.id,
        id
      );
      res.status(200).json({ message: "update success" });
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
);

router.get("/all_manual", async (req, res) => {
  try {
    const manual = await getAllManual();
    res.status(200).json(manual);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/all_manual_filter", async (req, res) => {
  try {
    const data = req.body;
    const pageSize = data.pageSize;
    const currentPage = data.currentPage;
    const filter = data.filter;
    const orderBy = data.orderBy;
    const manual = await getAllManualWithFilter(
      parseInt(currentPage),
      parseInt(pageSize),
      filter,
      orderBy
    );
    res.status(200).json(manual);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/manual/:id", async (req, res) => {
  try {
    const manualId = req.params.id;
    const manual = await getManual(manualId);
    res.status(200).json(manual);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/manual_delete", async (req, res) => {
  try {
    const data = req.body;
    const token = data.token;
    const m_id = data.m_id;
    console.log(data);
    
    const u_id = await decryptAccessToken(token);
    await deleteManual(m_id, u_id.id);
    res.status(200).json({ message: "delete success" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
