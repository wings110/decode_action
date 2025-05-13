//Tue May 13 2025 15:54:58 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const ilIIl = new iI1I("联通517"),
  I11ll1 = ilIIl.isNode() ? require("./sendNotify") : "",
  lIIII = 1,
  li1IlI = 0,
  {
    v4: iiI1i
  } = require("uuid"),
  iiI1l = iiI1i();
let Ili1lI = process.env.chinaUnicomCookie,
  lIlIl1 = "",
  ilIIi = "";
ckArr = Ili1lI.split("&");
lli1iI("【debug】 这是你的账号数组:\n " + ckArr);
!(async () => {
  ckArr = Ili1lI.split("&");
  await I11li1();
  for (let I111Il = 0; I111Il < ckArr.length; I111Il++) {
    {
      let lIl1I = I111Il + 1;
      console.log("------------- 开始【第 " + lIl1I + " 个账号】-------------");
      ilIIi = ckArr[I111Il].split("&");
      lli1iI("【debug】 这是你第 " + lIl1I + " 账号信息:\n " + ilIIi);
      await I1li1l();
      console.log("" + num1 + "开始任务");
      await ilIIl.wait(1000);
      customDateString = ilII1();
      await Ii11Il();
      await ilIIl.wait(1000);
      await lIlIlI();
      await iiIIll();
      for (let I111Ii = 0; I111Ii < cjcishu; I111Ii++) {
        await IiII1l();
        await ilIIl.wait(1000);
        await IiII1i();
        await ilIIl.wait(1000);
      }
    }
  }
  await iiI1I(lIlIl1);
})().catch(IIlli1 => ilIIl.logErr(IIlli1)).finally(() => ilIIl.done());
async function IiII1l() {
  let ilIiil = {
      "url": "https://activity.10010.com/activity2025517/activity/steppingLottery",
      "headers": {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 unicom{version:iphone_c@12.0300};ltst;OSVersion/16.6",
        "Accept": "application/json, text/plain, */*",
        "Content-Type": "application/json",
        "Sec-Fetch-Site": "same-site",
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        "Sec-Fetch-Mode": "cors",
        "Origin": "https://img.client.10010.com",
        "Referer": "https://img.client.10010.com/",
        "Sec-Fetch-Dest": "empty",
        "Cookie": "PvSessionId=" + customDateString + "" + iiI1l + ";c_mobile=" + num1 + "; c_version=iphone_c@11.0800; city=036|" + cityCode + "|90063345|-99;devicedId=" + iiI1l + "; ecs_token=" + ecs_token + ";t3_token=" + t3_token + ""
      },
      "body": "{}"
    },
    iII = await iIlIl1(ilIiil, "ll");
  try {
    cjuuidz = iII.data.uuid;
  } catch (llIi1i) {}
}
async function IiII1i() {
  let l11i1 = {
      "url": "https://activity.10010.com/activity2025517/activity/winningRecords?uuid=" + cjuuidz + "",
      "headers": {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 unicom{version:iphone_c@12.0300};ltst;OSVersion/16.6",
        "Accept": "application/json, text/plain, */*",
        "Content-Type": "application/json",
        "Sec-Fetch-Site": "same-site",
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        "Sec-Fetch-Mode": "cors",
        "Origin": "https://img.client.10010.com",
        "Referer": "https://img.client.10010.com/",
        "Sec-Fetch-Dest": "empty",
        "Cookie": "PvSessionId=" + customDateString + "" + iiI1l + ";c_mobile=" + num1 + "; c_version=iphone_c@11.0800; city=036|" + cityCode + "|90063345|-99;devicedId=" + iiI1l + "; ecs_token=" + ecs_token + ";t3_token=" + t3_token + ""
      }
    },
    lIi11I = await ilIilI(l11i1, "ll");
  try {
    console.log("本次获得" + lIi11I.data.prizeName);
  } catch (lliI1) {}
}
async function Ii11Ii(iiI11l) {
  let Il1II1 = {
      "url": "https://activity.10010.com/activity2025517/task/completeTask?taskId=" + iiI11l + "",
      "headers": {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 unicom{version:iphone_c@12.0300};ltst;OSVersion/16.6",
        "Accept": "application/json, text/plain, */*",
        "Content-Type": "application/json",
        "Sec-Fetch-Site": "same-site",
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        "Sec-Fetch-Mode": "cors",
        "Origin": "https://img.client.10010.com",
        "Referer": "https://img.client.10010.com/",
        "Sec-Fetch-Dest": "empty",
        "Cookie": "PvSessionId=" + customDateString + "" + iiI1l + ";c_mobile=" + num1 + "; c_version=iphone_c@11.0800; city=036|" + cityCode + "|90063345|-99;devicedId=" + iiI1l + "; ecs_token=" + ecs_token + ";t3_token=" + t3_token + ""
      }
    },
    iiilI = await ilIilI(Il1II1, "ll");
  try {
    console.log("执行" + iiilI.data.title + "任务成功");
  } catch (iiiil) {}
}
async function Ii11Ii(iiIlII) {
  let l11l1 = {
    "url": "https://activity.10010.com/activity2025517/task/completeTask?taskId=" + iiIlII,
    "headers": {
      "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 unicom{version:iphone_c@12.0300};ltst;OSVersion/16.6",
      "Accept": "application/json, text/plain, */*",
      "Content-Type": "application/json",
      "Sec-Fetch-Site": "same-site",
      "Accept-Language": "zh-CN,zh-Hans;q=0.9",
      "Sec-Fetch-Mode": "cors",
      "Origin": "https://img.client.10010.com",
      "Referer": "https://img.client.10010.com/",
      "Sec-Fetch-Dest": "empty",
      "Cookie": "PvSessionId=" + customDateString + iiI1l + ";c_mobile=" + num1 + "; c_version=iphone_c@11.0800; city=036|" + cityCode + "|90063345|-99;devicedId=" + iiI1l + "; ecs_token=" + ecs_token + ";t3_token=" + t3_token
    }
  };
  try {
    {
      let lli1il = await ilIilI(l11l1, "ll");
      console.log("执行 " + (lli1il.data?.["title"] || "任务") + " 成功");
      return lli1il;
    }
  } catch (IIiIiI) {
    console.error("执行任务失败: " + IIiIiI.message);
    throw IIiIiI;
  }
}
async function Ii11Il() {
  let ll1i = {
    "url": "https://activity.10010.com/activity2025517/task/taskList",
    "headers": {
      "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 unicom{version:iphone_c@12.0300};ltst;OSVersion/16.6",
      "Accept": "application/json, text/plain, */*",
      "Content-Type": "application/json",
      "Sec-Fetch-Site": "same-site",
      "Accept-Language": "zh-CN,zh-Hans;q=0.9",
      "Sec-Fetch-Mode": "cors",
      "Origin": "https://img.client.10010.com",
      "Referer": "https://img.client.10010.com/",
      "Sec-Fetch-Dest": "empty",
      "Cookie": "PvSessionId=" + customDateString + iiI1l + ";c_mobile=" + num1 + "; c_version=iphone_c@11.0800; city=036|" + cityCode + "|90063345|-99;devicedId=" + iiI1l + "; ecs_token=" + ecs_token + ";t3_token=" + t3_token
    }
  };
  try {
    let iIiIIl = await ilIilI(ll1i, "ll");
    const iIiIIi = iIiIIl.data,
      IlIill = ["邀请好友", "办宽带", "办副卡", "办流量包", "买手机", "办合约机", "充值累计", "预约宽带测速任务"],
      iiI1I1 = iIiIIi.taskList.filter(IlIili => {
        const I1iI = !IlIill.some(iI1i11 => IlIili.title.includes(iI1i11)),
          I1IiiI = ["去完成"].includes(IlIili.button);
        return I1iI && I1IiiI;
      });
    if (iiI1I1.length > 0) {
      {
        console.log("找到 " + iiI1I1.length + " 个可执行任务");
        for (const lIIli1 of iiI1I1) {
          console.log("正在执行任务: " + lIIli1.title + " (ID: " + lIIli1.taskId + ")");
          await Ii11Ii(lIIli1.taskId);
          await new Promise(iIl11i => setTimeout(iIl11i, 1000));
        }
      }
    } else console.log("没有符合条件的未完成任务");
  } catch (I1lI) {
    console.error("获取任务列表失败:", I1lI);
  }
}
async function lIlIlI() {
  let iiI1II = {
      "url": "https://activity.10010.com/activity2025517/share/bind?shareCode=" + fxid + "&channel=face",
      "headers": {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 unicom{version:iphone_c@12.0300};ltst;OSVersion/16.6",
        "Accept": "application/json, text/plain, */*",
        "Content-Type": "application/json",
        "Sec-Fetch-Site": "same-site",
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        "Sec-Fetch-Mode": "cors",
        "Origin": "https://img.client.10010.com",
        "Referer": "https://img.client.10010.com/",
        "Sec-Fetch-Dest": "empty",
        "Cookie": "PvSessionId=" + customDateString + "" + iiI1l + ";c_mobile=" + num1 + "; c_version=iphone_c@11.0800; city=036|" + cityCode + "|90063345|-99;devicedId=" + iiI1l + "; ecs_token=" + ecs_token + ";t3_token=" + t3_token + ""
      }
    },
    iIl11I = await ilIilI(iiI1II, "ll");
  try {} catch (ilIII1) {}
}
async function iiIIll() {
  let lliliI = {
      "url": "https://activity.10010.com/activity2025517/activity/index",
      "headers": {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 unicom{version:iphone_c@12.0300};ltst;OSVersion/16.6",
        "Accept": "application/json, text/plain, */*",
        "Content-Type": "application/json",
        "Sec-Fetch-Site": "same-site",
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        "Sec-Fetch-Mode": "cors",
        "Origin": "https://img.client.10010.com",
        "Referer": "https://img.client.10010.com/",
        "Sec-Fetch-Dest": "empty",
        "Cookie": "PvSessionId=" + customDateString + "" + iiI1l + ";c_mobile=" + num1 + "; c_version=iphone_c@11.0800; city=036|" + cityCode + "|90063345|-99;devicedId=" + iiI1l + "; ecs_token=" + ecs_token + ";t3_token=" + t3_token + ""
      },
      "body": "{}"
    },
    ll1iiI = await iIlIl1(lliliI, "ll");
  try {
    cjcishu = ll1iiI.data.times;
    console.log("目前可抽奖次数" + cjcishu + "次");
  } catch (ll1iil) {}
}
async function I1li1l() {
  let I1Iill = {
      "url": "https://m.client.1" + gh + gh + "1" + gh + ".com/mobileService/onLine.htm",
      "headers": {
        "Accept-Encoding": "gzip, deflate, br",
        "Connection": "keep-alive",
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "*/*",
        "Host": "m.client.1" + gh + gh + "1" + gh + ".com",
        "User-Agent": "ChinaUnicom.x CFNetwork iOS/16.3.1 unicom{version:iphone_c@11." + gh + "7" + gh + gh + "}",
        "Accept-Language": "zh-CN,zh-Hans;q=" + gh + ".9"
      },
      "body": "deviceModel=iPhone&step=background&token_online=" + ilIIi + ("&version=iphone_c%4" + gh + "11." + gh + "7" + gh + gh)
    },
    iilI1i = await iIlIl1(I1Iill, "获取");
  try {
    t3_token = iilI1i.t3_token;
    private_token = iilI1i.private_token;
    ecs_token = iilI1i.ecs_token;
    num1 = iilI1i.list[0].num;
    cityCode = iilI1i.list[0].cityCode;
  } catch (Il1il) {
    num1 = "1";
  }
}
async function I11li1() {
  let lll1ii = {
      "url": "https://gitee.com/kele2233/genxin/raw/master/ydid.json",
      "headers": {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.43(0x18002b2d) NetType/WIFI Language/zh_CN"
      }
    },
    lIIllI = await ilIilI(lll1ii, "ll");
  hqsjc = lIIllI.ymsjc;
  gong = lIIllI.gong;
  dqsjc = Math.round(new Date().getTime() / 1000).toString();
  if (hqsjc > dqsjc) {
    {
      console.log("公告：" + lIIllI.gh);
      console.log("当前版本1.2，最新版本" + lIIllI.fwbbh);
      gh = lIIllI.fwbbh - 1.2;
      const iI111 = Math.floor(Math.random() * 7);
      fxid = lIIllI.fxidList[iI111].fxid;
      console.log("当前脚本有效期至" + I1li1i(hqsjc));
    }
  } else {
    console.error(gong);
    process.exit();
  }
}
async function lIIIi(iIil1I, iI1i1l) {
  return new Promise(IiliI => {
    let I11IiI = [];
    if (iIil1I) {
      if (iIil1I.indexOf("@") !== -1) iIil1I.split("@").forEach(i1IIII => {
        I11IiI.push(i1IIII);
      });else {
        if (iIil1I.indexOf("\n") !== -1) iIil1I.split("\n").forEach(l1ii11 => {
          I11IiI.push(l1ii11);
        });else {
          I11IiI.push(iIil1I);
        }
      }
      IiliI(I11IiI);
    } else console.log("\n 【" + ilIIl.name + "】：未填写变量 " + iI1i1l);
  });
}
async function iiI1I(l1liI1) {
  if (!l1liI1) return;
  if (lIIII > 0) {
    if (ilIIl.isNode()) {
      let il1lil = require("./sendNotify");
      await il1lil.sendNotify(ilIIl.name, l1liI1);
    } else ilIIl.msg(l1liI1);
  } else {
    console.log(l1liI1);
  }
}
function lIIIl(I1iii) {
  I1iii = I1iii || 32;
  let ll1ilI = "QWERTYUIOPASDFGHJKLZXCVBNM1234567890",
    I1ilI = ll1ilI.length,
    iilii1 = "";
  for (i = 0; i < I1iii; i++) iilii1 += ll1ilI.charAt(Math.floor(Math.random() * I1ilI));
  return iilii1;
}
let ilIII = "";
function IiII1I(llilii) {
  ilIII = llilii;
}
function IIl1I1(lll1li) {
  if (ilIII === lll1li) {
    console.log("Reached mark " + lll1li);
  } else console.log("Invalid mark: " + lll1li);
}
function I1li1i(Iilii) {
  var IiIlIi = new Date(Iilii * 1000);
  var il1lll = IiIlIi.getFullYear();
  var Il1li = String(IiIlIi.getMonth() + 1).padStart(2, "0");
  var I1ili = String(IiIlIi.getDate()).padStart(2, "0");
  var iilil1 = String(IiIlIi.getHours()).padStart(2, "0");
  var lIiI11 = String(IiIlIi.getMinutes()).padStart(2, "0");
  var li111I = String(IiIlIi.getSeconds()).padStart(2, "0");
  var i1Il11 = il1lll + "-" + Il1li + "-" + I1ili + " " + iilil1 + ":" + lIiI11 + ":" + li111I;
  return i1Il11;
}
function IIi111(iililI, IlII1i) {
  return Math.round(Math.random() * (IlII1i - iililI) + iililI);
}
function Ii11II() {
  const il1ll1 = new Date(),
    Il11Ii = il1ll1.getHours(),
    Il11Il = new Date(il1ll1.getFullYear(), il1ll1.getMonth(), il1ll1.getDate(), Il11Ii + 1, 0, 0, 0);
  return Il11Il.getTime();
}
function iiI11() {
  const IlII1I = new Date(),
    IillI = IlII1I.getMinutes(),
    i1Il1i = new Date(IlII1I.getFullYear(), IlII1I.getMonth(), IlII1I.getDate(), IlII1I.getHours(), IillI === 0 ? 1 : IillI + 1, 0, 0);
  if (i1Il1i.getMinutes() === 0 && i1Il1i.getHours() !== IlII1I.getHours()) {
    i1Il1i.setDate(IlII1I.getDate() + (i1Il1i.getHours() === 0 ? 1 : 0));
  }
  return i1Il1i.getTime();
}
function lIlIli() {
  return Math.round(new Date().getTime()).toString();
}
function ilII1() {
  const IiliI1 = new Date(),
    Iiii11 = String(IiliI1.getFullYear()).padStart(4, "0"),
    l11I = String(IiliI1.getMonth() + 1).padStart(2, "0"),
    llllli = String(IiliI1.getDate()).padStart(2, "0"),
    iiiii1 = String(IiliI1.getHours()).padStart(2, "0"),
    IIill1 = String(IiliI1.getMinutes()).padStart(2, "0"),
    iIII = String(IiliI1.getSeconds()).slice(0, 2);
  return Iiii11 + l11I + llllli + iiiii1 + IIill1 + iIII;
}
function lIlIll() {
  return Math.round(new Date().getTime() / 1000).toString();
}
function l111I1() {
  let Iiii1i = new Date();
  h = Iiii1i.getHours();
  return h;
}
function IiII11() {
  let iiIlll = new Date();
  m = iiIlll.getMinutes();
  return m;
}
function I11liI(II1iil = 3000) {
  return new Promise(I1I11 => {
    {
      let IIiliI = {
        "url": "https://keai.icu/apiwyy/api"
      };
      ilIIl.get(IIiliI, async (I1I1i, iiiiii, iiiiil) => {
        try {
          iiiiil = JSON.parse(iiiiil);
          console.log("\n 【网抑云时间】: " + iiiiil.content + "  by--" + iiiiil.music);
        } catch (l1Il11) {
          ilIIl.logErr(l1Il11, iiiiii);
        } finally {
          I1I11();
        }
      }, II1iil);
    }
  });
}
async function ilIilI(ilii1i, IiliIl, ilii1l = 3000) {
  return new Promise(i1II1i => {
    let IIilil = ilii1i;
    if (!IiliIl) {
      let i1II1l = arguments.callee.toString(),
        IiIl1l = /function\s*(\w*)/i,
        IIilii = IiIl1l.exec(i1II1l);
      IiliIl = IIilii[1];
    }
    if (li1IlI) {
      console.log("\n 【debug】=============== 这是 " + IiliIl + " 请求 url ===============");
      console.log(IIilil);
    }
    ilIIl.get(IIilil, async (IiIl1i, IIl1li, l11i) => {
      try {
        li1IlI && (console.log("\n\n 【debug】===============这是 " + IiliIl + " 返回data=============="), console.log(l11i), console.log("======"), console.log(JSON.parse(l11i)));
        let IIl1ll = JSON.parse(l11i);
        i1II1i(IIl1ll);
      } catch (lliIll) {
        console.log(IiIl1i, IIl1li);
      } finally {
        i1II1i();
      }
    }, ilii1l);
  });
}
async function iIlIl1(iIIi, lllliI, illiIi = 200) {
  return new Promise(l1Il1i => {
    let Il111I = iIIi;
    if (!lllliI) {
      let li1l11 = arguments.callee.toString(),
        lIiI1I = /function\s*(\w*)/i,
        lII1iI = lIiI1I.exec(li1l11);
      lllliI = lII1iI[1];
    }
    li1IlI && (console.log("\n 【debug】=============== 这是 " + lllliI + " 请求 url ==============="), console.log(Il111I));
    ilIIl.post(Il111I, async (iiiili, Il1111, I11lII) => {
      try {
        li1IlI && (console.log("\n\n 【debug】===============这是 " + lllliI + " 返回data=============="), console.log(I11lII), console.log("======"), console.log(JSON.parse(I11lII)));
        let Il111i = JSON.parse(I11lII);
        l1Il1i(Il111i);
      } catch (Il111l) {} finally {
        l1Il1i();
      }
    }, illiIi);
  });
}
function lli1iI(...il1I) {
  li1IlI && console.log(...il1I);
}
function I1II1I(II1ii1) {
  function II1iiI(Iii1I, I11il) {
    return Iii1I << I11il | Iii1I >>> 32 - I11il;
  }
  function iII1li(IilI1I, l1l1l1) {
    var il1I1I, III, l11iii, liili, IiI1I1;
    l11iii = 2147483648 & IilI1I;
    liili = 2147483648 & l1l1l1;
    il1I1I = 1073741824 & IilI1I;
    III = 1073741824 & l1l1l1;
    IiI1I1 = (1073741823 & IilI1I) + (1073741823 & l1l1l1);
    return il1I1I & III ? 2147483648 ^ IiI1I1 ^ l11iii ^ liili : il1I1I | III ? 1073741824 & IiI1I1 ? 3221225472 ^ IiI1I1 ^ l11iii ^ liili : 1073741824 ^ IiI1I1 ^ l11iii ^ liili : IiI1I1 ^ l11iii ^ liili;
  }
  function lIiii(iIIi1I, liill, llll) {
    return iIIi1I & liill | ~iIIi1I & llll;
  }
  function I1111l(IilI1l, i1I1l1, iIIi11) {
    return IilI1l & iIIi11 | i1I1l1 & ~iIIi11;
  }
  function l111i1(IliI1, IIIiII, Iii11) {
    return IliI1 ^ IIIiII ^ Iii11;
  }
  function li1l1l(ii1IiI, illl1, l11iil) {
    return illl1 ^ (ii1IiI | ~l11iil);
  }
  function li1l1i(I11lI, l1ilil, l1l1ll, l1ilii, l1l1li, i1I1li, l11ilI) {
    I11lI = iII1li(I11lI, iII1li(iII1li(lIiii(l1ilil, l1l1ll, l1ilii), l1l1li), l11ilI));
    return iII1li(II1iiI(I11lI, i1I1li), l1ilil);
  }
  function lIiil(ii1Iil, Iii1l, IliIi, i1I1ll, I11ll, lllIll, illii) {
    ii1Iil = iII1li(ii1Iil, iII1li(iII1li(I1111l(Iii1l, IliIi, i1I1ll), I11ll), illii));
    return iII1li(II1iiI(ii1Iil, lllIll), Iii1l);
  }
  function iII1ll(ii1Iii, Iii1i, lllIli, illil, l11il1, lII1II, I11li) {
    ii1Iii = iII1li(ii1Iii, iII1li(iII1li(l111i1(Iii1i, lllIli, illil), l11il1), I11li));
    return iII1li(II1iiI(ii1Iii, lII1II), Iii1i);
  }
  function I1111i(li1I11, I1i1iI, liI1I, l1illl, l11ill, iIi1iI, l1illi) {
    li1I11 = iII1li(li1I11, iII1li(iII1li(li1l1l(I1i1iI, liI1I, l1illl), l11ill), l1illi));
    return iII1li(II1iiI(li1I11, iIi1iI), I1i1iI);
  }
  function iliiI(iiIli) {
    {
      for (var l1I, li1I1i = iiIli.length, l1illI = li1I1i + 8, illi1 = (l1illI - l1illI % 64) / 64, I1i1i1 = 16 * (illi1 + 1), liI11 = new Array(I1i1i1 - 1), lIlI1I = 0, iIi1i1 = 0; li1I1i > iIi1i1;) l1I = (iIi1i1 - iIi1i1 % 4) / 4, lIlI1I = iIi1i1 % 4 * 8, liI11[l1I] = liI11[l1I] | iiIli.charCodeAt(iIi1i1) << lIlI1I, iIi1i1++;
      l1I = (iIi1i1 - iIi1i1 % 4) / 4;
      lIlI1I = iIi1i1 % 4 * 8;
      liI11[l1I] = liI11[l1I] | 128 << lIlI1I;
      liI11[I1i1i1 - 2] = li1I1i << 3;
      liI11[I1i1i1 - 1] = li1I1i >>> 29;
      return liI11;
    }
  }
  function lIil1(II1l1l) {
    var li1I1l,
      II1l1i,
      iiIlI = "",
      ii1IlI = "";
    for (II1l1i = 0; 3 >= II1l1i; II1l1i++) li1I1l = II1l1l >>> 8 * II1l1i & 255, ii1IlI = "0" + li1I1l.toString(16), iiIlI += ii1IlI.substr(ii1IlI.length - 2, 2);
    return iiIlI;
  }
  function Il1lII(i1I1) {
    i1I1 = i1I1.replace(/\r\n/g, "\n");
    for (var I1Ii1l = "", l1i = 0; l1i < i1I1.length; l1i++) {
      var l1l = i1I1.charCodeAt(l1i);
      128 > l1l ? I1Ii1l += String.fromCharCode(l1l) : l1l > 127 && 2048 > l1l ? (I1Ii1l += String.fromCharCode(l1l >> 6 | 192), I1Ii1l += String.fromCharCode(63 & l1l | 128)) : (I1Ii1l += String.fromCharCode(l1l >> 12 | 224), I1Ii1l += String.fromCharCode(l1l >> 6 & 63 | 128), I1Ii1l += String.fromCharCode(63 & l1l | 128));
    }
    return I1Ii1l;
  }
  var iiiill,
    IIl1iI,
    Ii11ii,
    llllll,
    llIl,
    l111iI,
    llIi,
    Ii11il,
    ilii1,
    I11lI1 = [],
    li1l1I = 7,
    Il1lI1 = 12,
    lIll11 = 17,
    iIlIIl = 22,
    ilIl11 = 5,
    IIi11 = 9,
    lIii = 14,
    ii1 = 20,
    lII1li = 4,
    lII1ll = 11,
    lIilI = 16,
    lli1I1 = 23,
    II1I1i = 6,
    II1I1l = 10,
    ilIl1I = 15,
    iiI = 21;
  for (II1ii1 = Il1lII(II1ii1), I11lI1 = iliiI(II1ii1), l111iI = 1732584193, llIi = 4023233417, Ii11il = 2562383102, ilii1 = 271733878, iiiill = 0; iiiill < I11lI1.length; iiiill += 16) IIl1iI = l111iI, Ii11ii = llIi, llllll = Ii11il, llIl = ilii1, l111iI = li1l1i(l111iI, llIi, Ii11il, ilii1, I11lI1[iiiill + 0], li1l1I, 3614090360), ilii1 = li1l1i(ilii1, l111iI, llIi, Ii11il, I11lI1[iiiill + 1], Il1lI1, 3905402710), Ii11il = li1l1i(Ii11il, ilii1, l111iI, llIi, I11lI1[iiiill + 2], lIll11, 606105819), llIi = li1l1i(llIi, Ii11il, ilii1, l111iI, I11lI1[iiiill + 3], iIlIIl, 3250441966), l111iI = li1l1i(l111iI, llIi, Ii11il, ilii1, I11lI1[iiiill + 4], li1l1I, 4118548399), ilii1 = li1l1i(ilii1, l111iI, llIi, Ii11il, I11lI1[iiiill + 5], Il1lI1, 1200080426), Ii11il = li1l1i(Ii11il, ilii1, l111iI, llIi, I11lI1[iiiill + 6], lIll11, 2821735955), llIi = li1l1i(llIi, Ii11il, ilii1, l111iI, I11lI1[iiiill + 7], iIlIIl, 4249261313), l111iI = li1l1i(l111iI, llIi, Ii11il, ilii1, I11lI1[iiiill + 8], li1l1I, 1770035416), ilii1 = li1l1i(ilii1, l111iI, llIi, Ii11il, I11lI1[iiiill + 9], Il1lI1, 2336552879), Ii11il = li1l1i(Ii11il, ilii1, l111iI, llIi, I11lI1[iiiill + 10], lIll11, 4294925233), llIi = li1l1i(llIi, Ii11il, ilii1, l111iI, I11lI1[iiiill + 11], iIlIIl, 2304563134), l111iI = li1l1i(l111iI, llIi, Ii11il, ilii1, I11lI1[iiiill + 12], li1l1I, 1804603682), ilii1 = li1l1i(ilii1, l111iI, llIi, Ii11il, I11lI1[iiiill + 13], Il1lI1, 4254626195), Ii11il = li1l1i(Ii11il, ilii1, l111iI, llIi, I11lI1[iiiill + 14], lIll11, 2792965006), llIi = li1l1i(llIi, Ii11il, ilii1, l111iI, I11lI1[iiiill + 15], iIlIIl, 1236535329), l111iI = lIiil(l111iI, llIi, Ii11il, ilii1, I11lI1[iiiill + 1], ilIl11, 4129170786), ilii1 = lIiil(ilii1, l111iI, llIi, Ii11il, I11lI1[iiiill + 6], IIi11, 3225465664), Ii11il = lIiil(Ii11il, ilii1, l111iI, llIi, I11lI1[iiiill + 11], lIii, 643717713), llIi = lIiil(llIi, Ii11il, ilii1, l111iI, I11lI1[iiiill + 0], ii1, 3921069994), l111iI = lIiil(l111iI, llIi, Ii11il, ilii1, I11lI1[iiiill + 5], ilIl11, 3593408605), ilii1 = lIiil(ilii1, l111iI, llIi, Ii11il, I11lI1[iiiill + 10], IIi11, 38016083), Ii11il = lIiil(Ii11il, ilii1, l111iI, llIi, I11lI1[iiiill + 15], lIii, 3634488961), llIi = lIiil(llIi, Ii11il, ilii1, l111iI, I11lI1[iiiill + 4], ii1, 3889429448), l111iI = lIiil(l111iI, llIi, Ii11il, ilii1, I11lI1[iiiill + 9], ilIl11, 568446438), ilii1 = lIiil(ilii1, l111iI, llIi, Ii11il, I11lI1[iiiill + 14], IIi11, 3275163606), Ii11il = lIiil(Ii11il, ilii1, l111iI, llIi, I11lI1[iiiill + 3], lIii, 4107603335), llIi = lIiil(llIi, Ii11il, ilii1, l111iI, I11lI1[iiiill + 8], ii1, 1163531501), l111iI = lIiil(l111iI, llIi, Ii11il, ilii1, I11lI1[iiiill + 13], ilIl11, 2850285829), ilii1 = lIiil(ilii1, l111iI, llIi, Ii11il, I11lI1[iiiill + 2], IIi11, 4243563512), Ii11il = lIiil(Ii11il, ilii1, l111iI, llIi, I11lI1[iiiill + 7], lIii, 1735328473), llIi = lIiil(llIi, Ii11il, ilii1, l111iI, I11lI1[iiiill + 12], ii1, 2368359562), l111iI = iII1ll(l111iI, llIi, Ii11il, ilii1, I11lI1[iiiill + 5], lII1li, 4294588738), ilii1 = iII1ll(ilii1, l111iI, llIi, Ii11il, I11lI1[iiiill + 8], lII1ll, 2272392833), Ii11il = iII1ll(Ii11il, ilii1, l111iI, llIi, I11lI1[iiiill + 11], lIilI, 1839030562), llIi = iII1ll(llIi, Ii11il, ilii1, l111iI, I11lI1[iiiill + 14], lli1I1, 4259657740), l111iI = iII1ll(l111iI, llIi, Ii11il, ilii1, I11lI1[iiiill + 1], lII1li, 2763975236), ilii1 = iII1ll(ilii1, l111iI, llIi, Ii11il, I11lI1[iiiill + 4], lII1ll, 1272893353), Ii11il = iII1ll(Ii11il, ilii1, l111iI, llIi, I11lI1[iiiill + 7], lIilI, 4139469664), llIi = iII1ll(llIi, Ii11il, ilii1, l111iI, I11lI1[iiiill + 10], lli1I1, 3200236656), l111iI = iII1ll(l111iI, llIi, Ii11il, ilii1, I11lI1[iiiill + 13], lII1li, 681279174), ilii1 = iII1ll(ilii1, l111iI, llIi, Ii11il, I11lI1[iiiill + 0], lII1ll, 3936430074), Ii11il = iII1ll(Ii11il, ilii1, l111iI, llIi, I11lI1[iiiill + 3], lIilI, 3572445317), llIi = iII1ll(llIi, Ii11il, ilii1, l111iI, I11lI1[iiiill + 6], lli1I1, 76029189), l111iI = iII1ll(l111iI, llIi, Ii11il, ilii1, I11lI1[iiiill + 9], lII1li, 3654602809), ilii1 = iII1ll(ilii1, l111iI, llIi, Ii11il, I11lI1[iiiill + 12], lII1ll, 3873151461), Ii11il = iII1ll(Ii11il, ilii1, l111iI, llIi, I11lI1[iiiill + 15], lIilI, 530742520), llIi = iII1ll(llIi, Ii11il, ilii1, l111iI, I11lI1[iiiill + 2], lli1I1, 3299628645), l111iI = I1111i(l111iI, llIi, Ii11il, ilii1, I11lI1[iiiill + 0], II1I1i, 4096336452), ilii1 = I1111i(ilii1, l111iI, llIi, Ii11il, I11lI1[iiiill + 7], II1I1l, 1126891415), Ii11il = I1111i(Ii11il, ilii1, l111iI, llIi, I11lI1[iiiill + 14], ilIl1I, 2878612391), llIi = I1111i(llIi, Ii11il, ilii1, l111iI, I11lI1[iiiill + 5], iiI, 4237533241), l111iI = I1111i(l111iI, llIi, Ii11il, ilii1, I11lI1[iiiill + 12], II1I1i, 1700485571), ilii1 = I1111i(ilii1, l111iI, llIi, Ii11il, I11lI1[iiiill + 3], II1I1l, 2399980690), Ii11il = I1111i(Ii11il, ilii1, l111iI, llIi, I11lI1[iiiill + 10], ilIl1I, 4293915773), llIi = I1111i(llIi, Ii11il, ilii1, l111iI, I11lI1[iiiill + 1], iiI, 2240044497), l111iI = I1111i(l111iI, llIi, Ii11il, ilii1, I11lI1[iiiill + 8], II1I1i, 1873313359), ilii1 = I1111i(ilii1, l111iI, llIi, Ii11il, I11lI1[iiiill + 15], II1I1l, 4264355552), Ii11il = I1111i(Ii11il, ilii1, l111iI, llIi, I11lI1[iiiill + 6], ilIl1I, 2734768916), llIi = I1111i(llIi, Ii11il, ilii1, l111iI, I11lI1[iiiill + 13], iiI, 1309151649), l111iI = I1111i(l111iI, llIi, Ii11il, ilii1, I11lI1[iiiill + 4], II1I1i, 4149444226), ilii1 = I1111i(ilii1, l111iI, llIi, Ii11il, I11lI1[iiiill + 11], II1I1l, 3174756917), Ii11il = I1111i(Ii11il, ilii1, l111iI, llIi, I11lI1[iiiill + 2], ilIl1I, 718787259), llIi = I1111i(llIi, Ii11il, ilii1, l111iI, I11lI1[iiiill + 9], iiI, 3951481745), l111iI = iII1li(l111iI, IIl1iI), llIi = iII1li(llIi, Ii11ii), Ii11il = iII1li(Ii11il, llllll), ilii1 = iII1li(ilii1, llIl);
  var lIiI = lIil1(l111iI) + lIil1(llIi) + lIil1(Ii11il) + lIil1(ilii1);
  return lIiI.toLowerCase();
}
function iI1I(I1Ii1i, iIIi1i) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class lIlI1i {
    constructor(I1Il1) {
      this.env = I1Il1;
    }
    ["send"](i1iil1, I1Ili = "GET") {
      i1iil1 = "string" == typeof i1iil1 ? {
        "url": i1iil1
      } : i1iil1;
      let lii1Ii = this.get;
      "POST" === I1Ili && (lii1Ii = this.post);
      return new Promise((iiII1I, lIIIII) => {
        lii1Ii.call(this, i1iil1, (Iiil1i, Iiil1l, II1lII) => {
          Iiil1i ? lIIIII(Iiil1i) : iiII1I(Iiil1l);
        });
      });
    }
    ["get"](iIilll) {
      return this.send.call(this.env, iIilll);
    }
    ["post"](I11ili) {
      return this.send.call(this.env, I11ili, "POST");
    }
  }
  return new class {
    constructor(Ii1i1i, iIilli) {
      this.name = Ii1i1i;
      this.http = new lIlI1i(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, iIilli);
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
    ["toObj"](iI1ili, I1Ill = null) {
      try {
        return JSON.parse(iI1ili);
      } catch {
        return I1Ill;
      }
    }
    ["toStr"](ilii, lll11i = null) {
      try {
        return JSON.stringify(ilii);
      } catch {
        return lll11i;
      }
    }
    ["getjson"](iIl1li, iIilil) {
      let iIl1ll = iIilil;
      const lliII1 = this.getdata(iIl1li);
      if (lliII1) try {
        iIl1ll = JSON.parse(this.getdata(iIl1li));
      } catch {}
      return iIl1ll;
    }
    ["setjson"](IiiIII, lIIl1I) {
      try {
        return this.setdata(JSON.stringify(IiiIII), lIIl1I);
      } catch {
        return false;
      }
    }
    ["getScript"](illI) {
      return new Promise(lIIl11 => {
        this.get({
          "url": illI
        }, (Illil1, Iil11I, iI1ii) => lIIl11(iI1ii));
      });
    }
    ["runScript"](I11il1, lIliI) {
      return new Promise(IiiI1i => {
        {
          let IIiiI = this.getdata("@chavy_boxjs_userCfgs.httpapi");
          IIiiI = IIiiI ? IIiiI.replace(/\n/g, "").trim() : IIiiI;
          let II1Il1 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
          II1Il1 = II1Il1 ? 1 * II1Il1 : 20;
          II1Il1 = lIliI && lIliI.timeout ? lIliI.timeout : II1Il1;
          const [i1liiI, lIlIi] = IIiiI.split("@"),
            lI11lI = {
              "url": "http://" + lIlIi + "/v1/scripting/evaluate",
              "body": {
                "script_text": I11il1,
                "mock_type": "cron",
                "timeout": II1Il1
              },
              "headers": {
                "Accept": "*/*"
              }
            };
          this.post(lI11lI, (IIilI, I1i1Ii, lii111) => IiiI1i(lii111));
        }
      }).catch(I1i1Il => this.logErr(I1i1Il));
    }
    ["loaddata"]() {
      {
        if (!this.isNode()) return {};
        {
          this.fs = this.fs ? this.fs : require("fs");
          this.path = this.path ? this.path : require("path");
          const lil1I1 = this.path.resolve(this.dataFile),
            lliill = this.path.resolve(process.cwd(), this.dataFile),
            i1liii = this.fs.existsSync(lil1I1),
            i1liil = !i1liii && this.fs.existsSync(lliill);
          if (!i1liii && !i1liil) return {};
          {
            const lii11I = i1liii ? lil1I1 : lliill;
            try {
              return JSON.parse(this.fs.readFileSync(lii11I));
            } catch (iiIII1) {
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
          const IIil1 = this.path.resolve(this.dataFile),
            iIi1II = this.path.resolve(process.cwd(), this.dataFile),
            Iill11 = this.fs.existsSync(IIil1),
            lliili = !Iill11 && this.fs.existsSync(iIi1II),
            Iill1I = JSON.stringify(this.data);
          Iill11 ? this.fs.writeFileSync(IIil1, Iill1I) : lliili ? this.fs.writeFileSync(iIi1II, Iill1I) : this.fs.writeFileSync(IIil1, Iill1I);
        }
      }
    }
    ["lodash_get"](lI1, II1Ill, iiIIII) {
      {
        const ilIli = II1Ill.replace(/\[(\d+)\]/g, ".$1").split(".");
        let lI11ii = lI1;
        for (const lii11i of ilIli) if (lI11ii = Object(lI11ii)[lii11i], undefined === lI11ii) return iiIIII;
        return lI11ii;
      }
    }
    ["lodash_set"](ilIll, I1l1i1, lII) {
      return Object(ilIll) !== ilIll ? ilIll : (Array.isArray(I1l1i1) || (I1l1i1 = I1l1i1.toString().match(/[^.[\]]+/g) || []), I1l1i1.slice(0, -1).reduce((iIl1i1, liiII, lllIIl) => Object(iIl1i1[liiII]) === iIl1i1[liiII] ? iIl1i1[liiII] : iIl1i1[liiII] = Math.abs(I1l1i1[lllIIl + 1]) >> 0 == +I1l1i1[lllIIl + 1] ? [] : {}, ilIll)[I1l1i1[I1l1i1.length - 1]] = lII, ilIll);
    }
    ["getdata"](i1lilI) {
      {
        let ilIlI = this.getval(i1lilI);
        if (/^@/.test(i1lilI)) {
          const [, lIii11, lIliI1] = /^@(.*?)\.(.*?)$/.exec(i1lilI),
            IIili = lIii11 ? this.getval(lIii11) : "";
          if (IIili) try {
            const liiIi1 = JSON.parse(IIili);
            ilIlI = liiIi1 ? this.lodash_get(liiIi1, lIliI1, "") : ilIlI;
          } catch (lIi) {
            ilIlI = "";
          }
        }
        return ilIlI;
      }
    }
    ["setdata"](IIill, i1lili) {
      {
        let ilIl1 = false;
        if (/^@/.test(i1lili)) {
          const [, lllIIi, li1iIl] = /^@(.*?)\.(.*?)$/.exec(i1lili),
            lIii1I = this.getval(lllIIi),
            lliI1l = lllIIi ? "null" === lIii1I ? null : lIii1I || "{}" : "{}";
          try {
            const lliI1i = JSON.parse(lliI1l);
            this.lodash_set(lliI1i, li1iIl, IIill);
            ilIl1 = this.setval(JSON.stringify(lliI1i), lllIIi);
          } catch (liiI1) {
            {
              const lIIii = {};
              this.lodash_set(lIIii, li1iIl, IIill);
              ilIl1 = this.setval(JSON.stringify(lIIii), lllIIi);
            }
          }
        } else ilIl1 = this.setval(IIill, i1lili);
        return ilIl1;
      }
    }
    ["getval"](liiIiI) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(liiIiI) : this.isQuanX() ? $prefs.valueForKey(liiIiI) : this.isNode() ? (this.data = this.loaddata(), this.data[liiIiI]) : this.data && this.data[liiIiI] || null;
    }
    ["setval"](li1iIi, liilII) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(li1iIi, liilII) : this.isQuanX() ? $prefs.setValueForKey(li1iIi, liilII) : this.isNode() ? (this.data = this.loaddata(), this.data[liilII] = li1iIi, this.writedata(), true) : this.data && this.data[liilII] || null;
    }
    ["initGotEnv"](lIIl1) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      lIIl1 && (lIIl1.headers = lIIl1.headers ? lIIl1.headers : {}, undefined === lIIl1.headers.Cookie && undefined === lIIl1.cookieJar && (lIIl1.cookieJar = this.ckjar));
    }
    ["get"](lllII1, iiIl1I = () => {}) {
      lllII1.headers && (delete lllII1.headers["Content-Type"], delete lllII1.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (lllII1.headers = lllII1.headers || {}, Object.assign(lllII1.headers, {
        "X-Surge-Skip-Scripting": false
      })), $httpClient.get(lllII1, (lIliIi, lIii1l, ilIii) => {
        !lIliIi && lIii1l && (lIii1l.body = ilIii, lIii1l.statusCode = lIii1l.status);
        iiIl1I(lIliIi, lIii1l, ilIii);
      })) : this.isQuanX() ? (this.isNeedRewrite && (lllII1.opts = lllII1.opts || {}, Object.assign(lllII1.opts, {
        "hints": false
      })), $task.fetch(lllII1).then(lIliIl => {
        const {
          statusCode: liilIi,
          statusCode: liilIl,
          headers: iiIl1l,
          body: I11I1
        } = lIliIl;
        iiIl1I(null, {
          "status": liilIi,
          "statusCode": liilIl,
          "headers": iiIl1l,
          "body": I11I1
        }, I11I1);
      }, IiiI11 => iiIl1I(IiiI11))) : this.isNode() && (this.initGotEnv(lllII1), this.got(lllII1).on("redirect", (liiIl, iiIl1i) => {
        try {
          if (liiIl.headers["set-cookie"]) {
            const II1Ii1 = liiIl.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            II1Ii1 && this.ckjar.setCookieSync(II1Ii1, null);
            iiIl1i.cookieJar = this.ckjar;
          }
        } catch (IilII1) {
          this.logErr(IilII1);
        }
      }).then(Ii1 => {
        const {
          statusCode: IiiI1I,
          statusCode: II1IiI,
          headers: IilIII,
          body: i1I1I1
        } = Ii1;
        iiIl1I(null, {
          "status": IiiI1I,
          "statusCode": II1IiI,
          "headers": IilIII,
          "body": i1I1I1
        }, i1I1I1);
      }, lIIlI => {
        {
          const {
            message: ilIiI,
            response: liiIl1
          } = lIIlI;
          iiIl1I(ilIiI, liiIl1, liiIl1 && liiIl1.body);
        }
      }));
    }
    ["post"](l11III, ii1ll1 = () => {}) {
      {
        if (l11III.body && l11III.headers && !l11III.headers["Content-Type"] && (l11III.headers["Content-Type"] = "pplication/x-www-form-urlencoded;charset=utf-8"), l11III.headers && delete l11III.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (l11III.headers = l11III.headers || {}, Object.assign(l11III.headers, {
          "X-Surge-Skip-Scripting": false
        })), $httpClient.post(l11III, (ii1lll, lilliI, liiIli) => {
          !ii1lll && lilliI && (lilliI.body = liiIli, lilliI.statusCode = lilliI.status);
          ii1ll1(ii1lll, lilliI, liiIli);
        });else {
          if (this.isQuanX()) l11III.method = "POST", this.isNeedRewrite && (l11III.opts = l11III.opts || {}, Object.assign(l11III.opts, {
            "hints": false
          })), $task.fetch(l11III).then(i1i1i => {
            const {
              statusCode: IlIIiI,
              statusCode: llll1I,
              headers: IiI1i1,
              body: i1lI1i
            } = i1i1i;
            ii1ll1(null, {
              "status": IlIIiI,
              "statusCode": llll1I,
              "headers": IiI1i1,
              "body": i1lI1i
            }, i1lI1i);
          }, Il1 => ii1ll1(Il1));else {
            if (this.isNode()) {
              {
                this.initGotEnv(l11III);
                const {
                  url: illIi,
                  ...l11IIl
                } = l11III;
                this.got.post(illIi, l11IIl).then(illIl => {
                  {
                    const {
                      statusCode: liiIii,
                      statusCode: iil1l,
                      headers: IliiI1,
                      body: III1l
                    } = illIl;
                    ii1ll1(null, {
                      "status": liiIii,
                      "statusCode": iil1l,
                      "headers": IliiI1,
                      "body": III1l
                    }, III1l);
                  }
                }, ilIiIi => {
                  const {
                    message: liiIil,
                    response: IIIili
                  } = ilIiIi;
                  ii1ll1(liiIil, IIIili, IIIili && IIIili.body);
                });
              }
            }
          }
        }
      }
    }
    ["time"](iIllll, IlI = null) {
      const III1i = IlI ? new Date(IlI) : new Date();
      let ilIiIl = {
        "M+": III1i.getMonth() + 1,
        "d+": III1i.getDate(),
        "H+": III1i.getHours(),
        "m+": III1i.getMinutes(),
        "s+": III1i.getSeconds(),
        "q+": Math.floor((III1i.getMonth() + 3) / 3),
        "S": III1i.getMilliseconds()
      };
      /(y+)/.test(iIllll) && (iIllll = iIllll.replace(RegExp.$1, (III1i.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let IlIIi1 in ilIiIl) new RegExp("(" + IlIIi1 + ")").test(iIllll) && (iIllll = iIllll.replace(RegExp.$1, 1 == RegExp.$1.length ? ilIiIl[IlIIi1] : ("00" + ilIiIl[IlIIi1]).substr(("" + ilIiIl[IlIIi1]).length)));
      return iIllll;
    }
    ["msg"](i1lI1l = I1Ii1i, I1llli = "", illII = "", iil1I) {
      const IlI11l = illI1 => {
        if (!illI1) return illI1;
        if ("string" == typeof illI1) return this.isLoon() ? illI1 : this.isQuanX() ? {
          "open-url": illI1
        } : this.isSurge() ? {
          "url": illI1
        } : undefined;
        if ("object" == typeof illI1) {
          {
            if (this.isLoon()) {
              {
                let llI1l1 = illI1.openUrl || illI1.url || illI1["open-url"],
                  iIi1I1 = illI1.mediaUrl || illI1["media-url"];
                return {
                  "openUrl": llI1l1,
                  "mediaUrl": iIi1I1
                };
              }
            }
            if (this.isQuanX()) {
              let Iill1l = illI1["open-url"] || illI1.url || illI1.openUrl,
                lilllI = illI1["media-url"] || illI1.mediaUrl;
              return {
                "open-url": Iill1l,
                "media-url": lilllI
              };
            }
            if (this.isSurge()) {
              {
                let l11l1i = illI1.url || illI1.openUrl || illI1["open-url"];
                return {
                  "url": l11l1i
                };
              }
            }
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(i1lI1l, I1llli, illII, IlI11l(iil1I)) : this.isQuanX() && $notify(i1lI1l, I1llli, illII, IlI11l(iil1I))), !this.isMuteLog) {
        let l11l1l = ["", "==============📣系统通知📣=============="];
        l11l1l.push(i1lI1l);
        I1llli && l11l1l.push(I1llli);
        illII && l11l1l.push(illII);
        console.log(l11l1l.join("\n"));
        this.logs = this.logs.concat(l11l1l);
      }
    }
    ["log"](...il11l) {
      il11l.length > 0 && (this.logs = [...this.logs, ...il11l]);
      console.log(il11l.join(this.logSeparator));
    }
    ["logErr"](IlIlII, llil1) {
      {
        const iiIIi = !this.isSurge() && !this.isQuanX() && !this.isLoon();
        iiIIi ? this.log("", "❗️" + this.name + ", 错误!", IlIlII.stack) : this.log("", "❗️" + this.name + ", 错误!", IlIlII);
      }
    }
    ["wait"](llI1iI) {
      return new Promise(i1iI => setTimeout(i1iI, llI1iI));
    }
    ["done"](IiI1lI = {}) {
      {
        const i1i1 = new Date().getTime(),
          lillil = (i1i1 - this.startTime) / 1000;
        this.log("", "🔔" + this.name + ", 结束! 🕛 " + lillil + " 秒");
        this.log();
        (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(IiI1lI);
      }
    }
  }(I1Ii1i, iIIi1i);
}