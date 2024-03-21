require("dotenv").config();
import axios from "axios";
import { prisma } from "../../global/prisma";
import cuid from "cuid";
import fs from "fs";
import FormData from "form-data";

async function main() {
  const data = [
    "แดง",
    "ประดู่",
    "แอ๊ก",
    "สัก",
    "รัง",
    "ยางนา",
    "ยางพารา",
    "พะยูง",
    "มะค่าโมง",
    "พะยอม",
    "ชิงชัน",
    "ตะเคียนทอง",
    "เต็ง",
    "บาเลา",
  ];
  const status: any = [
    "WAITING_FOR_VERIFICATION",
    "PASSED_CERTIFICATION",
    "FAILED_CERTIFICATION",
  ];
  for (let i = 0; i < 8000; i++) {
    const randomIndex = Math.floor(Math.random() * data.length);
    let randomMonth = Math.floor(Math.random() * 12) + 1;
    const days = Math.floor(Math.random() * 27) + 1;
    const formattedDays = days < 10 ? `0${days}` : `${days}`;
    const randomValue = data[randomIndex];
    if (randomMonth > 12) {
      randomMonth = 12;
    } else if (randomMonth == 0) {
      randomMonth = 1;
    }
    const formattedMonths =
      randomMonth < 10 ? `0${randomMonth}` : `${randomMonth}`;
    console.log(formattedDays, formattedMonths);
    const randomValueStatus = Math.floor(Math.random() * 3);
    const randomValueUser = Math.floor(Math.random() * 2);
    const userss = [
      "bfccfa60-d0ec-4d98-bb7d-2c7b66977591",
      "e66e6b82-5376-4a70-9a7a-1c07b5dd202d",
    ];
    const wood = data[Math.floor(Math.random() * 14)];
    const imagePath = `/image/imageData/${wood}.jpeg`;
    const formData = new FormData();
    let dataPrediction: any;
    formData.append("file", fs.createReadStream(`.${imagePath}`));
    await axios
      .post(`${process.env.PATH_SERVICE_API}/analyze`, formData)
      .then(async (res) => {
        dataPrediction = res.data;
        dataPrediction.prediction.sort(
          (a: any, b: any) => b.percentage - a.percentage
        );
      });
    await prisma.classify.create({
      data: {
        status: true,
        status_verify: status[randomValueStatus],
        select_result: wood,
        result: dataPrediction.prediction,
        session_id_note_room: cuid(),
        create_at: new Date(`2024-${formattedMonths}-${formattedDays}`),
        create_by: userss[randomValueUser],
        verify_by: null,
        image: imagePath,
      },
    });
  }
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
