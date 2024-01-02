import express from "express";
import { Router } from "express";
import { prisma } from "../global/prisma";
import {
  getClassifyCountByWood,
  getClassifyWithDate,
  getClassifyWithDay,
  getClassifyWithAll,
  getClassifyWithWaitForVerify
} from "../global/prisma_query_classify";
import { decryptAccessToken } from "../global/token_manager";
require("dotenv").config();

const router: Router = express.Router();

router.get("/dashboard_classify_column/:dateFrom/:dateTo", async (req, res) => {
  try {
    const dateFrom = req.params.dateFrom.replace(/-/g, '/');
    const dateTo = req.params.dateTo.replace(/-/g, '/');
    const classify = await getClassifyCountByWood(dateFrom, dateTo);
    res.status(200).json(classify);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/dashboard_classify_line/:dateFrom/:dateTo", async (req, res) => {
  const dateFrom = req.params.dateFrom.replace(/-/g, '/');
  const dateTo = req.params.dateTo.replace(/-/g, '/');
  try {
    const classify = await getClassifyWithDate(dateFrom, dateTo);
    res.status(200).json(classify);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get('/classify_today',async (req, res) => {
    const data = await getClassifyWithDay();
    res.status(200).json(data)
})

router.get('/classify_all',async (req, res) => {
    const data = await getClassifyWithAll();
    res.status(200).json(data)
})


router.get('/classify_wait_for_verify',async (req, res) => {
    const data = await getClassifyWithWaitForVerify();
    res.status(200).json(data)
})

export default router;
