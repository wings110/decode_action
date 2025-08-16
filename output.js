//Sat Aug 16 2025 05:12:11 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const iIilIl = new II1iI1("联通安全管家任务"),
  ilI1I = iIilIl.isNode() ? require("./sendNotify") : "",
  il1Iil = 1,
  ii11ll = 0,
  {
    v4: il1Iii
  } = require("uuid"),
  lili1l = il1Iii(),
  iI1iIi = require("qs");
let iI1iIl = process.env.chinaUnicomCookie,
  lili1i = "",
  iI1Ii = "";
ckArr = iI1iIl.split("&");
Illi("【debug】 这是你的账号数组:\n " + ckArr);
!(async () => {
  ckArr = iI1iIl.split("&");
  await iI1II();
  for (let ilII1i = 0; ilII1i < ckArr.length; ilII1i++) {
    let ill1I = ilII1i + 1;
    console.log("------------- 开始【第 " + ill1I + " 个账号】-------------");
    iI1Ii = ckArr[ilII1i].split("&");
    Illi("【debug】 这是你第 " + ill1I + " 账号信息:\n " + iI1Ii);
    await li1ll1();
    await iIilIl.wait(2000);
    if (num1 == 1) {
      console.log("当前online过期，跳过...");
      continue;
    }
    customDateString = I1li11();
    await iIilIl.wait(2000);
    await IiIIIl();
    await lIllI1();
    const ilII1l = new Date().getMonth();
    if (ilII1l === 7) {
      for (let IIilII = 0; IIilII < 10; IIilII++) {
        await iIilII();
        await iIilIl.wait(800);
      }
      await lIlI1();
      await lIlI1();
    }
    await IiIIIi();
    console.log("获取ck中，等待一会...");
    await iIilIl.wait(5000);
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
    await lI1i1l();
    await il1Ii1();
    await iIilIl.wait(30000);
    await lI1i1l();
  }
  await IiIIII(lili1i);
})().catch(IIiIi => iIilIl.logErr(IIiIi)).finally(() => iIilIl.done());
async function IiIIIl() {
  let iiii = {
      "url": "https://m.client.10010.com/edop_ng/getTicketByNative?token=" + ecs_token + "&appId=edop_unicom_3a6cc75a",
      "headers": {
        "Cookie": "PvSessionId=" + customDateString + "" + lili1l + ";c_mobile=" + num1 + "; c_version=iphone_c@11.0800; city=036|" + cityCode + "|90063345|-99;devicedId=" + lili1l + "; ecs_token=" + ecs_token + ";t3_token=" + t3_token + "",
        "Accept": "*",
        "Connection": "keep-alive",
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept-Encoding": "gzip;q=1.0, compress;q=0.5",
        "Host": "m.client.10010.com",
        "User-Agent": "ChinaUnicom4.x/12.3.1 (com.chinaunicom.mobilebusiness; build:77; iOS 16.6.0) Alamofire/4.7.3 unicom{version:iphone_c@12.0301}",
        "Accept-Language": "zh-Hans-CN;q=1.0"
      }
    },
    iiil = await li1IiI(iiii, "ticket");
  ticket1 = iiil.ticket;
}
async function IiIIIi() {
  let llIi1I = {
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
    lIlIii = await Illl(llIi1I, "ticket");
  ticket = lIlIii.data.ticket;
  const li1Ili = require("axios");
  let I11lil = JSON.stringify({
      "activityId": "s747395186896173056",
      "partnersId": "1702"
    }),
    Ili1li = {
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
      "data": I11lil
    };
  li1Ili.request(Ili1li).then(IIl1Il => {
    {
      const IIi11l = IIl1Il.headers["set-cookie"],
        l1Iill = IIi11l.find(iiiiIi => iiiiIi.startsWith("_jea_id="));
      jeaId = l1Iill?.["split"](";")[0]?.["split"]("=")[1] || "未找到 Cookie";
    }
  }).catch(iiiiIl => console.log("error", iiiiIl));
}
async function lI11l() {
  let iiIIli = {
      "url": "https://uca.wo116114.com/sjgj/woAssistant/umm/configs/v1/config?product_line=uasp&entry_point=h5&entry_point_id=wxdefbc1986dc757a6",
      "headers": headers,
      "body": "{\"contents\":[{\"content\":\"13088330789\",\"contentTag\":\"疑似诈骗\"}],\"operationType\":0,\"type\":1,\"blacklistSource\":0,\"productId\":\"91242950\"}"
    },
    iili = await Illl(iiIIli, "黑名单");
}
async function iI1Il() {
  let li1IlI = {
      "url": "https://uca.wo116114.com/sjgj/woAssistant/umm/configs/v1/config?product_line=uasp&entry_point=h5&entry_point_id=wxdefbc1986dc757a6",
      "headers": headers,
      "body": "{\"contents\":[{\"content\":\"13088330789\",\"contentTag\":\"疑似诈骗\",\"nickname\":null,\"configTime\":null,\"checked\":true}],\"type\":1,\"operationType\":1,\"productId\":\"91242950\"}"
    },
    iiI1i = await Illl(li1IlI, "删除黑名单");
}
async function i111il() {
  let IiII1l = {
      "url": "https://uca.wo116114.com/sjgj/unicomAssistant/uasp/configs/v1/addressBook/saveTagPhone?product_line=uasp&entry_point=h5&entry_point_id=wxdefbc1986dc757a6",
      "headers": headers,
      "body": "{\"tagPhoneNo\":\"13088330789\",\"tagIds\":[26],\"status\":0,\"productId\":\"91311616\"}"
    },
    IiII1i = await Illl(IiII1l, "标记");
}
async function i111ii() {
  let I1li1l = {
      "url": "https://uca.wo116114.com/sjgj/unicomAssistant/uasp/configs/v1/addressBookBatchConfig?product_line=uasp&entry_point=h5&entry_point_id=edop_unicom_3a6cc75a",
      "headers": headers,
      "body": "{\"addressBookDTOList\":[{\"addressBookPhoneNo\":\"13105750575\",\"addressBookName\":\"可乐\"}],\"productId\":\"91311616\",\"opType\":\"1\"}"
    },
    I11li1 = await Illl(I1li1l, "通讯录");
}
async function lI11i() {
  let IiII1I = {
      "url": "https://uca.wo116114.com/sjgj/woAssistant/umm/configs/v1/config?product_line=uasp&entry_point=h5&entry_point_id=wxdefbc1986dc757a6",
      "headers": headers,
      "body": "{\"contents\":[{\"name\":\"rings-once\",\"contentTag\":\"8\",\"contentName\":\"响一声\",\"content\":\"0\",\"icon\":\"alerting\"}],\"operationType\":0,\"type\":3,\"productId\":\"91311616\"}"
    },
    IIl1I1 = await Illl(IiII1I, "拦截");
}
async function ilI11() {
  let lIlIli = {
      "url": "https://uca.wo116114.com/sjgj/unicomAssistant/uasp/configs/v1/weeklySwitchStatus?product_line=uasp&entry_point=h5&entry_point_id=wxdefbc1986dc757a6",
      "headers": headers,
      "body": "{\"productId\":\"91311616\"}"
    },
    ilII1 = await Illl(lIlIli, "查看");
}
async function li1llI() {
  let ilIilI = {
      "url": "https://uca.wo116114.com/sjgj/unicomAssistant/uasp/report/v1/queryKeyData?product_line=uasp&entry_point=h5&entry_point_id=wxdefbc1986dc757a6",
      "headers": headers,
      "body": "{\"productId\":\"91311616\"}"
    },
    iIlIl1 = await Illl(ilIilI, "查看");
}
async function lIil11() {
  let l11Iii = {
      "url": "https://uca.wo116114.com/sjgj/unicomAssistant/uasp/report/v1/weeklySummary?product_line=uasp&entry_point=h5&entry_point_id=wxdefbc1986dc757a6",
      "headers": headers,
      "body": "{\"productId\":\"91311616\"}"
    },
    IIllii = await Illl(l11Iii, "查看");
}
async function iIilII() {
  let liIii1 = iI1iIi.stringify({
      "activityId": "2"
    }),
    Iili11 = {
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
      "body": liIii1
    },
    I111II = await Illl(Iili11, "shareToOther");
  console.log(I111II.msg);
}
async function lIlI1() {
  let ilIill = iI1iIi.stringify({
      "activityId": "2"
    }),
    Il1l1l = {
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
      "body": ilIill
    },
    iIlIil = await Illl(Il1l1l, "quarterDrawPrize");
  if (iIlIil.code == 0) console.log(iIlIil.data.prizeName);else {
    console.log(iIlIil.msg);
  }
}
async function lIllI1() {
  let iII = {
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
    l11IlI = await Illl(iII, "token");
  token = l11IlI.data.access_token;
  console.log(token);
}
async function Ill1(liIiil) {
  let Iili1i = {
      "url": "https://m.jf.10010.com/jf-external-application/jftask/receive",
      "headers": headerss,
      "body": "{\"taskCode\": \"" + liIiil + "\"}"
    },
    IIiIli = await Illl(Iili1i, "领取积分");
  if (IIiIli.data.score) console.log("领取" + IIiIli.data.score + IIiIli.msg);else {
    console.log("领取" + IIiIli.msg);
  }
}
async function lI1i1i(liIiii, l11Ill) {
  let ilIil1 = {
      "url": "https://m.jf.10010.com/jf-external-application/jftask/toFinish",
      "headers": headerss,
      "body": "{\"taskCode\": \"" + liIiii + "\"}"
    },
    iI1l = await Illl(ilIil1, "开启任务 " + l11Ill);
  xinxi = iI1l.msg;
  switch (l11Ill) {
    case "奖励积分-添加黑名单":
      await iI1Il();
      await lI11l();
      break;
    case "奖励积分-号码标记":
      await i111il();
      break;
    case "奖励积分-同步通讯录":
      await i111ii();
      break;
    case "奖励积分-骚扰拦截设置":
      await lI11i();
      break;
    case "奖励积分-查看周报":
      await ilI11();
      await li1llI();
      await lIil11();
      break;
    default:
      throw new Error("任务 " + l11Ill + " 需要手动完成");
      break;
  }
}
async function il1IiI(iiI11I) {
  let llIi1l = {
      "url": "https://m.jf.10010.com/jf-external-application/jftask/sign",
      "headers": headerss,
      "body": "{\"taskCode\": \"" + iiI11I + "\"}"
    },
    l11i1 = await Illl(llIi1l, "完成签到");
  xinxi = l11i1.msg;
}
async function il1Ii1() {
  let l11iI = {
      "url": "https://m.jf.10010.com/jf-external-application/jftask/taskDetail",
      "headers": headerss,
      "body": "{}"
    },
    IIiIil = await Illl(l11iI, "查询任务");
  const lli1ll = IIiIil.data.taskDetail.taskList;
  for (const iiiii of lli1ll) {
    const {
      taskCode: iiiil,
      taskName: iiIlII,
      finishCount: il11II,
      needCount: l11l1,
      finishText: l11lI
    } = iiiii;
    console.log(iiIlII + "：" + il11II + "/" + l11l1 + " - " + l11lI);
    if (il11II !== l11l1) {
      const Il1l11 = l11l1 - il11II;
      console.log("任务未完成，需要再执行 " + Il1l11 + " 次");
      for (let I1II1l = 0; I1II1l < Il1l11; I1II1l++) {
        await iIilIl.wait(3000);
        try {
          iiIlII == "奖励积分-连续1天签到" ? await il1IiI(iiiil) : await lI1i1i(iiiil, iiIlII);
          console.log("第 " + (I1II1l + 1) + " 次执行" + iiIlII + "任务完成");
          await iIilIl.wait(10000);
          await Ill1(iiiil);
          console.log(iiIlII + " 奖励领取成功");
        } catch (lli1il) {
          console.error("执行 " + iiiil + " 时出错: " + lli1il.message);
          break;
        }
      }
    } else {
      if (l11lI == "待领取") try {
        await iIilIl.wait(3000);
        await Ill1(iiiil);
        console.log(iiIlII + " 奖励领取成功");
      } catch (iiIlIl) {
        console.error("领取 " + iiiil + " 奖励时出错: " + iiIlIl.message);
      } else {
        console.log("任务已完成且奖励已领取");
      }
    }
    console.log("---------------------");
  }
}
async function lI1i1l() {
  let iIlIll = {
      "url": "https://m.jf.10010.com/jf-external-application/jftask/userInfo",
      "headers": headerss,
      "body": "{}"
    },
    il11I1 = await Illl(iIlIll, "查询积分");
  if (oldjf == null) oldjf = il11I1.data.availableScore;else {
    {
      const IlIill = il11I1.data.availableScore;
      console.log("用户" + num1 + "运行前积分：" + oldjf + ",运行后积分" + IlIill + "，本次运行获得" + (IlIill - oldjf));
      lili1i += "\n用户" + num1 + "运行前积分：" + oldjf + ",运行后积分" + IlIill + "，本次运行获得" + (IlIill - oldjf);
    }
  }
}
async function li1ll1() {
  let I1iI = {
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
      "body": "deviceModel=iPhone&step=background&token_online=" + iI1Ii + "&version=iphone_c%4011.0700"
    },
    I1IiiI = await Illl(I1iI, "获取");
  try {
    t3_token = I1IiiI.t3_token;
    private_token = I1IiiI.private_token;
    ecs_token = I1IiiI.ecs_token;
    num1 = I1IiiI.list[0].num;
    cityCode = I1IiiI.list[0].cityCode;
  } catch (i11lil) {
    num1 = "1";
  }
}
async function iI1II() {
  let iIlII = {
      "url": "https://gitee.com/kele2233/genxin/raw/master/ydid.json",
      "headers": {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.43(0x18002b2d) NetType/WIFI Language/zh_CN"
      }
    },
    iIiII1 = await li1IiI(iIlII, "ll");
  hqsjc = iIiII1.ymsjc;
  gong = iIiII1.gong;
  dqsjc = Math.round(new Date().getTime() / 1000).toString();
  if (hqsjc > dqsjc) console.log("公告：" + iIiII1.gh);else {
    console.error(gong);
    process.exit();
  }
}
async function lIil1I(ilIII1, lll1lI) {
  return new Promise(ilIIII => {
    let iIllIi = [];
    if (ilIII1) {
      if (ilIII1.indexOf("@") !== -1) ilIII1.split("@").forEach(I1ll => {
        iIllIi.push(I1ll);
      });else {
        if (ilIII1.indexOf("\n") !== -1) ilIII1.split("\n").forEach(lll1ii => {
          iIllIi.push(lll1ii);
        });else {
          iIllIi.push(ilIII1);
        }
      }
      ilIIII(iIllIi);
    } else {
      console.log("\n 【" + iIilIl.name + "】：未填写变量 " + lll1lI);
    }
  });
}
async function IiIIII(lIIll1) {
  if (!lIIll1) return;
  if (il1Iil > 0) {
    {
      if (iIilIl.isNode()) {
        let l1li1 = require("./sendNotify");
        await l1li1.sendNotify(iIilIl.name, lIIll1);
      } else iIilIl.msg(lIIll1);
    }
  } else console.log(lIIll1);
}
function i111iI(IIllll) {
  IIllll = IIllll || 32;
  let lll1iI = "QWERTYUIOPASDFGHJKLZXCVBNM1234567890",
    iIllI1 = lll1iI.length,
    lli11 = "";
  for (i = 0; i < IIllll; i++) lli11 += lll1iI.charAt(Math.floor(Math.random() * iIllI1));
  return lli11;
}
let lIllII = "";
function IIilIl(iI1i1i) {
  lIllII = iI1i1i;
}
function IIilIi(iIil1I) {
  lIllII === iIil1I ? console.log("Reached mark " + iIil1I) : console.log("Invalid mark: " + iIil1I);
}
function l1Iiii(iI1i1l) {
  var IiiiII = new Date(iI1i1l * 1000);
  var il1li1 = IiiiII.getFullYear();
  var llilli = String(IiiiII.getMonth() + 1).padStart(2, "0");
  var ll1ill = String(IiiiII.getDate()).padStart(2, "0");
  var llilll = String(IiiiII.getHours()).padStart(2, "0");
  var l111ii = String(IiiiII.getMinutes()).padStart(2, "0");
  var l1liI = String(IiiiII.getSeconds()).padStart(2, "0");
  var i1III1 = il1li1 + "-" + llilli + "-" + ll1ill + " " + llilll + ":" + l111ii + ":" + l1liI;
  return i1III1;
}
function l1Iiil(Il1lI, lli1l) {
  return Math.round(Math.random() * (lli1l - Il1lI) + Il1lI);
}
function I1li1I() {
  const l1ii11 = new Date(),
    IiiiIi = l1ii11.getHours(),
    l1lii = new Date(l1ii11.getFullYear(), l1ii11.getMonth(), l1ii11.getDate(), IiiiIi + 1, 0, 0, 0);
  return l1lii.getTime();
}
function IIiII() {
  const I11Iil = new Date(),
    l1liI1 = I11Iil.getMinutes(),
    I11Iii = new Date(I11Iil.getFullYear(), I11Iil.getMonth(), I11Iil.getDate(), I11Iil.getHours(), l1liI1 === 0 ? 1 : l1liI1 + 1, 0, 0);
  I11Iii.getMinutes() === 0 && I11Iii.getHours() !== I11Iil.getHours() && I11Iii.setDate(I11Iil.getDate() + (I11Iii.getHours() === 0 ? 1 : 0));
  return I11Iii.getTime();
}
function iiiI() {
  return Math.round(new Date().getTime()).toString();
}
function I1li11() {
  const illi11 = new Date(),
    li111l = String(illi11.getFullYear()).padStart(4, "0"),
    l111lI = String(illi11.getMonth() + 1).padStart(2, "0"),
    il1lil = String(illi11.getDate()).padStart(2, "0"),
    I1iil = String(illi11.getHours()).padStart(2, "0"),
    iiliii = String(illi11.getMinutes()).padStart(2, "0"),
    I1iii = String(illi11.getSeconds()).slice(0, 2);
  return li111l + l111lI + il1lil + I1iil + iiliii + I1iii;
}
function II1iIl() {
  return Math.round(new Date().getTime() / 1000).toString();
}
function II1iIi() {
  let illi1i = new Date();
  h = illi1i.getHours();
  return h;
}
function iI1iI() {
  let lll1ll = new Date();
  m = lll1ll.getMinutes();
  return m;
}
function Ii11I1(illi1l = 3000) {
  return new Promise(l111ll => {
    {
      let Il1ll = {
        "url": "https://keai.icu/apiwyy/api"
      };
      iIilIl.get(Il1ll, async (Iilil, Iilii, I1il1) => {
        try {
          I1il1 = JSON.parse(I1il1);
          console.log("\n 【网抑云时间】: " + I1il1.content + "  by--" + I1il1.music);
        } catch (IiIlIl) {
          iIilIl.logErr(IiIlIl, Iilii);
        } finally {
          l111ll();
        }
      }, illi1l);
    }
  });
}
async function li1IiI(Il1li, lIiI11, li111I = 3000) {
  return new Promise(IIi1Il => {
    {
      let lIiiii = Il1li;
      if (!lIiI11) {
        {
          let iililI = arguments.callee.toString(),
            IlII1i = /function\s*(\w*)/i,
            Iilli = IlII1i.exec(iililI);
          lIiI11 = Iilli[1];
        }
      }
      if (ii11ll) {
        console.log("\n 【debug】=============== 这是 " + lIiI11 + " 请求 url ===============");
        console.log(lIiiii);
      }
      iIilIl.get(lIiiii, async (iiliil, il1llI, il1ll1) => {
        try {
          ii11ll && (console.log("\n\n 【debug】===============这是 " + lIiI11 + " 返回data=============="), console.log(il1ll1), console.log("======"), console.log(JSON.parse(il1ll1)));
          let Il11Ii = JSON.parse(il1ll1);
          IIi1Il(Il11Ii);
        } catch (Il11Il) {
          console.log(iiliil, il1llI);
        } finally {
          IIi1Il();
        }
      }, li111I);
    }
  });
}
async function Illl(I1ill, i111Il, i111Ii = 200) {
  return new Promise(I11IlI => {
    let IIi1I1 = I1ill;
    if (!i111Il) {
      {
        let IiIIil = arguments.callee.toString(),
          iilill = /function\s*(\w*)/i,
          IiIIii = iilill.exec(IiIIil);
        i111Il = IiIIii[1];
      }
    }
    ii11ll && (console.log("\n 【debug】=============== 这是 " + i111Il + " 请求 url ==============="), console.log(IIi1I1));
    iIilIl.post(IIi1I1, async (lIiili, lIiill, iilili) => {
      try {
        ii11ll && (console.log("\n\n 【debug】===============这是 " + i111Il + " 返回data=============="), console.log(iilili), console.log("======"), console.log(JSON.parse(iilili)));
        let l11I = JSON.parse(iilili);
        I11IlI(l11I);
      } catch (llllli) {} finally {
        I11IlI();
      }
    }, i111Ii);
  });
}
function Illi(...Ii11iI) {
  if (ii11ll) {
    console.log(...Ii11iI);
  }
}
function l1IiiI(l1Il11) {
  function ilii1i(lIIIii, i11i) {
    return lIIIii << i11i | lIIIii >>> 32 - i11i;
  }
  function IiliIl(i11l, l1Ii) {
    {
      var IiIll1, l1Il, i1il11, l1Ii1i, l1i1iI;
      i1il11 = 2147483648 & i11l;
      l1Ii1i = 2147483648 & l1Ii;
      IiIll1 = 1073741824 & i11l;
      l1Il = 1073741824 & l1Ii;
      l1i1iI = (1073741823 & i11l) + (1073741823 & l1Ii);
      return IiIll1 & l1Il ? 2147483648 ^ l1i1iI ^ i1il11 ^ l1Ii1i : IiIll1 | l1Il ? 1073741824 & l1i1iI ? 3221225472 ^ l1i1iI ^ i1il11 ^ l1Ii1i : 1073741824 ^ l1i1iI ^ i1il11 ^ l1Ii1i : l1i1iI ^ i1il11 ^ l1Ii1i;
    }
  }
  function ilii1l(I11l1I, Ilii1l, IIi1l1) {
    return I11l1I & Ilii1l | ~I11l1I & IIi1l1;
  }
  function llllii(lIiiII, I11l11, I11l1l) {
    return lIiiII & I11l1l | I11l11 & ~I11l1l;
  }
  function l11l(IIi1lI, I11l1i, lliIl1) {
    return IIi1lI ^ I11l1i ^ lliIl1;
  }
  function illiII(i1llIl, i1llIi, iI1l1i) {
    return i1llIi ^ (i1llIl | ~iI1l1i);
  }
  function li1IIl(lIiiIi, ill1l1, ilili1, IlliI1, iI1l1l, ill1i1, lIiiIl) {
    lIiiIi = IiliIl(lIiiIi, IiliIl(IiliIl(ilii1l(ill1l1, ilili1, IlliI1), iI1l1l), lIiiIl));
    return IiliIl(ilii1i(lIiiIi, ill1i1), ill1l1);
  }
  function llllil(Iiiii1, il1iiI, lliIil, IIi1iI, lliIii, il1ii1, IIII1) {
    Iiiii1 = IiliIl(Iiiii1, IiliIl(IiliIl(llllii(il1iiI, lliIil, IIi1iI), lliIii), IIII1));
    return IiliIl(ilii1i(Iiiii1, il1ii1), il1iiI);
  }
  function II1ill(iIi1, I11IIl, Il11lI, I11IIi, l1i1l1, l1i1ii, IiiiiI) {
    iIi1 = IiliIl(iIi1, IiliIl(IiliIl(l11l(I11IIl, Il11lI, I11IIi), l1i1l1), IiiiiI));
    return IiliIl(ilii1i(iIi1, l1i1ii), I11IIl);
  }
  function ilili(IIi1ii, lliIiI, iI1l11, IlliIl, IlliIi, ill1iI, Il11ll) {
    IIi1ii = IiliIl(IIi1ii, IiliIl(IiliIl(illiII(lliIiI, iI1l11, IlliIl), IlliIi), Il11ll));
    return IiliIl(ilii1i(IIi1ii, ill1iI), lliIiI);
  }
  function iII1iI(i1lIi1) {
    {
      for (var l1i1il, lil1l1 = i1lIi1.length, I1i1ll = lil1l1 + 8, lIlil = (I1i1ll - I1i1ll % 64) / 64, iIi1li = 16 * (lIlil + 1), l11I11 = new Array(iIi1li - 1), ii1II = 0, IIIIl = 0; lil1l1 > IIIIl;) l1i1il = (IIIIl - IIIIl % 4) / 4, ii1II = IIIIl % 4 * 8, l11I11[l1i1il] = l11I11[l1i1il] | i1lIi1.charCodeAt(IIIIl) << ii1II, IIIIl++;
      l1i1il = (IIIIl - IIIIl % 4) / 4;
      ii1II = IIIIl % 4 * 8;
      l11I11[l1i1il] = l11I11[l1i1il] | 128 << ii1II;
      l11I11[iIi1li - 2] = lil1l1 << 3;
      l11I11[iIi1li - 1] = lil1l1 >>> 29;
      return l11I11;
    }
  }
  function II1ili(IIIIi) {
    var iIii,
      Iiliii,
      iIil = "",
      lIlili = "";
    for (Iiliii = 0; 3 >= Iiliii; Iiliii++) iIii = IIIIi >>> 8 * Iiliii & 255, lIlili = "0" + iIii.toString(16), iIil += lIlili.substr(lIlili.length - 2, 2);
    return iIil;
  }
  function ilill(li1ii1) {
    {
      li1ii1 = li1ii1.replace(/\r\n/g, "\n");
      for (var lIlill = "", i1iI11 = 0; i1iI11 < li1ii1.length; i1iI11++) {
        {
          var I1i1li = li1ii1.charCodeAt(i1iI11);
          128 > I1i1li ? lIlill += String.fromCharCode(I1i1li) : I1i1li > 127 && 2048 > I1i1li ? (lIlill += String.fromCharCode(I1i1li >> 6 | 192), lIlill += String.fromCharCode(63 & I1i1li | 128)) : (lIlill += String.fromCharCode(I1i1li >> 12 | 224), lIlill += String.fromCharCode(I1i1li >> 6 & 63 | 128), lIlill += String.fromCharCode(63 & I1i1li | 128));
        }
      }
      return lIlill;
    }
  }
  var li1IIi,
    Il1IiI,
    i1II1i,
    IIilil,
    i1II1l,
    IiIl1l,
    IIilii,
    iiiiiI,
    IiIl1i,
    IIl1li = [],
    l11i = 7,
    IIl1ll = 12,
    lliIll = 17,
    iIIi = 22,
    lllliI = 5,
    illiIi = 9,
    illiIl = 14,
    iIIl = 20,
    il11li = 4,
    il11ll = 11,
    iII1il = 16,
    Il1Ii1 = 23,
    ililI = 6,
    II1ilI = 10,
    iII1ii = 15,
    li1III = 21;
  for (l1Il11 = ilill(l1Il11), IIl1li = iII1iI(l1Il11), IiIl1l = 1732584193, IIilii = 4023233417, iiiiiI = 2562383102, IiIl1i = 271733878, li1IIi = 0; li1IIi < IIl1li.length; li1IIi += 16) Il1IiI = IiIl1l, i1II1i = IIilii, IIilil = iiiiiI, i1II1l = IiIl1i, IiIl1l = li1IIl(IiIl1l, IIilii, iiiiiI, IiIl1i, IIl1li[li1IIi + 0], l11i, 3614090360), IiIl1i = li1IIl(IiIl1i, IiIl1l, IIilii, iiiiiI, IIl1li[li1IIi + 1], IIl1ll, 3905402710), iiiiiI = li1IIl(iiiiiI, IiIl1i, IiIl1l, IIilii, IIl1li[li1IIi + 2], lliIll, 606105819), IIilii = li1IIl(IIilii, iiiiiI, IiIl1i, IiIl1l, IIl1li[li1IIi + 3], iIIi, 3250441966), IiIl1l = li1IIl(IiIl1l, IIilii, iiiiiI, IiIl1i, IIl1li[li1IIi + 4], l11i, 4118548399), IiIl1i = li1IIl(IiIl1i, IiIl1l, IIilii, iiiiiI, IIl1li[li1IIi + 5], IIl1ll, 1200080426), iiiiiI = li1IIl(iiiiiI, IiIl1i, IiIl1l, IIilii, IIl1li[li1IIi + 6], lliIll, 2821735955), IIilii = li1IIl(IIilii, iiiiiI, IiIl1i, IiIl1l, IIl1li[li1IIi + 7], iIIi, 4249261313), IiIl1l = li1IIl(IiIl1l, IIilii, iiiiiI, IiIl1i, IIl1li[li1IIi + 8], l11i, 1770035416), IiIl1i = li1IIl(IiIl1i, IiIl1l, IIilii, iiiiiI, IIl1li[li1IIi + 9], IIl1ll, 2336552879), iiiiiI = li1IIl(iiiiiI, IiIl1i, IiIl1l, IIilii, IIl1li[li1IIi + 10], lliIll, 4294925233), IIilii = li1IIl(IIilii, iiiiiI, IiIl1i, IiIl1l, IIl1li[li1IIi + 11], iIIi, 2304563134), IiIl1l = li1IIl(IiIl1l, IIilii, iiiiiI, IiIl1i, IIl1li[li1IIi + 12], l11i, 1804603682), IiIl1i = li1IIl(IiIl1i, IiIl1l, IIilii, iiiiiI, IIl1li[li1IIi + 13], IIl1ll, 4254626195), iiiiiI = li1IIl(iiiiiI, IiIl1i, IiIl1l, IIilii, IIl1li[li1IIi + 14], lliIll, 2792965006), IIilii = li1IIl(IIilii, iiiiiI, IiIl1i, IiIl1l, IIl1li[li1IIi + 15], iIIi, 1236535329), IiIl1l = llllil(IiIl1l, IIilii, iiiiiI, IiIl1i, IIl1li[li1IIi + 1], lllliI, 4129170786), IiIl1i = llllil(IiIl1i, IiIl1l, IIilii, iiiiiI, IIl1li[li1IIi + 6], illiIi, 3225465664), iiiiiI = llllil(iiiiiI, IiIl1i, IiIl1l, IIilii, IIl1li[li1IIi + 11], illiIl, 643717713), IIilii = llllil(IIilii, iiiiiI, IiIl1i, IiIl1l, IIl1li[li1IIi + 0], iIIl, 3921069994), IiIl1l = llllil(IiIl1l, IIilii, iiiiiI, IiIl1i, IIl1li[li1IIi + 5], lllliI, 3593408605), IiIl1i = llllil(IiIl1i, IiIl1l, IIilii, iiiiiI, IIl1li[li1IIi + 10], illiIi, 38016083), iiiiiI = llllil(iiiiiI, IiIl1i, IiIl1l, IIilii, IIl1li[li1IIi + 15], illiIl, 3634488961), IIilii = llllil(IIilii, iiiiiI, IiIl1i, IiIl1l, IIl1li[li1IIi + 4], iIIl, 3889429448), IiIl1l = llllil(IiIl1l, IIilii, iiiiiI, IiIl1i, IIl1li[li1IIi + 9], lllliI, 568446438), IiIl1i = llllil(IiIl1i, IiIl1l, IIilii, iiiiiI, IIl1li[li1IIi + 14], illiIi, 3275163606), iiiiiI = llllil(iiiiiI, IiIl1i, IiIl1l, IIilii, IIl1li[li1IIi + 3], illiIl, 4107603335), IIilii = llllil(IIilii, iiiiiI, IiIl1i, IiIl1l, IIl1li[li1IIi + 8], iIIl, 1163531501), IiIl1l = llllil(IiIl1l, IIilii, iiiiiI, IiIl1i, IIl1li[li1IIi + 13], lllliI, 2850285829), IiIl1i = llllil(IiIl1i, IiIl1l, IIilii, iiiiiI, IIl1li[li1IIi + 2], illiIi, 4243563512), iiiiiI = llllil(iiiiiI, IiIl1i, IiIl1l, IIilii, IIl1li[li1IIi + 7], illiIl, 1735328473), IIilii = llllil(IIilii, iiiiiI, IiIl1i, IiIl1l, IIl1li[li1IIi + 12], iIIl, 2368359562), IiIl1l = II1ill(IiIl1l, IIilii, iiiiiI, IiIl1i, IIl1li[li1IIi + 5], il11li, 4294588738), IiIl1i = II1ill(IiIl1i, IiIl1l, IIilii, iiiiiI, IIl1li[li1IIi + 8], il11ll, 2272392833), iiiiiI = II1ill(iiiiiI, IiIl1i, IiIl1l, IIilii, IIl1li[li1IIi + 11], iII1il, 1839030562), IIilii = II1ill(IIilii, iiiiiI, IiIl1i, IiIl1l, IIl1li[li1IIi + 14], Il1Ii1, 4259657740), IiIl1l = II1ill(IiIl1l, IIilii, iiiiiI, IiIl1i, IIl1li[li1IIi + 1], il11li, 2763975236), IiIl1i = II1ill(IiIl1i, IiIl1l, IIilii, iiiiiI, IIl1li[li1IIi + 4], il11ll, 1272893353), iiiiiI = II1ill(iiiiiI, IiIl1i, IiIl1l, IIilii, IIl1li[li1IIi + 7], iII1il, 4139469664), IIilii = II1ill(IIilii, iiiiiI, IiIl1i, IiIl1l, IIl1li[li1IIi + 10], Il1Ii1, 3200236656), IiIl1l = II1ill(IiIl1l, IIilii, iiiiiI, IiIl1i, IIl1li[li1IIi + 13], il11li, 681279174), IiIl1i = II1ill(IiIl1i, IiIl1l, IIilii, iiiiiI, IIl1li[li1IIi + 0], il11ll, 3936430074), iiiiiI = II1ill(iiiiiI, IiIl1i, IiIl1l, IIilii, IIl1li[li1IIi + 3], iII1il, 3572445317), IIilii = II1ill(IIilii, iiiiiI, IiIl1i, IiIl1l, IIl1li[li1IIi + 6], Il1Ii1, 76029189), IiIl1l = II1ill(IiIl1l, IIilii, iiiiiI, IiIl1i, IIl1li[li1IIi + 9], il11li, 3654602809), IiIl1i = II1ill(IiIl1i, IiIl1l, IIilii, iiiiiI, IIl1li[li1IIi + 12], il11ll, 3873151461), iiiiiI = II1ill(iiiiiI, IiIl1i, IiIl1l, IIilii, IIl1li[li1IIi + 15], iII1il, 530742520), IIilii = II1ill(IIilii, iiiiiI, IiIl1i, IiIl1l, IIl1li[li1IIi + 2], Il1Ii1, 3299628645), IiIl1l = ilili(IiIl1l, IIilii, iiiiiI, IiIl1i, IIl1li[li1IIi + 0], ililI, 4096336452), IiIl1i = ilili(IiIl1i, IiIl1l, IIilii, iiiiiI, IIl1li[li1IIi + 7], II1ilI, 1126891415), iiiiiI = ilili(iiiiiI, IiIl1i, IiIl1l, IIilii, IIl1li[li1IIi + 14], iII1ii, 2878612391), IIilii = ilili(IIilii, iiiiiI, IiIl1i, IiIl1l, IIl1li[li1IIi + 5], li1III, 4237533241), IiIl1l = ilili(IiIl1l, IIilii, iiiiiI, IiIl1i, IIl1li[li1IIi + 12], ililI, 1700485571), IiIl1i = ilili(IiIl1i, IiIl1l, IIilii, iiiiiI, IIl1li[li1IIi + 3], II1ilI, 2399980690), iiiiiI = ilili(iiiiiI, IiIl1i, IiIl1l, IIilii, IIl1li[li1IIi + 10], iII1ii, 4293915773), IIilii = ilili(IIilii, iiiiiI, IiIl1i, IiIl1l, IIl1li[li1IIi + 1], li1III, 2240044497), IiIl1l = ilili(IiIl1l, IIilii, iiiiiI, IiIl1i, IIl1li[li1IIi + 8], ililI, 1873313359), IiIl1i = ilili(IiIl1i, IiIl1l, IIilii, iiiiiI, IIl1li[li1IIi + 15], II1ilI, 4264355552), iiiiiI = ilili(iiiiiI, IiIl1i, IiIl1l, IIilii, IIl1li[li1IIi + 6], iII1ii, 2734768916), IIilii = ilili(IIilii, iiiiiI, IiIl1i, IiIl1l, IIl1li[li1IIi + 13], li1III, 1309151649), IiIl1l = ilili(IiIl1l, IIilii, iiiiiI, IiIl1i, IIl1li[li1IIi + 4], ililI, 4149444226), IiIl1i = ilili(IiIl1i, IiIl1l, IIilii, iiiiiI, IIl1li[li1IIi + 11], II1ilI, 3174756917), iiiiiI = ilili(iiiiiI, IiIl1i, IiIl1l, IIilii, IIl1li[li1IIi + 2], iII1ii, 718787259), IIilii = ilili(IIilii, iiiiiI, IiIl1i, IiIl1l, IIl1li[li1IIi + 9], li1III, 3951481745), IiIl1l = IiliIl(IiIl1l, Il1IiI), IIilii = IiliIl(IIilii, i1II1i), iiiiiI = IiliIl(iiiiiI, IIilil), IiIl1i = IiliIl(IiIl1i, i1II1l);
  var lIii1 = II1ili(IiIl1l) + II1ili(IIilii) + II1ili(iiiiiI) + II1ili(IiIl1i);
  return lIii1.toLowerCase();
}
function II1iI1(ii1I1, liiliI) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class Iiliil {
    constructor(I11i1) {
      this.env = I11i1;
    }
    ["send"](iiIili, II1II1 = "GET") {
      {
        iiIili = "string" == typeof iiIili ? {
          "url": iiIili
        } : iiIili;
        let i1I1i1 = this.get;
        "POST" === II1II1 && (i1I1i1 = this.post);
        return new Promise((lIlil1, Il1li1) => {
          i1I1i1.call(this, iiIili, (ili1il, liill1, ili1ii) => {
            ili1il ? Il1li1(ili1il) : lIlil1(liill1);
          });
        });
      }
    }
    ["get"](lllIi1) {
      return this.send.call(this.env, lllIi1);
    }
    ["post"](Illi1l) {
      return this.send.call(this.env, Illi1l, "POST");
    }
  }
  return new class {
    constructor(lllI, i1I1iI) {
      this.name = lllI;
      this.http = new Iiliil(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, i1I1iI);
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
    ["toObj"](lllIiI, lIlilI = null) {
      try {
        return JSON.parse(lllIiI);
      } catch {
        return lIlilI;
      }
    }
    ["toStr"](iiIill, li1ili = null) {
      try {
        return JSON.stringify(iiIill);
      } catch {
        return li1ili;
      }
    }
    ["getjson"](liillI, li1ill) {
      {
        let il1I1l = li1ill;
        const il1I1i = this.getdata(liillI);
        if (il1I1i) try {
          il1I1l = JSON.parse(this.getdata(liillI));
        } catch {}
        return il1I1l;
      }
    }
    ["setjson"](II1, l11ii1) {
      try {
        return this.setdata(JSON.stringify(II1), l11ii1);
      } catch {
        return false;
      }
    }
    ["getScript"](l1l1l1) {
      return new Promise(il1I1I => {
        this.get({
          "url": l1l1l1
        }, (III, l11iii, liili) => il1I1I(liili));
      });
    }
    ["runScript"](IiI1I1, iIIi1I) {
      return new Promise(i1I1l1 => {
        let iIIi11 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        iIIi11 = iIIi11 ? iIIi11.replace(/\n/g, "").trim() : iIIi11;
        let I11l1 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        I11l1 = I11l1 ? 1 * I11l1 : 20;
        I11l1 = iIIi1I && iIIi1I.timeout ? iIIi1I.timeout : I11l1;
        const [IliI1, IIIiII] = iIIi11.split("@"),
          Iii11 = {
            "url": "http://" + IIIiII + "/v1/scripting/evaluate",
            "body": {
              "script_text": IiI1I1,
              "mock_type": "cron",
              "timeout": I11l1
            },
            "headers": {
              "Accept": "*/*"
            }
          };
        this.post(Iii11, (illlI, IilI1i, l1ili1) => i1I1l1(l1ili1));
      }).catch(l1ill1 => this.logErr(l1ill1));
    }
    ["loaddata"]() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const li1I1I = this.path.resolve(this.dataFile),
          IIi = this.path.resolve(process.cwd(), this.dataFile),
          ii1Ii1 = this.fs.existsSync(li1I1I),
          i1I1lI = !ii1Ii1 && this.fs.existsSync(IIi);
        if (!ii1Ii1 && !i1I1lI) return {};
        {
          const IIl = ii1Ii1 ? li1I1I : IIi;
          try {
            return JSON.parse(this.fs.readFileSync(IIl));
          } catch (ii1IiI) {
            return {};
          }
        }
      }
    }
    ["writedata"]() {
      {
        if (this.isNode()) {
          this.fs = this.fs ? this.fs : require("fs");
          this.path = this.path ? this.path : require("path");
          const illl1 = this.path.resolve(this.dataFile),
            l11iil = this.path.resolve(process.cwd(), this.dataFile),
            lII1Ii = this.fs.existsSync(illl1),
            lII1Il = !lII1Ii && this.fs.existsSync(l11iil),
            I11lI = JSON.stringify(this.data);
          lII1Ii ? this.fs.writeFileSync(illl1, I11lI) : lII1Il ? this.fs.writeFileSync(l11iil, I11lI) : this.fs.writeFileSync(illl1, I11lI);
        }
      }
    }
    ["lodash_get"](l1ilii, l1l1li, i1I1li) {
      const l11ilI = l1l1li.replace(/\[(\d+)\]/g, ".$1").split(".");
      let ii1Iil = l1ilii;
      for (const Iii1l of l11ilI) if (ii1Iil = Object(ii1Iil)[Iii1l], undefined === ii1Iil) return i1I1li;
      return ii1Iil;
    }
    ["lodash_set"](IliIi, i1I1ll, I11ll) {
      return Object(IliIi) !== IliIi ? IliIi : (Array.isArray(i1I1ll) || (i1I1ll = i1I1ll.toString().match(/[^.[\]]+/g) || []), i1I1ll.slice(0, -1).reduce((lllIll, illii, ii1Iii) => Object(lllIll[illii]) === lllIll[illii] ? lllIll[illii] : lllIll[illii] = Math.abs(i1I1ll[ii1Iii + 1]) >> 0 == +i1I1ll[ii1Iii + 1] ? [] : {}, IliIi)[i1I1ll[i1I1ll.length - 1]] = I11ll, IliIi);
    }
    ["getdata"](Iii1i) {
      let illil = this.getval(Iii1i);
      if (/^@/.test(Iii1i)) {
        {
          const [, liI1I, l1illl] = /^@(.*?)\.(.*?)$/.exec(Iii1i),
            l11ill = liI1I ? this.getval(liI1I) : "";
          if (l11ill) try {
            {
              const iiIll = JSON.parse(l11ill);
              illil = iiIll ? this.lodash_get(iiIll, l1illl, "") : illil;
            }
          } catch (illiI) {
            illil = "";
          }
        }
      }
      return illil;
    }
    ["setdata"](iiIli, l1I) {
      {
        let illi1 = false;
        if (/^@/.test(l1I)) {
          {
            const [, liI11, lIlI1I] = /^@(.*?)\.(.*?)$/.exec(l1I),
              iIi1i1 = this.getval(liI11),
              llII1 = liI11 ? "null" === iIi1i1 ? null : iIi1i1 || "{}" : "{}";
            try {
              const II1l1l = JSON.parse(llII1);
              this.lodash_set(II1l1l, lIlI1I, iiIli);
              illi1 = this.setval(JSON.stringify(II1l1l), liI11);
            } catch (li1I1l) {
              {
                const II1l1i = {};
                this.lodash_set(II1l1i, lIlI1I, iiIli);
                illi1 = this.setval(JSON.stringify(II1l1i), liI11);
              }
            }
          }
        } else illi1 = this.setval(iiIli, l1I);
        return illi1;
      }
    }
    ["getval"](l1i) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(l1i) : this.isQuanX() ? $prefs.valueForKey(l1i) : this.isNode() ? (this.data = this.loaddata(), this.data[l1i]) : this.data && this.data[l1i] || null;
    }
    ["setval"](l1l, I1Ii1i) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(l1l, I1Ii1i) : this.isQuanX() ? $prefs.setValueForKey(l1l, I1Ii1i) : this.isNode() ? (this.data = this.loaddata(), this.data[I1Ii1i] = l1l, this.writedata(), true) : this.data && this.data[I1Ii1i] || null;
    }
    ["initGotEnv"](iIIi1i) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      iIIi1i && (iIIi1i.headers = iIIi1i.headers ? iIIi1i.headers : {}, undefined === iIIi1i.headers.Cookie && undefined === iIIi1i.cookieJar && (iIIi1i.cookieJar = this.ckjar));
    }
    ["get"](iIIi1l, lIlI1i = () => {}) {
      iIIi1l.headers && (delete iIIi1l.headers["Content-Type"], delete iIIi1l.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (iIIi1l.headers = iIIi1l.headers || {}, Object.assign(iIIi1l.headers, {
        "X-Surge-Skip-Scripting": false
      })), $httpClient.get(iIIi1l, (llili, iiII1, l1111I) => {
        !llili && iiII1 && (iiII1.body = l1111I, iiII1.statusCode = iiII1.status);
        lIlI1i(llili, iiII1, l1111I);
      })) : this.isQuanX() ? (this.isNeedRewrite && (iIIi1l.opts = iIIi1l.opts || {}, Object.assign(iIIi1l.opts, {
        "hints": false
      })), $task.fetch(iIIi1l).then(I1111 => {
        const {
          statusCode: i1Ii,
          statusCode: i1Il,
          headers: llilI,
          body: I11I1I
        } = I1111;
        lIlI1i(null, {
          "status": i1Ii,
          "statusCode": i1Il,
          "headers": llilI,
          "body": I11I1I
        }, I11I1I);
      }, il1IIl => lIlI1i(il1IIl))) : this.isNode() && (this.initGotEnv(iIIi1l), this.got(iIIi1l).on("redirect", (l1111i, il1IIi) => {
        try {
          if (l1111i.headers["set-cookie"]) {
            const i1II = l1111i.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            i1II && this.ckjar.setCookieSync(i1II, null);
            il1IIi.cookieJar = this.ckjar;
          }
        } catch (iI1I1I) {
          this.logErr(iI1I1I);
        }
      }).then(I111I => {
        const {
          statusCode: I11I11,
          statusCode: il1l1I,
          headers: i1Ili1,
          body: l1111l
        } = I111I;
        lIlI1i(null, {
          "status": I11I11,
          "statusCode": il1l1I,
          "headers": i1Ili1,
          "body": l1111l
        }, l1111l);
      }, llI1ll => {
        const {
          message: I111i,
          response: iili11
        } = llI1ll;
        lIlI1i(I111i, iili11, iili11 && iili11.body);
      }));
    }
    ["post"](lI1I1, I1lI1 = () => {}) {
      {
        if (lI1I1.body && lI1I1.headers && !lI1I1.headers["Content-Type"] && (lI1I1.headers["Content-Type"] = "application/json"), lI1I1.headers && delete lI1I1.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (lI1I1.headers = lI1I1.headers || {}, Object.assign(lI1I1.headers, {
          "X-Surge-Skip-Scripting": false
        })), $httpClient.post(lI1I1, (I11I1i, llI1i, IlIIli) => {
          !I11I1i && llI1i && (llI1i.body = IlIIli, llI1i.statusCode = llI1i.status);
          I1lI1(I11I1i, llI1i, IlIIli);
        });else {
          if (this.isQuanX()) lI1I1.method = "POST", this.isNeedRewrite && (lI1I1.opts = lI1I1.opts || {}, Object.assign(lI1I1.opts, {
            "hints": false
          })), $task.fetch(lI1I1).then(IiiIIl => {
            {
              const {
                statusCode: IiiIIi,
                statusCode: iI1iiI,
                headers: l1ii,
                body: I11ii1
              } = IiiIIl;
              I1lI1(null, {
                "status": IiiIIi,
                "statusCode": iI1iiI,
                "headers": l1ii,
                "body": I11ii1
              }, I11ii1);
            }
          }, Iil11i => I1lI1(Iil11i));else {
            if (this.isNode()) {
              this.initGotEnv(lI1I1);
              const {
                url: i1iiiI,
                ...l1il
              } = lI1I1;
              this.got.post(i1iiiI, l1il).then(I1l1lI => {
                {
                  const {
                    statusCode: lIIIIl,
                    statusCode: l1iI,
                    headers: II111i,
                    body: Illill
                  } = I1l1lI;
                  I1lI1(null, {
                    "status": lIIIIl,
                    "statusCode": l1iI,
                    "headers": II111i,
                    "body": Illill
                  }, Illill);
                }
              }, II111l => {
                {
                  const {
                    message: I1Iil,
                    response: i1iiii
                  } = II111l;
                  I1lI1(I1Iil, i1iiii, i1iiii && i1iiii.body);
                }
              });
            }
          }
        }
      }
    }
    ["time"](I1IlI, ii11I1 = null) {
      const IillI1 = ii11I1 ? new Date(ii11I1) : new Date();
      let ili1ll = {
        "M+": IillI1.getMonth() + 1,
        "d+": IillI1.getDate(),
        "H+": IillI1.getHours(),
        "m+": IillI1.getMinutes(),
        "s+": IillI1.getSeconds(),
        "q+": Math.floor((IillI1.getMonth() + 3) / 3),
        "S": IillI1.getMilliseconds()
      };
      /(y+)/.test(I1IlI) && (I1IlI = I1IlI.replace(RegExp.$1, (IillI1.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let iIl1ii in ili1ll) new RegExp("(" + iIl1ii + ")").test(I1IlI) && (I1IlI = I1IlI.replace(RegExp.$1, 1 == RegExp.$1.length ? ili1ll[iIl1ii] : ("00" + ili1ll[iIl1ii]).substr(("" + ili1ll[iIl1ii]).length)));
      return I1IlI;
    }
    ["msg"](I1l1il = ii1I1, lii1II = "", ili1li = "", Iiil11) {
      const IlI1II = I1Il1 => {
        {
          if (!I1Il1) return I1Il1;
          if ("string" == typeof I1Il1) return this.isLoon() ? I1Il1 : this.isQuanX() ? {
            "open-url": I1Il1
          } : this.isSurge() ? {
            "url": I1Il1
          } : undefined;
          if ("object" == typeof I1Il1) {
            {
              if (this.isLoon()) {
                {
                  let ii11II = I1Il1.openUrl || I1Il1.url || I1Il1["open-url"],
                    IillII = I1Il1.mediaUrl || I1Il1["media-url"];
                  return {
                    "openUrl": ii11II,
                    "mediaUrl": IillII
                  };
                }
              }
              if (this.isQuanX()) {
                let II1lI1 = I1Il1["open-url"] || I1Il1.url || I1Il1.openUrl,
                  lIIIII = I1Il1["media-url"] || I1Il1.mediaUrl;
                return {
                  "open-url": II1lI1,
                  "media-url": lIIIII
                };
              }
              if (this.isSurge()) {
                let Iiil1i = I1Il1.url || I1Il1.openUrl || I1Il1["open-url"];
                return {
                  "url": Iiil1i
                };
              }
            }
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(I1l1il, lii1II, ili1li, IlI1II(Iiil11)) : this.isQuanX() && $notify(I1l1il, lii1II, ili1li, IlI1II(Iiil11))), !this.isMuteLog) {
        {
          let II1lII = ["", "==============📣系统通知📣=============="];
          II1lII.push(I1l1il);
          lii1II && II1lII.push(lii1II);
          ili1li && II1lII.push(ili1li);
          console.log(II1lII.join("\n"));
          this.logs = this.logs.concat(II1lII);
        }
      }
    }
    ["log"](...iiII11) {
      iiII11.length > 0 && (this.logs = [...this.logs, ...iiII11]);
      console.log(iiII11.join(this.logSeparator));
    }
    ["logErr"](ili1, l1l1) {
      const I1l1iI = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      I1l1iI ? this.log("", "❗️" + this.name + ", 错误!", ili1.stack) : this.log("", "❗️" + this.name + ", 错误!", ili1);
    }
    ["wait"](iIilll) {
      return new Promise(I11ili => setTimeout(I11ili, iIilll));
    }
    ["done"](Ii1i1i = {}) {
      {
        const lI11i1 = new Date().getTime(),
          Ii1i1l = (lI11i1 - this.startTime) / 1000;
        this.log("", "🔔" + this.name + ", 结束! 🕛 " + Ii1i1l + " 秒");
        this.log();
        (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(Ii1i1i);
      }
    }
  }(ii1I1, liiliI);
}