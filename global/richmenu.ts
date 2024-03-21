import axios from "axios";
import { lineConfig } from "./line/line_config";
import { loginLine, notLoginLine, deleteUserLine, banUserLine } from "./line/richmenu";

async function afterLoginSuccessUser(uid : string) {
  console.log(uid, loginLine);
  let urlRequest = `https://api.line.me/v2/bot/user/${uid}/richmenu/${loginLine}`;
  await axios.request({
    method: "POST",
    url: `${urlRequest}`,
    headers: {
      Authorization: `Bearer ` + lineConfig.channelAccessToken,
    },
  });
}

async function afterLoginSuccessExpert(uid : string) {
  
    let urlRequest = `https://api.line.me/v2/bot/user/${uid}/richmenu/${loginLine}`;
    await axios.request({
      method: "POST",
      url: `${urlRequest}`,
      headers: {
        Authorization: `Bearer ` + lineConfig.channelAccessToken,
      },
    });
  }

async function sessionOut(uid : string) {
    let urlRequest = `https://api.line.me/v2/bot/user/${uid}/richmenu/${notLoginLine}`;
    await axios.request({
      method: "POST",
      url: `${urlRequest}`,
      headers: {
        Authorization: `Bearer ` + lineConfig.channelAccessToken,
      },
    });
  }

async function banUserRichMenu(line_id : string){
  let urlRequest = `https://api.line.me/v2/bot/user/${line_id}/richmenu/${banUserLine}`;
  await axios.request({
    method: "POST",
    url: `${urlRequest}`,
    headers: {
      Authorization: `Bearer ` + lineConfig.channelAccessToken,
    },
  });
}

async function deleteUserRichMenu(line_id : string){
  let urlRequest = `https://api.line.me/v2/bot/user/${line_id}/richmenu/${deleteUserLine}`;
  await axios.request({
    method: "POST",
    url: `${urlRequest}`,
    headers: {
      Authorization: `Bearer ` + lineConfig.channelAccessToken,
    },
  });
}

async function activeUserRichMenu(line_id : string){
  let urlRequest = `https://api.line.me/v2/bot/user/${line_id}/richmenu/${loginLine}`;
  await axios.request({
    method: "POST",
    url: `${urlRequest}`,
    headers: {
      Authorization: `Bearer ` + lineConfig.channelAccessToken,
    },
  });
}

export {afterLoginSuccessUser, afterLoginSuccessExpert, sessionOut, banUserRichMenu, deleteUserRichMenu, activeUserRichMenu}
