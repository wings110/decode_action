//Sat Jan 17 2026 09:09:38 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
import _0x466acd from "./httpVueLoader.js";
import _0x31db44 from "../../third/jsencrypt/decrypt.js";
const root = document.getElementById("root").value;
const version = document.getElementById("version").value;
const systemConfig = {
  rpKey: "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCARrAQukvHpAB6VJe5Rzu9nPB/hVxMXo9fNbM/+c+muC16pspJyxEJ9VqD42aSSvkn9/laQ/alO30L3j7DzUrDmEj09g2hdDBiOj3wWB2VFUIApXchliPI4b+ZINsrI+DV1MWiucGwQDwpYGDF/48Sh8hDlv8PvmUnzeZBFhAZvwIDAQAB"
};
const createS4 = () => {
  return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
};
const tool = {
  setRem(_0x4ad7eb = "750", _0x15b2d5 = document, _0x1db259 = window) {
    let _0x3a9eb5 = "orientationchange" in window ? "orientationchange" : "resize";
    let _0x44e690 = () => {
      {
        let _0x3b812c = _0x15b2d5.documentElement;
        let _0x5b7cc2 = _0x3b812c.clientWidth;
        _0x5b7cc2 && (/Android|webOS|iPhone|iPad|BlackBerry/i.test(navigator.userAgent) ? _0x3b812c.style.cssText = "font-size: " + 100 * (_0x5b7cc2 / _0x4ad7eb) + "px !important" : _0x3b812c.style.cssText = "font-size: " + 100 * (_0x5b7cc2 / _0x4ad7eb) + "px !important");
      }
    };
    _0x1db259.addEventListener(_0x3a9eb5, _0x44e690, false);
    _0x15b2d5.addEventListener("DOMContentLoaded", _0x44e690, false);
  },
  getType(_0x21dc5e) {
    let _0x14d6bd = Object.prototype.toString;
    let _0x18b508 = {
      "[object Boolean]": "boolean",
      "[object Number]": "number",
      "[object String]": "string",
      "[object Function]": "function",
      "[object Array]": "array",
      "[object Date]": "date",
      "[object RegExp]": "regExp",
      "[object Undefined]": "undefined",
      "[object Null]": "null",
      "[object Object]": "object"
    };
    return _0x18b508[_0x14d6bd.call(_0x21dc5e)];
  },
  getRandom(_0x50dad5 = 8, _0xd0e710 = "") {
    let _0x109853 = [];
    for (let _0x2f4bc3 = 0; _0x2f4bc3 < _0x50dad5 / 4; _0x2f4bc3++) {
      _0x109853.push(createS4());
    }
    return _0x109853.join(_0xd0e710);
  },
  getUrlQuery(_0x36e6e0 = "") {
    let _0x2ba278 = new URLSearchParams(window.location.search);
    if (_0x36e6e0) {
      {
        return _0x2ba278.get(_0x36e6e0);
      }
    } else {
      let _0x48703a = {};
      _0x2ba278.forEach((_0x4c66ae, _0x26eec2) => {
        _0x48703a[_0x26eec2] = _0x4c66ae;
      });
      return _0x48703a;
    }
  },
  getUrl(_0x1c0cfc, _0x113bc3) {
    return this.setUrlQuery(_0x113bc3, _0x1c0cfc);
  },
  setUrlQuery(_0x4f2ef0, _0x2941d2 = "") {
    _0x2941d2 = new URL(_0x2941d2 || window.location.href, window.location.href);
    let _0x1d44f2 = new URLSearchParams(_0x2941d2.search);
    for (let _0x2b204c in _0x4f2ef0) {
      if (_0x1d44f2.has(_0x2b204c)) {
        _0x1d44f2.set(_0x2b204c, _0x4f2ef0[_0x2b204c]);
      } else {
        {
          _0x1d44f2.append(_0x2b204c, _0x4f2ef0[_0x2b204c]);
        }
      }
    }
    let _0x1b0d0b = _0x2941d2.origin + _0x2941d2.pathname;
    _0x1d44f2.toString() && (_0x1b0d0b += "?" + _0x1d44f2.toString());
    return _0x1b0d0b;
  },
  urlQueryStringToObject(_0x195b07) {
    const _0x5df5e0 = {};
    const _0x4bfd08 = _0x195b07.split("&");
    _0x4bfd08.forEach(_0x581558 => {
      const [_0x442270, _0x9158a2] = _0x581558.split("=");
      _0x5df5e0[decodeURIComponent(_0x442270)] = decodeURIComponent(_0x9158a2);
    });
    return _0x5df5e0;
  },
  urlJump(_0x3b52d2) {
    window.location.href = _0x3b52d2;
  },
  urlJumpReplace(_0x25f569) {
    window.location.replace(_0x25f569);
  },
  urlBack() {
    history.back();
  },
  getOsType() {
    return {
      userAgent: navigator.userAgent.toLowerCase(),
      isAndroid: Boolean(navigator.userAgent.match(/android/gi)),
      isIphone: Boolean(navigator.userAgent.match(/iphone|ipad|ipod|ios/gi)),
      isIpad: Boolean(navigator.userAgent.match(/ipad/gi)),
      isFirefox: Boolean(navigator.userAgent.match(/Firefox/gi)),
      isWeiXin: Boolean(navigator.userAgent.match(/MicroMessenger/gi)),
      isZhiFuBao: Boolean(navigator.userAgent.match(/AlipayClient/gi))
    };
  },
  emojiToString(_0xe39d7f = "") {
    let _0x4bb4d5 = /[\ud800-\udbff][\udc00-\udfff]/g;
    return _0xe39d7f.replace(_0x4bb4d5, function (_0x1d3e49) {
      let _0x3e3f70;
      let _0x34effd;
      let _0x1b0c2c;
      return _0x1d3e49.length === 2 ? (_0x3e3f70 = _0x1d3e49.charCodeAt(0), _0x34effd = _0x1d3e49.charCodeAt(1), _0x1b0c2c = (_0x3e3f70 - 55296) * 1024 + 65536 + _0x34effd - 56320, "&#" + _0x1b0c2c + ";") : _0x1d3e49;
    });
  },
  stringToEmoji(_0x40606a = "") {
    let _0xe90067 = /&#.*?;/g;
    return _0x40606a.replace(_0xe90067, function (_0x26d162) {
      let _0x5c625c;
      let _0x1b59c8;
      let _0x3141a8;
      return _0x26d162.length == 9 ? (_0x3141a8 = parseInt(_0x26d162.match(/[0-9]+/g)), _0x5c625c = Math.floor((_0x3141a8 - 65536) / 1024) + 55296, _0x1b59c8 = (_0x3141a8 - 65536) % 1024 + 56320, unescape("%u" + _0x5c625c.toString(16) + "%u" + _0x1b59c8.toString(16))) : _0x26d162;
    });
  },
  dateFormat(_0x390a8a, _0x302b0c = "yyyy-MM-dd") {
    const _0x23df14 = this;
    if (_0x390a8a) {
      {
        typeof _0x390a8a === "string" && (_0x23df14.getOsType().isFirefox || _0x390a8a.indexOf("T") > -1 ? _0x390a8a = _0x390a8a.replace(/\//g, "-") : _0x390a8a = _0x390a8a.replace(/-/g, "/"), _0x390a8a = new Date(Date.parse(_0x390a8a)));
        let _0x12f6e0 = {
          "M+": _0x390a8a.getMonth() + 1,
          "d+": _0x390a8a.getDate(),
          "h+": _0x390a8a.getHours(),
          "m+": _0x390a8a.getMinutes(),
          "s+": _0x390a8a.getSeconds(),
          S: _0x390a8a.getMilliseconds(),
          "q+": Math.floor((_0x390a8a.getMonth() + 3) / 3)
        };
        /(y+)/.test(_0x302b0c) && (_0x302b0c = _0x302b0c.replace(RegExp.$1, (_0x390a8a.getFullYear() + "").substr(4 - RegExp.$1.length)));
        for (let _0x6ac154 in _0x12f6e0) {
          if (new RegExp("(" + _0x6ac154 + ")").test(_0x302b0c)) {
            {
              _0x302b0c = _0x302b0c.replace(RegExp.$1, RegExp.$1.length == 1 ? _0x12f6e0[_0x6ac154] : ("00" + _0x12f6e0[_0x6ac154]).substr(("" + _0x12f6e0[_0x6ac154]).length));
            }
          }
        }
        return _0x302b0c;
      }
    } else {
      return _0x390a8a;
    }
  },
  debounce(_0x2fae0a, _0x48c707) {
    let _0x1b1000;
    return function () {
      {
        clearTimeout(_0x1b1000);
        _0x1b1000 = setTimeout(() => {
          _0x2fae0a.apply(this, arguments);
        }, _0x48c707);
      }
    };
  },
  getImageObj(_0x29ffc0) {
    $.showLoading("加载中...");
    return new Promise(_0x1a05e7 => {
      let _0x42124e = new Image();
      _0x42124e.src = _0x29ffc0;
      _0x42124e.setAttribute("crossOrigin", "anonymous");
      _0x42124e.onload = () => {
        {
          $.hideLoading();
          _0x1a05e7(_0x42124e);
        }
      };
    });
  },
  downloadFile(_0x4650a9, _0x418963 = "file") {
    let _0x4a6230 = document.createElement("a");
    _0x4a6230.download = _0x418963 || "defaultName";
    _0x4a6230.style.display = "none";
    _0x4a6230.href = _0x4650a9;
    document.body.appendChild(_0x4a6230);
    _0x4a6230.click();
    document.body.removeChild(_0x4a6230);
  },
  downloadFileByBlob(_0xa191de, _0x1b0378 = "file") {
    let _0x56c9a1 = window.URL.createObjectURL(_0xa191de);
    let _0x12db52 = document.createElement("a");
    _0x12db52.download = _0x1b0378 || "defaultName";
    _0x12db52.style.display = "none";
    _0x12db52.href = _0x56c9a1;
    document.body.appendChild(_0x12db52);
    _0x12db52.click();
    document.body.removeChild(_0x12db52);
  },
  rsa: {
    encrypt: (_0x245fca, _0x4d3537) => {
      let _0x572c88 = new JSEncrypt();
      _0x572c88.setPublicKey(_0x4d3537);
      return _0x572c88.encrypt(_0x245fca);
    },
    decrypt: (_0x5b3568, _0x506762) => {
      return _0x31db44(_0x5b3568, _0x506762);
    }
  },
  aes: {
    encrypt: (_0x10a6fe, _0x266497) => {
      let _0x2a465e = CryptoJS.lib.WordArray.random(16);
      let _0x51c175 = CryptoJS.AES.encrypt(_0x10a6fe, CryptoJS.enc.Utf8.parse(_0x2a465e), {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
      }).toString();
      return {
        aesKey: tool.rsa.encrypt(_0x2a465e.toString(), _0x266497),
        enData: _0x51c175
      };
    },
    decrypt: (_0x372f99, _0x48e9fc) => {
      return CryptoJS.AES.decrypt(_0x372f99, CryptoJS.enc.Utf8.parse(_0x48e9fc), {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
      }).toString(CryptoJS.enc.Utf8);
    }
  },
  md5: _0x52c8f0 => {
    return CryptoJS.MD5(_0x52c8f0).toString();
  },
  isJsonString(_0xc901c3) {
    try {
      JSON.parse(_0xc901c3);
      return true;
    } catch (_0xebebb3) {
      return false;
    }
  }
};
const getSign = (_0xf7a3cb = {}, _0x2c5db1) => {
  const _0x1e7ff8 = tool.getRandom(32);
  let _0x422b53 = Object.keys(_0xf7a3cb).sort();
  let _0x430e30 = _0x422b53.length ? JSON.stringify(_0x422b53) : "";
  _0x430e30 = tool.md5(_0x430e30 + _0x2c5db1 + _0x1e7ff8);
  const _0x2289b2 = {
    "X-Timestamp": _0x2c5db1,
    "X-NonceString": _0x1e7ff8,
    "X-Signature": _0x430e30
  };
  return _0x2289b2;
};
const http = async (_0x695ea6, _0x4b454e, _0x5663b0) => {
  if (_0x4b454e) {
    for (let _0x57df05 in _0x4b454e) {
      {
        if (_0x4b454e[_0x57df05] === null || _0x4b454e[_0x57df05] === undefined) {
          _0x4b454e[_0x57df05] = "";
        }
      }
    }
  }
  _0x5663b0.load && $.showLoading("加载中...");
  _0x5663b0.headers = _0x5663b0.headers || {};
  if (_0x5663b0.encrypt) {
    _0x4b454e instanceof URLSearchParams && (_0x4b454e = tool.urlQueryStringToObject(_0x4b454e.toString()));
    let _0x1de4a3 = await getServiceTimestamp();
    let _0x581c11 = getSign(_0x4b454e, _0x1de4a3);
    for (let _0x24df2b in _0x581c11) {
      _0x5663b0.headers[_0x24df2b] = _0x581c11[_0x24df2b];
    }
    let _0x38873d = tool.aes.encrypt(JSON.stringify(_0x4b454e), "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCARrAQukvHpAB6VJe5Rzu9nPB/hVxMXo9fNbM/+c+muC16pspJyxEJ9VqD42aSSvkn9/laQ/alO30L3j7DzUrDmEj09g2hdDBiOj3wWB2VFUIApXchliPI4b+ZINsrI+DV1MWiucGwQDwpYGDF/48Sh8hDlv8PvmUnzeZBFhAZvwIDAQAB");
    _0x4b454e = {
      nonceStr: _0x38873d.aesKey,
      enData: _0x4b454e ? _0x38873d.enData : ""
    };
  }
  let _0x2bb63b = {};
  _0x5663b0.method === "get" && (_0x2bb63b = _0x4b454e, _0x4b454e = {});
  if (_0x5663b0.urlEncode) {
    {
      let _0x43ab4b = new URLSearchParams();
      for (let _0x48c9eb in _0x4b454e) {
        _0x43ab4b.append(_0x48c9eb, _0x4b454e[_0x48c9eb]);
      }
      _0x5663b0.headers["Content-Type"] = "application/x-www-form-urlencoded;charset=UTF-8";
      _0x4b454e = _0x43ab4b;
    }
  }
  _0x5663b0.headers.Accept = _0x5663b0.headers.Accept || "application/json, text/plain, */*";
  let _0x10cfa9 = await axios({
    headers: _0x5663b0.headers,
    method: _0x5663b0.method,
    baseURL: commonAddress() || _0x5663b0.baseURL,
    url: _0x695ea6,
    data: _0x4b454e,
    params: _0x2bb63b
  });
  _0x5663b0.load && $.hideLoading();
  return new Promise((_0x56d821, _0x5d407b) => {
    if (_0x10cfa9 && _0x10cfa9.status === 200) {
      {
        let _0x4a7842 = _0x10cfa9.data;
        if (_0x5663b0.encrypt && _0x4a7842.enData) {
          {
            let _0x30b336 = tool.rsa.decrypt(_0x4a7842.nonceStr, "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCARrAQukvHpAB6VJe5Rzu9nPB/hVxMXo9fNbM/+c+muC16pspJyxEJ9VqD42aSSvkn9/laQ/alO30L3j7DzUrDmEj09g2hdDBiOj3wWB2VFUIApXchliPI4b+ZINsrI+DV1MWiucGwQDwpYGDF/48Sh8hDlv8PvmUnzeZBFhAZvwIDAQAB");
            let _0x426080 = tool.aes.decrypt(_0x4a7842.enData, _0x30b336);
            tool.isJsonString(_0x426080) ? _0x4a7842 = JSON.parse(_0x426080) : _0x4a7842 = _0x426080;
          }
        }
        if (_0x5663b0.code === false) {
          if (tool.getType(_0x4a7842.data) === "array") {
            const _0x55f247 = {
              data: _0x4a7842
            };
            _0x56d821(_0x55f247);
          } else {
            const _0x5494b3 = {
              ..._0x4a7842,
              data: _0x4a7842
            };
            _0x56d821(_0x5494b3);
          }
        } else {
          if (_0x4a7842.code === "0") {
            _0x56d821(_0x4a7842);
          } else {
            if (_0x5663b0.message !== false) {
              {
                _0x4a7842.msg ? $.alert(_0x4a7842.msg) : $.alert("请求出错了");
              }
            }
            _0x5d407b(_0x4a7842);
          }
        }
      }
    } else {
      _0x5d407b(_0x10cfa9);
    }
  });
};
const api = {
  get(_0x5add40, _0x1f76c4, _0x34eb34) {
    const _0xa9da0 = {
      method: "get",
      ..._0x34eb34
    };
    return http(_0x5add40, _0x1f76c4, _0xa9da0);
  },
  post(_0x292843, _0x2478d6, _0x4f6a23) {
    const _0x3ef275 = {
      method: "post",
      ..._0x4f6a23
    };
    return http(_0x292843, _0x2478d6, _0x3ef275);
  },
  postEncrypt(_0x13844e, _0x51c1fb, _0xea0a1a) {
    const _0x3c8334 = {
      method: "post",
      encrypt: true,
      ..._0xea0a1a
    };
    return http(_0x13844e, _0x51c1fb, _0x3c8334);
  }
};
let serviceTimestampLoad = false;
const getServiceTimestamp = async () => {
  let _0xff75c1 = sessionStorage.getItem("timestampDiff");
  if (_0xff75c1 === null && !serviceTimestampLoad) {
    serviceTimestampLoad = true;
    let _0x5233e4 = await api.get("/ylslogin/getSystemTime").then(_0x48cd91 => {
      return _0x48cd91.timeStamp;
    });
    sessionStorage.setItem("timestampDiff", String(_0x5233e4 - new Date().getTime()));
    serviceTimestampLoad = false;
  }
  return serviceTimestampLoad ? new Promise(_0xc756ec => {
    {
      const _0x40171b = setInterval(() => {
        !serviceTimestampLoad && (_0xc756ec(new Date().getTime() + Number(sessionStorage.getItem("timestampDiff"))), clearInterval(_0x40171b));
      }, 100);
    }
  }) : new Date().getTime() + Number(_0xff75c1);
};
const activityBack = () => {
  const _0x459aac = window.sessionStorage.getItem("activityBackUrl");
  window.setActivityBackUrl = () => {
    window.sessionStorage.setItem("activityBackUrl", location.href);
  };
  if (_0x459aac) {
    if (location.href === _0x459aac) {
      {
        window.sessionStorage.setItem("activityBackUrl", "");
      }
    } else {
      const _0x48e524 = document.createElement("img");
      _0x48e524.className = "activityBackImg";
      _0x48e524.src = root + "/static/common/image/common/activity_back.png?v=" + version;
      document.body.appendChild(_0x48e524);
      _0x48e524.addEventListener("click", () => {
        location.href = _0x459aac;
      });
      function _0x30792d(_0xfe10ef) {
        if (_0xfe10ef.target.closest(".scrollable")) {
          return;
        }
        _0xfe10ef.preventDefault();
      }
      function _0x4a49d2() {
        document.body.style.overflow = "hidden";
        const _0x253b9b = {
          passive: false
        };
        document.addEventListener("touchmove", _0x30792d, _0x253b9b);
      }
      function _0x2b82a2() {
        {
          document.body.style.overflow = "";
          document.removeEventListener("touchmove", _0x30792d);
        }
      }
      const _0x3d3301 = _0x48e524;
      const _0x49f2de = window.innerWidth - _0x3d3301.offsetWidth;
      const _0x45ac29 = window.innerHeight - _0x3d3301.offsetHeight;
      let _0x3e7b3b = false;
      let _0xce1ab;
      let _0x5bbc2e;
      _0x3d3301.addEventListener("touchstart", _0x4b979a => {
        _0x3e7b3b = true;
        _0xce1ab = _0x4b979a.touches[0].clientX - _0x3d3301.offsetLeft;
        _0x5bbc2e = _0x4b979a.touches[0].clientY - _0x3d3301.offsetTop;
        _0x4a49d2();
      });
      document.addEventListener("touchmove", _0x77d7be => {
        if (!_0x3e7b3b) {
          return;
        }
        const _0x1e1da8 = Math.min(Math.max(0, _0x77d7be.touches[0].clientX - _0xce1ab), _0x49f2de);
        const _0x117acf = Math.min(Math.max(0, _0x77d7be.touches[0].clientY - _0x5bbc2e), _0x45ac29);
        _0x3d3301.style.left = _0x1e1da8 + "px";
        _0x3d3301.style.top = _0x117acf + "px";
      });
      document.addEventListener("touchend", () => {
        _0x3e7b3b = false;
        _0x2b82a2();
      });
    }
  }
};
const plugin = {
  config: systemConfig,
  dialog: vant.Dialog,
  toast: vant.Toast,
  httpVueLoader: _0x466acd,
  activityBack: activityBack
};
export { tool, api, plugin };
const _0x2866d6 = {
  tool: tool,
  api: api,
  plugin: plugin
};
export default _0x2866d6;