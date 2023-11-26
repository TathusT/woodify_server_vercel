const express = require('express');
const router = express.Router();
require('dotenv').config();
const prisma = require('../global/prisma');
const prisma_query = require('../global/prisma_query')

router.get('/wood', async (req, res) => {
    const wood = await prisma_query.getWoodInfo();
    res.json(wood);
});

module.exports = router;