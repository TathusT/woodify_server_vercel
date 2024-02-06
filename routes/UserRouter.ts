import express from 'express';
import { Router } from 'express';
import { getUserFromUserId, getAllUser, updateRoleFromId, getUserToday, getUserWithEmail, getCountExpert, checkUsername } from '../global/prisma_query_user';
import { decryptAccessToken } from '../global/token_manager';
const nodemailer = require("nodemailer");
require('dotenv').config();

const router: Router = express.Router();

router.get("/user/:u_id",async (req, res) => {
    const u_id = req.params.u_id;
    try {
      const user = await getUserFromUserId(u_id);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
})

router.get("/user",async (req, res) => {
  try {
    const users = await getAllUser();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
})

router.get("/user_today",async (req, res) => {
  try {
    const users = await getUserToday();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}) 

router.post('/user_with_token', async (req, res) => {
  try {
    const data = req.body;
    const token = data.token;
    const u_id = await decryptAccessToken(token);
    const user =  await getUserFromUserId(u_id.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
})



router.put("/update_role",async (req, res) => {
  try {
    const data = req.body;
    const uid = data.u_id;
    const role = data.role
    const user = await updateRoleFromId(uid, role);
    res.status(200).json({ message: "update role success", data : user });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
})


router.post("/send_email", async function (req, res, next) {
  let email = req.body.email;

  const checkEmail : any = await getUserWithEmail(email);
  if(checkEmail != null){
    return res.json({status : 200, message : 'email is taken'});
  }
  let chars =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let passwordLength = 8;
  let password = "";
  for (let i = 0; i <= passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }

  let charsAdmin = '0123456789'
  let accNumber = 8;
  let genAcc = ""
  while (true) {
    genAcc = ""
    for (let i = 0; i <= accNumber; i++) {
      let randomNumberAcc = Math.floor(Math.random() * charsAdmin.length);
      genAcc += chars.substring(randomNumberAcc, randomNumberAcc + 1);
    }
    const checkUser = await checkUsername(`admin${genAcc}`)
    if(checkUser == null){
      break;
    }
    else{
      break;
    }
  }
  try {
    const output = `
              <p>You have a invite to expert user in Woodify</p>
              <h3>Link for register</h3>
              <ul>
                  <li>username : admin${parseInt(genAcc)}</li>
                  <li>password : ${password}</li>
              </ul>
              `;
    var transporter = nodemailer.createTransport({
      service : "gmail",
      auth: {
        user: "63070065@kmitl.ac.th",
        pass: "SakuraHiro8852",
      },
    });

    var mailOptions = {
      from: "63070065@kmitl.ac.th",
      to: `${email}`,
      subject: "Verify to expert account",
      text: "from admin woodify",
      html: output,
    };

    transporter.sendMail(mailOptions, function (error : any, info : any) {
      if (error) {
        console.log(error);
      } else {
        
        res.json({status : 200, message : "send success"});
      }
    });
  } catch (error) {
    return next(error);
  }
});

export default router;