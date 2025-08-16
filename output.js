//Sat Aug 16 2025 03:52:24 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const ll1I1l = new iili("联通安全管家任务"),
  iilI = ll1I1l.isNode() ? require("./sendNotify") : "",
  IIilI1 = 1,
  li1Il1 = 0,
  {
    v4: i1ii1I
  } = require("uuid"),
  iil1 = i1ii1I(),
  iiIIiI = require("qs"),
  i1liII = require("crypto");
let ilII1i = process.env.chinaUnicomCookie,
  ill1I = "",
  ilII1l = "";
ckArr = ilII1i.split("&");
IIi11i("【debug】 这是你的账号数组:\n " + ckArr);
!(async () => {
  ckArr = ilII1i.split("&");
  await iiIIlI();
  for (let I11liI = 0; I11liI < ckArr.length; I11liI++) {
    let ilIilI = I11liI + 1;
    console.log("------------- 开始【第 " + ilIilI + " 个账号】-------------");
    ilII1l = ckArr[I11liI].split("&");
    IIi11i("【debug】 这是你第 " + ilIilI + " 账号信息:\n " + ilII1l);
    await IIi11I();
    await ll1I1l.wait(2000);
    if (num1 == 1) {
      console.log("当前online过期，跳过...");
      continue;
    }
    customDateString = Ili1ll();
    await ll1I1l.wait(2000);
    await IIilII();
    await i1liIi();
    const iIlIl1 = new Date().getMonth();
    if (iIlIl1 === 7) {
      {
        for (let Iili11 = 0; Iili11 < 10; Iili11++) {
          await i1ii1l();
          await ll1I1l.wait(800);
        }
        await iiIIil();
        await iiIIil();
      }
    }
    const lli1iI = require("axios");
    let I1II1I = {
      "method": "GET",
      "url": "https://m.client.10010.com/mobileService/openPlatform/openPlatLineNew.htm?appName=shouting&clientid=1001000003&to_url=https://panservice.mail.wo.cn/h5/activitymobile/turn-template?activityId%3D6",
      "headers": {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 unicom{version:iphone_c@11.0800}",
        "Cookie": "PvSessionId=" + customDateString + "" + iil1 + ";c_mobile=" + num1 + "; c_version=iphone_c@11.0800; city=036|" + cityCode + "|90063345|-99;devicedId=" + iil1 + "; ecs_token=" + ecs_token + ";t3_token=" + t3_token + ""
      },
      "maxRedirects": 0
    };
    await lli1iI.request(I1II1I).catch(ilIili => {
      wenb = ilIili.request.res.rawHeaders[13];
      ticket1 = wenb.match(/ticket=([^&]+)/);
      ticket = ticket1[1];
    });
    req = Math.floor(89999 * Math.random()) + 100000;
    sjc13 = Math.round(new Date().getTime()).toString();
    const iI1I = "HandheldHallAutoLogin" + sjc13 + "" + req + "100002",
      liIiiI = i1liII.createHash("md5");
    liIiiI.update(iI1I);
    md5Hash = liIiiI.digest("hex");
    console.log("获取ck中，等待一会...");
    await iiIIii();
    const l11Iii = require("request"),
      IIllii = JSON.stringify({
        "activityId": "MjQ=",
        "id": ypid
      }),
      IIllil = {
        "method": "POST",
        "url": "https://panservice.mail.wo.cn/activity/activity-task/vote",
        "headers": {
          "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) LianTongYunPan/4.0.2 (iPhone; iOS 16.6)",
          "Accept": "application/json, text/plain, */*",
          "Content-Type": "application/json",
          "Sec-Fetch-Mode": "cors",
          "clientId": "1001000165",
          "Origin": "https://panservice.mail.wo.cn",
          "Sec-Fetch-Dest": "empty",
          "X-YP-Access-Token": yptoken,
          "Sec-Fetch-Site": "same-origin",
          "token": yptoken,
          "X-YP-Client-Id": "1001000165",
          "Accept-Language": "zh-CN,zh-Hans;q=0.9",
          "X-SH-Access-Token": "",
          "source-type": "woapi"
        },
        "body": IIllii
      };
    l11Iii(IIllil, function (ilIill, Il1l1l, iIlIil) {
      if (ilIill) throw new Error(ilIill);
    });
    const Il1l1I = JSON.stringify({
        "activityId": "MjQ=",
        "id": ypid
      }),
      lIII = {
        "method": "POST",
        "url": "https://panservice.mail.wo.cn/activity/activity-task/vote",
        "headers": {
          "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) LianTongYunPan/4.0.2 (iPhone; iOS 16.6)",
          "Accept": "application/json, text/plain, */*",
          "Content-Type": "application/json",
          "Sec-Fetch-Mode": "cors",
          "clientId": "1001000165",
          "Origin": "https://panservice.mail.wo.cn",
          "Sec-Fetch-Dest": "empty",
          "X-YP-Access-Token": yptoken,
          "Sec-Fetch-Site": "same-origin",
          "token": yptoken,
          "X-YP-Client-Id": "1001000165",
          "Accept-Language": "zh-CN,zh-Hans;q=0.9",
          "X-SH-Access-Token": "",
          "source-type": "woapi"
        },
        "body": Il1l1I
      };
    l11Iii(lIII, function (IIlll1, Il1l1i, I1II11) {
      if (IIlll1) throw new Error(IIlll1);
    });
    const iI11 = JSON.stringify({
        "activityId": "MjQ=",
        "id": ypid
      }),
      liIii1 = {
        "method": "POST",
        "url": "https://panservice.mail.wo.cn/activity/activity-task/vote",
        "headers": {
          "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) LianTongYunPan/4.0.2 (iPhone; iOS 16.6)",
          "Accept": "application/json, text/plain, */*",
          "Content-Type": "application/json",
          "Sec-Fetch-Mode": "cors",
          "clientId": "1001000165",
          "Origin": "https://panservice.mail.wo.cn",
          "Sec-Fetch-Dest": "empty",
          "X-YP-Access-Token": yptoken,
          "Sec-Fetch-Site": "same-origin",
          "token": yptoken,
          "X-YP-Client-Id": "1001000165",
          "Accept-Language": "zh-CN,zh-Hans;q=0.9",
          "X-SH-Access-Token": "",
          "source-type": "woapi"
        },
        "body": iI11
      };
    l11Iii(liIii1, function (iI1, I111Il, lIl1I) {
      if (iI1) throw new Error(iI1);
    });
    await l1Iil1();
    await ll1I1l.wait(5000);
    oldjf = null;
    headers = {
      "User-Agent": "ChinaUnicom4.x/12.3.1 (com.chinaunicom.mobilebusiness; build:77; iOS 16.6.0) Alamofire/4.7.3 unicom{version:iphone_c@12.0301}",
      "Accept": "*",
      "Accept-Encoding": "gzip;q=1.0, compress;q=0.5",
      "Content-Type": "application/json",
      "auth-sa-token": token,
      "Accept-Language": "zh-Hans-CN;q=1.0",
      "clientType": "uasp_unicom_applet"
    };
    headerss = {
      "ticket": decodeURIComponent(ticket),
      "Cookie": "_jea_id=" + jeaId,
      "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 unicom{version:iphone_c@12.0301};ltst;OSVersion/16.6",
      "Accept": "application/json, text/plain, */*",
      "Content-Type": "application/json",
      "content-type": "application/json;charset=UTF-8",
      "partnersid": "1702",
      "sec-fetch-site": "same-origin",
      "accept-language": "zh-CN,zh-Hans;q=0.9",
      "sec-fetch-mode": "cors",
      "origin": "https://m.jf.10010.com",
      "clienttype": "uasp_unicom_applet",
      "sec-fetch-dest": "empty"
    };
    await llIi11();
    await lIII1();
    await ll1I1l.wait(30000);
    await llIi11();
  }
  await iill(ill1I);
})().catch(I111Ii => ll1I1l.logErr(I111Ii)).finally(() => ll1I1l.done());
async function IIilII() {
  let l11Iil = {
      "url": "https://m.client.10010.com/edop_ng/getTicketByNative?token=" + ecs_token + "&appId=edop_unicom_3a6cc75a",
      "headers": {
        "Cookie": "PvSessionId=" + customDateString + "" + iil1 + ";c_mobile=" + num1 + "; c_version=iphone_c@11.0800; city=036|" + cityCode + "|90063345|-99;devicedId=" + iil1 + "; ecs_token=" + ecs_token + ";t3_token=" + t3_token + "",
        "Accept": "*",
        "Connection": "keep-alive",
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept-Encoding": "gzip;q=1.0, compress;q=0.5",
        "Host": "m.client.10010.com",
        "User-Agent": "ChinaUnicom4.x/12.3.1 (com.chinaunicom.mobilebusiness; build:77; iOS 16.6.0) Alamofire/4.7.3 unicom{version:iphone_c@12.0301}",
        "Accept-Language": "zh-Hans-CN;q=1.0"
      }
    },
    Iili1I = await iiiiIi(l11Iil, "ticket");
  ticket1 = Iili1I.ticket;
}
async function l1Iil1() {
  let l11Il1 = {
      "url": "https://uca.wo116114.com/api/v1/auth/getTicket?product_line=uasp&entry_point=h5&entry_point_id=edop_unicom_3a6cc75a",
      "headers": {
        "User-Agent": "ChinaUnicom4.x/12.3.1 (com.chinaunicom.mobilebusiness; build:77; iOS 16.6.0) Alamofire/4.7.3 unicom{version:iphone_c@12.0301}",
        "Accept": "*",
        "Accept-Encoding": "gzip;q=1.0, compress;q=0.5",
        "Content-Type": "application/json",
        "auth-sa-token": token,
        "Accept-Language": "zh-Hans-CN;q=1.0",
        "clientType": "uasp_unicom_applet"
      },
      "body": "{\"productId\": \"91311616\",\"phone\": \"" + num1 + "\"}"
    },
    Iili1i = await iiiiIl(l11Il1, "ticket");
  ticket = Iili1i.data.ticket;
  const IIiIli = require("axios");
  let lIl1l = JSON.stringify({
      "activityId": "s747395186896173056",
      "partnersId": "1702"
    }),
    iIlIii = {
      "method": "POST",
      "url": "https://m.jf.10010.com/jf-external-application/page/query",
      "headers": {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 unicom{version:iphone_c@12.0301};ltst;OSVersion/16.6",
        "Accept": "application/json, text/plain, */*",
        "Content-Type": "application/json",
        "content-type": "application/json;charset=UTF-8",
        "partnersid": "1702",
        "ticket": decodeURIComponent(ticket),
        "sec-fetch-site": "same-origin",
        "accept-language": "zh-CN,zh-Hans;q=0.9",
        "sec-fetch-mode": "cors",
        "origin": "https://m.jf.10010.com",
        "clienttype": "uasp_unicom_applet",
        "sec-fetch-dest": "empty"
      },
      "data": lIl1l
    };
  IIiIli.request(iIlIii).then(Il1III => {
    {
      const ll1I = Il1III.headers["set-cookie"],
        Ii1lii = ll1I.find(lii11 => lii11.startsWith("_jea_id="));
      jeaId = Ii1lii?.["split"](";")[0]?.["split"]("=")[1] || "未找到 Cookie";
    }
  }).catch(liIili => console.log("error", liIili));
}
async function IIiIl() {
  let Ii1lil = {
      "url": "https://uca.wo116114.com/sjgj/woAssistant/umm/configs/v1/config?product_line=uasp&entry_point=h5&entry_point_id=wxdefbc1986dc757a6",
      "headers": headers,
      "body": "{\"contents\":[{\"content\":\"13088330789\",\"contentTag\":\"疑似诈骗\"}],\"operationType\":0,\"type\":1,\"blacklistSource\":0,\"productId\":\"91242950\"}"
    },
    ll11 = await iiiiIl(Ii1lil, "黑名单");
}
async function iiiiI1() {
  let lliI1 = {
      "url": "https://uca.wo116114.com/sjgj/woAssistant/umm/configs/v1/config?product_line=uasp&entry_point=h5&entry_point_id=wxdefbc1986dc757a6",
      "headers": headers,
      "body": "{\"contents\":[{\"content\":\"13088330789\",\"contentTag\":\"疑似诈骗\",\"nickname\":null,\"configTime\":null,\"checked\":true}],\"type\":1,\"operationType\":1,\"productId\":\"91242950\"}"
    },
    iiI11l = await iiiiIl(lliI1, "删除黑名单");
}
async function IIiIi() {
  let Il1II1 = {
      "url": "https://uca.wo116114.com/sjgj/unicomAssistant/uasp/configs/v1/addressBook/saveTagPhone?product_line=uasp&entry_point=h5&entry_point_id=wxdefbc1986dc757a6",
      "headers": headers,
      "body": "{\"tagPhoneNo\":\"13088330789\",\"tagIds\":[26],\"status\":0,\"productId\":\"91311616\"}"
    },
    iiilI = await iiiiIl(Il1II1, "标记");
}
async function i1ii1i() {
  let Il1IIl = {
      "url": "https://uca.wo116114.com/sjgj/unicomAssistant/uasp/configs/v1/addressBookBatchConfig?product_line=uasp&entry_point=h5&entry_point_id=edop_unicom_3a6cc75a",
      "headers": headers,
      "body": "{\"addressBookDTOList\":[{\"addressBookPhoneNo\":\"13105750575\",\"addressBookName\":\"可乐\"}],\"productId\":\"91311616\",\"opType\":\"1\"}"
    },
    l11il = await iiiiIl(Il1IIl, "通讯录");
}
async function iiii() {
  let iiil1 = {
      "url": "https://uca.wo116114.com/sjgj/woAssistant/umm/configs/v1/config?product_line=uasp&entry_point=h5&entry_point_id=wxdefbc1986dc757a6",
      "headers": headers,
      "body": "{\"contents\":[{\"name\":\"rings-once\",\"contentTag\":\"8\",\"contentName\":\"响一声\",\"content\":\"0\",\"icon\":\"alerting\"}],\"operationType\":0,\"type\":3,\"productId\":\"91311616\"}"
    },
    liIil1 = await iiiiIl(iiil1, "拦截");
}
async function iiil() {
  let lli1l1 = {
      "url": "https://uca.wo116114.com/sjgj/unicomAssistant/uasp/configs/v1/weeklySwitchStatus?product_line=uasp&entry_point=h5&entry_point_id=wxdefbc1986dc757a6",
      "headers": headers,
      "body": "{\"productId\":\"91311616\"}"
    },
    lii1l = await iiiiIl(lli1l1, "查看");
}
async function li1Iil() {
  let lliIl = {
      "url": "https://uca.wo116114.com/sjgj/unicomAssistant/uasp/report/v1/queryKeyData?product_line=uasp&entry_point=h5&entry_point_id=wxdefbc1986dc757a6",
      "headers": headers,
      "body": "{\"productId\":\"91311616\"}"
    },
    lliIi = await iiiiIl(lliIl, "查看");
}
async function ill11() {
  let iiiil = {
      "url": "https://uca.wo116114.com/sjgj/unicomAssistant/uasp/report/v1/weeklySummary?product_line=uasp&entry_point=h5&entry_point_id=wxdefbc1986dc757a6",
      "headers": headers,
      "body": "{\"productId\":\"91311616\"}"
    },
    iiIlII = await iiiiIl(iiiil, "查看");
}
async function i1ii1l() {
  let I1II1l = iiIIiI.stringify({
      "activityId": "2"
    }),
    lli1ii = {
      "url": "https://vvm.wo116114.com/activitys/api/h5/activity/quarter/shareToOther",
      "headers": {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090a13) UnifiedPCWindowsWechat(0xf2540615) XWEB/14199",
        "Accept": "application/json, text/plain, */*",
        "Content-Type": "application/x-www-form-urlencoded",
        "token": token,
        "Origin": "https://vvm.wo116114.com",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Referer": "https://vvm.wo116114.com/activitys/",
        "Accept-Language": "zh-CN,zh;q=0.9"
      },
      "body": I1II1l
    },
    I1II1i = await iiiiIl(lli1ii, "shareToOther");
  console.log(I1II1i.msg);
}
async function iiIIil() {
  let lii1I = iiIIiI.stringify({
      "activityId": "2"
    }),
    IIiIiI = {
      "url": "https://vvm.wo116114.com/activitys/api/h5/activity/quarter/quarterDrawPrize",
      "headers": {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090a13) UnifiedPCWindowsWechat(0xf2540615) XWEB/14199",
        "Accept": "application/json, text/plain, */*",
        "Content-Type": "application/x-www-form-urlencoded",
        "token": token,
        "Origin": "https://vvm.wo116114.com",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Referer": "https://vvm.wo116114.com/activitys/",
        "Accept-Language": "zh-CN,zh;q=0.9"
      },
      "body": lii1I
    },
    ll1l = await iiiiIl(IIiIiI, "quarterDrawPrize");
  ll1l.code == 0 ? console.log(ll1l.data.prizeName) : console.log(ll1l.msg);
}
async function iiIIii() {
  let iIlIll = {
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
      "body": "{\"header\": {\"key\": \"HandheldHallAutoLogin\",\"resTime\": " + sjc13 + ",\"reqSeq\": " + req + ",\"channel\": \"100002\",\"version\": \"\",\"sign\": \"" + md5Hash + "\"},\"body\": {\"clientId\": \"1001000165\",\"ticket\": \"" + ticket + "\"}}"
    },
    il11I1 = await iiiiIl(iIlIll, "token");
  yptoken = il11I1.RSP.DATA.token;
}
async function i1liIi() {
  let i11llI = {
      "url": "https://uca.wo116114.com/api/v1/auth/ticket?product_line=uasp&entry_point=h5&entry_point_id=edop_unicom_3a6cc75a",
      "headers": {
        "User-Agent": "ChinaUnicom4.x/12.3.1 (com.chinaunicom.mobilebusiness; build:77; iOS 16.6.0) Alamofire/4.7.3 unicom{version:iphone_c@12.0301}",
        "Accept": "*",
        "Accept-Encoding": "gzip;q=1.0, compress;q=0.5",
        "Content-Type": "application/json",
        "Accept-Language": "zh-Hans-CN;q=1.0",
        "clientType": "uasp_unicom_applet"
      },
      "body": "{\"productId\": \"\",\"type\": 1,\"ticket\": \"" + ticket1 + "\"}"
    },
    iIIi1 = await iiiiIl(i11llI, "token");
  token = iIIi1.data.access_token;
  console.log(token);
}
async function i1liIl(iiI1I1) {
  let I1iI = {
      "url": "https://m.jf.10010.com/jf-external-application/jftask/receive",
      "headers": headerss,
      "body": "{\"taskCode\": \"" + iiI1I1 + "\"}"
    },
    I1IiiI = await iiiiIl(I1iI, "领取积分");
  I1IiiI.data.score ? console.log("领取" + I1IiiI.data.score + I1IiiI.msg) : console.log("领取" + I1IiiI.msg);
}
async function IiIill(i11ll1, iIiIII) {
  let iIlIl = {
      "url": "https://m.jf.10010.com/jf-external-application/jftask/toFinish",
      "headers": headerss,
      "body": "{\"taskCode\": \"" + i11ll1 + "\"}"
    },
    iIlIi = await iiiiIl(iIlIl, "开启任务 " + iIiIII);
  xinxi = iIlIi.msg;
  if (iIiIII.includes("添加黑名单")) await iiiiI1(), await IIiIl();else {
    if (iIiIII.includes("号码标记")) await IIiIi();else {
      if (iIiIII.includes("同步通讯录")) await i1ii1i();else {
        if (iIiIII.includes("骚扰拦截设置")) await iiii();else {
          if (iIiIII.includes("查看周报")) {
            await iiil();
            await li1Iil();
            await ill11();
          } else throw new Error("任务 " + iIiIII + " 需要手动完成");
        }
      }
    }
  }
}
async function li1Iii(lIIlll) {
  let ll1ii1 = {
      "url": "https://m.jf.10010.com/jf-external-application/jftask/sign",
      "headers": headerss,
      "body": "{\"taskCode\": \"" + lIIlll + "\"}"
    },
    i11li1 = await iiiiIl(ll1ii1, "完成签到");
  xinxi = i11li1.msg;
}
async function lIII1() {
  let IiIlII = {
      "url": "https://m.jf.10010.com/jf-external-application/jftask/taskDetail",
      "headers": headerss,
      "body": "{}"
    },
    iI11i = await iiiiIl(IiIlII, "查询任务");
  const I1Iili = iI11i.data.taskDetail.taskList;
  for (const lIIll1 of I1Iili) {
    {
      const {
        taskCode: Il1ii,
        taskName: IiI11l,
        finishCount: iI1i1I,
        needCount: iIil1i,
        finishText: IiI11i
      } = lIIll1;
      console.log(IiI11l + "：" + iI1i1I + "/" + iIil1i + " - " + IiI11i);
      if (iI1i1I !== iIil1i) {
        const iIil1l = iIil1i - iI1i1I;
        console.log("任务未完成，需要再执行 " + iIil1l + " 次");
        for (let iIil11 = 0; iIil11 < iIil1l; iIil11++) {
          await ll1I1l.wait(3000);
          try {
            IiI11l.includes("签到") ? await li1Iii(Il1ii) : await IiIill(Il1ii, IiI11l);
            console.log("第 " + (iIil11 + 1) + " 次执行" + IiI11l + "任务完成");
            await ll1I1l.wait(10000);
            await i1liIl(Il1ii);
            console.log(IiI11l + " 奖励领取成功");
          } catch (l1li1) {
            console.error("执行 " + Il1ii + " 时出错: " + l1li1.message);
            break;
          }
        }
      } else {
        if (IiI11i == "待领取") {
          try {
            await ll1I1l.wait(3000);
            await i1liIl(Il1ii);
            console.log(IiI11l + " 奖励领取成功");
          } catch (I1Iil1) {
            console.error("领取 " + Il1ii + " 奖励时出错: " + I1Iil1.message);
          }
        } else console.log("任务已完成且奖励已领取");
      }
      console.log("---------------------");
    }
  }
}
async function llIi11() {
  let IlIil1 = {
      "url": "https://m.jf.10010.com/jf-external-application/jftask/userInfo",
      "headers": headerss,
      "body": "{}"
    },
    lIIlil = await iiiiIl(IlIil1, "查询积分");
  if (oldjf == null) oldjf = lIIlil.data.availableScore;else {
    const llilli = lIIlil.data.availableScore;
    console.log("用户" + num1 + "运行前积分：" + oldjf + ",运行后积分" + llilli + "，本次运行获得" + (llilli - oldjf));
    ill1I += "\n用户" + num1 + "运行前积分：" + oldjf + ",运行后积分" + llilli + "，本次运行获得" + (llilli - oldjf);
  }
}
async function IIi11I() {
  let l111ii = {
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
      "body": "deviceModel=iPhone&step=background&token_online=" + ilII1l + "&version=iphone_c%4011.0700"
    },
    i1III1 = await iiiiIl(l111ii, "获取");
  try {
    t3_token = i1III1.t3_token;
    private_token = i1III1.private_token;
    ecs_token = i1III1.ecs_token;
    num1 = i1III1.list[0].num;
    cityCode = i1III1.list[0].cityCode;
  } catch (IiiiIi) {
    num1 = "1";
  }
}
async function iiIIlI() {
  let I1iiI = {
      "url": "https://gitee.com/kele2233/genxin/raw/master/ydid.json",
      "headers": {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.43(0x18002b2d) NetType/WIFI Language/zh_CN"
      }
    },
    l111l1 = await iiiiIi(I1iiI, "ll");
  hqsjc = l111l1.ymsjc;
  gong = l111l1.gong;
  ypid = l111l1.ypid;
  dqsjc = Math.round(new Date().getTime() / 1000).toString();
  hqsjc > dqsjc ? console.log("公告：" + l111l1.gh) : (console.error(gong), process.exit());
}
async function IIl1II(il1lil, I1iil) {
  return new Promise(illi1i => {
    let illi1l = [];
    if (il1lil) {
      {
        if (il1lil.indexOf("@") !== -1) il1lil.split("@").forEach(Iilii => {
          illi1l.push(Iilii);
        });else {
          if (il1lil.indexOf("\n") !== -1) {
            il1lil.split("\n").forEach(iiliiI => {
              illi1l.push(iiliiI);
            });
          } else illi1l.push(il1lil);
        }
        illi1i(illi1l);
      }
    } else console.log("\n 【" + ll1I1l.name + "】：未填写变量 " + I1iil);
  });
}
async function iill(lIiI11) {
  if (!lIiI11) return;
  if (IIilI1 > 0) {
    if (ll1I1l.isNode()) {
      {
        let Il11II = require("./sendNotify");
        await Il11II.sendNotify(ll1I1l.name, lIiI11);
      }
    } else ll1I1l.msg(lIiI11);
  } else {
    console.log(lIiI11);
  }
}
function iiIIl1(iililI) {
  iililI = iililI || 32;
  let Iilli = "QWERTYUIOPASDFGHJKLZXCVBNM1234567890",
    i1Il1I = Iilli.length,
    lIiiil = "";
  for (i = 0; i < iililI; i++) lIiiil += Iilli.charAt(Math.floor(Math.random() * i1Il1I));
  return lIiiil;
}
let llIi1I = "";
function lIlIii(Il11Ii) {
  llIi1I = Il11Ii;
}
function li1Ili(Il11Il) {
  if (llIi1I === Il11Il) console.log("Reached mark " + Il11Il);else {
    console.log("Invalid mark: " + Il11Il);
  }
}
function I11lil(IillI) {
  var IiiiI1 = new Date(IillI * 1000);
  var IiIIlI = IiiiI1.getFullYear();
  var i111II = String(IiiiI1.getMonth() + 1).padStart(2, "0");
  var I11Il1 = String(IiiiI1.getDate()).padStart(2, "0");
  var IiIIl1 = String(IiiiI1.getHours()).padStart(2, "0");
  var IIi1I1 = String(IiiiI1.getMinutes()).padStart(2, "0");
  var lIiilI = String(IiiiI1.getSeconds()).padStart(2, "0");
  var I11IlI = IiIIlI + "-" + i111II + "-" + I11Il1 + " " + IiIIl1 + ":" + IIi1I1 + ":" + lIiilI;
  return I11IlI;
}
function Ili1li(iilili, Il1lIi) {
  return Math.round(Math.random() * (Il1lIi - iilili) + iilili);
}
function lIlIil() {
  const iiiii1 = new Date(),
    IIill1 = iiiii1.getHours(),
    iIII = new Date(iiiii1.getFullYear(), iiiii1.getMonth(), iiiii1.getDate(), IIill1 + 1, 0, 0, 0);
  return iIII.getTime();
}
function I11lii() {
  const Iiii1I = new Date(),
    II1il1 = Iiii1I.getMinutes(),
    I11111 = new Date(Iiii1I.getFullYear(), Iiii1I.getMonth(), Iiii1I.getDate(), Iiii1I.getHours(), II1il1 === 0 ? 1 : II1il1 + 1, 0, 0);
  I11111.getMinutes() === 0 && I11111.getHours() !== Iiii1I.getHours() && I11111.setDate(Iiii1I.getDate() + (I11111.getHours() === 0 ? 1 : 0));
  return I11111.getTime();
}
function li1Ill() {
  return Math.round(new Date().getTime()).toString();
}
function Ili1ll() {
  const l1Ili = new Date(),
    i1II11 = String(l1Ili.getFullYear()).padStart(4, "0"),
    l1Ill = String(l1Ili.getMonth() + 1).padStart(2, "0"),
    lllllI = String(l1Ili.getDate()).padStart(2, "0"),
    Iiii1l = String(l1Ili.getHours()).padStart(2, "0"),
    IiliIi = String(l1Ili.getMinutes()).padStart(2, "0"),
    Iiii1i = String(l1Ili.getSeconds()).slice(0, 2);
  return i1II11 + l1Ill + lllllI + Iiii1l + IiliIi + Iiii1i;
}
function IIl1Il() {
  return Math.round(new Date().getTime() / 1000).toString();
}
function l1Iili() {
  let Il1lIl = new Date();
  h = Il1lIl.getHours();
  return h;
}
function IIi11l() {
  let I1111I = new Date();
  m = I1111I.getMinutes();
  return m;
}
function l1Iill(I1I11 = 3000) {
  return new Promise(iiiiil => {
    let IIl1lI = {
      "url": "https://keai.icu/apiwyy/api"
    };
    ll1I1l.get(IIl1lI, async (illiII, li1IIl, llllil) => {
      try {
        llllil = JSON.parse(llllil);
        console.log("\n 【网抑云时间】: " + llllil.content + "  by--" + llllil.music);
      } catch (II1ill) {
        ll1I1l.logErr(II1ill, li1IIl);
      } finally {
        iiiiil();
      }
    }, I1I11);
  });
}
async function iiiiIi(II1ili, ilill, li1IIi = 3000) {
  return new Promise(iIIi => {
    {
      let il11li = II1ili;
      if (!ilill) {
        {
          let ililI = arguments.callee.toString(),
            II1ilI = /function\s*(\w*)/i,
            iII1ii = II1ilI.exec(ililI);
          ilill = iII1ii[1];
        }
      }
      li1Il1 && (console.log("\n 【debug】=============== 这是 " + ilill + " 请求 url ==============="), console.log(il11li));
      ll1I1l.get(il11li, async (li1III, lIii1, IIl1il) => {
        try {
          {
            li1Il1 && (console.log("\n\n 【debug】===============这是 " + ilill + " 返回data=============="), console.log(IIl1il), console.log("======"), console.log(JSON.parse(IIl1il)));
            let iiiili = JSON.parse(IIl1il);
            iIIi(iiiili);
          }
        } catch (Il1111) {
          console.log(li1III, lIii1);
        } finally {
          iIIi();
        }
      }, li1IIi);
    }
  });
}
async function iiiiIl(Ii11li, il11, iliil = 200) {
  return new Promise(lIlIIl => {
    let I11lIi = Ii11li;
    if (!il11) {
      let lII1i1 = arguments.callee.toString(),
        IIl1i1 = /function\s*(\w*)/i,
        Ii11lI = IIl1i1.exec(lII1i1);
      il11 = Ii11lI[1];
    }
    li1Il1 && (console.log("\n 【debug】=============== 这是 " + il11 + " 请求 url ==============="), console.log(I11lIi));
    ll1I1l.post(I11lIi, async (Ii11l1, II1iiI, iII1li) => {
      try {
        li1Il1 && (console.log("\n\n 【debug】===============这是 " + il11 + " 返回data=============="), console.log(iII1li), console.log("======"), console.log(JSON.parse(iII1li)));
        let l111i1 = JSON.parse(iII1li);
        lIlIIl(l111i1);
      } catch (li1l1l) {} finally {
        lIlIIl();
      }
    }, iliil);
  });
}
function IIi11i(...lIiil) {
  li1Il1 && console.log(...lIiil);
}
function iiIIli(IIi11) {
  function ii1(iIi1l1, llllII) {
    return iIi1l1 << llllII | iIi1l1 >>> 32 - llllII;
  }
  function lII1li(llil1l, i1iI1i) {
    var li1iil, i1iI1l, i1lIIi, llil1i, IililI;
    i1lIIi = 2147483648 & llil1l;
    llil1i = 2147483648 & i1iI1i;
    li1iil = 1073741824 & llil1l;
    i1iI1l = 1073741824 & i1iI1i;
    IililI = (1073741823 & llil1l) + (1073741823 & i1iI1i);
    return li1iil & i1iI1l ? 2147483648 ^ IililI ^ i1lIIi ^ llil1i : li1iil | i1iI1l ? 1073741824 & IililI ? 3221225472 ^ IililI ^ i1lIIi ^ llil1i : 1073741824 ^ IililI ^ i1lIIi ^ llil1i : IililI ^ i1lIIi ^ llil1i;
  }
  function lII1ll(liii1, lIllI, i1lIIl) {
    return liii1 & lIllI | ~liii1 & i1lIIl;
  }
  function lIilI(ilIi1I, II1l1I, iiIii1) {
    return ilIi1I & iiIii1 | II1l1I & ~iiIii1;
  }
  function lli1I1(lil1il, I1i1ii, ll1i1i) {
    return lil1il ^ I1i1ii ^ ll1i1i;
  }
  function II1I1i(lil1ii, ll1i1l, I1i1il) {
    return ll1i1l ^ (lil1ii | ~I1i1il);
  }
  function II1I1l(iIi1ii, i11i1l, iIlI, llil11, i11i1i, Iilill, iIl1) {
    iIi1ii = lII1li(iIi1ii, lII1li(lII1li(lII1ll(i11i1l, iIlI, llil11), i11i1i), iIl1));
    return lII1li(ii1(iIi1ii, Iilill), i11i1l);
  }
  function ilIl1I(llil1I, Iilili, iiIiiI, lIlli, llllI1, ilIi1i, lIlll) {
    llil1I = lII1li(llil1I, lII1li(lII1li(lIilI(Iilili, iiIiiI, lIlli), llllI1), lIlll));
    return lII1li(ii1(llil1I, ilIi1i), Iilili);
  }
  function iiI(ilIi1l, li1iiI, IIl1l, lIlii1, IIl1i, liiil, lllIl1) {
    ilIi1l = lII1li(ilIi1l, lII1li(lII1li(lli1I1(li1iiI, IIl1l, lIlii1), IIl1i), lllIl1));
    return lII1li(ii1(ilIi1l, liiil), li1iiI);
  }
  function lIiI(Illi1I, liiii, i11i1I, llil, llii, iiIiil, lllIlI) {
    Illi1I = lII1li(Illi1I, lII1li(lII1li(II1I1i(liiii, i11i1I, llil), llii), lllIlI));
    return lII1li(ii1(Illi1I, iiIiil), liiii);
  }
  function lII1lI(iiIiii) {
    for (var li1ilI, lIliiI = iiIiii.length, liilli = lIliiI + 8, i1ll11 = (liilli - liilli % 64) / 64, ili1l1 = 16 * (i1ll11 + 1), lII1I1 = new Array(ili1l1 - 1), IIl1I = 0, liilll = 0; lIliiI > liilll;) li1ilI = (liilll - liilll % 4) / 4, IIl1I = liilll % 4 * 8, lII1I1[li1ilI] = lII1I1[li1ilI] | iiIiii.charCodeAt(liilll) << IIl1I, liilll++;
    li1ilI = (liilll - liilll % 4) / 4;
    IIl1I = liilll % 4 * 8;
    lII1I1[li1ilI] = lII1I1[li1ilI] | 128 << IIl1I;
    lII1I1[ili1l1 - 2] = lIliiI << 3;
    lII1I1[ili1l1 - 1] = lIliiI >>> 29;
    return lII1I1;
  }
  function lIi1(ili1lI) {
    {
      var iiIilI,
        liiiI,
        lllIil = "",
        iIll = "";
      for (liiiI = 0; 3 >= liiiI; liiiI++) iiIilI = ili1lI >>> 8 * liiiI & 255, iIll = "0" + iiIilI.toString(16), lllIil += iIll.substr(iIll.length - 2, 2);
      return lllIil;
    }
  }
  function lIill(iiIil1) {
    iiIil1 = iiIil1.replace(/\r\n/g, "\n");
    for (var i1ll1I = "", lIliii = 0; lIliii < iiIil1.length; lIliii++) {
      {
        var lIliil = iiIil1.charCodeAt(lIliii);
        128 > lIliil ? i1ll1I += String.fromCharCode(lIliil) : lIliil > 127 && 2048 > lIliil ? (i1ll1I += String.fromCharCode(lIliil >> 6 | 192), i1ll1I += String.fromCharCode(63 & lIliil | 128)) : (i1ll1I += String.fromCharCode(lIliil >> 12 | 224), i1ll1I += String.fromCharCode(lIliil >> 6 & 63 | 128), i1ll1I += String.fromCharCode(63 & lIliil | 128));
      }
    }
    return i1ll1I;
  }
  var iIiI1l,
    iIiI1i,
    lIili,
    II1I1I,
    iIlIIi,
    ilIl1i,
    ilIIIi,
    iIiI11,
    IIi1l,
    IIi1i = [],
    iIlII1 = 7,
    ilIIIl = 12,
    iii = 17,
    lIlI = 22,
    liIiIi = 5,
    iil = 9,
    IlIii1 = 14,
    i1li1I = 20,
    lIl1 = 4,
    i1li11 = 11,
    lII1l1 = 16,
    iIiI1I = 23,
    iIlIII = 6,
    iIIll = 10,
    IIi1I = 15,
    liIiII = 21;
  for (IIi11 = lIill(IIi11), IIi1i = lII1lI(IIi11), ilIl1i = 1732584193, ilIIIi = 4023233417, iIiI11 = 2562383102, IIi1l = 271733878, iIiI1l = 0; iIiI1l < IIi1i.length; iIiI1l += 16) iIiI1i = ilIl1i, lIili = ilIIIi, II1I1I = iIiI11, iIlIIi = IIi1l, ilIl1i = II1I1l(ilIl1i, ilIIIi, iIiI11, IIi1l, IIi1i[iIiI1l + 0], iIlII1, 3614090360), IIi1l = II1I1l(IIi1l, ilIl1i, ilIIIi, iIiI11, IIi1i[iIiI1l + 1], ilIIIl, 3905402710), iIiI11 = II1I1l(iIiI11, IIi1l, ilIl1i, ilIIIi, IIi1i[iIiI1l + 2], iii, 606105819), ilIIIi = II1I1l(ilIIIi, iIiI11, IIi1l, ilIl1i, IIi1i[iIiI1l + 3], lIlI, 3250441966), ilIl1i = II1I1l(ilIl1i, ilIIIi, iIiI11, IIi1l, IIi1i[iIiI1l + 4], iIlII1, 4118548399), IIi1l = II1I1l(IIi1l, ilIl1i, ilIIIi, iIiI11, IIi1i[iIiI1l + 5], ilIIIl, 1200080426), iIiI11 = II1I1l(iIiI11, IIi1l, ilIl1i, ilIIIi, IIi1i[iIiI1l + 6], iii, 2821735955), ilIIIi = II1I1l(ilIIIi, iIiI11, IIi1l, ilIl1i, IIi1i[iIiI1l + 7], lIlI, 4249261313), ilIl1i = II1I1l(ilIl1i, ilIIIi, iIiI11, IIi1l, IIi1i[iIiI1l + 8], iIlII1, 1770035416), IIi1l = II1I1l(IIi1l, ilIl1i, ilIIIi, iIiI11, IIi1i[iIiI1l + 9], ilIIIl, 2336552879), iIiI11 = II1I1l(iIiI11, IIi1l, ilIl1i, ilIIIi, IIi1i[iIiI1l + 10], iii, 4294925233), ilIIIi = II1I1l(ilIIIi, iIiI11, IIi1l, ilIl1i, IIi1i[iIiI1l + 11], lIlI, 2304563134), ilIl1i = II1I1l(ilIl1i, ilIIIi, iIiI11, IIi1l, IIi1i[iIiI1l + 12], iIlII1, 1804603682), IIi1l = II1I1l(IIi1l, ilIl1i, ilIIIi, iIiI11, IIi1i[iIiI1l + 13], ilIIIl, 4254626195), iIiI11 = II1I1l(iIiI11, IIi1l, ilIl1i, ilIIIi, IIi1i[iIiI1l + 14], iii, 2792965006), ilIIIi = II1I1l(ilIIIi, iIiI11, IIi1l, ilIl1i, IIi1i[iIiI1l + 15], lIlI, 1236535329), ilIl1i = ilIl1I(ilIl1i, ilIIIi, iIiI11, IIi1l, IIi1i[iIiI1l + 1], liIiIi, 4129170786), IIi1l = ilIl1I(IIi1l, ilIl1i, ilIIIi, iIiI11, IIi1i[iIiI1l + 6], iil, 3225465664), iIiI11 = ilIl1I(iIiI11, IIi1l, ilIl1i, ilIIIi, IIi1i[iIiI1l + 11], IlIii1, 643717713), ilIIIi = ilIl1I(ilIIIi, iIiI11, IIi1l, ilIl1i, IIi1i[iIiI1l + 0], i1li1I, 3921069994), ilIl1i = ilIl1I(ilIl1i, ilIIIi, iIiI11, IIi1l, IIi1i[iIiI1l + 5], liIiIi, 3593408605), IIi1l = ilIl1I(IIi1l, ilIl1i, ilIIIi, iIiI11, IIi1i[iIiI1l + 10], iil, 38016083), iIiI11 = ilIl1I(iIiI11, IIi1l, ilIl1i, ilIIIi, IIi1i[iIiI1l + 15], IlIii1, 3634488961), ilIIIi = ilIl1I(ilIIIi, iIiI11, IIi1l, ilIl1i, IIi1i[iIiI1l + 4], i1li1I, 3889429448), ilIl1i = ilIl1I(ilIl1i, ilIIIi, iIiI11, IIi1l, IIi1i[iIiI1l + 9], liIiIi, 568446438), IIi1l = ilIl1I(IIi1l, ilIl1i, ilIIIi, iIiI11, IIi1i[iIiI1l + 14], iil, 3275163606), iIiI11 = ilIl1I(iIiI11, IIi1l, ilIl1i, ilIIIi, IIi1i[iIiI1l + 3], IlIii1, 4107603335), ilIIIi = ilIl1I(ilIIIi, iIiI11, IIi1l, ilIl1i, IIi1i[iIiI1l + 8], i1li1I, 1163531501), ilIl1i = ilIl1I(ilIl1i, ilIIIi, iIiI11, IIi1l, IIi1i[iIiI1l + 13], liIiIi, 2850285829), IIi1l = ilIl1I(IIi1l, ilIl1i, ilIIIi, iIiI11, IIi1i[iIiI1l + 2], iil, 4243563512), iIiI11 = ilIl1I(iIiI11, IIi1l, ilIl1i, ilIIIi, IIi1i[iIiI1l + 7], IlIii1, 1735328473), ilIIIi = ilIl1I(ilIIIi, iIiI11, IIi1l, ilIl1i, IIi1i[iIiI1l + 12], i1li1I, 2368359562), ilIl1i = iiI(ilIl1i, ilIIIi, iIiI11, IIi1l, IIi1i[iIiI1l + 5], lIl1, 4294588738), IIi1l = iiI(IIi1l, ilIl1i, ilIIIi, iIiI11, IIi1i[iIiI1l + 8], i1li11, 2272392833), iIiI11 = iiI(iIiI11, IIi1l, ilIl1i, ilIIIi, IIi1i[iIiI1l + 11], lII1l1, 1839030562), ilIIIi = iiI(ilIIIi, iIiI11, IIi1l, ilIl1i, IIi1i[iIiI1l + 14], iIiI1I, 4259657740), ilIl1i = iiI(ilIl1i, ilIIIi, iIiI11, IIi1l, IIi1i[iIiI1l + 1], lIl1, 2763975236), IIi1l = iiI(IIi1l, ilIl1i, ilIIIi, iIiI11, IIi1i[iIiI1l + 4], i1li11, 1272893353), iIiI11 = iiI(iIiI11, IIi1l, ilIl1i, ilIIIi, IIi1i[iIiI1l + 7], lII1l1, 4139469664), ilIIIi = iiI(ilIIIi, iIiI11, IIi1l, ilIl1i, IIi1i[iIiI1l + 10], iIiI1I, 3200236656), ilIl1i = iiI(ilIl1i, ilIIIi, iIiI11, IIi1l, IIi1i[iIiI1l + 13], lIl1, 681279174), IIi1l = iiI(IIi1l, ilIl1i, ilIIIi, iIiI11, IIi1i[iIiI1l + 0], i1li11, 3936430074), iIiI11 = iiI(iIiI11, IIi1l, ilIl1i, ilIIIi, IIi1i[iIiI1l + 3], lII1l1, 3572445317), ilIIIi = iiI(ilIIIi, iIiI11, IIi1l, ilIl1i, IIi1i[iIiI1l + 6], iIiI1I, 76029189), ilIl1i = iiI(ilIl1i, ilIIIi, iIiI11, IIi1l, IIi1i[iIiI1l + 9], lIl1, 3654602809), IIi1l = iiI(IIi1l, ilIl1i, ilIIIi, iIiI11, IIi1i[iIiI1l + 12], i1li11, 3873151461), iIiI11 = iiI(iIiI11, IIi1l, ilIl1i, ilIIIi, IIi1i[iIiI1l + 15], lII1l1, 530742520), ilIIIi = iiI(ilIIIi, iIiI11, IIi1l, ilIl1i, IIi1i[iIiI1l + 2], iIiI1I, 3299628645), ilIl1i = lIiI(ilIl1i, ilIIIi, iIiI11, IIi1l, IIi1i[iIiI1l + 0], iIlIII, 4096336452), IIi1l = lIiI(IIi1l, ilIl1i, ilIIIi, iIiI11, IIi1i[iIiI1l + 7], iIIll, 1126891415), iIiI11 = lIiI(iIiI11, IIi1l, ilIl1i, ilIIIi, IIi1i[iIiI1l + 14], IIi1I, 2878612391), ilIIIi = lIiI(ilIIIi, iIiI11, IIi1l, ilIl1i, IIi1i[iIiI1l + 5], liIiII, 4237533241), ilIl1i = lIiI(ilIl1i, ilIIIi, iIiI11, IIi1l, IIi1i[iIiI1l + 12], iIlIII, 1700485571), IIi1l = lIiI(IIi1l, ilIl1i, ilIIIi, iIiI11, IIi1i[iIiI1l + 3], iIIll, 2399980690), iIiI11 = lIiI(iIiI11, IIi1l, ilIl1i, ilIIIi, IIi1i[iIiI1l + 10], IIi1I, 4293915773), ilIIIi = lIiI(ilIIIi, iIiI11, IIi1l, ilIl1i, IIi1i[iIiI1l + 1], liIiII, 2240044497), ilIl1i = lIiI(ilIl1i, ilIIIi, iIiI11, IIi1l, IIi1i[iIiI1l + 8], iIlIII, 1873313359), IIi1l = lIiI(IIi1l, ilIl1i, ilIIIi, iIiI11, IIi1i[iIiI1l + 15], iIIll, 4264355552), iIiI11 = lIiI(iIiI11, IIi1l, ilIl1i, ilIIIi, IIi1i[iIiI1l + 6], IIi1I, 2734768916), ilIIIi = lIiI(ilIIIi, iIiI11, IIi1l, ilIl1i, IIi1i[iIiI1l + 13], liIiII, 1309151649), ilIl1i = lIiI(ilIl1i, ilIIIi, iIiI11, IIi1l, IIi1i[iIiI1l + 4], iIlIII, 4149444226), IIi1l = lIiI(IIi1l, ilIl1i, ilIIIi, iIiI11, IIi1i[iIiI1l + 11], iIIll, 3174756917), iIiI11 = lIiI(iIiI11, IIi1l, ilIl1i, ilIIIi, IIi1i[iIiI1l + 2], IIi1I, 718787259), ilIIIi = lIiI(ilIIIi, iIiI11, IIi1l, ilIl1i, IIi1i[iIiI1l + 9], liIiII, 3951481745), ilIl1i = lII1li(ilIl1i, iIiI1i), ilIIIi = lII1li(ilIIIi, lIili), iIiI11 = lII1li(iIiI11, II1I1I), IIi1l = lII1li(IIi1l, iIlIIi);
  var il1 = lIi1(ilIl1i) + lIi1(ilIIIi) + lIi1(iIiI11) + lIi1(IIi1l);
  return il1.toLowerCase();
}
function iili(liilii, Il1liI) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class liilil {
    constructor(I1i1iI) {
      this.env = I1i1iI;
    }
    ["send"](liI1I, l1illl = "GET") {
      {
        liI1I = "string" == typeof liI1I ? {
          "url": liI1I
        } : liI1I;
        let iiIll = this.get;
        "POST" === l1illl && (iiIll = this.post);
        return new Promise((illiI, ii1Il1) => {
          iiIll.call(this, liI1I, (li1I1i, l1illI, illi1) => {
            li1I1i ? ii1Il1(li1I1i) : illiI(l1illI);
          });
        });
      }
    }
    ["get"](iIi1i1) {
      return this.send.call(this.env, iIi1i1);
    }
    ["post"](llII1) {
      return this.send.call(this.env, llII1, "POST");
    }
  }
  return new class {
    constructor(II1l1l, li1I1l) {
      this.name = II1l1l;
      this.http = new liilil(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, li1I1l);
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
    ["toObj"](l1i, l1l = null) {
      try {
        return JSON.parse(l1i);
      } catch {
        return l1l;
      }
    }
    ["toStr"](IilI11, llili = null) {
      try {
        return JSON.stringify(IilI11);
      } catch {
        return llili;
      }
    }
    ["getjson"](llill, iI1I11) {
      {
        let l11111 = iI1I11;
        const I1111 = this.getdata(llill);
        if (I1111) try {
          l11111 = JSON.parse(this.getdata(llill));
        } catch {}
        return l11111;
      }
    }
    ["setjson"](i1II, iI1I1I) {
      try {
        return this.setdata(JSON.stringify(i1II), iI1I1I);
      } catch {
        return false;
      }
    }
    ["getScript"](I11I11) {
      return new Promise(iili11 => {
        this.get({
          "url": I11I11
        }, (Illii1, I111l, il1l11) => iili11(il1l11));
      });
    }
    ["runScript"](i1IliI, lI1I1) {
      return new Promise(llI11 => {
        {
          let lI1Ii = this.getdata("@chavy_boxjs_userCfgs.httpapi");
          lI1Ii = lI1Ii ? lI1Ii.replace(/\n/g, "").trim() : lI1Ii;
          let ilIiI1 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
          ilIiI1 = ilIiI1 ? 1 * ilIiI1 : 20;
          ilIiI1 = lI1I1 && lI1I1.timeout ? lI1I1.timeout : ilIiI1;
          const [lii1I1, il1l1l] = lI1Ii.split("@"),
            ii1li1 = {
              "url": "http://" + il1l1l + "/v1/scripting/evaluate",
              "body": {
                "script_text": i1IliI,
                "mock_type": "cron",
                "timeout": ilIiI1
              },
              "headers": {
                "Accept": "*/*"
              }
            };
          this.post(ii1li1, (iili1I, i1Ill1, l11lIi) => llI11(l11lIi));
        }
      }).catch(l11lIl => this.logErr(l11lIl));
    }
    ["loaddata"]() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const I11I1i = this.path.resolve(this.dataFile),
          llI1i = this.path.resolve(process.cwd(), this.dataFile),
          IlIIli = this.fs.existsSync(I11I1i),
          IlIIll = !IlIIli && this.fs.existsSync(llI1i);
        if (!IlIIli && !IlIIll) return {};
        {
          const i1IllI = IlIIli ? I11I1i : llI1i;
          try {
            return JSON.parse(this.fs.readFileSync(i1IllI));
          } catch (ii1lil) {
            return {};
          }
        }
      }
    }
    ["writedata"]() {
      if (this.isNode()) {
        {
          this.fs = this.fs ? this.fs : require("fs");
          this.path = this.path ? this.path : require("path");
          const l11Ii1 = this.path.resolve(this.dataFile),
            I1Ii1 = this.path.resolve(process.cwd(), this.dataFile),
            iIiliI = this.fs.existsSync(l11Ii1),
            iIl1lI = !iIiliI && this.fs.existsSync(I1Ii1),
            IiiIIl = JSON.stringify(this.data);
          iIiliI ? this.fs.writeFileSync(l11Ii1, IiiIIl) : iIl1lI ? this.fs.writeFileSync(I1Ii1, IiiIIl) : this.fs.writeFileSync(l11Ii1, IiiIIl);
        }
      }
    }
    ["lodash_get"](iI1ii1, IiiIIi, iI1iiI) {
      {
        const I11ii1 = IiiIIi.replace(/\[(\d+)\]/g, ".$1").split(".");
        let Iil11i = iI1ii1;
        for (const i1iiiI of I11ii1) if (Iil11i = Object(Iil11i)[i1iiiI], undefined === Iil11i) return iI1iiI;
        return Iil11i;
      }
    }
    ["lodash_set"](l1il, I1l1lI, I1IiI) {
      return Object(l1il) !== l1il ? l1il : (Array.isArray(I1l1lI) || (I1l1lI = I1l1lI.toString().match(/[^.[\]]+/g) || []), I1l1lI.slice(0, -1).reduce((I1iliI, I1l1l1, I1ili1) => Object(I1iliI[I1l1l1]) === I1iliI[I1l1l1] ? I1iliI[I1l1l1] : I1iliI[I1l1l1] = Math.abs(I1l1lI[I1ili1 + 1]) >> 0 == +I1l1lI[I1ili1 + 1] ? [] : {}, l1il)[I1l1lI[I1l1lI.length - 1]] = I1IiI, l1il);
    }
    ["getdata"](iIl1l1) {
      {
        let Iil11l = this.getval(iIl1l1);
        if (/^@/.test(iIl1l1)) {
          const [, iI1iii, iI1iil] = /^@(.*?)\.(.*?)$/.exec(iIl1l1),
            lIIIIl = iI1iii ? this.getval(iI1iii) : "";
          if (lIIIIl) try {
            const l1iI = JSON.parse(lIIIIl);
            Iil11l = l1iI ? this.lodash_get(l1iI, iI1iil, "") : Iil11l;
          } catch (II111i) {
            Iil11l = "";
          }
        }
        return Iil11l;
      }
    }
    ["setdata"](Illill, II111l) {
      {
        let IillI1 = false;
        if (/^@/.test(II111l)) {
          const [, ili1ll, iIl1ii] = /^@(.*?)\.(.*?)$/.exec(II111l),
            I1l1il = this.getval(ili1ll),
            lii1II = ili1ll ? "null" === I1l1il ? null : I1l1il || "{}" : "{}";
          try {
            const ili1li = JSON.parse(lii1II);
            this.lodash_set(ili1li, iIl1ii, Illill);
            IillI1 = this.setval(JSON.stringify(ili1li), ili1ll);
          } catch (Iiil11) {
            {
              const iIl1il = {};
              this.lodash_set(iIl1il, iIl1ii, Illill);
              IillI1 = this.setval(JSON.stringify(iIl1il), ili1ll);
            }
          }
        } else IillI1 = this.setval(Illill, II111l);
        return IillI1;
      }
    }
    ["getval"](II1lIl) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(II1lIl) : this.isQuanX() ? $prefs.valueForKey(II1lIl) : this.isNode() ? (this.data = this.loaddata(), this.data[II1lIl]) : this.data && this.data[II1lIl] || null;
    }
    ["setval"](Iiil1I, iliI) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(Iiil1I, iliI) : this.isQuanX() ? $prefs.setValueForKey(Iiil1I, iliI) : this.isNode() ? (this.data = this.loaddata(), this.data[iliI] = Iiil1I, this.writedata(), true) : this.data && this.data[iliI] || null;
    }
    ["initGotEnv"](l1lI) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      l1lI && (l1lI.headers = l1lI.headers ? l1lI.headers : {}, undefined === l1lI.headers.Cookie && undefined === l1lI.cookieJar && (l1lI.cookieJar = this.ckjar));
    }
    ["get"](II1lIi, I1Il1 = () => {}) {
      II1lIi.headers && (delete II1lIi.headers["Content-Type"], delete II1lIi.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (II1lIi.headers = II1lIi.headers || {}, Object.assign(II1lIi.headers, {
        "X-Surge-Skip-Scripting": false
      })), $httpClient.get(II1lIi, (II1lII, i1iilI, iiII11) => {
        !II1lII && i1iilI && (i1iilI.body = iiII11, i1iilI.statusCode = i1iilI.status);
        I1Il1(II1lII, i1iilI, iiII11);
      })) : this.isQuanX() ? (this.isNeedRewrite && (II1lIi.opts = II1lIi.opts || {}, Object.assign(II1lIi.opts, {
        "hints": false
      })), $task.fetch(II1lIi).then(IlI1I1 => {
        {
          const {
            statusCode: I11ili,
            statusCode: Ii1i1i,
            headers: iIilli,
            body: lI11i1
          } = IlI1I1;
          I1Il1(null, {
            "status": I11ili,
            "statusCode": Ii1i1i,
            "headers": iIilli,
            "body": lI11i1
          }, lI11i1);
        }
      }, Ii1i1l => I1Il1(Ii1i1l))) : this.isNode() && (this.initGotEnv(II1lIi), this.got(II1lIi).on("redirect", (iI1li, ii11Il) => {
        try {
          {
            if (iI1li.headers["set-cookie"]) {
              {
                const iIillI = iI1li.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                iIillI && this.ckjar.setCookieSync(iIillI, null);
                ii11Il.cookieJar = this.ckjar;
              }
            }
          }
        } catch (ll1i11) {
          this.logErr(ll1i11);
        }
      }).then(lil1i1 => {
        {
          const {
            statusCode: lll11i,
            statusCode: l1li,
            headers: l1ll,
            body: IlliiI
          } = lil1i1;
          I1Il1(null, {
            "status": lll11i,
            "statusCode": l1li,
            "headers": l1ll,
            "body": IlliiI
          }, IlliiI);
        }
      }, ilil => {
        const {
          message: I11ill,
          response: I1illI
        } = ilil;
        I1Il1(I11ill, I1illI, I1illI && I1illI.body);
      }));
    }
    ["post"](IiiII1, lIli1 = () => {}) {
      if (IiiII1.body && IiiII1.headers && !IiiII1.headers["Content-Type"] && (IiiII1.headers["Content-Type"] = "application/json"), IiiII1.headers && delete IiiII1.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (IiiII1.headers = IiiII1.headers || {}, Object.assign(IiiII1.headers, {
        "X-Surge-Skip-Scripting": false
      })), $httpClient.post(IiiII1, (lliIII, illi, illl) => {
        !lliIII && illi && (illi.body = illl, illi.statusCode = illi.status);
        lIli1(lliIII, illi, illl);
      });else {
        if (this.isQuanX()) IiiII1.method = "POST", this.isNeedRewrite && (IiiII1.opts = IiiII1.opts || {}, Object.assign(IiiII1.opts, {
          "hints": false
        })), $task.fetch(IiiII1).then(lll11I => {
          const {
            statusCode: iI1il1,
            statusCode: il1II1,
            headers: II111I,
            body: IIii1
          } = lll11I;
          lIli1(null, {
            "status": iI1il1,
            "statusCode": il1II1,
            "headers": II111I,
            "body": IIii1
          }, IIii1);
        }, I11iii => lIli1(I11iii));else {
          if (this.isNode()) {
            this.initGotEnv(IiiII1);
            const {
              url: iI1l1,
              ...I11iil
            } = IiiII1;
            this.got.post(iI1l1, I11iil).then(I11ilI => {
              const {
                statusCode: iIilii,
                statusCode: iIl1li,
                headers: iIilil,
                body: iIl1ll
              } = I11ilI;
              lIli1(null, {
                "status": iIilii,
                "statusCode": iIl1li,
                "headers": iIilil,
                "body": iIl1ll
              }, iIl1ll);
            }, lliII1 => {
              {
                const {
                  message: IiiIII,
                  response: lIIl1I
                } = lliII1;
                lIli1(IiiIII, lIIl1I, lIIl1I && lIIl1I.body);
              }
            });
          }
        }
      }
    }
    ["time"](Iil111, illI = null) {
      const lIIl11 = illI ? new Date(illI) : new Date();
      let Illil1 = {
        "M+": lIIl11.getMonth() + 1,
        "d+": lIIl11.getDate(),
        "H+": lIIl11.getHours(),
        "m+": lIIl11.getMinutes(),
        "s+": lIIl11.getSeconds(),
        "q+": Math.floor((lIIl11.getMonth() + 3) / 3),
        "S": lIIl11.getMilliseconds()
      };
      /(y+)/.test(Iil111) && (Iil111 = Iil111.replace(RegExp.$1, (lIIl11.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let Iil11I in Illil1) new RegExp("(" + Iil11I + ")").test(Iil111) && (Iil111 = Iil111.replace(RegExp.$1, 1 == RegExp.$1.length ? Illil1[Iil11I] : ("00" + Illil1[Iil11I]).substr(("" + Illil1[Iil11I]).length)));
      return Iil111;
    }
    ["msg"](iI1ii = liilii, I11il1 = "", lIliI = "", I1ilil) {
      {
        const IIiii = IiiI1l => {
          if (!IiiI1l) return IiiI1l;
          if ("string" == typeof IiiI1l) return this.isLoon() ? IiiI1l : this.isQuanX() ? {
            "open-url": IiiI1l
          } : this.isSurge() ? {
            "url": IiiI1l
          } : undefined;
          if ("object" == typeof IiiI1l) {
            if (this.isLoon()) {
              {
                let IiiI1i = IiiI1l.openUrl || IiiI1l.url || IiiI1l["open-url"],
                  IilIIi = IiiI1l.mediaUrl || IiiI1l["media-url"];
                return {
                  "openUrl": IiiI1i,
                  "mediaUrl": IilIIi
                };
              }
            }
            if (this.isQuanX()) {
              let lI11ll = IiiI1l["open-url"] || IiiI1l.url || IiiI1l.openUrl,
                lIlII = IiiI1l["media-url"] || IiiI1l.mediaUrl;
              return {
                "open-url": lI11ll,
                "media-url": lIlII
              };
            }
            if (this.isSurge()) {
              let lI11li = IiiI1l.url || IiiI1l.openUrl || IiiI1l["open-url"];
              return {
                "url": lI11li
              };
            }
          }
        };
        if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(iI1ii, I11il1, lIliI, IIiii(I1ilil)) : this.isQuanX() && $notify(iI1ii, I11il1, lIliI, IIiii(I1ilil))), !this.isMuteLog) {
          let i1lii1 = ["", "==============📣系统通知📣=============="];
          i1lii1.push(iI1ii);
          I11il1 && i1lii1.push(I11il1);
          lIliI && i1lii1.push(lIliI);
          console.log(i1lii1.join("\n"));
          this.logs = this.logs.concat(i1lii1);
        }
      }
    }
    ["log"](...lI11l1) {
      lI11l1.length > 0 && (this.logs = [...this.logs, ...lI11l1]);
      console.log(lI11l1.join(this.logSeparator));
    }
    ["logErr"](lIlIl, IilIIl) {
      {
        const liilI1 = !this.isSurge() && !this.isQuanX() && !this.isLoon();
        liilI1 ? this.log("", "❗️" + this.name + ", 错误!", lIlIl.stack) : this.log("", "❗️" + this.name + ", 错误!", lIlIl);
      }
    }
    ["wait"](IIiiI) {
      return new Promise(i1liiI => setTimeout(i1liiI, IIiiI));
    }
    ["done"](lIlIi = {}) {
      const lI11lI = new Date().getTime(),
        IIilI = (lI11lI - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + IIilI + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(lIlIi);
    }
  }(liilii, Il1liI);
}