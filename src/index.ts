import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import * as line from "@line/bot-sdk";
import axios from "axios";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import fs from "fs";
import path from "path";
import woodRouter from "./routes/woodRouter";

dotenv.config();

const rootDirectoryPath = path.join(__dirname);

const app: Express = express();
app.use(morgan("dev"))
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", express.static(rootDirectoryPath));
app.use(woodRouter);
const port = process.env.PORT;

const lineConfig = {
  channelAccessToken:
    "lgOJd3BzZij3BujNXREFQZ9VrHYRnQoaBa0irWnzhNnkJTYXW5yDYomDYsbVqDZIFZ1HwnwcVsuxCFqbf/Fd7UxjZ0aHchxWGAx8/cbcDF5q82f+k5gqM3ocQSQd00aa+/IEo/kV7NLIm+QZX6VXbwdB04t89/1O/w1cDnyilFU=",
  channelSecret: "0b89248e5ea046b327297535b7ec3af1",
};

const dataWood = [
  {
    id: 1,
    common_name: "แดง",
    eng_name: ["ironwood", "Daeng"],
    botanical_name: "Xylia xylocarpa (Roxb.) W. Theob",
    pedigree: "FABACEAE",
    place_of_origin:
      "ขึ้นทั่วไปในป่าเบญจพรรณแล้ง ทางเหนือ ภาคกลาง ตะวันกลาง ตะวันออกเฉียงเหนือ และภาคใต้",
    wood_characteristics:
      "สีแดงหรือน้ำตาลอมแดง เสี้ยนสนเป็นคลื่น เนื้อค่อนข้างละเอียด",
    anatomical_characteristics:
      "พอร์เป็นแบบ พอร์เดี่ยวส่วนมาก พอร์แฝดมีน้อย การเรียงตัวมีทั้งแบบ solitary และ oblique การกระจายเป็นแบบ กระจัดกระจาย (diffuse porous) ทางภายใน พอร์มี ไทโลส (tylose) เกือบทุกพอร์ พอร์มีขนาดปานกลาง เส้นเรย์เห็นชัด",
    other: "",
    image: "https://file.sogoodweb.com/upload/156/UzDBB7M2iE.jpg",
    create_at: "อัปเดตล่าสุดเมื่อ 17 ตุลาคม 2566",
    update_at: "อัปเดตล่าสุดเมื่อ 17 ตุลาคม 2566",
    create_by: 1213,
    update_by: 523,
  },
  {
    id: 2,
    common_name: "ชุมแพรก",
    eng_name: ["Chum phraek"],
    botanical_name: "Heritiera javanica (Blume) Kosterm.",
    pedigree: "MALVACEAE",
    place_of_origin:
      "ขึ้นประปรายอยู่ตามป่าดงดิบทางภาคตะวันออก ภาคกลาง และภาคใต้ที่สูงจากระดับน้ำทะเลไม่เกิน 500 เมตร",
    wood_characteristics:
      "เลื่อยใหม่ๆ สีแดงเข้มเมื่อถูกอากาศจะเป็นสีน้ำตาลอมแดง เป็นมันเสี้ยนตรง สม่ำเสมอ",
    anatomical_characteristics:
      "ส่วนใหญ่เป็นแบบ พอร์แฝด (multiple pore) แบบของการเรียงตัวไม่เด่นชัด การกระจายเป็นแบบ กระจัดกระจาย (diffuse porous) พอร์ใหญ่ ภายในพอร์ มีสารตกค้าง (deposit) เป็นบางพอร์ เส้นนเรย์เห็นชัด มีพาเรงคิมาเป็นแบบ พาเรงคิมาแบบกระจาย (diffuse parenchyma)",
    other: "",
    image:
      "https://www.igetweb.com/uploads/2862/filemanager/af081b0d4d8dd27920b06ae6c9781c24_full.jpg",
    create_at: "อัปเดตล่าสุดเมื่อ 17 ตุลาคม 2566",
    update_at: "อัปเดตล่าสุดเมื่อ 17 ตุลาคม 2566",
    create_by: 1213,
    update_by: 523,
  },
  {
    id: 3,
    common_name: "แอ๊ก",
    eng_name: ["Balau", "Aek"],
    botanical_name: "Shorea glauca King",
    pedigree: "DIPTEROCARPACEAE",
    place_of_origin:
      "ขึ้นเป็นหมู่ประปรายในป่าดงดิบเขา ตามชายทะเลและเกาะต่างๆ ทางภาคใต้ ตอนล่างที่สูงจากระดับน้ำทะเล 100-400 เมตร",
    wood_characteristics:
      "สีน้ำตาลอ่อนถึงน้ำตาลแกมแดง เสี้ยนตรง เนื้อค่อนข้างหยาบ แต่สม่ำเสมอ แข็ง เหนียว",
    anatomical_characteristics:
      "พอร์ เป็นแบบ พอร์เดี่ยว (solitary pore) พอร์แฝด (multiple pore) ปนบ้างเล็กน้อย แบบของ การเรียงตัวไม่เด่นชัด การกระจายเป็นแบบกระจัดกระจาย (diffuse porous) พอร์ใหญ่ มี tylose อยู่เกือบ ทุกพอร์ เส้นเรย์เห็นชัด พาเรงคิมาเป็นแบบ พาเรงคิมาแบบปีก (aliform parenchyma) มีท่อยางต่อเรียง ยาวตัดกับเส้นเรย์",
    other: "",
    image: "https://ecochoice.co.uk/misc/image/98628/740/0",
    create_at: "อัปเดตล่าสุดเมื่อ 17 ตุลาคม 2566",
    update_at: "อัปเดตล่าสุดเมื่อ 17 ตุลาคม 2566",
    create_by: 1213,
    update_by: 523,
  },
  {
    id: 4,
    common_name: "สัก",
    eng_name: ["Teak"],
    botanical_name: "Tectona grandis L. f.",
    pedigree: "LABIATAE",
    place_of_origin:
      "ขึ้นเป็นหมู่อยู่ในป่าเบญจพรรณทางภาคเหนือ และบางส่วนของภาคกลาง และภาคตะวันตก",
    wood_characteristics:
      "สีเหลืองทองถึงสีน้ำตาล มีน้ำมันในตัวมีลายสีแก่แทรก มีกลิ่นคล้ายหนังฟอก แห้ง เสี้ยนตรงเนื้อหยาบ ไม่สม่ำเสมอ ทนทานมาก ไม้เนื้อแข็ง",
    anatomical_characteristics:
      "พอร์ เป็นแบบ พอร์เดี่ยว (solitary pore) และ พอร์แฝด (mutiple pore) แบบของการเรียงตัว ไม่เด่นชัด การกระจายเป็นแบบ ring porous พอร์มีทั้งใหญ่ และ ขนาดป่านกลาง ภายในพอร์มีสารแทรก (deposit) สีขาว เป็นบางพอร์ เส้นเรย์เห็นชัด พาเรงคิมาเป็นแบบ พาเรงคิมาต้นฤดู (inital parenchyma)",
    other: "",
    image:
      "https://www.gardeningknowhow.com/wp-content/uploads/2023/06/Teak-Tree.jpg",
    create_at: "อัปเดตล่าสุดเมื่อ 17 ตุลาคม 2566",
    update_at: "อัปเดตล่าสุดเมื่อ 17 ตุลาคม 2566",
    create_by: 1213,
    update_by: 523,
  },
  {
    id: 5,
    common_name: "รัง",
    eng_name: [
      "Burmese Sal",
      "Rang, Dark red meranti",
      "Light red meranti",
      "Red lauan",
    ],
    botanical_name: "Shorea siamensis Miq.",
    pedigree: "DIPTEROCARPACEAE",
    place_of_origin:
      "ขึ้นเป็นหมู่ใหญ่ ๆ ในป่าเบญจพรรณแล้งและป่าแดงทั่วไปปะปนอยู่กับไม้เต็ง ในพื้นที่ที่ดินเป็นลูกรัง หิน กรวดทรายเป็นส่วนใหญ่ ที่อยู่สูงจากระดับ น้ำทะเล 500-1,000 เมตร ทางภาคใต้มีอยู่บ้างตามเขาหินปูน",
    wood_characteristics:
      "สีน้ำตาลอ่อนหรือสีน้ำตาลอมเหลือง เสี้ยนสน เนื้อหยาบ แต่สม่ำเสมอ",
    anatomical_characteristics:
      "พอร์ เป็นแบบ พอร์เดี่ยว (solitary pore) มากกว่า พอร์แฝด (multiple pore) แบบของการเรียงตัว ไม่เด่นชัด การกระจายเป็นแบบ difuse พอร์ใหญ่ ภายในพอร์มีไทโลส (tylose) เกือบทุกพอร์ เสันเรย์เห็นชัด เป็นแบบ diffuse และ พาเรงคิมาแบบปีก (aliform parenchyma) มีท่อยางต่อเรียงยาวตัดกับเส้นเรย์",
    other: "",
    image:
      "https://t4.ftcdn.net/jpg/03/08/35/87/360_F_308358710_5WiuxvRUUg0p28HdlBBWUrNBz63z2lrx.jpg",
    create_at: "อัปเดตล่าสุดเมื่อ 17 ตุลาคม 2566",
    update_at: "อัปเดตล่าสุดเมื่อ 17 ตุลาคม 2566",
    create_by: 1213,
    update_by: 523,
  },
  {
    id: 6,
    common_name: "ยางพารา",
    eng_name: ["Rubberwood"],
    botanical_name: "Hevea brasiliensis (Kunth) Mull. Arg.",
    pedigree: "EUPHORBIACEAE",
    place_of_origin:
      "เป็นไม้ที่มีถิ่นกำเนิดในทวีปอเมริกาใต้ มีผู้นำเข้ามาปลูกในประเทศไทย เพื่อเอาน้ำยาง ที่ขึ้นได้ดีและให้ผลผลิตน้ำยางสูงได้แก่ทางภาคใต้ และ ภาคตะวันออกเฉียงเหนือ",
    wood_characteristics:
      "สีขาวอมเหลือง เนื้อไม้ละเอียดปานกลาง เสี้ยนสน แข็งเหนียว บิดตัวง่าย",
    anatomical_characteristics:
      "พอร์ เป็นแบบ พอร์เดี่ยว (solitary pore) และ พอร์แฝด (multiple pore) แบบของการเรียงตัว ชัด การกระจายเป็นแบบ กระจัดกระจาย (diffuse porous) พอร์ใหญ่ภายใน (deposit) เกือบทุกพอร์ เส้นเรย์เห็นชัด พาเรงคิมาเป็นแบบ พาเรงคิมาแบบไม่ติดพอร์ (melaacheal parenchyma)",
    other: "",
    image:
      "https://cdn.britannica.com/21/75921-050-A34DC6E2/Latex-rubber-tree.jpg",
    create_at: "อัปเดตล่าสุดเมื่อ 17 ตุลาคม 2566",
    update_at: "อัปเดตล่าสุดเมื่อ 17 ตุลาคม 2566",
    create_by: 1213,
    update_by: 523,
  },
  {
    id: 7,
    common_name: "ยาง",
    eng_name: ["Yang", "Gurjun", "Keruing"],
    botanical_name: "Dipterocarpus spp.",
    pedigree: "DIPTEROCARPACEAE",
    place_of_origin:
      "ขึ้นเป็นหมูในป่าตงดิบและตามที่ต่ำที่ชุ่มชื้น กับบริเวณใกล้เคียงกับแม่น้ำ ลำธารในป่าดิบและป่าอื่น ๆ ทั่วไปที่สูงจากระดับน้ำทะเล 200-600 เมตร",
    wood_characteristics:
      "สีน้ำตาลแดงหรือสีน้ำตาลเทา เสี้ยนตรง เนื้อหยาบ แข็งปานกลาง",
    anatomical_characteristics:
      "พอร์ เป็นแบบ พอร์เดี่ยว (solitary pore) เกือบทั้งหมด แบบของการเรียงตัวไม่เด่นชัด การกระจาย เป็นแบบ กระจัดกระจาย (diffuse porous) พอร์ใหญ่มาก เส้นเรย์เห็นชัด มีท่อยางเรียงต่อกัน 34 ท่อ อยู่ใกล้ ๆ พอร์",
    other: "",
    image:
      "https://www.nparks.gov.sg/-/media/nparks/migrated/heritage-trees/ht-2003-49/trunkandcrown.ashx",
    create_at: "อัปเดตล่าสุดเมื่อ 17 ตุลาคม 2566",
    update_at: "อัปเดตล่าสุดเมื่อ 17 ตุลาคม 2566",
    create_by: 1213,
    update_by: 523,
  },
  {
    id: 8,
    common_name: "พะยูง",
    eng_name: ["Rosewood", "Siamese Rosewood", "Phayuung"],
    botanical_name: "Dalbergia cochinchinensis Pierre",
    pedigree: "FABACEAE",
    place_of_origin:
      "ขึ้นกระจัดกระจายในป่าเบญจพรรณชื้นและปาดิบแล้งทั่วไป ทางภาค ตะวันออก และตะวันออกเฉียงเหนือ ที่สูงจากระดับน้ำทะเลประมาณ 100-200 เมตร",
    wood_characteristics:
      "สีแดงอมม่วง หรือสีม่วงเป็นมันมีลายสีดำ หรือสีน้ำตาลอ่อน เสี้ยนสน เป็นริ้วแคบ ๆ เนื้อละเอียดเหนียว แข็ง",
    anatomical_characteristics:
      "พอร์ ส่วนมากเป็น พอร์เดี่ยว (solitary pore) พอร์แฝด (multiple pore) มีน้อย แบบของ ยงตัวไม่เด่นชัด การกระจายเป็นแบบ กระจัดกระจาย (diffuse porous) พอร์ใหญ่ ภาย มีสารตกค้าง (deposit) เป็นบางพอร์ เส้นเรย์เห็นไม่ค่อยซัด พาเรงคิมาเป็นแบบ พาเรงคิมาแบบปีก (alform parenchyma) และ พาเรงคิมาแบบปีกต่อ (confuent parenchyma) มีลายริ้ว (ripplemark)",
    other: "",
    image:
      "https://housing.com/news/wp-content/uploads/2023/01/Teak-tree-shutterstock_1868125927-1200x700-compressed.jpg",
    create_at: "อัปเดตล่าสุดเมื่อ 17 ตุลาคม 2566",
    update_at: "อัปเดตล่าสุดเมื่อ 17 ตุลาคม 2566",
    create_by: 1213,
    update_by: 523,
  },
  {
    id: 9,
    common_name: "มะค่าโมง",
    eng_name: ["Black rosewood", "pod Mahogany", "Doussie"],
    botanical_name: "Afzelia xylocarpa (Kurz) Craib",
    pedigree: "FABACEAE",
    place_of_origin:
      "ขึ้นในป่าเบญจพรรณขึ้น และป่าดิบแล้ง ตามภาคต่าง ๆ ทั่วไป ยกเว้นภาคใต้",
    wood_characteristics:
      "สีน้ำตาลอมเหลือง เสี้ยนค่อนข้างสน เนื้อหยาบ มีริ้วแทรก แข็งเหนียว",
    anatomical_characteristics:
      "พอร์ เป็นแบบ พอร์เดี่ยว (solitary pore) และ พอร์แฝด (multiple pore) แบบของการเรียงตัว ไม่เด่นชัด การกระจายเป็นแบบ กระจัดกระจาย (difuse porous) พอร์ใหญ่ ภายในพอร์มีสารตกค้าง (deposit) สีน้ำตาล เส้นเรย์เห็นชัด พาเรงคิมาเป็นแบบ พาเรงคิมาแบบปีก (aliform parenchyma) พาเรงคิมาแบบปีกต่อ (confluent parenchyma) และ พาเรงคิมาปลายฤดู (terminal parenchyma)",
    other: "",
    image:
      "https://www.castellanalegnami.it/wp-content/uploads/2018/04/Castellana-Legnami-albero-doussie-ok.jpg",
    create_at: "อัปเดตล่าสุดเมื่อ 17 ตุลาคม 2566",
    update_at: "อัปเดตล่าสุดเมื่อ 17 ตุลาคม 2566",
    create_by: 1213,
    update_by: 523,
  },
  {
    id: 10,
    common_name: "พะยอม",
    eng_name: ["Phayom", "White meranti"],
    botanical_name: "Shorea roxburghii G. Don",
    pedigree: "DIPTEROCARPACEAE",
    place_of_origin:
      "ขึ้นตามป่าเบญจพรรณชื้นและแล้งหรือป่าดิบแล้งทั่วไปทุกภาค ที่สูงจาก ระดับน้ำทะเล 60-1,200 เมตร",
    wood_characteristics:
      "สีเหลืองอ่อน ทิ้งไว้นาน ๆ จะกลายเป็น สีน้ำตาล มีเส้นสีดำซึ่งเป็นท่อน้ำ ท่อน้ำมันผ่านเสมอ เสี้ยนสน เนื้อค่อนข้างหยาบ แข็งและเหนียว",
    anatomical_characteristics:
      "พอร์ เป็นแบบ พอร์เดี่ยว (solitary pore) และ พอร์แฝด (mutiple pore) แบบของการเรียงหัว เด่นชัด การกระจายเป็นแบบ กระจัดกระจาย (diffuse porous) พอร์ใหญ่ ทางภายในพอร์ มีไทโลส (tylose) เป็นบางพอร์ พาเรงคิมาเป็นแบบ พาเรงคิมาแบบปีก (aliform parenchyma) พาเรงคิมาแบบปีกต่อ (confluent parenchyma) มีท่อยางที่ยังไม่แข็งตัวต่อเรียงยาวตัดกับเส้นเรย์",
    other: "",
    image:
      "https://previews.123rf.com/images/nuttaya/nuttaya1802/nuttaya180200001/94756287-white-meranti-bloom-in-the-spring-of-thailand.jpg",
    create_at: "อัปเดตล่าสุดเมื่อ 17 ตุลาคม 2566",
    update_at: "อัปเดตล่าสุดเมื่อ 17 ตุลาคม 2566",
    create_by: 1213,
    update_by: 523,
  },
  {
    id: 11,
    common_name: "ตะเคียนราก",
    eng_name: ["Takhian rak"],
    botanical_name: "Hopea pierrei Hance",
    pedigree: "DIPTEROCARPACEAE",
    place_of_origin:
      "ขึ้นตามป่าดงดิบทางภาคใต้ที่ค่อนข้างราบ และมีการระบายน้ำดี สูงจากระดับน้ำทะเลไม่เกิน 300 เมตร",
    wood_characteristics:
      "สีน้ำตาลอมเหลืองอมเขียว เสี้ยนสนเล็กน้อย เนื้อไม้ค่อนข้างละเอียดคล้ายตะเคียนทองมาก",
    anatomical_characteristics:
      "พอร์เป็นแบบ พอร์เดี่ยว (solitary pore) พอร์แฝดมีน้อย แบบของการเรียงตัวไม่ด่นซัด การกระจายเป็นแบบ กระจัดกระจาย (diffuse porous) พอร์ขนาดปานกลาง ทางภายใน พอร์มีไทโลส (tylose) บ้างเป็นบางพอร์ มีท่อยางต่อเรียงเป็นแนวยาวตัดกับเป็นเส้นเรย์ เส้นเรย์เห็นชัดพาเรงคิมาเป็นแบบ พาเรงคิมาแบบปีก (aliform parenchyma)",
    other: "",
    image:
      "https://previews.123rf.com/images/nuttaya/nuttaya1802/nuttaya180200001/94756287-white-meranti-bloom-in-the-spring-of-thailand.jpg",
    create_at: "อัปเดตล่าสุดเมื่อ 17 ตุลาคม 2566",
    update_at: "อัปเดตล่าสุดเมื่อ 17 ตุลาคม 2566",
    create_by: 1213,
    update_by: 523,
  },
  {
    id: 12,
    common_name: "ตะเคียนทอง",
    eng_name: ["Thingan", "Takhian thong"],
    botanical_name: "Hopea odorata Roxb.",
    pedigree: "DIPTEROCARPACEAE",
    place_of_origin:
      "ขึ้นเป็นหมู่กระจัดกระจายอยู่ตามที่ราบหรือค่อนข้างราบใกล้ฝั่งน้ำในป่าดงดิบทั่วประเทศ",
    wood_characteristics:
      "สีน้ำตาลอมเหลือง มีเส้นสีเทาหรือขาวผ่านเสมอซึ่งเป็นท่อยาง เสี้ยนสน เล็กน้อย เนื้อค่อนข้างละเอียด",
    anatomical_characteristics:
      "พอร์มีทั้งแบบ พอร์เดี่ยว (solitary pore) และ พอร์แฝด (multiple pore) แบบของการเรียงตัวไม่เด่นชัด การกระจายเป็นแบบ กระจัดกระจาย (difiuse porous) ทางภายในพอร์มิไทโลส (tylose) บ้างเป็นบางพอร์ พอร์ใหญ่มีท่อยางต่อเป็นแนวยาวเรียงตัดกันเป็นเส้นเรย์ เส้นเรย์เห็นซัด พาเรงคิมาเป็นแบบ พาเรงคิมาแบบกระจาย (diffuse parenchyma) และ พาเรงคิมาแบบปีก (aliform parenchyma)",
    other: "",
    image:
      "https://previews.123rf.com/images/nuttaya/nuttaya1802/nuttaya180200001/94756287-white-meranti-bloom-in-the-spring-of-thailand.jpg",
    create_at: "อัปเดตล่าสุดเมื่อ 17 ตุลาคม 2566",
    update_at: "อัปเดตล่าสุดเมื่อ 17 ตุลาคม 2566",
    create_by: 1213,
    update_by: 523,
  },
  // {
  //   id: 13,
  //   common_name: "เต็ง",
  //   eng_name: ["Siamese Sal", "Thitya", "Teng"],
  //   botanical_name: "Shorea obtusa Wall.ex Blume",
  //   pedigree: "DIPTEROCARPACEAE",
  //   place_of_origin:
  //     "ขึ้นเป็นหมูใหญ่ ๆ ตามป่าแดงหรือป่าเบญจพรรณแล้งที่เป็นดินลูกรัง และ เขาหินทรายปะปนอยู่กับพวกไม้รัง เหียง พลวง ทั่วๆไป ยกเว้นทางภาคใต้",
  //   wood_characteristics: "สีน้ำตาลแกมแดง เสี้ยนสน เนื้อหยาบ แต่สม่ำเสมอ",
  //   anatomical_characteristics:
  //     "พอร์เป็นแบบ พอร์เดี่ยว (solitary pore) และ พอร์แฝด (multiple pore) แบบของการเรียงตัว ไม่เด่นชัด การกระจายเป็นแบบ กระจัดกระจาย (diffuse porous) พอร์ใหญ่ ทางภายในพอร์มีไทโลส (tylose) เกือบทุกพอร์มีท่อยางเรียงต่อกันยาวตัดกับเส้นเรย์ เส้นเรย์เห็นชัด พาเรงคิมาเป็นแบบ พาเรงคิมาแบบปีก (aliform parenchyma) และ พาเรงคิมาแบบปีกต่อ (confluent parenchyma)",
  //   other: "",
  //   image:
  //     "https://previews.123rf.com/images/nuttaya/nuttaya1802/nuttaya180200001/94756287-white-meranti-bloom-in-the-spring-of-thailand.jpg",
  //   create_at: "อัปเดตล่าสุดเมื่อ 17 ตุลาคม 2566",
  //   update_at: "อัปเดตล่าสุดเมื่อ 17 ตุลาคม 2566",
  //   create_by: 1213,
  //   update_by: 523,
  // },
];

const client = new line.Client(lineConfig);

app.post("/webhook", async (req, res) => {
  try {
    const events = req.body.events;
    lineEvent(events[0]);
    res.status(200).send("OK");
  } catch (err) {
    res.status(500).end();
  }
});

const lineEvent = async (event: any) => {
  try {
    const uid = event.source.userId;
    let message = event.message.text;
    const image = event.message.type == "image";
    let urlRequest;
    if (message == "ตรวจสอบพันธุ์ไม้") {
      console.log(1);
      return client.replyMessage(event.replyToken, {
        type: "text",
        text: "กรุณาอัปโหลดรูปหรือถ่ายภาพเพื่อใช้ในการตรวจสอบ",
      });
    } else if (message == "ข้อมูลพันธุ์ไม้") {
      let objectBubble: any = [];
      dataWood.forEach((wood) => {
        objectBubble.push({
          type: "bubble",
          hero: {
            type: "image",
            url: `${wood.image}`,
            size: "full",
            aspectRatio: "20:13",
            aspectMode: "cover",
            action: {
              type: "uri",
              uri: `http://woodify.bacoomwork.com/line/wood_detail/${wood.id}`,
            },
          },
          body: {
            type: "box",
            layout: "vertical",
            contents: [
              {
                type: "text",
                text: `${wood.common_name}`,
                weight: "bold",
                size: "xl",
              },
              {
                type: "box",
                layout: "vertical",
                margin: "lg",
                spacing: "sm",
                contents: [
                  {
                    type: "box",
                    layout: "baseline",
                    spacing: "sm",
                    contents: [
                      {
                        type: "text",
                        text: `${
                          wood.place_of_origin.length > 100
                            ? wood.place_of_origin.slice(0, 97) + "..."
                            : wood.place_of_origin
                        }`,
                        wrap: true,
                        color: "#666666",
                        size: "sm",
                        flex: 5,
                      },
                    ],
                  },
                ],
              },
            ],
          },
          footer: {
            type: "box",
            layout: "vertical",
            spacing: "sm",
            contents: [
              {
                type: "button",
                style: "primary",
                height: "sm",
                action: {
                  type: "uri",
                  label: "ดูรายละเอียด",
                  uri: `http://woodify.bacoomwork.com/line/wood_detail/${wood.id}`,
                },
              },
            ],
            flex: 0,
          },
        });
      });
      urlRequest = `https://api.line.me/v2/bot/message/push`;
      await axios.request({
        method: "POST",
        url: `${urlRequest}`,
        headers: {
          Authorization: `Bearer ` + lineConfig.channelAccessToken,
          "Content-Type": "application/json",
        },
        data: {
          to: uid,
          messages: [
            {
              type: "flex",
              altText: "This is a Flex Message",
              contents: {
                type: "carousel",
                contents: objectBubble,
              },
            },
          ],
        },
      });
    } else if (message == "คู่มือ") {
      urlRequest = `https://api.line.me/v2/bot/message/push`;
      await axios.request({
        method: "POST",
        url: `${urlRequest}`,
        headers: {
          Authorization: `Bearer ` + lineConfig.channelAccessToken,
        },
        data: {
          to: uid,
          messages: [
            {
              type: "flex",
              altText: "This is a Flex Message",
              contents: {
                type: "carousel",
                contents: [
                  {
                    type: "bubble",
                    header: {
                      type: "box",
                      layout: "vertical",
                      contents: [],
                    },
                    hero: {
                      type: "image",
                      size: "full",
                      aspectRatio: "20:13",
                      aspectMode: "fit",
                      action: {
                        type: "uri",
                        uri: "http://linecorp.com/",
                      },
                      url: "https://cdn.discordapp.com/attachments/1164432843120836628/1164432864536973322/image.png?ex=6543319d&is=6530bc9d&hm=cfd8b8eeec05f8ad4005b37065c3ce6794135a5162ed53b55d7daf96a9ab608d&",
                      margin: "none",
                      animated: true,
                      align: "center",
                      gravity: "top",
                    },
                    body: {
                      type: "box",
                      layout: "vertical",
                      contents: [
                        {
                          type: "text",
                          text: "การใช้งานระบบเบิ้องต้น",
                          weight: "bold",
                          size: "xl",
                          align: "center",
                        },
                      ],
                    },
                    footer: {
                      type: "box",
                      layout: "vertical",
                      spacing: "sm",
                      contents: [
                        {
                          type: "button",
                          style: "link",
                          height: "sm",
                          action: {
                            type: "uri",
                            label: "ดูรายละเอียด",
                            uri: "https://linecorp.com",
                          },
                        },
                      ],
                      flex: 0,
                    },
                  },
                  {
                    type: "bubble",
                    header: {
                      type: "box",
                      layout: "vertical",
                      contents: [],
                    },
                    hero: {
                      type: "image",
                      size: "full",
                      aspectRatio: "20:13",
                      aspectMode: "fit",
                      action: {
                        type: "uri",
                        uri: "http://linecorp.com/",
                      },
                      url: "https://cdn.discordapp.com/attachments/1164432843120836628/1164439257306382356/image.png?ex=65433791&is=6530c291&hm=f5ddcd4be5e8c37e7ed96b0cac1c4d9fda4ee8f2d9beb95205354354a08eb070&",
                      margin: "none",
                      animated: true,
                      align: "center",
                      gravity: "top",
                    },
                    body: {
                      type: "box",
                      layout: "vertical",
                      contents: [
                        {
                          type: "text",
                          text: "การดูลักษณะไม้เบื้องต้น",
                          weight: "bold",
                          size: "xl",
                          align: "center",
                        },
                      ],
                    },
                    footer: {
                      type: "box",
                      layout: "vertical",
                      spacing: "sm",
                      contents: [
                        {
                          type: "button",
                          style: "link",
                          height: "sm",
                          action: {
                            type: "uri",
                            label: "ดูรายละเอียด",
                            uri: "https://linecorp.com",
                          },
                        },
                      ],
                      flex: 0,
                    },
                  },
                  {
                    type: "bubble",
                    header: {
                      type: "box",
                      layout: "vertical",
                      contents: [],
                    },
                    hero: {
                      type: "image",
                      size: "full",
                      aspectRatio: "20:13",
                      aspectMode: "fit",
                      action: {
                        type: "uri",
                        uri: "http://linecorp.com/",
                      },
                      url: "https://cdn.discordapp.com/attachments/1164432843120836628/1164439305738010645/image.png?ex=6543379c&is=6530c29c&hm=914122a675af8d982570422d56e9a59dbc91f49a4fc304904f4d81f2a8be93b3&",
                      margin: "none",
                      animated: true,
                      align: "center",
                      gravity: "top",
                    },
                    body: {
                      type: "box",
                      layout: "vertical",
                      contents: [
                        {
                          type: "text",
                          text: "การจัดเตรียมไม้เพื่อพิสูจน์",
                          weight: "bold",
                          size: "xl",
                          align: "center",
                        },
                      ],
                    },
                    footer: {
                      type: "box",
                      layout: "vertical",
                      spacing: "sm",
                      contents: [
                        {
                          type: "button",
                          style: "link",
                          height: "sm",
                          action: {
                            type: "uri",
                            label: "ดูรายละเอียด",
                            uri: "https://linecorp.com",
                          },
                        },
                      ],
                      flex: 0,
                    },
                  },
                ],
              },
            },
          ],
        },
      });
    } else if (image) {
      let messageId = event.message.id;
      console.log(messageId);
      let urlRequestGetImage = `https://api-data.line.me/v2/bot/message/${messageId}/content`;
      let urlRequest = `https://api.line.me/v2/bot/message/push`;
      await client.replyMessage(event.replyToken, {
        type: "text",
        text: "กำลังประมวลผลจากรูปภาพที่ส่งมา",
      });
      await axios
        .request({
          method: "GET",
          url: `${urlRequestGetImage}`,
          headers: {
            Authorization: `Bearer ` + lineConfig.channelAccessToken,
          },
          responseType: "arraybuffer",
        })
        .then((response) => {
          const imageBuffer = response.data;
          fs.writeFileSync(`./wood/${messageId}.jpg`, imageBuffer);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      await axios.request({
        method: "POST",
        url: `${urlRequest}`,
        headers: {
          Authorization: `Bearer ` + lineConfig.channelAccessToken,
        },
        data: {
          to: uid,
          messages: [
            {
              type: "flex",
              altText: "This is a Flex Message",
              contents: {
                type: "bubble",
                hero: {
                  type: "image",
                  size: "full",
                  aspectRatio: "1:1",
                  aspectMode: "cover",
                  action: {
                    type: "uri",
                    uri: "https://woodify.bacoomwork.com/line/classify_detail",
                  },
                  url: `https://5c0b-110-171-24-27.ngrok-free.app/wood/${messageId}.jpg`,
                  margin: "none",
                  animated: true,
                  align: "center",
                  gravity: "top",
                },
                body: {
                  type: "box",
                  layout: "vertical",
                  contents: [
                    {
                      type: "text",
                      text: "ไม้ประดู่",
                      weight: "bold",
                      size: "xl",
                      align: "start",
                    },
                  ],
                },
                footer: {
                  type: "box",
                  layout: "vertical",
                  spacing: "sm",
                  contents: [
                    {
                      type: "button",
                      style: "primary",
                      height: "sm",
                      action: {
                        type: "uri",
                        label: "ดูรายละเอียด",
                        uri: "https://woodify.bacoomwork.com/line/classify_detail",
                      },
                    },
                  ],
                  flex: 0,
                },
              },
            },
          ],
        },
      });
    }
  } catch (error) {
    console.error(error);
  }
};

app.post("/login", async (req, res) => {
  let profile = req.body.lineProfile;
  let uid = profile.userId;
  let urlRequest = `https://api.line.me/v2/bot/user/${uid}/richmenu/richmenu-b249cae10c20e8f1b01658430fc7a47d`;
  console.log(urlRequest);
  await axios.request({
    method: "POST",
    url: `${urlRequest}`,
    headers: {
      Authorization: `Bearer ` + lineConfig.channelAccessToken,
    },
  });
  res.json(profile);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
