const prisma = require('./prisma');

async function getWoodInfo() {
    return await prisma.wood_info.findMany();
}

module.exports = {
    getWoodInfo,

  };