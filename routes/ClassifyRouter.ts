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
  getClassifyAllFilter,
  updateStatusVerify,
  updateSelectResult,
  deleteClassify
} from "../global/prisma_query_classify";
import { decryptAccessToken } from "../global/token_manager";
require("dotenv").config();

const router: Router = express.Router();

router.post("/dashboard_classify_column", async (req, res) => {
  try {
    const data = req.body;
    const filter = data.filter
    const classify = await getClassifyCountByWood(filter);
    res.status(200).json(classify);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/dashboard_classify_line", async (req, res) => {
  try {
    const data = req.body;
    const filter = data.filter
    const classify = await getClassifyWithDate(filter);
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


router.get("/classify/:c_id", async (req, res) => {
  const c_id = req.params.c_id;
  try {
    const classify = await getClassifyById(c_id);
    res.status(200).json(classify);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
})

router.get("/classify/:currentPage/:pageSize", async (req, res) => {
  try {
    const page = req.params.currentPage;
    const pageSize = req.params.pageSize
    const classify = await getClassifyAll(parseInt(page), parseInt(pageSize));
    res.status(200).json(classify);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
})

router.post("/classify", async (req, res) => {
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

router.get("/classify_user_id/:currentPage/:pageSize/:u_id", async (req, res) => {
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

router.post("/classify_user_id", async (req, res) => {
  try {
    const data = req.body
    const page = data.currentPage;
    const pageSize = data.pageSize
    const uid = data.u_id;
    let filter = data.filter

    if (filter.date.dateTo != '') {
      filter['create_at'] = filter['create_at'] || {};
      const dateToISO = new Date(filter.date.dateTo + 'T16:59:59.999Z');
      dateToISO.setDate(dateToISO.getDate());
      filter['create_at']['lte'] = dateToISO;
    }
    if (filter.date.dateFrom != '') {
      filter['create_at'] = filter['create_at'] || {};
      filter['create_at']['gte'] = new Date(filter.date.dateFrom.replace(/-/g, '/'));
    }
    delete filter.date;
    const classify = await getClassifyAllWithUserId(parseInt(page), parseInt(pageSize), uid, filter);
    res.status(200).json(classify);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
})

router.get('/classify_today', async (req, res) => {
  const data = await getClassifyWithDay();
  res.status(200).json(data)
})

router.get('/classify_today_with_user_id/:u_id', async (req, res) => {
  const u_id = req.params.u_id
  const data = await getClassifyWithDayWithUserId(u_id);
  res.status(200).json(data)
})

router.get('/classify_all', async (req, res) => {
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

router.put('/classify', async (req, res) => {
  const reqData = req.body
  const c_id = reqData.c_id
  const location = reqData.location
  const data = await updateClassify(c_id, location);
  res.status(200).json(data)
})

router.get('/classify_donut_with_userid/:u_id', async (req, res) => {
  const u_id = req.params.u_id
  const data = await getClassifyByUserIdDonutChart(u_id);
  res.status(200).json(data)
})

router.post('/classify_donut_with_userid_query', async (req, res) => {
  const data = req.body
  const u_id = data.u_id
  const filter = data.filter
  const wood = await getClassifyByUserIdDonutChart(u_id, filter);
  res.status(200).json(wood)
})

router.get('/classify_status_donut_with_userid/:u_id', async (req, res) => {
  const u_id = req.params.u_id
  const data = await getClassifyStatusByUserIdDonutChart(u_id);
  res.status(200).json(data)
})

router.post('/verify_status_classify', async (req, res) => {
  const data = req.body
  const u_id = data.u_id
  const c_id = data.c_id
  const description = data.description;
  const status = data.status
  const classify = updateStatusVerify(c_id, u_id, status, description)
  res.status(200).json({ message: "verify success", data: classify })
})

router.put('/update_select_result', async (req, res) => {
  const data = req.body
  const u_id = data.u_id
  const c_id = data.c_id

  const result = data.result;
  const classify = updateSelectResult(c_id, u_id, result)
  res.status(200).json({ message: "update success", data: classify })
})

router.post('/delete_classify', async (req, res) => {
  const data = req.body
  const c_id = data.c_id
  await deleteClassify(c_id)
  res.status(200).json({ message: "delete success" })
})




export default router;
