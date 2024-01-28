import express from 'express';
import { Router } from 'express';
import { prisma } from '../global/prisma';
import { getWoodInfo, getWoodInfoOne, updateWoodInfoNoImage, deleteWoodInfo, updateWoodImage, createWoodInfo, deleteImageWood } from '../global/prisma_query_wood';
import { decryptAccessToken } from "../global/token_manager";
import multer from "multer";
import path from "path";
import fs from "fs";
require('dotenv').config();

const router: Router = express.Router();

const uploadDirectory = "image/wood_image";

if (!fs.existsSync(uploadDirectory)) {
  fs.mkdirSync(uploadDirectory);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDirectory);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const uploadedFilename =
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname);
    cb(null, uploadedFilename);
  },
});

const upload = multer({ storage: storage });

router.get('/wood', async (req, res) => {
  try {
    const wood = await getWoodInfo();
    res.json(wood);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/wood/:id', async (req, res) => {
  try {
    const woodId = req.params.id;
    const wood = await getWoodInfoOne(woodId);
    res.json(wood);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.put('/wood_update', async (req, res) =>{
  try {
    const data = req.body;
    const common_name = data.common_name
    const eng_name = data.eng_name
    const botanical_name = data.botanical_name
    const pedigree = data.pedigree
    const place_of_origin = data.place_of_origin
    const wood_characteristics = data.wood_characteristics
    const anatomical_characteristics = data.anatomical_characteristics
    const other = data.other
    const token = data.token;
    const status = data.status
    const w_id = data.id
    const u_id = await decryptAccessToken(token);
    await updateWoodInfoNoImage(common_name, eng_name, botanical_name, pedigree, place_of_origin, wood_characteristics, anatomical_characteristics, other, status, w_id, u_id)
    res.status(200).json({ message: "update success" });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
})

router.post('/wood', async (req, res) =>{
  try {
    const data = req.body;
    const common_name = data.common_name
    const eng_name = data.eng_name
    const botanical_name = data.botanical_name
    const pedigree = data.pedigree
    const place_of_origin = data.place_of_origin
    const wood_characteristics = data.wood_characteristics
    const anatomical_characteristics = data.anatomical_characteristics
    const other = data.other
    const token = data.token;
    const status = data.status
    const u_id = await decryptAccessToken(token);
    const data_wood = await createWoodInfo(common_name, eng_name, botanical_name, pedigree, place_of_origin, wood_characteristics, anatomical_characteristics, other, status, u_id)
    res.status(200).json({ message: "create success", data : data_wood });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
})

router.put('/wood_image', upload.array("files"), async (req, res) => {
  try{
    const w_id = req.body.id
    const uploadedFilenames = (req.files as Express.Multer.File[]).map(file => file.filename);
    let status = await updateWoodImage(uploadedFilenames, w_id);
    return status;
  }
  catch(error){
    res.status(500).json({ error: 'Internal Server Error' });
  }
})

router.post('/image_wood_delete', async (req, res) =>{
  try {
    const data = req.body;
    const w_id = data.id;
    const deleteImage = data.delete_image;
    await deleteImageWood(w_id, deleteImage)
    res.status(200).json({ message: "delete success" });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
})

router.delete('/wood_delete', async (req, res) =>{
  try {
    const data = req.body;
    const token = data.token;
    const w_id = data.id
    const u_id = await decryptAccessToken(token);
    await deleteWoodInfo(w_id, u_id.id)
    res.status(200).json({ message: "delete success" });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
})


export default router;