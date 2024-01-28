require("dotenv").config();
import { prisma } from '../../global/prisma'
import cuid from 'cuid';

async function main() {
  const data = [
    "แดง",
    "ชุมแพรก",
    "แอ๊ก",
    "สัก",
    "รัง",
    "ยาง",
    "ยางพารา",
    "พะยูง",
    "มะค่าโมง",
    "พะยอม",
    "ตะเคียนราก",
    "ตะเคียนทอง",
    "เต็ง",
  ];
  for (let i = 0; i < 500; i++) {
    const randomIndex = Math.floor(Math.random() * data.length);
    let randomMonth = Math.floor(Math.random() * 12) + 1;
    const days = Math.floor(Math.random() * 27) + 1;
    const formattedDays = days < 10 ? `0${days}` : `${days}`;
    const randomValue = data[randomIndex];
    if(randomMonth > 12){
        randomMonth = 12
    }
    else if (randomMonth == 0){
        randomMonth = 1;
    }
    const formattedMonths = randomMonth < 10 ? `0${randomMonth}` : `${randomMonth}`;
    console.log(formattedDays, formattedMonths);
    
    await prisma.classify.create({
      data: {
        status: true,
        status_verify: "WAITING_FOR_VERIFICATION",
        select_result: "",
        result: [],
        session_id_note_room : cuid(),
        create_by: "149d4147-ebca-4512-bd8f-087a03a55570",
        verify_by: null,
        image : null
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
