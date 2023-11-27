"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const prisma_1 = require("../../global/prisma");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const now = new Date();
        const databaseUrl = process.env.DATABASE_URL;
        console.log(databaseUrl);
        const newUser = yield prisma_1.prisma.users.create({
            data: {
                line_id: "Ufa55aca331689734988b963e812d9865",
                firstname: "tathus",
                lastname: "theerachuwiwat",
                email: "tathuswork@gmail.com",
                phone: "0945492954",
                image: "https://cdn.discordapp.com/attachments/841948735419842580/1148478321814941696/IMG_1827.png?ex=656eaa49&is=655c3549&hm=de51c84082f665800c458e66104775e85de866dcaed4d8941d60f767a58c759e&",
                role: "ADMIN",
                create_at: now,
                update_at: now
            },
        });
        yield prisma_1.prisma.wood_info.createMany({
            data: [
                {
                    common_name: ["แดง"],
                    eng_name: ["ironwood", "Daeng"],
                    botanical_name: "Xylia xylocarpa (Roxb.) W. Theob",
                    pedigree: "FABACEAE",
                    place_of_origin: "ขึ้นทั่วไปในป่าเบญจพรรณแล้ง ทางเหนือ ภาคกลาง ตะวันกลาง ตะวันออกเฉียงเหนือ และภาคใต้",
                    wood_characteristics: "สีแดงหรือน้ำตาลอมแดง เสี้ยนสนเป็นคลื่น เนื้อค่อนข้างละเอียด",
                    anatomical_characteristics: "พอร์เป็นแบบ พอร์เดี่ยวส่วนมาก พอร์แฝดมีน้อย การเรียงตัวมีทั้งแบบ solitary และ oblique การกระจายเป็นแบบ กระจัดกระจาย (diffuse porous) ทางภายใน พอร์มี ไทโลส (tylose) เกือบทุกพอร์ พอร์มีขนาดปานกลาง เส้นเรย์เห็นชัด",
                    other: "",
                    status: true,
                    create_at: now,
                    update_at: now,
                    create_by: newUser.u_id,
                    update_by: newUser.u_id,
                },
                {
                    common_name: ["ชุมแพรก"],
                    eng_name: ["Chum phraek"],
                    botanical_name: "Heritiera javanica (Blume) Kosterm.",
                    pedigree: "MALVACEAE",
                    place_of_origin: "ขึ้นประปรายอยู่ตามป่าดงดิบทางภาคตะวันออก ภาคกลาง และภาคใต้ที่สูงจากระดับน้ำทะเลไม่เกิน 500 เมตร",
                    wood_characteristics: "เลื่อยใหม่ๆ สีแดงเข้มเมื่อถูกอากาศจะเป็นสีน้ำตาลอมแดง เป็นมันเสี้ยนตรง สม่ำเสมอ",
                    anatomical_characteristics: "ส่วนใหญ่เป็นแบบ พอร์แฝด (multiple pore) แบบของการเรียงตัวไม่เด่นชัด การกระจายเป็นแบบ กระจัดกระจาย (diffuse porous) พอร์ใหญ่ ภายในพอร์ มีสารตกค้าง (deposit) เป็นบางพอร์ เส้นนเรย์เห็นชัด มีพาเรงคิมาเป็นแบบ พาเรงคิมาแบบกระจาย (diffuse parenchyma)",
                    other: "",
                    status: true,
                    create_at: now,
                    update_at: now,
                    create_by: newUser.u_id,
                    update_by: newUser.u_id,
                },
                {
                    common_name: ["แอ๊ก"],
                    eng_name: ["Balau", "Aek"],
                    botanical_name: "Shorea glauca King",
                    pedigree: "DIPTEROCARPACEAE",
                    place_of_origin: "ขึ้นเป็นหมู่ประปรายในป่าดงดิบเขา ตามชายทะเลและเกาะต่างๆ ทางภาคใต้ ตอนล่างที่สูงจากระดับน้ำทะเล 100-400 เมตร",
                    wood_characteristics: "สีน้ำตาลอ่อนถึงน้ำตาลแกมแดง เสี้ยนตรง เนื้อค่อนข้างหยาบ แต่สม่ำเสมอ แข็ง เหนียว",
                    anatomical_characteristics: "พอร์ เป็นแบบ พอร์เดี่ยว (solitary pore) พอร์แฝด (multiple pore) ปนบ้างเล็กน้อย แบบของ การเรียงตัวไม่เด่นชัด การกระจายเป็นแบบกระจัดกระจาย (diffuse porous) พอร์ใหญ่ มี tylose อยู่เกือบ ทุกพอร์ เส้นเรย์เห็นชัด พาเรงคิมาเป็นแบบ พาเรงคิมาแบบปีก (aliform parenchyma) มีท่อยางต่อเรียง ยาวตัดกับเส้นเรย์",
                    other: "",
                    status: true,
                    create_at: now,
                    update_at: now,
                    create_by: newUser.u_id,
                    update_by: newUser.u_id,
                },
                {
                    common_name: ["สัก"],
                    eng_name: ["Teak"],
                    botanical_name: "Tectona grandis L. f.",
                    pedigree: "LABIATAE",
                    place_of_origin: "ขึ้นเป็นหมู่อยู่ในป่าเบญจพรรณทางภาคเหนือ และบางส่วนของภาคกลาง และภาคตะวันตก",
                    wood_characteristics: "สีเหลืองทองถึงสีน้ำตาล มีน้ำมันในตัวมีลายสีแก่แทรก มีกลิ่นคล้ายหนังฟอก แห้ง เสี้ยนตรงเนื้อหยาบ ไม่สม่ำเสมอ ทนทานมาก ไม้เนื้อแข็ง",
                    anatomical_characteristics: "พอร์ เป็นแบบ พอร์เดี่ยว (solitary pore) และ พอร์แฝด (mutiple pore) แบบของการเรียงตัว ไม่เด่นชัด การกระจายเป็นแบบ ring porous พอร์มีทั้งใหญ่ และ ขนาดป่านกลาง ภายในพอร์มีสารแทรก (deposit) สีขาว เป็นบางพอร์ เส้นเรย์เห็นชัด พาเรงคิมาเป็นแบบ พาเรงคิมาต้นฤดู (inital parenchyma)",
                    other: "",
                    status: true,
                    create_at: now,
                    update_at: now,
                    create_by: newUser.u_id,
                    update_by: newUser.u_id,
                },
                {
                    common_name: ["รัง"],
                    eng_name: [
                        "Burmese Sal",
                        "Rang, Dark red meranti",
                        "Light red meranti",
                        "Red lauan",
                    ],
                    botanical_name: "Shorea siamensis Miq.",
                    pedigree: "DIPTEROCARPACEAE",
                    place_of_origin: "ขึ้นเป็นหมู่ใหญ่ ๆ ในป่าเบญจพรรณแล้งและป่าแดงทั่วไปปะปนอยู่กับไม้เต็ง ในพื้นที่ที่ดินเป็นลูกรัง หิน กรวดทรายเป็นส่วนใหญ่ ที่อยู่สูงจากระดับ น้ำทะเล 500-1,000 เมตร ทางภาคใต้มีอยู่บ้างตามเขาหินปูน",
                    wood_characteristics: "สีน้ำตาลอ่อนหรือสีน้ำตาลอมเหลือง เสี้ยนสน เนื้อหยาบ แต่สม่ำเสมอ",
                    anatomical_characteristics: "พอร์ เป็นแบบ พอร์เดี่ยว (solitary pore) มากกว่า พอร์แฝด (multiple pore) แบบของการเรียงตัว ไม่เด่นชัด การกระจายเป็นแบบ difuse พอร์ใหญ่ ภายในพอร์มีไทโลส (tylose) เกือบทุกพอร์ เสันเรย์เห็นชัด เป็นแบบ diffuse และ พาเรงคิมาแบบปีก (aliform parenchyma) มีท่อยางต่อเรียงยาวตัดกับเส้นเรย์",
                    other: "",
                    status: true,
                    create_at: now,
                    update_at: now,
                    create_by: newUser.u_id,
                    update_by: newUser.u_id,
                },
                {
                    common_name: ["ยางพารา"],
                    eng_name: ["Rubberwood"],
                    botanical_name: "Hevea brasiliensis (Kunth) Mull. Arg.",
                    pedigree: "EUPHORBIACEAE",
                    place_of_origin: "เป็นไม้ที่มีถิ่นกำเนิดในทวีปอเมริกาใต้ มีผู้นำเข้ามาปลูกในประเทศไทย เพื่อเอาน้ำยาง ที่ขึ้นได้ดีและให้ผลผลิตน้ำยางสูงได้แก่ทางภาคใต้ และ ภาคตะวันออกเฉียงเหนือ",
                    wood_characteristics: "สีขาวอมเหลือง เนื้อไม้ละเอียดปานกลาง เสี้ยนสน แข็งเหนียว บิดตัวง่าย",
                    anatomical_characteristics: "พอร์ เป็นแบบ พอร์เดี่ยว (solitary pore) และ พอร์แฝด (multiple pore) แบบของการเรียงตัว ชัด การกระจายเป็นแบบ กระจัดกระจาย (diffuse porous) พอร์ใหญ่ภายใน (deposit) เกือบทุกพอร์ เส้นเรย์เห็นชัด พาเรงคิมาเป็นแบบ พาเรงคิมาแบบไม่ติดพอร์ (melaacheal parenchyma)",
                    other: "",
                    status: true,
                    create_at: now,
                    update_at: now,
                    create_by: newUser.u_id,
                    update_by: newUser.u_id,
                },
                {
                    common_name: ["ยาง"],
                    eng_name: ["Yang", "Gurjun", "Keruing"],
                    botanical_name: "Dipterocarpus spp.",
                    pedigree: "DIPTEROCARPACEAE",
                    place_of_origin: "ขึ้นเป็นหมูในป่าตงดิบและตามที่ต่ำที่ชุ่มชื้น กับบริเวณใกล้เคียงกับแม่น้ำ ลำธารในป่าดิบและป่าอื่น ๆ ทั่วไปที่สูงจากระดับน้ำทะเล 200-600 เมตร",
                    wood_characteristics: "สีน้ำตาลแดงหรือสีน้ำตาลเทา เสี้ยนตรง เนื้อหยาบ แข็งปานกลาง",
                    anatomical_characteristics: "พอร์ เป็นแบบ พอร์เดี่ยว (solitary pore) เกือบทั้งหมด แบบของการเรียงตัวไม่เด่นชัด การกระจาย เป็นแบบ กระจัดกระจาย (diffuse porous) พอร์ใหญ่มาก เส้นเรย์เห็นชัด มีท่อยางเรียงต่อกัน 34 ท่อ อยู่ใกล้ ๆ พอร์",
                    other: "",
                    status: true,
                    create_at: now,
                    update_at: now,
                    create_by: newUser.u_id,
                    update_by: newUser.u_id,
                },
                {
                    common_name: ["พะยูง"],
                    eng_name: ["Rosewood", "Siamese Rosewood", "Phayuung"],
                    botanical_name: "Dalbergia cochinchinensis Pierre",
                    pedigree: "FABACEAE",
                    place_of_origin: "ขึ้นกระจัดกระจายในป่าเบญจพรรณชื้นและปาดิบแล้งทั่วไป ทางภาค ตะวันออก และตะวันออกเฉียงเหนือ ที่สูงจากระดับน้ำทะเลประมาณ 100-200 เมตร",
                    wood_characteristics: "สีแดงอมม่วง หรือสีม่วงเป็นมันมีลายสีดำ หรือสีน้ำตาลอ่อน เสี้ยนสน เป็นริ้วแคบ ๆ เนื้อละเอียดเหนียว แข็ง",
                    anatomical_characteristics: "พอร์ ส่วนมากเป็น พอร์เดี่ยว (solitary pore) พอร์แฝด (multiple pore) มีน้อย แบบของ ยงตัวไม่เด่นชัด การกระจายเป็นแบบ กระจัดกระจาย (diffuse porous) พอร์ใหญ่ ภาย มีสารตกค้าง (deposit) เป็นบางพอร์ เส้นเรย์เห็นไม่ค่อยซัด พาเรงคิมาเป็นแบบ พาเรงคิมาแบบปีก (alform parenchyma) และ พาเรงคิมาแบบปีกต่อ (confuent parenchyma) มีลายริ้ว (ripplemark)",
                    other: "",
                    status: true,
                    create_at: now,
                    update_at: now,
                    create_by: newUser.u_id,
                    update_by: newUser.u_id,
                },
                {
                    common_name: ["มะค่าโมง"],
                    eng_name: ["Black rosewood", "pod Mahogany", "Doussie"],
                    botanical_name: "Afzelia xylocarpa (Kurz) Craib",
                    pedigree: "FABACEAE",
                    place_of_origin: "ขึ้นในป่าเบญจพรรณขึ้น และป่าดิบแล้ง ตามภาคต่าง ๆ ทั่วไป ยกเว้นภาคใต้",
                    wood_characteristics: "สีน้ำตาลอมเหลือง เสี้ยนค่อนข้างสน เนื้อหยาบ มีริ้วแทรก แข็งเหนียว",
                    anatomical_characteristics: "พอร์ เป็นแบบ พอร์เดี่ยว (solitary pore) และ พอร์แฝด (multiple pore) แบบของการเรียงตัว ไม่เด่นชัด การกระจายเป็นแบบ กระจัดกระจาย (difuse porous) พอร์ใหญ่ ภายในพอร์มีสารตกค้าง (deposit) สีน้ำตาล เส้นเรย์เห็นชัด พาเรงคิมาเป็นแบบ พาเรงคิมาแบบปีก (aliform parenchyma) พาเรงคิมาแบบปีกต่อ (confluent parenchyma) และ พาเรงคิมาปลายฤดู (terminal parenchyma)",
                    other: "",
                    status: true,
                    create_at: now,
                    update_at: now,
                    create_by: newUser.u_id,
                    update_by: newUser.u_id,
                },
                {
                    common_name: ["พะยอม"],
                    eng_name: ["Phayom", "White meranti"],
                    botanical_name: "Shorea roxburghii G. Don",
                    pedigree: "DIPTEROCARPACEAE",
                    place_of_origin: "ขึ้นตามป่าเบญจพรรณชื้นและแล้งหรือป่าดิบแล้งทั่วไปทุกภาค ที่สูงจาก ระดับน้ำทะเล 60-1,200 เมตร",
                    wood_characteristics: "สีเหลืองอ่อน ทิ้งไว้นาน ๆ จะกลายเป็น สีน้ำตาล มีเส้นสีดำซึ่งเป็นท่อน้ำ ท่อน้ำมันผ่านเสมอ เสี้ยนสน เนื้อค่อนข้างหยาบ แข็งและเหนียว",
                    anatomical_characteristics: "พอร์ เป็นแบบ พอร์เดี่ยว (solitary pore) และ พอร์แฝด (mutiple pore) แบบของการเรียงหัว เด่นชัด การกระจายเป็นแบบ กระจัดกระจาย (diffuse porous) พอร์ใหญ่ ทางภายในพอร์ มีไทโลส (tylose) เป็นบางพอร์ พาเรงคิมาเป็นแบบ พาเรงคิมาแบบปีก (aliform parenchyma) พาเรงคิมาแบบปีกต่อ (confluent parenchyma) มีท่อยางที่ยังไม่แข็งตัวต่อเรียงยาวตัดกับเส้นเรย์",
                    other: "",
                    status: true,
                    create_at: now,
                    update_at: now,
                    create_by: newUser.u_id,
                    update_by: newUser.u_id,
                },
                {
                    common_name: ["ตะเคียนราก"],
                    eng_name: ["Takhian rak"],
                    botanical_name: "Hopea pierrei Hance",
                    pedigree: "DIPTEROCARPACEAE",
                    place_of_origin: "ขึ้นตามป่าดงดิบทางภาคใต้ที่ค่อนข้างราบ และมีการระบายน้ำดี สูงจากระดับน้ำทะเลไม่เกิน 300 เมตร",
                    wood_characteristics: "สีน้ำตาลอมเหลืองอมเขียว เสี้ยนสนเล็กน้อย เนื้อไม้ค่อนข้างละเอียดคล้ายตะเคียนทองมาก",
                    anatomical_characteristics: "พอร์เป็นแบบ พอร์เดี่ยว (solitary pore) พอร์แฝดมีน้อย แบบของการเรียงตัวไม่ด่นซัด การกระจายเป็นแบบ กระจัดกระจาย (diffuse porous) พอร์ขนาดปานกลาง ทางภายใน พอร์มีไทโลส (tylose) บ้างเป็นบางพอร์ มีท่อยางต่อเรียงเป็นแนวยาวตัดกับเป็นเส้นเรย์ เส้นเรย์เห็นชัดพาเรงคิมาเป็นแบบ พาเรงคิมาแบบปีก (aliform parenchyma)",
                    other: "",
                    status: true,
                    create_at: now,
                    update_at: now,
                    create_by: newUser.u_id,
                    update_by: newUser.u_id,
                },
                {
                    common_name: ["ตะเคียนทอง"],
                    eng_name: ["Thingan", "Takhian thong"],
                    botanical_name: "Hopea odorata Roxb.",
                    pedigree: "DIPTEROCARPACEAE",
                    place_of_origin: "ขึ้นเป็นหมู่กระจัดกระจายอยู่ตามที่ราบหรือค่อนข้างราบใกล้ฝั่งน้ำในป่าดงดิบทั่วประเทศ",
                    wood_characteristics: "สีน้ำตาลอมเหลือง มีเส้นสีเทาหรือขาวผ่านเสมอซึ่งเป็นท่อยาง เสี้ยนสน เล็กน้อย เนื้อค่อนข้างละเอียด",
                    anatomical_characteristics: "พอร์มีทั้งแบบ พอร์เดี่ยว (solitary pore) และ พอร์แฝด (multiple pore) แบบของการเรียงตัวไม่เด่นชัด การกระจายเป็นแบบ กระจัดกระจาย (difiuse porous) ทางภายในพอร์มิไทโลส (tylose) บ้างเป็นบางพอร์ พอร์ใหญ่มีท่อยางต่อเป็นแนวยาวเรียงตัดกันเป็นเส้นเรย์ เส้นเรย์เห็นซัด พาเรงคิมาเป็นแบบ พาเรงคิมาแบบกระจาย (diffuse parenchyma) และ พาเรงคิมาแบบปีก (aliform parenchyma)",
                    other: "",
                    status: true,
                    create_at: now,
                    update_at: now,
                    create_by: newUser.u_id,
                    update_by: newUser.u_id,
                },
                {
                    common_name: ["เต็ง"],
                    eng_name: ["Siamese Sal", "Thitya", "Teng"],
                    botanical_name: "Shorea obtusa Wall.ex Blume",
                    pedigree: "DIPTEROCARPACEAE",
                    place_of_origin: "ขึ้นเป็นหมูใหญ่ ๆ ตามป่าแดงหรือป่าเบญจพรรณแล้งที่เป็นดินลูกรัง และ เขาหินทรายปะปนอยู่กับพวกไม้รัง เหียง พลวง ทั่วๆไป ยกเว้นทางภาคใต้",
                    wood_characteristics: "สีน้ำตาลแกมแดง เสี้ยนสน เนื้อหยาบ แต่สม่ำเสมอ",
                    anatomical_characteristics: "พอร์เป็นแบบ พอร์เดี่ยว (solitary pore) และ พอร์แฝด (multiple pore) แบบของการเรียงตัว ไม่เด่นชัด การกระจายเป็นแบบ กระจัดกระจาย (diffuse porous) พอร์ใหญ่ ทางภายในพอร์มีไทโลส (tylose) เกือบทุกพอร์มีท่อยางเรียงต่อกันยาวตัดกับเส้นเรย์ เส้นเรย์เห็นชัด พาเรงคิมาเป็นแบบ พาเรงคิมาแบบปีก (aliform parenchyma) และ พาเรงคิมาแบบปีกต่อ (confluent parenchyma)",
                    other: "",
                    status: true,
                    create_at: now,
                    update_at: now,
                    create_by: newUser.u_id,
                    update_by: newUser.u_id,
                },
            ],
        });
    });
}
main()
    .catch((e) => {
    throw e;
})
    .finally(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.prisma.$disconnect();
}));
//# sourceMappingURL=seed.js.map