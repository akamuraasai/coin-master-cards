const axios = require('axios');
const env = require('dotenv');
const qs = require('querystring');

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
    'Device[udid]': 'fb5352431244806886',
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
    console.log(result.data);
  } catch (e) {
    console.log(e);
  }
};

const main = async () => {
  await makeLogin();
};

main();
