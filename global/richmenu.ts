import axios from "axios";
import { lineConfig } from "./line/line_config";

async function afterLoginSuccessUser(uid : string) {
  let urlRequest = `https://api.line.me/v2/bot/user/${uid}/richmenu/richmenu-b249cae10c20e8f1b01658430fc7a47d`;
  await axios.request({
    method: "POST",
    url: `${urlRequest}`,
    headers: {
      Authorization: `Bearer ` + lineConfig.channelAccessToken,
    },
  });
}

async function afterLoginSuccessExpert(uid : string) {
    let urlRequest = `https://api.line.me/v2/bot/user/${uid}/richmenu/richmenu-792069faa05a7bac91e5821bfcf94932`;
    await axios.request({
      method: "POST",
      url: `${urlRequest}`,
      headers: {
        Authorization: `Bearer ` + lineConfig.channelAccessToken,
      },
    });
  }

async function sessionOut(uid : string) {
    let urlRequest = `https://api.line.me/v2/bot/user/${uid}/richmenu/richmenu-e4c016ca164f3b51441760c88f259962`;
    await axios.request({
      method: "POST",
      url: `${urlRequest}`,
      headers: {
        Authorization: `Bearer ` + lineConfig.channelAccessToken,
      },
    });
  }

export {afterLoginSuccessUser, afterLoginSuccessExpert, sessionOut}
