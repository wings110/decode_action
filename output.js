//Sat Aug 16 2025 04:59:08 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const lI1lilI1 = new liI11iI1("联通云手机任务"),
  IiI1Illl = lI1lilI1.isNode() ? require("./sendNotify") : "",
  iilIl1iI = 1,
  Ililil = 0;
(function () {
  let II1Il1I1;
  try {
    const lIIi1I = Function("return (function() {}.constructor(\"return this\")( ));");
    II1Il1I1 = lIIi1I();
  } catch (lI1IiI) {
    II1Il1I1 = window;
  }
  II1Il1I1.setInterval(lilii1Ii, 2000);
})();
const {
    v4: iii1IiI
  } = require("uuid"),
  I1IlIi = iii1IiI();
let liI11i1I = process.env.chinaUnicomCookie,
  III11l1I = "",
  Iiliilli = "";
ckArr = liI11i1I.split("&");
IIl1ll11("【debug】 这是你的账号数组:\n " + ckArr);
!(async () => {
  ckArr = liI11i1I.split("&");
  await II1IlI1l();
  for (let II1IIilI = 0; II1IIilI < ckArr.length; II1IIilI++) {
    let l11i1iI = II1IIilI + 1;
    console.log("------------- 开始【第 " + l11i1iI + " 个账号】-------------");
    Iiliilli = ckArr[II1IIilI].split("&");
    IIl1ll11("【debug】 这是你第 " + l11i1iI + " 账号信息:\n " + Iiliilli);
    await Ili11Ii1();
    if (num1 == 1) {
      console.log("当前online过期，跳过...");
      continue;
    }
    await lI1lilI1.wait(3000);
    customDateString = II11iiIl();
    const liIIIIlI = require("axios");
    let llIli1II = {
      "method": "GET",
      "url": "https://m.client.10010.com/mobileService/openPlatform/openPlatLineNew.htm?to_url=https://h5forphone.wostore.cn/cloudPhone/openCLDPhone.html?channel_id=ltapp5G&cp_id=91002997",
      "headers": {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 unicom{version:iphone_c@11.0800}",
        "Cookie": "PvSessionId=" + customDateString + "" + I1IlIi + ";c_mobile=" + num1 + "; c_version=iphone_c@11.0800; city=036|" + cityCode + "|90063345|-99;devicedId=" + I1IlIi + "; ecs_token=" + ecs_token + ";t3_token=" + t3_token + ""
      },
      "maxRedirects": 0
    };
    await liIIIIlI.request(llIli1II).catch(ii1IiliI => {
      wenb = ii1IiliI.request.res.rawHeaders[13];
      ticket1 = wenb.match(/ticket=([^&]+)/);
      ticket = ticket1[1];
    });
    await lI11lI1I();
    await llll1lIi();
    await III1lili();
    await lI1lilI1.wait(1000);
    await I1l1Ili1();
    await liliil1();
    await ii111IiI();
    await lI1lilI1.wait(1000);
    await IIiIIi11();
    for (let I1iI1lI = 0; I1iI1lI < cjcs; I1iI1lI++) {
      await lIlllIII();
      await lI1lilI1.wait(3000);
    }
    await I1IliI1l();
  }
})().catch(IIil1Iil => lI1lilI1.logErr(IIil1Iil)).finally(() => lI1lilI1.done());
async function III1lili() {
  let I1llI1I = {
      "url": "https://h5forphone.wostore.cn/h5forphone/activity/signIn",
      "headers": {
        "Accept-Encoding": "gzip, deflate, br",
        "Accept": "*/*",
        "Content-Type": "application/json",
        "Host": "h5forphone.wostore.cn",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.57(0x18003930) NetType/WIFI Language/zh_CN",
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        "X-Requested-With": "XMLHttpRequest",
        "Connection": "keep-alive"
      },
      "body": "{\"accesstoken\": \"" + Iiliilli + "\"}"
    },
    IIlIII11 = await iIllIli(I1llI1I, "签到");
  console.log("签到：" + IIlIII11.msg);
  III11l1I += "签到：" + IIlIII11.msg + "\n";
}
async function lI11lI1I() {
  let lIlIiIll = {
      "url": "https://member.zlhz.wostore.cn/wcy_member/yunPhone/h5Awake/businessHall",
      "headers": {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 unicom{version:iphone_c@12.0400};ltst;OSVersion/16.6",
        "Accept": "application/json, text/plain, */*",
        "Content-Type": "application/json",
        "Sec-Fetch-Site": "same-site",
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        "Sec-Fetch-Mode": "cors",
        "Origin": "https://h5forphone.wostore.cn",
        "Referer": wenb,
        "Sec-Fetch-Dest": "empty"
      },
      "body": "{\"cpId\":\"91002997\",\"channelId\":\"ltapp5G\",\"ticket\":\"" + ticket + "\",\"env\":\"prod\"}"
    },
    Illillli = await iIllIli(lIlIiIll, "获取token");
  if (Illillli.data && Illillli.data.token) Iiliilli = Illillli.data.token;else {
    if (Illillli.data && Illillli.data.url) {
      const i1lI11Il = Illillli.data.url.match(/token=([^&]+)/);
      if (i1lI11Il && i1lI11Il[1]) Iiliilli = i1lI11Il[1];else {
        throw new Error("Token not found in URL");
      }
    } else throw new Error("Unexpected response format");
  }
}
async function I1iIlII1() {
  let I1II1I1I = {
      "url": wenb,
      "headers": {
        "Accept-Encoding": "gzip, deflate, br",
        "Accept": "*/*",
        "Content-Type": "application/json",
        "Host": "h5forphone.wostore.cn",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.57(0x18003930) NetType/WIFI Language/zh_CN",
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        "X-Requested-With": "XMLHttpRequest",
        "Connection": "keep-alive"
      }
    },
    liilil = await IiliIlil(I1II1I1I, "获取token");
}
async function I1l1Ili1() {
  let lIlIllll = {
      "url": "https://h5forphone.wostore.cn/h5forphone/activity/signInRightList",
      "headers": {
        "Accept-Encoding": "gzip, deflate, br",
        "Accept": "*/*",
        "Content-Type": "application/json",
        "Host": "h5forphone.wostore.cn",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.57(0x18003930) NetType/WIFI Language/zh_CN",
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        "X-Requested-With": "XMLHttpRequest",
        "Connection": "keep-alive"
      },
      "body": "{\"accesstoken\": \"" + Iiliilli + "\"}"
    },
    i1Il1l1I = await iIllIli(lIlIllll, "签到");
  if (!i1Il1l1I.goodsList || i1Il1l1I.goodsList.length === 0) {
    {
      console.log("当前未获得奖励");
      return;
    }
  }
  for (const liliiI11 of i1Il1l1I.goodsList) {
    const {
      activityOrderId: IiI1li1I,
      name: il1ll1ii,
      state: lii11iI
    } = liliiI11;
    if (lii11iI == 2) await Iii1ilII(il1ll1ii, IiI1li1I);else {
      console.log(il1ll1ii + " (" + IiI1li1I + ") - 已领取");
    }
  }
}
async function Iii1ilII(IliII1I, iiIii1II) {
  let li1i1III = {
      "url": "https://h5forphone.wostore.cn/h5forphone/activity/raffleSignIn",
      "headers": {
        "Accept-Encoding": "gzip, deflate, br",
        "Accept": "*/*",
        "Content-Type": "application/json",
        "Host": "h5forphone.wostore.cn",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.57(0x18003930) NetType/WIFI Language/zh_CN",
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        "X-Requested-With": "XMLHttpRequest",
        "Connection": "keep-alive"
      },
      "body": "{\"accesstoken\":\"" + Iiliilli + "\",\"activityOrderid\":\"" + iiIii1II + "\",\"account\":\"\",\"accountType\":\"\"}"
    },
    i1ll = await iIllIli(li1i1III, "领取签到奖励");
  console.log("领取" + IliII1I + "：" + i1ll.msg);
  III11l1I += "领取" + IliII1I + "：" + i1ll.msg + "\n";
}
async function liliil1() {
  let illli1I = {
      "url": "https://uphone.wostore.cn/h5api/activity-service/user/login",
      "headers": {
        "Sec-Fetch-Dest": "empty",
        "Connection": "keep-alive",
        "Accept-Encoding": "gzip, deflate, br",
        "Content-Type": "application/json",
        "Sec-Fetch-Site": "same-origin",
        "Origin": "https://uphone.wostore.cn",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.57(0x18003930) NetType/WIFI Language/zh_CN",
        "X-USR-TOKEN": "",
        "Host": "uphone.wostore.cn",
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        "Accept": "application/json"
      },
      "body": "{\n  \"identityType\": \"cloudPhoneLogin\",\n  \"code\": \"" + Iiliilli + "\",\n  \"activityId\": \"" + activityCode + "\",\n  \"device\": \"device\"\n}"
    },
    iiIIIlIi = await iIllIli(illli1I, "token");
  token = iiIIIlIi.data.user_token;
}
async function I1IliI1l() {
  let iii1lill = {
      "url": "https://uphone.wo-adv.cn/bucp/servers/resource/instance/list?pageNum=1&pageSize=200",
      "headers": {
        "Sec-Fetch-Dest": "empty",
        "Connection": "keep-alive",
        "Accept-Encoding": "gzip, deflate, br",
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.57(0x18003930) NetType/WIFI Language/zh_CN",
        "Authorization": Iiliilli,
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        "Accept": "application/json"
      }
    },
    Il1l1lii = await IiliIlil(iii1lill, "time");
  console.log("设备总数: " + Il1l1lii.total);
  Il1l1lii.rows.forEach(IIIli1ll => {
    device_id = IIIli1ll.id;
    console.log("设备 " + IIIli1ll.name + "(" + device_id + ") 信息:");
    console.log("- 类型: " + IIIli1ll.cpSkuProduct.remark);
    console.log("- 实例编号: " + IIIli1ll.instanceNum);
    console.log("- 状态: " + IIIli1ll.status);
    console.log("- 开始时间: " + IIIli1ll.startTime);
    console.log("- 结束时间: " + IIIli1ll.endTime);
    IIIli1ll.status !== "running" ? (console.log("⚠️ 设备状态异常，尝试开机..."), llIliiIi()) : console.log("✅ 设备运行正常");
  });
}
async function llIliiIi() {
  let i1liiIll = {
      "url": "https://uphone.wo-adv.cn/bucp/servers/resource/backup/recover",
      "headers": {
        "Sec-Fetch-Dest": "empty",
        "Connection": "keep-alive",
        "Accept-Encoding": "gzip, deflate, br",
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.57(0x18003930) NetType/WIFI Language/zh_CN",
        "Authorization": Iiliilli,
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        "Accept": "application/json"
      },
      "body": "{\"cpInstanceId\":" + device_id + "}"
    },
    lllii1lI = await iIllIli(i1liiIll, "recover");
  console.log(lllii1lI.msg);
}
async function II1IlI1l() {
  let IiI1i1Ii = {
      "url": "https://gitee.com/kele2233/genxin/raw/master/ydid.json",
      "headers": {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.43(0x18002b2d) NetType/WIFI Language/zh_CN"
      }
    },
    IIIIiIi = await IiliIlil(IiI1i1Ii, "ll");
  hqsjc = IIIIiIi.ymsjc;
  gong = IIIIiIi.gong;
  activityCode = IIIIiIi.activityCode;
  dqsjc = Math.round(new Date().getTime() / 1000).toString();
  hqsjc > dqsjc ? console.log("公告：" + IIIIiIi.gh) : (console.error(gong), process.exit());
}
async function llll1lIi() {
  let IIII1ll1 = {
      "url": "https://uphone.wo-adv.cn/bucp/servers/system/user/getAppUserInfo",
      "headers": {
        "Sec-Fetch-Dest": "empty",
        "Connection": "keep-alive",
        "Accept-Encoding": "gzip, deflate, br",
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.57(0x18003930) NetType/WIFI Language/zh_CN",
        "Authorization": Iiliilli,
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        "Accept": "application/json"
      }
    },
    l1iIiIi1 = await IiliIlil(IIII1ll1, "username");
  console.log("" + l1iIiIi1.data.userName);
}
async function IIiI11I1(lilIIIi1, li1lIIl1) {
  let liIilIli = {
      "url": "https://uphone.wostore.cn/h5api/activity-service/user/task/logs",
      "headers": {
        "Sec-Fetch-Dest": "empty",
        "Connection": "keep-alive",
        "Accept-Encoding": "gzip, deflate, br",
        "Content-Type": "application/json",
        "Sec-Fetch-Site": "same-origin",
        "Origin": "https://uphone.wostore.cn",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.57(0x18003930) NetType/WIFI Language/zh_CN",
        "X-USR-TOKEN": token,
        "Host": "uphone.wostore.cn",
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        "Accept": "application/json"
      },
      "body": "{\n  \"logType\": \"01\",\n  \"logCode\": \"" + lilIIIi1 + "\",\n  \"logSource\": \"01\",\n  \"logDetail\": \"" + li1lIIl1 + "\"\n}"
    },
    IiI1IIIi = await iIllIli(liIilIli, "完成任务");
  console.log(IiI1IIIi.msg);
  IiI1IIIi.code == 200 && (await lI1lilI1.wait(5000), console.log("领取" + li1lIIl1), await liliIlIi(lilIIIi1));
}
async function ii111IiI() {
  let liii1I1I = {
      "url": "https://uphone.wostore.cn/h5api/activity-service/user/task/list",
      "headers": {
        "Sec-Fetch-Dest": "empty",
        "Connection": "keep-alive",
        "Accept-Encoding": "gzip, deflate, br",
        "Content-Type": "application/json",
        "Sec-Fetch-Site": "same-origin",
        "Origin": "https://uphone.wostore.cn",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.57(0x18003930) NetType/WIFI Language/zh_CN",
        "X-USR-TOKEN": token,
        "Host": "uphone.wostore.cn",
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        "Accept": "application/json"
      },
      "body": "{\n  \"activityCode\": \"" + activityCode + "\"\n}"
    },
    lIII1i1I = await iIllIli(liii1I1I, "查询任务");
  const iii11li1 = typeof lIII1i1I === "string" ? JSON.parse(lIII1i1I) : lIII1i1I;
  if (!iii11li1.taskList || !Array.isArray(iii11li1.taskList)) {
    console.log("没有找到任务列表");
    return;
  }
  for (const iIlI1li1 of iii11li1.taskList) {
    {
      taskName = iIlI1li1.taskName;
      logCode = iIlI1li1.taskCode;
      const lIiilil = iIlI1li1.status;
      try {
        if (lIiilil === "OBTAINED") console.log("奖励已领取");else {
          if (lIiilil === "UNCLAIMED") console.log("领取" + taskName), await liliIlIi(logCode);else lIiilil === "INCOMPLETE" ? (console.log("完成" + taskName), await IIiI11I1(logCode, taskName)) : console.log("未知状态: " + lIiilil);
        }
      } catch (illIllI) {
        console.error("处理任务 " + taskName + " 时出错:", illIllI);
      }
    }
  }
}
async function liliIlIi(l1iilIll) {
  let III1III1 = {
      "url": "https://uphone.wostore.cn/h5api/activity-service/user/task/raffle/get",
      "headers": {
        "Sec-Fetch-Dest": "empty",
        "Connection": "keep-alive",
        "Accept-Encoding": "gzip, deflate, br",
        "Content-Type": "application/json",
        "Sec-Fetch-Site": "same-origin",
        "Origin": "https://uphone.wostore.cn",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.57(0x18003930) NetType/WIFI Language/zh_CN",
        "X-USR-TOKEN": token,
        "Host": "uphone.wostore.cn",
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        "Accept": "application/json"
      },
      "body": "{\n  \"activityCode\": \"" + activityCode + ("\",\n  \"taskCode\": \"" + l1iilIll + "\"\n}")
    },
    Il1l1il1 = await iIllIli(III1III1, "领取奖励");
  console.log(Il1l1il1.msg);
}
async function IIiIIi11() {
  let i111i11i = {
      "url": "https://uphone.wostore.cn/h5api/activity-service/user/task/list",
      "headers": {
        "Sec-Fetch-Dest": "empty",
        "Connection": "keep-alive",
        "Accept-Encoding": "gzip, deflate, br",
        "Content-Type": "application/json",
        "Sec-Fetch-Site": "same-origin",
        "Origin": "https://uphone.wostore.cn",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.57(0x18003930) NetType/WIFI Language/zh_CN",
        "X-USR-TOKEN": token,
        "Host": "uphone.wostore.cn",
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        "Accept": "application/json"
      },
      "body": "{\n  \"activityCode\": \"" + activityCode + "\"\n}"
    },
    IiliIIli = await iIllIli(i111i11i, "查询任务");
  cjcs = IiliIIli.rafflesLeftCount;
}
async function lIlllIII() {
  let lli1lil = {
      "url": "https://uphone.wostore.cn/h5api/activity-service/lottery",
      "headers": {
        "Sec-Fetch-Dest": "empty",
        "Connection": "keep-alive",
        "Accept-Encoding": "gzip, deflate, br",
        "Content-Type": "application/json",
        "Sec-Fetch-Site": "same-origin",
        "Origin": "https://uphone.wostore.cn",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.57(0x18003930) NetType/WIFI Language/zh_CN",
        "X-USR-TOKEN": token,
        "Host": "uphone.wostore.cn",
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        "Accept": "application/json"
      },
      "body": "{\n  \"activityCode\": \"" + activityCode + "\"\n}"
    },
    ii1Iili = await iIllIli(lli1lil, "抽奖");
  console.log(ii1Iili.prizeName);
  III11l1I += "抽奖获得：" + ii1Iili.prizeName + "\n";
}
async function Ili11Ii1() {
  let iIllIIlI = {
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
      "body": "deviceModel=iPhone&step=background&token_online=" + Iiliilli + "&version=iphone_c%4011.0700"
    },
    I1lil1Il = await iIllIli(iIllIIlI, "获取");
  try {
    {
      t3_token = I1lil1Il.t3_token;
      private_token = I1lil1Il.private_token;
      ecs_token = I1lil1Il.ecs_token;
      num1 = I1lil1Il.list[0].num;
      cityCode = I1lil1Il.list[0].cityCode;
    }
  } catch (iIiI1lI1) {
    num1 = "1";
  }
}
async function iilliII1(i1I1lili, ili1I1lI) {
  return new Promise(II1Ii1i1 => {
    {
      let ilI1lII1 = [];
      if (i1I1lili) {
        {
          if (i1I1lili.indexOf("@") !== -1) i1I1lili.split("@").forEach(ll1i1ii => {
            ilI1lII1.push(ll1i1ii);
          });else {
            if (i1I1lili.indexOf("\n") !== -1) {
              i1I1lili.split("\n").forEach(l11l1ill => {
                ilI1lII1.push(l11l1ill);
              });
            } else ilI1lII1.push(i1I1lili);
          }
          II1Ii1i1(ilI1lII1);
        }
      } else {
        console.log("\n 【" + lI1lilI1.name + "】：未填写变量 " + ili1I1lI);
      }
    }
  });
}
async function II1iil1(I11ill1l) {
  if (!I11ill1l) return;
  if (iilIl1iI > 0) {
    {
      if (lI1lilI1.isNode()) {
        let iiI1Il1i = require("./sendNotify");
        await iiI1Il1i.sendNotify(lI1lilI1.name, I11ill1l);
      } else lI1lilI1.msg(I11ill1l);
    }
  } else console.log(I11ill1l);
}
function II1I11I1(I1Ii1III) {
  I1Ii1III = I1Ii1III || 32;
  let i1Il111i = "QWERTYUIOPASDFGHJKLZXCVBNM1234567890",
    IiIlIIIi = i1Il111i.length,
    l1iiIili = "";
  for (i = 0; i < I1Ii1III; i++) l1iiIili += i1Il111i.charAt(Math.floor(Math.random() * IiIlIIIi));
  return l1iiIili;
}
let lii1Ii1 = "";
function Il1i1ii1(lllliIIi) {
  lii1Ii1 = lllliIIi;
}
function lIIlIilI(I1iilllI) {
  lii1Ii1 === I1iilllI ? console.log("Reached mark " + I1iilllI) : console.log("Invalid mark: " + I1iilllI);
}
function IilI1I1I(iIiI11I1) {
  var i11I1l = new Date(iIiI11I1 * 1000);
  var lIlIIiI1 = i11I1l.getFullYear();
  var il11I1I = String(i11I1l.getMonth() + 1).padStart(2, "0");
  var lli1Iili = String(i11I1l.getDate()).padStart(2, "0");
  var liil1l = String(i11I1l.getHours()).padStart(2, "0");
  var lIIi11lI = String(i11I1l.getMinutes()).padStart(2, "0");
  var iiii1lIi = String(i11I1l.getSeconds()).padStart(2, "0");
  var ilIilll1 = lIlIIiI1 + "-" + il11I1I + "-" + lli1Iili + " " + liil1l + ":" + lIIi11lI + ":" + iiii1lIi;
  return ilIilll1;
}
function IilIl11l(IIiIIll1, IiiII1II) {
  return Math.round(Math.random() * (IiiII1II - IIiIIll1) + IIiIIll1);
}
function II1ilIii() {
  const Iili1Il = new Date(),
    i1Ii111I = Iili1Il.getHours(),
    il1liili = new Date(Iili1Il.getFullYear(), Iili1Il.getMonth(), Iili1Il.getDate(), i1Ii111I + 1, 0, 0, 0);
  return il1liili.getTime();
}
function il1iII() {
  const llIii1iI = new Date(),
    ilIil1 = llIii1iI.getMinutes(),
    lIIlII1i = new Date(llIii1iI.getFullYear(), llIii1iI.getMonth(), llIii1iI.getDate(), llIii1iI.getHours(), ilIil1 === 0 ? 1 : ilIil1 + 1, 0, 0);
  lIIlII1i.getMinutes() === 0 && lIIlII1i.getHours() !== llIii1iI.getHours() && lIIlII1i.setDate(llIii1iI.getDate() + (lIIlII1i.getHours() === 0 ? 1 : 0));
  return lIIlII1i.getTime();
}
function il1II1ii() {
  return Math.round(new Date().getTime()).toString();
}
function II11iiIl() {
  const iIl1l1I = new Date(),
    iIl1li1I = String(iIl1l1I.getFullYear()).padStart(4, "0"),
    IillliII = String(iIl1l1I.getMonth() + 1).padStart(2, "0"),
    iIiillil = String(iIl1l1I.getDate()).padStart(2, "0"),
    IliiIili = String(iIl1l1I.getHours()).padStart(2, "0"),
    l11l1iiI = String(iIl1l1I.getMinutes()).padStart(2, "0"),
    I1I1iIi = String(iIl1l1I.getSeconds()).slice(0, 2);
  return iIl1li1I + IillliII + iIiillil + IliiIili + l11l1iiI + I1I1iIi;
}
function llll1l1() {
  return Math.round(new Date().getTime() / 1000).toString();
}
function IliiiI() {
  let ll1iiIIl = new Date();
  h = ll1iiIIl.getHours();
  return h;
}
function ilI1ii1l() {
  let ll11iIll = new Date();
  m = ll11iIll.getMinutes();
  return m;
}
function IiIi1II(ili1i1ii = 3000) {
  return new Promise(I1i1iiiI => {
    let liI1liII = {
      "url": "https://keai.icu/apiwyy/api"
    };
    lI1lilI1.get(liI1liII, async (iII1liI1, l111iI1, li1ili11) => {
      try {
        li1ili11 = JSON.parse(li1ili11);
        console.log("\n 【网抑云时间】: " + li1ili11.content + "  by--" + li1ili11.music);
      } catch (l1iII1I1) {
        lI1lilI1.logErr(l1iII1I1, l111iI1);
      } finally {
        I1i1iiiI();
      }
    }, ili1i1ii);
  });
}
async function IiliIlil(lIi111ll, ill1lIIl, IIi1I11i = 3000) {
  return new Promise(III11I11 => {
    {
      let lii1ll11 = lIi111ll;
      if (!ill1lIIl) {
        let liIll1iI = arguments.callee.toString(),
          i11llll1 = /function\s*(\w*)/i,
          illIIli1 = i11llll1.exec(liIll1iI);
        ill1lIIl = illIIli1[1];
      }
      Ililil && (console.log("\n 【debug】=============== 这是 " + ill1lIIl + " 请求 url ==============="), console.log(lii1ll11));
      lI1lilI1.get(lii1ll11, async (i11IIil, l111iiiI, l111IiI) => {
        try {
          if (Ililil) {
            console.log("\n\n 【debug】===============这是 " + ill1lIIl + " 返回data==============");
            console.log(l111IiI);
            console.log("======");
            console.log(JSON.parse(l111IiI));
          }
          let l1II11II = JSON.parse(l111IiI);
          III11I11(l1II11II);
        } catch (liiliIIi) {
          console.log(i11IIil, l111iiiI);
        } finally {
          III11I11();
        }
      }, IIi1I11i);
    }
  });
}
async function iIllIli(i1111I11, ilIl11Il, i1II1Il = 200) {
  return new Promise(liIIiI => {
    let iiI1l1l = i1111I11;
    if (!ilIl11Il) {
      {
        let I1iiIli1 = arguments.callee.toString(),
          i1l1IiI1 = /function\s*(\w*)/i,
          i1illl = i1l1IiI1.exec(I1iiIli1);
        ilIl11Il = i1illl[1];
      }
    }
    Ililil && (console.log("\n 【debug】=============== 这是 " + ilIl11Il + " 请求 url ==============="), console.log(iiI1l1l));
    lI1lilI1.post(iiI1l1l, async (lliIlIII, I1ll1lIi, i1llIliI) => {
      try {
        {
          Ililil && (console.log("\n\n 【debug】===============这是 " + ilIl11Il + " 返回data=============="), console.log(i1llIliI), console.log("======"), console.log(JSON.parse(i1llIliI)));
          let lIli11l1 = JSON.parse(i1llIliI);
          liIIiI(lIli11l1);
        }
      } catch (illlI1iI) {} finally {
        liIIiI();
      }
    }, i1II1Il);
  });
}
function IIl1ll11(...IiIi1l1i) {
  const illii1ii = function () {
    let lll11III = true;
    return function (II11l1ll, ii11I1Ii) {
      const lil1ill1 = lll11III ? function () {
        {
          if (ii11I1Ii) {
            {
              const l1Ilill = ii11I1Ii.apply(II11l1ll, arguments);
              ii11I1Ii = null;
              return l1Ilill;
            }
          }
        }
      } : function () {};
      lll11III = false;
      return lil1ill1;
    };
  }();
  (function () {
    illii1ii(this, function () {
      {
        const III1iiI = new RegExp("function *\\( *\\)"),
          iillIiii = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i"),
          lIlilll1 = lilii1Ii("init");
        if (!III1iiI.test(lIlilll1 + "chain") || !iillIiii.test(lIlilll1 + "input")) {
          lIlilll1("0");
        } else lilii1Ii();
      }
    })();
  })();
  Ililil && console.log(...IiIi1l1i);
}
function i111il11(lIlliII1) {
  function lIlil11i(Ilil1ili, iil1IIli) {
    return Ilil1ili << iil1IIli | Ilil1ili >>> 32 - iil1IIli;
  }
  function lI1lIill(li1I11ll, lIii11iI) {
    var lI11lIi1, Il1I1ili, iliIiiil, liliIIii, il1lliIl;
    iliIiiil = 2147483648 & li1I11ll;
    liliIIii = 2147483648 & lIii11iI;
    lI11lIi1 = 1073741824 & li1I11ll;
    Il1I1ili = 1073741824 & lIii11iI;
    il1lliIl = (1073741823 & li1I11ll) + (1073741823 & lIii11iI);
    return lI11lIi1 & Il1I1ili ? 2147483648 ^ il1lliIl ^ iliIiiil ^ liliIIii : lI11lIi1 | Il1I1ili ? 1073741824 & il1lliIl ? 3221225472 ^ il1lliIl ^ iliIiiil ^ liliIIii : 1073741824 ^ il1lliIl ^ iliIiiil ^ liliIIii : il1lliIl ^ iliIiiil ^ liliIIii;
  }
  function li111ll1(llii11II, iIillIl1, Il1lI1lI) {
    return llii11II & iIillIl1 | ~llii11II & Il1lI1lI;
  }
  function i1lilII(I11iIIII, li1i1lIi, iili1i) {
    return I11iIIII & iili1i | li1i1lIi & ~iili1i;
  }
  function i11lI111(l1liIIII, lIi1i1I1, iIIIiili) {
    return l1liIIII ^ lIi1i1I1 ^ iIIIiili;
  }
  function Ii1Ii11l(ill1iiiI, lIlliliI, i1iiIll) {
    return lIlliliI ^ (ill1iiiI | ~i1iiIll);
  }
  function lIiliiiI(i1iI1iI, l1IlI1I, iiliiIII, I1Il1111, ilIII1I1, lIIl1ll, llllIIil) {
    i1iI1iI = lI1lIill(i1iI1iI, lI1lIill(lI1lIill(li111ll1(l1IlI1I, iiliiIII, I1Il1111), ilIII1I1), llllIIil));
    return lI1lIill(lIlil11i(i1iI1iI, lIIl1ll), l1IlI1I);
  }
  function III1lIli(Il1ii, I1liIl1i, IIIiI11i, IIi11lIi, IIIiiii1, i1i1lIi, Il1iI1Il) {
    Il1ii = lI1lIill(Il1ii, lI1lIill(lI1lIill(i1lilII(I1liIl1i, IIIiI11i, IIi11lIi), IIIiiii1), Il1iI1Il));
    return lI1lIill(lIlil11i(Il1ii, i1i1lIi), I1liIl1i);
  }
  function li1lIII1(i1llIi1I, I1Ii1iIi, iII11llI, Illili1, iillII11, IIiiIIIi, iliIii11) {
    i1llIi1I = lI1lIill(i1llIi1I, lI1lIill(lI1lIill(i11lI111(I1Ii1iIi, iII11llI, Illili1), iillII11), iliIii11));
    return lI1lIill(lIlil11i(i1llIi1I, IIiiIIIi), I1Ii1iIi);
  }
  function ilIlll1(IIi1llli, IiI1lllI, lI1l1I1i, l1iI1lII, IIllIl1l, iillIi, iI1Ili) {
    IIi1llli = lI1lIill(IIi1llli, lI1lIill(lI1lIill(Ii1Ii11l(IiI1lllI, lI1l1I1i, l1iI1lII), IIllIl1l), iI1Ili));
    return lI1lIill(lIlil11i(IIi1llli, iillIi), IiI1lllI);
  }
  function IililIII(lIIll11l) {
    {
      for (var iIiiiiI, IiI11iIi = lIIll11l.length, l1llIiIi = IiI11iIi + 8, lIlIil1I = (l1llIiIi - l1llIiIi % 64) / 64, iiI1i1li = 16 * (lIlIil1I + 1), liiI11 = new Array(iiI1i1li - 1), iI1lIl1 = 0, ililI1il = 0; IiI11iIi > ililI1il;) iIiiiiI = (ililI1il - ililI1il % 4) / 4, iI1lIl1 = ililI1il % 4 * 8, liiI11[iIiiiiI] = liiI11[iIiiiiI] | lIIll11l.charCodeAt(ililI1il) << iI1lIl1, ililI1il++;
      iIiiiiI = (ililI1il - ililI1il % 4) / 4;
      iI1lIl1 = ililI1il % 4 * 8;
      liiI11[iIiiiiI] = liiI11[iIiiiiI] | 128 << iI1lIl1;
      liiI11[iiI1i1li - 2] = IiI11iIi << 3;
      liiI11[iiI1i1li - 1] = IiI11iIi >>> 29;
      return liiI11;
    }
  }
  function l1II1lli(iiii1I) {
    {
      var liIll1l1,
        iiii1Ili,
        Iill11i1 = "",
        liIi1i1i = "";
      for (iiii1Ili = 0; 3 >= iiii1Ili; iiii1Ili++) liIll1l1 = iiii1I >>> 8 * iiii1Ili & 255, liIi1i1i = "0" + liIll1l1.toString(16), Iill11i1 += liIi1i1i.substr(liIi1i1i.length - 2, 2);
      return Iill11i1;
    }
  }
  function i1l1ili(ll1lIlIl) {
    {
      ll1lIlIl = ll1lIlIl.replace(/\r\n/g, "\n");
      for (var IiIlI1l1 = "", IiIlil1l = 0; IiIlil1l < ll1lIlIl.length; IiIlil1l++) {
        var lIIlIIil = ll1lIlIl.charCodeAt(IiIlil1l);
        128 > lIIlIIil ? IiIlI1l1 += String.fromCharCode(lIIlIIil) : lIIlIIil > 127 && 2048 > lIIlIIil ? (IiIlI1l1 += String.fromCharCode(lIIlIIil >> 6 | 192), IiIlI1l1 += String.fromCharCode(63 & lIIlIIil | 128)) : (IiIlI1l1 += String.fromCharCode(lIIlIIil >> 12 | 224), IiIlI1l1 += String.fromCharCode(lIIlIIil >> 6 & 63 | 128), IiIlI1l1 += String.fromCharCode(63 & lIIlIIil | 128));
      }
      return IiIlI1l1;
    }
  }
  var i1IIiili,
    IliIIi1I,
    llI1lI11,
    IiilllIi,
    illI1Il1,
    ii1I11II,
    iiiilIIi,
    I1111Ill,
    lI1liil1,
    iIi1IIll = [],
    IlI11l1 = 7,
    IIil1l1I = 12,
    ll1ii111 = 17,
    Ii11liIi = 22,
    lIiill = 5,
    i1l1lilI = 9,
    III1iII = 14,
    i1llll1I = 20,
    iiiiiiI1 = 4,
    l1Il1IIi = 11,
    ill1Iil1 = 16,
    I1ll111I = 23,
    ilii1i11 = 6,
    I11iili = 10,
    I1IlII = 15,
    lli1IIlI = 21;
  for (lIlliII1 = i1l1ili(lIlliII1), iIi1IIll = IililIII(lIlliII1), ii1I11II = 1732584193, iiiilIIi = 4023233417, I1111Ill = 2562383102, lI1liil1 = 271733878, i1IIiili = 0; i1IIiili < iIi1IIll.length; i1IIiili += 16) IliIIi1I = ii1I11II, llI1lI11 = iiiilIIi, IiilllIi = I1111Ill, illI1Il1 = lI1liil1, ii1I11II = lIiliiiI(ii1I11II, iiiilIIi, I1111Ill, lI1liil1, iIi1IIll[i1IIiili + 0], IlI11l1, 3614090360), lI1liil1 = lIiliiiI(lI1liil1, ii1I11II, iiiilIIi, I1111Ill, iIi1IIll[i1IIiili + 1], IIil1l1I, 3905402710), I1111Ill = lIiliiiI(I1111Ill, lI1liil1, ii1I11II, iiiilIIi, iIi1IIll[i1IIiili + 2], ll1ii111, 606105819), iiiilIIi = lIiliiiI(iiiilIIi, I1111Ill, lI1liil1, ii1I11II, iIi1IIll[i1IIiili + 3], Ii11liIi, 3250441966), ii1I11II = lIiliiiI(ii1I11II, iiiilIIi, I1111Ill, lI1liil1, iIi1IIll[i1IIiili + 4], IlI11l1, 4118548399), lI1liil1 = lIiliiiI(lI1liil1, ii1I11II, iiiilIIi, I1111Ill, iIi1IIll[i1IIiili + 5], IIil1l1I, 1200080426), I1111Ill = lIiliiiI(I1111Ill, lI1liil1, ii1I11II, iiiilIIi, iIi1IIll[i1IIiili + 6], ll1ii111, 2821735955), iiiilIIi = lIiliiiI(iiiilIIi, I1111Ill, lI1liil1, ii1I11II, iIi1IIll[i1IIiili + 7], Ii11liIi, 4249261313), ii1I11II = lIiliiiI(ii1I11II, iiiilIIi, I1111Ill, lI1liil1, iIi1IIll[i1IIiili + 8], IlI11l1, 1770035416), lI1liil1 = lIiliiiI(lI1liil1, ii1I11II, iiiilIIi, I1111Ill, iIi1IIll[i1IIiili + 9], IIil1l1I, 2336552879), I1111Ill = lIiliiiI(I1111Ill, lI1liil1, ii1I11II, iiiilIIi, iIi1IIll[i1IIiili + 10], ll1ii111, 4294925233), iiiilIIi = lIiliiiI(iiiilIIi, I1111Ill, lI1liil1, ii1I11II, iIi1IIll[i1IIiili + 11], Ii11liIi, 2304563134), ii1I11II = lIiliiiI(ii1I11II, iiiilIIi, I1111Ill, lI1liil1, iIi1IIll[i1IIiili + 12], IlI11l1, 1804603682), lI1liil1 = lIiliiiI(lI1liil1, ii1I11II, iiiilIIi, I1111Ill, iIi1IIll[i1IIiili + 13], IIil1l1I, 4254626195), I1111Ill = lIiliiiI(I1111Ill, lI1liil1, ii1I11II, iiiilIIi, iIi1IIll[i1IIiili + 14], ll1ii111, 2792965006), iiiilIIi = lIiliiiI(iiiilIIi, I1111Ill, lI1liil1, ii1I11II, iIi1IIll[i1IIiili + 15], Ii11liIi, 1236535329), ii1I11II = III1lIli(ii1I11II, iiiilIIi, I1111Ill, lI1liil1, iIi1IIll[i1IIiili + 1], lIiill, 4129170786), lI1liil1 = III1lIli(lI1liil1, ii1I11II, iiiilIIi, I1111Ill, iIi1IIll[i1IIiili + 6], i1l1lilI, 3225465664), I1111Ill = III1lIli(I1111Ill, lI1liil1, ii1I11II, iiiilIIi, iIi1IIll[i1IIiili + 11], III1iII, 643717713), iiiilIIi = III1lIli(iiiilIIi, I1111Ill, lI1liil1, ii1I11II, iIi1IIll[i1IIiili + 0], i1llll1I, 3921069994), ii1I11II = III1lIli(ii1I11II, iiiilIIi, I1111Ill, lI1liil1, iIi1IIll[i1IIiili + 5], lIiill, 3593408605), lI1liil1 = III1lIli(lI1liil1, ii1I11II, iiiilIIi, I1111Ill, iIi1IIll[i1IIiili + 10], i1l1lilI, 38016083), I1111Ill = III1lIli(I1111Ill, lI1liil1, ii1I11II, iiiilIIi, iIi1IIll[i1IIiili + 15], III1iII, 3634488961), iiiilIIi = III1lIli(iiiilIIi, I1111Ill, lI1liil1, ii1I11II, iIi1IIll[i1IIiili + 4], i1llll1I, 3889429448), ii1I11II = III1lIli(ii1I11II, iiiilIIi, I1111Ill, lI1liil1, iIi1IIll[i1IIiili + 9], lIiill, 568446438), lI1liil1 = III1lIli(lI1liil1, ii1I11II, iiiilIIi, I1111Ill, iIi1IIll[i1IIiili + 14], i1l1lilI, 3275163606), I1111Ill = III1lIli(I1111Ill, lI1liil1, ii1I11II, iiiilIIi, iIi1IIll[i1IIiili + 3], III1iII, 4107603335), iiiilIIi = III1lIli(iiiilIIi, I1111Ill, lI1liil1, ii1I11II, iIi1IIll[i1IIiili + 8], i1llll1I, 1163531501), ii1I11II = III1lIli(ii1I11II, iiiilIIi, I1111Ill, lI1liil1, iIi1IIll[i1IIiili + 13], lIiill, 2850285829), lI1liil1 = III1lIli(lI1liil1, ii1I11II, iiiilIIi, I1111Ill, iIi1IIll[i1IIiili + 2], i1l1lilI, 4243563512), I1111Ill = III1lIli(I1111Ill, lI1liil1, ii1I11II, iiiilIIi, iIi1IIll[i1IIiili + 7], III1iII, 1735328473), iiiilIIi = III1lIli(iiiilIIi, I1111Ill, lI1liil1, ii1I11II, iIi1IIll[i1IIiili + 12], i1llll1I, 2368359562), ii1I11II = li1lIII1(ii1I11II, iiiilIIi, I1111Ill, lI1liil1, iIi1IIll[i1IIiili + 5], iiiiiiI1, 4294588738), lI1liil1 = li1lIII1(lI1liil1, ii1I11II, iiiilIIi, I1111Ill, iIi1IIll[i1IIiili + 8], l1Il1IIi, 2272392833), I1111Ill = li1lIII1(I1111Ill, lI1liil1, ii1I11II, iiiilIIi, iIi1IIll[i1IIiili + 11], ill1Iil1, 1839030562), iiiilIIi = li1lIII1(iiiilIIi, I1111Ill, lI1liil1, ii1I11II, iIi1IIll[i1IIiili + 14], I1ll111I, 4259657740), ii1I11II = li1lIII1(ii1I11II, iiiilIIi, I1111Ill, lI1liil1, iIi1IIll[i1IIiili + 1], iiiiiiI1, 2763975236), lI1liil1 = li1lIII1(lI1liil1, ii1I11II, iiiilIIi, I1111Ill, iIi1IIll[i1IIiili + 4], l1Il1IIi, 1272893353), I1111Ill = li1lIII1(I1111Ill, lI1liil1, ii1I11II, iiiilIIi, iIi1IIll[i1IIiili + 7], ill1Iil1, 4139469664), iiiilIIi = li1lIII1(iiiilIIi, I1111Ill, lI1liil1, ii1I11II, iIi1IIll[i1IIiili + 10], I1ll111I, 3200236656), ii1I11II = li1lIII1(ii1I11II, iiiilIIi, I1111Ill, lI1liil1, iIi1IIll[i1IIiili + 13], iiiiiiI1, 681279174), lI1liil1 = li1lIII1(lI1liil1, ii1I11II, iiiilIIi, I1111Ill, iIi1IIll[i1IIiili + 0], l1Il1IIi, 3936430074), I1111Ill = li1lIII1(I1111Ill, lI1liil1, ii1I11II, iiiilIIi, iIi1IIll[i1IIiili + 3], ill1Iil1, 3572445317), iiiilIIi = li1lIII1(iiiilIIi, I1111Ill, lI1liil1, ii1I11II, iIi1IIll[i1IIiili + 6], I1ll111I, 76029189), ii1I11II = li1lIII1(ii1I11II, iiiilIIi, I1111Ill, lI1liil1, iIi1IIll[i1IIiili + 9], iiiiiiI1, 3654602809), lI1liil1 = li1lIII1(lI1liil1, ii1I11II, iiiilIIi, I1111Ill, iIi1IIll[i1IIiili + 12], l1Il1IIi, 3873151461), I1111Ill = li1lIII1(I1111Ill, lI1liil1, ii1I11II, iiiilIIi, iIi1IIll[i1IIiili + 15], ill1Iil1, 530742520), iiiilIIi = li1lIII1(iiiilIIi, I1111Ill, lI1liil1, ii1I11II, iIi1IIll[i1IIiili + 2], I1ll111I, 3299628645), ii1I11II = ilIlll1(ii1I11II, iiiilIIi, I1111Ill, lI1liil1, iIi1IIll[i1IIiili + 0], ilii1i11, 4096336452), lI1liil1 = ilIlll1(lI1liil1, ii1I11II, iiiilIIi, I1111Ill, iIi1IIll[i1IIiili + 7], I11iili, 1126891415), I1111Ill = ilIlll1(I1111Ill, lI1liil1, ii1I11II, iiiilIIi, iIi1IIll[i1IIiili + 14], I1IlII, 2878612391), iiiilIIi = ilIlll1(iiiilIIi, I1111Ill, lI1liil1, ii1I11II, iIi1IIll[i1IIiili + 5], lli1IIlI, 4237533241), ii1I11II = ilIlll1(ii1I11II, iiiilIIi, I1111Ill, lI1liil1, iIi1IIll[i1IIiili + 12], ilii1i11, 1700485571), lI1liil1 = ilIlll1(lI1liil1, ii1I11II, iiiilIIi, I1111Ill, iIi1IIll[i1IIiili + 3], I11iili, 2399980690), I1111Ill = ilIlll1(I1111Ill, lI1liil1, ii1I11II, iiiilIIi, iIi1IIll[i1IIiili + 10], I1IlII, 4293915773), iiiilIIi = ilIlll1(iiiilIIi, I1111Ill, lI1liil1, ii1I11II, iIi1IIll[i1IIiili + 1], lli1IIlI, 2240044497), ii1I11II = ilIlll1(ii1I11II, iiiilIIi, I1111Ill, lI1liil1, iIi1IIll[i1IIiili + 8], ilii1i11, 1873313359), lI1liil1 = ilIlll1(lI1liil1, ii1I11II, iiiilIIi, I1111Ill, iIi1IIll[i1IIiili + 15], I11iili, 4264355552), I1111Ill = ilIlll1(I1111Ill, lI1liil1, ii1I11II, iiiilIIi, iIi1IIll[i1IIiili + 6], I1IlII, 2734768916), iiiilIIi = ilIlll1(iiiilIIi, I1111Ill, lI1liil1, ii1I11II, iIi1IIll[i1IIiili + 13], lli1IIlI, 1309151649), ii1I11II = ilIlll1(ii1I11II, iiiilIIi, I1111Ill, lI1liil1, iIi1IIll[i1IIiili + 4], ilii1i11, 4149444226), lI1liil1 = ilIlll1(lI1liil1, ii1I11II, iiiilIIi, I1111Ill, iIi1IIll[i1IIiili + 11], I11iili, 3174756917), I1111Ill = ilIlll1(I1111Ill, lI1liil1, ii1I11II, iiiilIIi, iIi1IIll[i1IIiili + 2], I1IlII, 718787259), iiiilIIi = ilIlll1(iiiilIIi, I1111Ill, lI1liil1, ii1I11II, iIi1IIll[i1IIiili + 9], lli1IIlI, 3951481745), ii1I11II = lI1lIill(ii1I11II, IliIIi1I), iiiilIIi = lI1lIill(iiiilIIi, llI1lI11), I1111Ill = lI1lIill(I1111Ill, IiilllIi), lI1liil1 = lI1lIill(lI1liil1, illI1Il1);
  var Ill11Ill = l1II1lli(ii1I11II) + l1II1lli(iiiilIIi) + l1II1lli(I1111Ill) + l1II1lli(lI1liil1);
  return Ill11Ill.toLowerCase();
}
function liI11iI1(i1iI1li, lIi1ll1I) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class lIIilil {
    constructor(Illilil) {
      this.env = Illilil;
    }
    ["send"](l1IliIiI, IIlII1ll = "GET") {
      {
        l1IliIiI = "string" == typeof l1IliIiI ? {
          "url": l1IliIiI
        } : l1IliIiI;
        let illIII1 = this.get;
        "POST" === IIlII1ll && (illIII1 = this.post);
        return new Promise((II1l1ili, llIl1i1I) => {
          illIII1.call(this, l1IliIiI, (i11iilI1, Iliil1Il, ll1Ii111) => {
            i11iilI1 ? llIl1i1I(i11iilI1) : II1l1ili(Iliil1Il);
          });
        });
      }
    }
    ["get"](iIiii1I) {
      return this.send.call(this.env, iIiii1I);
    }
    ["post"](I11IlI11) {
      return this.send.call(this.env, I11IlI11, "POST");
    }
  }
  return new class {
    constructor(lli11I1i, lII1iIl) {
      this.name = lli11I1i;
      this.http = new lIIilil(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, lII1iIl);
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
    ["toObj"](lll11Ili, lIIl1II = null) {
      try {
        return JSON.parse(lll11Ili);
      } catch {
        return lIIl1II;
      }
    }
    ["toStr"](IIllIIi1, I1i1I1i = null) {
      try {
        return JSON.stringify(IIllIIi1);
      } catch {
        return I1i1I1i;
      }
    }
    ["getjson"](iiiIIIlI, lliiI1I) {
      let liI1illl = lliiI1I;
      const I1liili = this.getdata(iiiIIIlI);
      if (I1liili) try {
        liI1illl = JSON.parse(this.getdata(iiiIIIlI));
      } catch {}
      return liI1illl;
    }
    ["setjson"](l1I1ill1, IIii1IlI) {
      try {
        return this.setdata(JSON.stringify(l1I1ill1), IIii1IlI);
      } catch {
        return false;
      }
    }
    ["getScript"](lllIIIl1) {
      return new Promise(IilIl1Ii => {
        this.get({
          "url": lllIIIl1
        }, (ilIiiIi, I11i1II1, llIiIll1) => IilIl1Ii(llIiIll1));
      });
    }
    ["runScript"](lIIllI1, iii1l11l) {
      return new Promise(I11iI11 => {
        {
          let i1liIIIl = this.getdata("@chavy_boxjs_userCfgs.httpapi");
          i1liIIIl = i1liIIIl ? i1liIIIl.replace(/\n/g, "").trim() : i1liIIIl;
          let ll1I11Ii = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
          ll1I11Ii = ll1I11Ii ? 1 * ll1I11Ii : 20;
          ll1I11Ii = iii1l11l && iii1l11l.timeout ? iii1l11l.timeout : ll1I11Ii;
          const [lIIlIII, i1lIlilI] = i1liIIIl.split("@"),
            l1IIii = {
              "url": "http://" + i1lIlilI + "/v1/scripting/evaluate",
              "body": {
                "script_text": lIIllI1,
                "mock_type": "cron",
                "timeout": ll1I11Ii
              },
              "headers": {
                "Accept": "*/*"
              }
            };
          this.post(l1IIii, (i1l1iiI, lI11lii1, ii111I1) => I11iI11(ii111I1));
        }
      }).catch(iIIlliii => this.logErr(iIIlliii));
    }
    ["loaddata"]() {
      if (!this.isNode()) return {};
      {
        {
          this.fs = this.fs ? this.fs : require("fs");
          this.path = this.path ? this.path : require("path");
          const lll1lil = this.path.resolve(this.dataFile),
            ilill = this.path.resolve(process.cwd(), this.dataFile),
            ii1ll1l = this.fs.existsSync(lll1lil),
            Il111iI1 = !ii1ll1l && this.fs.existsSync(ilill);
          if (!ii1ll1l && !Il111iI1) return {};
          {
            {
              const il11ilIi = ii1ll1l ? lll1lil : ilill;
              try {
                return JSON.parse(this.fs.readFileSync(il11ilIi));
              } catch (IllIllIl) {
                return {};
              }
            }
          }
        }
      }
    }
    ["writedata"]() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const illlI1I1 = this.path.resolve(this.dataFile),
          liII1il1 = this.path.resolve(process.cwd(), this.dataFile),
          iii1l1li = this.fs.existsSync(illlI1I1),
          lillI1ii = !iii1l1li && this.fs.existsSync(liII1il1),
          I1lIi1Il = JSON.stringify(this.data);
        iii1l1li ? this.fs.writeFileSync(illlI1I1, I1lIi1Il) : lillI1ii ? this.fs.writeFileSync(liII1il1, I1lIi1Il) : this.fs.writeFileSync(illlI1I1, I1lIi1Il);
      }
    }
    ["lodash_get"](IlIilI1I, ii1illI1, i1Ii1lll) {
      {
        const l1IiiiI1 = ii1illI1.replace(/\[(\d+)\]/g, ".$1").split(".");
        let IiII1Ii1 = IlIilI1I;
        for (const i11lIi1l of l1IiiiI1) if (IiII1Ii1 = Object(IiII1Ii1)[i11lIi1l], undefined === IiII1Ii1) return i1Ii1lll;
        return IiII1Ii1;
      }
    }
    ["lodash_set"](iII11IIi, IIliiili, llii11Il) {
      return Object(iII11IIi) !== iII11IIi ? iII11IIi : (Array.isArray(IIliiili) || (IIliiili = IIliiili.toString().match(/[^.[\]]+/g) || []), IIliiili.slice(0, -1).reduce((I1lIIIii, lIiIl11l, l1I1lII) => Object(I1lIIIii[lIiIl11l]) === I1lIIIii[lIiIl11l] ? I1lIIIii[lIiIl11l] : I1lIIIii[lIiIl11l] = Math.abs(IIliiili[l1I1lII + 1]) >> 0 == +IIliiili[l1I1lII + 1] ? [] : {}, iII11IIi)[IIliiili[IIliiili.length - 1]] = llii11Il, iII11IIi);
    }
    ["getdata"](llIII1i) {
      let l1I1l1i = this.getval(llIII1i);
      if (/^@/.test(llIII1i)) {
        const [, lIIl1lII, IllllIl1] = /^@(.*?)\.(.*?)$/.exec(llIII1i),
          iiIiliIi = lIIl1lII ? this.getval(lIIl1lII) : "";
        if (iiIiliIi) try {
          {
            const li11IlII = JSON.parse(iiIiliIi);
            l1I1l1i = li11IlII ? this.lodash_get(li11IlII, IllllIl1, "") : l1I1l1i;
          }
        } catch (Ilill1li) {
          l1I1l1i = "";
        }
      }
      return l1I1l1i;
    }
    ["setdata"](I1I1l1ll, lIiilli1) {
      let lIii1I1l = false;
      if (/^@/.test(lIiilli1)) {
        const [, Ii1lil, il1liIlI] = /^@(.*?)\.(.*?)$/.exec(lIiilli1),
          lililliI = this.getval(Ii1lil),
          l1i1l1Ii = Ii1lil ? "null" === lililliI ? null : lililliI || "{}" : "{}";
        try {
          {
            const iIilI = JSON.parse(l1i1l1Ii);
            this.lodash_set(iIilI, il1liIlI, I1I1l1ll);
            lIii1I1l = this.setval(JSON.stringify(iIilI), Ii1lil);
          }
        } catch (IiIi1lI1) {
          {
            const iliI11I1 = {};
            this.lodash_set(iliI11I1, il1liIlI, I1I1l1ll);
            lIii1I1l = this.setval(JSON.stringify(iliI11I1), Ii1lil);
          }
        }
      } else lIii1I1l = this.setval(I1I1l1ll, lIiilli1);
      return lIii1I1l;
    }
    ["getval"](l1IiI1li) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(l1IiI1li) : this.isQuanX() ? $prefs.valueForKey(l1IiI1li) : this.isNode() ? (this.data = this.loaddata(), this.data[l1IiI1li]) : this.data && this.data[l1IiI1li] || null;
    }
    ["setval"](III1iIiI, II11li11) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(III1iIiI, II11li11) : this.isQuanX() ? $prefs.setValueForKey(III1iIiI, II11li11) : this.isNode() ? (this.data = this.loaddata(), this.data[II11li11] = III1iIiI, this.writedata(), true) : this.data && this.data[II11li11] || null;
    }
    ["initGotEnv"](IIIliIi1) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      IIIliIi1 && (IIIliIi1.headers = IIIliIi1.headers ? IIIliIi1.headers : {}, undefined === IIIliIi1.headers.Cookie && undefined === IIIliIi1.cookieJar && (IIIliIi1.cookieJar = this.ckjar));
    }
    ["get"](IIIi1lil, l1ilIlIi = () => {}) {
      IIIi1lil.headers && (delete IIIi1lil.headers["Content-Type"], delete IIIi1lil.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (IIIi1lil.headers = IIIi1lil.headers || {}, Object.assign(IIIi1lil.headers, {
        "X-Surge-Skip-Scripting": false
      })), $httpClient.get(IIIi1lil, (I1ll1iIi, lllIiIll, i1iIii1l) => {
        !I1ll1iIi && lllIiIll && (lllIiIll.body = i1iIii1l, lllIiIll.statusCode = lllIiIll.status);
        l1ilIlIi(I1ll1iIi, lllIiIll, i1iIii1l);
      })) : this.isQuanX() ? (this.isNeedRewrite && (IIIi1lil.opts = IIIi1lil.opts || {}, Object.assign(IIIi1lil.opts, {
        "hints": false
      })), $task.fetch(IIIi1lil).then(ilIi111i => {
        const {
          statusCode: l1ili11I,
          statusCode: iIiIIIl,
          headers: iliiiIl,
          body: IiIl1lii
        } = ilIi111i;
        l1ilIlIi(null, {
          "status": l1ili11I,
          "statusCode": iIiIIIl,
          "headers": iliiiIl,
          "body": IiIl1lii
        }, IiIl1lii);
      }, il1illii => l1ilIlIi(il1illii))) : this.isNode() && (this.initGotEnv(IIIi1lil), this.got(IIIi1lil).on("redirect", (iIIIi11I, IIl1il1) => {
        try {
          if (iIIIi11I.headers["set-cookie"]) {
            const liIIiiiI = iIIIi11I.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            liIIiiiI && this.ckjar.setCookieSync(liIIiiiI, null);
            IIl1il1.cookieJar = this.ckjar;
          }
        } catch (Ii1IlI1) {
          this.logErr(Ii1IlI1);
        }
      }).then(i1lIlll => {
        const {
          statusCode: lIllI,
          statusCode: liilIII1,
          headers: il1l1I11,
          body: Illll111
        } = i1lIlll;
        l1ilIlIi(null, {
          "status": lIllI,
          "statusCode": liilIII1,
          "headers": il1l1I11,
          "body": Illll111
        }, Illll111);
      }, I1Il1iiI => {
        const {
          message: Il1lill,
          response: IiIil1li
        } = I1Il1iiI;
        l1ilIlIi(Il1lill, IiIil1li, IiIil1li && IiIil1li.body);
      }));
    }
    ["post"](I1lii11, lilil1ll = () => {}) {
      if (I1lii11.body && I1lii11.headers && !I1lii11.headers["Content-Type"] && (I1lii11.headers["Content-Type"] = "application/json;charset=utf-8"), I1lii11.headers && delete I1lii11.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (I1lii11.headers = I1lii11.headers || {}, Object.assign(I1lii11.headers, {
        "X-Surge-Skip-Scripting": false
      })), $httpClient.post(I1lii11, (iIIiii1l, ill1lI1i, l1Iii1i) => {
        !iIIiii1l && ill1lI1i && (ill1lI1i.body = l1Iii1i, ill1lI1i.statusCode = ill1lI1i.status);
        lilil1ll(iIIiii1l, ill1lI1i, l1Iii1i);
      });else {
        if (this.isQuanX()) I1lii11.method = "POST", this.isNeedRewrite && (I1lii11.opts = I1lii11.opts || {}, Object.assign(I1lii11.opts, {
          "hints": false
        })), $task.fetch(I1lii11).then(IlIiliIl => {
          const {
            statusCode: IlI1111i,
            statusCode: I11IiIil,
            headers: li1IIii1,
            body: Ii1lllIl
          } = IlIiliIl;
          lilil1ll(null, {
            "status": IlI1111i,
            "statusCode": I11IiIil,
            "headers": li1IIii1,
            "body": Ii1lllIl
          }, Ii1lllIl);
        }, I1Ii1iI1 => lilil1ll(I1Ii1iI1));else {
          if (this.isNode()) {
            this.initGotEnv(I1lii11);
            const {
              url: IIilIllI,
              ...iilIlI11
            } = I1lii11;
            this.got.post(IIilIllI, iilIlI11).then(i11I111l => {
              const {
                statusCode: l11111Ii,
                statusCode: lIiiiI1l,
                headers: i1lli111,
                body: I11iil1
              } = i11I111l;
              lilil1ll(null, {
                "status": l11111Ii,
                "statusCode": lIiiiI1l,
                "headers": i1lli111,
                "body": I11iil1
              }, I11iil1);
            }, l1lilIl1 => {
              {
                const {
                  message: ili1l,
                  response: l11ll1l1
                } = l1lilIl1;
                lilil1ll(ili1l, l11ll1l1, l11ll1l1 && l11ll1l1.body);
              }
            });
          }
        }
      }
    }
    ["time"](llillII1, l1iIIiI = null) {
      {
        const I1l1lii = l1iIIiI ? new Date(l1iIIiI) : new Date();
        let I111llI1 = {
          "M+": I1l1lii.getMonth() + 1,
          "d+": I1l1lii.getDate(),
          "H+": I1l1lii.getHours(),
          "m+": I1l1lii.getMinutes(),
          "s+": I1l1lii.getSeconds(),
          "q+": Math.floor((I1l1lii.getMonth() + 3) / 3),
          "S": I1l1lii.getMilliseconds()
        };
        /(y+)/.test(llillII1) && (llillII1 = llillII1.replace(RegExp.$1, (I1l1lii.getFullYear() + "").substr(4 - RegExp.$1.length)));
        for (let I1I1iI1i in I111llI1) new RegExp("(" + I1I1iI1i + ")").test(llillII1) && (llillII1 = llillII1.replace(RegExp.$1, 1 == RegExp.$1.length ? I111llI1[I1I1iI1i] : ("00" + I111llI1[I1I1iI1i]).substr(("" + I111llI1[I1I1iI1i]).length)));
        return llillII1;
      }
    }
    ["msg"](IlIl1li1 = i1iI1li, l11iil1l = "", lilIill1 = "", Ii11ii) {
      const lililIll = l1iiili1 => {
        if (!l1iiili1) return l1iiili1;
        if ("string" == typeof l1iiili1) return this.isLoon() ? l1iiili1 : this.isQuanX() ? {
          "open-url": l1iiili1
        } : this.isSurge() ? {
          "url": l1iiili1
        } : undefined;
        if ("object" == typeof l1iiili1) {
          if (this.isLoon()) {
            let Il1I1l = l1iiili1.openUrl || l1iiili1.url || l1iiili1["open-url"],
              I1l111l1 = l1iiili1.mediaUrl || l1iiili1["media-url"];
            return {
              "openUrl": Il1I1l,
              "mediaUrl": I1l111l1
            };
          }
          if (this.isQuanX()) {
            let liIllIi1 = l1iiili1["open-url"] || l1iiili1.url || l1iiili1.openUrl,
              I1llII1l = l1iiili1["media-url"] || l1iiili1.mediaUrl;
            return {
              "open-url": liIllIi1,
              "media-url": I1llII1l
            };
          }
          if (this.isSurge()) {
            let ll1iilll = l1iiili1.url || l1iiili1.openUrl || l1iiili1["open-url"];
            return {
              "url": ll1iilll
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(IlIl1li1, l11iil1l, lilIill1, lililIll(Ii11ii)) : this.isQuanX() && $notify(IlIl1li1, l11iil1l, lilIill1, lililIll(Ii11ii))), !this.isMuteLog) {
        {
          let ii1111II = ["", "==============📣系统通知📣=============="];
          ii1111II.push(IlIl1li1);
          l11iil1l && ii1111II.push(l11iil1l);
          lilIill1 && ii1111II.push(lilIill1);
          console.log(ii1111II.join("\n"));
          this.logs = this.logs.concat(ii1111II);
        }
      }
    }
    ["log"](...ill1lii1) {
      ill1lii1.length > 0 && (this.logs = [...this.logs, ...ill1lii1]);
      console.log(ill1lii1.join(this.logSeparator));
    }
    ["logErr"](i11iIlli, i11I1iIl) {
      const i1iI1llI = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      i1iI1llI ? this.log("", "❗️" + this.name + ", 错误!", i11iIlli.stack) : this.log("", "❗️" + this.name + ", 错误!", i11iIlli);
    }
    ["wait"](I1l1lII) {
      return new Promise(iIl11ii1 => setTimeout(iIl11ii1, I1l1lII));
    }
    ["done"](IliIIiI1 = {}) {
      const l1l1lll = new Date().getTime(),
        liIll11 = (l1l1lll - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + liIll11 + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(IliIIiI1);
    }
  }(i1iI1li, lIi1ll1I);
}
function lilii1Ii(Il111il1) {
  function I1IIlllI(llll1lI1) {
    {
      if (typeof llll1lI1 === "string") return function (I1l11ill) {}.constructor("while (true) {}").apply("counter");else ("" + llll1lI1 / llll1lI1).length !== 1 || llll1lI1 % 20 === 0 ? function () {
        return true;
      }.constructor("debugger").call("action") : function () {
        return false;
      }.constructor("debugger").apply("stateObject");
      I1IIlllI(++llll1lI1);
    }
  }
  try {
    {
      if (Il111il1) return I1IIlllI;else {
        I1IIlllI(0);
      }
    }
  } catch (II1IIIl1) {}
}