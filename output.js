//Sat Aug 16 2025 01:42:25 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const Iili1I = new lli1li("联通安全管家任务"),
  lli1i1 = Iili1I.isNode() ? require("./sendNotify") : "",
  IIlli1 = 1,
  ilIiii = 0,
  {
    v4: ilIiil
  } = require("uuid"),
  iII = ilIiil();
let l11IlI = process.env.chinaUnicomCookie,
  lIIl = "",
  lIl1i = "";
ckArr = l11IlI.split("&");
IIiIii("【debug】 这是你的账号数组:\n " + ckArr);
!(async () => {
  ckArr = l11IlI.split("&");
  await ilIil1();
  for (let Ii1li1 = 0; Ii1li1 < ckArr.length; Ii1li1++) {
    {
      let iiil1 = Ii1li1 + 1;
      console.log("------------- 开始【第 " + iiil1 + " 个账号】-------------");
      lIl1i = ckArr[Ii1li1].split("&");
      IIiIii("【debug】 这是你第 " + iiil1 + " 账号信息:\n " + lIl1i);
      await IIlliI();
      await Iili1I.wait(2000);
      if (num1 == 1) {
        console.log("当前online过期，跳过...");
        continue;
      }
      customDateString = lIi11I();
      await Iili1I.wait(2000);
      await Iili1l();
      await iIlIi1();
      await liIiil();
      console.log("获取ck中，等待一会...");
      await Iili1I.wait(5000);
      oldjf = null;
      await l11Ill();
      await liIiii();
      await Iili1I.wait(15000);
      await l11Ill();
    }
  }
  await lIl1I1(lIIl);
})().catch(ilII1I => Iili1I.logErr(ilII1I)).finally(() => Iili1I.done());
async function Iili1l() {
  let lli1l1 = {
      "url": "https://m.client.10" + t + "1" + t + ".com/edop_ng/getTicketByNative?token=" + ecs_token + "&appId=edop_unicom_3a6cc75a",
      "headers": {
        "Cookie": "PvSessionId=" + customDateString + "" + iII + ";c_mobile=" + num1 + ("; c_version=iphone_c@11." + t + "8" + t + t + "; city=" + t + "36|") + cityCode + ("|9" + t + t + "63345|-99;devicedId=") + iII + "; ecs_token=" + ecs_token + ";t3_token=" + t3_token + "",
        "Accept": "*",
        "Connection": "keep-alive",
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept-Encoding": "gzip;q=1." + t + ", compress;q=" + t + ".5",
        "Host": "m.client.1" + t + t + "1" + t + ".com",
        "User-Agent": "ChinaUnicom4.x/12.3.1 (com.chinaunicom.mobilebusiness; build:77; iOS 16.6.0) Alamofire/4.7.3 unicom{version:iphone_c@12.0301}",
        "Accept-Language": "zh-Hans-CN;q=1.0"
      }
    },
    lii1l = await IIiIil(lli1l1, "ticket");
  ticket1 = lii1l.ticket;
}
async function liIiil() {
  let ll1i = {
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
    lliII = await lli1ll(ll1i, "ticket");
  ticket = lliII.data.ticket;
  const iiiiI = require("axios");
  let iiIlIl = JSON.stringify({
      "activityId": "s747395186896173056",
      "partnersId": "1702"
    }),
    iiIlIi = {
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
      "data": iiIlIl
    };
  iiiiI.request(iiIlIi).then(I1ii => {
    const I1il = I1ii.headers["set-cookie"],
      I1Iiil = I1il.find(I1Iiii => I1Iiii.startsWith("_jea_id="));
    jeaId = I1Iiil?.["split"](";")[0]?.["split"]("=")[1] || "未找到 Cookie";
  }).catch(lIIliI => console.log("error", lIIliI));
}
async function l11Il1() {
  let i11llI = {
      "url": "https://uca.wo116114.com/sjgj/woAssistant/umm/configs/v1/config?product_line=uasp&entry_point=h5&entry_point_id=wxdefbc1986dc757a6",
      "headers": {
        "User-Agent": "ChinaUnicom4.x/12.3.1 (com.chinaunicom.mobilebusiness; build:77; iOS 16.6.0) Alamofire/4.7.3 unicom{version:iphone_c@12.0301}",
        "Accept": "*",
        "Accept-Encoding": "gzip;q=1.0, compress;q=0.5",
        "Content-Type": "application/json",
        "auth-sa-token": token,
        "Accept-Language": "zh-Hans-CN;q=1.0",
        "clientType": "uasp_unicom_applet"
      },
      "body": "{\"contents\":[{\"content\":\"13088330789\",\"contentTag\":\"\"}],\"operationType\":0,\"type\":1,\"blacklistSource\":0,\"productId\":\"91311616\"}"
    },
    iIIi1 = await lli1ll(i11llI, "黑名单");
}
async function Iili1i() {
  let IlIili = {
      "url": "https://uca.wo116114.com/sjgj/unicomAssistant/uasp/configs/v1/addressBook/saveTagPhone?product_line=uasp&entry_point=h5&entry_point_id=wxdefbc1986dc757a6",
      "headers": {
        "User-Agent": "ChinaUnicom4.x/12.3.1 (com.chinaunicom.mobilebusiness; build:77; iOS 16.6.0) Alamofire/4.7.3 unicom{version:iphone_c@12.0301}",
        "Accept": "*",
        "Accept-Encoding": "gzip;q=1.0, compress;q=0.5",
        "Content-Type": "application/json",
        "auth-sa-token": token,
        "Accept-Language": "zh-Hans-CN;q=1.0",
        "clientType": "uasp_unicom_applet"
      },
      "body": "{\"tagPhoneNo\":\"13088330789\",\"tagIds\":[26],\"status\":0,\"productId\":\"91311616\"}"
    },
    I1iI = await lli1ll(IlIili, "标记");
}
async function IIiIli() {
  let i11ll1 = {
      "url": "https://uca.wo116114.com/sjgj/unicomAssistant/uasp/configs/v1/addressBookBatchConfig?product_line=uasp&entry_point=h5&entry_point_id=edop_unicom_3a6cc75a",
      "headers": {
        "User-Agent": "ChinaUnicom4.x/12.3.1 (com.chinaunicom.mobilebusiness; build:77; iOS 16.6.0) Alamofire/4.7.3 unicom{version:iphone_c@12.0301}",
        "Accept": "*",
        "Accept-Encoding": "gzip;q=1.0, compress;q=0.5",
        "Content-Type": "application/json",
        "auth-sa-token": token,
        "Accept-Language": "zh-Hans-CN;q=1.0",
        "clientType": "uasp_unicom_applet"
      },
      "body": "{\"addressBookDTOList\":[{\"addressBookPhoneNo\":\"13105750575\",\"addressBookName\":\"可乐\"}],\"productId\":\"91311616\",\"opType\":\"1\"}"
    },
    iIiIII = await lli1ll(i11ll1, "通讯录");
}
async function lIl1l() {
  let i11lil = {
      "url": "https://uca.wo116114.com/sjgj/woAssistant/umm/configs/v1/config?product_line=uasp&entry_point=h5&entry_point_id=wxdefbc1986dc757a6",
      "headers": {
        "User-Agent": "ChinaUnicom4.x/12.3.1 (com.chinaunicom.mobilebusiness; build:77; iOS 16.6.0) Alamofire/4.7.3 unicom{version:iphone_c@12.0301}",
        "Accept": "*",
        "Accept-Encoding": "gzip;q=1.0, compress;q=0.5",
        "Content-Type": "application/json",
        "auth-sa-token": token,
        "Accept-Language": "zh-Hans-CN;q=1.0",
        "clientType": "uasp_unicom_applet"
      },
      "body": "{\"contents\":[{\"name\":\"rings-once\",\"contentTag\":\"8\",\"contentName\":\"响一声\",\"content\":\"0\",\"icon\":\"alerting\"}],\"operationType\":0,\"type\":3,\"productId\":\"91311616\"}"
    },
    iilI1I = await lli1ll(i11lil, "拦截");
}
async function iIlIii() {
  let lIiii1 = {
      "url": "https://uca.wo116114.com/sjgj/unicomAssistant/uasp/configs/v1/weeklySwitchStatus?product_line=uasp&entry_point=h5&entry_point_id=wxdefbc1986dc757a6",
      "headers": {
        "User-Agent": "ChinaUnicom4.x/12.3.1 (com.chinaunicom.mobilebusiness; build:77; iOS 16.6.0) Alamofire/4.7.3 unicom{version:iphone_c@12.0301}",
        "Accept": "*",
        "Accept-Encoding": "gzip;q=1.0, compress;q=0.5",
        "Content-Type": "application/json",
        "auth-sa-token": token,
        "Accept-Language": "zh-Hans-CN;q=1.0",
        "clientType": "uasp_unicom_applet"
      },
      "body": "{\"productId\":\"91311616\"}"
    },
    iIlII = await lli1ll(lIiii1, "查看");
}
async function iiI111() {
  let iilI11 = {
      "url": "https://uca.wo116114.com/sjgj/unicomAssistant/uasp/report/v1/queryKeyData?product_line=uasp&entry_point=h5&entry_point_id=wxdefbc1986dc757a6",
      "headers": {
        "User-Agent": "ChinaUnicom4.x/12.3.1 (com.chinaunicom.mobilebusiness; build:77; iOS 16.6.0) Alamofire/4.7.3 unicom{version:iphone_c@12.0301}",
        "Accept": "*",
        "Accept-Encoding": "gzip;q=1.0, compress;q=0.5",
        "Content-Type": "application/json",
        "auth-sa-token": token,
        "Accept-Language": "zh-Hans-CN;q=1.0",
        "clientType": "uasp_unicom_applet"
      },
      "body": "{\"productId\":\"91311616\"}"
    },
    lIiiiI = await lli1ll(iilI11, "查看");
}
async function lIi111() {
  let IlIiii = {
      "url": "https://uca.wo116114.com/sjgj/unicomAssistant/uasp/report/v1/weeklySummary?product_line=uasp&entry_point=h5&entry_point_id=wxdefbc1986dc757a6",
      "headers": {
        "User-Agent": "ChinaUnicom4.x/12.3.1 (com.chinaunicom.mobilebusiness; build:77; iOS 16.6.0) Alamofire/4.7.3 unicom{version:iphone_c@12.0301}",
        "Accept": "*",
        "Accept-Encoding": "gzip;q=1.0, compress;q=0.5",
        "Content-Type": "application/json",
        "auth-sa-token": token,
        "Accept-Language": "zh-Hans-CN;q=1.0",
        "clientType": "uasp_unicom_applet"
      },
      "body": "{\"productId\":\"91311616\"}"
    },
    ilIII1 = await lli1ll(IlIiii, "查看");
}
async function iIlIi1() {
  let ll1ii1 = {
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
    i11li1 = await lli1ll(ll1ii1, "token");
  token = i11li1.data.access_token;
}
async function IIiIll(I1Iili) {
  let I1li = {
      "url": "https://m.jf.10010.com/jf-external-application/jftask/receive",
      "headers": {
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
      },
      "body": "{\"taskCode\": \"" + I1Iili + "\"}"
    },
    iIllIi = await lli1ll(I1li, "领取积分");
  iIllIi.data.score ? console.log("领取" + iIllIi.data.score + iIllIi.msg) : console.log("领取" + iIllIi.msg);
}
async function iIi(I1ll, ll1iii) {
  let lIIlli = {
      "url": "https://m.jf.10010.com/jf-external-application/jftask/toFinish",
      "headers": {
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
      },
      "body": "{\"taskCode\": \"" + I1ll + "\"}"
    },
    I1Iill = await lli1ll(lIIlli, "开启任务 " + ll1iii);
  xinxi = I1Iill.msg;
  switch (ll1iii) {
    case "联通安全管家-添加黑名单":
      await l11Il1();
      break;
    case "联通安全管家-号码标记":
      await Iili1i();
      break;
    case "联通安全管家-同步通讯录":
      await IIiIli();
      break;
    case "联通安全管家-骚扰拦截设置":
      await lIl1l();
      break;
    case "联通安全管家-查看周报":
      await iIlIii();
      await iiI111();
      await lIi111();
      break;
    default:
      throw new Error("任务 " + ll1iii + " 需要手动完成");
      break;
  }
}
async function iI1i(Il1il) {
  let lll1ii = {
      "url": "https://m.jf." + a + t + t + a + t + ".com/jf-external-application/jftask/sign",
      "headers": {
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
      },
      "body": "{\n  \"taskCode\": \"" + Il1il + "\"\n}"
    },
    lIIllI = await lli1ll(lll1ii, "完成签到");
  xinxi = lIIllI.msg;
}
async function liIiii() {
  let IiI11i = {
      "url": "https://m.jf.1" + t + t + "1" + t + ".com/jf-external-application/jftask/taskDetail",
      "headers": {
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
      },
      "body": "{}"
    },
    iIil1l = await lli1ll(IiI11i, "查询任务");
  const iIil11 = iIil1l.data.taskDetail.taskList;
  for (const i1IIII of iIil11) {
    const {
      taskCode: l1ii11,
      taskName: IiiiIi,
      finishCount: l1lii,
      needCount: llillI,
      finishText: l1ii1I
    } = i1IIII;
    console.log(IiiiIi + "：" + l1lii + "/" + llillI + " - " + l1ii1I);
    if (l1lii !== llillI) {
      const IiIIi1 = llillI - l1lii;
      console.log("任务未完成，需要再执行 " + IiIIi1 + " 次");
      for (let I11Iil = 0; I11Iil < IiIIi1; I11Iil++) {
        await Iili1I.wait(3000);
        try {
          if (IiiiIi == "联通安全管家-连续1天签到") await iI1i(l1ii11);else {
            await iIi(l1ii11, IiiiIi);
          }
          console.log("第 " + (I11Iil + 1) + " 次执行" + IiiiIi + "任务完成");
          await Iili1I.wait(10000);
          await IIiIll(l1ii11);
          console.log(IiiiIi + " 奖励领取成功");
        } catch (illi11) {
          {
            console.error("执行 " + l1ii11 + " 时出错: " + illi11.message);
            break;
          }
        }
      }
    } else {
      if (l1ii1I == "待领取") {
        try {
          await Iili1I.wait(3000);
          await IIiIll(l1ii11);
          console.log(IiiiIi + " 奖励领取成功");
        } catch (il1lil) {
          console.error("领取 " + l1ii11 + " 奖励时出错: " + il1lil.message);
        }
      } else {
        console.log("任务已完成且奖励已领取");
      }
    }
    console.log("---------------------");
  }
}
async function l11Ill() {
  let I1iii = {
      "url": "https://m.jf.10010.com/jf-external-application/jftask/userInfo",
      "headers": {
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
      },
      "body": "{}"
    },
    li111i = await lli1ll(I1iii, "查询积分");
  if (oldjf == null) oldjf = li111i.data.availableScore;else {
    const l1ii1l = li111i.data.availableScore;
    console.log("用户" + num1 + "运行前积分：" + oldjf + ",运行后积分" + l1ii1l + "，本次运行获得" + (l1ii1l - oldjf));
    lIIl += "\n用户" + num1 + "运行前积分：" + oldjf + ",运行后积分" + l1ii1l + "，本次运行获得" + (l1ii1l - oldjf);
  }
}
async function IIlliI() {
  let l1liIi = {
      "url": "https://m.client." + a + t + t + a + t + ".com/mobileService/onLine.htm",
      "headers": {
        "Accept-Encoding": "gzip, deflate, br",
        "Connection": "keep-alive",
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "*/*",
        "Host": "m.client." + a + t + t + a + t + ".com",
        "User-Agent": "ChinaUnicom.x CFNetwork iOS/" + a + "6.3." + a + " unicom{version:iphone_c@" + a + a + "." + t + "7" + t + t + "}",
        "Accept-Language": "zh-CN,zh-Hans;q=" + t + ".9"
      },
      "body": "deviceModel=iPhone&step=background&token_online=" + lIl1i + ("&version=iphone_c%4" + t + a + a + "." + t + "7" + t + t)
    },
    I11Ii1 = await lli1ll(l1liIi, "获取");
  try {
    t3_token = I11Ii1.t3_token;
    private_token = I11Ii1.private_token;
    ecs_token = I11Ii1.ecs_token;
    num1 = I11Ii1.list[0].num;
    cityCode = I11Ii1.list[0].cityCode;
  } catch (iiliiI) {
    num1 = "1";
  }
}
async function ilIil1() {
  let lIiI11 = {
      "url": "https://gitee.com/kele2233/genxin/raw/master/ydid.json",
      "headers": {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.43(0x18002b2d) NetType/WIFI Language/zh_CN"
      }
    },
    li111I = await IIiIil(lIiI11, "ll");
  hqsjc = li111I.ymsjc;
  gong = li111I.gong;
  dqsjc = Math.round(new Date().getTime() / 1000).toString();
  if (hqsjc > dqsjc) {
    console.log("公告：" + li111I.gh);
    console.log("当前版本1.2，最新版本" + li111I.fwbbh);
    t = li111I.fwbbh - 1.2;
    a = Math.floor(li111I.fwbbh);
    console.log("当前脚本有效期至" + iiill(hqsjc));
  } else {
    console.error(gong);
    process.exit();
  }
}
async function iI1l(IlII1I, IillI) {
  return new Promise(IiIIl1 => {
    {
      let i111I1 = [];
      if (IlII1I) {
        if (IlII1I.indexOf("@") !== -1) IlII1I.split("@").forEach(I11Ili => {
          i111I1.push(I11Ili);
        });else IlII1I.indexOf("\n") !== -1 ? IlII1I.split("\n").forEach(li1lIl => {
          i111I1.push(li1lIl);
        }) : i111I1.push(IlII1I);
        IiIIl1(i111I1);
      } else {
        console.log("\n 【" + Iili1I.name + "】：未填写变量 " + IillI);
      }
    }
  });
}
async function lIl1I1(iilill) {
  if (!iilill) return;
  if (IIlli1 > 0) {
    {
      if (Iili1I.isNode()) {
        let l1IlI = require("./sendNotify");
        await l1IlI.sendNotify(Iili1I.name, iilill);
      } else Iili1I.msg(iilill);
    }
  } else console.log(iilill);
}
function I111I1(IiliI1) {
  IiliI1 = IiliI1 || 32;
  let l11I = "QWERTYUIOPASDFGHJKLZXCVBNM1234567890",
    llllli = l11I.length,
    iiiii1 = "";
  for (i = 0; i < IiliI1; i++) iiiii1 += l11I.charAt(Math.floor(Math.random() * llllli));
  return iiiii1;
}
let iIl = "";
function lIIi(II1il1) {
  iIl = II1il1;
}
function l11Ili(I11111) {
  if (iIl === I11111) {
    console.log("Reached mark " + I11111);
  } else console.log("Invalid mark: " + I11111);
}
function iiill(IIillI) {
  var iiIlll = new Date(IIillI * 1000);
  var Iiii1i = iiIlll.getFullYear();
  var lllllI = String(iiIlll.getMonth() + 1).padStart(2, "0");
  var Iiii1l = String(iiIlll.getDate()).padStart(2, "0");
  var lllll1 = String(iiIlll.getHours()).padStart(2, "0");
  var II1iil = String(iiIlll.getMinutes()).padStart(2, "0");
  var II1iii = String(iiIlll.getSeconds()).padStart(2, "0");
  var IiliIi = Iiii1i + "-" + lllllI + "-" + Iiii1l + " " + lllll1 + ":" + II1iil + ":" + II1iii;
  return IiliIi;
}
function iiI11I(I1I1l, i1II1I) {
  return Math.round(Math.random() * (i1II1I - I1I1l) + I1I1l);
}
function llIi1i() {
  const ilii1l = new Date(),
    llllii = ilii1l.getHours(),
    l11l = new Date(ilii1l.getFullYear(), ilii1l.getMonth(), ilii1l.getDate(), llllii + 1, 0, 0, 0);
  return l11l.getTime();
}
function llIi1l() {
  const II1ill = new Date(),
    ilili = II1ill.getMinutes(),
    iII1iI = new Date(II1ill.getFullYear(), II1ill.getMonth(), II1ill.getDate(), II1ill.getHours(), ilili === 0 ? 1 : ilili + 1, 0, 0);
  iII1iI.getMinutes() === 0 && iII1iI.getHours() !== II1ill.getHours() && iII1iI.setDate(II1ill.getDate() + (iII1iI.getHours() === 0 ? 1 : 0));
  return iII1iI.getTime();
}
function l11i1() {
  return Math.round(new Date().getTime()).toString();
}
function lIi11I() {
  const IiIl1l = new Date(),
    IIilii = String(IiIl1l.getFullYear()).padStart(4, "0"),
    iiiiiI = String(IiIl1l.getMonth() + 1).padStart(2, "0"),
    IiIl1i = String(IiIl1l.getDate()).padStart(2, "0"),
    IIl1li = String(IiIl1l.getHours()).padStart(2, "0"),
    l11i = String(IiIl1l.getMinutes()).padStart(2, "0"),
    IIl1ll = String(IiIl1l.getSeconds()).slice(0, 2);
  return IIilii + iiiiiI + IiIl1i + IIl1li + l11i + IIl1ll;
}
function iiili() {
  return Math.round(new Date().getTime() / 1000).toString();
}
function iIlIiI() {
  let IIl1ii = new Date();
  h = IIl1ii.getHours();
  return h;
}
function Il1III() {
  let il1l = new Date();
  m = il1l.getMinutes();
  return m;
}
function l11iI(Ii11ll = 3000) {
  return new Promise(iiiili => {
    let I11lII = {
      "url": "https://keai.icu/apiwyy/api"
    };
    Iili1I.get(I11lII, async (Il111i, IIl1l1, Il111l) => {
      try {
        Il111l = JSON.parse(Il111l);
        console.log("\n 【网抑云时间】: " + Il111l.content + "  by--" + Il111l.music);
      } catch (il1I) {
        Iili1I.logErr(il1I, IIl1l1);
      } finally {
        iiiili();
      }
    }, Ii11ll);
  });
}
async function IIiIil(lIiiI, iiiilI, lIlIIi = 3000) {
  return new Promise(lII1i1 => {
    let Ii11lI = lIiiI;
    if (!iiiilI) {
      let I1111l = arguments.callee.toString(),
        l111i1 = /function\s*(\w*)/i,
        li1l1l = l111i1.exec(I1111l);
      iiiilI = li1l1l[1];
    }
    ilIiii && (console.log("\n 【debug】=============== 这是 " + iiiilI + " 请求 url ==============="), console.log(Ii11lI));
    Iili1I.get(Ii11lI, async (li1l1i, lIiil, iII1ll) => {
      try {
        {
          ilIiii && (console.log("\n\n 【debug】===============这是 " + iiiilI + " 返回data=============="), console.log(iII1ll), console.log("======"), console.log(JSON.parse(iII1ll)));
          let iliiI = JSON.parse(iII1ll);
          lII1i1(iliiI);
        }
      } catch (lIil1) {
        console.log(li1l1i, lIiil);
      } finally {
        lII1i1();
      }
    }, lIlIIi);
  });
}
async function lli1ll(Il1lII, iiiill, IIl1iI = 200) {
  return new Promise(lIll11 => {
    let ilIl11 = Il1lII;
    if (!iiiill) {
      let ilIl1I = arguments.callee.toString(),
        iiI = /function\s*(\w*)/i,
        lIiI = iiI.exec(ilIl1I);
      iiiill = lIiI[1];
    }
    ilIiii && (console.log("\n 【debug】=============== 这是 " + iiiill + " 请求 url ==============="), console.log(ilIl11));
    Iili1I.post(ilIl11, async (lII1lI, lIi1, lIill) => {
      try {
        if (ilIiii) {
          console.log("\n\n 【debug】===============这是 " + iiiill + " 返回data==============");
          console.log(lIill);
          console.log("======");
          console.log(JSON.parse(lIill));
        }
        let iIiI1l = JSON.parse(lIill);
        lIll11(iIiI1l);
      } catch (lIili) {} finally {
        lIll11();
      }
    }, IIl1iI);
  });
}
function IIiIii(...iIlIIi) {
  if (ilIiii) {
    console.log(...iIlIIi);
  }
}
function liIill(ili) {
  function ill(illi1, I1i1i1) {
    return illi1 << I1i1i1 | illi1 >>> 32 - I1i1i1;
  }
  function lIli(liI11, lIlI1I) {
    {
      var llII1, II1l1l, li1I1l, II1l1i, iiIlI;
      li1I1l = 2147483648 & liI11;
      II1l1i = 2147483648 & lIlI1I;
      llII1 = 1073741824 & liI11;
      II1l1l = 1073741824 & lIlI1I;
      iiIlI = (1073741823 & liI11) + (1073741823 & lIlI1I);
      return llII1 & II1l1l ? 2147483648 ^ iiIlI ^ li1I1l ^ II1l1i : llII1 | II1l1l ? 1073741824 & iiIlI ? 3221225472 ^ iiIlI ^ li1I1l ^ II1l1i : 1073741824 ^ iiIlI ^ li1I1l ^ II1l1i : iiIlI ^ li1I1l ^ II1l1i;
    }
  }
  function ilii1I(ii1Ili, liI1l, liI1i) {
    return ii1Ili & liI1l | ~ii1Ili & liI1i;
  }
  function Ii1i1(iiIii, IiI1Ii, iiIil) {
    return iiIii & iiIil | IiI1Ii & ~iiIil;
  }
  function lIll(IilI11, llili, iiII1) {
    return IilI11 ^ llili ^ iiII1;
  }
  function iiiIi(llill, iI1I11, l11111) {
    return iI1I11 ^ (llill | ~l11111);
  }
  function ilii11(I11I1I, il1IIl, l1111i, il1IIi, i1II, iI1I1I, I111I) {
    I11I1I = lIli(I11I1I, lIli(lIli(ilii1I(il1IIl, l1111i, il1IIi), i1II), I111I));
    return lIli(ill(I11I1I, iI1I1I), il1IIl);
  }
  function iiiIl(i1Ili1, l1111l, llI1ll, I111i, iili11, llI1li, Illii1) {
    i1Ili1 = lIli(i1Ili1, lIli(lIli(Ii1i1(l1111l, llI1ll, I111i), iili11), Illii1));
    return lIli(ill(i1Ili1, llI1li), l1111l);
  }
  function iiIliI(I111l, il1l11, i1IliI, lI1I1, I1lI1, l11lI1, lI1II) {
    I111l = lIli(I111l, lIli(lIli(lIll(il1l11, i1IliI, lI1I1), I1lI1), lI1II));
    return lIli(ill(I111l, l11lI1), il1l11);
  }
  function liIiIl(i1Ilil, llI11, IlIIl1, IliiIl, iili1i, l11lII, IliiIi) {
    i1Ilil = lIli(i1Ilil, lIli(lIli(iiiIi(llI11, IlIIl1, IliiIl), iili1i), IliiIi));
    return lIli(ill(i1Ilil, l11lII), llI11);
  }
  function lII11(IlIIil) {
    for (var lI1Il, IlIIii = IlIIil.length, lI1Ii = IlIIii + 8, ilIiI1 = (lI1Ii - lI1Ii % 64) / 64, lii1I1 = 16 * (ilIiI1 + 1), il1l1l = new Array(lii1I1 - 1), ii1li1 = 0, iili1I = 0; IlIIii > iili1I;) lI1Il = (iili1I - iili1I % 4) / 4, ii1li1 = iili1I % 4 * 8, il1l1l[lI1Il] = il1l1l[lI1Il] | IlIIil.charCodeAt(iili1I) << ii1li1, iili1I++;
    lI1Il = (iili1I - iili1I % 4) / 4;
    ii1li1 = iili1I % 4 * 8;
    il1l1l[lI1Il] = il1l1l[lI1Il] | 128 << ii1li1;
    il1l1l[lii1I1 - 2] = IlIIii << 3;
    il1l1l[lii1I1 - 1] = IlIIii >>> 29;
    return il1l1l;
  }
  function illiI1(i1Ill1) {
    {
      var l11lIi,
        l11lIl,
        ii1liI = "",
        IliiII = "";
      for (l11lIl = 0; 3 >= l11lIl; l11lIl++) l11lIi = i1Ill1 >>> 8 * l11lIl & 255, IliiII = "0" + l11lIi.toString(16), ii1liI += IliiII.substr(IliiII.length - 2, 2);
      return ii1liI;
    }
  }
  function iIll1i(I11I1l) {
    I11I1l = I11I1l.replace(/\r\n/g, "\n");
    for (var I11I1i = "", llI1i = 0; llI1i < I11I1l.length; llI1i++) {
      var IlIIli = I11I1l.charCodeAt(llI1i);
      128 > IlIIli ? I11I1i += String.fromCharCode(IlIIli) : IlIIli > 127 && 2048 > IlIIli ? (I11I1i += String.fromCharCode(IlIIli >> 6 | 192), I11I1i += String.fromCharCode(63 & IlIIli | 128)) : (I11I1i += String.fromCharCode(IlIIli >> 12 | 224), I11I1i += String.fromCharCode(IlIIli >> 6 & 63 | 128), I11I1i += String.fromCharCode(63 & IlIIli | 128));
    }
    return I11I1i;
  }
  var iIll1l,
    iIIii,
    ilIl1l,
    Ii1l1,
    Il1IlI,
    l11Ii,
    iIll11,
    IIilll,
    iIIil,
    lli1Ii = [],
    lli1Il = 7,
    l11Il = 12,
    IIilli = 17,
    l1III1 = 22,
    lII1I = 5,
    iiiII = 9,
    iiIlil = 14,
    il11il = 20,
    iiIlii = 4,
    II1I11 = 11,
    il11ii = 16,
    Il1Il1 = 23,
    iIll1I = 6,
    iIIiI = 10,
    Il1Ill = 15,
    Ii1il = 21;
  for (ili = iIll1i(ili), lli1Ii = lII11(ili), l11Ii = 1732584193, iIll11 = 4023233417, IIilll = 2562383102, iIIil = 271733878, iIll1l = 0; iIll1l < lli1Ii.length; iIll1l += 16) iIIii = l11Ii, ilIl1l = iIll11, Ii1l1 = IIilll, Il1IlI = iIIil, l11Ii = ilii11(l11Ii, iIll11, IIilll, iIIil, lli1Ii[iIll1l + 0], lli1Il, 3614090360), iIIil = ilii11(iIIil, l11Ii, iIll11, IIilll, lli1Ii[iIll1l + 1], l11Il, 3905402710), IIilll = ilii11(IIilll, iIIil, l11Ii, iIll11, lli1Ii[iIll1l + 2], IIilli, 606105819), iIll11 = ilii11(iIll11, IIilll, iIIil, l11Ii, lli1Ii[iIll1l + 3], l1III1, 3250441966), l11Ii = ilii11(l11Ii, iIll11, IIilll, iIIil, lli1Ii[iIll1l + 4], lli1Il, 4118548399), iIIil = ilii11(iIIil, l11Ii, iIll11, IIilll, lli1Ii[iIll1l + 5], l11Il, 1200080426), IIilll = ilii11(IIilll, iIIil, l11Ii, iIll11, lli1Ii[iIll1l + 6], IIilli, 2821735955), iIll11 = ilii11(iIll11, IIilll, iIIil, l11Ii, lli1Ii[iIll1l + 7], l1III1, 4249261313), l11Ii = ilii11(l11Ii, iIll11, IIilll, iIIil, lli1Ii[iIll1l + 8], lli1Il, 1770035416), iIIil = ilii11(iIIil, l11Ii, iIll11, IIilll, lli1Ii[iIll1l + 9], l11Il, 2336552879), IIilll = ilii11(IIilll, iIIil, l11Ii, iIll11, lli1Ii[iIll1l + 10], IIilli, 4294925233), iIll11 = ilii11(iIll11, IIilll, iIIil, l11Ii, lli1Ii[iIll1l + 11], l1III1, 2304563134), l11Ii = ilii11(l11Ii, iIll11, IIilll, iIIil, lli1Ii[iIll1l + 12], lli1Il, 1804603682), iIIil = ilii11(iIIil, l11Ii, iIll11, IIilll, lli1Ii[iIll1l + 13], l11Il, 4254626195), IIilll = ilii11(IIilll, iIIil, l11Ii, iIll11, lli1Ii[iIll1l + 14], IIilli, 2792965006), iIll11 = ilii11(iIll11, IIilll, iIIil, l11Ii, lli1Ii[iIll1l + 15], l1III1, 1236535329), l11Ii = iiiIl(l11Ii, iIll11, IIilll, iIIil, lli1Ii[iIll1l + 1], lII1I, 4129170786), iIIil = iiiIl(iIIil, l11Ii, iIll11, IIilll, lli1Ii[iIll1l + 6], iiiII, 3225465664), IIilll = iiiIl(IIilll, iIIil, l11Ii, iIll11, lli1Ii[iIll1l + 11], iiIlil, 643717713), iIll11 = iiiIl(iIll11, IIilll, iIIil, l11Ii, lli1Ii[iIll1l + 0], il11il, 3921069994), l11Ii = iiiIl(l11Ii, iIll11, IIilll, iIIil, lli1Ii[iIll1l + 5], lII1I, 3593408605), iIIil = iiiIl(iIIil, l11Ii, iIll11, IIilll, lli1Ii[iIll1l + 10], iiiII, 38016083), IIilll = iiiIl(IIilll, iIIil, l11Ii, iIll11, lli1Ii[iIll1l + 15], iiIlil, 3634488961), iIll11 = iiiIl(iIll11, IIilll, iIIil, l11Ii, lli1Ii[iIll1l + 4], il11il, 3889429448), l11Ii = iiiIl(l11Ii, iIll11, IIilll, iIIil, lli1Ii[iIll1l + 9], lII1I, 568446438), iIIil = iiiIl(iIIil, l11Ii, iIll11, IIilll, lli1Ii[iIll1l + 14], iiiII, 3275163606), IIilll = iiiIl(IIilll, iIIil, l11Ii, iIll11, lli1Ii[iIll1l + 3], iiIlil, 4107603335), iIll11 = iiiIl(iIll11, IIilll, iIIil, l11Ii, lli1Ii[iIll1l + 8], il11il, 1163531501), l11Ii = iiiIl(l11Ii, iIll11, IIilll, iIIil, lli1Ii[iIll1l + 13], lII1I, 2850285829), iIIil = iiiIl(iIIil, l11Ii, iIll11, IIilll, lli1Ii[iIll1l + 2], iiiII, 4243563512), IIilll = iiiIl(IIilll, iIIil, l11Ii, iIll11, lli1Ii[iIll1l + 7], iiIlil, 1735328473), iIll11 = iiiIl(iIll11, IIilll, iIIil, l11Ii, lli1Ii[iIll1l + 12], il11il, 2368359562), l11Ii = iiIliI(l11Ii, iIll11, IIilll, iIIil, lli1Ii[iIll1l + 5], iiIlii, 4294588738), iIIil = iiIliI(iIIil, l11Ii, iIll11, IIilll, lli1Ii[iIll1l + 8], II1I11, 2272392833), IIilll = iiIliI(IIilll, iIIil, l11Ii, iIll11, lli1Ii[iIll1l + 11], il11ii, 1839030562), iIll11 = iiIliI(iIll11, IIilll, iIIil, l11Ii, lli1Ii[iIll1l + 14], Il1Il1, 4259657740), l11Ii = iiIliI(l11Ii, iIll11, IIilll, iIIil, lli1Ii[iIll1l + 1], iiIlii, 2763975236), iIIil = iiIliI(iIIil, l11Ii, iIll11, IIilll, lli1Ii[iIll1l + 4], II1I11, 1272893353), IIilll = iiIliI(IIilll, iIIil, l11Ii, iIll11, lli1Ii[iIll1l + 7], il11ii, 4139469664), iIll11 = iiIliI(iIll11, IIilll, iIIil, l11Ii, lli1Ii[iIll1l + 10], Il1Il1, 3200236656), l11Ii = iiIliI(l11Ii, iIll11, IIilll, iIIil, lli1Ii[iIll1l + 13], iiIlii, 681279174), iIIil = iiIliI(iIIil, l11Ii, iIll11, IIilll, lli1Ii[iIll1l + 0], II1I11, 3936430074), IIilll = iiIliI(IIilll, iIIil, l11Ii, iIll11, lli1Ii[iIll1l + 3], il11ii, 3572445317), iIll11 = iiIliI(iIll11, IIilll, iIIil, l11Ii, lli1Ii[iIll1l + 6], Il1Il1, 76029189), l11Ii = iiIliI(l11Ii, iIll11, IIilll, iIIil, lli1Ii[iIll1l + 9], iiIlii, 3654602809), iIIil = iiIliI(iIIil, l11Ii, iIll11, IIilll, lli1Ii[iIll1l + 12], II1I11, 3873151461), IIilll = iiIliI(IIilll, iIIil, l11Ii, iIll11, lli1Ii[iIll1l + 15], il11ii, 530742520), iIll11 = iiIliI(iIll11, IIilll, iIIil, l11Ii, lli1Ii[iIll1l + 2], Il1Il1, 3299628645), l11Ii = liIiIl(l11Ii, iIll11, IIilll, iIIil, lli1Ii[iIll1l + 0], iIll1I, 4096336452), iIIil = liIiIl(iIIil, l11Ii, iIll11, IIilll, lli1Ii[iIll1l + 7], iIIiI, 1126891415), IIilll = liIiIl(IIilll, iIIil, l11Ii, iIll11, lli1Ii[iIll1l + 14], Il1Ill, 2878612391), iIll11 = liIiIl(iIll11, IIilll, iIIil, l11Ii, lli1Ii[iIll1l + 5], Ii1il, 4237533241), l11Ii = liIiIl(l11Ii, iIll11, IIilll, iIIil, lli1Ii[iIll1l + 12], iIll1I, 1700485571), iIIil = liIiIl(iIIil, l11Ii, iIll11, IIilll, lli1Ii[iIll1l + 3], iIIiI, 2399980690), IIilll = liIiIl(IIilll, iIIil, l11Ii, iIll11, lli1Ii[iIll1l + 10], Il1Ill, 4293915773), iIll11 = liIiIl(iIll11, IIilll, iIIil, l11Ii, lli1Ii[iIll1l + 1], Ii1il, 2240044497), l11Ii = liIiIl(l11Ii, iIll11, IIilll, iIIil, lli1Ii[iIll1l + 8], iIll1I, 1873313359), iIIil = liIiIl(iIIil, l11Ii, iIll11, IIilll, lli1Ii[iIll1l + 15], iIIiI, 4264355552), IIilll = liIiIl(IIilll, iIIil, l11Ii, iIll11, lli1Ii[iIll1l + 6], Il1Ill, 2734768916), iIll11 = liIiIl(iIll11, IIilll, iIIil, l11Ii, lli1Ii[iIll1l + 13], Ii1il, 1309151649), l11Ii = liIiIl(l11Ii, iIll11, IIilll, iIIil, lli1Ii[iIll1l + 4], iIll1I, 4149444226), iIIil = liIiIl(iIIil, l11Ii, iIll11, IIilll, lli1Ii[iIll1l + 11], iIIiI, 3174756917), IIilll = liIiIl(IIilll, iIIil, l11Ii, iIll11, lli1Ii[iIll1l + 2], Il1Ill, 718787259), iIll11 = liIiIl(iIll11, IIilll, iIIil, l11Ii, lli1Ii[iIll1l + 9], Ii1il, 3951481745), l11Ii = lIli(l11Ii, iIIii), iIll11 = lIli(iIll11, ilIl1l), IIilll = lIli(IIilll, Ii1l1), iIIil = lIli(iIIil, Il1IlI);
  var Il1Ili = illiI1(l11Ii) + illiI1(iIll11) + illiI1(IIilll) + illiI1(iIIil);
  return Il1Ili.toLowerCase();
}
function lli1li(IlIIll, i1IllI) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class ii1lii {
    constructor(II111I) {
      this.env = II111I;
    }
    ["send"](IIii1, I11iii = "GET") {
      IIii1 = "string" == typeof IIii1 ? {
        "url": IIii1
      } : IIii1;
      let I11iil = this.get;
      "POST" === I11iii && (I11iil = this.post);
      return new Promise((iIl1li, iIilil) => {
        I11iil.call(this, IIii1, (iIl1ll, lliII1, IiiIII) => {
          iIl1ll ? iIilil(iIl1ll) : iIl1li(lliII1);
        });
      });
    }
    ["get"](lIIl1I) {
      return this.send.call(this.env, lIIl1I);
    }
    ["post"](IllilI) {
      return this.send.call(this.env, IllilI, "POST");
    }
  }
  return new class {
    constructor(lIIl11, Illil1) {
      this.name = lIIl11;
      this.http = new ii1lii(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, Illil1);
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
    ["toObj"](II1IlI, lI11ll = null) {
      try {
        return JSON.parse(II1IlI);
      } catch {
        return lI11ll;
      }
    }
    ["toStr"](lIlII, lI11li = null) {
      try {
        return JSON.stringify(lIlII);
      } catch {
        return lI11li;
      }
    }
    ["getjson"](i1liiI, lIlIi) {
      {
        let lI11lI = lIlIi;
        const IIilI = this.getdata(i1liiI);
        if (IIilI) try {
          lI11lI = JSON.parse(this.getdata(i1liiI));
        } catch {}
        return lI11lI;
      }
    }
    ["setjson"](I1i1Il, lI11il) {
      try {
        return this.setdata(JSON.stringify(I1i1Il), lI11il);
      } catch {
        return false;
      }
    }
    ["getScript"](lii11I) {
      return new Promise(iiIII1 => {
        this.get({
          "url": lii11I
        }, (li1iII, lIIi1, I1i1II) => iiIII1(I1i1II));
      });
    }
    ["runScript"](l1IiIi, lil1II) {
      return new Promise(l1IiIl => {
        let IIil1 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        IIil1 = IIil1 ? IIil1.replace(/\n/g, "").trim() : IIil1;
        let iIi1II = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        iIi1II = iIi1II ? 1 * iIi1II : 20;
        iIi1II = lil1II && lil1II.timeout ? lil1II.timeout : iIi1II;
        const [Iill11, lliili] = IIil1.split("@"),
          Iill1I = {
            "url": "http://" + lliili + "/v1/scripting/evaluate",
            "body": {
              "script_text": l1IiIi,
              "mock_type": "cron",
              "timeout": iIi1II
            },
            "headers": {
              "Accept": "*/*"
            }
          };
        this.post(Iill1I, (lI1, II1Ill, iiIIII) => l1IiIl(iiIIII));
      }).catch(li1iI1 => this.logErr(li1iI1));
    }
    ["loaddata"]() {
      {
        if (!this.isNode()) return {};
        {
          {
            this.fs = this.fs ? this.fs : require("fs");
            this.path = this.path ? this.path : require("path");
            const i1lil1 = this.path.resolve(this.dataFile),
              ilIli = this.path.resolve(process.cwd(), this.dataFile),
              lI11ii = this.fs.existsSync(i1lil1),
              lii11i = !lI11ii && this.fs.existsSync(ilIli);
            if (!lI11ii && !lii11i) return {};
            {
              const ilIll = lI11ii ? i1lil1 : ilIli;
              try {
                return JSON.parse(this.fs.readFileSync(ilIll));
              } catch (I1l1i1) {
                return {};
              }
            }
          }
        }
      }
    }
    ["writedata"]() {
      if (this.isNode()) {
        {
          this.fs = this.fs ? this.fs : require("fs");
          this.path = this.path ? this.path : require("path");
          const iiIIIi = this.path.resolve(this.dataFile),
            lIIiI = this.path.resolve(process.cwd(), this.dataFile),
            ilIlI = this.fs.existsSync(iiIIIi),
            lIii11 = !ilIlI && this.fs.existsSync(lIIiI),
            lIliI1 = JSON.stringify(this.data);
          ilIlI ? this.fs.writeFileSync(iiIIIi, lIliI1) : lIii11 ? this.fs.writeFileSync(lIIiI, lIliI1) : this.fs.writeFileSync(iiIIIi, lIliI1);
        }
      }
    }
    ["lodash_get"](IIili, liiIi1, lIi) {
      {
        const liiIiI = liiIi1.replace(/\[(\d+)\]/g, ".$1").split(".");
        let li1iIi = IIili;
        for (const liilII of liiIiI) if (li1iIi = Object(li1iIi)[liilII], undefined === li1iIi) return lIi;
        return li1iIi;
      }
    }
    ["lodash_set"](lIIl1, lllII1, iiIl1I) {
      return Object(lIIl1) !== lIIl1 ? lIIl1 : (Array.isArray(lllII1) || (lllII1 = lllII1.toString().match(/[^.[\]]+/g) || []), lllII1.slice(0, -1).reduce((il111I, lliI11, ilIil) => Object(il111I[lliI11]) === il111I[lliI11] ? il111I[lliI11] : il111I[lliI11] = Math.abs(lllII1[ilIil + 1]) >> 0 == +lllII1[ilIil + 1] ? [] : {}, lIIl1)[lllII1[lllII1.length - 1]] = iiIl1I, lIIl1);
    }
    ["getdata"](lllIII) {
      let lIii1i = this.getval(lllIII);
      if (/^@/.test(lllIII)) {
        const [, iiIl11, II1Iii] = /^@(.*?)\.(.*?)$/.exec(lllIII),
          II1Iil = iiIl11 ? this.getval(iiIl11) : "";
        if (II1Iil) try {
          const lliI1I = JSON.parse(II1Iil);
          lIii1i = lliI1I ? this.lodash_get(lliI1I, II1Iii, "") : lIii1i;
        } catch (il1111) {
          lIii1i = "";
        }
      }
      return lIii1i;
    }
    ["setdata"](lIliIi, lIii1l) {
      let lIliIl = false;
      if (/^@/.test(lIii1l)) {
        const [, IiiI11, liiIl] = /^@(.*?)\.(.*?)$/.exec(lIii1l),
          iiIl1i = this.getval(IiiI11),
          II1Ii1 = IiiI11 ? "null" === iiIl1i ? null : iiIl1i || "{}" : "{}";
        try {
          {
            const IilII1 = JSON.parse(II1Ii1);
            this.lodash_set(IilII1, liiIl, lIliIi);
            lIliIl = this.setval(JSON.stringify(IilII1), IiiI11);
          }
        } catch (Ii1) {
          {
            const II1IiI = {};
            this.lodash_set(II1IiI, liiIl, lIliIi);
            lIliIl = this.setval(JSON.stringify(II1IiI), IiiI11);
          }
        }
      } else lIliIl = this.setval(lIliIi, lIii1l);
      return lIliIl;
    }
    ["getval"](IilIII) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(IilIII) : this.isQuanX() ? $prefs.valueForKey(IilIII) : this.isNode() ? (this.data = this.loaddata(), this.data[IilIII]) : this.data && this.data[IilIII] || null;
    }
    ["setval"](lIIlI, ilIiI) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(lIIlI, ilIiI) : this.isQuanX() ? $prefs.setValueForKey(lIIlI, ilIiI) : this.isNode() ? (this.data = this.loaddata(), this.data[ilIiI] = lIIlI, this.writedata(), true) : this.data && this.data[ilIiI] || null;
    }
    ["initGotEnv"](liiIl1) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      liiIl1 && (liiIl1.headers = liiIl1.headers ? liiIl1.headers : {}, undefined === liiIl1.headers.Cookie && undefined === liiIl1.cookieJar && (liiIl1.cookieJar = this.ckjar));
    }
    ["get"](IIIilI, III1I = () => {}) {
      IIIilI.headers && (delete IIIilI.headers["Content-Type"], delete IIIilI.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (IIIilI.headers = IIIilI.headers || {}, Object.assign(IIIilI.headers, {
        "X-Surge-Skip-Scripting": false
      })), $httpClient.get(IIIilI, (l11IIi, llll1i, llll1l) => {
        !l11IIi && llll1i && (llll1i.body = llll1l, llll1i.statusCode = llll1i.status);
        III1I(l11IIi, llll1i, llll1l);
      })) : this.isQuanX() ? (this.isNeedRewrite && (IIIilI.opts = IIIilI.opts || {}, Object.assign(IIIilI.opts, {
        "hints": false
      })), $task.fetch(IIIilI).then(llI1i1 => {
        {
          const {
            statusCode: i1I1Ii,
            statusCode: I11Ii,
            headers: i1I1Il,
            body: IiI1iI
          } = llI1i1;
          III1I(null, {
            "status": i1I1Ii,
            "statusCode": I11Ii,
            "headers": i1I1Il,
            "body": IiI1iI
          }, IiI1iI);
        }
      }, ii1lll => III1I(ii1lll))) : this.isNode() && (this.initGotEnv(IIIilI), this.got(IIIilI).on("redirect", (lilliI, liiIli) => {
        try {
          if (lilliI.headers["set-cookie"]) {
            {
              const IiI1i1 = lilliI.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
              IiI1i1 && this.ckjar.setCookieSync(IiI1i1, null);
              liiIli.cookieJar = this.ckjar;
            }
          }
        } catch (l11IIl) {
          this.logErr(l11IIl);
        }
      }).then(IliiI1 => {
        const {
          statusCode: III1l,
          statusCode: ilIiIi,
          headers: liiIil,
          body: IIIili
        } = IliiI1;
        III1I(null, {
          "status": III1l,
          "statusCode": ilIiIi,
          "headers": liiIil,
          "body": IIIili
        }, IIIili);
      }, iIllll => {
        {
          const {
            message: IlI,
            response: III1i
          } = iIllll;
          III1I(IlI, III1i, III1i && III1i.body);
        }
      }));
    }
    ["post"](iil1I, I1llll = () => {}) {
      if (iil1I.body && iil1I.headers && !iil1I.headers["Content-Type"] && (iil1I.headers["Content-Type"] = "application/json"), iil1I.headers && delete iil1I.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (iil1I.headers = iil1I.headers || {}, Object.assign(iil1I.headers, {
        "X-Surge-Skip-Scripting": false
      })), $httpClient.post(iil1I, (il11i, lillli, IlIlII) => {
        !il11i && lillli && (lillli.body = IlIlII, lillli.statusCode = lillli.status);
        I1llll(il11i, lillli, IlIlII);
      });else {
        if (this.isQuanX()) iil1I.method = "POST", this.isNeedRewrite && (iil1I.opts = iil1I.opts || {}, Object.assign(iil1I.opts, {
          "hints": false
        })), $task.fetch(iil1I).then(llil1 => {
          const {
            statusCode: iiIIi,
            statusCode: iiIIl,
            headers: llI1iI,
            body: i1iI
          } = llil1;
          I1llll(null, {
            "status": iiIIi,
            "statusCode": iiIIl,
            "headers": llI1iI,
            "body": i1iI
          }, i1iI);
        }, lillii => I1llll(lillii));else {
          if (this.isNode()) {
            {
              this.initGotEnv(iil1I);
              const {
                url: IIIiiI,
                ...IiI1lI
              } = iil1I;
              this.got.post(IIIiiI, IiI1lI).then(il11I => {
                {
                  const {
                    statusCode: i1i1,
                    statusCode: lillil,
                    headers: lliil,
                    body: IlIlI1
                  } = il11I;
                  I1llll(null, {
                    "status": i1i1,
                    "statusCode": lillil,
                    "headers": lliil,
                    "body": IlIlI1
                  }, IlIlI1);
                }
              }, il111 => {
                {
                  const {
                    message: llI1ii,
                    response: Ilii1II1
                  } = il111;
                  I1llll(llI1ii, Ilii1II1, Ilii1II1 && Ilii1II1.body);
                }
              });
            }
          }
        }
      }
    }
    ["time"](iIililIl, IiIl11iI = null) {
      {
        const lIIilI1 = IiIl11iI ? new Date(IiIl11iI) : new Date();
        let iIllIli = {
          "M+": lIIilI1.getMonth() + 1,
          "d+": lIIilI1.getDate(),
          "H+": lIIilI1.getHours(),
          "m+": lIIilI1.getMinutes(),
          "s+": lIIilI1.getSeconds(),
          "q+": Math.floor((lIIilI1.getMonth() + 3) / 3),
          "S": lIIilI1.getMilliseconds()
        };
        /(y+)/.test(iIililIl) && (iIililIl = iIililIl.replace(RegExp.$1, (lIIilI1.getFullYear() + "").substr(4 - RegExp.$1.length)));
        for (let IIIl1i11 in iIllIli) new RegExp("(" + IIIl1i11 + ")").test(iIililIl) && (iIililIl = iIililIl.replace(RegExp.$1, 1 == RegExp.$1.length ? iIllIli[IIIl1i11] : ("00" + iIllIli[IIIl1i11]).substr(("" + iIllIli[IIIl1i11]).length)));
        return iIililIl;
      }
    }
    ["msg"](iIllIll = IlIIll, IIII11l1 = "", i1lill1I = "", lIlIllii) {
      {
        const I1Iilii = IIlillll => {
          {
            if (!IIlillll) return IIlillll;
            if ("string" == typeof IIlillll) return this.isLoon() ? IIlillll : this.isQuanX() ? {
              "open-url": IIlillll
            } : this.isSurge() ? {
              "url": IIlillll
            } : undefined;
            if ("object" == typeof IIlillll) {
              {
                if (this.isLoon()) {
                  let I1IiliI = IIlillll.openUrl || IIlillll.url || IIlillll["open-url"],
                    iiI1iI1I = IIlillll.mediaUrl || IIlillll["media-url"];
                  return {
                    "openUrl": I1IiliI,
                    "mediaUrl": iiI1iI1I
                  };
                }
                if (this.isQuanX()) {
                  let lIlIllli = IIlillll["open-url"] || IIlillll.url || IIlillll.openUrl,
                    l1Ili1li = IIlillll["media-url"] || IIlillll.mediaUrl;
                  return {
                    "open-url": lIlIllli,
                    "media-url": l1Ili1li
                  };
                }
                if (this.isSurge()) {
                  let IIII11ll = IIlillll.url || IIlillll.openUrl || IIlillll["open-url"];
                  return {
                    "url": IIII11ll
                  };
                }
              }
            }
          }
        };
        if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(iIllIll, IIII11l1, i1lill1I, I1Iilii(lIlIllii)) : this.isQuanX() && $notify(iIllIll, IIII11l1, i1lill1I, I1Iilii(lIlIllii))), !this.isMuteLog) {
          {
            let l1Ili1ll = ["", "==============📣系统通知📣=============="];
            l1Ili1ll.push(iIllIll);
            IIII11l1 && l1Ili1ll.push(IIII11l1);
            i1lill1I && l1Ili1ll.push(i1lill1I);
            console.log(l1Ili1ll.join("\n"));
            this.logs = this.logs.concat(l1Ili1ll);
          }
        }
      }
    }
    ["log"](...iiI1iI11) {
      iiI1iI11.length > 0 && (this.logs = [...this.logs, ...iiI1iI11]);
      console.log(iiI1iI11.join(this.logSeparator));
    }
    ["logErr"](l1lIIIl, IiIl11il) {
      {
        const i1II111I = !this.isSurge() && !this.isQuanX() && !this.isLoon();
        i1II111I ? this.log("", "❗️" + this.name + ", 错误!", l1lIIIl.stack) : this.log("", "❗️" + this.name + ", 错误!", l1lIIIl);
      }
    }
    ["wait"](IiIl11ii) {
      return new Promise(iliIlili => setTimeout(iliIlili, IiIl11ii));
    }
    ["done"](l1li1IiI = {}) {
      const ii1IiII = new Date().getTime(),
        iliIlil1 = (ii1IiII - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + iliIlil1 + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(l1li1IiI);
    }
  }(IlIIll, i1IllI);
}