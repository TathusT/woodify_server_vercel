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
  getPieChartStatusData,
  getClassifyWithDayWithUserId,
  getClassifyWithWaitForVerifyWithUserId,
  getClassifyByUserIdDonutChart,
  getClassifyStatusByUserIdDonutChart,
  getClassifyAllWithUserId,
  getClassifyAllFilter
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

router.post("/classify",async (req, res) => {
  try {
    const data = req.body
    const page = data.currentPage;
    const pageSize = data.pageSize
    const filter = data.filter
    const classify = await getClassifyAllFilter(parseInt(page), parseInt(pageSize), filter);
    res.status(200).json(classify);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
})

router.get("/classify_user_id/:currentPage/:pageSize/:u_id",async (req, res) => {
  try {
    const page = req.params.currentPage;
    const pageSize = req.params.pageSize
    const uid = req.params.u_id;
    const classify = await getClassifyAllWithUserId(parseInt(page), parseInt(pageSize), uid);
    res.status(200).json(classify);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
})

router.post("/classify_user_id",async (req, res) => {
  try {
    const data = req.body
    const page = data.currentPage;
    const pageSize = data.pageSize
    const uid = data.u_id;
    const filter = data.filter;
    const classify = await getClassifyAllWithUserId(parseInt(page), parseInt(pageSize), uid, filter);
    res.status(200).json(classify);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
})

router.get('/classify_today',async (req, res) => {
    const data = await getClassifyWithDay();
    res.status(200).json(data)
})

router.get('/classify_today_with_user_id/:u_id',async (req, res) => {
  const u_id = req.params.u_id
  const data = await getClassifyWithDayWithUserId(u_id);
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

router.get('/classify_wait_for_verify/:u_id', async (req, res) => {
  const u_id = req.params.u_id
  const data = await getClassifyWithWaitForVerifyWithUserId(u_id);
  res.status(200).json(data)
})

router.put('/classify',async (req, res) => {
  const reqData = req.body
  const c_id = reqData.c_id
  const location = reqData.location
  const data = await updateClassify(c_id, location);
  res.status(200).json(data)
})

router.get('/classify_donut_with_userid/:u_id',async (req, res) => {
  const u_id = req.params.u_id
  const data = await getClassifyByUserIdDonutChart(u_id);
  res.status(200).json(data)
})

router.post('/classify_donut_with_userid_query',async (req, res) => {
  const data = req.body
  const u_id = data.u_id
  const filter = data.filter
  const wood = await getClassifyByUserIdDonutChart(u_id, filter);
  res.status(200).json(wood)
})

router.get('/classify_status_donut_with_userid/:u_id',async (req, res) => {
  const u_id = req.params.u_id
  const data = await getClassifyStatusByUserIdDonutChart(u_id);
  res.status(200).json(data)
})


export default router;
