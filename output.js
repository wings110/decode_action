//Wed Aug 20 2025 13:07:25 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const il1Iil = new Illl("联通云盘任务"),
  ii11ll = il1Iil.isNode() ? require("./sendNotify") : "",
  il1Iii = 1,
  lili1l = 0,
  {
    v4: iI1iIi
  } = require("uuid"),
  iI1iIl = require("crypto"),
  lili1i = require("crypto-js"),
  iI1Ii = iI1iIi();
let IiIIIl = process.env.chinaUnicomCookie,
  IiIIIi = "",
  lI11l = "";
ckArr = IiIIIl.split("&");
Ii11I1("【debug】 这是你的账号数组:\n " + ckArr);
!(async () => {
  ckArr = IiIIIl.split("&");
  await il1Ii1();
  for (let ilII1i = 0; ilII1i < ckArr.length; ilII1i++) {
    {
      let ill1I = ilII1i + 1;
      console.log("------------- 开始【第 " + ill1I + " 个账号】-------------");
      lI11l = ckArr[ilII1i].split("&");
      Ii11I1("【debug】 这是你第 " + ill1I + " 账号信息:\n " + lI11l);
      await il1IiI();
      await il1Iil.wait(2000);
      if (num1 == 1) {
        console.log("当前online过期，跳过...");
        continue;
      }
      customDateString = I1li1I();
      const ilII1l = require("axios");
      let IIilII = {
        "method": "GET",
        "url": "https://m.client.10010.com/mobileService/openPlatform/openPlatLineNew.htm?appName=shouting&clientid=1001000003&to_url=https://panservice.mail.wo.cn/h5/activitymobile/turn-template?activityId%3D6",
        "headers": {
          "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 unicom{version:iphone_c@11.0800}",
          "Cookie": "PvSessionId=" + customDateString + "" + iI1Ii + ";c_mobile=" + num1 + "; c_version=iphone_c@11.0800; city=036|" + cityCode + "|90063345|-99;devicedId=" + iI1Ii + "; ecs_token=" + ecs_token + ";t3_token=" + t3_token + ""
        },
        "maxRedirects": 0
      };
      await ilII1l.request(IIilII).catch(iiiiI1 => {
        wenb = iiiiI1.request.res.rawHeaders[5];
        ticket1 = wenb.match(/ticket=([^&]+)/);
        ticket = ticket1[1];
      });
      await il1Iil.wait(2000);
      req = Math.floor(89999 * Math.random()) + 100000;
      sjc13 = Math.round(new Date().getTime()).toString();
      const l1Iil1 = "HandheldHallAutoLogin" + sjc13 + "" + req + "100002",
        IIiIl = iI1iIl.createHash("md5");
      IIiIl.update(l1Iil1);
      md5Hash = IIiIl.digest("hex");
      await lIil11();
      await iI1Il();
      console.log("获取ck中，等待一会...");
      await il1Iil.wait(5000);
      oldjf = null;
      await lI1i1i();
      await Ill1();
      await il1Iil.wait(15000);
      await lI1i1i();
    }
  }
  await li1ll1(IiIIIi);
})().catch(iiii => il1Iil.logErr(iiii)).finally(() => il1Iil.done());
async function iI1Il() {
  let li1Iil = {
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
    ill11 = await iI1iI(li1Iil, "ticket");
  ticket = ill11.result.ticket;
  const i1ii1l = require("axios");
  let iiIIil = JSON.stringify({
      "activityId": "s743585947358590976",
      "partnersId": "1649"
    }),
    iiIIii = {
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
      "data": iiIIil
    };
  i1ii1l.request(iiIIii).then(llIi11 => {
    const IIi11I = llIi11.headers["set-cookie"],
      iiIIlI = IIi11I.find(IIl1II => IIl1II.startsWith("_jea_id="));
    jeaId = iiIIlI?.["split"](";")[0]?.["split"]("=")[1] || "未找到 Cookie";
  }).catch(iill => console.log("error", iill));
}
function i111il(iiIIl1, llIi1I, lIlIii) {
  const li1Ili = lili1i.enc.Utf8.parse(llIi1I),
    I11lil = lili1i.enc.Utf8.parse(lIlIii),
    Ili1li = lili1i.AES.encrypt(iiIIl1, li1Ili, {
      "iv": I11lil,
      "mode": lili1i.mode.CBC,
      "padding": lili1i.pad.Pkcs7
    });
  return Ili1li.toString();
}
async function i111ii() {
  req = Math.floor(89999 * Math.random()) + 100000;
  sjc13 = Math.round(new Date().getTime()).toString();
  const I11lii = "ShareFile" + sjc13 + "" + req + "wohome",
    li1Ill = iI1iIl.createHash("md5");
  li1Ill.update(I11lii);
  md5Hash = li1Ill.digest("hex");
  const Ili1ll = "{fileIds: \"cb26981fc8ae43cf9600e0c0d1f4c33d\",fileFolderIds: \"\",days: 7,autoFill: \"1\",clientId: \"1001000003\"}",
    IIl1Il = li1llI(token),
    l1Iili = "wNSOYIB1k1DjY5lA";
  param = i111il(Ili1ll, IIl1Il, l1Iili);
  let IIi11l = {
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
    l1Iill = await iI1iI(IIi11l, "分享");
}
async function lI11i() {
  req = Math.floor(89999 * Math.random()) + 100000;
  sjc13 = Math.round(new Date().getTime()).toString();
  const Ii11Il = "AppQueryUser" + sjc13 + "" + req + "api-user",
    lIlIlI = iI1iIl.createHash("md5");
  lIlIlI.update(Ii11Il);
  md5Hash = lIlIlI.digest("hex");
  const iiIIll = "{\"accessToken\":\"" + token + "\"}",
    I1li1l = "Py1J67PAQoCb8Iel",
    I11li1 = "wNSOYIB1k1DjY5lA";
  param = i111il(iiIIll, I1li1l, I11li1);
  let lIIIi = {
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
    iiI1I = await iI1iI(lIIIi, "浏览");
  await iIilII();
}
async function ilI11() {
  req = Math.floor(89999 * Math.random()) + 100000;
  sjc13 = Math.round(new Date().getTime()).toString();
  const IIllii = new Date(),
    IIllil = "" + IIllii.getFullYear() + String(IIllii.getMonth() + 1).padStart(2, "0") + String(IIllii.getDate()).padStart(2, "0") + String(IIllii.getHours()).padStart(2, "0") + String(IIllii.getMinutes()).padStart(2, "0") + String(IIllii.getSeconds()).padStart(2, "0"),
    Il1l1I = "{\"spaceType\":\"0\",\"directoryId\":\"0\",\"batchNo\":\"" + IIllil + "\",\"fileName\":\"kele.jpg\",\"fileSize\":6376590,\"fileType\":\"1\"}",
    lIII = li1llI(token),
    iI11 = "wNSOYIB1k1DjY5lA";
  param = i111il(Il1l1I, lIII, iI11);
  const liIii1 = require("request"),
    Iili11 = require("fs"),
    I111II = require("path"),
    lII1 = {
      "timestamp": Date.now(),
      "randomString": Math.random().toString(36).substring(2, 8),
      "accessToken": token,
      "fileName": "kele.jpg",
      "filePath": I111II.join(__dirname, "313d8600-873e-42a0-bd8d-7357bde2ac43"),
      "fileSize": Iili11.statSync(I111II.join(__dirname, "313d8600-873e-42a0-bd8d-7357bde2ac43")).size,
      "channel": "wocloud",
      "directoryId": "0",
      "fileInfo": param,
      "contentType": "null"
    },
    iIlIlI = {
      "uniqueId": lII1.timestamp + "_" + lII1.randomString,
      "accessToken": lII1.accessToken,
      "fileName": lII1.fileName,
      "psToken": "undefined",
      "fileSize": lII1.fileSize.toString(),
      "totalPart": "1",
      "partSize": lII1.fileSize.toString(),
      "partIndex": "1",
      "channel": lII1.channel,
      "directoryId": lII1.directoryId,
      "fileInfo": lII1.fileInfo,
      "file": {
        "value": Iili11.createReadStream(lII1.filePath),
        "options": {
          "filename": I111II.basename(lII1.filePath),
          "contentType": lII1.contentType
        }
      }
    },
    lIl11 = {
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
      "formData": iIlIlI
    };
  liIii1(lIl11, function (IIlli1, ilIiii, ilIiil) {
    if (IIlli1) throw new Error(IIlli1);
  });
}
function li1llI(iII) {
  if (typeof iII !== "string") {
    throw new TypeError("输入必须是一个字符串");
  }
  return iII.substring(0, 16);
}
async function lIil11() {
  let liIiil = {
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
    l11Il1 = await iI1iI(liIiil, "token");
  token = l11Il1.RSP.DATA.token;
}
async function iIilII() {
  let liIiii = {
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
    l11Ill = await iI1iI(liIiii, "浏览任务");
}
async function lIlI1(lIl1I1, I111I1) {
  let lIIi = {
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
      "body": "{\n  \"taskCode\": \"" + lIl1I1 + "\"\n}"
    },
    l11Ili = await iI1iI(lIIi, "开启任务 " + I111I1);
  xinxi = l11Ili.msg;
  switch (I111I1) {
    case "联通云盘积分任务-分享文件":
      await i111ii();
      break;
    case "联通云盘积分任务-手动上传文件":
      await ilI11();
      break;
    case "联通云盘积分任务-浏览活动中心":
      await lI11i();
      break;
    case "联通云盘积分任务-当月上传容量满1GB":
      console.log("完成上传任务中，稍等片刻。。。");
      for (let Il1III = 0; Il1III < 86; Il1III++) {
        await ilI11();
        await il1Iil.wait(2000);
      }
      break;
    default:
      break;
  }
}
async function lIllI1(l11iI) {
  let IIiIil = {
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
      "body": "{\n  \"taskCode\": \"" + l11iI + "\"\n}"
    },
    lli1ll = await iI1iI(IIiIil, "完成签到");
  xinxi = lli1ll.msg;
}
async function Ill1() {
  let liIill = {
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
    lli1li = await iI1iI(liIill, "查询任务");
  const ll1I = lli1li.data.taskDetail.taskList;
  for (const liIil1 of ll1I) {
    {
      const {
        taskCode: IIiIlI,
        taskName: ilII1I,
        finishCount: iiIlI1,
        needCount: lli1l1
      } = liIil1;
      console.log(ilII1I + "：" + iiIlI1 + "/" + lli1l1);
      if (iiIlI1 !== lli1l1) {
        const lii1l = lli1l1 - iiIlI1;
        console.log("任务未完成，需要再执行 " + lii1l + " 次");
        for (let lii1i = 0; lii1i < lii1l; lii1i++) {
          try {
            await il1Iil.wait(5000);
            ilII1I === "积分任务-签到" ? await lIllI1(IIiIlI) : await lIlI1(IIiIlI, ilII1I);
            console.log("第 " + (lii1i + 1) + " 次执行" + ilII1I + "任务完成");
          } catch (lliIi) {
            console.error("执行 " + IIiIlI + " 时出错: " + lliIi.message);
            break;
          }
        }
      } else console.log("任务已完成");
      console.log("---------------------");
    }
  }
}
async function lI1i1i() {
  let iiiil = {
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
    iiIlII = await iI1iI(iiiil, "查询积分");
  if (oldjf == null) {
    oldjf = iiIlII.data.availableScore;
  } else {
    const I1II1l = iiIlII.data.availableScore;
    console.log("用户" + iiIlII.data.phone + "运行前积分：" + oldjf + ",运行后积分" + I1II1l + "，本次运行获得" + (I1II1l - oldjf));
    IiIIIi += "\n用户" + iiIlII.data.phone + "运行前积分：" + oldjf + ",运行后积分" + I1II1l + "，本次运行获得" + (I1II1l - oldjf);
  }
}
async function il1IiI() {
  let I1II1i = {
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
      "body": "deviceModel=iPhone&step=background&token_online=" + lI11l + "&version=iphone_c%4011.0700"
    },
    lli1il = await iI1iI(I1II1i, "获取");
  try {
    t3_token = lli1il.t3_token;
    private_token = lli1il.private_token;
    ecs_token = lli1il.ecs_token;
    num1 = lli1il.list[0].num;
    cityCode = lli1il.list[0].cityCode;
  } catch (iIlIll) {
    num1 = "1";
  }
}
async function il1Ii1() {
  let iIl11l = {
      "url": "https://gitee.com/kele2233/genxin/raw/master/ydid.json",
      "headers": {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.43(0x18002b2d) NetType/WIFI Language/zh_CN"
      }
    },
    I1ii = await II1iIi(iIl11l, "ll");
  hqsjc = I1ii.ymsjc;
  gong = I1ii.gong;
  dqsjc = Math.round(new Date().getTime() / 1000).toString();
  hqsjc > dqsjc ? (console.log("公告：" + I1ii.gh), console.log("当前版本1.2，最新版本" + I1ii.fwbbh)) : (console.error(gong), process.exit());
}
async function lI1i1l(iIiIIl, iIiIIi) {
  return new Promise(I1Iii1 => {
    let iiI1II = [];
    if (iIiIIl) {
      if (iIiIIl.indexOf("@") !== -1) {
        iIiIIl.split("@").forEach(iIl11I => {
          iiI1II.push(iIl11I);
        });
      } else iIiIIl.indexOf("\n") !== -1 ? iIiIIl.split("\n").forEach(IlIiii => {
        iiI1II.push(IlIiii);
      }) : iiI1II.push(iIiIIl);
      I1Iii1(iiI1II);
    } else {
      console.log("\n 【" + il1Iil.name + "】：未填写变量 " + iIiIIi);
    }
  });
}
async function li1ll1(iIlI1) {
  if (!iIlI1) return;
  if (il1Iii > 0) {
    if (il1Iil.isNode()) {
      {
        let lll1l1 = require("./sendNotify");
        await lll1l1.sendNotify(il1Iil.name, iIlI1);
      }
    } else il1Iil.msg(iIlI1);
  } else console.log(iIlI1);
}
function iI1II(llili1) {
  llili1 = llili1 || 32;
  let I1ll = "QWERTYUIOPASDFGHJKLZXCVBNM1234567890",
    ll1iii = I1ll.length,
    ll1iil = "";
  for (i = 0; i < llili1; i++) ll1iil += I1ll.charAt(Math.floor(Math.random() * ll1iii));
  return ll1iil;
}
let lIil1I = "";
function IiIIII(I1IilI) {
  lIil1I = I1IilI;
}
function i111iI(iIllII) {
  if (lIil1I === iIllII) {
    console.log("Reached mark " + iIllII);
  } else console.log("Invalid mark: " + iIllII);
}
function lIllII(l1li1) {
  var lIIlil = new Date(l1li1 * 1000);
  var IlIil1 = lIIlil.getFullYear();
  var iIllI1 = String(lIIlil.getMonth() + 1).padStart(2, "0");
  var iI111 = String(lIIlil.getDate()).padStart(2, "0");
  var lli11 = String(lIIlil.getHours()).padStart(2, "0");
  var l1I111 = String(lIIlil.getMinutes()).padStart(2, "0");
  var Il1iI = String(lIIlil.getSeconds()).padStart(2, "0");
  var lIIlii = IlIil1 + "-" + iIllI1 + "-" + iI111 + " " + lli11 + ":" + l1I111 + ":" + Il1iI;
  return lIIlii;
}
function IIilIl(ll1ili, il1liI) {
  return Math.round(Math.random() * (il1liI - ll1ili) + ll1ili);
}
function IIilIi() {
  const l1liI = new Date(),
    llilli = l1liI.getHours(),
    il1li1 = new Date(l1liI.getFullYear(), l1liI.getMonth(), l1liI.getDate(), llilli + 1, 0, 0, 0);
  return il1li1.getTime();
}
function l1Iiii() {
  const i1III1 = new Date(),
    l1ii1i = i1III1.getMinutes(),
    l1liII = new Date(i1III1.getFullYear(), i1III1.getMonth(), i1III1.getDate(), i1III1.getHours(), l1ii1i === 0 ? 1 : l1ii1i + 1, 0, 0);
  l1liII.getMinutes() === 0 && l1liII.getHours() !== i1III1.getHours() && l1liII.setDate(i1III1.getDate() + (l1liII.getHours() === 0 ? 1 : 0));
  return l1liII.getTime();
}
function l1Iiil() {
  return Math.round(new Date().getTime()).toString();
}
function I1li1I() {
  const lli1l = new Date(),
    Iili1 = String(lli1l.getFullYear()).padStart(4, "0"),
    l1lil = String(lli1l.getMonth() + 1).padStart(2, "0"),
    lli1i = String(lli1l.getDate()).padStart(2, "0"),
    Il1l1 = String(lli1l.getHours()).padStart(2, "0"),
    IiiiIl = String(lli1l.getMinutes()).padStart(2, "0"),
    i1IIII = String(lli1l.getSeconds()).slice(0, 2);
  return Iili1 + l1lil + lli1i + Il1l1 + IiiiIl + i1IIII;
}
function IIiII() {
  return Math.round(new Date().getTime() / 1000).toString();
}
function iiiI() {
  let l1ll1 = new Date();
  h = l1ll1.getHours();
  return h;
}
function I1li11() {
  let llill1 = new Date();
  m = llill1.getMinutes();
  return m;
}
function II1iIl(Iill1 = 3000) {
  return new Promise(illi11 => {
    {
      let il1lil = {
        "url": "https://keai.icu/apiwyy/api"
      };
      il1Iil.get(il1lil, async (I1iil, iiliii, I1iii) => {
        try {
          I1iii = JSON.parse(I1iii);
          console.log("\n 【网抑云时间】: " + I1iii.content + "  by--" + I1iii.music);
        } catch (li111i) {
          il1Iil.logErr(li111i, iiliii);
        } finally {
          illi11();
        }
      }, Iill1);
    }
  });
}
async function II1iIi(I1ilI, iilii1, llilil = 3000) {
  return new Promise(I1il1 => {
    {
      let IIi1Ii = I1ilI;
      if (!iilii1) {
        {
          let li1lII = arguments.callee.toString(),
            Il11II = /function\s*(\w*)/i,
            Iilll = Il11II.exec(li1lII);
          iilii1 = Iilll[1];
        }
      }
      lili1l && (console.log("\n 【debug】=============== 这是 " + iilii1 + " 请求 url ==============="), console.log(IIi1Ii));
      il1Iil.get(IIi1Ii, async (IiIIll, lIiiii, iililI) => {
        try {
          {
            if (lili1l) {
              console.log("\n\n 【debug】===============这是 " + iilii1 + " 返回data==============");
              console.log(iililI);
              console.log("======");
              console.log(JSON.parse(iililI));
            }
            let Iilli = JSON.parse(iililI);
            I1il1(Iilli);
          }
        } catch (i111Il) {
          console.log(IiIIll, lIiiii);
        } finally {
          I1il1();
        }
      }, llilil);
    }
  });
}
async function iI1iI(i111Ii, IlII1I, IillI = 200) {
  return new Promise(lIiilI => {
    {
      let I11Ili = i111Ii;
      if (!IlII1I) {
        {
          let li1lIl = arguments.callee.toString(),
            li1lIi = /function\s*(\w*)/i,
            IiIIil = li1lIi.exec(li1lIl);
          IlII1I = IiIIil[1];
        }
      }
      lili1l && (console.log("\n 【debug】=============== 这是 " + IlII1I + " 请求 url ==============="), console.log(I11Ili));
      il1Iil.post(I11Ili, async (iilill, IiIIii, lIiili) => {
        try {
          lili1l && (console.log("\n\n 【debug】===============这是 " + IlII1I + " 返回data=============="), console.log(lIiili), console.log("======"), console.log(JSON.parse(lIiili)));
          let lIiill = JSON.parse(lIiili);
          lIiilI(lIiill);
        } catch (iilili) {} finally {
          lIiilI();
        }
      }, IillI);
    }
  });
}
function Ii11I1(...Il1lIi) {
  lili1l && console.log(...Il1lIi);
}
function li1IiI(II1il1) {
  function l111(lIIIll, i11I) {
    return lIIIll << i11I | lIIIll >>> 32 - i11I;
  }
  function il11lI(l1I1, IiIlli) {
    var IiIlll, l1Ii1l, IIi1li, lii1ii, llilIl;
    IIi1li = 2147483648 & l1I1;
    lii1ii = 2147483648 & IiIlli;
    IiIlll = 1073741824 & l1I1;
    l1Ii1l = 1073741824 & IiIlli;
    llilIl = (1073741823 & l1I1) + (1073741823 & IiIlli);
    return IiIlll & l1Ii1l ? 2147483648 ^ llilIl ^ IIi1li ^ lii1ii : IiIlll | l1Ii1l ? 1073741824 & llilIl ? 3221225472 ^ llilIl ^ IIi1li ^ lii1ii : 1073741824 ^ llilIl ^ IIi1li ^ lii1ii : llilIl ^ IIi1li ^ lii1ii;
  }
  function lIll1I(lii1il, ll1iIi, llilIi) {
    return lii1il & ll1iIi | ~lii1il & llilIi;
  }
  function li1II1(ilI1, IiIllI, i1llI1) {
    return ilI1 & i1llI1 | IiIllI & ~i1llI1;
  }
  function iiIllI(lii1l1, Iiiill, llilII) {
    return lii1l1 ^ Iiiill ^ llilII;
  }
  function iII1l1(lIIIii, i11i, i11l) {
    return i11i ^ (lIIIii | ~i11l);
  }
  function I1I1I(l1Ii, IiIll1, l1Il, i1il11, l1Ii1i, l1i1iI, lIiiI1) {
    l1Ii = il11lI(l1Ii, il11lI(il11lI(lIll1I(IiIll1, l1Il, i1il11), l1Ii1i), lIiiI1));
    return il11lI(l111(l1Ii, l1i1iI), IiIll1);
  }
  function l1IIII(IIi1l1, Ilii1i, ilIi, i1il1I, lliIli, IlliII, ilIl) {
    IIi1l1 = il11lI(IIi1l1, il11lI(il11lI(li1II1(Ilii1i, ilIi, i1il1I), lliIli), ilIl));
    return il11lI(l111(IIi1l1, IlliII), Ilii1i);
  }
  function IIillI(ill1ii, lllli1, Il11ii, iI1l1I, i1llII, ill1il, Il11il) {
    ill1ii = il11lI(ill1ii, il11lI(il11lI(iiIllI(lllli1, Il11ii, iI1l1I), i1llII), Il11il));
    return il11lI(l111(ill1ii, ill1il), lllli1);
  }
  function l1Ili(lIiiII, I11l11, I11l1l, IIi1lI, I11l1i, lliIl1, Ilii1I) {
    lIiiII = il11lI(lIiiII, il11lI(il11lI(iII1l1(I11l11, I11l1l, IIi1lI), I11l1i), Ilii1I));
    return il11lI(l111(lIiiII, lliIl1), I11l11);
  }
  function i1II11(ilII) {
    for (var Il11l1, lliIlI = ilII.length, i1il1i = lliIlI + 8, i1il1l = (i1il1i - i1il1i % 64) / 64, Ilii11 = 16 * (i1il1l + 1), i1llIl = new Array(Ilii11 - 1), i1llIi = 0, iI1l1i = 0; lliIlI > iI1l1i;) Il11l1 = (iI1l1i - iI1l1i % 4) / 4, i1llIi = iI1l1i % 4 * 8, i1llIl[Il11l1] = i1llIl[Il11l1] | ilII.charCodeAt(iI1l1i) << i1llIi, iI1l1i++;
    Il11l1 = (iI1l1i - iI1l1i % 4) / 4;
    i1llIi = iI1l1i % 4 * 8;
    i1llIl[Il11l1] = i1llIl[Il11l1] | 128 << i1llIi;
    i1llIl[Ilii11 - 2] = lliIlI << 3;
    i1llIl[Ilii11 - 1] = lliIlI >>> 29;
    return i1llIl;
  }
  function l1Ill(l1i1i1) {
    var lIiiIi,
      ill1l1,
      ilili1 = "",
      IlliI1 = "";
    for (ill1l1 = 0; 3 >= ill1l1; ill1l1++) lIiiIi = l1i1i1 >>> 8 * ill1l1 & 255, IlliI1 = "0" + lIiiIi.toString(16), ilili1 += IlliI1.substr(IlliI1.length - 2, 2);
    return ilili1;
  }
  function lllllI(iI1l1l) {
    iI1l1l = iI1l1l.replace(/\r\n/g, "\n");
    for (var ill1i1 = "", lIiiIl = 0; lIiiIl < iI1l1l.length; lIiiIl++) {
      {
        var Iiiii1 = iI1l1l.charCodeAt(lIiiIl);
        128 > Iiiii1 ? ill1i1 += String.fromCharCode(Iiiii1) : Iiiii1 > 127 && 2048 > Iiiii1 ? (ill1i1 += String.fromCharCode(Iiiii1 >> 6 | 192), ill1i1 += String.fromCharCode(63 & Iiiii1 | 128)) : (ill1i1 += String.fromCharCode(Iiiii1 >> 12 | 224), ill1i1 += String.fromCharCode(Iiiii1 >> 6 & 63 | 128), ill1i1 += String.fromCharCode(63 & Iiiii1 | 128));
      }
    }
    return ill1i1;
  }
  var Iiii1l,
    IiliIi,
    Iiii1i,
    iiIlll,
    II1iil,
    lllll1,
    II1iii,
    iII1lI,
    lIll1i,
    iiIlli = [],
    iII1 = 7,
    Ii11i1 = 12,
    lIll1l = 17,
    Il1lIl = 22,
    I1111I = 5,
    I1I11 = 9,
    il11l1 = 14,
    I1I1l = 20,
    i1II1I = 4,
    IIiliI = 11,
    I1I1i = 16,
    iiiiii = 23,
    iiiiil = 6,
    l1Il11 = 10,
    IIl1lI = 15,
    ilii1i = 21;
  for (II1il1 = lllllI(II1il1), iiIlli = i1II11(II1il1), lllll1 = 1732584193, II1iii = 4023233417, iII1lI = 2562383102, lIll1i = 271733878, Iiii1l = 0; Iiii1l < iiIlli.length; Iiii1l += 16) IiliIi = lllll1, Iiii1i = II1iii, iiIlll = iII1lI, II1iil = lIll1i, lllll1 = I1I1I(lllll1, II1iii, iII1lI, lIll1i, iiIlli[Iiii1l + 0], iII1, 3614090360), lIll1i = I1I1I(lIll1i, lllll1, II1iii, iII1lI, iiIlli[Iiii1l + 1], Ii11i1, 3905402710), iII1lI = I1I1I(iII1lI, lIll1i, lllll1, II1iii, iiIlli[Iiii1l + 2], lIll1l, 606105819), II1iii = I1I1I(II1iii, iII1lI, lIll1i, lllll1, iiIlli[Iiii1l + 3], Il1lIl, 3250441966), lllll1 = I1I1I(lllll1, II1iii, iII1lI, lIll1i, iiIlli[Iiii1l + 4], iII1, 4118548399), lIll1i = I1I1I(lIll1i, lllll1, II1iii, iII1lI, iiIlli[Iiii1l + 5], Ii11i1, 1200080426), iII1lI = I1I1I(iII1lI, lIll1i, lllll1, II1iii, iiIlli[Iiii1l + 6], lIll1l, 2821735955), II1iii = I1I1I(II1iii, iII1lI, lIll1i, lllll1, iiIlli[Iiii1l + 7], Il1lIl, 4249261313), lllll1 = I1I1I(lllll1, II1iii, iII1lI, lIll1i, iiIlli[Iiii1l + 8], iII1, 1770035416), lIll1i = I1I1I(lIll1i, lllll1, II1iii, iII1lI, iiIlli[Iiii1l + 9], Ii11i1, 2336552879), iII1lI = I1I1I(iII1lI, lIll1i, lllll1, II1iii, iiIlli[Iiii1l + 10], lIll1l, 4294925233), II1iii = I1I1I(II1iii, iII1lI, lIll1i, lllll1, iiIlli[Iiii1l + 11], Il1lIl, 2304563134), lllll1 = I1I1I(lllll1, II1iii, iII1lI, lIll1i, iiIlli[Iiii1l + 12], iII1, 1804603682), lIll1i = I1I1I(lIll1i, lllll1, II1iii, iII1lI, iiIlli[Iiii1l + 13], Ii11i1, 4254626195), iII1lI = I1I1I(iII1lI, lIll1i, lllll1, II1iii, iiIlli[Iiii1l + 14], lIll1l, 2792965006), II1iii = I1I1I(II1iii, iII1lI, lIll1i, lllll1, iiIlli[Iiii1l + 15], Il1lIl, 1236535329), lllll1 = l1IIII(lllll1, II1iii, iII1lI, lIll1i, iiIlli[Iiii1l + 1], I1111I, 4129170786), lIll1i = l1IIII(lIll1i, lllll1, II1iii, iII1lI, iiIlli[Iiii1l + 6], I1I11, 3225465664), iII1lI = l1IIII(iII1lI, lIll1i, lllll1, II1iii, iiIlli[Iiii1l + 11], il11l1, 643717713), II1iii = l1IIII(II1iii, iII1lI, lIll1i, lllll1, iiIlli[Iiii1l + 0], I1I1l, 3921069994), lllll1 = l1IIII(lllll1, II1iii, iII1lI, lIll1i, iiIlli[Iiii1l + 5], I1111I, 3593408605), lIll1i = l1IIII(lIll1i, lllll1, II1iii, iII1lI, iiIlli[Iiii1l + 10], I1I11, 38016083), iII1lI = l1IIII(iII1lI, lIll1i, lllll1, II1iii, iiIlli[Iiii1l + 15], il11l1, 3634488961), II1iii = l1IIII(II1iii, iII1lI, lIll1i, lllll1, iiIlli[Iiii1l + 4], I1I1l, 3889429448), lllll1 = l1IIII(lllll1, II1iii, iII1lI, lIll1i, iiIlli[Iiii1l + 9], I1111I, 568446438), lIll1i = l1IIII(lIll1i, lllll1, II1iii, iII1lI, iiIlli[Iiii1l + 14], I1I11, 3275163606), iII1lI = l1IIII(iII1lI, lIll1i, lllll1, II1iii, iiIlli[Iiii1l + 3], il11l1, 4107603335), II1iii = l1IIII(II1iii, iII1lI, lIll1i, lllll1, iiIlli[Iiii1l + 8], I1I1l, 1163531501), lllll1 = l1IIII(lllll1, II1iii, iII1lI, lIll1i, iiIlli[Iiii1l + 13], I1111I, 2850285829), lIll1i = l1IIII(lIll1i, lllll1, II1iii, iII1lI, iiIlli[Iiii1l + 2], I1I11, 4243563512), iII1lI = l1IIII(iII1lI, lIll1i, lllll1, II1iii, iiIlli[Iiii1l + 7], il11l1, 1735328473), II1iii = l1IIII(II1iii, iII1lI, lIll1i, lllll1, iiIlli[Iiii1l + 12], I1I1l, 2368359562), lllll1 = IIillI(lllll1, II1iii, iII1lI, lIll1i, iiIlli[Iiii1l + 5], i1II1I, 4294588738), lIll1i = IIillI(lIll1i, lllll1, II1iii, iII1lI, iiIlli[Iiii1l + 8], IIiliI, 2272392833), iII1lI = IIillI(iII1lI, lIll1i, lllll1, II1iii, iiIlli[Iiii1l + 11], I1I1i, 1839030562), II1iii = IIillI(II1iii, iII1lI, lIll1i, lllll1, iiIlli[Iiii1l + 14], iiiiii, 4259657740), lllll1 = IIillI(lllll1, II1iii, iII1lI, lIll1i, iiIlli[Iiii1l + 1], i1II1I, 2763975236), lIll1i = IIillI(lIll1i, lllll1, II1iii, iII1lI, iiIlli[Iiii1l + 4], IIiliI, 1272893353), iII1lI = IIillI(iII1lI, lIll1i, lllll1, II1iii, iiIlli[Iiii1l + 7], I1I1i, 4139469664), II1iii = IIillI(II1iii, iII1lI, lIll1i, lllll1, iiIlli[Iiii1l + 10], iiiiii, 3200236656), lllll1 = IIillI(lllll1, II1iii, iII1lI, lIll1i, iiIlli[Iiii1l + 13], i1II1I, 681279174), lIll1i = IIillI(lIll1i, lllll1, II1iii, iII1lI, iiIlli[Iiii1l + 0], IIiliI, 3936430074), iII1lI = IIillI(iII1lI, lIll1i, lllll1, II1iii, iiIlli[Iiii1l + 3], I1I1i, 3572445317), II1iii = IIillI(II1iii, iII1lI, lIll1i, lllll1, iiIlli[Iiii1l + 6], iiiiii, 76029189), lllll1 = IIillI(lllll1, II1iii, iII1lI, lIll1i, iiIlli[Iiii1l + 9], i1II1I, 3654602809), lIll1i = IIillI(lIll1i, lllll1, II1iii, iII1lI, iiIlli[Iiii1l + 12], IIiliI, 3873151461), iII1lI = IIillI(iII1lI, lIll1i, lllll1, II1iii, iiIlli[Iiii1l + 15], I1I1i, 530742520), II1iii = IIillI(II1iii, iII1lI, lIll1i, lllll1, iiIlli[Iiii1l + 2], iiiiii, 3299628645), lllll1 = l1Ili(lllll1, II1iii, iII1lI, lIll1i, iiIlli[Iiii1l + 0], iiiiil, 4096336452), lIll1i = l1Ili(lIll1i, lllll1, II1iii, iII1lI, iiIlli[Iiii1l + 7], l1Il11, 1126891415), iII1lI = l1Ili(iII1lI, lIll1i, lllll1, II1iii, iiIlli[Iiii1l + 14], IIl1lI, 2878612391), II1iii = l1Ili(II1iii, iII1lI, lIll1i, lllll1, iiIlli[Iiii1l + 5], ilii1i, 4237533241), lllll1 = l1Ili(lllll1, II1iii, iII1lI, lIll1i, iiIlli[Iiii1l + 12], iiiiil, 1700485571), lIll1i = l1Ili(lIll1i, lllll1, II1iii, iII1lI, iiIlli[Iiii1l + 3], l1Il11, 2399980690), iII1lI = l1Ili(iII1lI, lIll1i, lllll1, II1iii, iiIlli[Iiii1l + 10], IIl1lI, 4293915773), II1iii = l1Ili(II1iii, iII1lI, lIll1i, lllll1, iiIlli[Iiii1l + 1], ilii1i, 2240044497), lllll1 = l1Ili(lllll1, II1iii, iII1lI, lIll1i, iiIlli[Iiii1l + 8], iiiiil, 1873313359), lIll1i = l1Ili(lIll1i, lllll1, II1iii, iII1lI, iiIlli[Iiii1l + 15], l1Il11, 4264355552), iII1lI = l1Ili(iII1lI, lIll1i, lllll1, II1iii, iiIlli[Iiii1l + 6], IIl1lI, 2734768916), II1iii = l1Ili(II1iii, iII1lI, lIll1i, lllll1, iiIlli[Iiii1l + 13], ilii1i, 1309151649), lllll1 = l1Ili(lllll1, II1iii, iII1lI, lIll1i, iiIlli[Iiii1l + 4], iiiiil, 4149444226), lIll1i = l1Ili(lIll1i, lllll1, II1iii, iII1lI, iiIlli[Iiii1l + 11], l1Il11, 3174756917), iII1lI = l1Ili(iII1lI, lIll1i, lllll1, II1iii, iiIlli[Iiii1l + 2], IIl1lI, 718787259), II1iii = l1Ili(II1iii, iII1lI, lIll1i, lllll1, iiIlli[Iiii1l + 9], ilii1i, 3951481745), lllll1 = il11lI(lllll1, IiliIi), II1iii = il11lI(II1iii, Iiii1i), iII1lI = il11lI(iII1lI, iiIlll), lIll1i = il11lI(lIll1i, II1iil);
  var IiliIl = l1Ill(lllll1) + l1Ill(II1iii) + l1Ill(iII1lI) + l1Ill(lIll1i);
  return IiliIl.toLowerCase();
}
function Illl(lliIil, IIi1iI) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class il1ii1 {
    constructor(ilIi1i) {
      this.env = ilIi1i;
    }
    ["send"](lIlll, ilIi1l = "GET") {
      lIlll = "string" == typeof lIlll ? {
        "url": lIlll
      } : lIlll;
      let li1iiI = this.get;
      "POST" === ilIi1l && (li1iiI = this.post);
      return new Promise((IIl1l, lIlii1) => {
        li1iiI.call(this, lIlll, (Illi1I, liiii, i11i1I) => {
          Illi1I ? lIlii1(Illi1I) : IIl1l(liiii);
        });
      });
    }
    ["get"](llil) {
      return this.send.call(this.env, llil);
    }
    ["post"](llii) {
      return this.send.call(this.env, llii, "POST");
    }
  }
  return new class {
    constructor(Illi11, i11i11) {
      this.name = Illi11;
      this.http = new il1ii1(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, i11i11);
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
    ["toObj"](lIliiI, liilli = null) {
      try {
        return JSON.parse(lIliiI);
      } catch {
        return liilli;
      }
    }
    ["toStr"](liilll, ili1lI = null) {
      try {
        return JSON.stringify(liilll);
      } catch {
        return ili1lI;
      }
    }
    ["getjson"](liiiI, lllIil) {
      {
        let li1il1 = lllIil;
        const lliI = this.getdata(liiiI);
        if (lliI) try {
          li1il1 = JSON.parse(this.getdata(liiiI));
        } catch {}
        return li1il1;
      }
    }
    ["setjson"](lIliii, lIliil) {
      try {
        return this.setdata(JSON.stringify(lIliii), lIliil);
      } catch {
        return false;
      }
    }
    ["getScript"](liilI) {
      return new Promise(i1ll1i => {
        this.get({
          "url": liilI
        }, (lllIii, II1III, i1I1i1) => i1ll1i(i1I1i1));
      });
    }
    ["runScript"](Il1li1, ili1il) {
      return new Promise(ili1ii => {
        {
          let Iilii1 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
          Iilii1 = Iilii1 ? Iilii1.replace(/\n/g, "").trim() : Iilii1;
          let lllIi1 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
          lllIi1 = lllIi1 ? 1 * lllIi1 : 20;
          lllIi1 = ili1il && ili1il.timeout ? ili1il.timeout : lllIi1;
          const [Illi1l, Illi1i] = Iilii1.split("@"),
            lllI = {
              "url": "http://" + Illi1i + "/v1/scripting/evaluate",
              "body": {
                "script_text": Il1li1,
                "mock_type": "cron",
                "timeout": lllIi1
              },
              "headers": {
                "Accept": "*/*"
              }
            };
          this.post(lllI, (i1I1iI, IiliiI, I11iI) => ili1ii(I11iI));
        }
      }).catch(lllIiI => this.logErr(lllIiI));
    }
    ["loaddata"]() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const lIlilI = this.path.resolve(this.dataFile),
          lll1 = this.path.resolve(process.cwd(), this.dataFile),
          iiIill = this.fs.existsSync(lIlilI),
          li1ili = !iiIill && this.fs.existsSync(lll1);
        if (!iiIill && !li1ili) return {};
        {
          const liillI = iiIill ? lIlilI : lll1;
          try {
            return JSON.parse(this.fs.readFileSync(liillI));
          } catch (il1I1l) {
            return {};
          }
        }
      }
    }
    ["writedata"]() {
      {
        if (this.isNode()) {
          {
            this.fs = this.fs ? this.fs : require("fs");
            this.path = this.path ? this.path : require("path");
            const i1I1il = this.path.resolve(this.dataFile),
              illll = this.path.resolve(process.cwd(), this.dataFile),
              IiI1II = this.fs.existsSync(i1I1il),
              Iii1I = !IiI1II && this.fs.existsSync(illll),
              I11il = JSON.stringify(this.data);
            IiI1II ? this.fs.writeFileSync(i1I1il, I11il) : Iii1I ? this.fs.writeFileSync(illll, I11il) : this.fs.writeFileSync(i1I1il, I11il);
          }
        }
      }
    }
    ["lodash_get"](IIIiIl, illli, IilI1I) {
      const l1l1l1 = illli.replace(/\[(\d+)\]/g, ".$1").split(".");
      let il1I1I = IIIiIl;
      for (const III of l1l1l1) if (il1I1I = Object(il1I1I)[III], undefined === il1I1I) return IilI1I;
      return il1I1I;
    }
    ["lodash_set"](l11iii, liili, IiI1I1) {
      return Object(l11iii) !== l11iii ? l11iii : (Array.isArray(liili) || (liili = liili.toString().match(/[^.[\]]+/g) || []), liili.slice(0, -1).reduce((iIIi1I, liill, llll) => Object(iIIi1I[liill]) === iIIi1I[liill] ? iIIi1I[liill] : iIIi1I[liill] = Math.abs(liili[llll + 1]) >> 0 == +liili[llll + 1] ? [] : {}, l11iii)[liili[liili.length - 1]] = IiI1I1, l11iii);
    }
    ["getdata"](IilI1l) {
      {
        let i1I1l1 = this.getval(IilI1l);
        if (/^@/.test(IilI1l)) {
          const [, iIIi11, I11l1] = /^@(.*?)\.(.*?)$/.exec(IilI1l),
            IliI1 = iIIi11 ? this.getval(iIIi11) : "";
          if (IliI1) try {
            const IIIiII = JSON.parse(IliI1);
            i1I1l1 = IIIiII ? this.lodash_get(IIIiII, I11l1, "") : i1I1l1;
          } catch (Iii11) {
            i1I1l1 = "";
          }
        }
        return i1I1l1;
      }
    }
    ["setdata"](l1ili1, l1ill1) {
      let li1I1I = false;
      if (/^@/.test(l1ill1)) {
        {
          const [, ii1Ii1, i1I1lI] = /^@(.*?)\.(.*?)$/.exec(l1ill1),
            IIl = this.getval(ii1Ii1),
            IlIII1 = ii1Ii1 ? "null" === IIl ? null : IIl || "{}" : "{}";
          try {
            {
              const ii1IiI = JSON.parse(IlIII1);
              this.lodash_set(ii1IiI, i1I1lI, l1ili1);
              li1I1I = this.setval(JSON.stringify(ii1IiI), ii1Ii1);
            }
          } catch (l11iil) {
            const lII1Ii = {};
            this.lodash_set(lII1Ii, i1I1lI, l1ili1);
            li1I1I = this.setval(JSON.stringify(lII1Ii), ii1Ii1);
          }
        }
      } else li1I1I = this.setval(l1ili1, l1ill1);
      return li1I1I;
    }
    ["getval"](lII1Il) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(lII1Il) : this.isQuanX() ? $prefs.valueForKey(lII1Il) : this.isNode() ? (this.data = this.loaddata(), this.data[lII1Il]) : this.data && this.data[lII1Il] || null;
    }
    ["setval"](I11lI, l1ilil) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(I11lI, l1ilil) : this.isQuanX() ? $prefs.setValueForKey(I11lI, l1ilil) : this.isNode() ? (this.data = this.loaddata(), this.data[l1ilil] = I11lI, this.writedata(), true) : this.data && this.data[l1ilil] || null;
    }
    ["initGotEnv"](l1l1ll) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      l1l1ll && (l1l1ll.headers = l1l1ll.headers ? l1l1ll.headers : {}, undefined === l1l1ll.headers.Cookie && undefined === l1l1ll.cookieJar && (l1l1ll.cookieJar = this.ckjar));
    }
    ["get"](l1ilii, l1l1li = () => {}) {
      l1ilii.headers && (delete l1ilii.headers["Content-Type"], delete l1ilii.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (l1ilii.headers = l1ilii.headers || {}, Object.assign(l1ilii.headers, {
        "X-Surge-Skip-Scripting": false
      })), $httpClient.get(l1ilii, (lllIli, illil, l11il1) => {
        !lllIli && illil && (illil.body = l11il1, illil.statusCode = illil.status);
        l1l1li(lllIli, illil, l11il1);
      })) : this.isQuanX() ? (this.isNeedRewrite && (l1ilii.opts = l1ilii.opts || {}, Object.assign(l1ilii.opts, {
        "hints": false
      })), $task.fetch(l1ilii).then(lII1II => {
        const {
          statusCode: I11li,
          statusCode: IliIl,
          headers: li1I11,
          body: I1i1iI
        } = lII1II;
        l1l1li(null, {
          "status": I11li,
          "statusCode": IliIl,
          "headers": li1I11,
          "body": I1i1iI
        }, I1i1iI);
      }, liI1I => l1l1li(liI1I))) : this.isNode() && (this.initGotEnv(l1ilii), this.got(l1ilii).on("redirect", (l1illl, l11ill) => {
        try {
          {
            if (l1illl.headers["set-cookie"]) {
              const l1illi = l1illl.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
              l1illi && this.ckjar.setCookieSync(l1illi, null);
              l11ill.cookieJar = this.ckjar;
            }
          }
        } catch (iiIll) {
          this.logErr(iiIll);
        }
      }).then(illiI => {
        const {
          statusCode: ii1Il1,
          statusCode: lIlI11,
          headers: iiIli,
          body: l1I
        } = illiI;
        l1l1li(null, {
          "status": ii1Il1,
          "statusCode": lIlI11,
          "headers": iiIli,
          "body": l1I
        }, l1I);
      }, li1I1i => {
        {
          const {
            message: l1illI,
            response: illi1
          } = li1I1i;
          l1l1li(l1illI, illi1, illi1 && illi1.body);
        }
      }));
    }
    ["post"](liI11, lIlI1I = () => {}) {
      {
        if (liI11.body && liI11.headers && !liI11.headers["Content-Type"] && (liI11.headers["Content-Type"] = "application/json"), liI11.headers && delete liI11.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (liI11.headers = liI11.headers || {}, Object.assign(liI11.headers, {
          "X-Surge-Skip-Scripting": false
        })), $httpClient.post(liI11, (iiIl1, lIlI1l, ii1Ili) => {
          !iiIl1 && lIlI1l && (lIlI1l.body = ii1Ili, lIlI1l.statusCode = lIlI1l.status);
          lIlI1I(iiIl1, lIlI1l, ii1Ili);
        });else {
          if (this.isQuanX()) liI11.method = "POST", this.isNeedRewrite && (liI11.opts = liI11.opts || {}, Object.assign(liI11.opts, {
            "hints": false
          })), $task.fetch(liI11).then(I1Ii1I => {
            {
              const {
                statusCode: llIIl,
                statusCode: llIIi,
                headers: IiI1Il,
                body: iiIii
              } = I1Ii1I;
              lIlI1I(null, {
                "status": llIIl,
                "statusCode": llIIi,
                "headers": IiI1Il,
                "body": iiIii
              }, iiIii);
            }
          }, iiIil => lIlI1I(iiIil));else {
            if (this.isNode()) {
              this.initGotEnv(liI11);
              const {
                url: IilI11,
                ...llili
              } = liI11;
              this.got.post(IilI11, llili).then(iiII1 => {
                const {
                  statusCode: l1111I,
                  statusCode: llill,
                  headers: iI1I11,
                  body: l11111
                } = iiII1;
                lIlI1I(null, {
                  "status": l1111I,
                  "statusCode": llill,
                  "headers": iI1I11,
                  "body": l11111
                }, l11111);
              }, I1111 => {
                {
                  const {
                    message: i1Ii,
                    response: i1Il
                  } = I1111;
                  lIlI1I(i1Ii, i1Il, i1Il && i1Il.body);
                }
              });
            }
          }
        }
      }
    }
    ["time"](l1111i, il1IIi = null) {
      const i1II = il1IIi ? new Date(il1IIi) : new Date();
      let iI1I1I = {
        "M+": i1II.getMonth() + 1,
        "d+": i1II.getDate(),
        "H+": i1II.getHours(),
        "m+": i1II.getMinutes(),
        "s+": i1II.getSeconds(),
        "q+": Math.floor((i1II.getMonth() + 3) / 3),
        "S": i1II.getMilliseconds()
      };
      /(y+)/.test(l1111i) && (l1111i = l1111i.replace(RegExp.$1, (i1II.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let I111I in iI1I1I) new RegExp("(" + I111I + ")").test(l1111i) && (l1111i = l1111i.replace(RegExp.$1, 1 == RegExp.$1.length ? iI1I1I[I111I] : ("00" + iI1I1I[I111I]).substr(("" + iI1I1I[I111I]).length)));
      return l1111i;
    }
    ["msg"](I11I11 = lliIil, il1l1I = "", i1Ili1 = "", l1111l) {
      const I111i = Illii1 => {
        if (!Illii1) return Illii1;
        if ("string" == typeof Illii1) return this.isLoon() ? Illii1 : this.isQuanX() ? {
          "open-url": Illii1
        } : this.isSurge() ? {
          "url": Illii1
        } : undefined;
        if ("object" == typeof Illii1) {
          {
            if (this.isLoon()) {
              let i1IliI = Illii1.openUrl || Illii1.url || Illii1["open-url"],
                lI1I1 = Illii1.mediaUrl || Illii1["media-url"];
              return {
                "openUrl": i1IliI,
                "mediaUrl": lI1I1
              };
            }
            if (this.isQuanX()) {
              let I1lI1 = Illii1["open-url"] || Illii1.url || Illii1.openUrl,
                l11lI1 = Illii1["media-url"] || Illii1.mediaUrl;
              return {
                "open-url": I1lI1,
                "media-url": l11lI1
              };
            }
            if (this.isSurge()) {
              let lI1II = Illii1.url || Illii1.openUrl || Illii1["open-url"];
              return {
                "url": lI1II
              };
            }
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(I11I11, il1l1I, i1Ili1, I111i(l1111l)) : this.isQuanX() && $notify(I11I11, il1l1I, i1Ili1, I111i(l1111l))), !this.isMuteLog) {
        {
          let i1Ilii = ["", "==============📣系统通知📣=============="];
          i1Ilii.push(I11I11);
          il1l1I && i1Ilii.push(il1l1I);
          i1Ili1 && i1Ilii.push(i1Ili1);
          console.log(i1Ilii.join("\n"));
          this.logs = this.logs.concat(i1Ilii);
        }
      }
    }
    ["log"](...llI11) {
      llI11.length > 0 && (this.logs = [...this.logs, ...llI11]);
      console.log(llI11.join(this.logSeparator));
    }
    ["logErr"](IlIIl1, IliiIl) {
      const iili1i = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      iili1i ? this.log("", "❗️" + this.name + ", 错误!", IlIIl1.stack) : this.log("", "❗️" + this.name + ", 错误!", IlIIl1);
    }
    ["wait"](l11lII) {
      return new Promise(IliiIi => setTimeout(IliiIi, l11lII));
    }
    ["done"](I1lII = {}) {
      {
        const lii1I1 = new Date().getTime(),
          il1l1l = (lii1I1 - this.startTime) / 1000;
        this.log("", "🔔" + this.name + ", 结束! 🕛 " + il1l1l + " 秒");
        this.log();
        (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(I1lII);
      }
    }
  }(lliIil, IIi1iI);
}