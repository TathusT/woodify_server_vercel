import express from "express";
import { Router } from "express";
import { prisma } from "../global/prisma";
import {
  getClassifyCountByWood,
  getClassifyWithDate,
  getClassifyWithDay,
  getClassifyWithAll,
  getClassifyWithWaitForVerify,
  getClassifyById,
  updateClassify,
  getClassifyToday,
  getClassifyAll,
  getPieChartStatusData
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

router.get("/get_classiy_today", async (req, res) => {
  const today = new Date();
  try {
    const classifyCount = await getClassifyToday(today);
    res.status(200).json(classifyCount);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});


router.get("/get_classiy_status", async (req, res) => {
  try {
    const classifyCount = await getPieChartStatusData();
    res.status(200).json(classifyCount);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});


router.get("/classify/:c_id",async (req, res) => {
    const c_id = req.params.c_id;
    try {
      const classify = await getClassifyById(c_id);
      res.status(200).json(classify);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
})

router.get("/classify/:currentPage/:pageSize",async (req, res) => {
  try {
    const page = req.params.currentPage;
    const pageSize = req.params.pageSize
    const classify = await getClassifyAll(parseInt(page), parseInt(pageSize));
    res.status(200).json(classify);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
})

router.get('/classify_today',async (req, res) => {
    const data = await getClassifyWithDay();
    res.status(200).json(data)
})

router.get('/classify_all',async (req, res) => {
    const data = await getClassifyWithAll();
    res.status(200).json(data)
})

router.get('/classify_verify', async (req, res) => {
  const data = await getClassifyWithAll();
  res.status(200).json(data)
})


router.get('/classify_wait_for_verify', async (req, res) => {
    const data = await getClassifyWithWaitForVerify();
    res.status(200).json(data)
})

router.put('/classify',async (req, res) => {
  const reqData = req.body
  const c_id = reqData.c_id
  const location = reqData.location
  const data = await updateClassify(c_id, location);
  res.status(200).json(data)
})

export default router;
