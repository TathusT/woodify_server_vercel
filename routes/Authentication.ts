import express from "express";
import { Router } from "express";
import { prisma } from "../global/prisma";
import axios from "axios";
import { lineConfig } from "../global/line/line_config";
import { verifyLogin, createUser } from "../global/prisma_query";
import {
  generateAccessToken,
  checkAuthentication,
} from "../global/token_manager";
import {
  afterLoginSuccessUser,
  afterLoginSuccessExpert,
} from "../global/richmenu";

const router: Router = express.Router();
const now = new Date();

router.post("/liff/login", async (req, res) => {
  const profile = req.body.lineProfile;
  const uid = profile.userId;
  const user = await verifyLogin({ line_id: uid });
  if (user.length == 0) {
    const newUser = await createUser({
      line_id: uid,
      firstname: profile.displayName,
      lastname: "",
      username: "",
      password: "",
      email: "",
      phone: "",
      image: profile.pictureUrl,
    });
    await afterLoginSuccessUser(uid);
    const accessToken = await generateAccessToken({ id: newUser.u_id });
    res.send(JSON.stringify({ status: 1, line_access_token: accessToken }));
  } else {
    if (user[0].role == "EXPERT") {
      await afterLoginSuccessExpert(uid);
    } else {
      await afterLoginSuccessUser(uid);
    }
    const accessToken = await generateAccessToken({ id: user[0].u_id });
    res.send(JSON.stringify({ status: 1, line_access_token: accessToken }));
  }
});

router.post("/admin/login", async (req, res) => {
  const data = req.body;
  const user: any = await verifyLogin({
    username: data.username,
    password: data.password,
  });
  if (user.length != 0) {
    const accessToken = await generateAccessToken({ id: user[0].u_id });
    res.send(JSON.stringify({ status: 1, access_token: accessToken }));
  } else {
    res.send(JSON.stringify({ status: 0 }));
  }
});

router.post("/line/login", async (req, res) => {
  const data = req.body;
  const user: any = await verifyLogin({
    username: data.username,
    password: data.password,
  });
  if (user.length != 0) {
    const accessToken = await generateAccessToken({ id: user[0].u_id });
    if (user[0].role == "EXPERT") {
      await afterLoginSuccessExpert(user[0].line_id);
    } else {
      await afterLoginSuccessUser(user[0].line_id);
    }
    console.log(JSON.stringify({ status: 1, line_access_token: accessToken }));

    res.send(JSON.stringify({ status: 1, line_access_token: accessToken }));
  } else {
    res.send(JSON.stringify({ status: 0 }));
  }
});

router.post("/authentication_user", async (req, res) => {
  const jwtStatus = await checkAuthentication(req);
  console.log(jwtStatus);

  if (jwtStatus != false) {
    res.send(jwtStatus);
  } else {
    res.send(false);
  }
});

router.post("/line/register", async (req, res) => {
  const data = JSON.parse(req.body.data);
  const profile = req.body.lineProfile;
  const uid = profile.userId;
  const user = await verifyLogin({ username: data.username });
  if (user.length == 0) {
    const newUser = await createUser({
      line_id: uid,
      firstname: data.firstname,
      lastname: data.lastname,
      username: data.username,
      password: data.password,
      email: data.email,
      phone: "",
      image: profile.pictureUrl,
    });
    res.send(JSON.stringify({ status: 1, message: "create Success" }));
  } else {
    res.send(JSON.stringify({ status: 1, message: "create Failed" }));
  }
});

router.post("/line/google_login", async (req, res) => {
  const profile = req.body.lineProfile;
  const googleData = JSON.parse(req.body.googleData)
  const uid = profile.userId;
  const user = await verifyLogin({ line_id: uid });
  if (user.length == 0) {
    const newUser = await createUser({
      line_id: uid,
      firstname: googleData.given_name,
      lastname: googleData.family_name,
      username: "",
      password: "",
      email: googleData.email,
      phone: "",
      image: profile.pictureUrl,
    });
    await afterLoginSuccessUser(uid);
    const accessToken = await generateAccessToken({ id: newUser.u_id });
    res.send(JSON.stringify({ status: 1, line_access_token: accessToken }));
  } else {
    if (user[0].role == "EXPERT") {
      await afterLoginSuccessExpert(uid);
    } else {
      await afterLoginSuccessUser(uid);
    }
    const accessToken = await generateAccessToken({ id: user[0].u_id });
    res.send(JSON.stringify({ status: 1, line_access_token: accessToken }));
  }
});

export default router;
