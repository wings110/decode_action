//Fri Sep 27 2024 12:26:07 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x3e1312 = _0x2789ba("中国联通"),
  _0x4e24a5 = require("got"),
  _0x52496c = require("path"),
  {
    exec: _0x4d15c0
  } = require("child_process"),
  _0x307ddd = require("crypto-js"),
  {
    CookieJar: _0x3246e2
  } = require("tough-cookie"),
  _0x19393a = "chinaUnicom",
  _0x10a922 = ["\n", "&", "@"],
  _0x1a7186 = [_0x19393a + "Cookie"],
  _0x2f06b3 = 50000,
  _0x2835b5 = 3;
const _0x4b6355 = 2.02,
  _0x457280 = "chinaUnicom",
  _0x3bc3bb = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/code.json",
  _0x2a4579 = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/" + _0x457280 + ".json",
  _0x764025 = "iphone_c@11.0503",
  _0x2e8a17 = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 unicom{version:" + _0x764025 + "}",
  _0x35de04 = 5,
  _0x5b5cf5 = 13,
  _0x5ac497 = 1000,
  _0x724f47 = 3600000,
  _0xabc7b0 = 100,
  _0x5db209 = "d82ac3821b50e6f05f6c684d27d252a584517c685da7130a2bd27361afb4f2e300ab1ecc5a701b4d2d4df69e795299dc08c2c5a1129381372a65a1a9a397eb16cec3c3cc0179f01df450042f3469658331cec050c7d5c50b121dc28b3f31ece6",
  _0x5235c1 = "73b138fd-250c-4126-94e2-48cbcc8b9cbe",
  _0x71b721 = "10000002",
  _0x3e8f56 = "7k1HcDL8RKvc",
  _0x21d549 = "update!@#1234567",
  _0x4d4ea7 = "16-Bytes--String",
  _0x101e0d = "225",
  _0x407eb8 = "225",
  _0x131010 = "party",
  _0x493453 = "6-WfVldfFrt3zhjHhe6kzwI-XfG5aMCzRTLI_4K7_a0",
  _0x24d203 = "1",
  _0x121727 = "wocareMBHServiceLife1",
  _0x5e5e2f = "beea1c7edf7c4989b2d3621c4255132f",
  _0x5b6506 = "f4cd4ffeb5554586acf65ba7110534f5",
  _0x41c68b = "0123456789",
  _0x5c7029 = "qwertyuiopasdfghjklzxcvbnm",
  _0x4ff555 = process.env[_0x19393a + "Uuid"] || _0x3e1312.randomUuid(),
  _0x504c82 = [9, 10, 11, 12, 13],
  _0x661f15 = 1000,
  _0x7a8f53 = 5000,
  _0x406709 = "1001000003",
  _0x32347e = "100002",
  _0x39f9bc = "";
let _0x28d704 = [],
  _0x1463d8 = [],
  _0x59c839 = [],
  _0x41936c = null,
  _0x2e0fe1 = [6640, 6641];
const _0x2dc62c = 7,
  _0x4f7b3d = 5,
  _0x3e8901 = 5,
  _0x487c2d = {
    name: "星座配对",
    id: 2
  };
const _0x3256f3 = {
  name: "大转盘",
  id: 3
};
const _0x296782 = {
  name: "盲盒抽奖",
  id: 4
};
const _0x218f1f = [_0x487c2d, _0x3256f3, _0x296782];
function _0xf4e9ae(_0x33a30f, _0x1f520b, _0x1e1306, _0x4ee730, _0x4814a7, _0x3f1f13) {
  return _0x307ddd[_0x33a30f].encrypt(_0x307ddd.enc.Utf8.parse(_0x4ee730), _0x307ddd.enc.Utf8.parse(_0x4814a7), {
    mode: _0x307ddd.mode[_0x1f520b],
    padding: _0x307ddd.pad[_0x1e1306],
    iv: _0x307ddd.enc.Utf8.parse(_0x3f1f13)
  }).ciphertext.toString(_0x307ddd.enc.Hex);
}
function _0x21ca46(_0x58ecb1, _0xbac185, _0x56df56, _0x10a796, _0xea2971, _0x39a3c2) {
  return _0x307ddd[_0x58ecb1].decrypt({
    ciphertext: _0x307ddd.enc.Hex.parse(_0x10a796)
  }, _0x307ddd.enc.Utf8.parse(_0xea2971), {
    mode: _0x307ddd.mode[_0xbac185],
    padding: _0x307ddd.pad[_0x56df56],
    iv: _0x307ddd.enc.Utf8.parse(_0x39a3c2)
  }).toString(_0x307ddd.enc.Utf8);
}
let _0x3b25d0 = 0,
  _0xcb1e7e = 0;
function _0x4c6d5b() {
  _0xcb1e7e = 1;
  const _0x2aef76 = _0x52496c.basename(process.argv[1]),
    _0x205b52 = ["bash", "timeout", "grep"];
  let _0x56f2b4 = ["ps afx"];
  _0x56f2b4.push("grep " + _0x2aef76);
  _0x56f2b4 = _0x56f2b4.concat(_0x205b52.map(_0x16bbb5 => "grep -v \"" + _0x16bbb5 + " \""));
  _0x56f2b4.push("wc -l");
  const _0x4f4b91 = _0x56f2b4.join("|"),
    _0xfcad45 = () => {
      _0x4d15c0(_0x4f4b91, (_0xd8e78c, _0x46b903, _0x3051ca) => {
        if (_0xd8e78c || _0x3051ca) {
          return;
        }
        _0x3b25d0 = parseInt(_0x46b903.trim(), 10);
      });
      setTimeout(_0xfcad45, 1000);
    };
  _0xfcad45();
}
class _0x5b3993 {
  constructor() {
    this.index = _0x3e1312.userIdx++;
    this.name = "";
    this.valid = false;
    const _0x23472d = {
      limit: 0
    };
    const _0x2e2766 = {
      Connection: "keep-alive"
    };
    const _0x3b74bf = {
      retry: _0x23472d,
      timeout: _0x2f06b3,
      followRedirect: false,
      ignoreInvalidCookies: true,
      headers: _0x2e2766
    };
    this.got = _0x4e24a5.extend(_0x3b74bf);
    if (!_0xcb1e7e) {
      _0x4c6d5b();
    }
  }
  log(_0x5ee59b, _0xa6d2d4 = {}) {
    var _0x4a616f = "",
      _0x23ade8 = _0x3e1312.userCount.toString().length;
    if (this.index) {
      _0x4a616f += "账号[" + _0x3e1312.padStr(this.index, _0x23ade8) + "]";
    }
    if (this.name) {
      _0x4a616f += "[" + this.name + "]";
    }
    _0x3e1312.log(_0x4a616f + _0x5ee59b, _0xa6d2d4);
  }
  set_cookie(_0xe1091d, _0x4fb0f2, _0x20f269, _0x5dfa24, _0x1abd2e = {}) {
    this.cookieJar.setCookieSync(_0xe1091d + "=" + _0x4fb0f2 + "; Domain=" + _0x20f269 + ";", "" + _0x5dfa24);
  }
  async request(_0x5b25da) {
    const _0x54049d = ["ECONNRESET", "EADDRINUSE", "ENOTFOUND", "EAI_AGAIN"],
      _0x35f8b1 = ["TimeoutError"],
      _0x334010 = ["EPROTO"],
      _0x44a06b = [];
    var _0x486f66 = null,
      _0xd09e4 = 0,
      _0x5db3fd = _0x5b25da.fn || _0x5b25da.url;
    let _0x4c423b = _0x3e1312.get(_0x5b25da, "valid_code", _0x44a06b);
    _0x5b25da.method = _0x5b25da?.["method"]?.["toUpperCase"]() || "GET";
    let _0x799731, _0x3b97fd;
    while (_0xd09e4 < _0x2835b5) {
      try {
        _0xd09e4++;
        _0x799731 = "";
        _0x3b97fd = "";
        let _0x10d79e = null,
          _0x18093d = _0x5b25da?.["timeout"] || this.got?.["defaults"]?.["options"]?.["timeout"]?.["request"] || _0x2f06b3,
          _0x5b20e7 = false,
          _0x5665af = Math.max(this.index - 2, 0),
          _0x30c7bf = Math.max(this.index - 3, 1),
          _0x5a5920 = _0x5665af * 500,
          _0x1bfd41 = _0x5665af * _0x30c7bf * 1000,
          _0x384b22 = (_0x3b25d0 - 1) * (_0x3b25d0 - 1) * 1000,
          _0x2b1b51 = Math.max(_0x3e1312.userCount - 2, 0) * 200,
          _0x484cb0 = _0x5a5920 + Math.floor(Math.random() * _0x1bfd41) + _0x384b22 + _0x2b1b51;
        await _0x3e1312.wait(_0x484cb0);
        await new Promise(async _0x3e4a68 => {
          setTimeout(() => {
            _0x5b20e7 = true;
            _0x3e4a68();
          }, _0x18093d);
          await this.got(_0x5b25da).then(_0xf38acb => {
            _0x486f66 = _0xf38acb;
          }, _0x1b03c7 => {
            _0x10d79e = _0x1b03c7;
            _0x486f66 = _0x1b03c7.response;
            _0x799731 = _0x10d79e?.["code"] || "";
            _0x3b97fd = _0x10d79e?.["name"] || "";
          });
          _0x3e4a68();
        });
        if (_0x5b20e7) {
          this.log("[" + _0x5db3fd + "]请求超时(" + _0x18093d / 1000 + "秒)，重试第" + _0xd09e4 + "次");
        } else {
          if (_0x334010.includes(_0x799731)) {
            this.log("[" + _0x5db3fd + "]请求错误[" + _0x799731 + "][" + _0x3b97fd + "]");
            if (_0x10d79e?.["message"]) {
              console.log(_0x10d79e.message);
            }
            break;
          } else {
            if (_0x35f8b1.includes(_0x3b97fd)) {
              this.log("[" + _0x5db3fd + "]请求错误[" + _0x799731 + "][" + _0x3b97fd + "]，重试第" + _0xd09e4 + "次");
            } else {
              if (_0x54049d.includes(_0x799731)) {
                this.log("[" + _0x5db3fd + "]请求错误[" + _0x799731 + "][" + _0x3b97fd + "]，重试第" + _0xd09e4 + "次");
              } else {
                let _0xede876 = _0x486f66?.["statusCode"] || "",
                  _0x576c61 = _0xede876 / 100 | 0;
                if (_0xede876) {
                  _0x576c61 > 3 && !_0x4c423b.includes(_0xede876) && (_0xede876 ? this.log("请求[" + _0x5db3fd + "]返回[" + _0xede876 + "]") : this.log("请求[" + _0x5db3fd + "]错误[" + _0x799731 + "][" + _0x3b97fd + "]"));
                  if (_0x576c61 <= 4) {
                    break;
                  }
                } else {
                  this.log("请求[" + _0x5db3fd + "]错误[" + _0x799731 + "][" + _0x3b97fd + "]");
                }
              }
            }
          }
        }
      } catch (_0x527f56) {
        _0x527f56.name == "TimeoutError" ? this.log("[" + _0x5db3fd + "]请求超时，重试第" + _0xd09e4 + "次") : this.log("[" + _0x5db3fd + "]请求错误(" + _0x527f56.message + ")，重试第" + _0xd09e4 + "次");
      }
    }
    if (_0x486f66 == null) {
      return Promise.resolve({
        statusCode: _0x799731 || -1,
        headers: null,
        result: null
      });
    }
    let {
      statusCode: _0x196450,
      headers: _0x17ef8f,
      body: _0x5128cc
    } = _0x486f66;
    if (_0x5128cc) {
      try {
        _0x5128cc = JSON.parse(_0x5128cc);
      } catch {}
    }
    const _0x3454c8 = {
      statusCode: _0x196450,
      headers: _0x17ef8f,
      result: _0x5128cc
    };
    return Promise.resolve(_0x3454c8);
  }
}
let _0x27cdee = _0x5b3993;
try {
  let _0x5e3365 = require("./LocalBasic");
  _0x27cdee = _0x5e3365;
} catch {}
let _0x14fb67 = new _0x27cdee(_0x3e1312);
class _0x44f102 extends _0x27cdee {
  constructor(_0x1ecaae) {
    super(_0x3e1312);
    this.cookieJar = new _0x3246e2();
    const _0x1e6dfb = {
      "User-Agent": _0x2e8a17
    };
    this.got = this.got.extend({
      cookieJar: this.cookieJar,
      headers: _0x1e6dfb
    });
    let _0x599dd4 = _0x1ecaae.split("#");
    this.token_online = _0x599dd4[0];
    this.unicomTokenId = _0x3e1312.randomString(32);
    this.tokenId_cookie = "chinaunicom-" + _0x3e1312.randomString(32, _0x41c68b + _0x5c7029).toUpperCase();
    this.rptId = "";
    this.city = [];
    this.t_flmf_task = 0;
    this.t_woread_draw = 0;
    this.need_read_rabbit = false;
    this.moonbox_task_record = {};
    this.moonbox_notified = [];
    this.set_cookie("TOKENID_COOKIE", this.tokenId_cookie);
    this.set_cookie("UNICOM_TOKENID", this.unicomTokenId);
    this.set_cookie("sdkuuid", this.unicomTokenId);
  }
  set_cookie(_0x32001d, _0x5e2715, _0x4baa94 = {}) {
    let _0x5c32be = _0x4baa94?.["domain"] || "10010.com",
      _0x5e8e75 = _0x4baa94?.["currentUrl"] || "https://epay.10010.com";
    super.set_cookie(_0x32001d, _0x5e2715, _0x5c32be, _0x5e8e75, _0x4baa94);
  }
  get_bizchannelinfo() {
    const _0x1ceafa = {
      bizChannelCode: _0x407eb8,
      disriBiz: _0x131010,
      unionSessionId: "",
      stType: "",
      stDesmobile: "",
      source: "",
      rptId: this.rptId,
      ticket: "",
      tongdunTokenId: this.tokenId_cookie,
      xindunTokenId: this.sdkuuid
    };
    let _0x5494ae = JSON.stringify(_0x1ceafa);
    return _0x5494ae;
  }
  get_epay_authinfo() {
    const _0x13f066 = {
      mobile: "",
      sessionId: this.sessionId,
      tokenId: this.tokenId,
      userId: ""
    };
    return JSON.stringify(_0x13f066);
  }
  get_flmf_data(_0x29d1a2 = "welfareCenter") {
    const _0x459ff7 = {
      sid: this.flmf_sid,
      actcode: _0x29d1a2
    };
    return _0x459ff7;
  }
  encode_woread(_0x406da7) {
    let _0x2d1802 = _0xf4e9ae("AES", "CBC", "Pkcs7", JSON.stringify(_0x406da7), _0x21d549, _0x4d4ea7);
    return Buffer.from(_0x2d1802, "utf-8").toString("base64");
  }
  get_woread_param() {
    return {
      timestamp: _0x3e1312.time("yyyyMMddhhmmss"),
      token: this.woread_token,
      userid: this.woread_userid,
      userId: this.woread_userid,
      userIndex: this.woread_userIndex,
      userAccount: this.mobile,
      verifyCode: this.woread_verifycode
    };
  }
  get_ltyp_sign_header(_0x9e1eaa) {
    let _0x51741b = Date.now(),
      _0x449f19 = Math.floor(89999 * Math.random()) + 100000,
      _0x5aa2f8 = _0x32347e,
      _0x4b8379 = _0x39f9bc,
      _0x3964b1 = _0x307ddd.MD5(_0x9e1eaa + _0x51741b + _0x449f19 + _0x5aa2f8 + _0x4b8379).toString();
    const _0x5c8f8c = {
      key: _0x9e1eaa,
      resTime: _0x51741b,
      reqSeq: _0x449f19,
      channel: _0x5aa2f8,
      version: _0x4b8379,
      sign: _0x3964b1
    };
    return _0x5c8f8c;
  }
  async onLine(_0x27b01a = {}) {
    let _0x3d5b64 = false;
    try {
      let _0x1c7d5e = {
          fn: "onLine",
          method: "post",
          url: "https://m.client.10010.com/mobileService/onLine.htm",
          form: {
            token_online: this.token_online,
            reqtime: _0x3e1312.time("yyyy-MM-dd hh:mm:ss"),
            appId: _0x5db209,
            version: _0x764025,
            step: "bindlist",
            isFirstInstall: 0,
            deviceModel: "iPhone"
          }
        },
        {
          result: _0x26363f,
          statusCode: _0x14d2d9
        } = await this.request(_0x1c7d5e),
        _0x3b24b2 = _0x3e1312.get(_0x26363f, "code", _0x14d2d9);
      _0x3b24b2 == 0 ? (_0x3d5b64 = true, this.valid = true, this.mobile = _0x26363f?.["desmobile"], this.name = _0x26363f?.["desmobile"], this.ecs_token = _0x26363f?.["ecs_token"], this.city = _0x26363f?.["list"], this.log("登录成功")) : (this.valid = false, this.log("登录失败[" + _0x3b24b2 + "]"));
    } catch (_0x44503c) {
      console.log(_0x44503c);
    } finally {
      return _0x3d5b64;
    }
  }
  async openPlatLineNew(_0x2a222b, _0x3e7a71 = {}) {
    const _0xb8b09b = {
      ticket: "",
      type: "",
      loc: ""
    };
    let _0x496d88 = _0xb8b09b;
    try {
      const _0x6806fd = {
        to_url: _0x2a222b
      };
      const _0x500910 = {
        fn: "openPlatLineNew",
        method: "get",
        url: "https://m.client.10010.com/mobileService/openPlatform/openPlatLineNew.htm",
        searchParams: _0x6806fd
      };
      let {
        headers: _0x2000fa,
        statusCode: _0x394e52
      } = await this.request(_0x500910);
      if (_0x2000fa?.["location"]) {
        let _0xf99a5f = new URL(_0x2000fa.location),
          _0x568f13 = _0xf99a5f.searchParams.get("type") || "02",
          _0xfd1429 = _0xf99a5f.searchParams.get("ticket");
        !_0xfd1429 && this.log("获取ticket失败");
        const _0x14b38f = {
          loc: _0x2000fa.location,
          ticket: _0xfd1429,
          type: _0x568f13
        };
        _0x496d88 = _0x14b38f;
      } else {
        this.log("获取ticket失败[" + _0x394e52 + "]");
      }
    } catch (_0x5e0e93) {
      console.log(_0x5e0e93);
    } finally {
      return _0x496d88;
    }
  }
  async gettaskip(_0x1cd878 = {}) {
    let _0x4ed36e = _0x3e1312.randomString(32).toUpperCase();
    try {
      const _0x5e0985 = {
        mobile: this.mobile,
        orderId: _0x4ed36e
      };
      const _0x20fc42 = {
        fn: "gettaskip",
        method: "post",
        url: "https://m.client.10010.com/taskcallback/topstories/gettaskip",
        form: _0x5e0985
      };
      await this.request(_0x20fc42);
    } catch (_0x3c7289) {
      console.log(_0x3c7289);
    } finally {
      return _0x4ed36e;
    }
  }
  async draw_28_queryChance(_0x4304ea = {}) {
    try {
      const _0x57e07a = {
        fn: "draw_28_queryChance",
        method: "post",
        url: "https://m.client.10010.com/AppMonthly/appMonth/queryChance"
      };
      let {
          result: _0x6d67b,
          statusCode: _0x1c1ba9
        } = await this.request(_0x57e07a),
        _0x3b3977 = _0x3e1312.get(_0x6d67b, "status", _0x1c1ba9);
      if (_0x3b3977 == "0000") {
        let _0x429017 = parseInt(_0x6d67b?.["data"]?.["allRemainTimes"] || 0),
          _0x52f4b7 = Math.min(_0x3e8901, _0x429017);
        this.log("28日五折日可以抽奖" + _0x429017 + "次, 去抽" + _0x52f4b7 + "次");
        let _0x3de93e = false;
        while (_0x52f4b7-- > 0) {
          if (_0x3de93e) {
            await _0x3e1312.wait(8000);
          }
          _0x3de93e = true;
          await this.draw_28_lottery();
        }
      } else {
        let _0x3d51c5 = _0x6d67b?.["message"] || _0x6d67b?.["msg"] || "";
        this.log("28日五折日查询抽奖次数失败[" + _0x3b3977 + "]: " + _0x3d51c5);
      }
    } catch (_0x314281) {
      console.log(_0x314281);
    }
  }
  async draw_28_lottery(_0x5aab94 = {}) {
    try {
      const _0x201675 = {
        fn: "draw_28_lottery",
        method: "post",
        url: "https://m.client.10010.com/AppMonthly/appMonth/lottery"
      };
      let {
          result: _0x99c0cb,
          statusCode: _0x3c9f3d
        } = await this.request(_0x201675),
        _0x2f6bca = _0x3e1312.get(_0x99c0cb, "status", _0x3c9f3d);
      if (_0x2f6bca == "0000") {
        let _0x175423 = _0x3e1312.get(_0x99c0cb?.["data"], "code", -1);
        if (_0x99c0cb?.["data"]?.["uuid"]) {
          await _0x3e1312.wait(2000);
          await this.draw_28_winningRecord(_0x99c0cb.data.uuid);
        } else {
          let _0x4aa7f2 = _0x99c0cb?.["data"]?.["message"] || _0x99c0cb?.["data"]?.["msg"] || "";
          this.log("28日五折日抽奖失败[" + _0x175423 + "]: " + _0x4aa7f2);
        }
      } else {
        let _0xdd1fa9 = _0x99c0cb?.["message"] || _0x99c0cb?.["msg"] || "";
        this.log("28日五折日抽奖失败[" + _0x2f6bca + "]: " + _0xdd1fa9);
      }
    } catch (_0x21e468) {
      console.log(_0x21e468);
    }
  }
  async draw_28_winningRecord(_0x54c9f8, _0x40b7de = {}) {
    try {
      const _0x2eddde = {
        requestId: _0x54c9f8
      };
      const _0x2f2a85 = {
        fn: "draw_28_winningRecord",
        method: "post",
        url: "https://m.client.10010.com/AppMonthly/appMonth/winningRecord",
        form: _0x2eddde
      };
      let {
          result: _0x53a19f,
          statusCode: _0x5ae178
        } = await this.request(_0x2f2a85),
        _0x1bf352 = _0x3e1312.get(_0x53a19f, "status", _0x5ae178);
      if (_0x1bf352 == "0000") {
        let _0x90924b = _0x3e1312.get(_0x53a19f?.["data"], "code", -1);
        if (_0x90924b == "0000") {
          const _0x792adc = {
            notify: true
          };
          this.log("28日五折日抽奖: " + _0x53a19f?.["data"]?.["prizeName"]?.["replace"](/\t/g, ""), _0x792adc);
        } else {
          let _0x15297d = _0x53a19f?.["data"]?.["message"] || _0x53a19f?.["data"]?.["msg"] || "";
          this.log("查询28日五折日抽奖结果失败[" + _0x90924b + "]: " + _0x15297d);
        }
      } else {
        let _0x919c9e = _0x53a19f?.["message"] || _0x53a19f?.["msg"] || "";
        this.log("查询28日五折日抽奖结果失败[" + _0x1bf352 + "]: " + _0x919c9e);
      }
    } catch (_0x47c7bb) {
      console.log(_0x47c7bb);
    }
  }
  async ttlxj_authorize(_0x55af8b, _0x4722fc, _0x17a5b0, _0x20607d = {}) {
    try {
      let _0x2d07e5 = {
          fn: "ttlxj_authorize",
          method: "post",
          url: "https://epay.10010.com/woauth2/v2/authorize",
          headers: {
            Origin: "https://epay.10010.com",
            Referer: _0x17a5b0
          },
          json: {
            response_type: "rptid",
            client_id: _0x5235c1,
            redirect_uri: "https://epay.10010.com/ci-mps-st-web/",
            login_hint: {
              credential_type: "st_ticket",
              credential: _0x55af8b,
              st_type: _0x4722fc,
              force_logout: true,
              source: "app_sjyyt"
            },
            device_info: {
              token_id: "chinaunicom-pro-" + Date.now() + "-" + _0x3e1312.randomString(13),
              trace_id: _0x3e1312.randomString(32)
            }
          }
        },
        {
          result: _0x289d84
        } = await this.request(_0x2d07e5),
        _0x10a63d = _0x3e1312.get(_0x289d84, "status", -1);
      if (_0x10a63d == 200) {
        await this.ttlxj_authCheck();
      } else {
        let _0x7b574f = _0x289d84?.["message"] || _0x289d84?.["msg"] || "";
        this.log("天天领现金获取SESSION失败[" + _0x10a63d + "]: " + _0x7b574f);
      }
    } catch (_0xdce2c8) {
      console.log(_0xdce2c8);
    }
  }
  async ttlxj_authCheck(_0xeac03f = {}) {
    try {
      let _0x14af31 = {
          fn: "ttlxj_authCheck",
          method: "post",
          url: "https://epay.10010.com/ps-pafs-auth-front/v1/auth/check",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo()
          }
        },
        {
          result: _0x4e401f
        } = await this.request(_0x14af31),
        _0x457294 = _0x3e1312.get(_0x4e401f, "code", -1);
      if (_0x457294 == "0000") {
        let {
          mobile: _0x326eb2,
          sessionId: _0x4655d6,
          tokenId: _0x3c21b1,
          userId: _0x297a9c
        } = _0x4e401f?.["data"]?.["authInfo"];
        const _0x4cb7c0 = {
          sessionId: _0x4655d6,
          tokenId: _0x3c21b1,
          userId: _0x297a9c
        };
        Object.assign(this, _0x4cb7c0);
        await this.ttlxj_userDrawInfo();
        await this.ttlxj_queryAvailable();
      } else {
        if (_0x457294 == "2101000100") {
          let _0x47acd1 = _0x4e401f?.["data"]?.["woauth_login_url"];
          await this.ttlxj_login(_0x47acd1);
        } else {
          let _0x46ea2f = _0x4e401f?.["msgInside"] || _0x4e401f?.["msg"] || "";
          this.log("天天领现金获取tokenId失败[" + _0x457294 + "]: " + _0x46ea2f);
        }
      }
    } catch (_0x64d365) {
      console.log(_0x64d365);
    }
  }
  async ttlxj_login(_0x4ee85a, _0x23284c = {}) {
    try {
      _0x4ee85a += "https://epay.10010.com/ci-mcss-party-web/clockIn/?bizFrom=" + _0x101e0d + "&bizChannelCode=" + _0x407eb8;
      const _0x5b5fd9 = {
        fn: "ttlxj_login",
        method: "get",
        url: _0x4ee85a
      };
      let {
        headers: _0x52cb6b,
        statusCode: _0x40a700
      } = await this.request(_0x5b5fd9);
      if (_0x52cb6b?.["location"]) {
        let _0x5eacd2 = new URL(_0x52cb6b.location);
        this.rptId = _0x5eacd2.searchParams.get("rptid");
        this.rptId ? await this.ttlxj_authCheck() : this.log("天天领现金获取rptid失败");
      } else {
        this.log("天天领现金获取rptid失败[" + _0x40a700 + "]");
      }
    } catch (_0x28aec5) {
      console.log(_0x28aec5);
    }
  }
  async ttlxj_userDrawInfo(_0x403ae2 = {}) {
    try {
      let _0x506e38 = {
          fn: "ttlxj_userDrawInfo",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/ttlxj/userDrawInfo",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          }
        },
        {
          result: _0x344719
        } = await this.request(_0x506e38),
        _0x420091 = _0x3e1312.get(_0x344719, "code", -1);
      if (_0x420091 == "0000") {
        let _0x1c8b2a = _0x344719?.["data"]?.["dayOfWeek"],
          _0x11f779 = "day" + _0x1c8b2a,
          _0x346168 = _0x344719?.["data"]?.[_0x11f779] == "1";
        const _0x4c3e01 = {
          notify: true
        };
        this.log("天天领现金今天" + (_0x346168 ? "未" : "已") + "打卡", _0x4c3e01);
        if (_0x346168) {
          let _0x23fde1 = new Date().getDay();
          _0x23fde1 % 7 == 0 ? await this.ttlxj_unifyDrawNew("C") : await this.ttlxj_unifyDrawNew("B");
        }
      } else {
        let _0x274e19 = _0x344719?.["msg"] || "";
        this.log("天天领现金查询失败[" + _0x420091 + "]: " + _0x274e19);
      }
    } catch (_0x82e91f) {
      console.log(_0x82e91f);
    }
  }
  async ttlxj_unifyDrawNew(_0x56aef6, _0x33e2b4 = {}) {
    try {
      let _0x1121fd = {
          fn: "ttlxj_unifyDrawNew",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/ttlxj/unifyDrawNew",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          },
          form: {
            drawType: _0x56aef6,
            bizFrom: _0x101e0d,
            activityId: "TTLXJ20210330"
          }
        },
        {
          result: _0x18dc1f
        } = await this.request(_0x1121fd),
        _0x32ebea = _0x3e1312.get(_0x18dc1f, "code", -1);
      if (_0x32ebea == "0000" && _0x18dc1f?.["data"]?.["returnCode"] == 0) {
        let _0xc78380 = _0x18dc1f?.["data"]?.["awardTipContent"]?.["replace"](/xx/, _0x18dc1f?.["data"]?.["amount"]);
        const _0x21470f = {
          notify: true
        };
        this.log("天天领现金打卡:" + _0xc78380, _0x21470f);
      } else {
        let _0x78ed8b = _0x18dc1f?.["data"]?.["returnMsg"] || _0x18dc1f?.["msg"] || "";
        this.log("天天领现金打卡失败[" + (_0x18dc1f?.["data"]?.["returnCode"] || _0x32ebea) + "]: " + _0x78ed8b);
      }
    } catch (_0x4b4af4) {
      console.log(_0x4b4af4);
    }
  }
  async ttlxj_h(_0x535e44 = {}) {
    try {
      let _0x2e2a95 = {
        fn: "ttlxj_h",
        method: "post",
        url: "https://epay.10010.com/ci-mcss-party-front/v1/ttlxj/help",
        headers: {
          bizchannelinfo: this.get_bizchannelinfo(),
          authinfo: this.get_epay_authinfo()
        },
        form: {
          bizFrom: _0x101e0d,
          activityId: "TTLXJ20210330",
          uid: _0x493453
        }
      };
      await this.request(_0x2e2a95);
    } catch (_0x4f896f) {
      console.log(_0x4f896f);
    }
  }
  async ttlxj_queryAvailable(_0x165233 = {}) {
    try {
      let _0x4b5e00 = {
          fn: "ttlxj_queryAvailable",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/ttlxj/queryAvailable",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          }
        },
        {
          result: _0x188bba
        } = await this.request(_0x4b5e00),
        _0x1a9b74 = _0x3e1312.get(_0x188bba, "code", -1);
      if (_0x1a9b74 == "0000" && _0x188bba?.["data"]?.["returnCode"] == 0) {
        let _0x2c3f11 = _0x188bba?.["data"]?.["availableAmount"] || 0;
        const _0x3a50b6 = {
          notify: true
        };
        this.log("可用立减金: " + (_0x2c3f11 / 100).toFixed(2) + "元", _0x3a50b6);
        let _0x441836 = [],
          _0x552fa5 = Date.now();
        for (let _0x11b65b of _0x188bba?.["data"]?.["prizeList"]?.["filter"](_0x2a2873 => _0x2a2873.status == "A")) {
          let _0x572509 = _0x11b65b.endTime,
            _0x532159 = new Date(_0x572509.slice(0, 4) + "-" + _0x572509.slice(4, 6) + "-" + _0x572509.slice(6, 8) + " 00:00:00"),
            _0x30e1eb = _0x532159.getTime();
          if (_0x30e1eb - _0x552fa5 < _0x2dc62c * 24 * 60 * 60 * 1000) {
            let _0x31e231 = _0x3e1312.time("yyyy-MM-dd", _0x30e1eb);
            const _0x1ef409 = {
              timestamp: _0x30e1eb,
              date: _0x31e231,
              amount: _0x11b65b.amount
            };
            _0x441836.push(_0x1ef409);
          }
        }
        if (_0x441836.length) {
          const _0x31c5c6 = {
            timestamp: 0
          };
          let _0x39026f = _0x31c5c6,
            _0x6bf87b = _0x441836.reduce(function (_0x200a2c, _0x54440f) {
              (_0x39026f.timestamp == 0 || _0x54440f.timestamp < _0x39026f.timestamp) && (_0x39026f = _0x54440f);
              return _0x200a2c + parseFloat(_0x54440f.amount);
            }, 0);
          const _0x5b3791 = {
            notify: true
          };
          this.log(_0x2dc62c + "天内过期立减金: " + _0x6bf87b.toFixed(2) + "元", _0x5b3791);
          const _0x2a244a = {
            notify: true
          };
          this.log("最早过期立减金: " + _0x39026f.amount + "元 -- " + _0x39026f.date + "过期", _0x2a244a);
        } else {
          const _0x2e8a3f = {
            notify: true
          };
          this.log(_0x2dc62c + "天内没有过期的立减金", _0x2e8a3f);
        }
      } else {
        let _0x200fbf = _0x188bba?.["data"]?.["returnMsg"] || _0x188bba?.["msg"] || "";
        this.log("天天领现金打卡失败[" + (_0x188bba?.["data"]?.["returnCode"] || _0x1a9b74) + "]: " + _0x200fbf);
      }
    } catch (_0x29d64e) {
      console.log(_0x29d64e);
    }
  }
  async epay_28_authCheck(_0x3ead0b = {}) {
    try {
      let _0x3a5890 = {
          fn: "epay_28_authCheck",
          method: "post",
          url: "https://epay.10010.com/ps-pafs-auth-front/v1/auth/check",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo()
          }
        },
        {
          result: _0x19f9b9
        } = await this.request(_0x3a5890),
        _0x4bf3b1 = _0x3e1312.get(_0x19f9b9, "code", -1);
      if (_0x4bf3b1 == "0000") {
        let {
          mobile: _0x58dbdd,
          sessionId: _0x4357a4,
          tokenId: _0x8cfc26,
          userId: _0x39e701
        } = _0x19f9b9?.["data"]?.["authInfo"];
        const _0x10078e = {
          sessionId: _0x4357a4,
          tokenId: _0x8cfc26,
          userId: _0x39e701
        };
        Object.assign(this, _0x10078e);
        await this.epay_28_queryUserPage();
      } else {
        if (_0x4bf3b1 == "2101000100") {
          let _0x25154b = _0x19f9b9?.["data"]?.["woauth_login_url"];
          await this.epay_28_login(_0x25154b);
        } else {
          let _0x89b051 = _0x19f9b9?.["msgInside"] || _0x19f9b9?.["msg"] || "";
          this.log("联通支付日获取tokenId失败[" + _0x4bf3b1 + "]: " + _0x89b051);
        }
      }
    } catch (_0x1da8f7) {
      console.log(_0x1da8f7);
    }
  }
  async epay_28_login(_0x2b9ac5, _0x190d0b = {}) {
    try {
      let _0x500ec5 = _0x3e1312.time("yyyyMM") + "28ZFR";
      _0x2b9ac5 += "https://epay.10010.com/ci-mcss-party-web/rainbow/?templateName=" + _0x500ec5 + "&bizFrom=225&bizChannelCode=225&channelType=WDQB";
      const _0x31256c = {
        fn: "epay_28_login",
        method: "get",
        url: _0x2b9ac5
      };
      let {
        headers: _0x492f8f,
        statusCode: _0x47076b
      } = await this.request(_0x31256c);
      if (_0x492f8f?.["location"]) {
        let _0x510ba3 = new URL(_0x492f8f.location);
        this.rptId = _0x510ba3.searchParams.get("rptid");
        this.rptId ? await this.epay_28_authCheck() : this.log("联通支付日获取rptid失败");
      } else {
        this.log("联通支付日获取rptid失败[" + _0x47076b + "]");
      }
    } catch (_0x481a3b) {
      console.log(_0x481a3b);
    }
  }
  async epay_28_queryUserPage(_0x21dbeb = {}) {
    try {
      let _0x463aee = _0x3e1312.time("yyyyMM") + "28ZFR";
      const _0x1b0829 = {
        templateName: _0x463aee
      };
      let _0x4cec8f = {
          fn: "epay_28_queryUserPage",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/rainbow/queryUserPage",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          },
          form: _0x1b0829
        },
        {
          result: _0x164137
        } = await this.request(_0x4cec8f),
        _0x3e7175 = _0x3e1312.get(_0x164137, "code", -1);
      if (_0x3e7175 == "0000" && _0x164137?.["data"]?.["returnCode"] == 0) {
        for (let _0x3a7873 of _0x164137?.["data"]?.["prizeList"]?.["rainbowMouldInfos"] || []) {
          _0x3a7873?.["rainbowUnitInfos"]?.[0]?.["unitActivityId"] && (await this.epay_28_unifyDraw(_0x3a7873.rainbowUnitInfos[0]));
          if (_0x3a7873?.["day01DrawParam"]) {
            await this.epay_28_queryMiddleUnit(_0x463aee, _0x3a7873.mouldName);
            break;
          }
        }
      } else {
        let _0x5e1faa = _0x164137?.["message"] || _0x164137?.["msg"] || "";
        this.log("联通支付日进入主页失败[" + _0x3e7175 + "]: " + _0x5e1faa);
      }
    } catch (_0x100a04) {
      console.log(_0x100a04);
    }
  }
  async epay_28_queryMiddleUnit(_0x48d7df, _0x25e57c, _0x1ab5b9 = {}) {
    try {
      const _0x2c800c = {
        activityId: _0x48d7df,
        mouldName: _0x25e57c
      };
      let _0x1ffb08 = {
          fn: "epay_28_queryMiddleUnit",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/rainbow/queryMiddleUnit",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          },
          form: _0x2c800c
        },
        {
          result: _0x219f96
        } = await this.request(_0x1ffb08),
        _0x1b7cf3 = _0x3e1312.get(_0x219f96, "code", -1);
      if (_0x1b7cf3 == "0000") {
        let _0x38ccda = _0x3e1312.time("dd");
        _0x219f96?.["data"]?.[_0x38ccda] == "1" ? this.log("联通支付日今日(" + _0x38ccda + "号)已打卡") : await this.epay_28_unifyDrawNew(_0x48d7df, _0x25e57c);
      } else {
        let _0x734b99 = _0x219f96?.["message"] || _0x219f96?.["msg"] || "";
        this.log("联通支付日查询打卡失败[" + _0x1b7cf3 + "]: " + _0x734b99);
      }
    } catch (_0x5850a5) {
      console.log(_0x5850a5);
    }
  }
  async epay_28_unifyDrawNew(_0x4d22dc, _0x50dae1, _0x27e977 = {}) {
    try {
      const _0x42fc00 = {
        bizFrom: _0x101e0d,
        activityId: _0x4d22dc,
        mouldName: _0x50dae1
      };
      let _0x242ad8 = {
          fn: "epay_28_unifyDrawNew",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/rainbow/unifyDrawNew",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          },
          form: _0x42fc00
        },
        {
          result: _0x4ee6bc
        } = await this.request(_0x242ad8),
        _0x101cdb = _0x3e1312.get(_0x4ee6bc, "code", -1);
      if (_0x101cdb == "0000" && _0x4ee6bc?.["data"]?.["returnCode"] == 0) {
        let _0x269b04 = _0x4ee6bc?.["data"]?.["awardTipContent"]?.["replace"](/xx/, _0x4ee6bc?.["data"]?.["amount"]);
        const _0x158550 = {
          notify: true
        };
        this.log("联通支付日打卡:" + _0x269b04, _0x158550);
      } else {
        let _0x41eee3 = _0x4ee6bc?.["data"]?.["returnMsg"] || _0x4ee6bc?.["msg"] || "";
        this.log("联通支付日打卡失败[" + (_0x4ee6bc?.["data"]?.["returnCode"] || _0x101cdb) + "]: " + _0x41eee3);
      }
    } catch (_0x384a66) {
      console.log(_0x384a66);
    }
  }
  async epay_28_unifyDraw(_0x4d8c59, _0x14c037 = {}) {
    try {
      const _0x10d08e = {
        activityId: _0x4d8c59.unitActivityId,
        isBigActivity: _0x4d8c59.isBigActivity,
        bigActivityId: _0x4d8c59.bigActivityId,
        bizFrom: _0x101e0d
      };
      let _0x1ba8cc = {
          fn: "epay_28_unifyDraw",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/rainbow/unifyDraw",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          },
          form: _0x10d08e
        },
        {
          result: _0x31451b
        } = await this.request(_0x1ba8cc),
        _0x469172 = _0x3e1312.get(_0x31451b, "code", -1);
      if (_0x469172 == "0000" && _0x31451b?.["data"]?.["returnCode"] == 0) {
        const _0x587acf = {
          notify: true
        };
        this.log("联通支付日抽奖: " + (_0x31451b?.["data"]?.["prizeName"] || ""), _0x587acf);
      } else {
        let _0x591043 = _0x31451b?.["data"]?.["returnMsg"] || _0x31451b?.["msg"] || "";
        this.log("联通支付日抽奖失败[" + (_0x31451b?.["data"]?.["returnCode"] || _0x469172) + "]: " + _0x591043);
      }
    } catch (_0x5b60f4) {
      console.log(_0x5b60f4);
    }
  }
  async appMonth_28_bind(_0x2dc6a2, _0x4b6a90 = {}) {
    try {
      const _0x90893f = {
        fn: "appMonth_28_bind",
        method: "post",
        url: "https://activity.10010.com/AppMonthly/appMonth/bind",
        form: {},
        valid_code: [401]
      };
      _0x90893f.form.shareCode = _0x2dc6a2;
      _0x90893f.form.cl = "WeChat";
      let {
        result: _0x3e0d24
      } = await this.request(_0x90893f);
    } catch (_0xfe8c75) {
      console.log(_0xfe8c75);
    }
  }
  async appMonth_28_queryChance(_0x1ba4cf = {}) {
    try {
      const _0x47fc8d = {
        fn: "appMonth_28_queryChance",
        method: "post",
        url: "https://activity.10010.com/AppMonthly/appMonth/queryChance"
      };
      let {
          result: _0xd0e335
        } = await this.request(_0x47fc8d),
        _0x14f589 = _0x3e1312.get(_0xd0e335, "status", -1);
      if (_0x14f589 == "0000") {
        let {
          allRemainTimes: _0x57dc96,
          isUnicom: _0x5572ea
        } = _0xd0e335?.["data"];
        if (_0x5572ea) {
          let _0xc1f04f = Math.min(_0x4f7b3d, _0x57dc96);
          this.log("联通支付日可以开宝箱" + _0x57dc96 + "次, 去抽" + _0xc1f04f + "次");
          while (_0xc1f04f-- > 0) {
            await this.appMonth_28_lottery();
          }
        }
      } else {
        let _0x31a96e = _0xd0e335?.["msg"] || "";
        this.log("联通支付日查询开宝箱次数失败[" + _0x14f589 + "]: " + _0x31a96e);
      }
    } catch (_0xe0f69f) {
      console.log(_0xe0f69f);
    }
  }
  async appMonth_28_lottery(_0x2c83e8 = {}) {
    try {
      const _0x3c81a1 = {
        fn: "appMonth_28_lottery",
        method: "post",
        url: "https://activity.10010.com/AppMonthly/appMonth/lottery"
      };
      let {
          result: _0x2d643b
        } = await this.request(_0x3c81a1),
        _0x3c8618 = _0x3e1312.get(_0x2d643b, "status", -1);
      if (_0x3c8618 == "0000") {
        let {
          code: _0x26d9bc,
          uuid: _0x3ad6e1
        } = _0x2d643b?.["data"];
        _0x3ad6e1 ? await this.appMonth_28_winningRecord(_0x3ad6e1) : this.log("联通支付日开宝箱失败[" + _0x26d9bc + "]");
      } else {
        let _0x1034c1 = _0x2d643b?.["msg"] || "";
        this.log("联通支付日开宝箱失败[" + _0x3c8618 + "]: " + _0x1034c1);
      }
    } catch (_0x5a21e9) {
      console.log(_0x5a21e9);
    }
  }
  async appMonth_28_winningRecord(_0x93868f, _0x30e467 = {}) {
    try {
      const _0x2aa54b = {
        requestId: _0x93868f
      };
      const _0x429121 = {
        fn: "appMonth_28_winningRecord",
        method: "post",
        url: "https://activity.10010.com/AppMonthly/appMonth/winningRecord",
        form: _0x2aa54b
      };
      let {
          result: _0x116f2c
        } = await this.request(_0x429121),
        _0x29520b = _0x3e1312.get(_0x116f2c, "status", -1);
      if (_0x29520b == "0000") {
        let {
          code: _0x5cf4ac,
          prizeName: _0xe36a9
        } = _0x116f2c?.["data"];
        if (_0x5cf4ac == "0000") {
          const _0x18262d = {
            notify: true
          };
          this.log("联通支付日开宝箱: " + _0xe36a9, _0x18262d);
        } else {
          let _0x1743b9 = _0x116f2c?.["data"]?.["message"] || "";
          this.log("联通支付日开宝箱[" + _0x5cf4ac + "]: " + _0x1743b9);
        }
      } else {
        let _0x2e67d4 = _0x116f2c?.["msg"] || "";
        this.log("联通支付日查询中奖奖品错误[" + _0x29520b + "]: " + _0x2e67d4);
      }
    } catch (_0x5dcb8d) {
      console.log(_0x5dcb8d);
    }
  }
  async sign_getContinuous(_0x4660e4 = {}) {
    try {
      const _0x596092 = {
        taskId: "",
        channel: "shouye",
        imei: ""
      };
      const _0x51865c = {
        fn: "sign_getContinuous",
        method: "post",
        url: "https://act.10010.com/SigninApp/signin/getContinuous",
        form: _0x596092
      };
      let {
          result: _0x2fad79
        } = await this.request(_0x51865c),
        _0xd3cef3 = _0x3e1312.get(_0x2fad79, "status", -1);
      if (_0xd3cef3 == "0000") {
        let _0x4cf670 = _0x2fad79?.["data"]?.["todaySigned"] || 0;
        const _0x2e1322 = {
          notify: true
        };
        this.log("签到区今天" + (_0x4cf670 == "1" ? "未" : "已") + "签到", _0x2e1322);
        _0x4cf670 == "1" && (await _0x3e1312.wait(1000), await this.sign_daySign());
      } else {
        let _0x412c6d = _0x2fad79?.["msg"] || "";
        this.log("签到区查询签到状态失败[" + _0xd3cef3 + "]: " + _0x412c6d);
      }
    } catch (_0xa71e7c) {
      console.log(_0xa71e7c);
    }
  }
  async sign_daySign(_0x20bd21 = {}) {
    try {
      const _0x1cea22 = {
        shareCl: "",
        shareCode: ""
      };
      const _0x4859b8 = {
        fn: "sign_daySign",
        method: "post",
        url: "https://act.10010.com/SigninApp/signin/daySign",
        form: _0x1cea22
      };
      let {
          result: _0x6a9e7c
        } = await this.request(_0x4859b8),
        _0x56865f = _0x3e1312.get(_0x6a9e7c, "status", -1);
      if (_0x56865f == "0000") {
        let {
          prizeName: _0xee19fa,
          redSignMessage: _0x17d34c
        } = _0x6a9e7c?.["data"];
        const _0xa97d0f = {
          notify: true
        };
        this.log("签到区签到成功: [" + _0xee19fa + "]" + _0x17d34c, _0xa97d0f);
      } else {
        let _0x5c21cc = _0x6a9e7c?.["msg"] || "";
        this.log("签到区签到失败[" + _0x56865f + "]: " + _0x5c21cc);
      }
    } catch (_0x205a15) {
      console.log(_0x205a15);
    }
  }
  async sign_queryBubbleTask(_0x1cac26 = {}) {
    try {
      const _0x4b5a3f = {
        fn: "sign_queryBubbleTask",
        method: "post",
        url: "https://act.10010.com/SigninApp/bubbleTask/queryBubbleTask"
      };
      let {
          result: _0x395424
        } = await this.request(_0x4b5a3f),
        _0x4706c2 = _0x3e1312.get(_0x395424, "status", -1);
      if (_0x4706c2 == "0000") {
        for (let _0x48422a of _0x395424?.["data"]?.["paramsList"]?.["filter"](_0x20e236 => _0x20e236.taskState == 1)) {
          let _0x214d1e = await this.gettaskip();
          await this.sign_doTask(_0x48422a, _0x214d1e);
        }
      } else {
        let _0x3346b0 = _0x395424?.["msg"] || "";
        this.log("签到区查询气泡任务失败[" + _0x4706c2 + "]: " + _0x3346b0);
      }
    } catch (_0x5309c7) {
      console.log(_0x5309c7);
    }
  }
  async sign_doTask(_0x2157ff, _0x3bd2dd, _0x1b4266 = {}) {
    try {
      const _0x1dc7db = {
        fn: "sign_doTask",
        method: "post",
        url: "https://act.10010.com/SigninApp/task/doTask",
        form: {}
      };
      _0x1dc7db.form.id = _0x2157ff.id;
      _0x1dc7db.form.orderId = _0x3bd2dd;
      _0x1dc7db.form.imei = "BB97982E-3F03-46D3-B904-819D626DF478";
      _0x1dc7db.form.prizeType = _0x2157ff.rewardType;
      _0x1dc7db.form.positionFlag = 0;
      let {
          result: _0x133ef2
        } = await this.request(_0x1dc7db),
        _0x1da93e = _0x3e1312.get(_0x133ef2, "status", -1);
      if (_0x1da93e == "0000") {
        this.log("完成任务[" + _0x2157ff.actName + "]获得: " + _0x133ef2?.["data"]?.["prizeCount"] + _0x133ef2?.["data"]?.["prizeName"]);
      } else {
        let _0x52b552 = _0x133ef2?.["msg"] || "";
        this.log("完成任务[" + _0x2157ff.actName + "]失败[" + _0x1da93e + "]: " + _0x52b552);
      }
    } catch (_0x22918c) {
      console.log(_0x22918c);
    }
  }
  async game_login(_0x4f5f18, _0x5eb64d = {}) {
    try {
      const _0x5873da = {
        fn: "game_login",
        method: "post",
        url: "https://game.wostore.cn/api/app//user/v2/login",
        headers: {},
        json: {}
      };
      _0x5873da.headers.channelid = "GAMELTAPP_90005";
      _0x5873da.json.identityType = "esToken";
      _0x5873da.json.code = this.ecs_token;
      _0x5873da.json.ticket = _0x4f5f18;
      _0x5873da.json.uuid = _0x4ff555;
      let {
          result: _0x1ba390
        } = await this.request(_0x5873da),
        _0x7a06e = _0x3e1312.get(_0x1ba390, "code", -1);
      if (_0x7a06e == 200) {
        this.game_token = _0x1ba390?.["data"]?.["access_token"];
        this.got = this.got.extend({
          headers: {
            Authorization: this.game_token
          }
        });
        await this.game_getMemberInfo();
        await this.game_signRecord();
        await this.game_lottery();
        await this.game_playSave();
        await this.game_taskList();
        await this.game_getMemberInfo();
        const _0x4ecc73 = {
          notify: true
        };
        this.log("联通畅游币: " + this.point, _0x4ecc73);
      } else {
        let _0x28245b = _0x1ba390?.["msg"] || "";
        this.log("联通畅游登录失败[" + _0x7a06e + "]: " + _0x28245b);
      }
    } catch (_0x4a1318) {
      console.log(_0x4a1318);
    }
  }
  async game_getMemberInfo(_0x102d44 = {}) {
    try {
      const _0x2feb90 = {
        fn: "game_getMemberInfo",
        method: "get",
        url: "https://game.wostore.cn/api/app/user/v2/getMemberInfo"
      };
      let {
          result: _0x434c25
        } = await this.request(_0x2feb90),
        _0x1d51f8 = _0x3e1312.get(_0x434c25, "code", -1);
      if (_0x1d51f8 == 200) {
        this.point = _0x434c25?.["data"]?.["userIntegral"];
      } else {
        let _0xf5c112 = _0x434c25?.["msg"] || "";
        this.log("联通畅游查询积分失败[" + _0x1d51f8 + "]: " + _0xf5c112);
      }
    } catch (_0x2e8106) {
      console.log(_0x2e8106);
    }
  }
  async game_signRecord(_0x1a5ecc = {}) {
    try {
      const _0x476397 = {
        fn: "game_signRecord",
        method: "get",
        url: "https://game.wostore.cn/api/app/user/v2/signRecord"
      };
      let {
          result: _0x4b4fc3
        } = await this.request(_0x476397),
        _0x3750a4 = _0x3e1312.get(_0x4b4fc3, "code", -1);
      if (_0x3750a4 == 200) {
        for (let _0xe22b68 of _0x4b4fc3?.["data"]) {
          if (_0xe22b68.now == 0) {
            continue;
          }
          this.log("联通畅游今天" + (_0xe22b68.signStatus == 2 ? "未" : "已") + "签到");
          if (_0xe22b68.signStatus == 2) {
            await this.game_signIn();
          }
        }
      } else {
        let _0x35f573 = _0x4b4fc3?.["msg"] || "";
        this.log("联通畅游查询签到失败[" + _0x3750a4 + "]: " + _0x35f573);
      }
    } catch (_0x47ae60) {
      console.log(_0x47ae60);
    }
  }
  async game_signIn(_0x183974 = {}) {
    try {
      const _0x1ac635 = {
        fn: "game_signIn",
        method: "get",
        url: "https://game.wostore.cn/api/app/user/v2/signIn"
      };
      let {
          result: _0x51a1be
        } = await this.request(_0x1ac635),
        _0x1a8b4b = _0x3e1312.get(_0x51a1be, "code", -1);
      if (_0x1a8b4b == 200) {
        this.log("联通畅游签到成功");
      } else {
        let _0x271741 = _0x51a1be?.["msg"] || "";
        this.log("联通畅游签到失败[" + _0x1a8b4b + "]: " + _0x271741);
      }
    } catch (_0x5194a6) {
      console.log(_0x5194a6);
    }
  }
  async game_checkSlider(_0x21f79f = {}) {
    let _0x4adbe1 = false;
    try {
      const _0x439909 = {
        xPos: 234
      };
      const _0x154774 = {
        fn: "game_checkSlider",
        method: "post",
        url: "https://game.wostore.cn/api/app/common/slider/checkSlider",
        searchParams: _0x439909
      };
      let {
          result: _0x1f6241
        } = await this.request(_0x154774),
        _0x2f7fa0 = _0x3e1312.get(_0x1f6241, "code", -1);
      if (_0x2f7fa0 == 200) {
        this.log("联通畅游滑块验证成功");
      } else {
        let _0x104b17 = _0x1f6241?.["msg"] || "";
        this.log("联通畅游滑块验证失败[" + _0x2f7fa0 + "]: " + _0x104b17);
      }
    } catch (_0x3306e0) {
      console.log(_0x3306e0);
    } finally {
      return _0x4adbe1;
    }
  }
  async game_lottery(_0x51be5b = {}) {
    try {
      let _0x240d56 = {
          fn: "game_lottery",
          method: "get",
          url: "https://game.wostore.cn/api/app/user/v2/benefit/lottery",
          searchParams: {
            id: _0x3e1312.get(_0x51be5b, "id", 1)
          }
        },
        {
          result: _0x289c53
        } = await this.request(_0x240d56),
        _0x11d2db = _0x3e1312.get(_0x289c53, "code", -1);
      if (_0x11d2db == 200) {
        const _0x36b5bf = {
          notify: true
        };
        this.log("联通畅游抽奖: " + _0x289c53?.["data"]?.["productName"], _0x36b5bf);
      } else {
        let _0x578e6b = _0x289c53?.["msg"] || "";
        this.log("联通畅游抽奖失败[" + _0x11d2db + "]: " + _0x578e6b);
      }
    } catch (_0x1f1fdf) {
      console.log(_0x1f1fdf);
    }
  }
  async game_taskList(_0x2432b6 = {}) {
    try {
      const _0x3fae21 = {
        fn: "game_taskList",
        method: "get",
        url: "https://game.wostore.cn/api/app/user/v2/task/list"
      };
      let {
          result: _0x28a209
        } = await this.request(_0x3fae21),
        _0x349cbb = _0x3e1312.get(_0x28a209, "code", -1);
      if (_0x349cbb == 200) {
        for (let _0x152d58 of _0x28a209?.["data"]) {
          switch (_0x152d58.receiveStatus) {
            case 0:
              break;
            case 1:
              await this.game_taskReceive(_0x152d58);
              break;
            case 2:
              break;
            default:
              _0x3e1312.log("任务[" + _0x152d58.taskName + "]未知状态[" + _0x152d58.receiveStatus + "]");
              break;
          }
        }
      } else {
        let _0x527e78 = _0x28a209?.["msg"] || "";
        this.log("联通畅游查询任务失败[" + _0x349cbb + "]: " + _0x527e78);
      }
    } catch (_0x438ee3) {
      console.log(_0x438ee3);
    }
  }
  async game_taskReceive(_0x29f5c6, _0x22464d = {}) {
    try {
      const _0x41d5c0 = {
        productId: _0x29f5c6.productId,
        taskId: _0x29f5c6.id
      };
      const _0x14babb = {
        fn: "game_taskReceive",
        method: "get",
        url: "https://game.wostore.cn/api/app/user/v2/task/receive",
        searchParams: _0x41d5c0
      };
      let {
          result: _0x34eea3
        } = await this.request(_0x14babb),
        _0x124b29 = _0x3e1312.get(_0x34eea3, "code", -1);
      if (_0x124b29 == 200) {
        this.log("领取任务[" + _0x29f5c6.taskName + "]奖励成功");
      } else {
        let _0x36becc = _0x34eea3?.["msg"] || "";
        this.log("领取任务[" + _0x29f5c6.taskName + "]奖励失败[" + _0x124b29 + "]: " + _0x36becc);
      }
    } catch (_0x484896) {
      console.log(_0x484896);
    }
  }
  async game_playSave(_0x517792 = {}) {
    try {
      let _0x690ead = {
          fn: "game_playSave",
          method: "post",
          url: "https://game.wostore.cn/api/app/user/v2/play/save",
          json: {
            cpGameId: "15000199" + _0x3e1312.randomString(2, "0123456789")
          }
        },
        {
          result: _0x453b82
        } = await this.request(_0x690ead),
        _0x9210f9 = _0x3e1312.get(_0x453b82, "code", -1);
      if (!(_0x9210f9 == 200)) {
        let _0xed4f1e = _0x453b82?.["msg"] || "";
        this.log("联通畅游玩游戏失败[" + _0x9210f9 + "]: " + _0xed4f1e);
      }
    } catch (_0x56b993) {
      console.log(_0x56b993);
    }
  }
  async flmf_login(_0x42d86f, _0x3f9578 = {}) {
    try {
      const _0x1d872d = {
        fn: "flmf_login",
        method: "get",
        url: _0x42d86f
      };
      let {
        headers: _0xb4a8e6,
        statusCode: _0x286d77
      } = await this.request(_0x1d872d);
      if (_0xb4a8e6?.["location"]) {
        let _0xfab98b = new URL(_0xb4a8e6.location);
        this.flmf_sid = _0xfab98b.searchParams.get("sid");
        this.flmf_sid ? (await this.flmf_signInInit(), await this.flmf_taskList(), await this.flmf_scanTask()) : this.log("福利魔方获取sid失败");
      } else {
        this.log("福利魔方获取sid失败[" + _0x286d77 + "]");
      }
    } catch (_0x414fd5) {
      console.log(_0x414fd5);
    }
  }
  async flmf_signInInit(_0x146625 = {}) {
    try {
      let _0x3283b3 = {
          fn: "flmf_signInInit",
          method: "post",
          url: "https://weixin.linktech.hk/lv-apiaccess/welfareCenter/signInInit",
          form: this.get_flmf_data()
        },
        {
          result: _0x5529fc
        } = await this.request(_0x3283b3),
        _0xd7b494 = _0x3e1312.get(_0x5529fc, "resultCode", -1);
      if (_0xd7b494 == "0000") {
        this.log("福利魔方今天" + (_0x5529fc?.["data"]?.["isSigned"] ? "已" : "未") + "签到, 已连续签到" + _0x5529fc?.["data"]?.["consecutiveDays"] + "天");
        if (!_0x5529fc?.["data"]?.["isSigned"]) {
          await this.flmf_signIn();
        }
      } else {
        let _0x57d4d0 = _0x5529fc?.["resultMsg"] || "";
        this.log("福利魔方查询签到失败[" + _0xd7b494 + "]: " + _0x57d4d0);
      }
    } catch (_0x3d7083) {
      console.log(_0x3d7083);
    }
  }
  async flmf_signIn(_0x458863 = {}) {
    try {
      let _0xbee1ef = {
          fn: "flmf_signIn",
          method: "post",
          url: "https://weixin.linktech.hk/lv-apiaccess/welfareCenter/signIn",
          form: this.get_flmf_data()
        },
        {
          result: _0x10713c
        } = await this.request(_0xbee1ef),
        _0xac1c4d = _0x3e1312.get(_0x10713c, "resultCode", -1);
      if (_0xac1c4d == "0000") {
        this.log("福利魔方签到成功");
      } else {
        let _0x303157 = _0x10713c?.["resultMsg"] || "";
        this.log("福利魔方签到失败[" + _0xac1c4d + "]: " + _0x303157);
      }
    } catch (_0x724474) {
      console.log(_0x724474);
    }
  }
  async flmf_taskList(_0x1754aa = {}) {
    try {
      let _0x389786 = {
          fn: "flmf_taskList",
          method: "post",
          url: "https://weixin.linktech.hk/lv-apiaccess/welfareCenter/taskList",
          form: this.get_flmf_data()
        },
        {
          result: _0x34b731
        } = await this.request(_0x389786),
        _0x1d8cb2 = _0x3e1312.get(_0x34b731, "resultCode", -1);
      if (_0x1d8cb2 == "0000") {
        for (let _0x486392 of _0x34b731?.["data"]?.["taskInfoList"]) {
          for (let _0x26a560 of _0x486392.taskInfoList.filter(_0x41d56f => !_0x41d56f.done)) {
            for (let _0x4a4a21 = _0x26a560.hascount; _0x4a4a21 < _0x26a560.count; _0x4a4a21++) {
              await this.flmf_gogLance(_0x26a560.id);
            }
          }
        }
      } else {
        let _0x3c39bf = _0x34b731?.["resultMsg"] || "";
        this.log("福利魔方查询任务失败[" + _0x1d8cb2 + "]: " + _0x3c39bf);
      }
    } catch (_0xe699e3) {
      console.log(_0xe699e3);
    }
  }
  async flmf_scanTask() {
    for (let _0x303ac2 of _0x504c82) {
      await this.flmf_gogLance(_0x303ac2);
    }
  }
  async flmf_gogLance(_0x1cbebc, _0x12d57e = {}) {
    try {
      let _0x1d6a61 = {
          fn: "flmf_gogLance",
          method: "post",
          url: "https://weixin.linktech.hk/lv-apiaccess/welfareCenter/gogLance",
          form: {
            taskId: _0x1cbebc,
            ...this.get_flmf_data()
          }
        },
        {
          result: _0xd03d0b
        } = await this.request(_0x1d6a61);
      await _0x3e1312.wait_gap_interval(this.t_flmf_task, _0x661f15);
      let _0x4345ac = _0x3e1312.get(_0xd03d0b, "resultCode", -1);
      this.t_flmf_task = Date.now();
      if (_0x4345ac == "0000") {
        this.log("完成任务[" + _0x1cbebc + "]成功");
      } else {
        let _0x20d3db = _0xd03d0b?.["resultMsg"] || "";
        this.log("完成任务[" + _0x1cbebc + "]失败[" + _0x4345ac + "]: " + _0x20d3db);
      }
    } catch (_0xf23708) {
      console.log(_0xf23708);
    }
  }
  async woread_api(_0x434377) {
    let _0x232131 = await this.request(_0x3e1312.copy(_0x434377)),
      _0x327d74 = _0x232131?.["result"]?.["message"] || "";
    _0x327d74?.["includes"]("登录已过期") && (await this.woread_auth()) && (await this.woread_login()) && (_0x232131 = await this.request(_0x3e1312.copy(_0x434377)));
    return _0x232131;
  }
  async woread_auth(_0x16b829 = {}) {
    let _0x5bc799 = false;
    try {
      let _0x3c4686 = _0x3e1312.time("yyyyMMddhhmmss");
      const _0x54effc = {
        timestamp: _0x3c4686
      };
      let _0x1c6f75 = this.encode_woread(_0x54effc),
        _0x30d89d = Date.now().toString(),
        _0x4960ec = _0x307ddd.MD5(_0x71b721 + _0x3e8f56 + _0x30d89d).toString();
      const _0x3ed105 = {
        sign: _0x1c6f75
      };
      const _0x375fd5 = {
        fn: "woread_auth",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/app/auth/" + _0x71b721 + "/" + _0x30d89d + "/" + _0x4960ec,
        json: _0x3ed105
      };
      let {
          result: _0x98730c
        } = await this.request(_0x375fd5),
        _0x451da7 = _0x3e1312.get(_0x98730c, "code", -1);
      if (_0x451da7 == "0000") {
        _0x5bc799 = true;
        this.woread_accesstoken = _0x98730c?.["data"]?.["accesstoken"];
        this.got = this.got.extend({
          headers: {
            accesstoken: this.woread_accesstoken
          }
        });
      } else {
        let _0x5971c1 = _0x98730c?.["message"] || "";
        this.log("阅读专区获取accesstoken失败[" + _0x451da7 + "]: " + _0x5971c1);
      }
    } catch (_0x17f641) {
      console.log(_0x17f641);
    } finally {
      return _0x5bc799;
    }
  }
  async woread_login(_0x88b0ca = {}) {
    let _0x400cb3 = false;
    try {
      let _0x5012b2 = {
          phone: this.mobile,
          timestamp: _0x3e1312.time("yyyyMMddhhmmss")
        },
        _0x3bec3c = this.encode_woread(_0x5012b2);
      const _0x4007d4 = {
        sign: _0x3bec3c
      };
      const _0x4a4d41 = {
        fn: "woread_login",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/account/login",
        json: _0x4007d4
      };
      let {
          result: _0x1422a7
        } = await this.request(_0x4a4d41),
        _0x35d04d = _0x3e1312.get(_0x1422a7, "code", -1);
      if (_0x35d04d == "0000") {
        _0x400cb3 = true;
        let {
          userid: _0x40bf7f,
          userindex: _0x4831f5,
          token: _0x5a67d6,
          verifycode: _0x536bd7
        } = _0x1422a7?.["data"];
        this.woread_token = _0x5a67d6;
        this.woread_verifycode = _0x536bd7;
        const _0x343adf = {
          woread_userid: _0x40bf7f,
          woread_userindex: _0x4831f5,
          woread_token: _0x5a67d6,
          woread_verifycode: _0x536bd7
        };
        Object.assign(this, _0x343adf);
      } else {
        let _0x2b2e90 = _0x1422a7?.["message"] || "";
        this.log("阅读专区获取token失败[" + _0x35d04d + "]: " + _0x2b2e90);
      }
    } catch (_0x5e007a) {
      console.log(_0x5e007a);
    } finally {
      return _0x400cb3;
    }
  }
  async woread_getSeeVideoAddNumber(_0x219e3e, _0x2522b5 = {}) {
    try {
      let _0x29f9aa = {
          activityIndex: _0x219e3e,
          ...this.get_woread_param()
        },
        _0x3cfc4a = this.encode_woread(_0x29f9aa);
      const _0x5d2f6d = {
        sign: _0x3cfc4a
      };
      const _0x1a730c = {
        fn: "woread_getSeeVideoAddNumber",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity/getSeeVideoAddNumber",
        json: _0x5d2f6d
      };
      let {
          result: _0x22868b
        } = await this.woread_api(_0x1a730c),
        _0x36f2f2 = _0x3e1312.get(_0x22868b, "code", -1);
      if (_0x36f2f2 == "0000") {
        _0x22868b?.["data"] == -1 && (await this.woread_addUserSeeVideo(_0x219e3e));
      } else {
        let _0x4d0eca = _0x22868b?.["message"] || "";
        this.log("阅读活动[" + _0x219e3e + "]查询抽奖视频失败[" + _0x36f2f2 + "]: " + _0x4d0eca);
      }
    } catch (_0x25bd91) {
      console.log(_0x25bd91);
    }
  }
  async woread_addUserSeeVideo(_0x54f17d, _0x515512 = {}) {
    try {
      let _0x1139dc = _0x515512.num || 5,
        _0x3b2bc3 = {
          activityIndex: _0x54f17d,
          num: _0x1139dc,
          ...this.get_woread_param()
        },
        _0x41ed49 = this.encode_woread(_0x3b2bc3);
      const _0x4b0a69 = {
        sign: _0x41ed49
      };
      const _0xa7ea34 = {
        fn: "woread_addUserSeeVideo",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity/addUserSeeVideo",
        json: _0x4b0a69
      };
      let {
          result: _0x5dd042
        } = await this.woread_api(_0xa7ea34),
        _0x40e145 = _0x3e1312.get(_0x5dd042, "code", -1);
      if (_0x40e145 == "0000") {
        this.log("阅读活动[" + _0x54f17d + "]看视频增加抽奖次数成功");
      } else {
        let _0x52aaab = _0x5dd042?.["message"] || "";
        this.log("阅读活动[" + _0x54f17d + "]看视频增加抽奖次数失败[" + _0x40e145 + "]: " + _0x52aaab);
      }
    } catch (_0xb3ec6d) {
      console.log(_0xb3ec6d);
    }
  }
  async woread_getActivityNumber(_0x50b335, _0x40d6e0 = {}) {
    try {
      let _0x54002c = {
          activeIndex: _0x50b335,
          ...this.get_woread_param()
        },
        _0x462d39 = this.encode_woread(_0x54002c);
      const _0x17f55a = {
        sign: _0x462d39
      };
      const _0x3089b7 = {
        fn: "woread_getActivityNumber",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity/getActivityNumber",
        json: _0x17f55a
      };
      let {
          result: _0x39d493
        } = await this.woread_api(_0x3089b7),
        _0x66c083 = _0x3e1312.get(_0x39d493, "code", -1);
      if (_0x66c083 == "0000") {
        let _0x30e050 = _0x39d493?.["data"] || 0;
        this.log("阅读活动[" + _0x50b335 + "]可以抽奖" + _0x30e050 + "次");
        while (_0x30e050-- > 0) {
          await _0x3e1312.wait(5000);
          await this.woread_doDraw(_0x50b335);
        }
      } else {
        let _0xe75d89 = _0x39d493?.["message"] || "";
        this.log("阅读活动[" + _0x50b335 + "]查询抽奖次数失败[" + _0x66c083 + "]: " + _0xe75d89);
      }
    } catch (_0xc2325e) {
      console.log(_0xc2325e);
    }
  }
  async woread_addDrawTimes(_0x7d93ac, _0x21ea91 = {}) {
    try {
      let _0x22891d = {
          activetyindex: _0x7d93ac,
          ...this.get_woread_param()
        },
        _0x35775e = this.encode_woread(_0x22891d);
      const _0x3c937d = {
        sign: _0x35775e
      };
      const _0x40f1a9 = {
        fn: "woread_addDrawTimes",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/basics/addDrawTimes",
        json: _0x3c937d
      };
      await _0x3e1312.wait_gap_interval(this.t_woread_draw, _0x7a8f53);
      let {
        result: _0x32aae2
      } = await this.woread_api(_0x40f1a9);
      this.t_woread_draw = Date.now();
      let _0x39f112 = _0x3e1312.get(_0x32aae2, "code", -1);
      if (_0x39f112 == "0000") {
        this.log("阅读活动[" + _0x7d93ac + "]打卡增加抽奖次数成功");
      } else {
        if (_0x39f112 != "9999") {
          let _0x136973 = _0x32aae2?.["message"] || "";
          this.log("阅读活动[" + _0x7d93ac + "]打卡增加抽奖次数失败[" + _0x39f112 + "]: " + _0x136973);
        }
      }
    } catch (_0x3086f2) {
      console.log(_0x3086f2);
    }
  }
  async woread_doDraw(_0x21358f, _0x47a27d = {}) {
    try {
      let _0x3db155 = {
          activeindex: _0x21358f,
          ...this.get_woread_param()
        },
        _0x351583 = this.encode_woread(_0x3db155);
      const _0x3e07a0 = {
        sign: _0x351583
      };
      const _0x5b915b = {
        fn: "woread_doDraw",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/basics/doDraw",
        json: _0x3e07a0
      };
      await _0x3e1312.wait_gap_interval(this.t_woread_draw, _0x7a8f53);
      let {
        result: _0x596318
      } = await this.woread_api(_0x5b915b);
      this.t_woread_draw = Date.now();
      let _0x5019bd = _0x3e1312.get(_0x596318, "code", -1);
      if (_0x5019bd == "0000") {
        const _0xe57fc4 = {
          notify: true
        };
        this.log("阅读活动[" + _0x21358f + "]抽奖: " + (_0x596318?.["data"]?.["prizedesc"] || "空气"), _0xe57fc4);
      } else {
        let _0x231a3d = _0x596318?.["message"] || "";
        this.log("阅读活动[" + _0x21358f + "]抽奖失败[" + _0x5019bd + "]: " + _0x231a3d);
      }
    } catch (_0xfb6a89) {
      console.log(_0xfb6a89);
    }
  }
  async woread_queryTicketAccount(_0x45d688 = {}) {
    try {
      let _0x1fac11 = this.get_woread_param(),
        _0x4fe33c = this.encode_woread(_0x1fac11);
      const _0x3390cd = {
        sign: _0x4fe33c
      };
      const _0x2f4adf = {
        fn: "woread_queryTicketAccount",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/phone/vouchers/queryTicketAccount",
        json: _0x3390cd
      };
      let {
          result: _0xc93119
        } = await this.woread_api(_0x2f4adf),
        _0xcf4aed = _0x3e1312.get(_0xc93119, "code", -1);
      if (_0xcf4aed == "0000") {
        let _0x1cc436 = (_0xc93119?.["data"]?.["usableNum"] / 100).toFixed(2);
        const _0x1a30be = {
          notify: true
        };
        this.log("阅读区话费红包余额: " + _0x1cc436, _0x1a30be);
      } else {
        let _0x367643 = _0xc93119?.["message"] || "";
        this.log("查询阅读区话费红包余额失败[" + _0xcf4aed + "]: " + _0x367643);
      }
    } catch (_0x3857df) {
      console.log(_0x3857df);
    }
  }
  async woread_addReadTime(_0x157f4a = {}) {
    try {
      let {
          readTime = 2,
          cntindex = "409672",
          cntIndex = "409672",
          cnttype = "1",
          cntType = 1,
          cardid = "11891",
          catid = "118411",
          pageIndex = "10683",
          chapterseno = 1,
          channelid = "",
          chapterid = "-1",
          readtype = 1,
          isend = "0"
        } = _0x157f4a,
        _0x6dc236 = {
          readTime: readTime,
          cntindex: cntindex,
          cntIndex: cntIndex,
          cnttype: cnttype,
          cntType: cntType,
          catid: catid,
          cardid: cardid,
          pageIndex: pageIndex,
          chapterseno: chapterseno,
          channelid: channelid,
          chapterid: chapterid,
          readtype: readtype,
          isend: isend,
          ...this.get_woread_param()
        },
        _0x585065 = this.encode_woread(_0x6dc236);
      const _0x2022c5 = {
        sign: _0x585065
      };
      const _0x55ba6c = {
        fn: "woread_addReadTime",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/history/addReadTime",
        json: _0x2022c5
      };
      let {
          result: _0x553e73
        } = await this.request(_0x55ba6c),
        _0x30ff2c = _0x3e1312.get(_0x553e73, "code", -1);
      if (_0x30ff2c == "0000") {
        this.log("刷新读小说时间: " + _0x553e73?.["data"]?.["readtime"] / 60 / 1000 + "分钟");
        _0x553e73?.["data"]?.["readtime"] >= 3600000 && (this.read_stop = true);
      } else {
        let _0x2125f6 = _0x553e73?.["message"] || "";
        this.log("刷新读小说时间失败[" + _0x30ff2c + "]: " + _0x2125f6);
      }
    } catch (_0x269cc3) {
      console.log(_0x269cc3);
    }
  }
  async rabblit_queryActivityData(_0x9dd726 = {}) {
    try {
      let _0x1cacaf = {
          activeIndex: 26,
          ...this.get_woread_param()
        },
        _0x4ed96e = this.encode_woread(_0x1cacaf);
      const _0xa35659 = {
        sign: _0x4ed96e
      };
      const _0x3e40b6 = {
        fn: "rabblit_queryActivityData",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/rabbitActivity/queryActivityData",
        json: _0xa35659
      };
      let {
          result: _0x43d319
        } = await this.woread_api(_0x3e40b6),
        _0x296587 = _0x3e1312.get(_0x43d319, "code", -1);
      if (_0x296587 == "0000") {
        let {
          totalcharpternums: _0x1f61c4,
          totalreadnums: _0x457faf,
          status: _0x2c3cfd,
          activitystatus: _0x4a236b
        } = _0x43d319?.["data"];
        if (_0x4a236b == 1) {
          this.need_read_rabbit = false;
          const _0x3c36c6 = {
            notify: true
          };
          this.log("龟兔赛跑今天已完成", _0x3c36c6);
          return;
        }
        this.need_read_rabbit = true;
        this.log("龟兔赛跑进度: " + _0x457faf + "/" + _0x1f61c4 + "分钟");
        if (_0x2c3cfd == 1) {
          await this.rabblit_wakeRabbit();
        }
        if (_0x457faf >= _0x1f61c4) {
          await this.rabblit_finishActivity();
        }
      } else {
        let _0x4af7ec = _0x43d319?.["message"] || "";
        _0x4af7ec?.["includes"]("未参加") && !_0x9dd726.join_retry && (await this.rabblit_joinRuning()) ? (_0x9dd726.join_retry = true, await this.rabblit_queryActivityData(_0x9dd726)) : this.log("龟兔赛跑查询状态失败[" + _0x296587 + "]: " + _0x4af7ec);
      }
    } catch (_0x68213f) {
      console.log(_0x68213f);
    }
  }
  async rabblit_joinRuning(_0x13bff0 = {}) {
    let _0x411617 = false;
    try {
      let _0x710075 = {
          activeIndex: 26,
          ...this.get_woread_param()
        },
        _0x178422 = this.encode_woread(_0x710075);
      const _0x1baed2 = {
        sign: _0x178422
      };
      const _0x2bc1d8 = {
        fn: "rabblit_joinRuning",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/rabbitActivity/joinRuning",
        json: _0x1baed2
      };
      let {
          result: _0x3f3de1
        } = await this.woread_api(_0x2bc1d8),
        _0xad70e3 = _0x3e1312.get(_0x3f3de1, "code", -1);
      if (_0xad70e3 == "0000") {
        _0x411617 = true;
        this.log("龟兔赛跑报名成功");
      } else {
        let _0xc83a54 = _0x3f3de1?.["message"] || "";
        this.log("龟兔赛跑报名失败[" + _0xad70e3 + "]: " + _0xc83a54);
      }
    } catch (_0x22f6a8) {
      console.log(_0x22f6a8);
    } finally {
      return _0x411617;
    }
  }
  async rabblit_wakeRabbit(_0x108f15 = {}) {
    try {
      let _0x5cc260 = {
          activeIndex: 26,
          sactivitIndex: 7246,
          ...this.get_woread_param()
        },
        _0x2cfd98 = this.encode_woread(_0x5cc260);
      const _0x37f47b = {
        sign: _0x2cfd98
      };
      const _0x5a74bc = {
        fn: "rabblit_wakeRabbit",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/rabbitActivity/wakeRabbit",
        json: _0x37f47b
      };
      await _0x3e1312.wait_gap_interval(this.t_woread_draw, _0x7a8f53);
      let {
        result: _0x1be04c
      } = await this.woread_api(_0x5a74bc);
      this.t_woread_draw = Date.now();
      let _0x480e89 = _0x3e1312.get(_0x1be04c, "code", -1);
      if (_0x480e89 == "0000") {
        const _0x490799 = {
          notify: true
        };
        this.log("龟兔赛跑唤醒兔子抽奖: " + (_0x1be04c?.["data"]?.["prizedesc"] || "空气"), _0x490799);
      } else {
        let _0x8e05ee = _0x1be04c?.["message"] || "";
        this.log("龟兔赛跑唤醒兔子失败[" + _0x480e89 + "]: " + _0x8e05ee);
      }
    } catch (_0x145262) {
      console.log(_0x145262);
    }
  }
  async rabblit_finishActivity(_0x1d1af8 = {}) {
    try {
      let _0x194026 = {
          activeIndex: 26,
          ...this.get_woread_param()
        },
        _0x2f3d2b = this.encode_woread(_0x194026);
      const _0x294bab = {
        sign: _0x2f3d2b
      };
      const _0x1f065e = {
        fn: "rabblit_finishActivity",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/rabbitActivity/finishActivity",
        json: _0x294bab
      };
      await _0x3e1312.wait_gap_interval(this.t_woread_draw, _0x7a8f53);
      let {
        result: _0x137580
      } = await this.woread_api(_0x1f065e);
      this.t_woread_draw = Date.now();
      let _0x2fd893 = _0x3e1312.get(_0x137580, "code", -1);
      if (_0x2fd893 == "0000") {
        this.need_read_rabbit = false;
        const _0x3c6309 = {
          notify: true
        };
        this.log("龟兔赛跑终点抽奖: " + (_0x137580?.["data"]?.["prizedesc"] || "空气"), _0x3c6309);
      } else {
        let _0x58bc92 = _0x137580?.["message"] || "";
        this.log("龟兔赛跑终点抽奖失败[" + _0x2fd893 + "]: " + _0x58bc92);
      }
    } catch (_0x5211c8) {
      console.log(_0x5211c8);
    }
  }
  async moonbox_queryActiveInfo(_0x49a7bb = {}) {
    try {
      let _0x2a47f0 = this.get_woread_param(),
        _0x5c3aed = this.encode_woread(_0x2a47f0);
      const _0xd8a0c2 = {
        sign: _0x5c3aed
      };
      const _0x116bd2 = {
        fn: "moonbox_queryActiveInfo",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/queryActiveInfo",
        json: _0xd8a0c2
      };
      let {
          result: _0x1f8994
        } = await this.woread_api(_0x116bd2),
        _0x247c6e = _0x3e1312.get(_0x1f8994, "code", -1);
      if (_0x247c6e == "0000") {
        let {
          activeId: _0x2aea74,
          activeName: _0x28904b
        } = _0x1f8994?.["data"];
        _0x41936c = _0x2aea74;
      } else {
        let _0x23ceb3 = _0x1f8994?.["message"] || "";
        this.log("阅光宝盒查询活动失败[" + _0x247c6e + "]: " + _0x23ceb3);
      }
    } catch (_0x113638) {
      console.log(_0x113638);
    }
  }
  async moonbox_queryCurTaskStatus(_0x3887a5 = {}) {
    try {
      let _0x421b0e = {
          activeIndex: _0x41936c,
          ...this.get_woread_param()
        },
        _0x35fff4 = this.encode_woread(_0x421b0e);
      const _0x4efc30 = {
        sign: _0x35fff4
      };
      const _0x3a5439 = {
        fn: "moonbox_queryCurTaskStatus",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/queryCurTaskStatus",
        json: _0x4efc30
      };
      let {
          result: _0x519d22
        } = await this.woread_api(_0x3a5439),
        _0x4664aa = _0x3e1312.get(_0x519d22, "code", -1);
      if (_0x4664aa == "0000") {
        for (let _0x30addb of _0x519d22?.["data"] || []) {
          let {
            taskName: _0x7dd85,
            currentValue: _0x32cf0a,
            taskValue: _0x4e2fdc
          } = _0x30addb?.["taskDetail"];
          switch (_0x30addb.taskStatus) {
            case 0:
              {
                this.moonbox_task_record[_0x7dd85] = true;
                this.log("阅光宝盒[" + _0x7dd85 + "]进度: " + parseInt(_0x32cf0a) + "/" + _0x4e2fdc + "分钟");
                break;
              }
            case 2:
              {
                await this.moonbox_completeActiveTask(_0x30addb);
              }
            case 1:
              {
                this.moonbox_task_record[_0x7dd85] = false;
                if (!this.moonbox_notified.includes(_0x7dd85)) {
                  this.moonbox_notified.push(_0x7dd85);
                  const _0xe0b7f6 = {
                    notify: true
                  };
                  this.log("阅光宝盒任务[" + _0x7dd85 + "]已完成", _0xe0b7f6);
                }
                break;
              }
          }
        }
      } else {
        let _0x47ceb7 = _0x519d22?.["message"] || "";
        _0x47ceb7?.["includes"]("未领取") && !_0x3887a5.activate_retry && (await this.moonbox_queryActiveTaskList()) ? (_0x3887a5.activate_retry = true, await this.moonbox_queryCurTaskStatus(_0x3887a5)) : this.log("阅光宝盒查询任务状态失败[" + _0x4664aa + "]: " + _0x47ceb7);
      }
    } catch (_0x3e8161) {
      console.log(_0x3e8161);
    }
  }
  async moonbox_completeActiveTask(_0xeee5dc, _0x49e1e2 = {}) {
    try {
      let _0x28146b = {
          taskId: _0xeee5dc.id,
          ...this.get_woread_param()
        },
        _0xf33c65 = this.encode_woread(_0x28146b);
      const _0x207fd1 = {
        sign: _0xf33c65
      };
      const _0x401dfe = {
        fn: "moonbox_completeActiveTask",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/completeActiveTask",
        json: _0x207fd1
      };
      let {
          result: _0x11a380
        } = await this.woread_api(_0x401dfe),
        _0x310526 = _0x3e1312.get(_0x11a380, "code", -1);
      if (_0x310526 == "0000") {
        const _0x442f8d = {
          notify: true
        };
        this.log("阅光宝盒[" + _0x11a380?.["data"]?.["taskDetail"]?.["taskName"] + "]领取奖励成功: " + _0x11a380?.["data"]?.["exchangeResult"]?.["materialGroupInfo"]?.["groupName"], _0x442f8d);
      } else {
        let _0x4b51fd = _0x11a380?.["message"] || "";
        this.log("阅光宝盒[" + _0xeee5dc?.["taskDetail"]?.["taskName"] + "]领取奖励失败[" + _0x310526 + "]: " + _0x4b51fd);
      }
    } catch (_0x44c7ed) {
      console.log(_0x44c7ed);
    }
  }
  async moonbox_queryActiveTaskList(_0xf125c3 = {}) {
    try {
      let _0x2ae027 = {
          activeIndex: _0x41936c,
          ...this.get_woread_param()
        },
        _0x55ff65 = this.encode_woread(_0x2ae027);
      const _0xd8c371 = {
        sign: _0x55ff65
      };
      const _0x974c56 = {
        fn: "moonbox_queryActiveTaskList",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/queryActiveTaskList",
        json: _0xd8c371
      };
      let {
          result: _0xaa00b1
        } = await this.woread_api(_0x974c56),
        _0x38245d = _0x3e1312.get(_0xaa00b1, "code", -1);
      if (_0x38245d == "0000") {
        let _0x4abb7c = _0xaa00b1?.["data"]?.["sort"](function (_0x42c135, _0x2daa2f) {
            let _0x386cb1 = parseInt(_0x2daa2f.taskDetail.taskValue),
              _0x133ad7 = parseInt(_0x42c135.taskDetail.taskValue);
            return _0x386cb1 - _0x133ad7;
          }),
          _0x296e70 = _0x4abb7c.filter(_0x40944e => _0x40944e.maxNum - _0x40944e.receiveNum > 0 && _0x40944e.taskDetail.materialGroup.groupName.includes("红包"));
        _0x296e70?.["length"] ? await this.moonbox_receiveActiveTask(_0x296e70) : this.log("没有可领取的阅光宝盒红包任务了");
      } else {
        let _0x5a5e7d = _0xaa00b1?.["message"] || "";
        this.log("阅光宝盒查询可领取任务失败[" + _0x38245d + "]: " + _0x5a5e7d);
      }
    } catch (_0x5dbe5b) {
      console.log(_0x5dbe5b);
    }
  }
  async moonbox_receiveActiveTask(_0x239405, _0x125f54 = {}) {
    try {
      if (!_0x239405.length) {
        return;
      }
      let _0x64e3fe = _0x239405.shift(),
        _0x51c867 = _0x64e3fe?.["taskDetail"]?.["taskName"] || "",
        _0x3b4309 = {
          activeId: _0x41936c,
          taskId: _0x64e3fe.secondTaskId,
          ...this.get_woread_param()
        },
        _0x102ac3 = this.encode_woread(_0x3b4309);
      const _0x41d96c = {
        sign: _0x102ac3
      };
      const _0x210a51 = {
        fn: "moonbox_queryActiveTaskList",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/receiveActiveTask",
        json: _0x41d96c
      };
      let {
          result: _0x1ab514
        } = await this.woread_api(_0x210a51),
        _0x1bf712 = _0x3e1312.get(_0x1ab514, "code", -1);
      if (_0x1bf712 == "0000") {
        this.moonbox_task_record[_0x51c867] = true;
        this.log("领取阅光宝盒任务[" + _0x51c867 + "]成功");
      } else {
        let _0x4deeb2 = _0x1ab514?.["message"] || "";
        this.log("领取阅光宝盒任务[" + _0x51c867 + "]失败[" + _0x1bf712 + "]: " + _0x4deeb2);
        (_0x4deeb2?.["includes"]("今天无法完成") || _0x4deeb2?.["includes"]("领光了")) && _0x239405.length > 0 && (await _0x3e1312.wait(500), await this.moonbox_receiveActiveTask(_0x239405, _0x125f54));
      }
    } catch (_0x270c2f) {
      console.log(_0x270c2f);
    }
  }
  async moonbox_queryReadStatus(_0x2933c2 = {}) {
    try {
      let _0x1ab80f = {
          activeIndex: _0x41936c,
          ...this.get_woread_param()
        },
        _0x155c28 = this.encode_woread(_0x1ab80f);
      const _0x41a663 = {
        sign: _0x155c28
      };
      const _0x305673 = {
        fn: "moonbox_queryReadStatus",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/queryReadStatus",
        json: _0x41a663
      };
      let {
          result: _0x47746f
        } = await this.woread_api(_0x305673),
        _0x36307c = _0x3e1312.get(_0x47746f, "code", -1);
      if (_0x36307c == "0000") {
        switch (_0x47746f?.["data"]) {
          case "2":
            {
              this.log("阅光宝盒去阅读两分钟抽奖");
              const _0x427d2c = {
                readTime: 2
              };
              await this.woread_addReadTime(_0x427d2c);
              await this.moonbox_drawReadActivePrize();
              break;
            }
          case "3":
            {
              this.log("阅光宝盒今天已抽奖");
              break;
            }
          case "4":
            {
              this.log("阅光宝盒今天可以抽奖");
              await this.moonbox_drawReadActivePrize();
              break;
            }
          default:
            {
              this.log("阅光宝盒抽奖状态[" + _0x47746f?.["data"] + "]");
              break;
            }
        }
      } else {
        let _0x25811d = _0x47746f?.["message"] || "";
        this.log("查询阅光宝盒抽奖次数失败[" + _0x36307c + "]: " + _0x25811d);
      }
    } catch (_0x49a58b) {
      console.log(_0x49a58b);
    }
  }
  async moonbox_drawReadActivePrize(_0xc0f696 = {}) {
    try {
      let _0x1d5732 = {
          activeIndex: _0x41936c,
          ...this.get_woread_param()
        },
        _0x58fd83 = this.encode_woread(_0x1d5732);
      const _0x50a595 = {
        sign: _0x58fd83
      };
      const _0x219619 = {
        fn: "moonbox_drawReadActivePrize",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/drawReadActivePrize",
        json: _0x50a595
      };
      let {
          result: _0x176ba8
        } = await this.woread_api(_0x219619),
        _0x14ed98 = _0x3e1312.get(_0x176ba8, "code", -1);
      if (_0x14ed98 == "0000") {
        const _0x9f10b7 = {
          notify: true
        };
        this.log("阅光宝盒抽奖: " + (_0x176ba8?.["data"]?.["prizedesc"] || JSON.stringify(_0x176ba8)), _0x9f10b7);
      } else {
        let _0x5e8fd1 = _0x176ba8?.["message"] || "";
        this.log("阅光宝盒抽奖失败[" + _0x14ed98 + "]: " + _0x5e8fd1);
      }
    } catch (_0x37fceb) {
      console.log(_0x37fceb);
    }
  }
  async ltyp_login(_0x3d1c27, _0x51df6f = {}) {
    try {
      const _0x5c435f = {
        "client-Id": _0x406709,
        accessToken: ""
      };
      const _0x184135 = {
        clientId: _0x406709,
        ticket: _0x3d1c27
      };
      let _0x5c00aa = {
          fn: "ltyp_login",
          method: "post",
          url: "https://panservice.mail.wo.cn/wohome/dispatcher",
          headers: _0x5c435f,
          json: {
            header: this.get_ltyp_sign_header("HandheldHallAutoLogin"),
            body: _0x184135
          }
        },
        {
          result: _0x321d17
        } = await this.request(_0x5c00aa),
        _0x1308c8 = _0x3e1312.get(_0x321d17, "STATUS", -1);
      if (_0x1308c8 == 200) {
        this.ltyp_token = _0x321d17?.["RSP"]?.["DATA"]?.["token"];
        for (let _0x28ff99 of _0x28d704) {
          await this.ltyp_incentiveTimes(_0x28ff99);
          await this.ltyp_lottery(_0x28ff99);
        }
      } else {
        let _0x4de772 = _0x321d17?.["msg"] || "";
        this.log("联通云盘登录失败[" + _0x1308c8 + "]: " + _0x4de772);
      }
    } catch (_0x124a2f) {
      console.log(_0x124a2f);
    }
  }
  async ltyp_incentiveTimes(_0x44e2d4, _0x58c35a = {}) {
    try {
      const _0x4a0e67 = {
        "client-Id": _0x406709,
        "Access-Token": this.ltyp_token
      };
      const _0x35ff2d = {
        bizKey: "incentiveTimesPipeline",
        activityId: _0x44e2d4
      };
      const _0x30b7f6 = {
        fn: "ltyp_incentiveTimes",
        method: "get",
        url: "https://panservice.mail.wo.cn/activity/v1/incentiveTimes",
        headers: _0x4a0e67,
        searchParams: _0x35ff2d
      };
      let {
          result: _0x4b6f71
        } = await this.request(_0x30b7f6),
        _0x2de537 = _0x3e1312.get(_0x4b6f71?.["meta"], "code", -1);
      if (_0x2de537 == 0) {
        let {
          isIncentiveTask = 0,
          taskType = 0,
          incentiveTimeTotal = 0,
          incentiveTimeDone = 0
        } = _0x4b6f71?.["result"];
        if (isIncentiveTask) {
          for (let _0x215f74 = incentiveTimeDone; _0x215f74 < incentiveTimeTotal; _0x215f74++) {
            await this.ltyp_incentiveTask(_0x44e2d4);
          }
        }
      } else {
        let _0x4adcf1 = _0x4b6f71?.["meta"]?.["message"] || "";
        this.log("联通云盘查询任务失败[" + _0x2de537 + "]: " + _0x4adcf1);
      }
    } catch (_0x3b583b) {
      console.log(_0x3b583b);
    }
  }
  async ltyp_incentiveTask(_0x7ae526, _0x22fb9b = {}) {
    try {
      const _0x5ad7aa = {
        "client-Id": _0x406709,
        "Access-Token": this.ltyp_token
      };
      const _0x24ce97 = {
        activityId: _0x7ae526
      };
      const _0x33e094 = {
        fn: "ltyp_incentiveTask",
        method: "post",
        url: "https://panservice.mail.wo.cn/activity/v1/incentiveTask",
        headers: _0x5ad7aa,
        json: {}
      };
      _0x33e094.json.bizKey = "incentiveTaskPipeline";
      _0x33e094.json.bizObject = _0x24ce97;
      let {
          result: _0xe81fe5
        } = await this.request(_0x33e094),
        _0x38d178 = _0x3e1312.get(_0xe81fe5?.["meta"], "code", -1);
      if (_0x38d178 == 0) {
        let {
          incentiveStatus = 0,
          incentiveMessage = ""
        } = _0xe81fe5?.["result"];
        incentiveStatus == 1 ? this.log("联通云盘完成任务成功") : this.log("联通云盘完成任务失败[" + incentiveStatus + "]: " + incentiveMessage);
      } else {
        let _0x388214 = _0xe81fe5?.["meta"]?.["message"] || "";
        this.log("联通云盘完成任务错误[" + _0x38d178 + "]: " + _0x388214);
      }
    } catch (_0x585e47) {
      console.log(_0x585e47);
    }
  }
  async ltyp_lottery_times(_0x17b1c4, _0x55903b = {}) {
    try {
      const _0x4dc573 = {
        "client-Id": _0x406709,
        token: this.ltyp_token
      };
      const _0x313bba = {
        activityId: _0x17b1c4
      };
      const _0x17815d = {
        fn: "ltyp_lottery_times",
        method: "get",
        url: "https://panservice.mail.wo.cn/activity/v1/times",
        headers: _0x4dc573,
        searchParams: _0x313bba
      };
      let {
          result: _0xb7ce76
        } = await this.request(_0x17815d),
        _0x547b8c = _0x3e1312.get(_0xb7ce76, "RSP_CODE", -1);
      if (_0x547b8c == 0) {
        let {
          times = 0
        } = _0xb7ce76?.["DATA"];
        this.log("联通云盘可以抽奖" + times + "次");
        while (times-- > 0) {
          await _0x3e1312.wait(1000);
          await this.ltyp_lottery(_0x17b1c4);
        }
      } else {
        let _0x165fce = _0xb7ce76?.["RSP_DESC"] || "";
        this.log("联通云盘查询抽奖次数失败[" + _0x547b8c + "]: " + _0x165fce);
      }
    } catch (_0x154b9a) {
      console.log(_0x154b9a);
    }
  }
  async ltyp_lottery(_0x1c0b69, _0x3c5cec = {}) {
    try {
      const _0xb8e933 = {
        "client-Id": _0x406709,
        "Access-Token": this.ltyp_token
      };
      const _0x4dd946 = {
        activityId: _0x1c0b69,
        type: 3
      };
      const _0x5df301 = {
        lottery: _0x4dd946
      };
      const _0x58a484 = {
        fn: "ltyp_lottery",
        method: "post",
        url: "https://panservice.mail.wo.cn/wohome/v1/lottery",
        headers: _0xb8e933,
        json: {}
      };
      _0x58a484.json.bizKey = "newLottery";
      _0x58a484.json.bizObject = _0x5df301;
      let {
          result: _0x42644a
        } = await this.request(_0x58a484),
        _0x3ea31d = _0x3e1312.get(_0x42644a?.["meta"], "code", -1);
      if (_0x3ea31d == 0) {
        let {
          prizeName = ""
        } = _0x42644a?.["result"];
        if (prizeName) {
          const _0x419b3f = {
            notify: true
          };
          this.log("联通云盘抽奖: " + prizeName, _0x419b3f);
          await this.ltyp_lottery(_0x1c0b69, _0x3c5cec);
        }
      } else {
        let _0x423b9d = _0x42644a?.["meta"]?.["message"] || "";
        this.log("联通云盘抽奖错误[" + _0x3ea31d + "]: " + _0x423b9d);
      }
    } catch (_0x49d4d7) {
      console.log(_0x49d4d7);
    }
  }
  async act_517_userAccount(_0x3de5ac = {}) {
    try {
      const _0x54c440 = {
        fn: "act_517_userAccount",
        method: "get",
        url: "https://activity.10010.com/2024517charges/lottery/userAccount"
      };
      {
        let {
            result: _0x3b3f44,
            statusCode: _0x596ada
          } = await this.request(_0x3e1312.copy(_0x54c440)),
          _0x1828b6 = _0x3e1312.get(_0x3b3f44, "code", _0x596ada);
        if (_0x1828b6 == "0000") {
          await this.act_517_taskList();
        } else {
          let _0x5cdaa7 = _0x3b3f44?.["message"] || _0x3b3f44?.["msg"] || "";
          this.log("517活动进入主页失败[" + _0x1828b6 + "]: " + _0x5cdaa7);
          return;
        }
      }
      {
        let {
            result: _0x593a51,
            statusCode: _0x2eea1e
          } = await this.request(_0x3e1312.copy(_0x54c440)),
          _0x6a795d = _0x3e1312.get(_0x593a51, "code", _0x2eea1e);
        if (_0x6a795d == "0000") {
          let {
            chances: _0xf4b7a2
          } = _0x593a51?.["data"];
          this.log("517活动可以抽奖" + _0xf4b7a2 + "次");
          let _0x1a9f65 = false;
          while (_0xf4b7a2-- > 0) {
            if (_0x1a9f65) {
              await _0x3e1312.wait(3000);
            }
            _0x1a9f65 = true;
            await this.act_517_lottery();
          }
        } else {
          let _0x168b97 = _0x593a51?.["message"] || _0x593a51?.["msg"] || "";
          this.log("517活动查询抽奖次数失败[" + _0x6a795d + "]: " + _0x168b97);
        }
      }
      {
        let {
            result: _0x13bced,
            statusCode: _0x475936
          } = await this.request(_0x3e1312.copy(_0x54c440)),
          _0x20258b = _0x3e1312.get(_0x13bced, "code", _0x475936);
        if (_0x20258b == "0000") {
          let {
            amount: _0x23c908,
            targetAmount: _0x421758
          } = _0x13bced?.["data"];
          const _0x43067a = {
            notify: true
          };
          this.log("517活动现金进度: " + _0x23c908 + "/" + _0x421758, _0x43067a);
        } else {
          let _0x53a44f = _0x13bced?.["message"] || _0x13bced?.["msg"] || "";
          this.log("517活动查询进度失败[" + _0x20258b + "]: " + _0x53a44f);
        }
      }
    } catch (_0x250f6c) {
      console.log(_0x250f6c);
    }
  }
  async act_517_bind(_0x1660d0, _0xf9f3f4 = {}) {
    try {
      const _0x5567de = {
        fn: "act_517_bind",
        method: "post",
        url: "https://activity.10010.com/2024517charges/openWindows/bind",
        json: {},
        valid_code: [401]
      };
      _0x5567de.json.shareCode = _0x1660d0;
      _0x5567de.json.channel = "countersign";
      let {
        result: _0x5d0bde
      } = await this.request(_0x5567de);
    } catch (_0x15a322) {
      console.log(_0x15a322);
    }
  }
  async act_517_lottery(_0x5eb249 = {}) {
    try {
      const _0x51b7a0 = {
        fn: "act_517_lottery",
        method: "get",
        url: "https://activity.10010.com/2024517charges/lottery/lottery"
      };
      let {
          result: _0x1e7c31,
          statusCode: _0x174bab
        } = await this.request(_0x51b7a0),
        _0x30f0d4 = _0x3e1312.get(_0x1e7c31, "code", _0x174bab);
      if (_0x30f0d4 == "0000") {
        _0x1e7c31?.["data"]?.["uuid"] ? (await _0x3e1312.wait(2000), await this.act_517_winningRecord(_0x1e7c31.data.uuid)) : this.log("517活动抽奖失败, 没有返回uuid");
      } else {
        let _0x1961e0 = _0x1e7c31?.["message"] || _0x1e7c31?.["msg"] || "";
        this.log("517活动抽奖失败[" + _0x30f0d4 + "]: " + _0x1961e0);
      }
    } catch (_0x44d2bd) {
      console.log(_0x44d2bd);
    }
  }
  async act_517_winningRecord(_0x91f389, _0x1173a3 = {}) {
    try {
      const _0x588916 = {
        requestId: _0x91f389
      };
      const _0x84ca57 = {
        fn: "act_517_winningRecord",
        method: "get",
        url: "https://activity.10010.com/2024517charges/lottery/winningRecord",
        searchParams: _0x588916
      };
      let {
          result: _0x5a19db,
          statusCode: _0x5edf25
        } = await this.request(_0x84ca57),
        _0x483516 = _0x3e1312.get(_0x5a19db, "code", _0x5edf25);
      if (_0x483516 == "0000") {
        if (_0x5a19db?.["data"]?.["isWin"] === "1") {
          let {
              prizeAmount: _0x2463c5,
              prizeList: _0xffb84e,
              afterAmount: _0x1f497e,
              targetAmount: _0x2bc74d,
              showAmount = "0"
            } = _0x5a19db?.["data"],
            _0x18aa2a = (_0xffb84e || []).filter(_0x32cf4a => _0x32cf4a.prizeName).map(_0x35d171 => _0x35d171.prizeName).join(", ") || "";
          const _0x1ac4d3 = {
            notify: true
          };
          if (_0x18aa2a) {
            this.log("517活动抽奖: " + _0x18aa2a, _0x1ac4d3);
          }
          if (showAmount === "1") {
            this.log("517活动抽奖现金进度: +" + _0x2463c5 + " (" + _0x1f497e + "/" + _0x2bc74d + ")");
          }
        } else {
          this.log("517活动抽奖: 空气");
        }
      } else {
        let _0x220158 = _0x5a19db?.["message"] || _0x5a19db?.["msg"] || "";
        this.log("查询517活动抽奖结果失败[" + _0x483516 + "]: " + _0x220158);
      }
    } catch (_0x13f5e8) {
      console.log(_0x13f5e8);
    }
  }
  async act_517_taskList(_0x153a9b = {}) {
    try {
      const _0x1d4ffb = {
        fn: "act_517_taskList",
        method: "get",
        url: "https://activity.10010.com/2024517charges/dotask/taskList"
      };
      let {
          result: _0xe4e0cb,
          statusCode: _0x2b41e1
        } = await this.request(_0x1d4ffb),
        _0x3f51d7 = _0x3e1312.get(_0xe4e0cb, "code", _0x2b41e1);
      if (_0x3f51d7 == "0000") {
        let _0x5aa4f8 = _0xe4e0cb?.["data"]?.["taskList"] || [];
        for (let _0x2bd91b of _0x5aa4f8) {
          let {
            completeNum = 0,
            maxNum: _0x2093fe,
            isComplete: _0x3e4856,
            taskType: _0x3119e3
          } = _0x2bd91b;
          if (_0x3e4856) {
            continue;
          }
          if (_0x3119e3 == "5") {
            continue;
          }
          completeNum = parseInt(completeNum);
          _0x2093fe = parseInt(_0x2093fe);
          for (let _0x6bbc9d = completeNum; _0x6bbc9d < _0x2093fe; _0x6bbc9d++) {
            await this.act_517_completeTask(_0x2bd91b);
          }
        }
      } else {
        let _0xf60d5 = _0xe4e0cb?.["message"] || _0xe4e0cb?.["msg"] || "";
        this.log("查询517活动抽奖结果失败[" + _0x3f51d7 + "]: " + _0xf60d5);
      }
    } catch (_0x3f957d) {
      console.log(_0x3f957d);
    }
  }
  async act_517_completeTask(_0xc1a11f, _0x48a267 = {}) {
    try {
      let _0x342ff8 = _0xc1a11f.title;
      const _0xe6c0ba = {
        taskId: _0xc1a11f.taskId
      };
      const _0x324e0a = {
        fn: "act_517_completeTask",
        method: "get",
        url: "https://activity.10010.com/2024517charges/dotask/completeTask",
        searchParams: _0xe6c0ba
      };
      let {
          result: _0x1e3464,
          statusCode: _0x229421
        } = await this.request(_0x324e0a),
        _0x12a177 = _0x3e1312.get(_0x1e3464, "code", _0x229421);
      if (_0x12a177 == "0000") {
        if (_0x1e3464?.["data"]) {
          let {
            num: _0x36f65c,
            title: _0x283756
          } = _0x1e3464.data;
          this.log("完成任务[" + _0x283756 + "]成功: " + _0x36f65c + "次抽奖机会");
        } else {
          this.log("完成任务[" + _0x342ff8 + "]失败没有获得抽奖机会");
        }
      } else {
        let _0x2c62a9 = _0x1e3464?.["message"] || _0x1e3464?.["msg"] || "";
        this.log("完成任务[" + _0x342ff8 + "]失败[" + _0x12a177 + "]: " + _0x2c62a9);
      }
    } catch (_0x379c88) {
      console.log(_0x379c88);
    }
  }
  get_wocare_body(_0x5ab168, _0x22d817 = {}) {
    const _0x3e383d = _0x3e1312.time("yyyyMMddhhmmssS"),
      _0x455c70 = Buffer.from(JSON.stringify(_0x22d817)).toString("base64");
    let _0x18d113 = {
        version: _0x24d203,
        apiCode: _0x5ab168,
        channelId: _0x5e5e2f,
        transactionId: _0x3e383d + _0x3e1312.randomString(6, _0x41c68b),
        timeStamp: _0x3e383d,
        messageContent: _0x455c70
      },
      _0x27724e = [];
    Object.keys(_0x18d113).sort().forEach(_0x49b572 => {
      _0x27724e.push(_0x49b572 + "=" + _0x18d113[_0x49b572]);
    });
    _0x27724e.push("sign=" + _0x5b6506);
    _0x18d113.sign = _0x307ddd.MD5(_0x27724e.join("&")).toString();
    return _0x18d113;
  }
  async wocare_api(_0xb689e3, _0x2f2e68 = {}) {
    let _0x55a990 = this.get_wocare_body(_0xb689e3, _0x2f2e68);
    const _0x3f646e = {
      fn: "wocare_" + _0xb689e3,
      method: "post",
      url: "https://wocare.unisk.cn/api/v1/" + _0xb689e3,
      form: _0x55a990
    };
    let _0x2a10d8 = await this.request(_0x3f646e);
    if (_0x2a10d8?.["result"]?.["messageContent"]) {
      try {
        let _0x5476df = JSON.parse(Buffer.from(_0x2a10d8.result.messageContent, "base64").toString());
        _0x2a10d8.result.data = _0x5476df?.["data"] || _0x5476df;
        if (_0x5476df?.["resultMsg"]) {
          _0x2a10d8.result.resultMsg = _0x5476df.resultMsg;
        }
      } catch (_0x2b1db8) {
        this.log("解析联通祝福返回失败:");
        console.log(_0x2b1db8);
      }
    }
    return _0x2a10d8;
  }
  async wocare_getToken(_0x5838e1, _0x3de5f5 = {}) {
    let _0x23f868 = false;
    try {
      let _0x15a333 = {
          fn: "wocare_getToken",
          method: "get",
          url: "https://wocare.unisk.cn/mbh/getToken",
          searchParams: {
            channelType: _0x121727,
            type: "02",
            ticket: _0x5838e1,
            version: _0x764025,
            timestamp: _0x3e1312.time("yyyyMMddhhmmssS"),
            desmobile: this.mobile,
            num: 0,
            postage: _0x3e1312.randomString(32),
            homePage: "home",
            duanlianjieabc: "qAz2m",
            userNumber: this.mobile
          }
        },
        {
          headers: _0x4cdd1b,
          statusCode: _0x252ad4
        } = await this.request(_0x15a333);
      if (_0x252ad4 == 302) {
        if (_0x4cdd1b?.["location"]) {
          let _0x56f8a6 = new URL(_0x4cdd1b.location),
            _0x14836 = _0x56f8a6.searchParams.get("sid");
          _0x14836 ? (this.wocare_sid = _0x14836, _0x23f868 = await this.wocare_loginmbh()) : this.log("联通祝福没有获取到sid");
        } else {
          this.log("联通祝福没有获取到location");
        }
      } else {
        this.log("联通祝福获取sid失败[" + _0x252ad4 + "]");
      }
    } catch (_0x10bdc6) {
      console.log(_0x10bdc6);
    } finally {
      return _0x23f868;
    }
  }
  async wocare_loginmbh(_0x3400ab = {}) {
    let _0x196f6a = false;
    try {
      let _0x30315c = "loginmbh";
      const _0x199356 = {
        sid: this.wocare_sid,
        channelType: _0x121727,
        apiCode: _0x30315c
      };
      let {
          result: _0x1aac24,
          statusCode: _0x34f4c6
        } = await this.wocare_api(_0x30315c, _0x199356),
        _0xcc66a0 = _0x3e1312.get(_0x1aac24, "resultCode", _0x34f4c6);
      if (_0xcc66a0 == "0000") {
        _0x196f6a = true;
        let {
          token: _0x320326
        } = _0x1aac24?.["data"];
        this.wocare_token = _0x320326;
      } else {
        let _0x4ba584 = _0x1aac24?.["resultMsg"] || _0x1aac24?.["resultDesc"] || "";
        this.log("联通祝福登录失败[" + _0xcc66a0 + "]: " + _0x4ba584);
      }
    } catch (_0x1014b9) {
      console.log(_0x1014b9);
    } finally {
      return _0x196f6a;
    }
  }
  async wocare_getSpecificityBanner(_0x24308c = {}) {
    try {
      let _0x424b95 = "getSpecificityBanner";
      const _0xf1d53e = {
        token: this.wocare_token,
        apiCode: _0x424b95
      };
      let {
          result: _0x359e7e,
          statusCode: _0x412284
        } = await this.wocare_api(_0x424b95, _0xf1d53e),
        _0x12c692 = _0x3e1312.get(_0x359e7e, "resultCode", _0x412284);
      if (_0x12c692 == "0000") {
        let _0x127d51 = _0x359e7e?.["data"] || [];
        for (let _0x56db8c of _0x127d51.filter(_0x5cdc70 => _0x5cdc70.activityStatus === "0" && _0x5cdc70.isDeleted === "0")) {
          await this.wocare_getDrawTask(_0x56db8c);
          await this.wocare_loadInit(_0x56db8c);
        }
      } else {
        let _0x6ac4d0 = _0x359e7e?.["resultMsg"] || _0x359e7e?.["resultDesc"] || "";
        this.log("联通祝福进入活动失败[" + _0x12c692 + "]: " + _0x6ac4d0);
      }
    } catch (_0x593a09) {
      console.log(_0x593a09);
    }
  }
  async wocare_loadInit(_0x110430, _0x4ef113 = {}) {
    try {
      let _0x134308 = "loadInit";
      const _0x5672aa = {
        token: this.wocare_token,
        channelType: _0x121727,
        type: _0x110430.id,
        apiCode: _0x134308
      };
      let {
          result: _0x3aab68,
          statusCode: _0x181d36
        } = await this.wocare_api(_0x134308, _0x5672aa),
        _0x283b29 = _0x3e1312.get(_0x3aab68, "resultCode", _0x181d36);
      if (_0x283b29 == "0000") {
        let _0x8c66be = _0x3aab68?.["data"],
          _0x89555e = _0x8c66be?.["zActiveModuleGroupId"],
          _0x2b9634 = 0;
        switch (_0x110430.id) {
          case 2:
            {
              let _0x4dd807 = _0x8c66be?.["data"]?.["isPartake"] || 0;
              !_0x4dd807 && (_0x2b9634 = 1);
              break;
            }
          case 3:
            {
              _0x2b9634 = parseInt(_0x8c66be?.["raffleCountValue"] || 0);
              break;
            }
          case 4:
            {
              _0x2b9634 = parseInt(_0x8c66be?.["mhRaffleCountValue"] || 0);
              break;
            }
        }
        while (_0x2b9634-- > 0) {
          await _0x3e1312.wait(5000);
          await this.wocare_luckDraw(_0x110430, _0x89555e);
        }
      } else {
        let _0x51652f = _0x3aab68?.["resultMsg"] || _0x3aab68?.["resultDesc"] || "";
        this.log("联通祝福[" + _0x110430.name + "]查询活动失败[" + _0x283b29 + "]: " + _0x51652f);
      }
    } catch (_0x231677) {
      console.log(_0x231677);
    }
  }
  async wocare_getDrawTask(_0x207809, _0x35b76e = {}) {
    try {
      let _0xd644e7 = "getDrawTask";
      const _0x5466a2 = {
        token: this.wocare_token,
        channelType: _0x121727,
        type: _0x207809.id,
        apiCode: _0xd644e7
      };
      let {
          result: _0x28fe04,
          statusCode: _0x4ebbaf
        } = await this.wocare_api(_0xd644e7, _0x5466a2),
        _0x2ace7c = _0x3e1312.get(_0x28fe04, "resultCode", _0x4ebbaf);
      if (_0x2ace7c == "0000") {
        let _0x92282c = _0x28fe04?.["data"]?.["taskList"] || [];
        for (let _0x54eca6 of _0x92282c.filter(_0x5d4fed => _0x5d4fed.taskStatus == 0)) {
          await this.wocare_completeTask(_0x207809, _0x54eca6);
        }
      } else {
        let _0x36b3c7 = _0x28fe04?.["resultMsg"] || _0x28fe04?.["resultDesc"] || "";
        this.log("联通祝福[" + _0x207809.name + "]查询任务失败[" + _0x2ace7c + "]: " + _0x36b3c7);
      }
    } catch (_0x41aa84) {
      console.log(_0x41aa84);
    }
  }
  async wocare_completeTask(_0x20d021, _0x54f582, _0x56b8cb = "1", _0x4f4a39 = {}) {
    try {
      let _0x1bcd5b = _0x54f582.title,
        _0x4a8f12 = _0x56b8cb == "1" ? "领取任务" : "完成任务",
        _0x160c4a = "completeTask";
      const _0xc0a674 = {
        token: this.wocare_token,
        channelType: _0x121727,
        task: _0x54f582.id,
        taskStep: _0x56b8cb,
        type: _0x20d021.id,
        apiCode: _0x160c4a
      };
      let {
          result: _0x50353a,
          statusCode: _0x524d3
        } = await this.wocare_api(_0x160c4a, _0xc0a674),
        _0x20be2e = _0x3e1312.get(_0x50353a, "resultCode", _0x524d3);
      if (_0x20be2e == "0000") {
        this.log(_0x4a8f12 + "[" + _0x1bcd5b + "]成功");
        _0x56b8cb == "1" && (await this.wocare_completeTask(_0x20d021, _0x54f582, "4"));
      } else {
        let _0x460a19 = _0x50353a?.["resultMsg"] || _0x50353a?.["resultDesc"] || "";
        this.log("联通祝福[" + _0x20d021.name + "]" + _0x4a8f12 + "[" + _0x1bcd5b + "]失败[" + _0x20be2e + "]: " + _0x460a19);
      }
    } catch (_0x6e4ab8) {
      console.log(_0x6e4ab8);
    }
  }
  async wocare_luckDraw(_0x22581a, _0x17104d, _0x4d368d = {}) {
    try {
      let _0x5b27df = "luckDraw";
      const _0x5ec39f = {
        token: this.wocare_token,
        channelType: _0x121727,
        zActiveModuleGroupId: _0x17104d,
        type: _0x22581a.id,
        apiCode: _0x5b27df
      };
      let {
          result: _0x3d446b,
          statusCode: _0x17f3a2
        } = await this.wocare_api(_0x5b27df, _0x5ec39f),
        _0x2e726d = _0x3e1312.get(_0x3d446b, "resultCode", _0x17f3a2);
      if (_0x2e726d == "0000") {
        let _0x490282 = _0x3e1312.get(_0x3d446b?.["data"], "resultCode", -1);
        if (_0x490282 == "0000") {
          let {
            prizeName: _0x4d5e6d,
            prizeDesc: _0x207ba1
          } = _0x3d446b?.["data"]?.["data"]?.["prize"];
          this.log("联通祝福[" + _0x22581a.name + "]抽奖: " + _0x4d5e6d + "[" + _0x207ba1 + "]");
        } else {
          let _0x438f4e = _0x3d446b?.["resultMsg"] || _0x3d446b?.["resultDesc"] || "";
          this.log("联通祝福[" + _0x22581a.name + "]抽奖失败[" + _0x490282 + "]: " + _0x438f4e);
        }
      } else {
        let _0x2e249f = _0x3d446b?.["resultMsg"] || _0x3d446b?.["resultDesc"] || "";
        this.log("联通祝福[" + _0x22581a.name + "]抽奖错误[" + _0x2e726d + "]: " + _0x2e249f);
      }
    } catch (_0x1d0abe) {
      console.log(_0x1d0abe);
    }
  }
  async sign_task() {
    await this.sign_getContinuous();
  }
  async ltcy_task() {
    let _0x5ea3f6 = "https://web.wostore.cn/web/flowGame/index.html?channelId=GAMELTAPP_90006&pushid=99",
      {
        ticket: _0x4f88ca
      } = await this.openPlatLineNew(_0x5ea3f6);
    if (!_0x4f88ca) {
      return;
    }
    await this.game_login(_0x4f88ca);
  }
  async ttlxj_task() {
    this.rptId = "";
    let _0x3e1057 = "https://epay.10010.com/ci-mps-st-web/?webViewNavIsHidden=webViewNavIsHidden",
      {
        ticket: _0x37495a,
        type: _0x224057,
        loc: _0x39ec15
      } = await this.openPlatLineNew(_0x3e1057);
    if (!_0x37495a) {
      return;
    }
    await this.ttlxj_authorize(_0x37495a, _0x224057, _0x39ec15);
  }
  async epay_28_task() {
    this.rptId = "";
    let _0x5a190d = new Date().getDate();
    if (_0x5a190d >= 26 && _0x5a190d <= 28) {
      await this.epay_28_authCheck();
      if (_0x1463d8.length) {
        let _0xc86b9d = _0x3e1312.randomList(_0x1463d8);
        await this.appMonth_28_bind(_0xc86b9d);
      }
      await this.appMonth_28_queryChance();
    }
  }
  async draw_28_task() {
    let _0x5a9362 = new Date().getDate();
    _0x5a9362 == 28 && (await this.draw_28_queryChance());
  }
  async act_517_task() {
    let _0x1f8f90 = new Date("2024-05-10 00:00:00"),
      _0x4730f8 = new Date("2024-06-09 00:00:00"),
      _0x1d95ca = Date.now();
    if (_0x1d95ca > _0x1f8f90.getTime() && _0x1d95ca < _0x4730f8.getTime()) {
      if (_0x59c839.length) {
        let _0x49e221 = _0x3e1312.randomList(_0x59c839);
        await this.act_517_bind(_0x49e221);
      }
      await this.act_517_userAccount();
    }
  }
  async flmf_task() {
    if (this.city.filter(_0x49d74e => _0x49d74e.proCode == "091").length == 0) {
      return;
    }
    let _0x4c1e81 = "https://weixin.linktech.hk/lv-web/handHall/autoLogin?actcode=welfareCenter",
      {
        loc: _0x1df75d
      } = await this.openPlatLineNew(_0x4c1e81);
    if (!_0x1df75d) {
      return;
    }
    await this.flmf_login(_0x1df75d);
  }
  async ltyp_task() {
    let _0x1f9859 = "https://panservice.mail.wo.cn/h5/activitymobile/lottery?activityId=WzaR7KkUJSpR+gDh7Fy6mA==&clientid=1001000003&appName=shouting",
      {
        ticket: _0x1b0eb6
      } = await this.openPlatLineNew(_0x1f9859);
    if (!_0x1b0eb6) {
      return;
    }
    await this.ltyp_login(_0x1b0eb6);
  }
  async ltzf_task() {
    let _0x57b55e = new URL("https://wocare.unisk.cn/mbh/getToken");
    _0x57b55e.searchParams.append("channelType", _0x121727);
    _0x57b55e.searchParams.append("homePage", "home");
    _0x57b55e.searchParams.append("duanlianjieabc", "qAz2m");
    let _0x1a789e = _0x57b55e.toString(),
      {
        ticket: _0xf0ce0c
      } = await this.openPlatLineNew(_0x1a789e);
    if (!_0xf0ce0c) {
      return;
    }
    if (!(await this.wocare_getToken(_0xf0ce0c))) {
      return;
    }
    for (let _0x3b1442 of _0x218f1f) {
      await this.wocare_getDrawTask(_0x3b1442);
      await this.wocare_loadInit(_0x3b1442);
    }
  }
  async woread_draw_task(_0x7bb714) {
    await this.woread_getSeeVideoAddNumber(_0x7bb714);
    await this.woread_addDrawTimes(_0x7bb714);
    await this.woread_getActivityNumber(_0x7bb714);
  }
  async woread_task() {
    for (let _0x5c5736 of _0x2e0fe1) {
      await this.woread_draw_task(_0x5c5736);
    }
    await this.moonbox_queryReadStatus();
    await this.woread_queryTicketAccount();
  }
  async woread_reading_task() {
    let _0x5875e7 = Object.values(this.moonbox_task_record).filter(_0x2e9b2e => _0x2e9b2e === true).length;
    while (this.need_read_rabbit || _0x5875e7) {
      let _0x432f1a = 2;
      const _0x13c47b = {
        readTime: _0x432f1a
      };
      await this.woread_addReadTime(_0x13c47b);
      let _0x227f20 = Date.now();
      if (_0x5875e7) {
        await this.moonbox_queryCurTaskStatus();
      }
      _0x5875e7 = Object.values(this.moonbox_task_record).filter(_0x4f752d => _0x4f752d === true).length;
      if (this.need_read_rabbit) {
        await this.rabblit_queryActivityData();
      }
      let _0x28342e = Date.now(),
        _0x55e0cb = 125000 + _0x227f20 - _0x28342e;
      (this.need_read_rabbit || _0x5875e7) && _0x55e0cb > 0 && (this.log("等待2分钟..."), await _0x3e1312.wait(_0x55e0cb));
    }
  }
  async userLoginTask() {
    if (!(await this.onLine())) {
      return;
    }
    if (!(await this.woread_auth())) {
      return;
    }
    if (!(await this.woread_login())) {
      return;
    }
    if (!_0x41936c) {
      await this.moonbox_queryActiveInfo();
    }
    await this.moonbox_queryCurTaskStatus();
  }
  async userTask() {
    _0x3e1312.log("\n------------------ 账号[" + this.index + "] ------------------");
    await this.sign_task();
    await this.ttlxj_task();
    await this.ltyp_task();
    await this.epay_28_task();
    await this.draw_28_task();
    await this.act_517_task();
    await this.ltzf_task();
    await this.flmf_task();
    await this.woread_task();
  }
  async userTestTask() {
    _0x3e1312.log("\n------------------ 账号[" + this.index + "] ------------------");
    await this.ltyp_task();
  }
}
!(async () => {
  if (!(await _0xed384e())) {
    return;
  }
  await _0x2b0053();
  _0x3e1312.read_env(_0x44f102);
  for (let _0x2dcb23 of _0x3e1312.userList) {
    await _0x2dcb23.userLoginTask();
  }
  for (let _0x2e7647 of _0x3e1312.userList.filter(_0x3ec857 => _0x3ec857.valid)) {
    await _0x2e7647.userTask();
  }
  let _0x47b2a3 = _0x3e1312.userList.filter(_0x416ba0 => _0x416ba0.valid && _0x416ba0.woread_verifycode && (_0x416ba0.need_read_rabbit || Object.values(_0x416ba0.moonbox_task_record).filter(_0xb276d3 => _0xb276d3 === true).length));
  if (_0x47b2a3.length) {
    let _0x233cb5 = [];
    _0x3e1312.log("\n============ 开始刷阅读时长 ============");
    for (let _0x33515f of _0x47b2a3) {
      _0x233cb5.push(_0x33515f.woread_reading_task());
    }
    await Promise.all(_0x233cb5);
  }
})().catch(_0x5b6da2 => _0x3e1312.log(_0x5b6da2)).finally(() => _0x3e1312.exitNow());
async function _0xed384e(_0x1ddb43 = 0) {
  let _0x26609a = false;
  try {
    const _0x14b96d = {
      fn: "auth",
      method: "get",
      url: _0x3bc3bb,
      timeout: 20000
    };
    let {
      statusCode: _0x2a9d36,
      result: _0xf90a53
    } = await _0x14fb67.request(_0x14b96d);
    if (_0x2a9d36 != 200) {
      _0x1ddb43++ < _0x35de04 && (_0x26609a = await _0xed384e(_0x1ddb43));
      return _0x26609a;
    }
    if (_0xf90a53?.["code"] == 0) {
      _0xf90a53 = JSON.parse(_0xf90a53.data.file.data);
      if (_0xf90a53?.["commonNotify"] && _0xf90a53.commonNotify.length > 0) {
        const _0x23197e = {
          notify: true
        };
        _0x3e1312.log(_0xf90a53.commonNotify.join("\n") + "\n", _0x23197e);
      }
      _0xf90a53?.["commonMsg"] && _0xf90a53.commonMsg.length > 0 && _0x3e1312.log(_0xf90a53.commonMsg.join("\n") + "\n");
      if (_0xf90a53[_0x457280]) {
        let _0x334970 = _0xf90a53[_0x457280];
        _0x334970.status == 0 ? _0x4b6355 >= _0x334970.version ? (_0x26609a = true, _0x3e1312.log(_0x334970.msg[_0x334970.status]), _0x3e1312.log(_0x334970.updateMsg), _0x3e1312.log("现在运行的脚本版本是：" + _0x4b6355 + "，最新脚本版本：" + _0x334970.latestVersion)) : _0x3e1312.log(_0x334970.versionMsg) : _0x3e1312.log(_0x334970.msg[_0x334970.status]);
      } else {
        _0x3e1312.log(_0xf90a53.errorMsg);
      }
    } else {
      _0x1ddb43++ < _0x35de04 && (_0x26609a = await _0xed384e(_0x1ddb43));
    }
  } catch (_0x226cc3) {
    _0x3e1312.log(_0x226cc3);
  } finally {
    return _0x26609a;
  }
}
async function _0x2b0053() {
  let _0x4ce7fc = false;
  try {
    const _0x263e25 = {
      fn: "getTaskUrl",
      method: "get",
      url: _0x2a4579
    };
    let {
      statusCode: _0x38c7e5,
      result: _0x39371f
    } = await _0x14fb67.request(_0x263e25);
    if (_0x38c7e5 != 200) {
      return Promise.resolve();
    }
    if (_0x39371f?.["code"] == 0) {
      _0x39371f = JSON.parse(_0x39371f.data.file.data);
      _0x28d704 = _0x39371f?.["ltyp_lottery"] || _0x28d704;
      _0x2e0fe1 = _0x39371f?.["woread_draw_id"] || _0x2e0fe1;
      _0x1463d8 = _0x39371f?.["appMonth_28_share"] || _0x1463d8;
      _0x59c839 = _0x39371f?.["act_517_share"] || _0x59c839;
    }
  } catch (_0x54597a) {
    _0x3e1312.log(_0x54597a);
  } finally {
    return _0x4ce7fc;
  }
}
function _0x2789ba(_0x193ac9) {
  return new class {
    constructor(_0xee92) {
      this.name = _0xee92;
      this.startTime = Date.now();
      const _0x5b390f = {
        time: true
      };
      this.log("[" + this.name + "]开始运行\n", _0x5b390f);
      this.notifyStr = [];
      this.notifyFlag = true;
      this.userIdx = 0;
      this.userList = [];
      this.userCount = 0;
    }
    log(_0x339887, _0x2ae833 = {}) {
      const _0x5206e6 = {
        console: true
      };
      Object.assign(_0x5206e6, _0x2ae833);
      if (_0x5206e6.time) {
        let _0xed5053 = _0x5206e6.fmt || "hh:mm:ss";
        _0x339887 = "[" + this.time(_0xed5053) + "]" + _0x339887;
      }
      if (_0x5206e6.notify) {
        this.notifyStr.push(_0x339887);
      }
      if (_0x5206e6.console) {
        console.log(_0x339887);
      }
    }
    get(_0x311b8b, _0x549c7d, _0x4ef6bd = "") {
      let _0x3c7557 = _0x4ef6bd;
      _0x311b8b?.["hasOwnProperty"](_0x549c7d) && (_0x3c7557 = _0x311b8b[_0x549c7d]);
      return _0x3c7557;
    }
    pop(_0x84eff5, _0x2c2f4e, _0x3c1bac = "") {
      let _0x391a1d = _0x3c1bac;
      _0x84eff5?.["hasOwnProperty"](_0x2c2f4e) && (_0x391a1d = _0x84eff5[_0x2c2f4e], delete _0x84eff5[_0x2c2f4e]);
      return _0x391a1d;
    }
    copy(_0x22089d) {
      return Object.assign({}, _0x22089d);
    }
    read_env(_0x4bb3ef) {
      let _0x3d3bd6 = _0x1a7186.map(_0x550812 => process.env[_0x550812]);
      for (let _0x251d6e of _0x3d3bd6.filter(_0x18e99e => !!_0x18e99e)) {
        let _0x4082a2 = _0x10a922.filter(_0x4bbf3a => _0x251d6e.includes(_0x4bbf3a)),
          _0x3c2d49 = _0x4082a2.length > 0 ? _0x4082a2[0] : _0x10a922[0];
        for (let _0x16ab75 of _0x251d6e.split(_0x3c2d49).filter(_0x33239c => !!_0x33239c)) {
          this.userList.push(new _0x4bb3ef(_0x16ab75));
        }
      }
      this.userCount = this.userList.length;
      if (!this.userCount) {
        const _0x476ab8 = {
          notify: true
        };
        this.log("未找到变量，请检查变量" + _0x1a7186.map(_0x242f99 => "[" + _0x242f99 + "]").join("或"), _0x476ab8);
        return false;
      }
      this.log("共找到" + this.userCount + "个账号");
      return true;
    }
    async threads(_0x84fd59, _0x18b841, _0x4ba6e0 = {}) {
      while (_0x18b841.idx < _0x3e1312.userList.length) {
        let _0x54d1c6 = _0x3e1312.userList[_0x18b841.idx++];
        if (!_0x54d1c6.valid) {
          continue;
        }
        await _0x54d1c6[_0x84fd59](_0x4ba6e0);
      }
    }
    async threadTask(_0x4118b2, _0x43dea0) {
      let _0x238628 = [];
      const _0x80c1a6 = {
        idx: 0
      };
      while (_0x43dea0--) {
        _0x238628.push(this.threads(_0x4118b2, _0x80c1a6));
      }
      await Promise.all(_0x238628);
    }
    time(_0xf4ae11, _0xa82d5f = null) {
      let _0x589d7a = _0xa82d5f ? new Date(_0xa82d5f) : new Date(),
        _0x45d47f = {
          "M+": _0x589d7a.getMonth() + 1,
          "d+": _0x589d7a.getDate(),
          "h+": _0x589d7a.getHours(),
          "m+": _0x589d7a.getMinutes(),
          "s+": _0x589d7a.getSeconds(),
          "q+": Math.floor((_0x589d7a.getMonth() + 3) / 3),
          S: this.padStr(_0x589d7a.getMilliseconds(), 3)
        };
      /(y+)/.test(_0xf4ae11) && (_0xf4ae11 = _0xf4ae11.replace(RegExp.$1, (_0x589d7a.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x4cdf71 in _0x45d47f) new RegExp("(" + _0x4cdf71 + ")").test(_0xf4ae11) && (_0xf4ae11 = _0xf4ae11.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x45d47f[_0x4cdf71] : ("00" + _0x45d47f[_0x4cdf71]).substr(("" + _0x45d47f[_0x4cdf71]).length)));
      return _0xf4ae11;
    }
    async showmsg() {
      if (!this.notifyFlag) {
        return;
      }
      if (!this.notifyStr.length) {
        return;
      }
      var _0x35e3fd = require("./sendNotify");
      this.log("\n============== 推送 ==============");
      await _0x35e3fd.sendNotify(this.name, this.notifyStr.join("\n"));
    }
    padStr(_0x141c28, _0x34e9d0, _0x1ab00a = {}) {
      let _0x44ce25 = _0x1ab00a.padding || "0",
        _0x368a06 = _0x1ab00a.mode || "l",
        _0xd64c73 = String(_0x141c28),
        _0x594664 = _0x34e9d0 > _0xd64c73.length ? _0x34e9d0 - _0xd64c73.length : 0,
        _0x55e887 = "";
      for (let _0x162ab9 = 0; _0x162ab9 < _0x594664; _0x162ab9++) {
        _0x55e887 += _0x44ce25;
      }
      _0x368a06 == "r" ? _0xd64c73 = _0xd64c73 + _0x55e887 : _0xd64c73 = _0x55e887 + _0xd64c73;
      return _0xd64c73;
    }
    json2str(_0x205c9e, _0x186569, _0xff3d9 = false) {
      let _0x1fb822 = [];
      for (let _0x45c267 of Object.keys(_0x205c9e).sort()) {
        let _0x54cd87 = _0x205c9e[_0x45c267];
        if (_0x54cd87 && _0xff3d9) {
          _0x54cd87 = encodeURIComponent(_0x54cd87);
        }
        _0x1fb822.push(_0x45c267 + "=" + _0x54cd87);
      }
      return _0x1fb822.join(_0x186569);
    }
    str2json(_0x4e4c6c, _0x30d35e = false) {
      let _0x4b5e0 = {};
      for (let _0x3ffbac of _0x4e4c6c.split("&")) {
        if (!_0x3ffbac) {
          continue;
        }
        let _0x32cbe5 = _0x3ffbac.indexOf("=");
        if (_0x32cbe5 == -1) {
          continue;
        }
        let _0xb9b9d9 = _0x3ffbac.substr(0, _0x32cbe5),
          _0x4161cd = _0x3ffbac.substr(_0x32cbe5 + 1);
        if (_0x30d35e) {
          _0x4161cd = decodeURIComponent(_0x4161cd);
        }
        _0x4b5e0[_0xb9b9d9] = _0x4161cd;
      }
      return _0x4b5e0;
    }
    randomPattern(_0x59943e, _0x58510c = "abcdef0123456789") {
      let _0x33cc54 = "";
      for (let _0x26a2f6 of _0x59943e) {
        if (_0x26a2f6 == "x") {
          _0x33cc54 += _0x58510c.charAt(Math.floor(Math.random() * _0x58510c.length));
        } else {
          _0x26a2f6 == "X" ? _0x33cc54 += _0x58510c.charAt(Math.floor(Math.random() * _0x58510c.length)).toUpperCase() : _0x33cc54 += _0x26a2f6;
        }
      }
      return _0x33cc54;
    }
    randomUuid() {
      return this.randomPattern("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx");
    }
    randomString(_0x593353, _0x4194b8 = "abcdef0123456789") {
      let _0x59bf2c = "";
      for (let _0x41a02f = 0; _0x41a02f < _0x593353; _0x41a02f++) {
        _0x59bf2c += _0x4194b8.charAt(Math.floor(Math.random() * _0x4194b8.length));
      }
      return _0x59bf2c;
    }
    randomList(_0x4070c9) {
      let _0x15eec5 = Math.floor(Math.random() * _0x4070c9.length);
      return _0x4070c9[_0x15eec5];
    }
    wait(_0xd7d9e0) {
      return new Promise(_0x1ee2ff => setTimeout(_0x1ee2ff, _0xd7d9e0));
    }
    async exitNow() {
      await this.showmsg();
      let _0x5c956b = Date.now(),
        _0x23397d = (_0x5c956b - this.startTime) / 1000;
      this.log("");
      const _0x55c773 = {
        time: true
      };
      this.log("[" + this.name + "]运行结束，共运行了" + _0x23397d + "秒", _0x55c773);
      process.exit(0);
    }
    normalize_time(_0x5c17c6, _0x4ecf26 = {}) {
      let _0x50d6ea = _0x4ecf26.len || _0x5b5cf5;
      _0x5c17c6 = _0x5c17c6.toString();
      let _0x2c8281 = _0x5c17c6.length;
      while (_0x2c8281 < _0x50d6ea) {
        _0x5c17c6 += "0";
      }
      _0x2c8281 > _0x50d6ea && (_0x5c17c6 = _0x5c17c6.slice(0, 13));
      return parseInt(_0x5c17c6);
    }
    async wait_until(_0x1eae71, _0x16f502 = {}) {
      let _0x12425b = _0x16f502.logger || this,
        _0x356563 = _0x16f502.interval || _0x5ac497,
        _0x2809a4 = _0x16f502.limit || _0x724f47,
        _0x1e0963 = _0x16f502.ahead || _0xabc7b0;
      if (typeof _0x1eae71 == "string" && _0x1eae71.includes(":")) {
        if (_0x1eae71.includes("-")) {
          _0x1eae71 = new Date(_0x1eae71).getTime();
        } else {
          let _0x579b8b = this.time("yyyy-MM-dd ");
          _0x1eae71 = new Date(_0x579b8b + _0x1eae71).getTime();
        }
      }
      let _0x418039 = this.normalize_time(_0x1eae71) - _0x1e0963,
        _0x3bd38e = this.time("hh:mm:ss.S", _0x418039),
        _0x397b01 = Date.now();
      _0x397b01 > _0x418039 && (_0x418039 += 86400000);
      let _0x4cafbf = _0x418039 - _0x397b01;
      if (_0x4cafbf > _0x2809a4) {
        const _0x4013a6 = {
          time: true
        };
        _0x12425b.log("离目标时间[" + _0x3bd38e + "]大于" + _0x2809a4 / 1000 + "秒,不等待", _0x4013a6);
      } else {
        const _0x561677 = {
          time: true
        };
        _0x12425b.log("离目标时间[" + _0x3bd38e + "]还有" + _0x4cafbf / 1000 + "秒,开始等待", _0x561677);
        while (_0x4cafbf > 0) {
          let _0x6ef8f9 = Math.min(_0x4cafbf, _0x356563);
          await this.wait(_0x6ef8f9);
          _0x397b01 = Date.now();
          _0x4cafbf = _0x418039 - _0x397b01;
        }
        const _0x23c009 = {
          time: true
        };
        _0x12425b.log("已完成等待", _0x23c009);
      }
    }
    async wait_gap_interval(_0x28babf, _0xb81b02) {
      let _0x3e664c = Date.now() - _0x28babf;
      _0x3e664c < _0xb81b02 && (await this.wait(_0xb81b02 - _0x3e664c));
    }
  }(_0x193ac9);
}