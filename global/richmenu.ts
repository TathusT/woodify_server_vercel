import axios from "axios";
import { lineConfig } from "./line/line_config";
import { loginLine, notLoginLine } from "./line/richmenu";

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

export {afterLoginSuccessUser, afterLoginSuccessExpert, sessionOut}
