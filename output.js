//Mon Aug 11 2025 09:12:55 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const il1li1 = new iilii1("联通云盘任务"),
  l111ii = il1li1.isNode() ? require("./sendNotify") : "",
  i1III1 = 1,
  l1ii1i = 0,
  {
    v4: l1liII
  } = require("uuid"),
  I1ii1 = require("crypto"),
  li1111 = require("crypto-js"),
  IiliI = l1liII();
let IiIIiI = process.env.chinaUnicomCookie,
  I11IiI = "",
  l111il = "";
ckArr = IiIIiI.split("&");
ll1ilI("【debug】 这是你的账号数组:\n " + ckArr);
!(async () => {
  ckArr = IiIIiI.split("&");
  await l1liI1();
  for (let ll1I11 = 0; ll1I11 < ckArr.length; ll1I11++) {
    let l1lli = ll1I11 + 1;
    console.log("------------- 开始【第 " + l1lli + " 个账号】-------------");
    l111il = ckArr[ll1I11].split("&");
    ll1ilI("【debug】 这是你第 " + l1lli + " 账号信息:\n " + l111il);
    await I11Iil();
    await il1li1.wait(2000);
    if (num1 == 1) {
      console.log("当前online过期，跳过...");
      continue;
    }
    customDateString = li111l();
    const il1lli = require("axios");
    let IIi1Il = {
      "method": "GET",
      "url": "https://m.client.10010.com/mobileService/openPlatform/openPlatLineNew.htm?appName=shouting&clientid=1001000003&to_url=https://panservice.mail.wo.cn/h5/activitymobile/turn-template?activityId%3D6",
      "headers": {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 unicom{version:iphone_c@11.0800}",
        "Cookie": "PvSessionId=" + customDateString + "" + IiliI + ";c_mobile=" + num1 + "; c_version=iphone_c@11.0800; city=036|" + cityCode + "|90063345|-99;devicedId=" + IiliI + "; ecs_token=" + ecs_token + ";t3_token=" + t3_token + ""
      },
      "maxRedirects": 0
    };
    await il1lli.request(IIi1Il).catch(li1lII => {
      wenb = li1lII.request.res.rawHeaders[13];
      ticket1 = wenb.match(/ticket=([^&]+)/);
      ticket = ticket1[1];
    });
    await il1li1.wait(2000);
    req = Math.floor(89999 * Math.random()) + 100000;
    sjc13 = Math.round(new Date().getTime()).toString();
    const l1lll = "HandheldHallAutoLogin" + sjc13 + "" + req + "100002",
      IIi1Ii = I1ii1.createHash("md5");
    IIi1Ii.update(l1lll);
    md5Hash = IIi1Ii.digest("hex");
    await Il1l1();
    await Il1lI();
    console.log("获取ck中，等待一会...");
    await il1li1.wait(5000);
    oldjf = null;
    await IiIIi1();
    await l1ii1I();
    await il1li1.wait(6000);
    await IiIIi1();
  }
  await I1iiI(I11IiI);
})().catch(Il11II => il1li1.logErr(Il11II)).finally(() => il1li1.done());
async function Il1lI() {
  let I11Ill = {
      "url": "https://panservice.mail.wo.cn/api-user/api/user/ticket",
      "headers": {
        "Accept-Encoding": "gzip;q=1.0, compress;q=0.5",
        "source-type": "woapi",
        "Host": "panservice.mail.wo.cn",
        "X-YP-Client-Id": "1001000003",
        "Connection": "keep-alive",
        "app-type": "unicom",
        "accesstoken": token,
        "Content-Type": "application/json",
        "User-Agent": "ChinaUnicom4.x/12.2 (com.chinaunicom.mobilebusiness; build:44; iOS 16.6.0) Alamofire/4.7.3 unicom{version:iphone_c@12.0200}",
        "Accept-Language": "zh-Hans-CN;q=1.0",
        "X-CM-SERVICE": "PHONE",
        "token": token,
        "Accept": "*",
        "X-YP-Open-Version": "v1.0",
        "X-YP-Access-Token": token,
        "clientId": "1001000003",
        "access-token": token,
        "client-id": "1001000003"
      },
      "body": "{}"
    },
    IlII1l = await li111i(I11Ill, "ticket");
  ticket = IlII1l.result.ticket;
  const IiIIll = require("axios");
  let lIiiii = JSON.stringify({
      "activityId": "s743585947358590976",
      "partnersId": "1649"
    }),
    iililI = {
      "method": "POST",
      "url": "https://m.jf.10010.com/jf-external-application/page/query",
      "headers": {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 unicom{version:iphone_c@12.0200}",
        "Accept": "application/json, text/plain, */*",
        "Content-Type": "application/json",
        "content-type": "application/json;charset=UTF-8",
        "partnersid": "1649",
        "ticket": ticket,
        "sec-fetch-site": "same-origin",
        "accept-language": "zh-CN,zh-Hans;q=0.9",
        "sec-fetch-mode": "cors",
        "origin": "https://m.jf.10010.com",
        "clienttype": "yunpan_unicon_applet",
        "sec-fetch-dest": "empty"
      },
      "data": lIiiii
    };
  IiIIll.request(iililI).then(IlII1I => {
    const i1Il1i = IlII1I.headers["set-cookie"],
      lIiil1 = i1Il1i.find(IiIIl1 => IiIIl1.startsWith("_jea_id="));
    jeaId = lIiil1?.["split"](";")[0]?.["split"]("=")[1] || "未找到 Cookie";
    const i1Il1l = IlII1I.data;
    if (i1Il1l.code === "0000") {
      {
        const i111I1 = JSON.parse(i1Il1l.data.pageData),
          I11Ili = {};
        i111I1.modules.forEach(IIi1II => {
          IIi1II.data?.["content"]?.["taskId"] && (I11Ili.signTaskId = IIi1II.data.content.taskId);
          Array.isArray(IIi1II.data?.["content"]?.["goodsList"]) && IIi1II.data.content.goodsList.forEach(l1IIIi => {
            if (l1IIIi.taskId) {
              if (l1IIIi.goodsName === "上传文件到云盘") I11Ili.uploadFileTaskId = l1IIIi.taskId;else {
                if (l1IIIi.goodsName === "分享文件") I11Ili.shareFileTaskId = l1IIIi.taskId;else {
                  if (l1IIIi.goodsName === "当月上传容量满1G") {
                    I11Ili.storage1GBTaskId = l1IIIi.taskId;
                  }
                }
              }
            }
          });
        });
      }
    } else console.log("请求失败:", i1Il1l.msg);
  }).catch(l11I => console.log("error", l11I));
}
async function lli1l() {
  req = Math.floor(89999 * Math.random()) + 100000;
  sjc13 = Math.round(new Date().getTime()).toString();
  const iiiii1 = "ShareFile" + sjc13 + "" + req + "wohome",
    IIill1 = I1ii1.createHash("md5");
  IIill1.update(iiiii1);
  md5Hash = IIill1.digest("hex");
  function iIII(Il1lIl, I1111I, I1I11) {
    const il11l1 = li1111.enc.Utf8.parse(I1111I),
      I1I1l = li1111.enc.Utf8.parse(I1I11),
      i1II1I = li1111.AES.encrypt(Il1lIl, il11l1, {
        "iv": I1I1l,
        "mode": li1111.mode.CBC,
        "padding": li1111.pad.Pkcs7
      });
    return i1II1I.toString();
  }
  const iI1I1 = "{fileIds: \"cb26981fc8ae43cf9600e0c0d1f4c33d\",fileFolderIds: \"\",days: 7,autoFill: \"1\",clientId: \"1001000003\"}",
    Ii11iI = lli1i(token),
    IiliII = "wNSOYIB1k1DjY5lA";
  param = iIII(iI1I1, Ii11iI, IiliII);
  let Iiii1I = {
      "url": "https://panservice.mail.wo.cn/wohome/dispatcher",
      "headers": {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090c33)XWEB/11581",
        "Content-Type": "application/json",
        "accesstoken": token,
        "xweb_xhr": "1",
        "Sec-Fetch-Site": "cross-site",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Referer": "https://servicewechat.com/wxd456d97d8aa1ee4e/85/page-frame.html",
        "Accept-Language": "zh-CN,zh;q=0.9"
      },
      "body": "{\"header\": {\"key\": \"ShareFile\",\"resTime\": " + sjc13 + ",\"reqSeq\": " + req + ",\"channel\": \"wohome\",\"version\": \"\",\"sign\": \"" + md5Hash + "\"},\"body\": {\"param\":\"" + param + "\",\"clientId\":\"1001000003\",\"secret\":true}}"
    },
    II1il1 = await li111i(Iiii1I, "分享");
}
async function Iili1() {
  req = Math.floor(89999 * Math.random()) + 100000;
  sjc13 = Math.round(new Date().getTime()).toString();
  const I1I1i = "AppQueryUser" + sjc13 + "" + req + "api-user",
    iiiiii = I1ii1.createHash("md5");
  iiiiii.update(I1I1i);
  md5Hash = iiiiii.digest("hex");
  function iiiiil(ililI, II1ilI, iII1ii) {
    const li1III = li1111.enc.Utf8.parse(II1ilI),
      lIii1 = li1111.enc.Utf8.parse(iII1ii),
      IIl1il = li1111.AES.encrypt(ililI, li1III, {
        "iv": lIii1,
        "mode": li1111.mode.CBC,
        "padding": li1111.pad.Pkcs7
      });
    return IIl1il.toString();
  }
  const l1Il11 = "{\"accessToken\":\"" + token + "\"}",
    IIl1lI = "Py1J67PAQoCb8Iel",
    ilii1i = "wNSOYIB1k1DjY5lA";
  param = iiiiil(l1Il11, IIl1lI, ilii1i);
  let IiliIl = {
      "url": "https://panservice.mail.wo.cn/api-user/dispatcher",
      "headers": {
        "Sec-Fetch-Dest": "empty",
        "Connection": "keep-alive",
        "Accept-Encoding": "gzip, deflate, br",
        "Content-Type": "application/json",
        "Sec-Fetch-Site": "same-origin",
        "Origin": "https://panservice.mail.wo.cn",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) LianTongYunPan/4.0.4 (iPhone; iOS 16.6)",
        "Client-Id": "1001000035",
        "Sec-Fetch-Mode": "cors",
        "App-Version": "yp-app/4.0.4",
        "Host": "panservice.mail.wo.cn",
        "Access-Token": token,
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        "Accept": "application/json, text/plain, */*"
      },
      "body": "{\"header\":{\"key\":\"AppQueryUser\",\"resTime\":" + sjc13 + ",\"reqSeq\":" + req + ",\"channel\":\"api-user\",\"version\":\"\",\"sign\":\"" + md5Hash + "\"},\"body\":{\"param\":\"" + param + "\",\"clientId\":\"1001000003\",\"secret\":true}}"
    },
    ilii1l = await li111i(IiliIl, "浏览");
  await IiiiIl();
}
async function l1lil() {
  req = Math.floor(89999 * Math.random()) + 100000;
  sjc13 = Math.round(new Date().getTime()).toString();
  function lIlII1(II1ii1, Ii11l1, II1iiI) {
    {
      const I1111i = li1111.enc.Utf8.parse(Ii11l1),
        iliiI = li1111.enc.Utf8.parse(II1iiI),
        lIil1 = li1111.AES.encrypt(II1ii1, I1111i, {
          "iv": iliiI,
          "mode": li1111.mode.CBC,
          "padding": li1111.pad.Pkcs7
        });
      return lIil1.toString();
    }
  }
  const Il111I = new Date(),
    l1Il1l = "" + Il111I.getFullYear() + String(Il111I.getMonth() + 1).padStart(2, "0") + String(Il111I.getDate()).padStart(2, "0") + String(Il111I.getHours()).padStart(2, "0") + String(Il111I.getMinutes()).padStart(2, "0") + String(Il111I.getSeconds()).padStart(2, "0"),
    il1i = "{\"spaceType\":\"0\",\"directoryId\":\"0\",\"batchNo\":\"" + l1Il1l + "\",\"fileName\":\"2025年4月16日20时26分33秒.jpg\",\"fileSize\":6376590,\"fileType\":\"1\"}",
    IIl1ii = lli1i(token),
    il1l = "wNSOYIB1k1DjY5lA";
  param = lIlII1(il1i, IIl1ii, il1l);
  const Ii11ll = require("request"),
    ilil1 = require("fs"),
    llII = require("path"),
    li1l11 = {
      "timestamp": Date.now(),
      "randomString": Math.random().toString(36).substring(2, 8),
      "accessToken": token,
      "fileName": "2025年4月16日20时26分33秒.jpg",
      "filePath": llII.join(__dirname, "313d8600-873e-42a0-bd8d-7357bde2ac43"),
      "fileSize": ilil1.statSync(llII.join(__dirname, "313d8600-873e-42a0-bd8d-7357bde2ac43")).size,
      "channel": "wocloud",
      "directoryId": "0",
      "fileInfo": param,
      "contentType": "null"
    },
    lIiI1I = {
      "uniqueId": li1l11.timestamp + "_" + li1l11.randomString,
      "accessToken": li1l11.accessToken,
      "fileName": li1l11.fileName,
      "psToken": "undefined",
      "fileSize": li1l11.fileSize.toString(),
      "totalPart": "1",
      "partSize": li1l11.fileSize.toString(),
      "partIndex": "1",
      "channel": li1l11.channel,
      "directoryId": li1l11.directoryId,
      "fileInfo": li1l11.fileInfo,
      "file": {
        "value": ilil1.createReadStream(li1l11.filePath),
        "options": {
          "filename": llII.basename(li1l11.filePath),
          "contentType": li1l11.contentType
        }
      }
    },
    lII1iI = {
      "method": "POST",
      "url": "https://tjupload.pan.wo.cn/openapi/client/upload2C",
      "headers": {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36 Edg/135.0.0.0",
        "Accept-Encoding": "gzip, deflate, br, zstd",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-ch-ua": "\"Microsoft Edge\";v=\"135\", \"Not-A.Brand\";v=\"8\", \"Chromium\";v=\"135\"",
        "dnt": "1",
        "sec-ch-ua-mobile": "?0",
        "origin": "https://pan.wo.cn",
        "sec-fetch-site": "same-site",
        "sec-fetch-mode": "cors",
        "sec-fetch-dest": "empty",
        "referer": "https://pan.wo.cn/",
        "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
        "priority": "u=1, i"
      },
      "formData": lIiI1I
    };
  Ii11ll(lII1iI, function (Il1lII, iiiill, IIl1iI) {
    if (Il1lII) throw new Error(Il1lII);
  });
}
function lli1i(Ii11ii) {
  if (typeof Ii11ii !== "string") throw new TypeError("输入必须是一个字符串");
  return Ii11ii.substring(0, 16);
}
async function Il1l1() {
  let Ii11il = {
      "url": "https://panservice.mail.wo.cn/wohome/dispatcher",
      "headers": {
        "Connection": "keep-alive",
        "Accept-Encoding": "gzip, deflate, br",
        "accessToken": "",
        "Content-Type": "application/json",
        "client-Id": "1001000003",
        "Origin": "https://panservice.mail.wo.cn",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 unicom{version:iphone_c@11.0602}",
        "access-token": "",
        "Host": "panservice.mail.wo.cn",
        "X-YP-Client-Id": "1001000003",
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        "Accept": "application/json, text/plain, */*"
      },
      "body": "{\"header\": {\"key\": \"HandheldHallAutoLogin\",\"resTime\": " + sjc13 + ",\"reqSeq\": " + req + ",\"channel\": \"100002\",\"version\": \"\",\"sign\": \"" + md5Hash + "\"},\"body\": {\"clientId\": \"1001000003\",\"ticket\": \"" + ticket + "\"}}"
    },
    ilii1 = await li111i(Ii11il, "token");
  token = ilii1.RSP.DATA.token;
}
async function IiiiIl() {
  let lli1I1 = {
      "url": "https://panservice.mail.wo.cn/activity/v1/activityList",
      "headers": {
        "Sec-Fetch-Dest": "empty",
        "Sys-Version": "ios/16_6",
        "Connection": "keep-alive",
        "Accept-Encoding": "gzip, deflate, br",
        "Content-Type": "application/json",
        "credentials": "include",
        "Sec-Fetch-Site": "same-origin",
        "Origin": "https://panservice.mail.wo.cn",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) LianTongYunPan/4.0.4 (iPhone; iOS 16.6)",
        "Client-Id": "1001000035",
        "Sec-Fetch-Mode": "cors",
        "App-Version": "yp-app/4.0.4",
        "Host": "panservice.mail.wo.cn",
        "Access-Token": token,
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        "Accept": "application/json, text/plain, */*"
      },
      "body": "{\n  \"bizKey\": \"activityCenterPipeline\",\n  \"bizObject\": {\n    \"pageNo\": 1\n  }\n}"
    },
    II1I1i = await li111i(lli1I1, "浏览任务");
}
async function i1IIII(lIiI) {
  let lIi1 = {
      "url": "https://m.jf.10010.com/jf-external-application/jftask/toFinish",
      "headers": {
        "clientType": "yunpan_unicon_applet",
        "Accept-Encoding": "gzip, deflate, br",
        "Connection": "keep-alive",
        "ticket": ticket,
        "Content-Type": "application/json",
        "Sec-Fetch-Site": "same-origin",
        "Origin": "https://m.jf.10010.com",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 unicom{version:iphone_c@12.0200}",
        "Sec-Fetch-Mode": "cors",
        "partnersId": "1649",
        "Host": "m.jf.10010.com",
        "Cookie": "_jea_id=" + jeaId + ";",
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        "Accept": "application/json, text/plain, */*"
      },
      "body": "{\n  \"taskCode\": \"" + lIiI + "\"\n}"
    },
    lIill = await li111i(lIi1, "开启任务");
  xinxi = lIill.msg;
  await Iili1();
}
async function l1ii11(iIlIIi) {
  let ilIIIi = {
      "url": "https://m.jf.10010.com/jf-external-application/jftask/toFinish",
      "headers": {
        "clientType": "yunpan_unicon_applet",
        "Accept-Encoding": "gzip, deflate, br",
        "Connection": "keep-alive",
        "ticket": ticket,
        "Content-Type": "application/json",
        "Sec-Fetch-Site": "same-origin",
        "Origin": "https://m.jf.10010.com",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 unicom{version:iphone_c@12.0200}",
        "Sec-Fetch-Mode": "cors",
        "partnersId": "1649",
        "Host": "m.jf.10010.com",
        "Cookie": "_jea_id=" + jeaId + ";",
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        "Accept": "application/json, text/plain, */*"
      },
      "body": "{\n  \"taskCode\": \"" + iIlIIi + "\"\n}"
    },
    iIiI11 = await li111i(ilIIIi, "开启任务");
  xinxi = iIiI11.msg;
  await l1lil();
}
async function IiiiIi(iii) {
  let liIiIi = {
      "url": "https://m.jf.10010.com/jf-external-application/jftask/toFinish",
      "headers": {
        "clientType": "yunpan_unicon_applet",
        "Accept-Encoding": "gzip, deflate, br",
        "Connection": "keep-alive",
        "ticket": ticket,
        "Content-Type": "application/json",
        "Sec-Fetch-Site": "same-origin",
        "Origin": "https://m.jf.10010.com",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 unicom{version:iphone_c@12.0200}",
        "Sec-Fetch-Mode": "cors",
        "partnersId": "1649",
        "Host": "m.jf.10010.com",
        "Cookie": "_jea_id=" + jeaId + ";",
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        "Accept": "application/json, text/plain, */*"
      },
      "body": "{\n  \"taskCode\": \"" + iii + "\"\n}"
    },
    iil = await li111i(liIiIi, "开启任务");
  xinxi = iil.msg;
  await lli1l();
}
async function l1lii(lII1l1) {
  let iIlIII = {
      "url": "https://m.jf.10010.com/jf-external-application/jftask/toFinish",
      "headers": {
        "clientType": "yunpan_unicon_applet",
        "Accept-Encoding": "gzip, deflate, br",
        "Connection": "keep-alive",
        "ticket": ticket,
        "Content-Type": "application/json",
        "Sec-Fetch-Site": "same-origin",
        "Origin": "https://m.jf.10010.com",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 unicom{version:iphone_c@12.0200}",
        "Sec-Fetch-Mode": "cors",
        "partnersId": "1649",
        "Host": "m.jf.10010.com",
        "Cookie": "_jea_id=" + jeaId + ";",
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        "Accept": "application/json, text/plain, */*"
      },
      "body": "{\n  \"taskCode\": \"" + lII1l1 + "\"\n}"
    },
    iIIll = await li111i(iIlIII, "开启任务");
  xinxi = iIIll.msg;
}
async function llillI(iIIli) {
  let liIiI1 = {
      "url": "https://m.jf.10010.com/jf-external-application/jftask/sign",
      "headers": {
        "clientType": "yunpan_unicon_applet",
        "Accept-Encoding": "gzip, deflate, br",
        "Connection": "keep-alive",
        "ticket": ticket,
        "Content-Type": "application/json",
        "Sec-Fetch-Site": "same-origin",
        "Origin": "https://m.jf.10010.com",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 unicom{version:iphone_c@12.0200}",
        "Sec-Fetch-Mode": "cors",
        "partnersId": "1649",
        "Host": "m.jf.10010.com",
        "Cookie": "_jea_id=" + jeaId + ";",
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        "Accept": "application/json, text/plain, */*"
      },
      "body": "{\n  \"taskCode\": \"" + iIIli + "\"\n}"
    },
    lIil = await li111i(liIiI1, "完成签到");
  xinxi = lIil.msg;
}
async function l1ii1I() {
  let Il1Iil = {
      "url": "https://m.jf.10010.com/jf-external-application/jftask/taskDetail",
      "headers": {
        "Sec-Fetch-Dest": "empty",
        "clientType": "yunpan_unicon_applet",
        "Accept-Encoding": "gzip, deflate, br",
        "Connection": "keep-alive",
        "ticket": ticket,
        "Content-Type": "application/json",
        "Sec-Fetch-Site": "same-origin",
        "Origin": "https://m.jf.10010.com",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 unicom{version:iphone_c@12.0200}",
        "Sec-Fetch-Mode": "cors",
        "partnersId": "1649",
        "Host": "m.jf.10010.com",
        "Cookie": "_jea_id=" + jeaId,
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        "Accept": "application/json, text/plain, */*"
      },
      "body": "{}"
    },
    ilI = await li111i(Il1Iil, "查询任务");
  const iIIlI = ilI.data.taskDetail.taskList;
  for (const Ii1ii of iIIlI) {
    {
      const {
        taskCode: iiiI1,
        taskName: lII1i,
        finishCount: lII1l,
        needCount: i11lll
      } = Ii1ii;
      console.log(lII1i + "：" + lII1l + "/" + i11lll);
      if (lII1l !== i11lll) {
        const il11iI = i11lll - lII1l;
        console.log("任务未完成，需要再执行 " + il11iI + " 次");
        for (let i11lli = 0; i11lli < il11iI; i11lli++) {
          try {
            await il1li1.wait(1000);
            if (lII1i == "联通云盘-签到") {
              await llillI(iiiI1);
            } else {
              if (lII1i == "联通云盘-分享文件") {
                await IiiiIi(iiiI1);
                await il1li1.wait(5000);
              } else {
                if (lII1i == "联通云盘-手动上传文件") await l1ii11(iiiI1), await il1li1.wait(5000);else {
                  if (lII1i == "联通云盘-浏览活动中心") await i1IIII(iiiI1), await il1li1.wait(5000);else {
                    await l1lii(iiiI1);
                    await il1li1.wait(5000);
                  }
                }
              }
            }
            console.log("第 " + (i11lli + 1) + " 次执行" + xinxi);
          } catch (l1i1li) {
            console.error("执行 " + iiiI1 + " 时出错");
            break;
          }
        }
      } else {
        console.log("任务已完成");
      }
      console.log("---------------------");
    }
  }
}
async function IiIIi1() {
  let ilill1 = {
      "url": "https://m.jf.10010.com/jf-external-application/jftask/userInfo",
      "headers": {
        "clientType": "yunpan_unicon_applet",
        "Accept-Encoding": "gzip, deflate, br",
        "Connection": "keep-alive",
        "ticket": ticket,
        "Content-Type": "application/json",
        "Sec-Fetch-Site": "same-origin",
        "Origin": "https://m.jf.10010.com",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 unicom{version:iphone_c@12.0200}",
        "Sec-Fetch-Mode": "cors",
        "partnersId": "1649",
        "Host": "m.jf.10010.com",
        "Cookie": "_jea_id=" + jeaId + ";",
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        "Accept": "application/json, text/plain, */*"
      },
      "body": "{}"
    },
    iIIiI1 = await li111i(ilill1, "查询积分");
  if (oldjf == null) oldjf = iIIiI1.data.availableScore;else {
    const iIIiII = iIIiI1.data.availableScore;
    console.log("用户" + iIIiI1.data.phone + "运行前积分：" + oldjf + ",运行后积分" + iIIiII + "，本次运行获得" + (iIIiII - oldjf));
    I11IiI += "\n用户" + iIIiI1.data.phone + "运行前积分：" + oldjf + ",运行后积分" + iIIiII + "，本次运行获得" + (iIIiII - oldjf);
  }
}
async function I11Iil() {
  let I1IiI1 = {
      "url": "https://m.client.10010.com/mobileService/onLine.htm",
      "headers": {
        "Accept-Encoding": "gzip, deflate, br",
        "Connection": "keep-alive",
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "*/*",
        "Host": "m.client.10010.com",
        "User-Agent": "ChinaUnicom.x CFNetwork iOS/16.3.1 unicom{version:iphone_c@11.0700}",
        "Accept-Language": "zh-CN,zh-Hans;q=0.9"
      },
      "body": "deviceModel=iPhone&step=background&token_online=" + l111il + "&version=iphone_c%4011.0700"
    },
    IlIl1i = await li111i(I1IiI1, "获取");
  try {
    t3_token = IlIl1i.t3_token;
    private_token = IlIl1i.private_token;
    ecs_token = IlIl1i.ecs_token;
    num1 = IlIl1i.list[0].num;
    cityCode = IlIl1i.list[0].cityCode;
  } catch (I1li1) {
    num1 = "1";
  }
}
async function l1liI1() {
  let ill1lI = {
      "url": "https://gitee.com/kele2233/genxin/raw/master/ydid.json",
      "headers": {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.43(0x18002b2d) NetType/WIFI Language/zh_CN"
      }
    },
    Ili1l = await I1iii(ill1lI, "ll");
  hqsjc = Ili1l.ymsjc;
  gong = Ili1l.gong;
  dqsjc = Math.round(new Date().getTime() / 1000).toString();
  if (hqsjc > dqsjc) console.log("公告：" + Ili1l.gh), console.log("当前版本1.2，最新版本" + Ili1l.fwbbh), console.log("当前脚本有效期至" + ll1il1(hqsjc));else {
    console.error(gong);
    process.exit();
  }
}
async function I11Iii(lII11I, ii111I) {
  return new Promise(IlIIIl => {
    let llilI1 = [];
    if (lII11I) {
      if (lII11I.indexOf("@") !== -1) lII11I.split("@").forEach(lIIIiI => {
        llilI1.push(lIIIiI);
      });else lII11I.indexOf("\n") !== -1 ? lII11I.split("\n").forEach(ii111i => {
        llilI1.push(ii111i);
      }) : llilI1.push(lII11I);
      IlIIIl(llilI1);
    } else console.log("\n 【" + il1li1.name + "】：未填写变量 " + ii111I);
  });
}
async function I1iiI(lIIIi1) {
  if (!lIIIi1) return;
  if (i1III1 > 0) {
    {
      if (il1li1.isNode()) {
        let ll1iII = require("./sendNotify");
        await ll1iII.sendNotify(il1li1.name, lIIIi1);
      } else il1li1.msg(lIIIi1);
    }
  } else console.log(lIIIi1);
}
function l111l1(I1ll1) {
  I1ll1 = I1ll1 || 32;
  let i1iII = "QWERTYUIOPASDFGHJKLZXCVBNM1234567890",
    IiIliI = i1iII.length,
    IlIl11 = "";
  for (i = 0; i < I1ll1; i++) IlIl11 += i1iII.charAt(Math.floor(Math.random() * IiIliI));
  return IlIl11;
}
let l1ll1 = "";
function llill1(ii11i) {
  l1ll1 = ii11i;
}
function Iill1(lIIlIl) {
  l1ll1 === lIIlIl ? console.log("Reached mark " + lIIlIl) : console.log("Invalid mark: " + lIIlIl);
}
function ll1il1(iIIiIi) {
  var IiIli1 = new Date(iIIiIi * 1000);
  var i1iII1 = IiIli1.getFullYear();
  var lI1li = String(IiIli1.getMonth() + 1).padStart(2, "0");
  var ii1lII = String(IiIli1.getDate()).padStart(2, "0");
  var lll1I1 = String(IiIli1.getHours()).padStart(2, "0");
  var IlIl1I = String(IiIli1.getMinutes()).padStart(2, "0");
  var I1llI = String(IiIli1.getSeconds()).padStart(2, "0");
  var lli111 = i1iII1 + "-" + lI1li + "-" + ii1lII + " " + lll1I1 + ":" + IlIl1I + ":" + I1llI;
  return lli111;
}
function illi1I(I1lll, I1lli) {
  return Math.round(Math.random() * (I1lli - I1lll) + I1lll);
}
function i1IIIi() {
  const il1I1 = new Date(),
    lIIIll = il1I1.getHours(),
    i11I = new Date(il1I1.getFullYear(), il1I1.getMonth(), il1I1.getDate(), lIIIll + 1, 0, 0, 0);
  return i11I.getTime();
}
function i1IIIl() {
  const i1iIII = new Date(),
    i1l111 = i1iIII.getMinutes(),
    l1Ii1I = new Date(i1iIII.getFullYear(), i1iIII.getMonth(), i1iIII.getDate(), i1iIII.getHours(), i1l111 === 0 ? 1 : i1l111 + 1, 0, 0);
  l1Ii1I.getMinutes() === 0 && l1Ii1I.getHours() !== i1iIII.getHours() && l1Ii1I.setDate(i1iIII.getDate() + (l1Ii1I.getHours() === 0 ? 1 : 0));
  return l1Ii1I.getTime();
}
function illi11() {
  return Math.round(new Date().getTime()).toString();
}
function li111l() {
  const i1iIIl = new Date(),
    I11III = String(i1iIIl.getFullYear()).padStart(4, "0"),
    l1I1 = String(i1iIIl.getMonth() + 1).padStart(2, "0"),
    IiIlli = String(i1iIIl.getDate()).padStart(2, "0"),
    IiIlll = String(i1iIIl.getHours()).padStart(2, "0"),
    l1Ii1l = String(i1iIIl.getMinutes()).padStart(2, "0"),
    IIi1li = String(i1iIIl.getSeconds()).slice(0, 2);
  return I11III + l1I1 + IiIlli + IiIlll + l1Ii1l + IIi1li;
}
function l111lI() {
  return Math.round(new Date().getTime() / 1000).toString();
}
function il1lil() {
  let lIIIii = new Date();
  h = lIIIii.getHours();
  return h;
}
function I1iil() {
  let i11i = new Date();
  m = i11i.getMinutes();
  return m;
}
function iiliii(i11l = 3000) {
  return new Promise(Ilii1l => {
    {
      let lllli1 = {
        "url": "https://keai.icu/apiwyy/api"
      };
      il1li1.get(lllli1, async (Il11ii, iI1l1I, i1llII) => {
        try {
          i1llII = JSON.parse(i1llII);
          console.log("\n 【网抑云时间】: " + i1llII.content + "  by--" + i1llII.music);
        } catch (I11l11) {
          il1li1.logErr(I11l11, iI1l1I);
        } finally {
          Ilii1l();
        }
      }, i11l);
    }
  });
}
async function I1iii(i1llIl, i1llIi, iI1l1i = 3000) {
  return new Promise(IIII1 => {
    let I11IIl = i1llIl;
    if (!i1llIi) {
      let lliIiI = arguments.callee.toString(),
        iI1l11 = /function\s*(\w*)/i,
        IlliIl = iI1l11.exec(lliIiI);
      i1llIi = IlliIl[1];
    }
    if (l1ii1i) {
      console.log("\n 【debug】=============== 这是 " + i1llIi + " 请求 url ===============");
      console.log(I11IIl);
    }
    il1li1.get(I11IIl, async (l1i1il, lil1l1, I1i1ll) => {
      try {
        if (l1ii1i) {
          console.log("\n\n 【debug】===============这是 " + i1llIi + " 返回data==============");
          console.log(I1i1ll);
          console.log("======");
          console.log(JSON.parse(I1i1ll));
        }
        let lIlil = JSON.parse(I1i1ll);
        IIII1(lIlil);
      } catch (lIlill) {
        console.log(l1i1il, lil1l1);
      } finally {
        IIII1();
      }
    }, iI1l1i);
  });
}
async function li111i(i1iI11, I1i1li, Il1lil = 200) {
  return new Promise(ll1i1I => {
    {
      let iIi1il = i1iI11;
      if (!I1i1li) {
        let iIi1ii = arguments.callee.toString(),
          i11i1l = /function\s*(\w*)/i,
          iIlI = i11i1l.exec(iIi1ii);
        I1i1li = iIlI[1];
      }
      l1ii1i && (console.log("\n 【debug】=============== 这是 " + I1i1li + " 请求 url ==============="), console.log(iIi1il));
      il1li1.post(iIi1il, async (llil11, i11i1i, Iilill) => {
        try {
          {
            l1ii1i && (console.log("\n\n 【debug】===============这是 " + I1i1li + " 返回data=============="), console.log(Iilill), console.log("======"), console.log(JSON.parse(Iilill)));
            let ili1l1 = JSON.parse(Iilill);
            ll1i1I(ili1l1);
          }
        } catch (lII1I1) {} finally {
          ll1i1I();
        }
      }, Il1lil);
    }
  });
}
function ll1ilI(...iiIil1) {
  l1ii1i && console.log(...iiIil1);
}
function I1ilI(l1iliI) {
  function l11iiI(III1l, ilIiIi) {
    return III1l << ilIiIi | III1l >>> 32 - ilIiIi;
  }
  function I1Ii11(IIIili, iIllll) {
    var IlI, III1i, ilIiIl, IlIIi1, i1lI1l;
    ilIiIl = 2147483648 & IIIili;
    IlIIi1 = 2147483648 & iIllll;
    IlI = 1073741824 & IIIili;
    III1i = 1073741824 & iIllll;
    i1lI1l = (1073741823 & IIIili) + (1073741823 & iIllll);
    return IlI & III1i ? 2147483648 ^ i1lI1l ^ ilIiIl ^ IlIIi1 : IlI | III1i ? 1073741824 & i1lI1l ? 3221225472 ^ i1lI1l ^ ilIiIl ^ IlIIi1 : 1073741824 ^ i1lI1l ^ ilIiIl ^ IlIIi1 : i1lI1l ^ ilIiIl ^ IlIIi1;
  }
  function II1(I1llli, illII, iil1I) {
    return I1llli & illII | ~I1llli & iil1I;
  }
  function l11ii1(I1llll, IlI11l, IlI11i) {
    return I1llll & IlI11i | IlI11l & ~IlI11i;
  }
  function IliII(I1i1I1, lliiI, l11l1I) {
    return I1i1I1 ^ lliiI ^ l11l1I;
  }
  function i1I1ii(llI1l1, iIi1I1, iil11) {
    return iIi1I1 ^ (llI1l1 | ~iil11);
  }
  function I11ii(l11l11, Iill1l, lilllI, i1i1I, IlI11I, l11l1i, l11l1l) {
    l11l11 = I1Ii11(l11l11, I1Ii11(I1Ii11(II1(Iill1l, lilllI, i1i1I), IlI11I), l11l1l));
    return I1Ii11(l11iiI(l11l11, l11l1i), Iill1l);
  }
  function i1I1il(il11l, IiI1ll, llii1, lillll, Ii1l, Ii1i, llI1lI) {
    il11l = I1Ii11(il11l, I1Ii11(I1Ii11(l11ii1(IiI1ll, llii1, lillll), Ii1l), llI1lI));
    return I1Ii11(l11iiI(il11l, Ii1i), IiI1ll);
  }
  function illll(i1i11, IiI1li, il11i, lillli, IlIlII, llil1, iiIIi) {
    i1i11 = I1Ii11(i1i11, I1Ii11(I1Ii11(IliII(IiI1li, il11i, lillli), IlIlII), iiIIi));
    return I1Ii11(l11iiI(i1i11, llil1), IiI1li);
  }
  function IiI1II(iiIIl, llI1iI, i1iI, lillii, IIIiiI, IiI1lI, il11I) {
    iiIIl = I1Ii11(iiIIl, I1Ii11(I1Ii11(i1I1ii(llI1iI, i1iI, lillii), IIIiiI), il11I));
    return I1Ii11(l11iiI(iiIIl, IiI1lI), llI1iI);
  }
  function Iii1I(ii1IIiiI) {
    for (var lIlIlll1, Ilii1III = ii1IIiiI.length, iIililIl = Ilii1III + 8, IiIl11iI = (iIililIl - iIililIl % 64) / 64, lIIilI1 = 16 * (IiIl11iI + 1), iIllIli = new Array(lIIilI1 - 1), IIIl1i11 = 0, lilII11 = 0; Ilii1III > lilII11;) lIlIlll1 = (lilII11 - lilII11 % 4) / 4, IIIl1i11 = lilII11 % 4 * 8, iIllIli[lIlIlll1] = iIllIli[lIlIlll1] | ii1IIiiI.charCodeAt(lilII11) << IIIl1i11, lilII11++;
    lIlIlll1 = (lilII11 - lilII11 % 4) / 4;
    IIIl1i11 = lilII11 % 4 * 8;
    iIllIli[lIlIlll1] = iIllIli[lIlIlll1] | 128 << IIIl1i11;
    iIllIli[lIIilI1 - 2] = Ilii1III << 3;
    iIllIli[lIIilI1 - 1] = Ilii1III >>> 29;
    return iIllIli;
  }
  function I11il(iIllIll) {
    var IIII11l1,
      i1lill1I,
      lIlIllii = "",
      ii1IIiil = "";
    for (i1lill1I = 0; 3 >= i1lill1I; i1lill1I++) IIII11l1 = iIllIll >>> 8 * i1lill1I & 255, ii1IIiil = "0" + IIII11l1.toString(16), lIlIllii += ii1IIiil.substr(ii1IIiil.length - 2, 2);
    return lIlIllii;
  }
  function IIIiIi(IiIl11i1) {
    IiIl11i1 = IiIl11i1.replace(/\r\n/g, "\n");
    for (var ii1IIiii = "", IIII11lI = 0; IIII11lI < IiIl11i1.length; IIII11lI++) {
      {
        var i1lill11 = IiIl11i1.charCodeAt(IIII11lI);
        128 > i1lill11 ? ii1IIiii += String.fromCharCode(i1lill11) : i1lill11 > 127 && 2048 > i1lill11 ? (ii1IIiii += String.fromCharCode(i1lill11 >> 6 | 192), ii1IIiii += String.fromCharCode(63 & i1lill11 | 128)) : (ii1IIiii += String.fromCharCode(i1lill11 >> 12 | 224), ii1IIiii += String.fromCharCode(i1lill11 >> 6 & 63 | 128), ii1IIiii += String.fromCharCode(63 & i1lill11 | 128));
      }
    }
    return ii1IIiii;
  }
  var IIIiIl,
    illli,
    IilI1I,
    l1l1l1,
    il1I1I,
    III,
    l11iii,
    liili,
    IiI1I1,
    iIIi1I = [],
    liill = 7,
    llll = 12,
    IilI1l = 17,
    i1I1l1 = 22,
    iIIi11 = 5,
    I11l1 = 9,
    IliI1 = 14,
    IIIiII = 20,
    Iii11 = 4,
    illlI = 11,
    IilI1i = 16,
    l1ili1 = 23,
    l1ill1 = 6,
    li1I1I = 10,
    IIi = 15,
    ii1Ii1 = 21;
  for (l1iliI = IIIiIi(l1iliI), iIIi1I = Iii1I(l1iliI), III = 1732584193, l11iii = 4023233417, liili = 2562383102, IiI1I1 = 271733878, IIIiIl = 0; IIIiIl < iIIi1I.length; IIIiIl += 16) illli = III, IilI1I = l11iii, l1l1l1 = liili, il1I1I = IiI1I1, III = I11ii(III, l11iii, liili, IiI1I1, iIIi1I[IIIiIl + 0], liill, 3614090360), IiI1I1 = I11ii(IiI1I1, III, l11iii, liili, iIIi1I[IIIiIl + 1], llll, 3905402710), liili = I11ii(liili, IiI1I1, III, l11iii, iIIi1I[IIIiIl + 2], IilI1l, 606105819), l11iii = I11ii(l11iii, liili, IiI1I1, III, iIIi1I[IIIiIl + 3], i1I1l1, 3250441966), III = I11ii(III, l11iii, liili, IiI1I1, iIIi1I[IIIiIl + 4], liill, 4118548399), IiI1I1 = I11ii(IiI1I1, III, l11iii, liili, iIIi1I[IIIiIl + 5], llll, 1200080426), liili = I11ii(liili, IiI1I1, III, l11iii, iIIi1I[IIIiIl + 6], IilI1l, 2821735955), l11iii = I11ii(l11iii, liili, IiI1I1, III, iIIi1I[IIIiIl + 7], i1I1l1, 4249261313), III = I11ii(III, l11iii, liili, IiI1I1, iIIi1I[IIIiIl + 8], liill, 1770035416), IiI1I1 = I11ii(IiI1I1, III, l11iii, liili, iIIi1I[IIIiIl + 9], llll, 2336552879), liili = I11ii(liili, IiI1I1, III, l11iii, iIIi1I[IIIiIl + 10], IilI1l, 4294925233), l11iii = I11ii(l11iii, liili, IiI1I1, III, iIIi1I[IIIiIl + 11], i1I1l1, 2304563134), III = I11ii(III, l11iii, liili, IiI1I1, iIIi1I[IIIiIl + 12], liill, 1804603682), IiI1I1 = I11ii(IiI1I1, III, l11iii, liili, iIIi1I[IIIiIl + 13], llll, 4254626195), liili = I11ii(liili, IiI1I1, III, l11iii, iIIi1I[IIIiIl + 14], IilI1l, 2792965006), l11iii = I11ii(l11iii, liili, IiI1I1, III, iIIi1I[IIIiIl + 15], i1I1l1, 1236535329), III = i1I1il(III, l11iii, liili, IiI1I1, iIIi1I[IIIiIl + 1], iIIi11, 4129170786), IiI1I1 = i1I1il(IiI1I1, III, l11iii, liili, iIIi1I[IIIiIl + 6], I11l1, 3225465664), liili = i1I1il(liili, IiI1I1, III, l11iii, iIIi1I[IIIiIl + 11], IliI1, 643717713), l11iii = i1I1il(l11iii, liili, IiI1I1, III, iIIi1I[IIIiIl + 0], IIIiII, 3921069994), III = i1I1il(III, l11iii, liili, IiI1I1, iIIi1I[IIIiIl + 5], iIIi11, 3593408605), IiI1I1 = i1I1il(IiI1I1, III, l11iii, liili, iIIi1I[IIIiIl + 10], I11l1, 38016083), liili = i1I1il(liili, IiI1I1, III, l11iii, iIIi1I[IIIiIl + 15], IliI1, 3634488961), l11iii = i1I1il(l11iii, liili, IiI1I1, III, iIIi1I[IIIiIl + 4], IIIiII, 3889429448), III = i1I1il(III, l11iii, liili, IiI1I1, iIIi1I[IIIiIl + 9], iIIi11, 568446438), IiI1I1 = i1I1il(IiI1I1, III, l11iii, liili, iIIi1I[IIIiIl + 14], I11l1, 3275163606), liili = i1I1il(liili, IiI1I1, III, l11iii, iIIi1I[IIIiIl + 3], IliI1, 4107603335), l11iii = i1I1il(l11iii, liili, IiI1I1, III, iIIi1I[IIIiIl + 8], IIIiII, 1163531501), III = i1I1il(III, l11iii, liili, IiI1I1, iIIi1I[IIIiIl + 13], iIIi11, 2850285829), IiI1I1 = i1I1il(IiI1I1, III, l11iii, liili, iIIi1I[IIIiIl + 2], I11l1, 4243563512), liili = i1I1il(liili, IiI1I1, III, l11iii, iIIi1I[IIIiIl + 7], IliI1, 1735328473), l11iii = i1I1il(l11iii, liili, IiI1I1, III, iIIi1I[IIIiIl + 12], IIIiII, 2368359562), III = illll(III, l11iii, liili, IiI1I1, iIIi1I[IIIiIl + 5], Iii11, 4294588738), IiI1I1 = illll(IiI1I1, III, l11iii, liili, iIIi1I[IIIiIl + 8], illlI, 2272392833), liili = illll(liili, IiI1I1, III, l11iii, iIIi1I[IIIiIl + 11], IilI1i, 1839030562), l11iii = illll(l11iii, liili, IiI1I1, III, iIIi1I[IIIiIl + 14], l1ili1, 4259657740), III = illll(III, l11iii, liili, IiI1I1, iIIi1I[IIIiIl + 1], Iii11, 2763975236), IiI1I1 = illll(IiI1I1, III, l11iii, liili, iIIi1I[IIIiIl + 4], illlI, 1272893353), liili = illll(liili, IiI1I1, III, l11iii, iIIi1I[IIIiIl + 7], IilI1i, 4139469664), l11iii = illll(l11iii, liili, IiI1I1, III, iIIi1I[IIIiIl + 10], l1ili1, 3200236656), III = illll(III, l11iii, liili, IiI1I1, iIIi1I[IIIiIl + 13], Iii11, 681279174), IiI1I1 = illll(IiI1I1, III, l11iii, liili, iIIi1I[IIIiIl + 0], illlI, 3936430074), liili = illll(liili, IiI1I1, III, l11iii, iIIi1I[IIIiIl + 3], IilI1i, 3572445317), l11iii = illll(l11iii, liili, IiI1I1, III, iIIi1I[IIIiIl + 6], l1ili1, 76029189), III = illll(III, l11iii, liili, IiI1I1, iIIi1I[IIIiIl + 9], Iii11, 3654602809), IiI1I1 = illll(IiI1I1, III, l11iii, liili, iIIi1I[IIIiIl + 12], illlI, 3873151461), liili = illll(liili, IiI1I1, III, l11iii, iIIi1I[IIIiIl + 15], IilI1i, 530742520), l11iii = illll(l11iii, liili, IiI1I1, III, iIIi1I[IIIiIl + 2], l1ili1, 3299628645), III = IiI1II(III, l11iii, liili, IiI1I1, iIIi1I[IIIiIl + 0], l1ill1, 4096336452), IiI1I1 = IiI1II(IiI1I1, III, l11iii, liili, iIIi1I[IIIiIl + 7], li1I1I, 1126891415), liili = IiI1II(liili, IiI1I1, III, l11iii, iIIi1I[IIIiIl + 14], IIi, 2878612391), l11iii = IiI1II(l11iii, liili, IiI1I1, III, iIIi1I[IIIiIl + 5], ii1Ii1, 4237533241), III = IiI1II(III, l11iii, liili, IiI1I1, iIIi1I[IIIiIl + 12], l1ill1, 1700485571), IiI1I1 = IiI1II(IiI1I1, III, l11iii, liili, iIIi1I[IIIiIl + 3], li1I1I, 2399980690), liili = IiI1II(liili, IiI1I1, III, l11iii, iIIi1I[IIIiIl + 10], IIi, 4293915773), l11iii = IiI1II(l11iii, liili, IiI1I1, III, iIIi1I[IIIiIl + 1], ii1Ii1, 2240044497), III = IiI1II(III, l11iii, liili, IiI1I1, iIIi1I[IIIiIl + 8], l1ill1, 1873313359), IiI1I1 = IiI1II(IiI1I1, III, l11iii, liili, iIIi1I[IIIiIl + 15], li1I1I, 4264355552), liili = IiI1II(liili, IiI1I1, III, l11iii, iIIi1I[IIIiIl + 6], IIi, 2734768916), l11iii = IiI1II(l11iii, liili, IiI1I1, III, iIIi1I[IIIiIl + 13], ii1Ii1, 1309151649), III = IiI1II(III, l11iii, liili, IiI1I1, iIIi1I[IIIiIl + 4], l1ill1, 4149444226), IiI1I1 = IiI1II(IiI1I1, III, l11iii, liili, iIIi1I[IIIiIl + 11], li1I1I, 3174756917), liili = IiI1II(liili, IiI1I1, III, l11iii, iIIi1I[IIIiIl + 2], IIi, 718787259), l11iii = IiI1II(l11iii, liili, IiI1I1, III, iIIi1I[IIIiIl + 9], ii1Ii1, 3951481745), III = I1Ii11(III, illli), l11iii = I1Ii11(l11iii, IilI1I), liili = I1Ii11(liili, l1l1l1), IiI1I1 = I1Ii11(IiI1I1, il1I1I);
  var i1I1lI = I11il(III) + I11il(l11iii) + I11il(liili) + I11il(IiI1I1);
  return i1I1lI.toLowerCase();
}
function iilii1(ii1IIil1, l1lIIII) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class IIII11li {
    constructor(liIi1IIl) {
      this.env = liIi1IIl;
    }
    ["send"](liIi1IIi, iIllIiI = "GET") {
      {
        liIi1IIi = "string" == typeof liIi1IIi ? {
          "url": liIi1IIi
        } : liIi1IIi;
        let IliIIIl1 = this.get;
        "POST" === iIllIiI && (IliIIIl1 = this.post);
        return new Promise((iIIii1II, l1I11lll) => {
          IliIIIl1.call(this, liIi1IIi, (l1I11lli, lIlIlli1, IlI11I11) => {
            l1I11lli ? l1I11lll(l1I11lli) : iIIii1II(lIlIlli1);
          });
        });
      }
    }
    ["get"](iill11iI) {
      return this.send.call(this.env, iill11iI);
    }
    ["post"](iIIii1Ii) {
      return this.send.call(this.env, iIIii1Ii, "POST");
    }
  }
  return new class {
    constructor(l1I11llI, IliIIIii) {
      this.name = l1I11llI;
      this.http = new IIII11li(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, IliIIIii);
      this.log("", "🔔" + this.name + ", 开始!");
    }
    ["isNode"]() {
      return "undefined" != typeof module && !!module.exports;
    }
    ["isQuanX"]() {
      return "undefined" != typeof $task;
    }
    ["isSurge"]() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    ["isLoon"]() {
      return "undefined" != typeof $loon;
    }
    ["toObj"](il1li1ii, il1iIili = null) {
      try {
        return JSON.parse(il1li1ii);
      } catch {
        return il1iIili;
      }
    }
    ["toStr"](iill11ii, il1iIill = null) {
      try {
        return JSON.stringify(iill11ii);
      } catch {
        return il1iIill;
      }
    }
    ["getjson"](I1iiiIl1, iill11lI) {
      {
        let lI1iiiil = iill11lI;
        const l11Il1II = this.getdata(I1iiiIl1);
        if (l11Il1II) try {
          lI1iiiil = JSON.parse(this.getdata(I1iiiIl1));
        } catch {}
        return lI1iiiil;
      }
    }
    ["setjson"](lI1iiiii, iIii1il) {
      try {
        return this.setdata(JSON.stringify(lI1iiiii), iIii1il);
      } catch {
        return false;
      }
    }
    ["getScript"](iill11l1) {
      return new Promise(llIiiiI1 => {
        this.get({
          "url": iill11l1
        }, (i1111I1l, iiliiiii, IillliIl) => llIiiiI1(IillliIl));
      });
    }
    ["runScript"](iill11ll, iIi1Ii1I) {
      return new Promise(I11il1l1 => {
        {
          let lliI1I1i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
          lliI1I1i = lliI1I1i ? lliI1I1i.replace(/\n/g, "").trim() : lliI1I1i;
          let lliI1I1l = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
          lliI1I1l = lliI1I1l ? 1 * lliI1I1l : 20;
          lliI1I1l = iIi1Ii1I && iIi1Ii1I.timeout ? iIi1Ii1I.timeout : lliI1I1l;
          const [I1iiiIi1, I11i1iiI] = lliI1I1i.split("@"),
            Ili1i1l1 = {
              "url": "http://" + I11i1iiI + "/v1/scripting/evaluate",
              "body": {
                "script_text": iill11ll,
                "mock_type": "cron",
                "timeout": lliI1I1l
              },
              "headers": {
                "Accept": "*/*"
              }
            };
          this.post(Ili1i1l1, (IlI1ill1, iIi1Ii1i, iIi1Ii1l) => I11il1l1(iIi1Ii1l));
        }
      }).catch(IIl11iIi => this.logErr(IIl11iIi));
    }
    ["loaddata"]() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const iiliiilI = this.path.resolve(this.dataFile),
          IlliiIiI = this.path.resolve(process.cwd(), this.dataFile),
          IlI1ili1 = this.fs.existsSync(iiliiilI),
          IlI1iliI = !IlI1ili1 && this.fs.existsSync(IlliiIiI);
        if (!IlI1ili1 && !IlI1iliI) return {};
        {
          {
            const iIlliI1i = IlI1ili1 ? iiliiilI : IlliiIiI;
            try {
              return JSON.parse(this.fs.readFileSync(iIlliI1i));
            } catch (iIlliI1l) {
              return {};
            }
          }
        }
      }
    }
    ["writedata"]() {
      {
        if (this.isNode()) {
          this.fs = this.fs ? this.fs : require("fs");
          this.path = this.path ? this.path : require("path");
          const IIl11iI1 = this.path.resolve(this.dataFile),
            ii1il11l = this.path.resolve(process.cwd(), this.dataFile),
            IlliiIil = this.fs.existsSync(IIl11iI1),
            IlliiIii = !IlliiIil && this.fs.existsSync(ii1il11l),
            l1iIiIIl = JSON.stringify(this.data);
          IlliiIil ? this.fs.writeFileSync(IIl11iI1, l1iIiIIl) : IlliiIii ? this.fs.writeFileSync(ii1il11l, l1iIiIIl) : this.fs.writeFileSync(IIl11iI1, l1iIiIIl);
        }
      }
    }
    ["lodash_get"](l1li1Ill, iIllIllI, IilIl1iI) {
      const i111illl = iIllIllI.replace(/\[(\d+)\]/g, ".$1").split(".");
      let il111lIl = l1li1Ill;
      for (const i111illi of i111illl) if (il111lIl = Object(il111lIl)[i111illi], undefined === il111lIl) return IilIl1iI;
      return il111lIl;
    }
    ["lodash_set"](l1i111ll, I11IIill, l1i111li) {
      return Object(l1i111ll) !== l1i111ll ? l1i111ll : (Array.isArray(I11IIill) || (I11IIill = I11IIill.toString().match(/[^.[\]]+/g) || []), I11IIill.slice(0, -1).reduce((l1li1Ili, i111illI, i1II11I1) => Object(l1li1Ili[i111illI]) === l1li1Ili[i111illI] ? l1li1Ili[i111illI] : l1li1Ili[i111illI] = Math.abs(I11IIill[i1II11I1 + 1]) >> 0 == +I11IIill[i1II11I1 + 1] ? [] : {}, l1i111ll)[I11IIill[I11IIill.length - 1]] = l1i111li, l1i111ll);
    }
    ["getdata"](iIllIll1) {
      {
        let l1li1IlI = this.getval(iIllIll1);
        if (/^@/.test(iIllIll1)) {
          {
            const [, I1I1I1i, I1I1I1l] = /^@(.*?)\.(.*?)$/.exec(iIllIll1),
              il111lIi = I1I1I1i ? this.getval(I1I1I1i) : "";
            if (il111lIi) try {
              const IilIl1l1 = JSON.parse(il111lIi);
              l1li1IlI = IilIl1l1 ? this.lodash_get(IilIl1l1, I1I1I1l, "") : l1li1IlI;
            } catch (iIllIlii) {
              l1li1IlI = "";
            }
          }
        }
        return l1li1IlI;
      }
    }
    ["setdata"](iIllIlil, I1I1I1I) {
      let IilI1ii1 = false;
      if (/^@/.test(I1I1I1I)) {
        const [, i1II11II, IilIl1lI] = /^@(.*?)\.(.*?)$/.exec(I1I1I1I),
          il111lII = this.getval(i1II11II),
          i111ill1 = i1II11II ? "null" === il111lII ? null : il111lII || "{}" : "{}";
        try {
          const i111ilil = JSON.parse(i111ill1);
          this.lodash_set(i111ilil, IilIl1lI, iIllIlil);
          IilI1ii1 = this.setval(JSON.stringify(i111ilil), i1II11II);
        } catch (iIllIliI) {
          const IilIl1il = {};
          this.lodash_set(IilIl1il, IilIl1lI, iIllIlil);
          IilI1ii1 = this.setval(JSON.stringify(IilIl1il), i1II11II);
        }
      } else IilI1ii1 = this.setval(iIllIlil, I1I1I1I);
      return IilI1ii1;
    }
    ["getval"](IilIl1ii) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(IilIl1ii) : this.isQuanX() ? $prefs.valueForKey(IilIl1ii) : this.isNode() ? (this.data = this.loaddata(), this.data[IilIl1ii]) : this.data && this.data[IilIl1ii] || null;
    }
    ["setval"](i1II11Ii, I1I1I11) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(i1II11Ii, I1I1I11) : this.isQuanX() ? $prefs.setValueForKey(i1II11Ii, I1I1I11) : this.isNode() ? (this.data = this.loaddata(), this.data[I1I1I11] = i1II11Ii, this.writedata(), true) : this.data && this.data[I1I1I11] || null;
    }
    ["initGotEnv"](IilI1iiI) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      IilI1iiI && (IilI1iiI.headers = IilI1iiI.headers ? IilI1iiI.headers : {}, undefined === IilI1iiI.headers.Cookie && undefined === IilI1iiI.cookieJar && (IilI1iiI.cookieJar = this.ckjar));
    }
    ["get"](lliIilii, lliIilil = () => {}) {
      lliIilii.headers && (delete lliIilii.headers["Content-Type"], delete lliIilii.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (lliIilii.headers = lliIilii.headers || {}, Object.assign(lliIilii.headers, {
        "X-Surge-Skip-Scripting": false
      })), $httpClient.get(lliIilii, (ii1IIili, l11I1iIi, iIii1ll) => {
        !ii1IIili && l11I1iIi && (l11I1iIi.body = iIii1ll, l11I1iIi.statusCode = l11I1iIi.status);
        lliIilil(ii1IIili, l11I1iIi, iIii1ll);
      })) : this.isQuanX() ? (this.isNeedRewrite && (lliIilii.opts = lliIilii.opts || {}, Object.assign(lliIilii.opts, {
        "hints": false
      })), $task.fetch(lliIilii).then(lliIill1 => {
        {
          const {
            statusCode: iilil1l,
            statusCode: llliI11l,
            headers: iIii1li,
            body: IilI1il1
          } = lliIill1;
          lliIilil(null, {
            "status": iilil1l,
            "statusCode": llliI11l,
            "headers": iIii1li,
            "body": IilI1il1
          }, IilI1il1);
        }
      }, iIIllIII => lliIilil(iIIllIII))) : this.isNode() && (this.initGotEnv(lliIilii), this.got(lliIilii).on("redirect", (iilil1i, IilIl1li) => {
        try {
          if (iilil1i.headers["set-cookie"]) {
            const i111ili1 = iilil1i.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            i111ili1 && this.ckjar.setCookieSync(i111ili1, null);
            IilIl1li.cookieJar = this.ckjar;
          }
        } catch (lliIillI) {
          this.logErr(lliIillI);
        }
      }).then(II111II1 => {
        const {
          statusCode: lIIilIi,
          statusCode: I11i1ilI,
          headers: Il1Iil1l,
          body: iIii1lI
        } = II111II1;
        lliIilil(null, {
          "status": lIIilIi,
          "statusCode": I11i1ilI,
          "headers": Il1Iil1l,
          "body": iIii1lI
        }, iIii1lI);
      }, l11I1iI1 => {
        {
          const {
            message: lIIilIl,
            response: Il1Iil1i
          } = l11I1iI1;
          lliIilil(lIIilIl, Il1Iil1i, Il1Iil1i && Il1Iil1i.body);
        }
      }));
    }
    ["post"](lliIilll, l11Il1Il = () => {}) {
      if (lliIilll.body && lliIilll.headers && !lliIilll.headers["Content-Type"] && (lliIilll.headers["Content-Type"] = "application/json;charset=utf-8"), lliIilll.headers && delete lliIilll.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (lliIilll.headers = lliIilll.headers || {}, Object.assign(lliIilll.headers, {
        "X-Surge-Skip-Scripting": false
      })), $httpClient.post(lliIilll, (IIII11Ii, ii1IIiI1, liI1i1ii) => {
        !IIII11Ii && ii1IIiI1 && (ii1IIiI1.body = liI1i1ii, ii1IIiI1.statusCode = ii1IIiI1.status);
        l11Il1Il(IIII11Ii, ii1IIiI1, liI1i1ii);
      });else {
        if (this.isQuanX()) lliIilll.method = "POST", this.isNeedRewrite && (lliIilll.opts = lliIilll.opts || {}, Object.assign(lliIilll.opts, {
          "hints": false
        })), $task.fetch(lliIilll).then(liI1i1il => {
          const {
            statusCode: lIlIllII,
            statusCode: l1lIIll,
            headers: l1lIIli,
            body: ii1IIiII
          } = liI1i1il;
          l11Il1Il(null, {
            "status": lIlIllII,
            "statusCode": l1lIIll,
            "headers": l1lIIli,
            "body": ii1IIiII
          }, ii1IIiII);
        }, Ilii1IiI => l11Il1Il(Ilii1IiI));else {
          if (this.isNode()) {
            this.initGotEnv(lliIilll);
            const {
              url: I1IilII,
              ...lIIili1
            } = lliIilll;
            this.got.post(I1IilII, lIIili1).then(liIi1I1l => {
              {
                const {
                  statusCode: iil1I1i,
                  statusCode: lll111i1,
                  headers: iil1I1l,
                  body: iIililil
                } = liIi1I1l;
                l11Il1Il(null, {
                  "status": iil1I1i,
                  "statusCode": lll111i1,
                  "headers": iil1I1l,
                  "body": iIililil
                }, iIililil);
              }
            }, iliIll1I => {
              {
                const {
                  message: IIlli11I,
                  response: liIi1I11
                } = iliIll1I;
                l11Il1Il(IIlli11I, liIi1I11, liIi1I11 && liIi1I11.body);
              }
            });
          }
        }
      }
    }
    ["time"](I11IIiiI, I1IIli1I = null) {
      const iililll = I1IIli1I ? new Date(I1IIli1I) : new Date();
      let llIiii1l = {
        "M+": iililll.getMonth() + 1,
        "d+": iililll.getDate(),
        "H+": iililll.getHours(),
        "m+": iililll.getMinutes(),
        "s+": iililll.getSeconds(),
        "q+": Math.floor((iililll.getMonth() + 3) / 3),
        "S": iililll.getMilliseconds()
      };
      /(y+)/.test(I11IIiiI) && (I11IIiiI = I11IIiiI.replace(RegExp.$1, (iililll.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let iililli in llIiii1l) new RegExp("(" + iililli + ")").test(I11IIiiI) && (I11IIiiI = I11IIiiI.replace(RegExp.$1, 1 == RegExp.$1.length ? llIiii1l[iililli] : ("00" + llIiii1l[iililli]).substr(("" + llIiii1l[iililli]).length)));
      return I11IIiiI;
    }
    ["msg"](llIiii1i = ii1IIil1, l1Ili1II = "", lliI1Il1 = "", I1IIli11) {
      const iiiIIi11 = IIliIi1i => {
        {
          if (!IIliIi1i) return IIliIi1i;
          if ("string" == typeof IIliIi1i) return this.isLoon() ? IIliIi1i : this.isQuanX() ? {
            "open-url": IIliIi1i
          } : this.isSurge() ? {
            "url": IIliIi1i
          } : undefined;
          if ("object" == typeof IIliIi1i) {
            if (this.isLoon()) {
              let l1IiIiII = IIliIi1i.openUrl || IIliIi1i.url || IIliIi1i["open-url"],
                IIlli11l = IIliIi1i.mediaUrl || IIliIi1i["media-url"];
              return {
                "openUrl": l1IiIiII,
                "mediaUrl": IIlli11l
              };
            }
            if (this.isQuanX()) {
              let IIliIi1l = IIliIi1i["open-url"] || IIliIi1i.url || IIliIi1i.openUrl,
                IIlli11i = IIliIi1i["media-url"] || IIliIi1i.mediaUrl;
              return {
                "open-url": IIliIi1l,
                "media-url": IIlli11i
              };
            }
            if (this.isSurge()) {
              {
                let lliI1Iii = IIliIi1i.url || IIliIi1i.openUrl || IIliIi1i["open-url"];
                return {
                  "url": lliI1Iii
                };
              }
            }
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(llIiii1i, l1Ili1II, lliI1Il1, iiiIIi11(I1IIli11)) : this.isQuanX() && $notify(llIiii1i, l1Ili1II, lliI1Il1, iiiIIi11(I1IIli11))), !this.isMuteLog) {
        let Ilii1Ill = ["", "==============📣系统通知📣=============="];
        Ilii1Ill.push(llIiii1i);
        l1Ili1II && Ilii1Ill.push(l1Ili1II);
        lliI1Il1 && Ilii1Ill.push(lliI1Il1);
        console.log(Ilii1Ill.join("\n"));
        this.logs = this.logs.concat(Ilii1Ill);
      }
    }
    ["log"](...Ilii1Ili) {
      Ilii1Ili.length > 0 && (this.logs = [...this.logs, ...Ilii1Ili]);
      console.log(Ilii1Ili.join(this.logSeparator));
    }
    ["logErr"](lll111il, I1I1Illl) {
      const I1I1Illi = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      I1I1Illi ? this.log("", "❗️" + this.name + ", 错误!", lll111il.stack) : this.log("", "❗️" + this.name + ", 错误!", lll111il);
    }
    ["wait"](Ilii1Il1) {
      return new Promise(liIIIIi1 => setTimeout(liIIIIi1, Ilii1Il1));
    }
    ["done"](iIil1I11 = {}) {
      const l1IiIiIl = new Date().getTime(),
        lliI1Ii1 = (l1IiIiIl - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + lliI1Ii1 + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(iIil1I11);
    }
  }(ii1IIil1, l1lIIII);
}