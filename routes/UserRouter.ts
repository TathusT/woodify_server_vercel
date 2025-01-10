import express from 'express';
import { Router } from 'express';
import { getUserFromUserId, getAllUser, updateRoleFromId, getUserToday, getUserWithEmail, getCountExpert, setUserData, createExpert, deleteUser, banUser, getAllUserWithFilter, activeUser, updateUser} from '../global/prisma_query_user';
import { decryptAccessToken, generateAccessToken } from '../global/token_manager';
import { activeUserRichMenu, afterLoginSuccessExpert, afterLoginSuccessUser, banUserRichMenu, deleteUserRichMenu } from '../global/richmenu';
import { addTokenInvited } from '../global/prisma_query_addToken';
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
    console.log(users);
    
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

router.put("/update_verify_data",async (req, res) => {
  try {
    const data = req.body;
    const user = await setUserData(data);
    if(user.verify_data == true){
      if(user.role == "EXPERT"){
        await afterLoginSuccessExpert(user.line_id);
      }
      else if(user.role == 'USER'){
        await afterLoginSuccessUser(user.line_id)
      }
      else if(user.role == 'ADMIN'){
        await afterLoginSuccessExpert(user.line_id);
      } 
    }
    res.status(200).json({ message: "update_success"});
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
})

router.post("/create_expert",async (req, res) => {
  try {
    const data = req.body;
    const user = await createExpert(data);
    const access_token = await generateAccessToken({id : user.u_id})
    res.status(200).json({ message: "create_success", data : user, access_token : access_token});
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
})


router.post("/send_email", async function (req, res, next) {
  const data = req.body
  const email = data.email;
  const token = data.token;
  const inviteBy = await decryptAccessToken(token)
  const checkEmail : any = await getUserWithEmail(email);
  if(checkEmail != null){
    if(checkEmail.role == 'EXPERT'){
      return res.json({status : 200, message : 'email is expert'});
    }
  }

  try {
    const a_token = await addTokenInvited(inviteBy.id, email);
    const output = `
              <p>You have a invite to expert user in Woodify</p>
              <h3>Link for register</h3>
              <a href='${process.env.PATH_FRONT}/admin/signup/${a_token.a_id}'>Click here</a>
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

router.post("/delete_user",async (req, res) => {
  try {
    const data = req.body;
    const user = await deleteUser(data.u_id);
    if(user.status == 'DELETE'){
      await deleteUserRichMenu(user.line_id);
    }
    res.status(200).json({ message: "delete success"});
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}) 

router.post("/ban_user",async (req, res) => {
  try {
    const data = req.body;
    const user = await banUser(data.u_id);
    if(user.status == 'BAN'){
      await banUserRichMenu(user.line_id);
    }
    res.status(200).json({ message: "ban success"});
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
})

router.post("/active_user",async (req, res) => {
  try {
    const data = req.body;
    const user = await activeUser(data.u_id);
    if(user.status == 'ACTIVE'){
      await activeUserRichMenu(user.line_id);
    }
    res.status(200).json({ message: "active success"});
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
})

router.post("/all_users_filter", async (req, res) => {
  try {
    const data = req.body;
    const pageSize = data.pageSize;
    const currentPage = data.currentPage;
    const filter = data.filter;
    const manual = await getAllUserWithFilter(
      parseInt(currentPage),
      parseInt(pageSize),
      filter
    );
    res.status(200).json(manual);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/update_profile", async (req, res) => {
  try {
    const data = req.body;
    const user = await updateUser(data.data, data.u_id)
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;