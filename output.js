//Sat Aug 16 2025 04:41:50 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const llIiI1 = new lIllI1("联通云盘抽奖"),
  li1li1 = llIiI1.isNode() ? require("./sendNotify") : "",
  li1liI = 1,
  ii11li = 0,
  {
    v4: il1lIl
  } = require("uuid"),
  iiliIi = require("crypto"),
  i111l1 = il1lIl();
let lIl11i = process.env.chinaUnicomCookie,
  lIl11l = "",
  iiii1i = "";
ckArr = lIl11i.split("&");
iIilII("【debug】 这是你的账号数组:\n " + ckArr);
!(async () => {
  ckArr = lIl11i.split("&");
  await iIilIl();
  for (let li1Il1 = 0; li1Il1 < ckArr.length; li1Il1++) {
    let i1ii1I = li1Il1 + 1;
    console.log("------------- 开始【第 " + i1ii1I + " 个账号】-------------");
    iiii1i = ckArr[li1Il1].split("&");
    iIilII("【debug】 这是你第 " + i1ii1I + " 账号信息:\n " + iiii1i);
    await iIilIi();
    await llIiI1.wait(2000);
    if (num1 == 1) {
      console.log("当前online过期，跳过...");
      continue;
    }
    customDateString = iI1Il();
    await ilI1I();
    const iil1 = new Date(),
      iiIIiI = iil1.getDate(),
      i1liII = require("axios");
    let ilII1i = {
      "method": "GET",
      "url": "https://m.client.10010.com/mobileService/openPlatform/openPlatLineNew.htm?appName=shouting&clientid=1001000003&to_url=https://panservice.mail.wo.cn/h5/activitymobile/turn-template?activityId%3D6",
      "headers": {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 unicom{version:iphone_c@11.0800}",
        "Cookie": "PvSessionId=" + customDateString + "" + i111l1 + ";c_mobile=" + num1 + "; c_version=iphone_c@11.0800; city=036|" + cityCode + "|90063345|-99;devicedId=" + i111l1 + "; ecs_token=" + ecs_token + ";t3_token=" + t3_token + ""
      },
      "maxRedirects": 0
    };
    await i1liII.request(ilII1i).catch(IIiIi => {
      wenb = IIiIi.request.res.rawHeaders[13];
      ticket1 = wenb.match(/ticket=([^&]+)/);
      ticket = ticket1[1];
    });
    let ill1I = {
      "method": "GET",
      "url": "https://epay.10010.com/woauth2/login?response_type=web_token&source=app_sjyyt&union_session_id&device_digest_token_id&target_client_id=7cb46449-3b11-4414-bb49-cbd15525fb88&position=null&redirect_url=https://epay.10010.com/ci-mcss-party-web/clockIn/?bizFrom%3D225&bizChannelCode=225",
      "headers": {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 unicom{version:iphone_c@11.0800}",
        "Cookie": "WOAUTH2_SESSIONID=NTNmMGQzZTYtODRmZS00NDliLWI3MTMtYWM5YjRkMGM5OWVm",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-CN,zh-Hans;q=0.9"
      },
      "maxRedirects": 0
    };
    await i1liII.request(ill1I).catch(iiIIil => {
      wenb = iiIIil.request.res.rawHeaders[5];
      rptid1 = wenb.match(/rptid=([^&]+)/);
      rptid = rptid1[1];
    });
    await llIiI1.wait(2000);
    console.log("" + num1 + "抽奖");
    await llIiI1.wait(1000);
    req = Math.floor(89999 * Math.random()) + 100000;
    sjc13 = Math.round(new Date().getTime()).toString();
    const ilII1l = "HandheldHallAutoLogin" + sjc13 + "" + req + "100002",
      IIilII = iiliIi.createHash("md5");
    IIilII.update(ilII1l);
    md5Hash = IIilII.digest("hex");
    await iiii1l();
    const l1Iil1 = require("request"),
      IIiIl = JSON.stringify({
        "input": "1",
        "platform": 3,
        "modelId": 1,
        "tag": 0,
        "history": []
      }),
      iiiiI1 = {
        "method": "POST",
        "url": "https://panservice.mail.wo.cn/wohome/ai/assistant/query",
        "headers": {
          "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 unicom{version:iphone_c@12.0400};ltst;OSVersion/16.6",
          "Accept": "text/event-stream",
          "Content-Type": "application/json",
          "X-YP-Access-Token": token,
          "Sec-Fetch-Site": "same-origin",
          "Accept-Language": "zh-CN,zh-Hans;q=0.9",
          "X-YP-App-Version": "",
          "Sec-Fetch-Mode": "cors",
          "Origin": "https://panservice.mail.wo.cn",
          "X-YP-Client-Id": "1001000003",
          "Sec-Fetch-Dest": "empty"
        },
        "body": IIiIl
      };
    l1Iil1(iiiiI1, function (iiIIii, i1liIi, i1liIl) {
      {
        if (iiIIii) throw new Error(iiIIii);
        const IIl1II = JSON.stringify({
            "activityId": "MjQ=",
            "id": ypid
          }),
          iill = {
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
              "X-YP-Access-Token": token,
              "Sec-Fetch-Site": "same-origin",
              "token": token,
              "X-YP-Client-Id": "1001000165",
              "Accept-Language": "zh-CN,zh-Hans;q=0.9",
              "X-SH-Access-Token": "",
              "source-type": "woapi"
            },
            "body": IIl1II
          };
        l1Iil1(iill, function (I11lil, Ili1li, lIlIil) {
          {
            if (I11lil) throw new Error(I11lil);
          }
        });
        const iiIIl1 = JSON.stringify({
            "activityId": "MjQ=",
            "id": ypid
          }),
          llIi1I = {
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
              "X-YP-Access-Token": token,
              "Sec-Fetch-Site": "same-origin",
              "token": token,
              "X-YP-Client-Id": "1001000165",
              "Accept-Language": "zh-CN,zh-Hans;q=0.9",
              "X-SH-Access-Token": "",
              "source-type": "woapi"
            },
            "body": iiIIl1
          };
        l1Iil1(llIi1I, function (l1Iili, IIi11l, l1Iill) {
          if (l1Iili) throw new Error(l1Iili);
        });
        const lIlIii = JSON.stringify({
            "activityId": "MjQ=",
            "id": ypid
          }),
          li1Ili = {
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
              "X-YP-Access-Token": token,
              "Sec-Fetch-Site": "same-origin",
              "token": token,
              "X-YP-Client-Id": "1001000165",
              "Accept-Language": "zh-CN,zh-Hans;q=0.9",
              "X-SH-Access-Token": "",
              "source-type": "woapi"
            },
            "body": lIlIii
          };
        l1Iil1(li1Ili, function (iiiiIi, iiiiIl, IIi11i) {
          if (iiiiIi) throw new Error(iiiiIi);
        });
      }
    });
    console.log("等待DeepSeek响应，10s后抽奖");
    await llIiI1.wait(20000);
    await lI11I();
  }
  await ii11ll(lIl11l);
})().catch(iiIIli => llIiI1.logErr(iiIIli)).finally(() => llIiI1.done());
async function iiii1l() {
  let IIl1Ii = {
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
    ilIIl = await lIil11(IIl1Ii, "token");
  token = ilIIl.RSP.DATA.token;
  console.log(token);
}
async function lI11I() {
  let Ili1lI = {
      "url": "https://panservice.mail.wo.cn/activity/lottery",
      "headers": {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 unicom{version:iphone_c@12.0400};ltst;OSVersion/16.6",
        "Accept": "application/json, text/plain, */*",
        "source-type": "woapi",
        "Sec-Fetch-Site": "same-origin",
        "clientId": "1001000165",
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        "token": token,
        "X-SH-Access-Token": "",
        "Sec-Fetch-Mode": "cors",
        "X-YP-Access-Token": token,
        "X-YP-Client-Id": "1001000165",
        "Sec-Fetch-Dest": "empty"
      },
      "body": "{\"activityId\": \"MjI=\"}"
    },
    lIlIl1 = await lIil11(Ili1lI, "ll");
  try {
    lIlIl1.meta.code == 92000017 ? console.log("转盘已经抽过奖了") : (qgid = lIlIl1.result.prizeName, console.log("转盘获得：" + qgid));
  } catch (Ii11Il) {}
}
async function iIilIi() {
  let iiIIll = {
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
      "body": "deviceModel=iPhone&step=background&token_online=" + iiii1i + "&version=iphone_c%4011.0700"
    },
    I1li1l = await lIil11(iiIIll, "获取");
  try {
    t3_token = I1li1l.t3_token;
    private_token = I1li1l.private_token;
    ecs_token = I1li1l.ecs_token;
    num1 = I1li1l.list[0].num;
    cityCode = I1li1l.list[0].cityCode;
  } catch (I1li1i) {
    num1 = "1";
  }
}
async function IllI() {
  let IIi111 = {
      "url": "https://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp",
      "headers": {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko)"
      }
    },
    Ii11II = await li1llI(IIi111, "获取网络时间");
  try {
    shijian = Ii11II.data.t;
  } catch (iiI11) {}
}
async function iIilIl() {
  let ilII1 = {
      "url": "https://gitee.com/kele2233/genxin/raw/master/ydid.json",
      "headers": {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.43(0x18002b2d) NetType/WIFI Language/zh_CN"
      }
    },
    lIlIll = await li1llI(ilII1, "ll");
  hqsjc = lIlIll.ymsjc;
  gong = lIlIll.gong;
  ypid = lIlIll.ypid;
  dqsjc = Math.round(new Date().getTime() / 1000).toString();
  hqsjc > dqsjc ? console.log("公告：" + lIlIll.gh) : (console.error(gong), process.exit());
}
async function ilI1I() {
  let liIiiI = {
      "url": "https://activity.10010.com/sixPalaceGridTurntableLottery/signin/daySign",
      "headers": {
        "Accept": "application/json, text/plain, */*",
        "Accept-Encoding": "gzip, deflate, br",
        "Cookie": "PvSessionId=" + customDateString + "" + i111l1 + ";c_mobile=" + num1 + "; c_version=iphone_c@11.0800; city=036|" + cityCode + "|90063345|-99;devicedId=" + i111l1 + "; ecs_token=" + ecs_token + ";t3_token=" + t3_token + "",
        "Content-Type": "application/x-www-form-urlencoded",
        "Host": "activity.10010.com",
        "Connection": "keep-alive",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 unicom{version:iphone_c@11.0700}",
        "Referer": "https://img.client.10010.com/",
        "Accept-Language": "zh-CN,zh-Hans;q=0.9"
      },
      "body": "shareCl=&shareCode="
    },
    l11Iii = await lIil11(liIiiI, "签到");
  if (l11Iii.code == "0000") console.log("签到成功获得" + l11Iii.data.redSignMessage);else {
    console.log(l11Iii.desc);
  }
}
async function il1Iil(lIIl, lIl1i) {
  return new Promise(iiI111 => {
    let iIlIi1 = [];
    if (lIIl) {
      if (lIIl.indexOf("@") !== -1) lIIl.split("@").forEach(l11Ill => {
        iIlIi1.push(l11Ill);
      });else {
        if (lIIl.indexOf("\n") !== -1) {
          lIIl.split("\n").forEach(iIlIiI => {
            iIlIi1.push(iIlIiI);
          });
        } else iIlIi1.push(lIIl);
      }
      iiI111(iIlIi1);
    } else {
      console.log("\n 【" + llIiI1.name + "】：未填写变量 " + lIl1i);
    }
  });
}
async function ii11ll(l11iI) {
  if (!l11iI) return;
  if (li1liI > 0) {
    if (llIiI1.isNode()) {
      let lli1ll = require("./sendNotify");
      await lli1ll.sendNotify(llIiI1.name, l11iI);
    } else llIiI1.msg(l11iI);
  } else console.log(l11iI);
}
function il1Iii(IIiIii) {
  IIiIii = IIiIii || 32;
  let lli1li = "QWERTYUIOPASDFGHJKLZXCVBNM1234567890",
    ll1I = lli1li.length,
    Ii1lii = "";
  for (i = 0; i < IIiIii; i++) Ii1lii += lli1li.charAt(Math.floor(Math.random() * ll1I));
  return Ii1lii;
}
let lili1l = "";
function iI1iIi(lliI1) {
  lili1l = lliI1;
}
function iI1iIl(iiI11l) {
  lili1l === iiI11l ? console.log("Reached mark " + iiI11l) : console.log("Invalid mark: " + iiI11l);
}
function lili1i(Il1IIi) {
  var Il1IIl = new Date(Il1IIi * 1000);
  var Ii1liI = Il1IIl.getFullYear();
  var l11il = String(Il1IIl.getMonth() + 1).padStart(2, "0");
  var liIil1 = String(Il1IIl.getDate()).padStart(2, "0");
  var lli1lI = String(Il1IIl.getHours()).padStart(2, "0");
  var liIilI = String(Il1IIl.getMinutes()).padStart(2, "0");
  var Ii1li1 = String(Il1IIl.getSeconds()).padStart(2, "0");
  var iiil1 = Ii1liI + "-" + l11il + "-" + liIil1 + " " + lli1lI + ":" + liIilI + ":" + Ii1li1;
  return iiil1;
}
function iI1Ii(I1i1, iiiii) {
  return Math.round(Math.random() * (iiiii - I1i1) + I1i1);
}
function IiIIIl() {
  const I1II1l = new Date(),
    lli1ii = I1II1l.getHours(),
    I1II1i = new Date(I1II1l.getFullYear(), I1II1l.getMonth(), I1II1l.getDate(), lli1ii + 1, 0, 0, 0);
  return I1II1i.getTime();
}
function IiIIIi() {
  const ll1l = new Date(),
    ll1i = ll1l.getMinutes(),
    lliII = new Date(ll1l.getFullYear(), ll1l.getMonth(), ll1l.getDate(), ll1l.getHours(), ll1i === 0 ? 1 : ll1i + 1, 0, 0);
  lliII.getMinutes() === 0 && lliII.getHours() !== ll1l.getHours() && lliII.setDate(ll1l.getDate() + (lliII.getHours() === 0 ? 1 : 0));
  return lliII.getTime();
}
function lI11l() {
  return Math.round(new Date().getTime()).toString();
}
function iI1Il() {
  const I1il = new Date(),
    I1Iiil = String(I1il.getFullYear()).padStart(4, "0"),
    I1Iiii = String(I1il.getMonth() + 1).padStart(2, "0"),
    lIIliI = String(I1il.getDate()).padStart(2, "0"),
    IiI111 = String(I1il.getHours()).padStart(2, "0"),
    i11llI = String(I1il.getMinutes()).padStart(2, "0"),
    iIIi1 = String(I1il.getSeconds()).slice(0, 2);
  return I1Iiil + I1Iiii + lIIliI + IiI111 + i11llI + iIIi1;
}
function i111il() {
  return Math.round(new Date().getTime() / 1000).toString();
}
function i111ii() {
  let iIl111 = new Date();
  h = iIl111.getHours();
  return h;
}
function lI11i() {
  let i11lil = new Date();
  m = i11lil.getMinutes();
  return m;
}
function ilI11(iilI1I = 3000) {
  return new Promise(iIl11I => {
    {
      let Il11I1 = {
        "url": "https://keai.icu/apiwyy/api"
      };
      llIiI1.get(Il11I1, async (i11liI, iilI11, lIiiiI) => {
        try {
          lIiiiI = JSON.parse(lIiiiI);
          console.log("\n 【网抑云时间】: " + lIiiiI.content + "  by--" + lIiiiI.music);
        } catch (IlIiii) {
          llIiI1.logErr(IlIiii, iilI11);
        } finally {
          iIl11I();
        }
      }, iilI1I);
    }
  });
}
async function li1llI(lll1lI, lliliI, ll1iiI = 3000) {
  return new Promise(lll1l1 => {
    {
      let lIIlli = lll1lI;
      if (!lliliI) {
        {
          let iilI1i = arguments.callee.toString(),
            IiIlI1 = /function\s*(\w*)/i,
            iilI1l = IiIlI1.exec(iilI1i);
          lliliI = iilI1l[1];
        }
      }
      if (ii11li) {
        console.log("\n 【debug】=============== 这是 " + lliliI + " 请求 url ===============");
        console.log(lIIlli);
      }
      llIiI1.get(lIIlli, async (iIllII, lli1I, IlIilI) => {
        try {
          {
            ii11li && (console.log("\n\n 【debug】===============这是 " + lliliI + " 返回data=============="), console.log(IlIilI), console.log("======"), console.log(JSON.parse(IlIilI)));
            let lIIllI = JSON.parse(IlIilI);
            lll1l1(lIIllI);
          }
        } catch (lIIll1) {
          console.log(iIllII, lli1I);
        } finally {
          lll1l1();
        }
      }, ll1iiI);
    }
  });
}
async function lIil11(I1Iil1, lll1iI, iIllI1 = 200) {
  return new Promise(iI111 => {
    let iI1i1i = I1Iil1;
    if (!lll1iI) {
      let il1liI = arguments.callee.toString(),
        IiiiII = /function\s*(\w*)/i,
        llilll = IiiiII.exec(il1liI);
      lll1iI = llilll[1];
    }
    ii11li && (console.log("\n 【debug】=============== 这是 " + lll1iI + " 请求 url ==============="), console.log(iI1i1i));
    llIiI1.post(iI1i1i, async (ll1ill, l1liI, llilli) => {
      try {
        ii11li && (console.log("\n\n 【debug】===============这是 " + lll1iI + " 返回data=============="), console.log(llilli), console.log("======"), console.log(JSON.parse(llilli)));
        let l111ii = JSON.parse(llilli);
        iI111(l111ii);
      } catch (i1III1) {} finally {
        iI111();
      }
    }, iIllI1);
  });
}
function iIilII(...l1ii1i) {
  if (ii11li) {
    console.log(...l1ii1i);
  }
}
function lIlI1(IiIIi1) {
  function l1liI1(I1IiII, Ili11) {
    return I1IiII << Ili11 | I1IiII >>> 32 - Ili11;
  }
  function I11Iii(iiIi1, il1iii) {
    var lII11l, ilillI, iIIiII, IIi1i1, I1IiI1;
    iIIiII = 2147483648 & iiIi1;
    IIi1i1 = 2147483648 & il1iii;
    lII11l = 1073741824 & iiIi1;
    ilillI = 1073741824 & il1iii;
    I1IiI1 = (1073741823 & iiIi1) + (1073741823 & il1iii);
    return lII11l & ilillI ? 2147483648 ^ I1IiI1 ^ iIIiII ^ IIi1i1 : lII11l | ilillI ? 1073741824 & I1IiI1 ? 3221225472 ^ I1IiI1 ^ iIIiII ^ IIi1i1 : 1073741824 ^ I1IiI1 ^ iIIiII ^ IIi1i1 : I1IiI1 ^ iIIiII ^ IIi1i1;
  }
  function I1iiI(IlIl1i, IIIi11, I1I) {
    return IlIl1i & IIIi11 | ~IlIl1i & I1I;
  }
  function l111l1(liIi1I, il1ill, il1ili) {
    return liIi1I & il1ili | il1ill & ~il1ili;
  }
  function l1ll1(lI1i1, lII11i, I1li1) {
    return lI1i1 ^ lII11i ^ I1li1;
  }
  function llill1(Il11i1, ill1lI, Ili1l) {
    return ill1lI ^ (Il11i1 | ~Ili1l);
  }
  function Iill1(ililiI, i1iIl, i1iIi, I1i, lll1i, lll1l, I1l) {
    ililiI = I11Iii(ililiI, I11Iii(I11Iii(I1iiI(i1iIl, i1iIi, I1i), lll1i), I1l));
    return I11Iii(l1liI1(ililiI, lll1l), i1iIl);
  }
  function ll1il1(Ili1i, ii1111, il1ilI, lII11I, ii111I, iilIi, ill1li) {
    Ili1i = I11Iii(Ili1i, I11Iii(I11Iii(l111l1(ii1111, il1ilI, lII11I), ii111I), ill1li));
    return I11Iii(l1liI1(Ili1i, iilIi), ii1111);
  }
  function illi1I(ililii, il1il1, iilIl, lII111, I1liI, ill1ll, Il11iI) {
    ililii = I11Iii(ililii, I11Iii(I11Iii(l1ll1(il1il1, iilIl, lII111), I1liI), Il11iI));
    return I11Iii(l1liI1(ililii, ill1ll), il1il1);
  }
  function i1IIIi(liIi1i, IlIIII, lii1iI, lll1Il, lI1l1, lll1Ii, iilI1) {
    liIi1i = I11Iii(liIi1i, I11Iii(I11Iii(llill1(IlIIII, lii1iI, lll1Il), lI1l1), iilI1));
    return I11Iii(l1liI1(liIi1i, lll1Ii), IlIIII);
  }
  function i1IIIl(il1Il) {
    for (var lll1II, il1I11 = il1Il.length, lli11I = il1I11 + 8, ii1lI1 = (lli11I - lli11I % 64) / 64, ii11i = 16 * (ii1lI1 + 1), lIIlIl = new Array(ii11i - 1), lIIlIi = 0, ililli = 0; il1I11 > ililli;) lll1II = (ililli - ililli % 4) / 4, lIIlIi = ililli % 4 * 8, lIIlIl[lll1II] = lIIlIl[lll1II] | il1Il.charCodeAt(ililli) << lIIlIi, ililli++;
    lll1II = (ililli - ililli % 4) / 4;
    lIIlIi = ililli % 4 * 8;
    lIIlIl[lll1II] = lIIlIl[lll1II] | 128 << lIIlIi;
    lIIlIl[ii11i - 2] = il1I11 << 3;
    lIIlIl[ii11i - 1] = il1I11 >>> 29;
    return lIIlIl;
  }
  function illi11(ii11l) {
    {
      var iIIiIi,
        ililll,
        il1Ii = "",
        iIIiIl = "";
      for (ililll = 0; 3 >= ililll; ililll++) iIIiIi = ii11l >>> 8 * ililll & 255, iIIiIl = "0" + iIIiIi.toString(16), il1Ii += iIIiIl.substr(iIIiIl.length - 2, 2);
      return il1Ii;
    }
  }
  function li111l(lI1ll) {
    {
      lI1ll = lI1ll.replace(/\r\n/g, "\n");
      for (var I1IiIl = "", I1IiIi = 0; I1IiIi < lI1ll.length; I1IiIi++) {
        {
          var ii11I = lI1ll.charCodeAt(I1IiIi);
          128 > ii11I ? I1IiIl += String.fromCharCode(ii11I) : ii11I > 127 && 2048 > ii11I ? (I1IiIl += String.fromCharCode(ii11I >> 6 | 192), I1IiIl += String.fromCharCode(63 & ii11I | 128)) : (I1IiIl += String.fromCharCode(ii11I >> 12 | 224), I1IiIl += String.fromCharCode(ii11I >> 6 & 63 | 128), I1IiIl += String.fromCharCode(63 & ii11I | 128));
        }
      }
      return I1IiIl;
    }
  }
  var l111lI,
    il1lil,
    I1iil,
    iiliii,
    I1iii,
    li111i,
    ll1ilI,
    I1ilI,
    iilii1,
    llilil = [],
    il1lii = 7,
    illi1i = 12,
    lll1ll = 17,
    illi1l = 22,
    l1llI = 5,
    llilii = 9,
    lll1li = 14,
    l1ii1l = 20,
    l111ll = 4,
    l1liIi = 11,
    I11Ii1 = 16,
    l1liIl = 23,
    l111li = 6,
    Il1ll = 10,
    Iilil = 15,
    Iilii = 21;
  for (IiIIi1 = li111l(IiIIi1), llilil = i1IIIl(IiIIi1), li111i = 1732584193, ll1ilI = 4023233417, I1ilI = 2562383102, iilii1 = 271733878, l111lI = 0; l111lI < llilil.length; l111lI += 16) il1lil = li111i, I1iil = ll1ilI, iiliii = I1ilI, I1iii = iilii1, li111i = Iill1(li111i, ll1ilI, I1ilI, iilii1, llilil[l111lI + 0], il1lii, 3614090360), iilii1 = Iill1(iilii1, li111i, ll1ilI, I1ilI, llilil[l111lI + 1], illi1i, 3905402710), I1ilI = Iill1(I1ilI, iilii1, li111i, ll1ilI, llilil[l111lI + 2], lll1ll, 606105819), ll1ilI = Iill1(ll1ilI, I1ilI, iilii1, li111i, llilil[l111lI + 3], illi1l, 3250441966), li111i = Iill1(li111i, ll1ilI, I1ilI, iilii1, llilil[l111lI + 4], il1lii, 4118548399), iilii1 = Iill1(iilii1, li111i, ll1ilI, I1ilI, llilil[l111lI + 5], illi1i, 1200080426), I1ilI = Iill1(I1ilI, iilii1, li111i, ll1ilI, llilil[l111lI + 6], lll1ll, 2821735955), ll1ilI = Iill1(ll1ilI, I1ilI, iilii1, li111i, llilil[l111lI + 7], illi1l, 4249261313), li111i = Iill1(li111i, ll1ilI, I1ilI, iilii1, llilil[l111lI + 8], il1lii, 1770035416), iilii1 = Iill1(iilii1, li111i, ll1ilI, I1ilI, llilil[l111lI + 9], illi1i, 2336552879), I1ilI = Iill1(I1ilI, iilii1, li111i, ll1ilI, llilil[l111lI + 10], lll1ll, 4294925233), ll1ilI = Iill1(ll1ilI, I1ilI, iilii1, li111i, llilil[l111lI + 11], illi1l, 2304563134), li111i = Iill1(li111i, ll1ilI, I1ilI, iilii1, llilil[l111lI + 12], il1lii, 1804603682), iilii1 = Iill1(iilii1, li111i, ll1ilI, I1ilI, llilil[l111lI + 13], illi1i, 4254626195), I1ilI = Iill1(I1ilI, iilii1, li111i, ll1ilI, llilil[l111lI + 14], lll1ll, 2792965006), ll1ilI = Iill1(ll1ilI, I1ilI, iilii1, li111i, llilil[l111lI + 15], illi1l, 1236535329), li111i = ll1il1(li111i, ll1ilI, I1ilI, iilii1, llilil[l111lI + 1], l1llI, 4129170786), iilii1 = ll1il1(iilii1, li111i, ll1ilI, I1ilI, llilil[l111lI + 6], llilii, 3225465664), I1ilI = ll1il1(I1ilI, iilii1, li111i, ll1ilI, llilil[l111lI + 11], lll1li, 643717713), ll1ilI = ll1il1(ll1ilI, I1ilI, iilii1, li111i, llilil[l111lI + 0], l1ii1l, 3921069994), li111i = ll1il1(li111i, ll1ilI, I1ilI, iilii1, llilil[l111lI + 5], l1llI, 3593408605), iilii1 = ll1il1(iilii1, li111i, ll1ilI, I1ilI, llilil[l111lI + 10], llilii, 38016083), I1ilI = ll1il1(I1ilI, iilii1, li111i, ll1ilI, llilil[l111lI + 15], lll1li, 3634488961), ll1ilI = ll1il1(ll1ilI, I1ilI, iilii1, li111i, llilil[l111lI + 4], l1ii1l, 3889429448), li111i = ll1il1(li111i, ll1ilI, I1ilI, iilii1, llilil[l111lI + 9], l1llI, 568446438), iilii1 = ll1il1(iilii1, li111i, ll1ilI, I1ilI, llilil[l111lI + 14], llilii, 3275163606), I1ilI = ll1il1(I1ilI, iilii1, li111i, ll1ilI, llilil[l111lI + 3], lll1li, 4107603335), ll1ilI = ll1il1(ll1ilI, I1ilI, iilii1, li111i, llilil[l111lI + 8], l1ii1l, 1163531501), li111i = ll1il1(li111i, ll1ilI, I1ilI, iilii1, llilil[l111lI + 13], l1llI, 2850285829), iilii1 = ll1il1(iilii1, li111i, ll1ilI, I1ilI, llilil[l111lI + 2], llilii, 4243563512), I1ilI = ll1il1(I1ilI, iilii1, li111i, ll1ilI, llilil[l111lI + 7], lll1li, 1735328473), ll1ilI = ll1il1(ll1ilI, I1ilI, iilii1, li111i, llilil[l111lI + 12], l1ii1l, 2368359562), li111i = illi1I(li111i, ll1ilI, I1ilI, iilii1, llilil[l111lI + 5], l111ll, 4294588738), iilii1 = illi1I(iilii1, li111i, ll1ilI, I1ilI, llilil[l111lI + 8], l1liIi, 2272392833), I1ilI = illi1I(I1ilI, iilii1, li111i, ll1ilI, llilil[l111lI + 11], I11Ii1, 1839030562), ll1ilI = illi1I(ll1ilI, I1ilI, iilii1, li111i, llilil[l111lI + 14], l1liIl, 4259657740), li111i = illi1I(li111i, ll1ilI, I1ilI, iilii1, llilil[l111lI + 1], l111ll, 2763975236), iilii1 = illi1I(iilii1, li111i, ll1ilI, I1ilI, llilil[l111lI + 4], l1liIi, 1272893353), I1ilI = illi1I(I1ilI, iilii1, li111i, ll1ilI, llilil[l111lI + 7], I11Ii1, 4139469664), ll1ilI = illi1I(ll1ilI, I1ilI, iilii1, li111i, llilil[l111lI + 10], l1liIl, 3200236656), li111i = illi1I(li111i, ll1ilI, I1ilI, iilii1, llilil[l111lI + 13], l111ll, 681279174), iilii1 = illi1I(iilii1, li111i, ll1ilI, I1ilI, llilil[l111lI + 0], l1liIi, 3936430074), I1ilI = illi1I(I1ilI, iilii1, li111i, ll1ilI, llilil[l111lI + 3], I11Ii1, 3572445317), ll1ilI = illi1I(ll1ilI, I1ilI, iilii1, li111i, llilil[l111lI + 6], l1liIl, 76029189), li111i = illi1I(li111i, ll1ilI, I1ilI, iilii1, llilil[l111lI + 9], l111ll, 3654602809), iilii1 = illi1I(iilii1, li111i, ll1ilI, I1ilI, llilil[l111lI + 12], l1liIi, 3873151461), I1ilI = illi1I(I1ilI, iilii1, li111i, ll1ilI, llilil[l111lI + 15], I11Ii1, 530742520), ll1ilI = illi1I(ll1ilI, I1ilI, iilii1, li111i, llilil[l111lI + 2], l1liIl, 3299628645), li111i = i1IIIi(li111i, ll1ilI, I1ilI, iilii1, llilil[l111lI + 0], l111li, 4096336452), iilii1 = i1IIIi(iilii1, li111i, ll1ilI, I1ilI, llilil[l111lI + 7], Il1ll, 1126891415), I1ilI = i1IIIi(I1ilI, iilii1, li111i, ll1ilI, llilil[l111lI + 14], Iilil, 2878612391), ll1ilI = i1IIIi(ll1ilI, I1ilI, iilii1, li111i, llilil[l111lI + 5], Iilii, 4237533241), li111i = i1IIIi(li111i, ll1ilI, I1ilI, iilii1, llilil[l111lI + 12], l111li, 1700485571), iilii1 = i1IIIi(iilii1, li111i, ll1ilI, I1ilI, llilil[l111lI + 3], Il1ll, 2399980690), I1ilI = i1IIIi(I1ilI, iilii1, li111i, ll1ilI, llilil[l111lI + 10], Iilil, 4293915773), ll1ilI = i1IIIi(ll1ilI, I1ilI, iilii1, li111i, llilil[l111lI + 1], Iilii, 2240044497), li111i = i1IIIi(li111i, ll1ilI, I1ilI, iilii1, llilil[l111lI + 8], l111li, 1873313359), iilii1 = i1IIIi(iilii1, li111i, ll1ilI, I1ilI, llilil[l111lI + 15], Il1ll, 4264355552), I1ilI = i1IIIi(I1ilI, iilii1, li111i, ll1ilI, llilil[l111lI + 6], Iilil, 2734768916), ll1ilI = i1IIIi(ll1ilI, I1ilI, iilii1, li111i, llilil[l111lI + 13], Iilii, 1309151649), li111i = i1IIIi(li111i, ll1ilI, I1ilI, iilii1, llilil[l111lI + 4], l111li, 4149444226), iilii1 = i1IIIi(iilii1, li111i, ll1ilI, I1ilI, llilil[l111lI + 11], Il1ll, 3174756917), I1ilI = i1IIIi(I1ilI, iilii1, li111i, ll1ilI, llilil[l111lI + 2], Iilil, 718787259), ll1ilI = i1IIIi(ll1ilI, I1ilI, iilii1, li111i, llilil[l111lI + 9], Iilii, 3951481745), li111i = I11Iii(li111i, il1lil), ll1ilI = I11Iii(ll1ilI, I1iil), I1ilI = I11Iii(I1ilI, iiliii), iilii1 = I11Iii(iilii1, I1iii);
  var I1il1 = illi11(li111i) + illi11(ll1ilI) + illi11(I1ilI) + illi11(iilii1);
  return I1il1.toLowerCase();
}
function lIllI1(I1lli, lii1lI) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class lliIi1 {
    constructor(IlliI1) {
      this.env = IlliI1;
    }
    ["send"](iI1l1l, ill1i1 = "GET") {
      iI1l1l = "string" == typeof iI1l1l ? {
        "url": iI1l1l
      } : iI1l1l;
      let Iiiii1 = this.get;
      "POST" === ill1i1 && (Iiiii1 = this.post);
      return new Promise((il1ii1, IIII1) => {
        Iiiii1.call(this, iI1l1l, (iIi1, I11IIl, Il11lI) => {
          iIi1 ? IIII1(iIi1) : il1ii1(I11IIl);
        });
      });
    }
    ["get"](ill1iI) {
      return this.send.call(this.env, ill1iI);
    }
    ["post"](Il11ll) {
      return this.send.call(this.env, Il11ll, "POST");
    }
  }
  return new class {
    constructor(Il11li, i1lIi1) {
      this.name = Il11li;
      this.http = new lliIi1(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, i1lIi1);
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
    ["toObj"](iIi1li, l11I11 = null) {
      try {
        return JSON.parse(iIi1li);
      } catch {
        return l11I11;
      }
    }
    ["toStr"](ii1II, IIIIl = null) {
      try {
        return JSON.stringify(ii1II);
      } catch {
        return IIIIl;
      }
    }
    ["getjson"](liili1, IIIIi) {
      let iIii = IIIIi;
      const Iiliii = this.getdata(liili1);
      if (Iiliii) try {
        iIii = JSON.parse(this.getdata(liili1));
      } catch {}
      return iIii;
    }
    ["setjson"](lIlili, li1ii1) {
      try {
        return this.setdata(JSON.stringify(lIlili), li1ii1);
      } catch {
        return false;
      }
    }
    ["getScript"](I1i1li) {
      return new Promise(Il1lil => {
        this.get({
          "url": I1i1li
        }, (lIlii, lil1lI, i1lII1) => Il1lil(i1lII1));
      });
    }
    ["runScript"](lIll1, l11I1I) {
      return new Promise(Il1llI => {
        let ii1I1 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        ii1I1 = ii1I1 ? ii1I1.replace(/\n/g, "").trim() : ii1I1;
        let liiliI = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        liiliI = liiliI ? 1 * liiliI : 20;
        liiliI = l11I1I && l11I1I.timeout ? l11I1I.timeout : liiliI;
        const [iIi1lI, Iiliil] = ii1I1.split("@"),
          IIIII = {
            "url": "http://" + Iiliil + "/v1/scripting/evaluate",
            "body": {
              "script_text": lIll1,
              "mock_type": "cron",
              "timeout": liiliI
            },
            "headers": {
              "Accept": "*/*"
            }
          };
        this.post(IIIII, (iIiI, i1iI1I, llllIi) => Il1llI(llllIi));
      }).catch(llllIl => this.logErr(llllIl));
    }
    ["loaddata"]() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const i1lIII = this.path.resolve(this.dataFile),
          II1IIi = this.path.resolve(process.cwd(), this.dataFile),
          II1IIl = this.fs.existsSync(i1lIII),
          Il1ll1 = !II1IIl && this.fs.existsSync(II1IIi);
        if (!II1IIl && !Il1ll1) return {};
        {
          {
            const lil1li = II1IIl ? i1lIII : II1IIi;
            try {
              return JSON.parse(this.fs.readFileSync(lil1li));
            } catch (ili1i1) {
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
          const Il1lli = this.path.resolve(this.dataFile),
            l11I1i = this.path.resolve(process.cwd(), this.dataFile),
            I1i1l1 = this.fs.existsSync(Il1lli),
            ilIi11 = !I1i1l1 && this.fs.existsSync(l11I1i),
            ll1i1I = JSON.stringify(this.data);
          I1i1l1 ? this.fs.writeFileSync(Il1lli, ll1i1I) : ilIi11 ? this.fs.writeFileSync(l11I1i, ll1i1I) : this.fs.writeFileSync(Il1lli, ll1i1I);
        }
      }
    }
    ["lodash_get"](l11I1l, Iilil1, iIi1l1) {
      const llllII = Iilil1.replace(/\[(\d+)\]/g, ".$1").split(".");
      let llil1l = l11I1l;
      for (const i1iI1i of llllII) if (llil1l = Object(llil1l)[i1iI1i], undefined === llil1l) return iIi1l1;
      return llil1l;
    }
    ["lodash_set"](li1iil, i1iI1l, i1lIIi) {
      return Object(li1iil) !== li1iil ? li1iil : (Array.isArray(i1iI1l) || (i1iI1l = i1iI1l.toString().match(/[^.[\]]+/g) || []), i1iI1l.slice(0, -1).reduce((II1l1I, iiIii1, li1iii) => Object(II1l1I[iiIii1]) === II1l1I[iiIii1] ? II1l1I[iiIii1] : II1l1I[iiIii1] = Math.abs(i1iI1l[li1iii + 1]) >> 0 == +i1iI1l[li1iii + 1] ? [] : {}, li1iil)[i1iI1l[i1iI1l.length - 1]] = i1lIIi, li1iil);
    }
    ["getdata"](lil1il) {
      let I1i1ii = this.getval(lil1il);
      if (/^@/.test(lil1il)) {
        const [, ll1i1i, lil1ii] = /^@(.*?)\.(.*?)$/.exec(lil1il),
          ll1i1l = ll1i1i ? this.getval(ll1i1i) : "";
        if (ll1i1l) try {
          {
            const I1i1il = JSON.parse(ll1i1l);
            I1i1ii = I1i1il ? this.lodash_get(I1i1il, lil1ii, "") : I1i1ii;
          }
        } catch (iIi1ii) {
          I1i1ii = "";
        }
      }
      return I1i1ii;
    }
    ["setdata"](i11i1l, iIlI) {
      {
        let II1l11 = false;
        if (/^@/.test(iIlI)) {
          {
            const [, llllI1, ilIi1i] = /^@(.*?)\.(.*?)$/.exec(iIlI),
              lIlll = this.getval(llllI1),
              ilIi1l = llllI1 ? "null" === lIlll ? null : lIlll || "{}" : "{}";
            try {
              {
                const lIlii1 = JSON.parse(ilIi1l);
                this.lodash_set(lIlii1, ilIi1i, i11i1l);
                II1l11 = this.setval(JSON.stringify(lIlii1), llllI1);
              }
            } catch (IIl1i) {
              {
                const lllIl1 = {};
                this.lodash_set(lllIl1, ilIi1i, i11i1l);
                II1l11 = this.setval(JSON.stringify(lllIl1), llllI1);
              }
            }
          }
        } else II1l11 = this.setval(i11i1l, iIlI);
        return II1l11;
      }
    }
    ["getval"](Illi1I) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(Illi1I) : this.isQuanX() ? $prefs.valueForKey(Illi1I) : this.isNode() ? (this.data = this.loaddata(), this.data[Illi1I]) : this.data && this.data[Illi1I] || null;
    }
    ["setval"](llii, iiIiil) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(llii, iiIiil) : this.isQuanX() ? $prefs.setValueForKey(llii, iiIiil) : this.isNode() ? (this.data = this.loaddata(), this.data[iiIiil] = llii, this.writedata(), true) : this.data && this.data[iiIiil] || null;
    }
    ["initGotEnv"](lllIlI) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      lllIlI && (lllIlI.headers = lllIlI.headers ? lllIlI.headers : {}, undefined === lllIlI.headers.Cookie && undefined === lllIlI.cookieJar && (lllIlI.cookieJar = this.ckjar));
    }
    ["get"](Illi11, i11i11 = () => {}) {
      Illi11.headers && (delete Illi11.headers["Content-Type"], delete Illi11.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (Illi11.headers = Illi11.headers || {}, Object.assign(Illi11.headers, {
        "X-Surge-Skip-Scripting": false
      })), $httpClient.get(Illi11, (IIl1I, liilll, ili1lI) => {
        !IIl1I && liilll && (liilll.body = ili1lI, liilll.statusCode = liilll.status);
        i11i11(IIl1I, liilll, ili1lI);
      })) : this.isQuanX() ? (this.isNeedRewrite && (Illi11.opts = Illi11.opts || {}, Object.assign(Illi11.opts, {
        "hints": false
      })), $task.fetch(Illi11).then(iiIilI => {
        const {
          statusCode: liiiI,
          statusCode: lllIil,
          headers: iIll,
          body: li1il1
        } = iiIilI;
        i11i11(null, {
          "status": liiiI,
          "statusCode": lllIil,
          "headers": iIll,
          "body": li1il1
        }, li1il1);
      }, lliI => i11i11(lliI))) : this.isNode() && (this.initGotEnv(Illi11), this.got(Illi11).on("redirect", (iiIil1, i1ll1I) => {
        try {
          if (iiIil1.headers["set-cookie"]) {
            const llli = iiIil1.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            llli && this.ckjar.setCookieSync(llli, null);
            i1ll1I.cookieJar = this.ckjar;
          }
        } catch (i1ll1l) {
          this.logErr(i1ll1l);
        }
      }).then(i1ll1i => {
        {
          const {
            statusCode: lllIii,
            statusCode: II1III,
            headers: i1I1i1,
            body: lIlil1
          } = i1ll1i;
          i11i11(null, {
            "status": lllIii,
            "statusCode": II1III,
            "headers": i1I1i1,
            "body": lIlil1
          }, lIlil1);
        }
      }, liill1 => {
        const {
          message: ili1ii,
          response: Il1lii
        } = liill1;
        i11i11(ili1ii, Il1lii, Il1lii && Il1lii.body);
      }));
    }
    ["post"](Iilii1, lllIi1 = () => {}) {
      {
        if (Iilii1.body && Iilii1.headers && !Iilii1.headers["Content-Type"] && (Iilii1.headers["Content-Type"] = "application/json;charset=utf-8"), Iilii1.headers && delete Iilii1.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (Iilii1.headers = Iilii1.headers || {}, Object.assign(Iilii1.headers, {
          "X-Surge-Skip-Scripting": false
        })), $httpClient.post(Iilii1, (I1Ii11, II1, l11ii1) => {
          !I1Ii11 && II1 && (II1.body = l11ii1, II1.statusCode = II1.status);
          lllIi1(I1Ii11, II1, l11ii1);
        });else {
          if (this.isQuanX()) Iilii1.method = "POST", this.isNeedRewrite && (Iilii1.opts = Iilii1.opts || {}, Object.assign(Iilii1.opts, {
            "hints": false
          })), $task.fetch(Iilii1).then(IliII => {
            {
              const {
                statusCode: I11ii,
                statusCode: i1I1il,
                headers: illll,
                body: IiI1II
              } = IliII;
              lllIi1(null, {
                "status": I11ii,
                "statusCode": i1I1il,
                "headers": illll,
                "body": IiI1II
              }, IiI1II);
            }
          }, Iii1I => lllIi1(Iii1I));else {
            if (this.isNode()) {
              this.initGotEnv(Iilii1);
              const {
                url: I11il,
                ...IIIiIi
              } = Iilii1;
              this.got.post(I11il, IIIiIi).then(IIIiIl => {
                {
                  const {
                    statusCode: IlIII1,
                    statusCode: ii1IiI,
                    headers: illl1,
                    body: l11iil
                  } = IIIiIl;
                  lllIi1(null, {
                    "status": IlIII1,
                    "statusCode": ii1IiI,
                    "headers": illl1,
                    "body": l11iil
                  }, l11iil);
                }
              }, ii1Iil => {
                const {
                  message: Iii1l,
                  response: IliIi
                } = ii1Iil;
                lllIi1(Iii1l, IliIi, IliIi && IliIi.body);
              });
            }
          }
        }
      }
    }
    ["time"](I11ll, lllIll = null) {
      {
        const ii1Iii = lllIll ? new Date(lllIll) : new Date();
        let Iii1i = {
          "M+": ii1Iii.getMonth() + 1,
          "d+": ii1Iii.getDate(),
          "H+": ii1Iii.getHours(),
          "m+": ii1Iii.getMinutes(),
          "s+": ii1Iii.getSeconds(),
          "q+": Math.floor((ii1Iii.getMonth() + 3) / 3),
          "S": ii1Iii.getMilliseconds()
        };
        /(y+)/.test(I11ll) && (I11ll = I11ll.replace(RegExp.$1, (ii1Iii.getFullYear() + "").substr(4 - RegExp.$1.length)));
        for (let lllIli in Iii1i) new RegExp("(" + lllIli + ")").test(I11ll) && (I11ll = I11ll.replace(RegExp.$1, 1 == RegExp.$1.length ? Iii1i[lllIli] : ("00" + Iii1i[lllIli]).substr(("" + Iii1i[lllIli]).length)));
        return I11ll;
      }
    }
    ["msg"](illil = I1lli, l11il1 = "", lII1II = "", I11li) {
      const li1I11 = lIlI11 => {
        {
          if (!lIlI11) return lIlI11;
          if ("string" == typeof lIlI11) return this.isLoon() ? lIlI11 : this.isQuanX() ? {
            "open-url": lIlI11
          } : this.isSurge() ? {
            "url": lIlI11
          } : undefined;
          if ("object" == typeof lIlI11) {
            {
              if (this.isLoon()) {
                {
                  let iiIlI = lIlI11.openUrl || lIlI11.url || lIlI11["open-url"],
                    ii1IlI = lIlI11.mediaUrl || lIlI11["media-url"];
                  return {
                    "openUrl": iiIlI,
                    "mediaUrl": ii1IlI
                  };
                }
              }
              if (this.isQuanX()) {
                {
                  let lIlI1l = lIlI11["open-url"] || lIlI11.url || lIlI11.openUrl,
                    ii1Ili = lIlI11["media-url"] || lIlI11.mediaUrl;
                  return {
                    "open-url": lIlI1l,
                    "media-url": ii1Ili
                  };
                }
              }
              if (this.isSurge()) {
                let iI1I11 = lIlI11.url || lIlI11.openUrl || lIlI11["open-url"];
                return {
                  "url": iI1I11
                };
              }
            }
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(illil, l11il1, lII1II, li1I11(I11li)) : this.isQuanX() && $notify(illil, l11il1, lII1II, li1I11(I11li))), !this.isMuteLog) {
        {
          let I1111 = ["", "==============📣系统通知📣=============="];
          I1111.push(illil);
          l11il1 && I1111.push(l11il1);
          lII1II && I1111.push(lII1II);
          console.log(I1111.join("\n"));
          this.logs = this.logs.concat(I1111);
        }
      }
    }
    ["log"](...i1Ii) {
      i1Ii.length > 0 && (this.logs = [...this.logs, ...i1Ii]);
      console.log(i1Ii.join(this.logSeparator));
    }
    ["logErr"](i1Il, llilI) {
      {
        const I11I1I = !this.isSurge() && !this.isQuanX() && !this.isLoon();
        I11I1I ? this.log("", "❗️" + this.name + ", 错误!", i1Il.stack) : this.log("", "❗️" + this.name + ", 错误!", i1Il);
      }
    }
    ["wait"](l1111i) {
      return new Promise(il1IIi => setTimeout(il1IIi, l1111i));
    }
    ["done"](i1II = {}) {
      {
        const il1l1I = new Date().getTime(),
          i1Ili1 = (il1l1I - this.startTime) / 1000;
        this.log("", "🔔" + this.name + ", 结束! 🕛 " + i1Ili1 + " 秒");
        this.log();
        (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(i1II);
      }
    }
  }(I1lli, lii1lI);
}