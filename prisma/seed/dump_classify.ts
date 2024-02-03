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
  const status : any = ['WAITING_FOR_VERIFICATION', 'PASSED_CERTIFICATION', 'FAILED_CERTIFICATION']
  for (let i = 0; i < 8000; i++) {
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
    const randomValueStatus = Math.floor(Math.random() * 3)
    
    await prisma.classify.create({
      data: {
        status: true,
        status_verify: status[randomValueStatus],
        select_result: data[Math.floor(Math.random() * 13)],
        result: [],
        session_id_note_room : cuid(),
        create_at : new Date(`2024-${formattedMonths}-${formattedDays}`),
        create_by: "149d4147-ebca-4512-bd8f-087a03a55570",
        verify_by: null,
        image : ''
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
