//Mon Aug 11 2025 12:43:59 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const IIilIi = new iiiiI1("联通云盘任务"),
  l1Iiii = IIilIi.isNode() ? require("./sendNotify") : "",
  l1Iiil = 1,
  I1li1I = 0,
  {
    v4: IIiII
  } = require("uuid"),
  iiiI = require("crypto"),
  I1li11 = require("crypto-js"),
  II1iIl = IIiII();
let II1iIi = process.env.chinaUnicomCookie,
  iI1iI = "",
  Ii11I1 = "";
ckArr = II1iIi.split("&");
l1Iil1("【debug】 这是你的账号数组:\n " + ckArr);
!(async () => {
  ckArr = II1iIi.split("&");
  await ill1i();
  for (let iiI1i = 0; iiI1i < ckArr.length; iiI1i++) {
    let iiI1l = iiI1i + 1;
    console.log("------------- 开始【第 " + iiI1l + " 个账号】-------------");
    Ii11I1 = ckArr[iiI1i].split("&");
    l1Iil1("【debug】 这是你第 " + iiI1l + " 账号信息:\n " + Ii11I1);
    await iii1();
    await IIilIi.wait(2000);
    if (num1 == 1) {
      {
        console.log("当前online过期，跳过...");
        continue;
      }
    }
    customDateString = iil1();
    const Ili1lI = require("axios");
    let lIlIl1 = {
      "method": "GET",
      "url": "https://m.client.10010.com/mobileService/openPlatform/openPlatLineNew.htm?appName=shouting&clientid=1001000003&to_url=https://panservice.mail.wo.cn/h5/activitymobile/turn-template?activityId%3D6",
      "headers": {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 unicom{version:iphone_c@11.0800}",
        "Cookie": "PvSessionId=" + customDateString + "" + II1iIl + ";c_mobile=" + num1 + "; c_version=iphone_c@11.0800; city=036|" + cityCode + "|90063345|-99;devicedId=" + II1iIl + "; ecs_token=" + ecs_token + ";t3_token=" + t3_token + ""
      },
      "maxRedirects": 0
    };
    await Ili1lI.request(lIlIl1).catch(I11li1 => {
      wenb = I11li1.request.res.rawHeaders[13];
      ticket1 = wenb.match(/ticket=([^&]+)/);
      ticket = ticket1[1];
    });
    await IIilIi.wait(2000);
    req = Math.floor(89999 * Math.random()) + 100000;
    sjc13 = Math.round(new Date().getTime()).toString();
    const ilIIi = "HandheldHallAutoLogin" + sjc13 + "" + req + "100002",
      IiII1l = iiiI.createHash("md5");
    IiII1l.update(ilIIi);
    md5Hash = IiII1l.digest("hex");
    await il11Il();
    await li1IiI();
    console.log("获取ck中，等待一会...");
    await IIilIi.wait(5000);
    oldjf = null;
    await i1ii11();
    await li1Ii1();
    await IIilIi.wait(15000);
    await i1ii11();
  }
  await iiIIi1(iI1iI);
})().catch(lIIIi => IIilIi.logErr(lIIIi)).finally(() => IIilIi.done());
async function li1IiI() {
  let lIIIl = {
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
    ilIII = await IIilII(lIIIl, "ticket");
  ticket = ilIII.result.ticket;
  const IiII1I = require("axios");
  let IIl1I1 = JSON.stringify({
      "activityId": "s743585947358590976",
      "partnersId": "1649"
    }),
    I1li1i = {
      "method": "POST",
      "url": "https://m.jf.10010.com/jf-external-application/page/query",
      "headers": {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) LianTongYunPan/4.0.2 (iPhone; iOS 16.6)",
        "Accept": "application/json, text/plain, */*",
        "Content-Type": "application/json",
        "content-type": "application/json;charset=UTF-8",
        "partnersid": "1649",
        "ticket": ticket,
        "sec-fetch-site": "same-origin",
        "accept-language": "zh-CN,zh-Hans;q=0.9",
        "sec-fetch-mode": "cors",
        "origin": "https://m.jf.10010.com",
        "clienttype": "yunpan_iOS",
        "sec-fetch-dest": "empty"
      },
      "data": IIl1I1
    };
  IiII1I.request(I1li1i).then(iIlIl1 => {
    {
      const iIlIlI = iIlIl1.headers["set-cookie"],
        lIl11 = iIlIlI.find(ilIili => ilIili.startsWith("_jea_id="));
      jeaId = lIl11?.["split"](";")[0]?.["split"]("=")[1] || "未找到 Cookie";
    }
  }).catch(ilIill => console.log("error", ilIill));
}
function Illl(Il1l1l, iIlIil, IIlll1) {
  const Il1l1i = I1li11.enc.Utf8.parse(iIlIil),
    I1II11 = I1li11.enc.Utf8.parse(IIlll1),
    iI1 = I1li11.AES.encrypt(Il1l1l, Il1l1i, {
      "iv": I1II11,
      "mode": I1li11.mode.CBC,
      "padding": I1li11.pad.Pkcs7
    });
  return iI1.toString();
}
async function Illi() {
  req = Math.floor(89999 * Math.random()) + 100000;
  sjc13 = Math.round(new Date().getTime()).toString();
  const lIl1I = "ShareFile" + sjc13 + "" + req + "wohome",
    I111Ii = iiiI.createHash("md5");
  I111Ii.update(lIl1I);
  md5Hash = I111Ii.digest("hex");
  const IIlllI = "{fileIds: \"cb26981fc8ae43cf9600e0c0d1f4c33d\",fileFolderIds: \"\",days: 7,autoFill: \"1\",clientId: \"1001000003\"}",
    l11Iil = iI1i1(token),
    Iili1I = "wNSOYIB1k1DjY5lA";
  param = Illl(IIlllI, l11Iil, Iili1I);
  let lli1i1 = {
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
    IIlli1 = await IIilII(lli1i1, "分享");
}
async function l1IiiI() {
  req = Math.floor(89999 * Math.random()) + 100000;
  sjc13 = Math.round(new Date().getTime()).toString();
  const lIl1I1 = "AppQueryUser" + sjc13 + "" + req + "api-user",
    I111I1 = iiiI.createHash("md5");
  I111I1.update(lIl1I1);
  md5Hash = I111I1.digest("hex");
  const iIl = "{\"accessToken\":\"" + token + "\"}",
    lIIi = "Py1J67PAQoCb8Iel",
    l11Ili = "wNSOYIB1k1DjY5lA";
  param = Illl(iIl, lIIi, l11Ili);
  let iiill = {
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
    iiI11I = await IIilII(iiill, "浏览");
  await IIiI1();
}
async function II1iI1() {
  req = Math.floor(89999 * Math.random()) + 100000;
  sjc13 = Math.round(new Date().getTime()).toString();
  const lii11 = new Date(),
    liIili = "" + lii11.getFullYear() + String(lii11.getMonth() + 1).padStart(2, "0") + String(lii11.getDate()).padStart(2, "0") + String(lii11.getHours()).padStart(2, "0") + String(lii11.getMinutes()).padStart(2, "0") + String(lii11.getSeconds()).padStart(2, "0"),
    Ii1lil = "{\"spaceType\":\"0\",\"directoryId\":\"0\",\"batchNo\":\"" + liIili + "\",\"fileName\":\"kele.jpg\",\"fileSize\":6376590,\"fileType\":\"1\"}",
    ll11 = iI1i1(token),
    lliI1 = "wNSOYIB1k1DjY5lA";
  param = Illl(Ii1lil, ll11, lliI1);
  const iiI11l = require("request"),
    iiI11i = require("fs"),
    Il1II1 = require("path"),
    iiilI = {
      "timestamp": Date.now(),
      "randomString": Math.random().toString(36).substring(2, 8),
      "accessToken": token,
      "fileName": "kele.jpg",
      "filePath": Il1II1.join(__dirname, "313d8600-873e-42a0-bd8d-7357bde2ac43"),
      "fileSize": iiI11i.statSync(Il1II1.join(__dirname, "313d8600-873e-42a0-bd8d-7357bde2ac43")).size,
      "channel": "wocloud",
      "directoryId": "0",
      "fileInfo": param,
      "contentType": "null"
    },
    Il1IIi = {
      "uniqueId": iiilI.timestamp + "_" + iiilI.randomString,
      "accessToken": iiilI.accessToken,
      "fileName": iiilI.fileName,
      "psToken": "undefined",
      "fileSize": iiilI.fileSize.toString(),
      "totalPart": "1",
      "partSize": iiilI.fileSize.toString(),
      "partIndex": "1",
      "channel": iiilI.channel,
      "directoryId": iiilI.directoryId,
      "fileInfo": iiilI.fileInfo,
      "file": {
        "value": iiI11i.createReadStream(iiilI.filePath),
        "options": {
          "filename": Il1II1.basename(iiilI.filePath),
          "contentType": iiilI.contentType
        }
      }
    },
    IIiIl1 = {
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
      "formData": Il1IIi
    };
  iiI11l(IIiIl1, function (IIiIi1, I1i1, iiiii) {
    if (IIiIi1) throw new Error(IIiIi1);
  });
}
function iI1i1(iiiil) {
  if (typeof iiiil !== "string") {
    throw new TypeError("输入必须是一个字符串");
  }
  return iiiil.substring(0, 16);
}
async function il11Il() {
  let I1II1i = {
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
    lli1il = await IIilII(I1II1i, "token");
  token = lli1il.RSP.DATA.token;
}
async function IIiI1() {
  let il11I1 = {
      "url": "https://panservice.mail.wo.cn/activity/v1/activityList",
      "headers": {
        "Sys-Version": "ios/16_6",
        "Connection": "keep-alive",
        "Accept-Encoding": "gzip, deflate, br",
        "Sec-Fetch-Dest": "empty",
        "Content-Type": "application/json",
        "credentials": "include",
        "Sec-Fetch-Site": "same-origin",
        "Origin": "https://panservice.mail.wo.cn",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) LianTongYunPan/4.0.4 (iPhone; iOS 16.6)",
        "Client-Id": "1001000035",
        "Sec-Fetch-Mode": "cors",
        "App-Version": "yp-app/4.0.4",
        "ticket": ticket,
        "Host": "panservice.mail.wo.cn",
        "Access-Token": token,
        "Referer": "https://panservice.mail.wo.cn/h5/mobile/wocloud/activityCenter/home",
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        "Accept": "application/json, text/plain, */*"
      },
      "body": "{\n  \"bizKey\": \"activityCenterPipeline\",\n  \"bizObject\": {\n    \"pageNo\": 1\n  }\n}"
    },
    lll1i1 = await IIilII(il11I1, "浏览任务");
}
async function II1iII(I1Iiil, I1Iiii) {
  let IiI111 = {
      "url": "https://m.jf.10010.com/jf-external-application/jftask/toFinish",
      "headers": {
        "Sec-Fetch-Dest": "empty",
        "clienttype": "yunpan_iOS",
        "Accept-Encoding": "gzip, deflate, br",
        "Connection": "keep-alive",
        "ticket": ticket,
        "Content-Type": "application/json",
        "Sec-Fetch-Site": "same-origin",
        "Origin": "https://m.jf.10010.com",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) LianTongYunPan/4.0.4 (iPhone; iOS 16.6)",
        "Sec-Fetch-Mode": "cors",
        "partnersId": "1649",
        "Host": "m.jf.10010.com",
        "Referer": "https://m.jf.10010.com/ts-mobile/well/s733402242471979008?partnersId=1649&clienttype=yunpan_iOS&ticket=8535f132-8936-4fdc-93d9-9f389c1da23b",
        "Cookie": "_jea_id=" + jeaId + ";",
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        "Accept": "application/json, text/plain, */*"
      },
      "body": "{\n  \"taskCode\": \"" + I1Iiil + "\"\n}"
    },
    i11llI = await IIilII(IiI111, "开启任务 " + I1Iiii);
  xinxi = i11llI.msg;
  switch (I1Iiii) {
    case "联通云盘积分任务-分享文件":
      await Illi();
      break;
    case "联通云盘积分任务-手动上传文件":
      await II1iI1();
      break;
    case "联通云盘积分任务-浏览活动中心":
      await l1IiiI();
      break;
    case "联通云盘积分任务-当月上传容量满1GB":
      console.log("完成上传任务中，稍等片刻。。。");
      for (let I1IiiI = 0; I1IiiI < 86; I1IiiI++) {
        await II1iI1();
        await IIilIi.wait(2000);
      }
      break;
    default:
      break;
  }
}
async function il11Ii(iI1i11) {
  let iIl11i = {
      "url": "https://m.jf.10010.com/jf-external-application/jftask/sign",
      "headers": {
        "clienttype": "yunpan_iOS",
        "Accept-Encoding": "gzip, deflate, br",
        "Connection": "keep-alive",
        "ticket": ticket,
        "Content-Type": "application/json",
        "Sec-Fetch-Site": "same-origin",
        "Origin": "https://m.jf.10010.com",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) LianTongYunPan/4.0.2 (iPhone; iOS 16.6)",
        "Sec-Fetch-Mode": "cors",
        "partnersId": "1649",
        "Host": "m.jf.10010.com",
        "Cookie": "_jea_id=" + jeaId + ";",
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        "Accept": "application/json, text/plain, */*"
      },
      "body": "{\n  \"taskCode\": \"" + iI1i11 + "\"\n}"
    },
    i11ll1 = await IIilII(iIl11i, "完成签到");
  xinxi = i11ll1.msg;
}
async function li1Ii1() {
  let iIl111 = {
      "url": "https://m.jf.10010.com/jf-external-application/jftask/taskDetail",
      "headers": {
        "Sec-Fetch-Dest": "empty",
        "clienttype": "yunpan_iOS",
        "Accept-Encoding": "gzip, deflate, br",
        "Connection": "keep-alive",
        "ticket": ticket,
        "Content-Type": "application/json",
        "Sec-Fetch-Site": "same-origin",
        "Origin": "https://m.jf.10010.com",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) LianTongYunPan/4.0.2 (iPhone; iOS 16.6)",
        "Sec-Fetch-Mode": "cors",
        "partnersId": "1649",
        "Host": "m.jf.10010.com",
        "Cookie": "_jea_id=" + jeaId,
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        "Accept": "application/json, text/plain, */*"
      },
      "body": "{}"
    },
    i11lil = await IIilII(iIl111, "查询任务");
  const iilI1I = i11lil.data.taskDetail.taskList;
  for (const IlIiii of iilI1I) {
    const {
      taskCode: ilIII1,
      taskName: lll1lI,
      finishCount: lliliI,
      needCount: ll1iiI
    } = IlIiii;
    console.log(lll1lI + "：" + lliliI + "/" + ll1iiI);
    if (lliliI !== ll1iiI) {
      const lIIlll = ll1iiI - lliliI;
      console.log("任务未完成，需要再执行 " + lIIlll + " 次");
      for (let ll1ii1 = 0; ll1ii1 < lIIlll; ll1ii1++) {
        try {
          await IIilIi.wait(5000);
          lll1lI === "积分任务-签到" ? await il11Ii(ilIII1) : await II1iII(ilIII1, lll1lI);
          console.log("第 " + (ll1ii1 + 1) + " 次执行" + lll1lI + "任务完成");
        } catch (i11li1) {
          console.error("执行 " + ilIII1 + " 时出错: " + i11li1.message);
          break;
        }
      }
    } else console.log("任务已完成");
    console.log("---------------------");
  }
}
async function i1ii11() {
  let iI11i = {
      "url": "https://m.jf.10010.com/jf-external-application/jftask/userInfo",
      "headers": {
        "clienttype": "yunpan_iOS",
        "Accept-Encoding": "gzip, deflate, br",
        "Connection": "keep-alive",
        "ticket": ticket,
        "Content-Type": "application/json",
        "Sec-Fetch-Site": "same-origin",
        "Origin": "https://m.jf.10010.com",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) LianTongYunPan/4.0.2 (iPhone; iOS 16.6)",
        "Sec-Fetch-Mode": "cors",
        "partnersId": "1649",
        "Host": "m.jf.10010.com",
        "Cookie": "_jea_id=" + jeaId,
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        "Accept": "application/json, text/plain, */*"
      },
      "body": "{}"
    },
    I1Iili = await IIilII(iI11i, "查询积分");
  if (oldjf == null) {
    oldjf = I1Iili.data.availableScore;
  } else {
    const IlIilI = I1Iili.data.availableScore;
    console.log("用户" + I1Iili.data.phone + "运行前积分：" + oldjf + ",运行后积分" + IlIilI + "，本次运行获得" + (IlIilI - oldjf));
    iI1iI += "\n用户" + I1Iili.data.phone + "运行前积分：" + oldjf + ",运行后积分" + IlIilI + "，本次运行获得" + (IlIilI - oldjf);
  }
}
async function iii1() {
  let lll1il = {
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
      "body": "deviceModel=iPhone&step=background&token_online=" + Ii11I1 + "&version=iphone_c%4011.0700"
    },
    lll1ii = await IIilII(lll1il, "获取");
  try {
    {
      t3_token = lll1ii.t3_token;
      private_token = lll1ii.private_token;
      ecs_token = lll1ii.ecs_token;
      num1 = lll1ii.list[0].num;
      cityCode = lll1ii.list[0].cityCode;
    }
  } catch (l1I111) {
    num1 = "1";
  }
}
async function ill1i() {
  let Il1iI = {
      "url": "https://gitee.com/kele2233/genxin/raw/master/ydid.json",
      "headers": {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.43(0x18002b2d) NetType/WIFI Language/zh_CN"
      }
    },
    iI1i1i = await ilII1l(Il1iI, "ll");
  hqsjc = iI1i1i.ymsjc;
  gong = iI1i1i.gong;
  dqsjc = Math.round(new Date().getTime() / 1000).toString();
  hqsjc > dqsjc ? (console.log("公告：" + iI1i1i.gh), console.log("当前版本1.2，最新版本" + iI1i1i.fwbbh), console.log("当前脚本有效期至" + ll1I1l(hqsjc))) : (console.error(gong), process.exit());
}
async function ill1l(llilll, ll1ill) {
  return new Promise(I1ii1 => {
    {
      let I11IiI = [];
      if (llilll) {
        if (llilll.indexOf("@") !== -1) {
          llilll.split("@").forEach(l111il => {
            I11IiI.push(l111il);
          });
        } else llilll.indexOf("\n") !== -1 ? llilll.split("\n").forEach(llillI => {
          I11IiI.push(llillI);
        }) : I11IiI.push(llilll);
        I1ii1(I11IiI);
      } else console.log("\n 【" + IIilIi.name + "】：未填写变量 " + ll1ill);
    }
  });
}
async function iiIIi1(l1ii1I) {
  if (!l1ii1I) return;
  if (l1Iiil > 0) {
    if (IIilIi.isNode()) {
      let I11Iii = require("./sendNotify");
      await I11Iii.sendNotify(IIilIi.name, l1ii1I);
    } else {
      IIilIi.msg(l1ii1I);
    }
  } else {
    console.log(l1ii1I);
  }
}
function i1liI1(illi11) {
  illi11 = illi11 || 32;
  let l111lI = "QWERTYUIOPASDFGHJKLZXCVBNM1234567890",
    il1lil = l111lI.length,
    I1iil = "";
  for (i = 0; i < illi11; i++) I1iil += l111lI.charAt(Math.floor(Math.random() * il1lil));
  return I1iil;
}
let l1IilI = "";
function ll1I1i(llilil) {
  l1IilI = llilil;
}
function iiiiII(il1lii) {
  l1IilI === il1lii ? console.log("Reached mark " + il1lii) : console.log("Invalid mark: " + il1lii);
}
function ll1I1l(l1ii1l) {
  var iiliiI = new Date(l1ii1l * 1000);
  var I1il1 = iiliiI.getFullYear();
  var Iilii = String(iiliiI.getMonth() + 1).padStart(2, "0");
  var IiIlIl = String(iiliiI.getDate()).padStart(2, "0");
  var l111li = String(iiliiI.getHours()).padStart(2, "0");
  var Iilil = String(iiliiI.getMinutes()).padStart(2, "0");
  var Il1ll = String(iiliiI.getSeconds()).padStart(2, "0");
  var l1liIl = I1il1 + "-" + Iilii + "-" + IiIlIl + " " + l111li + ":" + Iilil + ":" + Il1ll;
  return l1liIl;
}
function iilI(il1lll, i1Il11) {
  return Math.round(Math.random() * (i1Il11 - il1lll) + il1lll);
}
function IIilI1() {
  const Il11II = new Date(),
    Iilll = Il11II.getHours(),
    I11Ill = new Date(Il11II.getFullYear(), Il11II.getMonth(), Il11II.getDate(), Iilll + 1, 0, 0, 0);
  return I11Ill.getTime();
}
function li1Il1() {
  const iililI = new Date(),
    IlII1i = iililI.getMinutes(),
    Iilli = new Date(iililI.getFullYear(), iililI.getMonth(), iililI.getDate(), iililI.getHours(), IlII1i === 0 ? 1 : IlII1i + 1, 0, 0);
  Iilli.getMinutes() === 0 && Iilli.getHours() !== iililI.getHours() && Iilli.setDate(iililI.getDate() + (Iilli.getHours() === 0 ? 1 : 0));
  return Iilli.getTime();
}
function i1ii1I() {
  return Math.round(new Date().getTime()).toString();
}
function iil1() {
  const il1ll1 = new Date(),
    Il11Ii = String(il1ll1.getFullYear()).padStart(4, "0"),
    Il11Il = String(il1ll1.getMonth() + 1).padStart(2, "0"),
    I1ill = String(il1ll1.getDate()).padStart(2, "0"),
    i111Il = String(il1ll1.getHours()).padStart(2, "0"),
    i111Ii = String(il1ll1.getMinutes()).padStart(2, "0"),
    IlII1I = String(il1ll1.getSeconds()).slice(0, 2);
  return Il11Ii + Il11Il + I1ill + i111Il + i111Ii + IlII1I;
}
function iiIIiI() {
  return Math.round(new Date().getTime() / 1000).toString();
}
function i1liII() {
  let IiIIl1 = new Date();
  h = IiIIl1.getHours();
  return h;
}
function ilII1i() {
  let IiiiI1 = new Date();
  m = IiiiI1.getMinutes();
  return m;
}
function ill1I(i111I1 = 3000) {
  return new Promise(lIiill => {
    {
      let I11111 = {
        "url": "https://keai.icu/apiwyy/api"
      };
      IIilIi.get(I11111, async (l111, il11lI, lIll1I) => {
        try {
          lIll1I = JSON.parse(lIll1I);
          console.log("\n 【网抑云时间】: " + lIll1I.content + "  by--" + lIll1I.music);
        } catch (li1II1) {
          IIilIi.logErr(li1II1, il11lI);
        } finally {
          lIiill();
        }
      }, i111I1);
    }
  });
}
async function ilII1l(iiIllI, iII1l1, I1I1I = 3000) {
  return new Promise(IiliIl => {
    let ilii1l = iiIllI;
    if (!iII1l1) {
      {
        let II1ili = arguments.callee.toString(),
          ilill = /function\s*(\w*)/i,
          li1IIi = ilill.exec(II1ili);
        iII1l1 = li1IIi[1];
      }
    }
    I1li1I && (console.log("\n 【debug】=============== 这是 " + iII1l1 + " 请求 url ==============="), console.log(ilii1l));
    IIilIi.get(ilii1l, async (Il1IiI, i1II1i, IIilil) => {
      try {
        I1li1I && (console.log("\n\n 【debug】===============这是 " + iII1l1 + " 返回data=============="), console.log(IIilil), console.log("======"), console.log(JSON.parse(IIilil)));
        let IIl1il = JSON.parse(IIilil);
        IiliIl(IIl1il);
      } catch (l1Il1i) {
        console.log(Il1IiI, i1II1i);
      } finally {
        IiliIl();
      }
    }, I1I1I);
  });
}
async function IIilII(li1l11, lIiI1I, lII1iI = 200) {
  return new Promise(Il111i => {
    let Il111l = li1l11;
    if (!lIiI1I) {
      let Ii11li = arguments.callee.toString(),
        il11 = /function\s*(\w*)/i,
        iliil = il11.exec(Ii11li);
      lIiI1I = iliil[1];
    }
    if (I1li1I) {
      console.log("\n 【debug】=============== 这是 " + lIiI1I + " 请求 url ===============");
      console.log(Il111l);
    }
    IIilIi.post(Il111l, async (lIiiI, iiiilI, lIlIIi) => {
      try {
        I1li1I && (console.log("\n\n 【debug】===============这是 " + lIiI1I + " 返回data=============="), console.log(lIlIIi), console.log("======"), console.log(JSON.parse(lIlIIi)));
        let lIiI1l = JSON.parse(lIlIIi);
        Il111i(lIiI1l);
      } catch (llI1) {} finally {
        Il111i();
      }
    }, lII1iI);
  });
}
function l1Iil1(...II1iiI) {
  I1li1I && console.log(...II1iiI);
}
function IIiIl(Il1lII) {
  function IIl1iI(lil1li, ili1i1) {
    return lil1li << ili1i1 | lil1li >>> 32 - ili1i1;
  }
  function Ii11ii(ll1i1I, Il1lll) {
    var lil1iI, IIl11, iIli, l11I1l, Iilil1;
    iIli = 2147483648 & ll1i1I;
    l11I1l = 2147483648 & Il1lll;
    lil1iI = 1073741824 & ll1i1I;
    IIl11 = 1073741824 & Il1lll;
    Iilil1 = (1073741823 & ll1i1I) + (1073741823 & Il1lll);
    return lil1iI & IIl11 ? 2147483648 ^ Iilil1 ^ iIli ^ l11I1l : lil1iI | IIl11 ? 1073741824 & Iilil1 ? 3221225472 ^ Iilil1 ^ iIli ^ l11I1l : 1073741824 ^ Iilil1 ^ iIli ^ l11I1l : Iilil1 ^ iIli ^ l11I1l;
  }
  function llllll(iIi1l1, llllII, llil1l) {
    return iIi1l1 & llllII | ~iIi1l1 & llil1l;
  }
  function llIl(i1iI1l, i1lIIi, llil1i) {
    return i1iI1l & llil1i | i1lIIi & ~llil1i;
  }
  function l111iI(liii1, lIllI, i1lIIl) {
    return liii1 ^ lIllI ^ i1lIIl;
  }
  function llIi(lli1, ilIi1I, II1l1I) {
    return ilIi1I ^ (lli1 | ~II1l1I);
  }
  function Ii11il(li1iii, lil1il, I1i1ii, ll1i1i, lil1ii, ll1i1l, I1i1il) {
    li1iii = Ii11ii(li1iii, Ii11ii(Ii11ii(llllll(lil1il, I1i1ii, ll1i1i), lil1ii), I1i1il));
    return Ii11ii(IIl1iI(li1iii, ll1i1l), lil1il);
  }
  function ilii1(iIi1ii, i11i1l, iIlI, llil11, i11i1i, Iilill, iIl1) {
    iIi1ii = Ii11ii(iIi1ii, Ii11ii(Ii11ii(llIl(i11i1l, iIlI, llil11), i11i1i), iIl1));
    return Ii11ii(IIl1iI(iIi1ii, Iilill), i11i1l);
  }
  function I11lI1(lIlll, ilIi1l, li1iiI, IIl1l, lIlii1, IIl1i, liiil) {
    lIlll = Ii11ii(lIlll, Ii11ii(Ii11ii(l111iI(ilIi1l, li1iiI, IIl1l), lIlii1), liiil));
    return Ii11ii(IIl1iI(lIlll, IIl1i), ilIi1l);
  }
  function li1l1I(lllIl1, Illi1I, liiii, i11i1I, llil, llii, iiIiil) {
    lllIl1 = Ii11ii(lllIl1, Ii11ii(Ii11ii(llIi(Illi1I, liiii, i11i1I), llil), iiIiil));
    return Ii11ii(IIl1iI(lllIl1, llii), Illi1I);
  }
  function Il1lI1(lllIlI) {
    for (var Illi11, i11i11 = lllIlI.length, iiIiii = i11i11 + 8, li1ilI = (iiIiii - iiIiii % 64) / 64, lIliiI = 16 * (li1ilI + 1), liilli = new Array(lIliiI - 1), i1ll11 = 0, ili1l1 = 0; i11i11 > ili1l1;) Illi11 = (ili1l1 - ili1l1 % 4) / 4, i1ll11 = ili1l1 % 4 * 8, liilli[Illi11] = liilli[Illi11] | lllIlI.charCodeAt(ili1l1) << i1ll11, ili1l1++;
    Illi11 = (ili1l1 - ili1l1 % 4) / 4;
    i1ll11 = ili1l1 % 4 * 8;
    liilli[Illi11] = liilli[Illi11] | 128 << i1ll11;
    liilli[lIliiI - 2] = i11i11 << 3;
    liilli[lIliiI - 1] = i11i11 >>> 29;
    return liilli;
  }
  function lIll11(lII1I1) {
    {
      var IIl1I,
        liilll,
        ili1lI = "",
        iiIilI = "";
      for (liilll = 0; 3 >= liilll; liilll++) IIl1I = lII1I1 >>> 8 * liilll & 255, iiIilI = "0" + IIl1I.toString(16), ili1lI += iiIilI.substr(iiIilI.length - 2, 2);
      return ili1lI;
    }
  }
  function iIlIIl(lllIil) {
    lllIil = lllIil.replace(/\r\n/g, "\n");
    for (var iIll = "", li1il1 = 0; li1il1 < lllIil.length; li1il1++) {
      var lliI = lllIil.charCodeAt(li1il1);
      128 > lliI ? iIll += String.fromCharCode(lliI) : lliI > 127 && 2048 > lliI ? (iIll += String.fromCharCode(lliI >> 6 | 192), iIll += String.fromCharCode(63 & lliI | 128)) : (iIll += String.fromCharCode(lliI >> 12 | 224), iIll += String.fromCharCode(lliI >> 6 & 63 | 128), iIll += String.fromCharCode(63 & lliI | 128));
    }
    return iIll;
  }
  var ilIl11,
    IIi11,
    lIii,
    ii1,
    lII1li,
    lII1ll,
    lIilI,
    lli1I1,
    II1I1i,
    II1I1l = [],
    ilIl1I = 7,
    iiI = 12,
    lIiI = 17,
    lII1lI = 22,
    lIi1 = 5,
    lIill = 9,
    iIiI1l = 14,
    iIiI1i = 20,
    lIili = 4,
    II1I1I = 11,
    iIlIIi = 16,
    ilIl1i = 23,
    ilIIIi = 6,
    iIiI11 = 10,
    IIi1l = 15,
    IIi1i = 21;
  for (Il1lII = iIlIIl(Il1lII), II1I1l = Il1lI1(Il1lII), lII1ll = 1732584193, lIilI = 4023233417, lli1I1 = 2562383102, II1I1i = 271733878, ilIl11 = 0; ilIl11 < II1I1l.length; ilIl11 += 16) IIi11 = lII1ll, lIii = lIilI, ii1 = lli1I1, lII1li = II1I1i, lII1ll = Ii11il(lII1ll, lIilI, lli1I1, II1I1i, II1I1l[ilIl11 + 0], ilIl1I, 3614090360), II1I1i = Ii11il(II1I1i, lII1ll, lIilI, lli1I1, II1I1l[ilIl11 + 1], iiI, 3905402710), lli1I1 = Ii11il(lli1I1, II1I1i, lII1ll, lIilI, II1I1l[ilIl11 + 2], lIiI, 606105819), lIilI = Ii11il(lIilI, lli1I1, II1I1i, lII1ll, II1I1l[ilIl11 + 3], lII1lI, 3250441966), lII1ll = Ii11il(lII1ll, lIilI, lli1I1, II1I1i, II1I1l[ilIl11 + 4], ilIl1I, 4118548399), II1I1i = Ii11il(II1I1i, lII1ll, lIilI, lli1I1, II1I1l[ilIl11 + 5], iiI, 1200080426), lli1I1 = Ii11il(lli1I1, II1I1i, lII1ll, lIilI, II1I1l[ilIl11 + 6], lIiI, 2821735955), lIilI = Ii11il(lIilI, lli1I1, II1I1i, lII1ll, II1I1l[ilIl11 + 7], lII1lI, 4249261313), lII1ll = Ii11il(lII1ll, lIilI, lli1I1, II1I1i, II1I1l[ilIl11 + 8], ilIl1I, 1770035416), II1I1i = Ii11il(II1I1i, lII1ll, lIilI, lli1I1, II1I1l[ilIl11 + 9], iiI, 2336552879), lli1I1 = Ii11il(lli1I1, II1I1i, lII1ll, lIilI, II1I1l[ilIl11 + 10], lIiI, 4294925233), lIilI = Ii11il(lIilI, lli1I1, II1I1i, lII1ll, II1I1l[ilIl11 + 11], lII1lI, 2304563134), lII1ll = Ii11il(lII1ll, lIilI, lli1I1, II1I1i, II1I1l[ilIl11 + 12], ilIl1I, 1804603682), II1I1i = Ii11il(II1I1i, lII1ll, lIilI, lli1I1, II1I1l[ilIl11 + 13], iiI, 4254626195), lli1I1 = Ii11il(lli1I1, II1I1i, lII1ll, lIilI, II1I1l[ilIl11 + 14], lIiI, 2792965006), lIilI = Ii11il(lIilI, lli1I1, II1I1i, lII1ll, II1I1l[ilIl11 + 15], lII1lI, 1236535329), lII1ll = ilii1(lII1ll, lIilI, lli1I1, II1I1i, II1I1l[ilIl11 + 1], lIi1, 4129170786), II1I1i = ilii1(II1I1i, lII1ll, lIilI, lli1I1, II1I1l[ilIl11 + 6], lIill, 3225465664), lli1I1 = ilii1(lli1I1, II1I1i, lII1ll, lIilI, II1I1l[ilIl11 + 11], iIiI1l, 643717713), lIilI = ilii1(lIilI, lli1I1, II1I1i, lII1ll, II1I1l[ilIl11 + 0], iIiI1i, 3921069994), lII1ll = ilii1(lII1ll, lIilI, lli1I1, II1I1i, II1I1l[ilIl11 + 5], lIi1, 3593408605), II1I1i = ilii1(II1I1i, lII1ll, lIilI, lli1I1, II1I1l[ilIl11 + 10], lIill, 38016083), lli1I1 = ilii1(lli1I1, II1I1i, lII1ll, lIilI, II1I1l[ilIl11 + 15], iIiI1l, 3634488961), lIilI = ilii1(lIilI, lli1I1, II1I1i, lII1ll, II1I1l[ilIl11 + 4], iIiI1i, 3889429448), lII1ll = ilii1(lII1ll, lIilI, lli1I1, II1I1i, II1I1l[ilIl11 + 9], lIi1, 568446438), II1I1i = ilii1(II1I1i, lII1ll, lIilI, lli1I1, II1I1l[ilIl11 + 14], lIill, 3275163606), lli1I1 = ilii1(lli1I1, II1I1i, lII1ll, lIilI, II1I1l[ilIl11 + 3], iIiI1l, 4107603335), lIilI = ilii1(lIilI, lli1I1, II1I1i, lII1ll, II1I1l[ilIl11 + 8], iIiI1i, 1163531501), lII1ll = ilii1(lII1ll, lIilI, lli1I1, II1I1i, II1I1l[ilIl11 + 13], lIi1, 2850285829), II1I1i = ilii1(II1I1i, lII1ll, lIilI, lli1I1, II1I1l[ilIl11 + 2], lIill, 4243563512), lli1I1 = ilii1(lli1I1, II1I1i, lII1ll, lIilI, II1I1l[ilIl11 + 7], iIiI1l, 1735328473), lIilI = ilii1(lIilI, lli1I1, II1I1i, lII1ll, II1I1l[ilIl11 + 12], iIiI1i, 2368359562), lII1ll = I11lI1(lII1ll, lIilI, lli1I1, II1I1i, II1I1l[ilIl11 + 5], lIili, 4294588738), II1I1i = I11lI1(II1I1i, lII1ll, lIilI, lli1I1, II1I1l[ilIl11 + 8], II1I1I, 2272392833), lli1I1 = I11lI1(lli1I1, II1I1i, lII1ll, lIilI, II1I1l[ilIl11 + 11], iIlIIi, 1839030562), lIilI = I11lI1(lIilI, lli1I1, II1I1i, lII1ll, II1I1l[ilIl11 + 14], ilIl1i, 4259657740), lII1ll = I11lI1(lII1ll, lIilI, lli1I1, II1I1i, II1I1l[ilIl11 + 1], lIili, 2763975236), II1I1i = I11lI1(II1I1i, lII1ll, lIilI, lli1I1, II1I1l[ilIl11 + 4], II1I1I, 1272893353), lli1I1 = I11lI1(lli1I1, II1I1i, lII1ll, lIilI, II1I1l[ilIl11 + 7], iIlIIi, 4139469664), lIilI = I11lI1(lIilI, lli1I1, II1I1i, lII1ll, II1I1l[ilIl11 + 10], ilIl1i, 3200236656), lII1ll = I11lI1(lII1ll, lIilI, lli1I1, II1I1i, II1I1l[ilIl11 + 13], lIili, 681279174), II1I1i = I11lI1(II1I1i, lII1ll, lIilI, lli1I1, II1I1l[ilIl11 + 0], II1I1I, 3936430074), lli1I1 = I11lI1(lli1I1, II1I1i, lII1ll, lIilI, II1I1l[ilIl11 + 3], iIlIIi, 3572445317), lIilI = I11lI1(lIilI, lli1I1, II1I1i, lII1ll, II1I1l[ilIl11 + 6], ilIl1i, 76029189), lII1ll = I11lI1(lII1ll, lIilI, lli1I1, II1I1i, II1I1l[ilIl11 + 9], lIili, 3654602809), II1I1i = I11lI1(II1I1i, lII1ll, lIilI, lli1I1, II1I1l[ilIl11 + 12], II1I1I, 3873151461), lli1I1 = I11lI1(lli1I1, II1I1i, lII1ll, lIilI, II1I1l[ilIl11 + 15], iIlIIi, 530742520), lIilI = I11lI1(lIilI, lli1I1, II1I1i, lII1ll, II1I1l[ilIl11 + 2], ilIl1i, 3299628645), lII1ll = li1l1I(lII1ll, lIilI, lli1I1, II1I1i, II1I1l[ilIl11 + 0], ilIIIi, 4096336452), II1I1i = li1l1I(II1I1i, lII1ll, lIilI, lli1I1, II1I1l[ilIl11 + 7], iIiI11, 1126891415), lli1I1 = li1l1I(lli1I1, II1I1i, lII1ll, lIilI, II1I1l[ilIl11 + 14], IIi1l, 2878612391), lIilI = li1l1I(lIilI, lli1I1, II1I1i, lII1ll, II1I1l[ilIl11 + 5], IIi1i, 4237533241), lII1ll = li1l1I(lII1ll, lIilI, lli1I1, II1I1i, II1I1l[ilIl11 + 12], ilIIIi, 1700485571), II1I1i = li1l1I(II1I1i, lII1ll, lIilI, lli1I1, II1I1l[ilIl11 + 3], iIiI11, 2399980690), lli1I1 = li1l1I(lli1I1, II1I1i, lII1ll, lIilI, II1I1l[ilIl11 + 10], IIi1l, 4293915773), lIilI = li1l1I(lIilI, lli1I1, II1I1i, lII1ll, II1I1l[ilIl11 + 1], IIi1i, 2240044497), lII1ll = li1l1I(lII1ll, lIilI, lli1I1, II1I1i, II1I1l[ilIl11 + 8], ilIIIi, 1873313359), II1I1i = li1l1I(II1I1i, lII1ll, lIilI, lli1I1, II1I1l[ilIl11 + 15], iIiI11, 4264355552), lli1I1 = li1l1I(lli1I1, II1I1i, lII1ll, lIilI, II1I1l[ilIl11 + 6], IIi1l, 2734768916), lIilI = li1l1I(lIilI, lli1I1, II1I1i, lII1ll, II1I1l[ilIl11 + 13], IIi1i, 1309151649), lII1ll = li1l1I(lII1ll, lIilI, lli1I1, II1I1i, II1I1l[ilIl11 + 4], ilIIIi, 4149444226), II1I1i = li1l1I(II1I1i, lII1ll, lIilI, lli1I1, II1I1l[ilIl11 + 11], iIiI11, 3174756917), lli1I1 = li1l1I(lli1I1, II1I1i, lII1ll, lIilI, II1I1l[ilIl11 + 2], IIi1l, 718787259), lIilI = li1l1I(lIilI, lli1I1, II1I1i, lII1ll, II1I1l[ilIl11 + 9], IIi1i, 3951481745), lII1ll = Ii11ii(lII1ll, IIi11), lIilI = Ii11ii(lIilI, lIii), lli1I1 = Ii11ii(lli1I1, ii1), II1I1i = Ii11ii(II1I1i, lII1li);
  var iIlII1 = lIll11(lII1ll) + lIll11(lIilI) + lIll11(lli1I1) + lIll11(II1I1i);
  return iIlII1.toLowerCase();
}
function iiiiI1(iiIil1, i1ll1I) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class lIliil {
    constructor(l11ilI) {
      this.env = l11ilI;
    }
    ["send"](ii1Iil, Iii1l = "GET") {
      {
        ii1Iil = "string" == typeof ii1Iil ? {
          "url": ii1Iil
        } : ii1Iil;
        let l11il1 = this.get;
        "POST" === Iii1l && (l11il1 = this.post);
        return new Promise((lII1II, I11li) => {
          l11il1.call(this, ii1Iil, (l1illi, l11, llIII) => {
            l1illi ? I11li(l1illi) : lII1II(l11);
          });
        });
      }
    }
    ["get"](lIlI11) {
      return this.send.call(this.env, lIlI11);
    }
    ["post"](I1i1i1) {
      return this.send.call(this.env, I1i1i1, "POST");
    }
  }
  return new class {
    constructor(liI11, lIlI1I) {
      this.name = liI11;
      this.http = new lIliil(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, lIlI1I);
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
    ["toObj"](iIi1i1, llII1 = null) {
      try {
        return JSON.parse(iIi1i1);
      } catch {
        return llII1;
      }
    }
    ["toStr"](II1l1l, li1I1l = null) {
      try {
        return JSON.stringify(II1l1l);
      } catch {
        return li1I1l;
      }
    }
    ["getjson"](iIIi1l, lIlI1i) {
      let IIIiI1 = lIlI1i;
      const ii1Ill = this.getdata(iIIi1l);
      if (ii1Ill) try {
        IIIiI1 = JSON.parse(this.getdata(iIIi1l));
      } catch {}
      return IIIiI1;
    }
    ["setjson"](iiIl1, lIlI1l) {
      try {
        return this.setdata(JSON.stringify(iiIl1), lIlI1l);
      } catch {
        return false;
      }
    }
    ["getScript"](liI1l) {
      return new Promise(I1Ii1I => {
        this.get({
          "url": liI1l
        }, (IiI1Il, iiIii, IiI1Ii) => I1Ii1I(IiI1Ii));
      });
    }
    ["runScript"](iiIil, IilI11) {
      return new Promise(llili => {
        {
          let l1111I = this.getdata("@chavy_boxjs_userCfgs.httpapi");
          l1111I = l1111I ? l1111I.replace(/\n/g, "").trim() : l1111I;
          let llill = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
          llill = llill ? 1 * llill : 20;
          llill = IilI11 && IilI11.timeout ? IilI11.timeout : llill;
          const [iI1I11, l11111] = l1111I.split("@"),
            I1111 = {
              "url": "http://" + l11111 + "/v1/scripting/evaluate",
              "body": {
                "script_text": iiIil,
                "mock_type": "cron",
                "timeout": llill
              },
              "headers": {
                "Accept": "*/*"
              }
            };
          this.post(I1111, (i1Ii, i1Il, llilI) => llili(llilI));
        }
      }).catch(il1IIl => this.logErr(il1IIl));
    }
    ["loaddata"]() {
      if (!this.isNode()) return {};
      {
        {
          this.fs = this.fs ? this.fs : require("fs");
          this.path = this.path ? this.path : require("path");
          const il1IIi = this.path.resolve(this.dataFile),
            i1II = this.path.resolve(process.cwd(), this.dataFile),
            iI1I1I = this.fs.existsSync(il1IIi),
            I111I = !iI1I1I && this.fs.existsSync(i1II);
          if (!iI1I1I && !I111I) return {};
          {
            {
              const I11I11 = iI1I1I ? il1IIi : i1II;
              try {
                return JSON.parse(this.fs.readFileSync(I11I11));
              } catch (il1l1I) {
                return {};
              }
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
          const I111l = this.path.resolve(this.dataFile),
            il1l11 = this.path.resolve(process.cwd(), this.dataFile),
            i1IliI = this.fs.existsSync(I111l),
            lI1I1 = !i1IliI && this.fs.existsSync(il1l11),
            I1lI1 = JSON.stringify(this.data);
          i1IliI ? this.fs.writeFileSync(I111l, I1lI1) : lI1I1 ? this.fs.writeFileSync(il1l11, I1lI1) : this.fs.writeFileSync(I111l, I1lI1);
        }
      }
    }
    ["lodash_get"](i1Ilii, i1Ilil, llI11) {
      const IlIIl1 = i1Ilil.replace(/\[(\d+)\]/g, ".$1").split(".");
      let IliiIl = i1Ilii;
      for (const iili1i of IlIIl1) if (IliiIl = Object(IliiIl)[iili1i], undefined === IliiIl) return llI11;
      return IliiIl;
    }
    ["lodash_set"](l11lII, IliiIi, I1lII) {
      return Object(l11lII) !== l11lII ? l11lII : (Array.isArray(IliiIi) || (IliiIi = IliiIi.toString().match(/[^.[\]]+/g) || []), IliiIi.slice(0, -1).reduce((iili1l, il1l1i, IlIIil) => Object(iili1l[il1l1i]) === iili1l[il1l1i] ? iili1l[il1l1i] : iili1l[il1l1i] = Math.abs(IliiIi[IlIIil + 1]) >> 0 == +IliiIi[IlIIil + 1] ? [] : {}, l11lII)[IliiIi[IliiIi.length - 1]] = I1lII, l11lII);
    }
    ["getdata"](lI1Il) {
      let IlIIii = this.getval(lI1Il);
      if (/^@/.test(lI1Il)) {
        const [, lI1Ii, ilIiI1] = /^@(.*?)\.(.*?)$/.exec(lI1Il),
          lii1I1 = lI1Ii ? this.getval(lI1Ii) : "";
        if (lii1I1) try {
          const il1l1l = JSON.parse(lii1I1);
          IlIIii = il1l1l ? this.lodash_get(il1l1l, ilIiI1, "") : IlIIii;
        } catch (ii1li1) {
          IlIIii = "";
        }
      }
      return IlIIii;
    }
    ["setdata"](iili1I, i1Ill1) {
      {
        let l11lIl = false;
        if (/^@/.test(i1Ill1)) {
          {
            const [, ii1liI, IliiII] = /^@(.*?)\.(.*?)$/.exec(i1Ill1),
              I1lIi = this.getval(ii1liI),
              I1lIl = ii1liI ? "null" === I1lIi ? null : I1lIi || "{}" : "{}";
            try {
              const llI1l = JSON.parse(I1lIl);
              this.lodash_set(llI1l, IliiII, iili1I);
              l11lIl = this.setval(JSON.stringify(llI1l), ii1liI);
            } catch (I11I1l) {
              const I11I1i = {};
              this.lodash_set(I11I1i, IliiII, iili1I);
              l11lIl = this.setval(JSON.stringify(I11I1i), ii1liI);
            }
          }
        } else l11lIl = this.setval(iili1I, i1Ill1);
        return l11lIl;
      }
    }
    ["getval"](IlIIli) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(IlIIli) : this.isQuanX() ? $prefs.valueForKey(IlIIli) : this.isNode() ? (this.data = this.loaddata(), this.data[IlIIli]) : this.data && this.data[IlIIli] || null;
    }
    ["setval"](i1IllI, ii1lil) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(i1IllI, ii1lil) : this.isQuanX() ? $prefs.setValueForKey(i1IllI, ii1lil) : this.isNode() ? (this.data = this.loaddata(), this.data[ii1lil] = i1IllI, this.writedata(), true) : this.data && this.data[ii1lil] || null;
    }
    ["initGotEnv"](iI1I1i) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      iI1I1i && (iI1I1i.headers = iI1I1i.headers ? iI1I1i.headers : {}, undefined === iI1I1i.headers.Cookie && undefined === iI1I1i.cookieJar && (iI1I1i.cookieJar = this.ckjar));
    }
    ["get"](iI1I1l, l1i1 = () => {}) {
      iI1I1l.headers && (delete iI1I1l.headers["Content-Type"], delete iI1I1l.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (iI1I1l.headers = iI1I1l.headers || {}, Object.assign(iI1I1l.headers, {
        "X-Surge-Skip-Scripting": false
      })), $httpClient.get(iI1I1l, (iIl1lI, IiiIIl, iI1ii1) => {
        !iIl1lI && IiiIIl && (IiiIIl.body = iI1ii1, IiiIIl.statusCode = IiiIIl.status);
        l1i1(iIl1lI, IiiIIl, iI1ii1);
      })) : this.isQuanX() ? (this.isNeedRewrite && (iI1I1l.opts = iI1I1l.opts || {}, Object.assign(iI1I1l.opts, {
        "hints": false
      })), $task.fetch(iI1I1l).then(IiiIIi => {
        const {
          statusCode: iI1iiI,
          statusCode: l1ii,
          headers: I11ii1,
          body: Iil11i
        } = IiiIIi;
        l1i1(null, {
          "status": iI1iiI,
          "statusCode": l1ii,
          "headers": I11ii1,
          "body": Iil11i
        }, Iil11i);
      }, i1iiiI => l1i1(i1iiiI))) : this.isNode() && (this.initGotEnv(iI1I1l), this.got(iI1I1l).on("redirect", (l1il, I1l1lI) => {
        try {
          if (l1il.headers["set-cookie"]) {
            const I1IiI = l1il.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            I1IiI && this.ckjar.setCookieSync(I1IiI, null);
            I1l1lI.cookieJar = this.ckjar;
          }
        } catch (I1iliI) {
          this.logErr(I1iliI);
        }
      }).then(I1l1l1 => {
        const {
          statusCode: I1ili1,
          statusCode: iIl1l1,
          headers: iIili1,
          body: Iil11l
        } = I1l1l1;
        l1i1(null, {
          "status": I1ili1,
          "statusCode": iIl1l1,
          "headers": iIili1,
          "body": Iil11l
        }, Iil11l);
      }, iI1iii => {
        {
          const {
            message: iI1iil,
            response: lIIIIl
          } = iI1iii;
          l1i1(iI1iil, lIIIIl, lIIIIl && lIIIIl.body);
        }
      }));
    }
    ["post"](I1Iil, i1iiii = () => {}) {
      if (I1Iil.body && I1Iil.headers && !I1Iil.headers["Content-Type"] && (I1Iil.headers["Content-Type"] = "application/json"), I1Iil.headers && delete I1Iil.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (I1Iil.headers = I1Iil.headers || {}, Object.assign(I1Iil.headers, {
        "X-Surge-Skip-Scripting": false
      })), $httpClient.post(I1Iil, (i1iiil, I11iiI, I1Iii) => {
        !i1iiil && I11iiI && (I11iiI.body = I1Iii, I11iiI.statusCode = I11iiI.status);
        i1iiii(i1iiil, I11iiI, I1Iii);
      });else {
        if (this.isQuanX()) I1Iil.method = "POST", this.isNeedRewrite && (I1Iil.opts = I1Iil.opts || {}, Object.assign(I1Iil.opts, {
          "hints": false
        })), $task.fetch(I1Iil).then(ii11I1 => {
          {
            const {
              statusCode: lii1Il,
              statusCode: ii11II,
              headers: IillII,
              body: II1lI1
            } = ii11I1;
            i1iiii(null, {
              "status": lii1Il,
              "statusCode": ii11II,
              "headers": IillII,
              "body": II1lI1
            }, II1lI1);
          }
        }, iiII1I => i1iiii(iiII1I));else {
          if (this.isNode()) {
            this.initGotEnv(I1Iil);
            const {
              url: lIIIII,
              ...Iiil1i
            } = I1Iil;
            this.got.post(lIIIII, Iiil1i).then(Iiil1l => {
              const {
                statusCode: II1lII,
                statusCode: i1iilI,
                headers: iiII11,
                body: IlI1I1
              } = Iiil1l;
              i1iiii(null, {
                "status": II1lII,
                "statusCode": i1iilI,
                "headers": iiII11,
                "body": IlI1I1
              }, IlI1I1);
            }, lIIII1 => {
              {
                const {
                  message: l1l1,
                  response: I1l1iI
                } = lIIII1;
                i1iiii(l1l1, I1l1iI, I1l1iI && I1l1iI.body);
              }
            });
          }
        }
      }
    }
    ["time"](iIilli, lI11i1 = null) {
      {
        const iI1li = lI11i1 ? new Date(lI11i1) : new Date();
        let ii11Il = {
          "M+": iI1li.getMonth() + 1,
          "d+": iI1li.getDate(),
          "H+": iI1li.getHours(),
          "m+": iI1li.getMinutes(),
          "s+": iI1li.getSeconds(),
          "q+": Math.floor((iI1li.getMonth() + 3) / 3),
          "S": iI1li.getMilliseconds()
        };
        /(y+)/.test(iIilli) && (iIilli = iIilli.replace(RegExp.$1, (iI1li.getFullYear() + "").substr(4 - RegExp.$1.length)));
        for (let ii11Ii in ii11Il) new RegExp("(" + ii11Ii + ")").test(iIilli) && (iIilli = iIilli.replace(RegExp.$1, 1 == RegExp.$1.length ? ii11Il[ii11Ii] : ("00" + ii11Il[ii11Ii]).substr(("" + ii11Il[ii11Ii]).length)));
        return iIilli;
      }
    }
    ["msg"](iiII1l = iiIil1, iiII1i = "", lll11l = "", iI1ill) {
      {
        const iI1ll = i1iill => {
          if (!i1iill) return i1iill;
          if ("string" == typeof i1iill) return this.isLoon() ? i1iill : this.isQuanX() ? {
            "open-url": i1iill
          } : this.isSurge() ? {
            "url": i1iill
          } : undefined;
          if ("object" == typeof i1iill) {
            if (this.isLoon()) {
              let ill1 = i1iill.openUrl || i1iill.url || i1iill["open-url"],
                lI11iI = i1iill.mediaUrl || i1iill["media-url"];
              return {
                "openUrl": ill1,
                "mediaUrl": lI11iI
              };
            }
            if (this.isQuanX()) {
              {
                let I1illi = i1iill["open-url"] || i1iill.url || i1iill.openUrl,
                  I1illl = i1iill["media-url"] || i1iill.mediaUrl;
                return {
                  "open-url": I1illi,
                  "media-url": I1illl
                };
              }
            }
            if (this.isSurge()) {
              {
                let Ii1i1I = i1iill.url || i1iill.openUrl || i1iill["open-url"];
                return {
                  "url": Ii1i1I
                };
              }
            }
          }
        };
        if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(iiII1l, iiII1i, lll11l, iI1ll(iI1ill)) : this.isQuanX() && $notify(iiII1l, iiII1i, lll11l, iI1ll(iI1ill))), !this.isMuteLog) {
          {
            let ilii = ["", "==============📣系统通知📣=============="];
            ilii.push(iiII1l);
            iiII1i && ilii.push(iiII1i);
            lll11l && ilii.push(lll11l);
            console.log(ilii.join("\n"));
            this.logs = this.logs.concat(ilii);
          }
        }
      }
    }
    ["log"](...ilil) {
      ilil.length > 0 && (this.logs = [...this.logs, ...ilil]);
      console.log(ilil.join(this.logSeparator));
    }
    ["logErr"](I11ill, I1illI) {
      {
        const IiiII1 = !this.isSurge() && !this.isQuanX() && !this.isLoon();
        IiiII1 ? this.log("", "❗️" + this.name + ", 错误!", I11ill.stack) : this.log("", "❗️" + this.name + ", 错误!", I11ill);
      }
    }
    ["wait"](illi) {
      return new Promise(illl => setTimeout(illl, illi));
    }
    ["done"](lll11I = {}) {
      const iI1il1 = new Date().getTime(),
        il1II1 = (iI1il1 - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + il1II1 + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(lll11I);
    }
  }(iiIil1, i1ll1I);
}