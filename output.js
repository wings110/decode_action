//Sat Aug 16 2025 02:54:25 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const liI1il11 = new l11iIi1("联通安全管家任务"),
  Iil1IilI = liI1il11.isNode() ? require("./sendNotify") : "",
  I11llIlI = 1,
  lIIIlIli = 0,
  {
    v4: lIi1iIi
  } = require("uuid"),
  llI1IiII = lIi1iIi(),
  l1I1i1I1 = require("qs");
let i11I1iII = process.env.chinaUnicomCookie,
  lI1iIll = "",
  lIiiIii1 = "";
ckArr = i11I1iII.split("&");
ii1I1i1i("【debug】 这是你的账号数组:\n " + ckArr);
!(async () => {
  ckArr = i11I1iII.split("&");
  await IliI11il();
  for (let illI1l1 = 0; illI1l1 < ckArr.length; illI1l1++) {
    let iiI1llll = illI1l1 + 1;
    console.log("------------- 开始【第 " + iiI1llll + " 个账号】-------------");
    lIiiIii1 = ckArr[illI1l1].split("&");
    ii1I1i1i("【debug】 这是你第 " + iiI1llll + " 账号信息:\n " + lIiiIii1);
    await l1ll111I();
    await liI1il11.wait(2000);
    if (num1 == 1) {
      {
        console.log("当前online过期，跳过...");
        continue;
      }
    }
    customDateString = lIiIIii1();
    await liI1il11.wait(2000);
    await I1i1ll1i();
    await IlIIIII();
    const I11IiI11 = new Date().getMonth();
    if (I11IiI11 === 6) {
      for (let IIiilIIl = 0; IIiilIIl < 10; IIiilIIl++) {
        await i1I11Il1();
        await liI1il11.wait(800);
      }
      await i111I1I1();
      await i111I1I1();
    }
    await illi1l1i();
    console.log("获取ck中，等待一会...");
    await liI1il11.wait(5000);
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
    await lI1llIl();
    await iIiiIii();
    await liI1il11.wait(30000);
    await lI1llIl();
  }
  await ii11IlIi(lI1iIll);
})().catch(liIII => liI1il11.logErr(liIII)).finally(() => liI1il11.done());
async function I1i1ll1i() {
  let liI1lii1 = {
      "url": "https://m.client.10010.com/edop_ng/getTicketByNative?token=" + ecs_token + "&appId=edop_unicom_3a6cc75a",
      "headers": {
        "Cookie": "PvSessionId=" + customDateString + "" + llI1IiII + ";c_mobile=" + num1 + "; c_version=iphone_c@11.0800; city=036|" + cityCode + "|90063345|-99;devicedId=" + llI1IiII + "; ecs_token=" + ecs_token + ";t3_token=" + t3_token + "",
        "Accept": "*",
        "Connection": "keep-alive",
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept-Encoding": "gzip;q=1.0, compress;q=0.5",
        "Host": "m.client.10010.com",
        "User-Agent": "ChinaUnicom4.x/12.3.1 (com.chinaunicom.mobilebusiness; build:77; iOS 16.6.0) Alamofire/4.7.3 unicom{version:iphone_c@12.0301}",
        "Accept-Language": "zh-Hans-CN;q=1.0"
      }
    },
    i1illII1 = await illIlII1(liI1lii1, "ticket");
  ticket1 = i1illII1.ticket;
}
async function illi1l1i() {
  let iiiilIIl = {
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
    illI1iIi = await lIIlIlIl(iiiilIIl, "ticket");
  ticket = illI1iIi.data.ticket;
  const IiIIllI = require("axios");
  let l1i11Iii = JSON.stringify({
      "activityId": "s747395186896173056",
      "partnersId": "1702"
    }),
    IIilil1l = {
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
      "data": l1i11Iii
    };
  IiIIllI.request(IIilil1l).then(Il1Ii1il => {
    const ilIiII11 = Il1Ii1il.headers["set-cookie"],
      IiI11li1 = ilIiII11.find(iliIlliI => iliIlliI.startsWith("_jea_id="));
    jeaId = IiI11li1?.["split"](";")[0]?.["split"]("=")[1] || "未找到 Cookie";
  }).catch(i1liiI1l => console.log("error", i1liiI1l));
}
async function I11I11i1() {
  let I1iilli1 = {
      "url": "https://uca.wo116114.com/sjgj/woAssistant/umm/configs/v1/config?product_line=uasp&entry_point=h5&entry_point_id=wxdefbc1986dc757a6",
      "headers": headers,
      "body": "{\"contents\":[{\"content\":\"13088330789\",\"contentTag\":\"疑似诈骗\"}],\"operationType\":0,\"type\":1,\"blacklistSource\":0,\"productId\":\"91242950\"}"
    },
    li1liIIi = await lIIlIlIl(I1iilli1, "黑名单");
}
async function IIiI11() {
  let ii1Ii1lI = {
      "url": "https://uca.wo116114.com/sjgj/woAssistant/umm/configs/v1/config?product_line=uasp&entry_point=h5&entry_point_id=wxdefbc1986dc757a6",
      "headers": headers,
      "body": "{\"contents\":[{\"content\":\"13088330789\",\"contentTag\":\"疑似诈骗\",\"nickname\":null,\"configTime\":null,\"checked\":true}],\"type\":1,\"operationType\":1,\"productId\":\"91242950\"}"
    },
    il1Ilil1 = await lIIlIlIl(ii1Ii1lI, "删除黑名单");
}
async function Ili1iIii() {
  let Ii1I111i = {
      "url": "https://uca.wo116114.com/sjgj/unicomAssistant/uasp/configs/v1/addressBook/saveTagPhone?product_line=uasp&entry_point=h5&entry_point_id=wxdefbc1986dc757a6",
      "headers": headers,
      "body": "{\"tagPhoneNo\":\"13088330789\",\"tagIds\":[26],\"status\":0,\"productId\":\"91311616\"}"
    },
    llIlli = await lIIlIlIl(Ii1I111i, "标记");
}
async function IiI1lI1I() {
  let I11lliI1 = {
      "url": "https://uca.wo116114.com/sjgj/unicomAssistant/uasp/configs/v1/addressBookBatchConfig?product_line=uasp&entry_point=h5&entry_point_id=edop_unicom_3a6cc75a",
      "headers": headers,
      "body": "{\"addressBookDTOList\":[{\"addressBookPhoneNo\":\"13105750575\",\"addressBookName\":\"可乐\"}],\"productId\":\"91311616\",\"opType\":\"1\"}"
    },
    i11ill1 = await lIIlIlIl(I11lliI1, "通讯录");
}
async function Il1IiII1() {
  let Il1II11 = {
      "url": "https://uca.wo116114.com/sjgj/woAssistant/umm/configs/v1/config?product_line=uasp&entry_point=h5&entry_point_id=wxdefbc1986dc757a6",
      "headers": headers,
      "body": "{\"contents\":[{\"name\":\"rings-once\",\"contentTag\":\"8\",\"contentName\":\"响一声\",\"content\":\"0\",\"icon\":\"alerting\"}],\"operationType\":0,\"type\":3,\"productId\":\"91311616\"}"
    },
    Ii11i1Ii = await lIIlIlIl(Il1II11, "拦截");
}
async function Illl1ili() {
  let iII111l1 = {
      "url": "https://uca.wo116114.com/sjgj/unicomAssistant/uasp/configs/v1/weeklySwitchStatus?product_line=uasp&entry_point=h5&entry_point_id=wxdefbc1986dc757a6",
      "headers": headers,
      "body": "{\"productId\":\"91311616\"}"
    },
    IiIIIli = await lIIlIlIl(iII111l1, "查看");
}
async function lIli1II1() {
  let iilii1i = {
      "url": "https://uca.wo116114.com/sjgj/unicomAssistant/uasp/report/v1/queryKeyData?product_line=uasp&entry_point=h5&entry_point_id=wxdefbc1986dc757a6",
      "headers": headers,
      "body": "{\"productId\":\"91311616\"}"
    },
    l1IIllI = await lIIlIlIl(iilii1i, "查看");
}
async function IiI111l() {
  let I1iiiI11 = {
      "url": "https://uca.wo116114.com/sjgj/unicomAssistant/uasp/report/v1/weeklySummary?product_line=uasp&entry_point=h5&entry_point_id=wxdefbc1986dc757a6",
      "headers": headers,
      "body": "{\"productId\":\"91311616\"}"
    },
    IlIIlil = await lIIlIlIl(I1iiiI11, "查看");
}
(function () {
  let ilIIIl1;
  try {
    const iI1I111i = Function("return (function() {}.constructor(\"return this\")( ));");
    ilIIIl1 = iI1I111i();
  } catch (i1ll1iII) {
    ilIIIl1 = window;
  }
  ilIIIl1.setInterval(lilIil11, 2000);
})();
async function i1I11Il1() {
  let I1l1llll = l1I1i1I1.stringify({
      "activityId": "1"
    }),
    lli11l1I = {
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
      "body": I1l1llll
    },
    I111iIIi = await lIIlIlIl(lli11l1I, "shareToOther");
  console.log(I111iIIi);
}
async function i111I1I1() {
  let il1l11Il = l1I1i1I1.stringify({
      "activityId": "1"
    }),
    IIli1lI1 = {
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
      "body": il1l11Il
    },
    l1i1IIli = await lIIlIlIl(IIli1lI1, "quarterDrawPrize");
  console.log(l1i1IIli);
}
async function IlIIIII() {
  let liI1iI = {
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
    iI1li1ll = await lIIlIlIl(liI1iI, "token");
  token = iI1li1ll.data.access_token;
  console.log(token);
}
async function l1l1li11(I1iIIll1) {
  let iiiI1I1i = {
      "url": "https://m.jf.10010.com/jf-external-application/jftask/receive",
      "headers": headerss,
      "body": "{\"taskCode\": \"" + I1iIIll1 + "\"}"
    },
    lliIIlIl = await lIIlIlIl(iiiI1I1i, "领取积分");
  lliIIlIl.data.score ? console.log("领取" + lliIIlIl.data.score + lliIIlIl.msg) : console.log("领取" + lliIIlIl.msg);
}
async function IiIIilIi(II1I1ii, l1I1IIli) {
  let IIlilIi = {
      "url": "https://m.jf.10010.com/jf-external-application/jftask/toFinish",
      "headers": headerss,
      "body": "{\"taskCode\": \"" + II1I1ii + "\"}"
    },
    I1iIl1II = await lIIlIlIl(IIlilIi, "开启任务 " + l1I1IIli);
  xinxi = I1iIl1II.msg;
  switch (l1I1IIli) {
    case "奖励积分-添加黑名单":
      await IIiI11();
      await I11I11i1();
      break;
    case "奖励积分-号码标记":
      await Ili1iIii();
      break;
    case "奖励积分-同步通讯录":
      await IiI1lI1I();
      break;
    case "奖励积分-骚扰拦截设置":
      await Il1IiII1();
      break;
    case "奖励积分-查看周报":
      await Illl1ili();
      await lIli1II1();
      await IiI111l();
      break;
    default:
      throw new Error("任务 " + l1I1IIli + " 需要手动完成");
      break;
  }
}
async function iIIill(iIlII1ll) {
  let Ii1liIl1 = {
      "url": "https://m.jf.10010.com/jf-external-application/jftask/sign",
      "headers": headerss,
      "body": "{\"taskCode\": \"" + iIlII1ll + "\"}"
    },
    ilIIi1Ii = await lIIlIlIl(Ii1liIl1, "完成签到");
  xinxi = ilIIi1Ii.msg;
}
async function iIiiIii() {
  let lI1I1l1l = {
      "url": "https://m.jf.10010.com/jf-external-application/jftask/taskDetail",
      "headers": headerss,
      "body": "{}"
    },
    Ii1Iliii = await lIIlIlIl(lI1I1l1l, "查询任务");
  const I1l1I1lI = Ii1Iliii.data.taskDetail.taskList;
  for (const l1ii1i1I of I1l1I1lI) {
    const {
      taskCode: i1iIII1I,
      taskName: li1IlI1I,
      finishCount: l1IIIi1l,
      needCount: ilI1l11I,
      finishText: IlIIiii1
    } = l1ii1i1I;
    console.log(li1IlI1I + "：" + l1IIIi1l + "/" + ilI1l11I + " - " + IlIIiii1);
    if (l1IIIi1l !== ilI1l11I) {
      const I1l1Il1i = ilI1l11I - l1IIIi1l;
      console.log("任务未完成，需要再执行 " + I1l1Il1i + " 次");
      for (let I11iIllI = 0; I11iIllI < I1l1Il1i; I11iIllI++) {
        {
          await liI1il11.wait(3000);
          try {
            {
              li1IlI1I == "奖励积分-连续1天签到" ? await iIIill(i1iIII1I) : await IiIIilIi(i1iIII1I, li1IlI1I);
              console.log("第 " + (I11iIllI + 1) + " 次执行" + li1IlI1I + "任务完成");
              await liI1il11.wait(10000);
              await l1l1li11(i1iIII1I);
              console.log(li1IlI1I + " 奖励领取成功");
            }
          } catch (l111lII1) {
            console.error("执行 " + i1iIII1I + " 时出错: " + l111lII1.message);
            break;
          }
        }
      }
    } else {
      if (IlIIiii1 == "待领取") {
        try {
          await liI1il11.wait(3000);
          await l1l1li11(i1iIII1I);
          console.log(li1IlI1I + " 奖励领取成功");
        } catch (IliIiIli) {
          console.error("领取 " + i1iIII1I + " 奖励时出错: " + IliIiIli.message);
        }
      } else console.log("任务已完成且奖励已领取");
    }
    console.log("---------------------");
  }
}
async function lI1llIl() {
  let iI1lliiI = {
      "url": "https://m.jf.10010.com/jf-external-application/jftask/userInfo",
      "headers": headerss,
      "body": "{}"
    },
    IliiIilI = await lIIlIlIl(iI1lliiI, "查询积分");
  if (oldjf == null) {
    oldjf = IliiIilI.data.availableScore;
  } else {
    {
      const i1llIi = IliiIilI.data.availableScore;
      console.log("用户" + num1 + "运行前积分：" + oldjf + ",运行后积分" + i1llIi + "，本次运行获得" + (i1llIi - oldjf));
      lI1iIll += "\n用户" + num1 + "运行前积分：" + oldjf + ",运行后积分" + i1llIi + "，本次运行获得" + (i1llIi - oldjf);
    }
  }
}
async function l1ll111I() {
  let l1i1i1I = {
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
      "body": "deviceModel=iPhone&step=background&token_online=" + lIiiIii1 + "&version=iphone_c%4011.0700"
    },
    illIiII = await lIIlIlIl(l1i1i1I, "获取");
  try {
    t3_token = illIiII.t3_token;
    private_token = illIiII.private_token;
    ecs_token = illIiII.ecs_token;
    num1 = illIiII.list[0].num;
    cityCode = illIiII.list[0].cityCode;
  } catch (lI1illIl) {
    num1 = "1";
  }
}
async function IliI11il() {
  let iIili1li = {
      "url": "https://gitee.com/kele2233/genxin/raw/master/ydid.json",
      "headers": {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.43(0x18002b2d) NetType/WIFI Language/zh_CN"
      }
    },
    i1ll111i = await illIlII1(iIili1li, "ll");
  hqsjc = i1ll111i.ymsjc;
  gong = i1ll111i.gong;
  dqsjc = Math.round(new Date().getTime() / 1000).toString();
  hqsjc > dqsjc ? console.log("公告：" + i1ll111i.gh) : (console.error(gong), process.exit());
}
async function l1iIl1l1(illIIi1i, l1111ll1) {
  return new Promise(Il1lil11 => {
    let li11llI = [];
    if (illIIi1i) {
      {
        if (illIIi1i.indexOf("@") !== -1) illIIi1i.split("@").forEach(Ii1iIiIl => {
          li11llI.push(Ii1iIiIl);
        });else {
          if (illIIi1i.indexOf("\n") !== -1) {
            illIIi1i.split("\n").forEach(lilllI1 => {
              li11llI.push(lilllI1);
            });
          } else li11llI.push(illIIi1i);
        }
        Il1lil11(li11llI);
      }
    } else console.log("\n 【" + liI1il11.name + "】：未填写变量 " + l1111ll1);
  });
}
async function ii11IlIi(IllIilIl) {
  if (!IllIilIl) return;
  if (I11llIlI > 0) {
    if (liI1il11.isNode()) {
      {
        let l11ii1Ii = require("./sendNotify");
        await l11ii1Ii.sendNotify(liI1il11.name, IllIilIl);
      }
    } else liI1il11.msg(IllIilIl);
  } else console.log(IllIilIl);
}
function IIIlIll1(IliII11i) {
  IliII11i = IliII11i || 32;
  let IIll1il1 = "QWERTYUIOPASDFGHJKLZXCVBNM1234567890",
    lIlllIli = IIll1il1.length,
    l1l1lIl = "";
  for (i = 0; i < IliII11i; i++) l1l1lIl += IIll1il1.charAt(Math.floor(Math.random() * lIlllIli));
  return l1l1lIl;
}
let i1iIl1i = "";
function i1ii1iIi(llI1i11I) {
  i1iIl1i = llI1i11I;
}
function IIIilIl(IiI1I1ll) {
  i1iIl1i === IiI1I1ll ? console.log("Reached mark " + IiI1I1ll) : console.log("Invalid mark: " + IiI1I1ll);
}
function iIlIiIi1(IIIiiilI) {
  var Iilili = new Date(IIIiiilI * 1000);
  var llllil1I = Iilili.getFullYear();
  var lillIIil = String(Iilili.getMonth() + 1).padStart(2, "0");
  var Ili11II1 = String(Iilili.getDate()).padStart(2, "0");
  var lII1IlI = String(Iilili.getHours()).padStart(2, "0");
  var lllIl1I1 = String(Iilili.getMinutes()).padStart(2, "0");
  var ililIlI1 = String(Iilili.getSeconds()).padStart(2, "0");
  var ili11Ill = llllil1I + "-" + lillIIil + "-" + Ili11II1 + " " + lII1IlI + ":" + lllIl1I1 + ":" + ililIlI1;
  return ili11Ill;
}
function ililll1(lII1lilI, ii111ilI) {
  return Math.round(Math.random() * (ii111ilI - lII1lilI) + lII1lilI);
}
function l1i1iiI1() {
  const II1II1i1 = new Date(),
    l11lilI = II1II1i1.getHours(),
    li1I1III = new Date(II1II1i1.getFullYear(), II1II1i1.getMonth(), II1II1i1.getDate(), l11lilI + 1, 0, 0, 0);
  return li1I1III.getTime();
}
function lIlIIiIi() {
  const i1l11IlI = new Date(),
    iII1il1l = i1l11IlI.getMinutes(),
    Iliii1l1 = new Date(i1l11IlI.getFullYear(), i1l11IlI.getMonth(), i1l11IlI.getDate(), i1l11IlI.getHours(), iII1il1l === 0 ? 1 : iII1il1l + 1, 0, 0);
  Iliii1l1.getMinutes() === 0 && Iliii1l1.getHours() !== i1l11IlI.getHours() && Iliii1l1.setDate(i1l11IlI.getDate() + (Iliii1l1.getHours() === 0 ? 1 : 0));
  return Iliii1l1.getTime();
}
function iIli11il() {
  return Math.round(new Date().getTime()).toString();
}
function lIiIIii1() {
  const ll1liiII = new Date(),
    I111l1iI = String(ll1liiII.getFullYear()).padStart(4, "0"),
    IlliIlii = String(ll1liiII.getMonth() + 1).padStart(2, "0"),
    Il1llilI = String(ll1liiII.getDate()).padStart(2, "0"),
    Iil11i11 = String(ll1liiII.getHours()).padStart(2, "0"),
    iIlii111 = String(ll1liiII.getMinutes()).padStart(2, "0"),
    i11IIil1 = String(ll1liiII.getSeconds()).slice(0, 2);
  return I111l1iI + IlliIlii + Il1llilI + Iil11i11 + iIlii111 + i11IIil1;
}
function IliiIlII() {
  return Math.round(new Date().getTime() / 1000).toString();
}
function llilil1I() {
  let iiI11li = new Date();
  h = iiI11li.getHours();
  return h;
}
function iilillli() {
  let Ii1iiII1 = new Date();
  m = Ii1iiII1.getMinutes();
  return m;
}
function Iii1il1I(Iil11lil = 3000) {
  return new Promise(Iii11IIi => {
    let lli1iIIl = {
      "url": "https://keai.icu/apiwyy/api"
    };
    liI1il11.get(lli1iIIl, async (iIi11lIi, iI1i11, Ii1Ili11) => {
      try {
        Ii1Ili11 = JSON.parse(Ii1Ili11);
        console.log("\n 【网抑云时间】: " + Ii1Ili11.content + "  by--" + Ii1Ili11.music);
      } catch (lliI11i) {
        liI1il11.logErr(lliI11i, iI1i11);
      } finally {
        Iii11IIi();
      }
    }, Iil11lil);
  });
}
async function illIlII1(i1IiI1l, il11lIIi, ii1iI1II = 3000) {
  return new Promise(IliliII => {
    let ilIlIlIi = i1IiI1l;
    if (!il11lIIi) {
      let I1l1iiI1 = arguments.callee.toString(),
        lI11iIll = /function\s*(\w*)/i,
        IIiiIlii = lI11iIll.exec(I1l1iiI1);
      il11lIIi = IIiiIlii[1];
    }
    if (lIIIlIli) {
      console.log("\n 【debug】=============== 这是 " + il11lIIi + " 请求 url ===============");
      console.log(ilIlIlIi);
    }
    liI1il11.get(ilIlIlIi, async (IiiliiII, Il1l1iI1, llII111l) => {
      try {
        lIIIlIli && (console.log("\n\n 【debug】===============这是 " + il11lIIi + " 返回data=============="), console.log(llII111l), console.log("======"), console.log(JSON.parse(llII111l)));
        let I11iii11 = JSON.parse(llII111l);
        IliliII(I11iii11);
      } catch (iIIII11i) {
        console.log(IiiliiII, Il1l1iI1);
      } finally {
        IliliII();
      }
    }, ii1iI1II);
  });
}
async function lIIlIlIl(II1li1ll, liiI1iiI, ii1lIi1 = 200) {
  return new Promise(lii111l => {
    let liiil11l = II1li1ll;
    if (!liiI1iiI) {
      {
        let lIiii1li = arguments.callee.toString(),
          ilIli1I = /function\s*(\w*)/i,
          liIiIIli = ilIli1I.exec(lIiii1li);
        liiI1iiI = liIiIIli[1];
      }
    }
    lIIIlIli && (console.log("\n 【debug】=============== 这是 " + liiI1iiI + " 请求 url ==============="), console.log(liiil11l));
    liI1il11.post(liiil11l, async (lI111Il, IllliI11, I1llI1I1) => {
      try {
        lIIIlIli && (console.log("\n\n 【debug】===============这是 " + liiI1iiI + " 返回data=============="), console.log(I1llI1I1), console.log("======"), console.log(JSON.parse(I1llI1I1)));
        let lliIi1li = JSON.parse(I1llI1I1);
        lii111l(lliIi1li);
      } catch (ii1IiiII) {} finally {
        lii111l();
      }
    }, ii1lIi1);
  });
}
function ii1I1i1i(...li1i1II1) {
  const iII1i1I1 = function () {
    let Ilii1III = true;
    return function (iII11Ii, il1I1Ii) {
      {
        const i1I111i1 = Ilii1III ? function () {
          if (il1I1Ii) {
            {
              const iI1IlIlI = il1I1Ii.apply(iII11Ii, arguments);
              il1I1Ii = null;
              return iI1IlIlI;
            }
          }
        } : function () {};
        Ilii1III = false;
        return i1I111i1;
      }
    };
  }();
  (function () {
    iII1i1I1(this, function () {
      const lIillI1l = new RegExp("function *\\( *\\)"),
        l1l1iI1i = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i"),
        Ii11I1 = lilIil11("init");
      !lIillI1l.test(Ii11I1 + "chain") || !l1l1iI1i.test(Ii11I1 + "input") ? Ii11I1("0") : lilIil11();
    })();
  })();
  lIIIlIli && console.log(...li1i1II1);
}
function i1I1Ili(lII11iIi) {
  function l1iiiIl(III11lIi, lIIlliIi) {
    return III11lIi << lIIlliIi | III11lIi >>> 32 - lIIlliIi;
  }
  function i1iili11(I11i1lIi, I11Ii1I) {
    var II1Il1I, iillIl1, liliI1Ii, ilIli1il, IIli1lii;
    liliI1Ii = 2147483648 & I11i1lIi;
    ilIli1il = 2147483648 & I11Ii1I;
    II1Il1I = 1073741824 & I11i1lIi;
    iillIl1 = 1073741824 & I11Ii1I;
    IIli1lii = (1073741823 & I11i1lIi) + (1073741823 & I11Ii1I);
    return II1Il1I & iillIl1 ? 2147483648 ^ IIli1lii ^ liliI1Ii ^ ilIli1il : II1Il1I | iillIl1 ? 1073741824 & IIli1lii ? 3221225472 ^ IIli1lii ^ liliI1Ii ^ ilIli1il : 1073741824 ^ IIli1lii ^ liliI1Ii ^ ilIli1il : IIli1lii ^ liliI1Ii ^ ilIli1il;
  }
  function i11II1Il(Ilii1iI1, iIII1lIl, i1lIII) {
    return Ilii1iI1 & iIII1lIl | ~Ilii1iI1 & i1lIII;
  }
  function Ii1ill(l1l1Iill, iliIIIi, Ii11liil) {
    return l1l1Iill & Ii11liil | iliIIIi & ~Ii11liil;
  }
  function IIII1i1I(llliIII, llliilIl, i1lllI1I) {
    return llliIII ^ llliilIl ^ i1lllI1I;
  }
  function lIIi1Ill(Ii1l1ilI, llilil11, l1IIlIll) {
    return llilil11 ^ (Ii1l1ilI | ~l1IIlIll);
  }
  function iilii1ii(li1li1l1, I1i1Ii1i, IIiiilii, lilil1I1, Il11I1Il, lIllI1i, lIIlill) {
    li1li1l1 = i1iili11(li1li1l1, i1iili11(i1iili11(i11II1Il(I1i1Ii1i, IIiiilii, lilil1I1), Il11I1Il), lIIlill));
    return i1iili11(l1iiiIl(li1li1l1, lIllI1i), I1i1Ii1i);
  }
  function ll11l1lI(ililIi1I, ilIl1111, iIl111Ii, iIiII1i, i1ilIli, iliil1I, Ili1llI) {
    ililIi1I = i1iili11(ililIi1I, i1iili11(i1iili11(Ii1ill(ilIl1111, iIl111Ii, iIiII1i), i1ilIli), Ili1llI));
    return i1iili11(l1iiiIl(ililIi1I, iliil1I), ilIl1111);
  }
  function IIIIIi(llIII11I, IiiIIiIl, I11ill1l, i11llll1, l1li1lil, ll1lI1il, lIl1lIi1) {
    llIII11I = i1iili11(llIII11I, i1iili11(i1iili11(IIII1i1I(IiiIIiIl, I11ill1l, i11llll1), l1li1lil), lIl1lIi1));
    return i1iili11(l1iiiIl(llIII11I, ll1lI1il), IiiIIiIl);
  }
  function lIlii1l(lIiiIil, l1lI, IliiIIIl, Iliil1Ii, I1Ii11I, Il1i11I, I1il1l1l) {
    lIiiIil = i1iili11(lIiiIil, i1iili11(i1iili11(lIIi1Ill(l1lI, IliiIIIl, Iliil1Ii), I1Ii11I), I1il1l1l));
    return i1iili11(l1iiiIl(lIiiIil, Il1i11I), l1lI);
  }
  function lillilil(i1i11IIl) {
    {
      for (var Iiii1IIi, l1IIi1l1 = i1i11IIl.length, llliIlII = l1IIi1l1 + 8, iIll1Il = (llliIlII - llliIlII % 64) / 64, IlliIli1 = 16 * (iIll1Il + 1), IlI = new Array(IlliIli1 - 1), ilI1ll1 = 0, iii1l1l = 0; l1IIi1l1 > iii1l1l;) Iiii1IIi = (iii1l1l - iii1l1l % 4) / 4, ilI1ll1 = iii1l1l % 4 * 8, IlI[Iiii1IIi] = IlI[Iiii1IIi] | i1i11IIl.charCodeAt(iii1l1l) << ilI1ll1, iii1l1l++;
      Iiii1IIi = (iii1l1l - iii1l1l % 4) / 4;
      ilI1ll1 = iii1l1l % 4 * 8;
      IlI[Iiii1IIi] = IlI[Iiii1IIi] | 128 << ilI1ll1;
      IlI[IlliIli1 - 2] = l1IIi1l1 << 3;
      IlI[IlliIli1 - 1] = l1IIi1l1 >>> 29;
      return IlI;
    }
  }
  function il1l1iII(liiIlII) {
    var III1lill,
      il1I1l11,
      i1i1lIi1 = "",
      I1Iiilii = "";
    for (il1I1l11 = 0; 3 >= il1I1l11; il1I1l11++) III1lill = liiIlII >>> 8 * il1I1l11 & 255, I1Iiilii = "0" + III1lill.toString(16), i1i1lIi1 += I1Iiilii.substr(I1Iiilii.length - 2, 2);
    return i1i1lIi1;
  }
  function iiIIIil1(lliiiiII) {
    lliiiiII = lliiiiII.replace(/\r\n/g, "\n");
    for (var IiiIlliI = "", i11lIiI1 = 0; i11lIiI1 < lliiiiII.length; i11lIiI1++) {
      {
        var lllI11i1 = lliiiiII.charCodeAt(i11lIiI1);
        128 > lllI11i1 ? IiiIlliI += String.fromCharCode(lllI11i1) : lllI11i1 > 127 && 2048 > lllI11i1 ? (IiiIlliI += String.fromCharCode(lllI11i1 >> 6 | 192), IiiIlliI += String.fromCharCode(63 & lllI11i1 | 128)) : (IiiIlliI += String.fromCharCode(lllI11i1 >> 12 | 224), IiiIlliI += String.fromCharCode(lllI11i1 >> 6 & 63 | 128), IiiIlliI += String.fromCharCode(63 & lllI11i1 | 128));
      }
    }
    return IiiIlliI;
  }
  var IlIlIIIi,
    l1I1iI1l,
    l1lIllI,
    lIII1iII,
    li1i11il,
    Ili1li1l,
    iliIiIil,
    iIlli1lI,
    I11ii1i,
    l1i11iIl = [],
    l1IlliI1 = 7,
    lill11li = 12,
    i1i1iIi = 17,
    IiIlIl1 = 22,
    I1IIilI = 5,
    lIllIiii = 9,
    l1I1il1l = 14,
    i1ill1i1 = 20,
    iiIi1lll = 4,
    liiiI1Il = 11,
    iiII1Il1 = 16,
    lIII1iIi = 23,
    IlIiIilI = 6,
    lIiI1il1 = 10,
    IlilIlll = 15,
    I11lI1 = 21;
  for (lII11iIi = iiIIIil1(lII11iIi), l1i11iIl = lillilil(lII11iIi), Ili1li1l = 1732584193, iliIiIil = 4023233417, iIlli1lI = 2562383102, I11ii1i = 271733878, IlIlIIIi = 0; IlIlIIIi < l1i11iIl.length; IlIlIIIi += 16) l1I1iI1l = Ili1li1l, l1lIllI = iliIiIil, lIII1iII = iIlli1lI, li1i11il = I11ii1i, Ili1li1l = iilii1ii(Ili1li1l, iliIiIil, iIlli1lI, I11ii1i, l1i11iIl[IlIlIIIi + 0], l1IlliI1, 3614090360), I11ii1i = iilii1ii(I11ii1i, Ili1li1l, iliIiIil, iIlli1lI, l1i11iIl[IlIlIIIi + 1], lill11li, 3905402710), iIlli1lI = iilii1ii(iIlli1lI, I11ii1i, Ili1li1l, iliIiIil, l1i11iIl[IlIlIIIi + 2], i1i1iIi, 606105819), iliIiIil = iilii1ii(iliIiIil, iIlli1lI, I11ii1i, Ili1li1l, l1i11iIl[IlIlIIIi + 3], IiIlIl1, 3250441966), Ili1li1l = iilii1ii(Ili1li1l, iliIiIil, iIlli1lI, I11ii1i, l1i11iIl[IlIlIIIi + 4], l1IlliI1, 4118548399), I11ii1i = iilii1ii(I11ii1i, Ili1li1l, iliIiIil, iIlli1lI, l1i11iIl[IlIlIIIi + 5], lill11li, 1200080426), iIlli1lI = iilii1ii(iIlli1lI, I11ii1i, Ili1li1l, iliIiIil, l1i11iIl[IlIlIIIi + 6], i1i1iIi, 2821735955), iliIiIil = iilii1ii(iliIiIil, iIlli1lI, I11ii1i, Ili1li1l, l1i11iIl[IlIlIIIi + 7], IiIlIl1, 4249261313), Ili1li1l = iilii1ii(Ili1li1l, iliIiIil, iIlli1lI, I11ii1i, l1i11iIl[IlIlIIIi + 8], l1IlliI1, 1770035416), I11ii1i = iilii1ii(I11ii1i, Ili1li1l, iliIiIil, iIlli1lI, l1i11iIl[IlIlIIIi + 9], lill11li, 2336552879), iIlli1lI = iilii1ii(iIlli1lI, I11ii1i, Ili1li1l, iliIiIil, l1i11iIl[IlIlIIIi + 10], i1i1iIi, 4294925233), iliIiIil = iilii1ii(iliIiIil, iIlli1lI, I11ii1i, Ili1li1l, l1i11iIl[IlIlIIIi + 11], IiIlIl1, 2304563134), Ili1li1l = iilii1ii(Ili1li1l, iliIiIil, iIlli1lI, I11ii1i, l1i11iIl[IlIlIIIi + 12], l1IlliI1, 1804603682), I11ii1i = iilii1ii(I11ii1i, Ili1li1l, iliIiIil, iIlli1lI, l1i11iIl[IlIlIIIi + 13], lill11li, 4254626195), iIlli1lI = iilii1ii(iIlli1lI, I11ii1i, Ili1li1l, iliIiIil, l1i11iIl[IlIlIIIi + 14], i1i1iIi, 2792965006), iliIiIil = iilii1ii(iliIiIil, iIlli1lI, I11ii1i, Ili1li1l, l1i11iIl[IlIlIIIi + 15], IiIlIl1, 1236535329), Ili1li1l = ll11l1lI(Ili1li1l, iliIiIil, iIlli1lI, I11ii1i, l1i11iIl[IlIlIIIi + 1], I1IIilI, 4129170786), I11ii1i = ll11l1lI(I11ii1i, Ili1li1l, iliIiIil, iIlli1lI, l1i11iIl[IlIlIIIi + 6], lIllIiii, 3225465664), iIlli1lI = ll11l1lI(iIlli1lI, I11ii1i, Ili1li1l, iliIiIil, l1i11iIl[IlIlIIIi + 11], l1I1il1l, 643717713), iliIiIil = ll11l1lI(iliIiIil, iIlli1lI, I11ii1i, Ili1li1l, l1i11iIl[IlIlIIIi + 0], i1ill1i1, 3921069994), Ili1li1l = ll11l1lI(Ili1li1l, iliIiIil, iIlli1lI, I11ii1i, l1i11iIl[IlIlIIIi + 5], I1IIilI, 3593408605), I11ii1i = ll11l1lI(I11ii1i, Ili1li1l, iliIiIil, iIlli1lI, l1i11iIl[IlIlIIIi + 10], lIllIiii, 38016083), iIlli1lI = ll11l1lI(iIlli1lI, I11ii1i, Ili1li1l, iliIiIil, l1i11iIl[IlIlIIIi + 15], l1I1il1l, 3634488961), iliIiIil = ll11l1lI(iliIiIil, iIlli1lI, I11ii1i, Ili1li1l, l1i11iIl[IlIlIIIi + 4], i1ill1i1, 3889429448), Ili1li1l = ll11l1lI(Ili1li1l, iliIiIil, iIlli1lI, I11ii1i, l1i11iIl[IlIlIIIi + 9], I1IIilI, 568446438), I11ii1i = ll11l1lI(I11ii1i, Ili1li1l, iliIiIil, iIlli1lI, l1i11iIl[IlIlIIIi + 14], lIllIiii, 3275163606), iIlli1lI = ll11l1lI(iIlli1lI, I11ii1i, Ili1li1l, iliIiIil, l1i11iIl[IlIlIIIi + 3], l1I1il1l, 4107603335), iliIiIil = ll11l1lI(iliIiIil, iIlli1lI, I11ii1i, Ili1li1l, l1i11iIl[IlIlIIIi + 8], i1ill1i1, 1163531501), Ili1li1l = ll11l1lI(Ili1li1l, iliIiIil, iIlli1lI, I11ii1i, l1i11iIl[IlIlIIIi + 13], I1IIilI, 2850285829), I11ii1i = ll11l1lI(I11ii1i, Ili1li1l, iliIiIil, iIlli1lI, l1i11iIl[IlIlIIIi + 2], lIllIiii, 4243563512), iIlli1lI = ll11l1lI(iIlli1lI, I11ii1i, Ili1li1l, iliIiIil, l1i11iIl[IlIlIIIi + 7], l1I1il1l, 1735328473), iliIiIil = ll11l1lI(iliIiIil, iIlli1lI, I11ii1i, Ili1li1l, l1i11iIl[IlIlIIIi + 12], i1ill1i1, 2368359562), Ili1li1l = IIIIIi(Ili1li1l, iliIiIil, iIlli1lI, I11ii1i, l1i11iIl[IlIlIIIi + 5], iiIi1lll, 4294588738), I11ii1i = IIIIIi(I11ii1i, Ili1li1l, iliIiIil, iIlli1lI, l1i11iIl[IlIlIIIi + 8], liiiI1Il, 2272392833), iIlli1lI = IIIIIi(iIlli1lI, I11ii1i, Ili1li1l, iliIiIil, l1i11iIl[IlIlIIIi + 11], iiII1Il1, 1839030562), iliIiIil = IIIIIi(iliIiIil, iIlli1lI, I11ii1i, Ili1li1l, l1i11iIl[IlIlIIIi + 14], lIII1iIi, 4259657740), Ili1li1l = IIIIIi(Ili1li1l, iliIiIil, iIlli1lI, I11ii1i, l1i11iIl[IlIlIIIi + 1], iiIi1lll, 2763975236), I11ii1i = IIIIIi(I11ii1i, Ili1li1l, iliIiIil, iIlli1lI, l1i11iIl[IlIlIIIi + 4], liiiI1Il, 1272893353), iIlli1lI = IIIIIi(iIlli1lI, I11ii1i, Ili1li1l, iliIiIil, l1i11iIl[IlIlIIIi + 7], iiII1Il1, 4139469664), iliIiIil = IIIIIi(iliIiIil, iIlli1lI, I11ii1i, Ili1li1l, l1i11iIl[IlIlIIIi + 10], lIII1iIi, 3200236656), Ili1li1l = IIIIIi(Ili1li1l, iliIiIil, iIlli1lI, I11ii1i, l1i11iIl[IlIlIIIi + 13], iiIi1lll, 681279174), I11ii1i = IIIIIi(I11ii1i, Ili1li1l, iliIiIil, iIlli1lI, l1i11iIl[IlIlIIIi + 0], liiiI1Il, 3936430074), iIlli1lI = IIIIIi(iIlli1lI, I11ii1i, Ili1li1l, iliIiIil, l1i11iIl[IlIlIIIi + 3], iiII1Il1, 3572445317), iliIiIil = IIIIIi(iliIiIil, iIlli1lI, I11ii1i, Ili1li1l, l1i11iIl[IlIlIIIi + 6], lIII1iIi, 76029189), Ili1li1l = IIIIIi(Ili1li1l, iliIiIil, iIlli1lI, I11ii1i, l1i11iIl[IlIlIIIi + 9], iiIi1lll, 3654602809), I11ii1i = IIIIIi(I11ii1i, Ili1li1l, iliIiIil, iIlli1lI, l1i11iIl[IlIlIIIi + 12], liiiI1Il, 3873151461), iIlli1lI = IIIIIi(iIlli1lI, I11ii1i, Ili1li1l, iliIiIil, l1i11iIl[IlIlIIIi + 15], iiII1Il1, 530742520), iliIiIil = IIIIIi(iliIiIil, iIlli1lI, I11ii1i, Ili1li1l, l1i11iIl[IlIlIIIi + 2], lIII1iIi, 3299628645), Ili1li1l = lIlii1l(Ili1li1l, iliIiIil, iIlli1lI, I11ii1i, l1i11iIl[IlIlIIIi + 0], IlIiIilI, 4096336452), I11ii1i = lIlii1l(I11ii1i, Ili1li1l, iliIiIil, iIlli1lI, l1i11iIl[IlIlIIIi + 7], lIiI1il1, 1126891415), iIlli1lI = lIlii1l(iIlli1lI, I11ii1i, Ili1li1l, iliIiIil, l1i11iIl[IlIlIIIi + 14], IlilIlll, 2878612391), iliIiIil = lIlii1l(iliIiIil, iIlli1lI, I11ii1i, Ili1li1l, l1i11iIl[IlIlIIIi + 5], I11lI1, 4237533241), Ili1li1l = lIlii1l(Ili1li1l, iliIiIil, iIlli1lI, I11ii1i, l1i11iIl[IlIlIIIi + 12], IlIiIilI, 1700485571), I11ii1i = lIlii1l(I11ii1i, Ili1li1l, iliIiIil, iIlli1lI, l1i11iIl[IlIlIIIi + 3], lIiI1il1, 2399980690), iIlli1lI = lIlii1l(iIlli1lI, I11ii1i, Ili1li1l, iliIiIil, l1i11iIl[IlIlIIIi + 10], IlilIlll, 4293915773), iliIiIil = lIlii1l(iliIiIil, iIlli1lI, I11ii1i, Ili1li1l, l1i11iIl[IlIlIIIi + 1], I11lI1, 2240044497), Ili1li1l = lIlii1l(Ili1li1l, iliIiIil, iIlli1lI, I11ii1i, l1i11iIl[IlIlIIIi + 8], IlIiIilI, 1873313359), I11ii1i = lIlii1l(I11ii1i, Ili1li1l, iliIiIil, iIlli1lI, l1i11iIl[IlIlIIIi + 15], lIiI1il1, 4264355552), iIlli1lI = lIlii1l(iIlli1lI, I11ii1i, Ili1li1l, iliIiIil, l1i11iIl[IlIlIIIi + 6], IlilIlll, 2734768916), iliIiIil = lIlii1l(iliIiIil, iIlli1lI, I11ii1i, Ili1li1l, l1i11iIl[IlIlIIIi + 13], I11lI1, 1309151649), Ili1li1l = lIlii1l(Ili1li1l, iliIiIil, iIlli1lI, I11ii1i, l1i11iIl[IlIlIIIi + 4], IlIiIilI, 4149444226), I11ii1i = lIlii1l(I11ii1i, Ili1li1l, iliIiIil, iIlli1lI, l1i11iIl[IlIlIIIi + 11], lIiI1il1, 3174756917), iIlli1lI = lIlii1l(iIlli1lI, I11ii1i, Ili1li1l, iliIiIil, l1i11iIl[IlIlIIIi + 2], IlilIlll, 718787259), iliIiIil = lIlii1l(iliIiIil, iIlli1lI, I11ii1i, Ili1li1l, l1i11iIl[IlIlIIIi + 9], I11lI1, 3951481745), Ili1li1l = i1iili11(Ili1li1l, l1I1iI1l), iliIiIil = i1iili11(iliIiIil, l1lIllI), iIlli1lI = i1iili11(iIlli1lI, lIII1iII), I11ii1i = i1iili11(I11ii1i, li1i11il);
  var lIlililI = il1l1iII(Ili1li1l) + il1l1iII(iliIiIil) + il1l1iII(iIlli1lI) + il1l1iII(I11ii1i);
  return lIlililI.toLowerCase();
}
function l11iIi1(ili1iIIl, iilIili1) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class l1I1I1lI {
    constructor(iI111iIl) {
      this.env = iI111iIl;
    }
    ["send"](IIIIIi1l, lI1Ii1l1 = "GET") {
      IIIIIi1l = "string" == typeof IIIIIi1l ? {
        "url": IIIIIi1l
      } : IIIIIi1l;
      let l1l1Iili = this.get;
      "POST" === lI1Ii1l1 && (l1l1Iili = this.post);
      return new Promise((I1IiIlil, lIl1Ilil) => {
        l1l1Iili.call(this, IIIIIi1l, (i1ilIlI1, iilI11l1, IlllIiI) => {
          i1ilIlI1 ? lIl1Ilil(i1ilIlI1) : I1IiIlil(iilI11l1);
        });
      });
    }
    ["get"](ilIiIilI) {
      return this.send.call(this.env, ilIiIilI);
    }
    ["post"](IIlIIl1i) {
      return this.send.call(this.env, IIlIIl1i, "POST");
    }
  }
  return new class {
    constructor(IIIliiiI, ii1i1iiI) {
      this.name = IIIliiiI;
      this.http = new l1I1I1lI(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, ii1i1iiI);
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
    ["toObj"](I11iIiil, il11lllI = null) {
      try {
        return JSON.parse(I11iIiil);
      } catch {
        return il11lllI;
      }
    }
    ["toStr"](iI11I1Il, llIii1Il = null) {
      try {
        return JSON.stringify(iI11I1Il);
      } catch {
        return llIii1Il;
      }
    }
    ["getjson"](l11IIII1, IlllIIil) {
      {
        let IIilIIIi = IlllIIil;
        const liiIll = this.getdata(l11IIII1);
        if (liiIll) try {
          IIilIIIi = JSON.parse(this.getdata(l11IIII1));
        } catch {}
        return IIilIIIi;
      }
    }
    ["setjson"](iIIll1ll, iIliI1li) {
      try {
        return this.setdata(JSON.stringify(iIIll1ll), iIliI1li);
      } catch {
        return false;
      }
    }
    ["getScript"](iI1li1l) {
      return new Promise(lliIilI => {
        this.get({
          "url": iI1li1l
        }, (Iil1i11l, i1l1lill, il1ilI11) => lliIilI(il1ilI11));
      });
    }
    ["runScript"](Iilll1i1, l1l1iIl) {
      return new Promise(lllllil => {
        {
          let I1iiI111 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
          I1iiI111 = I1iiI111 ? I1iiI111.replace(/\n/g, "").trim() : I1iiI111;
          let lli1IIIl = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
          lli1IIIl = lli1IIIl ? 1 * lli1IIIl : 20;
          lli1IIIl = l1l1iIl && l1l1iIl.timeout ? l1l1iIl.timeout : lli1IIIl;
          const [iili1lIl, l1lIli1] = I1iiI111.split("@"),
            IIiiiIIi = {
              "url": "http://" + l1lIli1 + "/v1/scripting/evaluate",
              "body": {
                "script_text": Iilll1i1,
                "mock_type": "cron",
                "timeout": lli1IIIl
              },
              "headers": {
                "Accept": "*/*"
              }
            };
          this.post(IIiiiIIi, (i1lIl111, l11i1l11, Iilll11i) => lllllil(Iilll11i));
        }
      }).catch(i1IliiI => this.logErr(i1IliiI));
    }
    ["loaddata"]() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const lIllll1 = this.path.resolve(this.dataFile),
          iilil111 = this.path.resolve(process.cwd(), this.dataFile),
          i1l1l1il = this.fs.existsSync(lIllll1),
          lIllIili = !i1l1l1il && this.fs.existsSync(iilil111);
        if (!i1l1l1il && !lIllIili) return {};
        {
          {
            const ll1lllli = i1l1l1il ? lIllll1 : iilil111;
            try {
              return JSON.parse(this.fs.readFileSync(ll1lllli));
            } catch (illl1lil) {
              return {};
            }
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
            const i11li1Il = this.path.resolve(this.dataFile),
              IIlII1ll = this.path.resolve(process.cwd(), this.dataFile),
              lI11i11 = this.fs.existsSync(i11li1Il),
              lIllI1l = !lI11i11 && this.fs.existsSync(IIlII1ll),
              I11l1ill = JSON.stringify(this.data);
            lI11i11 ? this.fs.writeFileSync(i11li1Il, I11l1ill) : lIllI1l ? this.fs.writeFileSync(IIlII1ll, I11l1ill) : this.fs.writeFileSync(i11li1Il, I11l1ill);
          }
        }
      }
    }
    ["lodash_get"](I1i1l1II, lIilii1i, i111IIii) {
      const IiiIIIi1 = lIilii1i.replace(/\[(\d+)\]/g, ".$1").split(".");
      let Ii1ilill = I1i1l1II;
      for (const lli11I of IiiIIIi1) if (Ii1ilill = Object(Ii1ilill)[lli11I], undefined === Ii1ilill) return i111IIii;
      return Ii1ilill;
    }
    ["lodash_set"](li1I1IIi, i1l1llI1, iIIiliII) {
      return Object(li1I1IIi) !== li1I1IIi ? li1I1IIi : (Array.isArray(i1l1llI1) || (i1l1llI1 = i1l1llI1.toString().match(/[^.[\]]+/g) || []), i1l1llI1.slice(0, -1).reduce((Ili1III, IiI1II1i, ll1il1II) => Object(Ili1III[IiI1II1i]) === Ili1III[IiI1II1i] ? Ili1III[IiI1II1i] : Ili1III[IiI1II1i] = Math.abs(i1l1llI1[ll1il1II + 1]) >> 0 == +i1l1llI1[ll1il1II + 1] ? [] : {}, li1I1IIi)[i1l1llI1[i1l1llI1.length - 1]] = iIIiliII, li1I1IIi);
    }
    ["getdata"](lilI1iII) {
      {
        let lIlIl1li = this.getval(lilI1iII);
        if (/^@/.test(lilI1iII)) {
          const [, I1llii, III1i1I1] = /^@(.*?)\.(.*?)$/.exec(lilI1iII),
            Il11iIiI = I1llii ? this.getval(I1llii) : "";
          if (Il11iIiI) try {
            const II1I11I = JSON.parse(Il11iIiI);
            lIlIl1li = II1I11I ? this.lodash_get(II1I11I, III1i1I1, "") : lIlIl1li;
          } catch (ll1IllII) {
            lIlIl1li = "";
          }
        }
        return lIlIl1li;
      }
    }
    ["setdata"](l1lI111, ilIIii1) {
      let i111llIl = false;
      if (/^@/.test(ilIIii1)) {
        {
          const [, IliliIil, iIllIlli] = /^@(.*?)\.(.*?)$/.exec(ilIIii1),
            I1llI1li = this.getval(IliliIil),
            Il1llIi = IliliIil ? "null" === I1llI1li ? null : I1llI1li || "{}" : "{}";
          try {
            const I1i11iII = JSON.parse(Il1llIi);
            this.lodash_set(I1i11iII, iIllIlli, l1lI111);
            i111llIl = this.setval(JSON.stringify(I1i11iII), IliliIil);
          } catch (l1I1iI11) {
            const lIilIliI = {};
            this.lodash_set(lIilIliI, iIllIlli, l1lI111);
            i111llIl = this.setval(JSON.stringify(lIilIliI), IliliIil);
          }
        }
      } else i111llIl = this.setval(l1lI111, ilIIii1);
      return i111llIl;
    }
    ["getval"](lll1i11l) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(lll1i11l) : this.isQuanX() ? $prefs.valueForKey(lll1i11l) : this.isNode() ? (this.data = this.loaddata(), this.data[lll1i11l]) : this.data && this.data[lll1i11l] || null;
    }
    ["setval"](I1III11I, l1IiIl1i) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(I1III11I, l1IiIl1i) : this.isQuanX() ? $prefs.setValueForKey(I1III11I, l1IiIl1i) : this.isNode() ? (this.data = this.loaddata(), this.data[l1IiIl1i] = I1III11I, this.writedata(), true) : this.data && this.data[l1IiIl1i] || null;
    }
    ["initGotEnv"](llilil) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      llilil && (llilil.headers = llilil.headers ? llilil.headers : {}, undefined === llilil.headers.Cookie && undefined === llilil.cookieJar && (llilil.cookieJar = this.ckjar));
    }
    ["get"](lIIIlIl1, lIlli1li = () => {}) {
      lIIIlIl1.headers && (delete lIIIlIl1.headers["Content-Type"], delete lIIIlIl1.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (lIIIlIl1.headers = lIIIlIl1.headers || {}, Object.assign(lIIIlIl1.headers, {
        "X-Surge-Skip-Scripting": false
      })), $httpClient.get(lIIIlIl1, (liIIilIi, iil11i1, lil1II11) => {
        !liIIilIi && iil11i1 && (iil11i1.body = lil1II11, iil11i1.statusCode = iil11i1.status);
        lIlli1li(liIIilIi, iil11i1, lil1II11);
      })) : this.isQuanX() ? (this.isNeedRewrite && (lIIIlIl1.opts = lIIIlIl1.opts || {}, Object.assign(lIIIlIl1.opts, {
        "hints": false
      })), $task.fetch(lIIIlIl1).then(iIIiIll1 => {
        const {
          statusCode: ll1lIli,
          statusCode: llIiIiII,
          headers: Il1l1l1I,
          body: liiIlIIl
        } = iIIiIll1;
        lIlli1li(null, {
          "status": ll1lIli,
          "statusCode": llIiIiII,
          "headers": Il1l1l1I,
          "body": liiIlIIl
        }, liiIlIIl);
      }, IiIiliii => lIlli1li(IiIiliii))) : this.isNode() && (this.initGotEnv(lIIIlIl1), this.got(lIIIlIl1).on("redirect", (ll1IlI1i, llIli1l) => {
        try {
          {
            if (ll1IlI1i.headers["set-cookie"]) {
              const lllIIIIi = ll1IlI1i.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
              lllIIIIi && this.ckjar.setCookieSync(lllIIIIi, null);
              llIli1l.cookieJar = this.ckjar;
            }
          }
        } catch (l1iiil1i) {
          this.logErr(l1iiil1i);
        }
      }).then(Ililili1 => {
        {
          const {
            statusCode: Ii11lli,
            statusCode: II1lIl1l,
            headers: llIiIlii,
            body: lililiii
          } = Ililili1;
          lIlli1li(null, {
            "status": Ii11lli,
            "statusCode": II1lIl1l,
            "headers": llIiIlii,
            "body": lililiii
          }, lililiii);
        }
      }, lilIIi1l => {
        const {
          message: I1ll11il,
          response: Iil1ilI
        } = lilIIi1l;
        lIlli1li(I1ll11il, Iil1ilI, Iil1ilI && Iil1ilI.body);
      }));
    }
    ["post"](i11l1iIi, llIIIil1 = () => {}) {
      if (i11l1iIi.body && i11l1iIi.headers && !i11l1iIi.headers["Content-Type"] && (i11l1iIi.headers["Content-Type"] = "application/json"), i11l1iIi.headers && delete i11l1iIi.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (i11l1iIi.headers = i11l1iIi.headers || {}, Object.assign(i11l1iIi.headers, {
        "X-Surge-Skip-Scripting": false
      })), $httpClient.post(i11l1iIi, (li11lIi1, iiIIlilI, ii1IlIII) => {
        !li11lIi1 && iiIIlilI && (iiIIlilI.body = ii1IlIII, iiIIlilI.statusCode = iiIIlilI.status);
        llIIIil1(li11lIi1, iiIIlilI, ii1IlIII);
      });else {
        if (this.isQuanX()) i11l1iIi.method = "POST", this.isNeedRewrite && (i11l1iIi.opts = i11l1iIi.opts || {}, Object.assign(i11l1iIi.opts, {
          "hints": false
        })), $task.fetch(i11l1iIi).then(iIIli11l => {
          {
            const {
              statusCode: IliIlI1i,
              statusCode: I1lilII1,
              headers: iiilll,
              body: l1iI1IIi
            } = iIIli11l;
            llIIIil1(null, {
              "status": IliIlI1i,
              "statusCode": I1lilII1,
              "headers": iiilll,
              "body": l1iI1IIi
            }, l1iI1IIi);
          }
        }, l1i1i1I1 => llIIIil1(l1i1i1I1));else {
          if (this.isNode()) {
            {
              this.initGotEnv(i11l1iIi);
              const {
                url: i1llili1,
                ...IIi1llI1
              } = i11l1iIi;
              this.got.post(i1llili1, IIi1llI1).then(li1IIl1l => {
                {
                  const {
                    statusCode: lii1iI11,
                    statusCode: lIii1lI1,
                    headers: Iiiilll1,
                    body: llIIiIil
                  } = li1IIl1l;
                  llIIIil1(null, {
                    "status": lii1iI11,
                    "statusCode": lIii1lI1,
                    "headers": Iiiilll1,
                    "body": llIIiIil
                  }, llIIiIil);
                }
              }, llIlil1 => {
                const {
                  message: lllii1lI,
                  response: llilIll1
                } = llIlil1;
                llIIIil1(lllii1lI, llilIll1, llilIll1 && llilIll1.body);
              });
            }
          }
        }
      }
    }
    ["time"](lI1iIIIl, Iiiiilli = null) {
      {
        const lIiiiIII = Iiiiilli ? new Date(Iiiiilli) : new Date();
        let Ili1lliI = {
          "M+": lIiiiIII.getMonth() + 1,
          "d+": lIiiiIII.getDate(),
          "H+": lIiiiIII.getHours(),
          "m+": lIiiiIII.getMinutes(),
          "s+": lIiiiIII.getSeconds(),
          "q+": Math.floor((lIiiiIII.getMonth() + 3) / 3),
          "S": lIiiiIII.getMilliseconds()
        };
        /(y+)/.test(lI1iIIIl) && (lI1iIIIl = lI1iIIIl.replace(RegExp.$1, (lIiiiIII.getFullYear() + "").substr(4 - RegExp.$1.length)));
        for (let IiII11i in Ili1lliI) new RegExp("(" + IiII11i + ")").test(lI1iIIIl) && (lI1iIIIl = lI1iIIIl.replace(RegExp.$1, 1 == RegExp.$1.length ? Ili1lliI[IiII11i] : ("00" + Ili1lliI[IiII11i]).substr(("" + Ili1lliI[IiII11i]).length)));
        return lI1iIIIl;
      }
    }
    ["msg"](iiI1i1il = ili1iIIl, lil11iIi = "", Ili1i1II = "", iIlIIlii) {
      const Illllill = IIlllil1 => {
        if (!IIlllil1) return IIlllil1;
        if ("string" == typeof IIlllil1) return this.isLoon() ? IIlllil1 : this.isQuanX() ? {
          "open-url": IIlllil1
        } : this.isSurge() ? {
          "url": IIlllil1
        } : undefined;
        if ("object" == typeof IIlllil1) {
          if (this.isLoon()) {
            let lllllll1 = IIlllil1.openUrl || IIlllil1.url || IIlllil1["open-url"],
              iilIIlll = IIlllil1.mediaUrl || IIlllil1["media-url"];
            return {
              "openUrl": lllllll1,
              "mediaUrl": iilIIlll
            };
          }
          if (this.isQuanX()) {
            let llI1111I = IIlllil1["open-url"] || IIlllil1.url || IIlllil1.openUrl,
              lI1I1Il1 = IIlllil1["media-url"] || IIlllil1.mediaUrl;
            return {
              "open-url": llI1111I,
              "media-url": lI1I1Il1
            };
          }
          if (this.isSurge()) {
            let I1ilI11I = IIlllil1.url || IIlllil1.openUrl || IIlllil1["open-url"];
            return {
              "url": I1ilI11I
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(iiI1i1il, lil11iIi, Ili1i1II, Illllill(iIlIIlii)) : this.isQuanX() && $notify(iiI1i1il, lil11iIi, Ili1i1II, Illllill(iIlIIlii))), !this.isMuteLog) {
        let I1Ii11ii = ["", "==============📣系统通知📣=============="];
        I1Ii11ii.push(iiI1i1il);
        lil11iIi && I1Ii11ii.push(lil11iIi);
        Ili1i1II && I1Ii11ii.push(Ili1i1II);
        console.log(I1Ii11ii.join("\n"));
        this.logs = this.logs.concat(I1Ii11ii);
      }
    }
    ["log"](...ii1iiIli) {
      ii1iiIli.length > 0 && (this.logs = [...this.logs, ...ii1iiIli]);
      console.log(ii1iiIli.join(this.logSeparator));
    }
    ["logErr"](II11liil, I1i1IliI) {
      const l11111 = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      l11111 ? this.log("", "❗️" + this.name + ", 错误!", II11liil.stack) : this.log("", "❗️" + this.name + ", 错误!", II11liil);
    }
    ["wait"](ilii11ii) {
      return new Promise(lIIlI1l1 => setTimeout(lIIlI1l1, ilii11ii));
    }
    ["done"](IiIIlil1 = {}) {
      {
        const lllil1Ii = new Date().getTime(),
          Iiili1i1 = (lllil1Ii - this.startTime) / 1000;
        this.log("", "🔔" + this.name + ", 结束! 🕛 " + Iiili1i1 + " 秒");
        this.log();
        (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(IiIIlil1);
      }
    }
  }(ili1iIIl, iilIili1);
}
function lilIil11(lil1I1I) {
  function IIiI1ii1(IiIiiiii) {
    if (typeof IiIiiiii === "string") return function (II1l1ilI) {}.constructor("while (true) {}").apply("counter");else {
      ("" + IiIiiiii / IiIiiiii).length !== 1 || IiIiiiii % 20 === 0 ? function () {
        return true;
      }.constructor("debugger").call("action") : function () {
        return false;
      }.constructor("debugger").apply("stateObject");
    }
    IIiI1ii1(++IiIiiiii);
  }
  try {
    if (lil1I1I) return IIiI1ii1;else {
      IIiI1ii1(0);
    }
  } catch (I1ililIl) {}
}