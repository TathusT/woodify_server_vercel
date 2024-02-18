import { prisma } from "./prisma";
import { addNote } from "./prisma_query_note";
import { getUserFromLineId } from "./prisma_query_user";
import cuid from "cuid";

type GroupByArgs<T> = {
  by: Array<keyof T>;
  orderBy?: Record<string, boolean | null>;
  _count?: Record<string, boolean | null>;
};

interface CountData {
  name: string;
  month: string;
  count: number;
}

async function getClassifyCountByWood(dateFrom: string, dateTo: string) {
  const dateFromIso = new Date(dateFrom);
  const dateToIso = new Date(dateTo);

  const classifyData = await prisma.classify.groupBy({
    by: ["select_result"],
    where: {
      create_at: {
        gte: dateFromIso,
        lte: dateToIso,
      },
    },
    _count: {
      _all: true,
    },
  });

  return classifyData.map((group) => ({
    wood_name: group.select_result,
    amount: group._count._all,
  }));
}

const getClassifyWithDate = async (dateFrom: string, dateTo: string) => {
  const dateFromIso = new Date(dateFrom);
  const dateToIso = new Date(dateTo);
  const months = [
    { short: "ม.ค", full: "มกราคม" },
    { short: "ก.พ", full: "กุมภาพันธ์" },
    { short: "มี.ค", full: "มีนาคม" },
    { short: "เม.ย", full: "เมษายน" },
    { short: "พ.ค", full: "พฤษภาคม" },
    { short: "มิ.ย", full: "มิถุนายน" },
    { short: "ก.ค", full: "กรกฎาคม" },
    { short: "ส.ค", full: "สิงหาคม" },
    { short: "ก.ย", full: "กันยายน" },
    { short: "ต.ค", full: "ตุลาคม" },
    { short: "พ.ย", full: "พฤศจิกายน" },
    { short: "ธ.ค", full: "ธันวาคม" },
  ];
  const classifyData = await prisma.classify.findMany({
    where: {
      create_at: {
        gte: dateFromIso,
        lte: dateToIso,
      },
    },
  });
  const resultMap = new Map();

  classifyData.forEach((entry) => {
    const createAtDate = new Date(entry.create_at);
    const month = createAtDate.getMonth();

    const key = `${entry.select_result}-${month}`;

    // หากมี key นี้ใน Map แล้ว ให้เพิ่มค่า count
    if (resultMap.has(key)) {
      resultMap.set(key, resultMap.get(key) + 1);
    } else {
      resultMap.set(key, 1);
    }
  });
  const resultData: any = [];

  resultMap.forEach((count, key) => {
    const [name, month] = key.split("-");

    resultData.push({
      name: name,
      month: months[parseInt(month)].short,
      count: count,
    });
  });
  resultData.sort((a: any, b: any) => {
    const monthOrder =
      months.findIndex((month) => month.short === a.month) -
      months.findIndex((month) => month.short === b.month);
    return monthOrder || a.count - b.count;
  });

  return resultData;
};

const getClassifyToday = async (today: any) => {
  today.setHours(0, 0, 0, 0);
  const result = await prisma.classify.count({
    where: {
      create_at: {
        gte: today,
        lt: new Date(today.getTime() + 24 * 60 * 60 * 1000),
      },
    },
  });
  return result;
};

const getClassifyAll = async (page : number, pageSize : number) => {
  const skip = (page - 1) * pageSize;
  const data = await prisma.classify.findMany({
    skip,
    take: pageSize,
    orderBy : {
      create_at : 'desc'
    }
  });
  const total = await prisma.classify.count();
  return { data, total };
}

const getClassifyAllWithUserId = async (page: number, pageSize: number, uid : string, filter: any = null) => {
  const skip = (page - 1) * pageSize;

  const data = await prisma.classify.findMany({
      skip,
      take: pageSize,
      where: {
        create_by : uid,
          ...filter
      },
      orderBy: {
          create_at: 'desc'
      },
      include: {
          notes: true,
          creator : true
      }
  });

  const total = await prisma.classify.count({
      where: {
          ...filter
      }
  });

  return { data, total };
};


const getClassifyAllFilter = async (page : number, pageSize : number, filter : any = null) => {
  const skip = (page - 1) * pageSize;
  const data = await prisma.classify.findMany({
    skip,
    take: pageSize,
    where : {
      ...filter
    },
    orderBy : {
      create_at : 'desc'
    },
  });
  const total = await prisma.classify.count({
    where : {
      ...filter
    }
  });
  return { data, total };
}

const getPieChartStatusData = async () => {
  const counts = await prisma.classify.groupBy({
    by: ['status_verify'],
    _count: {
      status_verify: true,
    }
  });
  return counts;
}


const getClassifyWithDay = async () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const result = await prisma.classify.count({
    where: {
      create_at: {
        gte: today,
        lt: new Date(today.getTime() + 24 * 60 * 60 * 1000),
      },
    },
  });

  return result;
};

const getClassifyWithDayWithUserId = async (u_id : string) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const result = await prisma.classify.count({
    where: {
      create_at: {
        gte: today,
        lt: new Date(today.getTime() + 24 * 60 * 60 * 1000),
      },
      create_by : u_id
    },
  });

  return result;
};

const getClassifyWithAll = async () => {
  const result = await prisma.classify.count();
  return result;
};

const getClassifyById = async (c_id: string) => {
  const classify = await prisma.classify.findFirst({
    where: {
      c_id: c_id,
    },
    include : {
      creator : true
    }
  });
  return classify;
};

const getClassifyWithWaitForVerify = async () => {
  const result = await prisma.classify.count({
    where: {
      status_verify: "WAITING_FOR_VERIFICATION",
    },
  });
  return result;
};

const getClassifyWithWaitForVerifyWithUserId = async (u_id : string) => {
  const result = await prisma.classify.count({
    where: {
      status_verify: "WAITING_FOR_VERIFICATION",
      create_by : u_id
    },
  });
  return result;
};

const getClassifyWithVerify = async () => {
  const result = await prisma.classify.count({
    where: {
      status_verify: "PASSED_CERTIFICATION",
    },
  });
  return result;
};

const createClassifyDB = async (
  prediction: any,
  line_id: string,
  imagePath: string
) => {
  const userId = await getUserFromLineId(line_id);
  return await prisma.classify.create({
    data: {
      status: true,
      status_verify: "WAITING_FOR_VERIFICATION",
      select_result: prediction.prediction[0].wood,
      result: prediction.prediction,
      session_id_note_room: cuid(),
      create_by: userId.u_id,
      verify_by: null,
      image: imagePath,
    },
  });
};

const updateClassify = async (c_id: string, location: string) => {
  return await prisma.classify.update({
    where: {
      c_id: c_id,
    },
    data: {
      location: location,
    },
  });
};

const getClassifyByUserIdDonutChart = async (uid :string, filter : any = null) => {
  const classifyData = await prisma.classify.groupBy({
    by: ["select_result"],
    where: {
      create_by: uid,
      ...filter
    },
    _count: {
      _all: true,
    },
  });

  return classifyData.map((group) => ({
    wood_name: group.select_result,
    amount: group._count._all,
  }));
}

const getClassifyStatusByUserIdDonutChart = async (uid :string) => {
  const classifyData = await prisma.classify.groupBy({
    by: ["status_verify"],
    where: {
      create_by: uid
    },
    _count: {
      _all: true,
    },
  });

  return classifyData.map((group) => ({
    status: group.status_verify == 'WAITING_FOR_VERIFICATION' ? 'รอการรับรอง' : group.status_verify == 'FAILED_CERTIFICATION' ? 'ไม่ผ่าน' : 'ผ่าน',
    amount: group._count._all,
  }));
}

const updateStatusVerify = async (cid : string, uid : string, status : any, description : string) => {
  const classify = await prisma.classify.update({
    where : {
      c_id : cid
    },
    data : {
      verify_by : uid,
      status_verify : status
    }
  })

  if(classify){
    await addNote(description, cid, uid);
  }
}


const updateSelectResult = async (cid : string, uid : string, result : string) => {
  const classify = await prisma.classify.update({
    where : {
      c_id : cid
    },
    data : {
      select_result : result,
      verify_by : uid
    }
  })
}



export {
  getClassifyCountByWood,
  getClassifyWithDate,
  getClassifyWithDay,
  getClassifyWithAll,
  getClassifyWithWaitForVerify,
  getClassifyById,
  createClassifyDB,
  updateClassify,
  getClassifyToday,
  getClassifyWithVerify,
  getClassifyAll,
  getPieChartStatusData,
  getClassifyWithDayWithUserId,
  getClassifyWithWaitForVerifyWithUserId,
  getClassifyByUserIdDonutChart,
  getClassifyStatusByUserIdDonutChart,
  getClassifyAllWithUserId,
  getClassifyAllFilter,
  updateStatusVerify,
  updateSelectResult
};
