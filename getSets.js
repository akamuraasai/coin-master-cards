const axios = require('axios');
const env = require('dotenv');
const qs = require('querystring');
const fs = require('fs');

env.config();

const makeLogin = async () => {
  const url = 'https://vik-game.moonactive.net/api/v1/users/login';

  const headers = {
    accept: 'application/json',
    'accept-encoding': 'gzip, deflate, br',
    'accept-language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7,de;q=0.6',
    authorization: `Bearer ${process.env.TOKEN}`,
    'content-type': 'application/x-www-form-urlencoded',
    origin: 'https://canvas.moonactive.net',
    referer: 'https://canvas.moonactive.net/',
    'sec-ch-ua': '"Chromium";v="86", "\"Not\\A;Brand";v="99", "Google Chrome";v="86"',
    'sec-ch-ua-mobile': '?0',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36:',
    'x-client-version': '3.5.165',
    'x-platform': 'WebGL',
  };

  const data = {
    'Device[udid]': process.env.DEVICE_ID,
    'Device[change]': '20202211_1',
    'Device[os]': 'WebGL',
    API_KEY: 'viki',
    API_SECRET: 'coin',
    fbToken: '',
    locale: 'pt',
    'Client[version]': '3.5_fbweb',
    seq: 0,
  };

  try {
    const result = await axios.post(url, qs.stringify(data), { headers });
    const { sessionToken, userId } = result.data;
    return { sessionToken, userId };
  } catch (e) {
    console.log(e);
  }

  return null;
};

const updateFBData = async (userId, token) => {
  const url = `https://vik-game.moonactive.net/api/v1/users/${userId}/update_fb_data`;

  const headers = {
    accept: 'application/json',
    'accept-encoding': 'gzip, deflate, br',
    'accept-language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7,de;q=0.6',
    authorization: `Bearer ${token}`,
    'content-type': 'application/x-www-form-urlencoded',
    origin: 'https://canvas.moonactive.net',
    referer: 'https://canvas.moonactive.net/',
    'sec-ch-ua': '"Chromium";v="86", "\"Not\\A;Brand";v="99", "Google Chrome";v="86"',
    'sec-ch-ua-mobile': '?0',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36',
    'x-client-version': '3.5.165',
    'x-platform': 'WebGL',
  };

  const data = {
    'Device[udid]': process.env.DEVICE_ID,
    'Device[change]': '20202211_1',
    API_KEY: 'viki',
    API_SECRET: 'coin',
    fbToken: '',
    locale: 'pt',
    'Client[version]': '3.5.165_fbweb',
    'User[fb_token]': process.env.USER_FB_TOKEN,
    p: 'fb',
  };

  try {
    const result = await axios.post(url, qs.stringify(data), { headers });
    const { fbToken } = result.data;
    return fbToken;
  } catch (e) {
    console.log(e);
  }

  return null;
};

const getUserSets = async (userId, token, fbToken) => {
  const url = `https://vik-game.moonactive.net/api/v1/users/${userId}/sets`;

  const headers = {
    accept: 'application/json',
    'accept-encoding': 'gzip, deflate, br',
    'accept-language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7,de;q=0.6',
    authorization: `Bearer ${token}`,
    'content-type': 'application/x-www-form-urlencoded',
    origin: 'https://canvas.moonactive.net',
    referer: 'https://canvas.moonactive.net/',
    'sec-ch-ua': '"Chromium";v="86", "\"Not\\A;Brand";v="99", "Google Chrome";v="86"',
    'sec-ch-ua-mobile': '?0',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36',
    'x-client-version': '3.5.165',
    'x-platform': 'WebGL',
  };

  const data = {
    'Device[udid]': process.env.DEVICE_ID,
    'Device[change]': '20202211_1',
    API_KEY: 'viki',
    API_SECRET: 'coin',
    fbToken,
    locale: 'pt',
  };

  try {
    const result = await axios.post(url, qs.stringify(data), { headers });
    const { decks } = result.data;
    return decks;
  } catch (e) {
    console.log(e);
  }

  return null;
};

const main = async () => {
  const loginResult = await makeLogin();
  if (!loginResult) {
    console.log('Erro ao efetuar login.');
    return;
  }

  const { userId, sessionToken } = loginResult;
  const fbToken = await updateFBData(userId, sessionToken);
  if (!fbToken || fbToken.length === 0) {
    console.log('Erro ao pegar o token do facebook.');
    return;
  }

  const decks = await getUserSets(userId, sessionToken, fbToken);
  await fs.writeFileSync('src/sets.json', JSON.stringify({ decks }));
};

main();
