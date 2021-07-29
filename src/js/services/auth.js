import AppID from "ibmcloud-appid-js";
import {
  USER_ID,
  USER_MODEL,
  LOGIN_POPUP,
  LOGIN_FAILED_CREDS,
} from "../constants";
import db from "./database/db";
import config from "../app_id_config.json";

export const startAuth = () => {
  return new AppID();
};

export const initLogin = async (appIdInstance) => {
  try {
    await appIdInstance.init(config);
    return LOGIN_POPUP;
  } catch (e) {
    return LOGIN_FAILED_CREDS;
  }
};

export const onLoginButtonClick = async (appIdInstance) => {
  let userInfo = {};
  let decodeIDToken = {};
  try {
    const tokens = await appIdInstance.signin();
    userInfo = await appIdInstance.getUserInfo(tokens.accessToken);
    decodeIDToken = tokens.idTokenPayload;
  } catch (e) {
    console.error(e);
  } finally {
    return { userInfo, decodeIDToken };
  }
};

//persist user data locally
export const authUser = async (userInfo) => {
  let user = await db[USER_MODEL].get(USER_ID);
  let inserted = 0;
  let updated = 0;
  if (!user) { //first time
    inserted = await db[USER_MODEL].add({ _id: USER_ID, ...userInfo });
  }else{ //refresh
    updated = await db[USER_MODEL].update(USER_ID, { ...userInfo });
  }
  user = await db[USER_MODEL].get(USER_ID);
  return { inserted, updated, user };
};
