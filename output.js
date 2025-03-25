//Tue Mar 25 2025 01:30:13 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("望潮");
const notify = $.isNode() ? require("../sendNotify") : "";
(() => {
  function b(a7) {
    b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (aa) {
      {
        return typeof aa;
      }
    } : function (aa) {
      {
        return aa && "function" == typeof Symbol && aa.constructor === Symbol && aa !== Symbol.prototype ? "symbol" : typeof aa;
      }
    };
    return b(a7);
  }
  function c(a7, a8) {
    {
      var aa = "undefined" != typeof Symbol && a7[Symbol.iterator] || a7["@@iterator"];
      if (!aa) {
        {
          if (Array.isArray(a7) || (aa = d(a7)) || a8 && a7 && "number" == typeof a7.length) {
            {
              aa && (a7 = aa);
              var ab = 0;
              var ac = function () {};
              return {
                s: ac,
                n: function () {
                  {
                    var ag = {
                      done: true
                    };
                    return ab >= a7.length ? ag : {
                      done: false,
                      value: a7[ab++]
                    };
                  }
                },
                e: function (ag) {
                  {
                    throw ag;
                  }
                },
                f: ac
              };
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
      }
      var ad;
      var ae = true;
      var af = false;
      return {
        s: function () {
          {
            aa = aa.call(a7);
          }
        },
        n: function () {
          {
            var ai = aa.next();
            ae = ai.done;
            return ai;
          }
        },
        e: function (ai) {
          af = true;
          ad = ai;
        },
        f: function () {
          {
            try {
              {
                ae || null == aa.return || aa.return();
              }
            } finally {
              {
                if (af) {
                  throw ad;
                }
              }
            }
          }
        }
      };
    }
  }
  function d(a7, a8) {
    {
      if (a7) {
        {
          if ("string" == typeof a7) {
            return f(a7, a8);
          }
          var aa = {}.toString.call(a7).slice(8, -1);
          "Object" === aa && a7.constructor && (aa = a7.constructor.name);
          return "Map" === aa || "Set" === aa ? Array.from(a7) : "Arguments" === aa || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(aa) ? f(a7, a8) : undefined;
        }
      }
    }
  }
  function f(a7, a8) {
    {
      (null == a8 || a8 > a7.length) && (a8 = a7.length);
      for (var a9 = 0, aa = Array(a8); a9 < a8; a9++) {
        aa[a9] = a7[a9];
      }
      return aa;
    }
  }
  function g() {
    "use strict";

    g = function () {
      {
        return a9;
      }
    };
    var a8;
    var a9 = {
      wrap: ai
    };
    var aa = Object.prototype;
    var ab = aa.hasOwnProperty;
    var ac = Object.defineProperty || function (aE, aF, aG) {
      {
        aE[aF] = aG.value;
      }
    };
    var ad = "function" == typeof Symbol ? Symbol : {};
    var ae = ad.iterator || "@@iterator";
    var af = ad.asyncIterator || "@@asyncIterator";
    var ag = ad.toStringTag || "@@toStringTag";
    function ah(aE, aF, aG) {
      {
        var aH = {
          value: aG,
          enumerable: true,
          configurable: true,
          writable: true
        };
        Object.defineProperty(aE, aF, aH);
        return aE[aF];
      }
    }
    try {
      {
        ah({}, "");
      }
    } catch (aF) {
      {
        ah = function (aH, aI, aJ) {
          return aH[aI] = aJ;
        };
      }
    }
    function ai(aH, aI, aJ, aK) {
      {
        var aL = aI && aI.prototype instanceof ap ? aI : ap;
        var aM = Object.create(aL.prototype);
        var aN = new aC(aK || []);
        ac(aM, "_invoke", {
          value: ay(aH, aJ, aN)
        });
        return aM;
      }
    }
    function aj(aH, aI, aJ) {
      {
        try {
          return {
            type: "normal",
            arg: aH.call(aI, aJ)
          };
        } catch (aP) {
          {
            var aM = {
              type: "throw",
              arg: aP
            };
            return aM;
          }
        }
      }
    }
    var ak = "suspendedStart";
    var al = "suspendedYield";
    var am = "executing";
    var an = "completed";
    var ao = {};
    function ap() {}
    function aq() {}
    function ar() {}
    var as = {};
    ah(as, ae, function () {
      return this;
    });
    var at = Object.getPrototypeOf;
    var au = at && at(at(aD([])));
    au && au !== aa && ab.call(au, ae) && (as = au);
    ar.prototype = ap.prototype = Object.create(as);
    var av = ar.prototype;
    function aw(aH) {
      {
        ["next", "throw", "return"].forEach(function (aK) {
          {
            ah(aH, aK, function (aN) {
              {
                return this._invoke(aK, aN);
              }
            });
          }
        });
      }
    }
    function ax(aH, aI) {
      {
        function aM(aN, aO, aP, aQ) {
          {
            var aS = aj(aH[aN], aH, aO);
            if ("throw" !== aS.type) {
              {
                var aT = aS.arg;
                var aU = aT.value;
                return aU && "object" == b(aU) && ab.call(aU, "__await") ? aI.resolve(aU.__await).then(function (aW) {
                  aM("next", aW, aP, aQ);
                }, function (aW) {
                  {
                    aM("throw", aW, aP, aQ);
                  }
                }) : aI.resolve(aU).then(function (aW) {
                  {
                    aT.value = aW;
                    aP(aT);
                  }
                }, function (aW) {
                  {
                    return aM("throw", aW, aP, aQ);
                  }
                });
              }
            }
            aQ(aS.arg);
          }
        }
        var aK;
        ac(this, "_invoke", {
          value: function (aN, aO) {
            {
              function aQ() {
                {
                  return new aI(function (aS, aT) {
                    {
                      aM(aN, aO, aS, aT);
                    }
                  });
                }
              }
              return aK = aK ? aK.then(aQ, aQ) : aQ();
            }
          }
        });
      }
    }
    function ay(aH, aI, aJ) {
      {
        var aM = ak;
        return function (aO, aP) {
          {
            if (aM === am) {
              throw Error("Generator is already running");
            }
            if (aM === an) {
              {
                if ("throw" === aO) {
                  throw aP;
                }
                var aR = {
                  value: a8,
                  done: true
                };
                return aR;
              }
            }
            for (aJ.method = aO, aJ.arg = aP;;) {
              {
                var aS = aJ.delegate;
                if (aS) {
                  {
                    var aT = az(aS, aJ);
                    if (aT) {
                      {
                        if (aT === ao) {
                          continue;
                        }
                        return aT;
                      }
                    }
                  }
                }
                if ("next" === aJ.method) {
                  aJ.sent = aJ._sent = aJ.arg;
                } else {
                  if ("throw" === aJ.method) {
                    {
                      if (aM === ak) {
                        throw aM = an, aJ.arg;
                      }
                      aJ.dispatchException(aJ.arg);
                    }
                  } else {
                    "return" === aJ.method && aJ.abrupt("return", aJ.arg);
                  }
                }
                aM = am;
                var aU = aj(aH, aI, aJ);
                if ("normal" === aU.type) {
                  {
                    if (aM = aJ.done ? an : al, aU.arg === ao) {
                      continue;
                    }
                    var aV = {
                      value: aU.arg,
                      done: aJ.done
                    };
                    return aV;
                  }
                }
                "throw" === aU.type && (aM = an, aJ.method = "throw", aJ.arg = aU.arg);
              }
            }
          }
        };
      }
    }
    function az(aH, aI) {
      {
        var aM = aI.method;
        var aN = aH.iterator[aM];
        if (aN === a8) {
          aI.delegate = null;
          "throw" === aM && aH.iterator.return && (aI.method = "return", aI.arg = a8, az(aH, aI), "throw" === aI.method) || "return" !== aM && (aI.method = "throw", aI.arg = new TypeError("The iterator does not provide a '" + aM + "' method"));
          return ao;
        }
        var aO = aj(aN, aH.iterator, aI.arg);
        if ("throw" === aO.type) {
          aI.method = "throw";
          aI.arg = aO.arg;
          aI.delegate = null;
          return ao;
        }
        var aL = aO.arg;
        return aL ? aL.done ? (aI[aH.resultName] = aL.value, aI.next = aH.nextLoc, "return" !== aI.method && (aI.method = "next", aI.arg = a8), aI.delegate = null, ao) : aL : (aI.method = "throw", aI.arg = new TypeError("iterator result is not an object"), aI.delegate = null, ao);
      }
    }
    function aA(aH) {
      {
        var aJ = {
          tryLoc: aH[0]
        };
        1 in aH && (aJ.catchLoc = aH[1]);
        2 in aH && (aJ.finallyLoc = aH[2], aJ.afterLoc = aH[3]);
        this.tryEntries.push(aJ);
      }
    }
    function aB(aH) {
      {
        var aJ = aH.completion || {};
        aJ.type = "normal";
        delete aJ.arg;
        aH.completion = aJ;
      }
    }
    function aC(aH) {
      {
        var aI = {
          tryLoc: "root"
        };
        this.tryEntries = [aI];
        aH.forEach(aA, this);
        this.reset(true);
      }
    }
    function aD(aH) {
      {
        if (aH || "" === aH) {
          {
            var aJ = aH[ae];
            if (aJ) {
              return aJ.call(aH);
            }
            if ("function" == typeof aH.next) {
              return aH;
            }
            if (!isNaN(aH.length)) {
              {
                var aK = -1;
                var aL = function aO() {
                  {
                    for (; ++aK < aH.length;) {
                      if (ab.call(aH, aK)) {
                        aO.value = aH[aK];
                        aO.done = false;
                        return aO;
                      }
                    }
                    aO.value = a8;
                    aO.done = true;
                    return aO;
                  }
                };
                return aL.next = aL;
              }
            }
          }
        }
        throw new TypeError(b(aH) + " is not iterable");
      }
    }
    aq.prototype = ar;
    ac(av, "constructor", {
      value: ar,
      configurable: true
    });
    ac(ar, "constructor", {
      value: aq,
      configurable: true
    });
    aq.displayName = ah(ar, ag, "GeneratorFunction");
    a9.isGeneratorFunction = function (aH) {
      {
        var aI = "function" == typeof aH && aH.constructor;
        return !!aI && (aI === aq || "GeneratorFunction" === (aI.displayName || aI.name));
      }
    };
    a9.mark = function (aH) {
      {
        Object.setPrototypeOf ? Object.setPrototypeOf(aH, ar) : (aH.__proto__ = ar, ah(aH, ag, "GeneratorFunction"));
        aH.prototype = Object.create(av);
        return aH;
      }
    };
    a9.awrap = function (aH) {
      {
        var aI = {
          __await: aH
        };
        return aI;
      }
    };
    aw(ax.prototype);
    ah(ax.prototype, af, function () {
      {
        return this;
      }
    });
    a9.AsyncIterator = ax;
    a9.async = function (aH, aI, aJ, aK, aL) {
      {
        undefined === aL && (aL = Promise);
        var aN = new ax(ai(aH, aI, aJ, aK), aL);
        return a9.isGeneratorFunction(aI) ? aN : aN.next().then(function (aO) {
          {
            return aO.done ? aO.value : aN.next();
          }
        });
      }
    };
    aw(av);
    ah(av, ag, "Generator");
    ah(av, ae, function () {
      {
        return this;
      }
    });
    ah(av, "toString", function () {
      {
        return "[object Generator]";
      }
    });
    a9.keys = function (aH) {
      {
        var aJ = Object(aH);
        var aK = [];
        for (var aL in aJ) aK.push(aL);
        aK.reverse();
        return function aM() {
          {
            for (; aK.length;) {
              {
                var aP = aK.pop();
                if (aP in aJ) {
                  aM.value = aP;
                  aM.done = false;
                  return aM;
                }
              }
            }
            aM.done = true;
            return aM;
          }
        };
      }
    };
    a9.values = aD;
    aC.prototype = {
      constructor: aC,
      reset: function (aH) {
        {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = a8, this.done = false, this.delegate = null, this.method = "next", this.arg = a8, this.tryEntries.forEach(aB), !aH) {
            for (var aK in this) "t" === aK.charAt(0) && ab.call(this, aK) && !isNaN(+aK.slice(1)) && (this[aK] = a8);
          }
        }
      },
      stop: function () {
        {
          this.done = true;
          var aH = this.tryEntries[0].completion;
          if ("throw" === aH.type) {
            throw aH.arg;
          }
          return this.rval;
        }
      },
      dispatchException: function (aH) {
        {
          if (this.done) {
            throw aH;
          }
          var aJ = this;
          function aQ(aR, aS) {
            {
              aM.type = "throw";
              aM.arg = aH;
              aJ.next = aR;
              aS && (aJ.method = "next", aJ.arg = a8);
              return !!aS;
            }
          }
          for (var aK = this.tryEntries.length - 1; aK >= 0; --aK) {
            {
              var aL = this.tryEntries[aK];
              var aM = aL.completion;
              if ("root" === aL.tryLoc) {
                return aQ("end");
              }
              if (aL.tryLoc <= this.prev) {
                {
                  var aN = ab.call(aL, "catchLoc");
                  var aO = ab.call(aL, "finallyLoc");
                  if (aN && aO) {
                    {
                      if (this.prev < aL.catchLoc) {
                        return aQ(aL.catchLoc, true);
                      }
                      if (this.prev < aL.finallyLoc) {
                        return aQ(aL.finallyLoc);
                      }
                    }
                  } else {
                    if (aN) {
                      {
                        if (this.prev < aL.catchLoc) {
                          return aQ(aL.catchLoc, true);
                        }
                      }
                    } else {
                      if (!aO) {
                        throw Error("try statement without catch or finally");
                      }
                      if (this.prev < aL.finallyLoc) {
                        return aQ(aL.finallyLoc);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      abrupt: function (aH, aI) {
        {
          for (var aK = this.tryEntries.length - 1; aK >= 0; --aK) {
            {
              var aL = this.tryEntries[aK];
              if (aL.tryLoc <= this.prev && ab.call(aL, "finallyLoc") && this.prev < aL.finallyLoc) {
                {
                  var aM = aL;
                  break;
                }
              }
            }
          }
          aM && ("break" === aH || "continue" === aH) && aM.tryLoc <= aI && aI <= aM.finallyLoc && (aM = null);
          var aN = aM ? aM.completion : {};
          aN.type = aH;
          aN.arg = aI;
          return aM ? (this.method = "next", this.next = aM.finallyLoc, ao) : this.complete(aN);
        }
      },
      complete: function (aH, aI) {
        {
          if ("throw" === aH.type) {
            throw aH.arg;
          }
          "break" === aH.type || "continue" === aH.type ? this.next = aH.arg : "return" === aH.type ? (this.rval = this.arg = aH.arg, this.method = "return", this.next = "end") : "normal" === aH.type && aI && (this.next = aI);
          return ao;
        }
      },
      finish: function (aH) {
        {
          for (var aI = this.tryEntries.length - 1; aI >= 0; --aI) {
            {
              var aJ = this.tryEntries[aI];
              if (aJ.finallyLoc === aH) {
                this.complete(aJ.completion, aJ.afterLoc);
                aB(aJ);
                return ao;
              }
            }
          }
        }
      },
      catch: function (aH) {
        {
          for (var aJ = this.tryEntries.length - 1; aJ >= 0; --aJ) {
            {
              var aK = this.tryEntries[aJ];
              if (aK.tryLoc === aH) {
                {
                  var aL = aK.completion;
                  if ("throw" === aL.type) {
                    {
                      var aM = aL.arg;
                      aB(aK);
                    }
                  }
                  return aM;
                }
              }
            }
          }
          throw Error("illegal catch attempt");
        }
      },
      delegateYield: function (aH, aI, aJ) {
        this.delegate = {
          iterator: aD(aH),
          resultName: aI,
          nextLoc: aJ
        };
        "next" === this.method && (this.arg = a8);
        return ao;
      }
    };
    return a9;
  }
  function h(a7, a8, a9, aa, ab, ac, ad) {
    {
      try {
        {
          var af = a7[ac](ad);
          var ag = af.value;
        }
      } catch (aj) {
        {
          return void a9(aj);
        }
      }
      af.done ? a8(ag) : Promise.resolve(ag).then(aa, ab);
    }
  }
  function i(a7) {
    return function () {
      var a9 = this;
      var aa = arguments;
      return new Promise(function (ab, ac) {
        var ae = a7.apply(a9, aa);
        function af(ah) {
          {
            h(ae, ab, ac, af, ag, "next", ah);
          }
        }
        function ag(ah) {
          {
            h(ae, ab, ac, af, ag, "throw", ah);
          }
        }
        af(undefined);
      });
    };
  }
  var j = ($.isNode() ? process.env.WangChao : $.getdata("WangChao")) || "";
  var k = ($.isNode() ? process.env.GHPROXYURL : $.getdata("GHPROXYURL")) || "https://ghfast.top";
  var l = undefined;
  var m = "";
  var n = "64";
  var o = "";
  var p = "";
  var q = "";
  var r = "";
  var s = "";
  var t = "";
  var u = "";
  var v = "";
  var w = "10019";
  var x = "";
  var y = "";
  var z = "FR*r!isE5W";
  function A() {
    return B.apply(this, arguments);
  }
  function B() {
    {
      B = i(g().mark(function a9() {
        {
          var ab;
          var ac;
          var ad;
          var ae;
          var af;
          var ag;
          var ah;
          var ai;
          var aj;
          var ak;
          var al;
          var am;
          var an;
          var ao;
          var ap;
          var aq;
          var ar;
          var as;
          var at;
          var au;
          var av;
          var aw;
          return g().wrap(function (ay) {
            {
              for (;;) {
                switch (ay.prev = ay.next) {
                  case 0:
                    if (j) {
                      {
                        ay.next = 5;
                        break;
                      }
                    }
                    console.log("先去boxjs填写账号密码");
                    ay.next = 4;
                    return a5("先去boxjs填写账号密码");
                  case 4:
                    return ay.abrupt("return");
                  case 5:
                    ay.next = 7;
                    return a1();
                  case 7:
                    l = ay.sent;
                    ab = j.split(" ");
                    ac = c(ab);
                    ay.prev = 10;
                    ac.s();
                  case 12:
                    if ((ad = ac.n()).done) {
                      {
                        ay.next = 120;
                        break;
                      }
                    }
                    ae = ad.value;
                    console.log("随机生成UA");
                    af = Z();
                    o = af.ua;
                    p = af.commonUa;
                    q = af.uuid;
                    console.log(o);
                    console.log(p);
                    u = ae.split("&")[0];
                    v = ae.split("&")[1];
                    console.log("用户：".concat(u, "开始任务"));
                    console.log("获取sessionId");
                    ay.next = 27;
                    return I("/api/account/init");
                  case 27:
                    ag = ay.sent;
                    x = ag.data.session.id;
                    console.log(x);
                    console.log("获取signature_key");
                    ay.next = 33;
                    return C("/web/init?client_id=".concat(w));
                  case 33:
                    ah = ay.sent;
                    m = ah.data.client.signature_key;
                    console.log(m);
                    console.log("获取code");
                    ay.next = 39;
                    return E("/web/oauth/credential_auth");
                  case 39:
                    if (ai = ay.sent, ai.data) {
                      {
                        ay.next = 43;
                        break;
                      }
                    }
                    console.log(ai.message);
                    return ay.abrupt("continue", 118);
                  case 43:
                    aj = ai.data.authorization_code.code;
                    console.log(aj);
                    console.log("登录");
                    ay.next = 48;
                    return I("/api/zbtxz/login", "check_token=&code=".concat(aj, "&token=&type=-1&union_id="));
                  case 48:
                    ak = ay.sent;
                    console.log("登录成功");
                    t = ak.data.session.account_id;
                    x = ak.data.session.id;
                    ay.next = 54;
                    return G("/api/app_feature_switch/list");
                  case 54:
                    al = ay.sent;
                    console.log("进入app：".concat(al.message));
                    console.log("————————————");
                    console.log("阅读抽奖");
                    r = "";
                    console.log("获取登录cookie");
                    ay.next = 62;
                    return K("/prod-api/user-read/app/login?id=".concat(t, "&sessionId=").concat(x, "&deviceId=").concat(q));
                  case 62:
                    if (r = ay.sent, r) {
                      {
                        ay.next = 65;
                        break;
                      }
                    }
                    return ay.abrupt("continue", 118);
                  case 65:
                    console.log(r);
                    ay.next = 68;
                    return M("/prod-api/user-read/list/".concat(Y()));
                  case 68:
                    am = ay.sent;
                    an = c(am.data.articleIsReadList);
                    ay.prev = 70;
                    an.s();
                  case 72:
                    if ((ao = an.n()).done) {
                      {
                        ay.next = 88;
                        break;
                      }
                    }
                    ap = ao.value;
                    console.log("文章：".concat(ap.title));
                    ay.next = 77;
                    return G("/api/article/detail?id=".concat(ap.newsId));
                  case 77:
                    ay.sent;
                    ay.next = 80;
                    return G("/api/article/read_time?channel_article_id=".concat(ap.newsId, "&is_end=true&read_time=7934"));
                  case 80:
                    ay.sent;
                    aq = JSON.stringify({
                      timestamp: Date.now(),
                      articleId: ap.id,
                      accountId: t
                    });
                    ay.next = 84;
                    return M("/prod-api/already-read/article/new?signature=".concat(U(aq)), aq);
                  case 84:
                    ar = ay.sent;
                    console.log("阅读：".concat(ar.msg));
                  case 86:
                    ay.next = 72;
                    break;
                  case 88:
                    ay.next = 93;
                    break;
                  case 90:
                    ay.prev = 90;
                    ay.t0 = ay.catch(70);
                    an.e(ay.t0);
                  case 93:
                    ay.prev = 93;
                    an.f();
                    return ay.finish(93);
                  case 96:
                    ay.next = 98;
                    return M("/prod-api/user-read-count/count/".concat(Y()));
                  case 98:
                    if (as = ay.sent, console.log("剩余抽奖次数：".concat(as.data)), !(as.data > 0)) {
                      {
                        ay.next = 118;
                        break;
                      }
                    }
                    s = "";
                    ay.next = 104;
                    return O("/tzrb/user/loginWC?accountId=".concat(t, "&sessionId=").concat(x));
                  case 104:
                    s = ay.sent;
                    console.log("获取抽奖cookie");
                    console.log(s);
                    ay.next = 109;
                    return Q("/tzrb/awardUpgrade/list?activityId=67");
                  case 109:
                    at = ay.sent;
                    au = at.data;
                    av = g().mark(function aH() {
                      {
                        var aJ;
                        var aK;
                        return g().wrap(function (aL) {
                          {
                            for (;;) {
                              switch (aL.prev = aL.next) {
                                case 0:
                                  aL.next = 2;
                                  return S("/tzrb/userAwardRecordUpgrade/saveUpdate", "activityId=67&sessionId=undefined&sig=undefined&token=undefined");
                                case 2:
                                  aJ = aL.sent;
                                  aK = au.findIndex(function (aO) {
                                    {
                                      return aO.id == aJ.data;
                                    }
                                  });
                                  -1 != aK ? (console.log("抽奖获得：".concat(au[aK].title)), y += "用户：".concat(u, " 抽奖获得：").concat(au[aK].title, "\n")) : console.log(JSON.stringify(aJ));
                                case 5:
                                case "end":
                                  return aL.stop();
                              }
                            }
                          }
                        }, aH);
                      }
                    });
                    aw = 0;
                  case 113:
                    if (!(aw < as.data)) {
                      {
                        ay.next = 118;
                        break;
                      }
                    }
                    return ay.delegateYield(av(), "t1", 115);
                  case 115:
                    aw++;
                    ay.next = 113;
                    break;
                  case 118:
                    ay.next = 12;
                    break;
                  case 120:
                    ay.next = 125;
                    break;
                  case 122:
                    ay.prev = 122;
                    ay.t2 = ay.catch(10);
                    ac.e(ay.t2);
                  case 125:
                    ay.prev = 125;
                    ac.f();
                    return ay.finish(125);
                  case 128:
                    if (!y) {
                      {
                        ay.next = 131;
                        break;
                      }
                    }
                    ay.next = 131;
                    return a5(y);
                  case 131:
                  case "end":
                    return ay.stop();
                }
              }
            }
          }, a9, null, [[10, 122, 125, 128], [70, 90, 93, 96]]);
        }
      }));
      return B.apply(this, arguments);
    }
  }
  function C(a7) {
    {
      return D.apply(this, arguments);
    }
  }
  function D() {
    var a7 = {
      ARQtd: function (a8) {
        return a8();
      },
      wviyj: function (a8) {
        return a8();
      },
      INPcS: "Ztulb",
      pUpIc: function (a8, a9) {
        return a8 !== a9;
      },
      sLlFI: "ULNWA",
      NRjys: "HSXCD",
      JGHuY: "no-cache",
      ZeMmX: "gzip",
      nAOCo: "[object Generator]",
      bbHST: function (a8, a9, aa) {
        return a8(a9, aa);
      },
      RDbhH: function (a8, a9) {
        return a8 + a9;
      },
      iGQAx: function (a8, a9, aa, ab) {
        return a8(a9, aa, ab);
      },
      DrfCT: "next",
      Frxfa: "iterator result is not an object",
      kXvkg: function (a8, a9) {
        return a8 === a9;
      },
      OFjPw: "sdvRG",
      FCLwe: "DxAkM"
    };
    {
      D = i(g().mark(function a9(aa) {
        var ab = {
          IIiTT: "Ojgvv",
          MJrqZ: function (ac) {
            return ac();
          },
          bCqkE: "GQkFm",
          nGOfv: " API请求失败，请检查网路重试",
          LyXFD: function (ac, ad) {
            return ac !== ad;
          },
          YXDLd: "Ztulb",
          dTavX: function (ac, ad) {
            return ac !== ad;
          },
          JTdKi: "ULNWA",
          udoQJ: function (ac) {
            return ac();
          },
          WmzRq: "CdjSx",
          mtLeN: "HSXCD",
          QSrOq: "no-cache",
          xCQUW: "gzip",
          jvcXi: "[object Generator]",
          TmiHQ: function (ac, ad) {
            return ac === ad;
          },
          SyEBX: function (ac, ad, ae) {
            return ac(ad, ae);
          },
          MVHFg: function (ac, ad) {
            return ac + ad;
          },
          TSDSQ: function (ac, ad, ae, af) {
            return ac(ad, ae, af);
          },
          FeCXz: "next",
          SzbUM: "iterator result is not an object",
          SHYbk: function (ac, ad) {
            return ac === ad;
          },
          OyMQY: "sdvRG",
          GDQCc: "return"
        };
        {
          return g().wrap(function (ac) {
            var ad = {
              Feggh: function (ae, af) {
                return ae === af;
              },
              SsHTi: "throw",
              jsuda: "return",
              TavWF: function (ae, af, ag) {
                return ae(af, ag);
              },
              wkmPw: function (ae, af) {
                return ae !== af;
              },
              cTsHe: function (ae, af) {
                return ae + af;
              },
              YMQxk: "The iterator does not provide a '",
              ahZMZ: "' method",
              XzhJy: function (ae, af, ag, ah) {
                return ae(af, ag, ah);
              },
              PBNyb: function (ae, af) {
                return ae === af;
              },
              oDZcl: "next",
              LgbIa: "iterator result is not an object"
            };
            {
              for (;;) {
                switch (ac.prev = ac.next) {
                  case 0:
                    return ac.abrupt("return", new Promise(function (ae) {
                      var af = {
                        OqAqa: function (ah, ai) {
                          return ah !== ai;
                        },
                        puGDr: "HXzwq",
                        BnxFF: "Ojgvv",
                        OQDjo: function (ah) {
                          return ah();
                        },
                        uuygm: "GQkFm",
                        EGuSF: "VOeCM",
                        AqYcy: " API请求失败，请检查网路重试",
                        ACeLK: function (ah, ai) {
                          return ah !== ai;
                        },
                        KYYWO: "Ztulb",
                        kaRmc: function (ah, ai) {
                          return ah !== ai;
                        },
                        ZjGhK: "ULNWA",
                        QscTL: "GpmaP",
                        gOVks: "fRTLA",
                        cRiAB: function (ah) {
                          return ah();
                        }
                      };
                      {
                        var ag = {
                          url: "https://passport.tmuyun.com".concat(aa),
                          headers: {
                            Connection: "Keep-Alive",
                            "Cache-Control": "no-cache",
                            "X-REQUEST-ID": X(),
                            "Accept-Encoding": "gzip",
                            "user-agent": o
                          }
                        };
                        $.get(ag, function () {
                          {
                            var aj = i(g().mark(function al(am, an, ao) {
                              {
                                return g().wrap(function (aq) {
                                  {
                                    for (;;) {
                                      switch (aq.prev = aq.next) {
                                        case 0:
                                          try {
                                            {
                                              am ? (console.log("".concat(JSON.stringify(am))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ae(JSON.parse(ao));
                                            }
                                          } catch (au) {
                                            {
                                              $.logErr(au, an);
                                            }
                                          } finally {
                                            {
                                              ae();
                                            }
                                          }
                                        case 1:
                                        case "end":
                                          return aq.stop();
                                      }
                                    }
                                  }
                                }, al);
                              }
                            }));
                            return function (am, an, ao) {
                              {
                                return aj.apply(this, arguments);
                              }
                            };
                          }
                        }());
                      }
                    }));
                  case 1:
                  case "end":
                    return ac.stop();
                }
              }
            }
          }, a9);
        }
      }));
      return D.apply(this, arguments);
    }
  }
  function E(a7) {
    {
      return F.apply(this, arguments);
    }
  }
  function F() {
    F = i(g().mark(function a8(a9) {
      {
        var aa;
        return g().wrap(function (ac) {
          {
            for (;;) {
              switch (ac.prev = ac.next) {
                case 0:
                  aa = V();
                  return ac.abrupt("return", new Promise(function (ae) {
                    {
                      var ag = {
                        url: "https://passport.tmuyun.com".concat(a9),
                        headers: {
                          Connection: "Keep-Alive",
                          "X-REQUEST-ID": aa.uuid,
                          "X-SIGNATURE": aa.signature,
                          "Cache-Control": "no-cache",
                          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                          "Accept-Encoding": "gzip",
                          "user-agent": o
                        },
                        body: aa.body
                      };
                      $.post(ag, function () {
                        {
                          var aj = i(g().mark(function ak(al, am, an) {
                            return g().wrap(function (aq) {
                              {
                                for (;;) {
                                  switch (aq.prev = aq.next) {
                                    case 0:
                                      try {
                                        {
                                          al ? (console.log("".concat(JSON.stringify(al))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ae(JSON.parse(an));
                                        }
                                      } catch (at) {
                                        {
                                          $.logErr(at, am);
                                        }
                                      } finally {
                                        {
                                          ae();
                                        }
                                      }
                                    case 1:
                                    case "end":
                                      return aq.stop();
                                  }
                                }
                              }
                            }, ak);
                          }));
                          return function (al, am, an) {
                            {
                              return aj.apply(this, arguments);
                            }
                          };
                        }
                      }());
                    }
                  }));
                case 2:
                case "end":
                  return ac.stop();
              }
            }
          }
        }, a8);
      }
    }));
    return F.apply(this, arguments);
  }
  function G(a7) {
    return H.apply(this, arguments);
  }
  function H() {
    H = i(g().mark(function a7(a8) {
      var aa;
      return g().wrap(function (ab) {
        for (;;) {
          switch (ab.prev = ab.next) {
            case 0:
              aa = W(a8);
              return ab.abrupt("return", new Promise(function (ac) {
                var ae = {
                  url: "https://vapp.taizhou.com.cn".concat(a8),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": aa.time,
                    "X-SESSION-ID": x,
                    "X-REQUEST-ID": aa.uuid,
                    "X-SIGNATURE": aa.signature,
                    "X-TENANT-ID": n,
                    "X-ACCOUNT-ID": t,
                    "Cache-Control": "no-cache",
                    "Accept-Encoding": "gzip",
                    "user-agent": p
                  }
                };
                $.get(ae, function () {
                  var ag = i(g().mark(function ah(ai, aj, ak) {
                    return g().wrap(function (am) {
                      for (;;) {
                        switch (am.prev = am.next) {
                          case 0:
                            if (am.prev = 0, !ai) {
                              am.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ai)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            am.next = 9;
                            break;
                          case 6:
                            am.next = 8;
                            return $.wait(2000);
                          case 8:
                            ac(JSON.parse(ak));
                          case 9:
                            am.next = 14;
                            break;
                          case 11:
                            am.prev = 11;
                            am.t0 = am.catch(0);
                            $.logErr(am.t0, aj);
                          case 14:
                            am.prev = 14;
                            ac();
                            return am.finish(14);
                          case 17:
                          case "end":
                            return am.stop();
                        }
                      }
                    }, ah, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ai, aj, ak) {
                    return ag.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return ab.stop();
          }
        }
      }, a7);
    }));
    return H.apply(this, arguments);
  }
  function I(a7, a8) {
    return J.apply(this, arguments);
  }
  function J() {
    J = i(g().mark(function a7(a8, a9) {
      var ab;
      return g().wrap(function (ac) {
        for (;;) {
          switch (ac.prev = ac.next) {
            case 0:
              ab = W(a8);
              return ac.abrupt("return", new Promise(function (ae) {
                var ag = {
                  url: "https://vapp.taizhou.com.cn".concat(a8),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": ab.time,
                    "X-SESSION-ID": x,
                    "X-REQUEST-ID": ab.uuid,
                    "X-SIGNATURE": ab.signature,
                    "X-TENANT-ID": n,
                    "X-ACCOUNT-ID": t,
                    "Cache-Control": "no-cache",
                    "Accept-Encoding": "gzip",
                    "user-agent": p
                  },
                  body: a9
                };
                $.post(ag, function () {
                  var ai = i(g().mark(function aj(ak, al, am) {
                    return g().wrap(function (ao) {
                      for (;;) {
                        switch (ao.prev = ao.next) {
                          case 0:
                            if (ao.prev = 0, !ak) {
                              ao.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ak)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ao.next = 9;
                            break;
                          case 6:
                            ao.next = 8;
                            return $.wait(2000);
                          case 8:
                            ae(JSON.parse(am));
                          case 9:
                            ao.next = 14;
                            break;
                          case 11:
                            ao.prev = 11;
                            ao.t0 = ao.catch(0);
                            $.logErr(ao.t0, al);
                          case 14:
                            ao.prev = 14;
                            ae();
                            return ao.finish(14);
                          case 17:
                          case "end":
                            return ao.stop();
                        }
                      }
                    }, aj, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ak, al, am) {
                    return ai.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return ac.stop();
          }
        }
      }, a7);
    }));
    return J.apply(this, arguments);
  }
  function K(a7) {
    return L.apply(this, arguments);
  }
  function L() {
    L = i(g().mark(function a8(a9) {
      return g().wrap(function (ab) {
        for (;;) {
          switch (ab.prev = ab.next) {
            case 0:
              return ab.abrupt("return", new Promise(function (ad) {
                var ae = {
                  url: "https://xmt.taizhou.com.cn".concat(a9),
                  headers: {
                    Connection: "Keep-Alive",
                    Accept: "*/*",
                    Cookie: r,
                    "Sec-Fetch-Site": "same-origin",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://xmt.taizhou.com.cn/readingLuck-v2/",
                    "X-Requested-With": "com.shangc.tiennews.taizhou",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;6.0.2;native_app;6.10.0"
                  }
                };
                $.get(ae, function () {
                  var ag = i(g().mark(function ah(ai, aj, ak) {
                    return g().wrap(function (am) {
                      for (;;) {
                        switch (am.prev = am.next) {
                          case 0:
                            if (am.prev = 0, !ai) {
                              am.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ai)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            am.next = 16;
                            break;
                          case 6:
                            am.next = 8;
                            return $.wait(2000);
                          case 8:
                            if (200 == JSON.parse(ak).code) {
                              am.next = 13;
                              break;
                            }
                            console.log(JSON.parse(ak).msg);
                            y += "用户：".concat(u, " ").concat(JSON.parse(ak).msg, "\n");
                            ad("");
                            return am.abrupt("return");
                          case 13:
                            r = $.isNode() ? aj.headers["set-cookie"][0] : aj.headers["set-cookie"] || aj.headers["Set-Cookie"];
                            r = r.split(";")[0];
                            ad(r);
                          case 16:
                            am.next = 21;
                            break;
                          case 18:
                            am.prev = 18;
                            am.t0 = am.catch(0);
                            $.logErr(am.t0, aj);
                          case 21:
                            am.prev = 21;
                            ad();
                            return am.finish(21);
                          case 24:
                          case "end":
                            return am.stop();
                        }
                      }
                    }, ah, null, [[0, 18, 21, 24]]);
                  }));
                  return function (ai, aj, ak) {
                    return ag.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ab.stop();
          }
        }
      }, a8);
    }));
    return L.apply(this, arguments);
  }
  function M(a7) {
    return N.apply(this, arguments);
  }
  function N() {
    N = i(g().mark(function a9(aa) {
      return g().wrap(function (ab) {
        for (;;) {
          switch (ab.prev = ab.next) {
            case 0:
              return ab.abrupt("return", new Promise(function (ad) {
                var ae = {
                  url: "https://xmt.taizhou.com.cn".concat(aa),
                  headers: {
                    Connection: "Keep-Alive",
                    Accept: "*/*",
                    Cookie: r,
                    "Sec-Fetch-Site": "same-origin",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://xmt.taizhou.com.cn/readingLuck-v2/",
                    "X-Requested-With": "com.shangc.tiennews.taizhou",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;6.0.2;native_app;6.10.0"
                  }
                };
                $.get(ae, function () {
                  var ag = i(g().mark(function ah(ai, aj, ak) {
                    return g().wrap(function (al) {
                      for (;;) {
                        switch (al.prev = al.next) {
                          case 0:
                            if (al.prev = 0, !ai) {
                              al.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ai)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            al.next = 9;
                            break;
                          case 6:
                            al.next = 8;
                            return $.wait(2000);
                          case 8:
                            ad(JSON.parse(ak));
                          case 9:
                            al.next = 14;
                            break;
                          case 11:
                            al.prev = 11;
                            al.t0 = al.catch(0);
                            $.logErr(al.t0, aj);
                          case 14:
                            al.prev = 14;
                            ad();
                            return al.finish(14);
                          case 17:
                          case "end":
                            return al.stop();
                        }
                      }
                    }, ah, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ai, aj, ak) {
                    return ag.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ab.stop();
          }
        }
      }, a9);
    }));
    return N.apply(this, arguments);
  }
  function O(a7) {
    return P.apply(this, arguments);
  }
  function P() {
    P = i(g().mark(function a7(a8) {
      return g().wrap(function (aa) {
        for (;;) {
          switch (aa.prev = aa.next) {
            case 0:
              return aa.abrupt("return", new Promise(function (ac) {
                var ae = {
                  url: "https://srv-app.taizhou.com.cn".concat(a8),
                  headers: {
                    Connection: "Keep-Alive",
                    Accept: "*/*",
                    "Sec-Fetch-Site": "same-origin",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    cookie: s,
                    Referer: "https://xmt.taizhou.com.cn/readingLuck-v1/",
                    "X-Requested-With": "com.shangc.tiennews.taizhou",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;6.0.2;native_app;6.10.0"
                  }
                };
                $.get(ae, function () {
                  var ag = i(g().mark(function ah(ai, aj, ak) {
                    return g().wrap(function (al) {
                      for (;;) {
                        switch (al.prev = al.next) {
                          case 0:
                            if (al.prev = 0, !ai) {
                              al.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ai)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            al.next = 11;
                            break;
                          case 6:
                            al.next = 8;
                            return $.wait(2000);
                          case 8:
                            s = $.isNode() ? aj.headers["set-cookie"][0] : aj.headers["set-cookie"] || aj.headers["Set-Cookie"];
                            s = s.split(";")[0];
                            ac(s);
                          case 11:
                            al.next = 16;
                            break;
                          case 13:
                            al.prev = 13;
                            al.t0 = al.catch(0);
                            $.logErr(al.t0, aj);
                          case 16:
                            al.prev = 16;
                            ac();
                            return al.finish(16);
                          case 19:
                          case "end":
                            return al.stop();
                        }
                      }
                    }, ah, null, [[0, 13, 16, 19]]);
                  }));
                  return function (ai, aj, ak) {
                    return ag.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return aa.stop();
          }
        }
      }, a7);
    }));
    return P.apply(this, arguments);
  }
  function Q(a7) {
    return R.apply(this, arguments);
  }
  function R() {
    R = i(g().mark(function a7(a8) {
      return g().wrap(function (aa) {
        for (;;) {
          switch (aa.prev = aa.next) {
            case 0:
              return aa.abrupt("return", new Promise(function (ab) {
                var ad = {
                  url: "https://srv-app.taizhou.com.cn".concat(a8),
                  headers: {
                    Connection: "Keep-Alive",
                    Accept: "*/*",
                    "Sec-Fetch-Site": "same-origin",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    cookie: s,
                    Referer: "https://xmt.taizhou.com.cn/readingLuck-v1/",
                    "X-Requested-With": "com.shangc.tiennews.taizhou",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;6.0.2;native_app;6.10.0"
                  }
                };
                $.get(ad, function () {
                  var af = i(g().mark(function ag(ah, ai, aj) {
                    return g().wrap(function (al) {
                      for (;;) {
                        switch (al.prev = al.next) {
                          case 0:
                            if (al.prev = 0, !ah) {
                              al.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ah)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            al.next = 9;
                            break;
                          case 6:
                            al.next = 8;
                            return $.wait(2000);
                          case 8:
                            ab(JSON.parse(aj));
                          case 9:
                            al.next = 14;
                            break;
                          case 11:
                            al.prev = 11;
                            al.t0 = al.catch(0);
                            $.logErr(al.t0, ai);
                          case 14:
                            al.prev = 14;
                            ab();
                            return al.finish(14);
                          case 17:
                          case "end":
                            return al.stop();
                        }
                      }
                    }, ag, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ah, ai, aj) {
                    return af.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return aa.stop();
          }
        }
      }, a7);
    }));
    return R.apply(this, arguments);
  }
  function S(a7, a8) {
    return T.apply(this, arguments);
  }
  function T() {
    T = i(g().mark(function a8(a9, aa) {
      return g().wrap(function (ac) {
        for (;;) {
          switch (ac.prev = ac.next) {
            case 0:
              return ac.abrupt("return", new Promise(function (ae) {
                var ag = {
                  url: "https://srv-app.taizhou.com.cn".concat(a9),
                  headers: {
                    Connection: "Keep-Alive",
                    Accept: "*/*",
                    "Content-type": "application/x-www-form-urlencoded",
                    "Sec-Fetch-Site": "same-origin",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    cookie: s,
                    Referer: "https://xmt.taizhou.com.cn/readingLuck-v1/",
                    "X-Requested-With": "com.shangc.tiennews.taizhou",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;6.0.2;native_app;6.10.0"
                  },
                  body: aa
                };
                $.post(ag, function () {
                  var ah = i(g().mark(function ai(aj, ak, al) {
                    return g().wrap(function (an) {
                      for (;;) {
                        switch (an.prev = an.next) {
                          case 0:
                            if (an.prev = 0, !aj) {
                              an.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(aj)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            an.next = 9;
                            break;
                          case 6:
                            an.next = 8;
                            return $.wait(2000);
                          case 8:
                            ae(JSON.parse(al));
                          case 9:
                            an.next = 14;
                            break;
                          case 11:
                            an.prev = 11;
                            an.t0 = an.catch(0);
                            $.logErr(an.t0, ak);
                          case 14:
                            an.prev = 14;
                            ae();
                            return an.finish(14);
                          case 17:
                          case "end":
                            return an.stop();
                        }
                      }
                    }, ai, null, [[0, 11, 14, 17]]);
                  }));
                  return function (aj, ak, al) {
                    return ah.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ac.stop();
          }
        }
      }, a8);
    }));
    return T.apply(this, arguments);
  }
  function U(a7) {
    var a8 = l.loadSM2();
    return a8.doEncrypt(a7, "04A50803A27F000D6B310607EBA2A1C899E82872C0B538CA41DB6F0183B4C7E164DAFC6946ABF93C8AF1C0AD96D0E770D29264EF9F907DDBAE97A2A0BB1036D4AC", 1);
  }
  function V() {
    var af = new (l.loadJSEncrypt())();
    af.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB");
    v = af.encrypt(v);
    var ac = X();
    var ad = "client_id=".concat(w, "&password=").concat(v, "&phone_number=").concat(u);
    var ae = "post%%/web/oauth/credential_auth?".concat(ad, "%%").concat(ac, "%%");
    ad = "client_id=".concat(w, "&password=").concat(encodeURIComponent(v), "&phone_number=").concat(u);
    CryptoJS = l.createCryptoJS();
    var a9 = CryptoJS.HmacSHA256(ae, m);
    var aa = CryptoJS.enc.Hex.stringify(a9);
    var ab = {
      uuid: ac,
      signature: aa,
      body: ad
    };
    return ab;
  }
  function W(a7) {
    var a8 = X();
    var a9 = Date.now();
    a7.indexOf("?") > 0 && (a7 = a7.substring(0, a7.indexOf("?")));
    CryptoJS = l.createCryptoJS();
    var aa = CryptoJS.SHA256("".concat(a7, "&&").concat(x, "&&").concat(a8, "&&").concat(a9, "&&").concat(z, "&&").concat(n)).toString();
    var ab = {
      uuid: a8,
      time: a9,
      signature: aa
    };
    return ab;
  }
  function X() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (a7) {
      var a8 = 16 * Math.random() | 0;
      var a9 = "x" === a7 ? a8 : 3 & a8 | 8;
      return a9.toString(16);
    });
  }
  function Y() {
    var a7 = new Date();
    var a8 = a7.getFullYear();
    var a9 = String(a7.getMonth() + 1).padStart(2, "0");
    var aa = String(a7.getDate()).padStart(2, "0");
    return "".concat(a8).concat(a9).concat(aa);
  }
  function Z() {
    var a7 = "6.0.2";
    var a8 = X();
    var a9 = a0(["M1903F2A", "M2001J2E", "M2001J2C", "M2001J1E", "M2001J1C", "M2002J9E", "M2011K2C", "M2102K1C", "M2101K9C", "2107119DC", "2201123C", "2112123AC", "2201122C", "2211133C", "2210132C", "2304FPN6DC", "23127PN0CC", "24031PN0DC", "23090RA98C", "2312DRA50C", "2312CRAD3C", "2312DRAABC", "22101316UCP", "22101316C"]);
    var aa = "Xiaomi " + a9;
    var ab = "Android";
    var ac = "".concat(ab.toUpperCase(), ";").concat("11", ";").concat(w, ";").concat(a7, ";1.0;null;").concat(a9);
    var ad = "".concat(a7, ";").concat(a8, ";").concat(aa, ";").concat(ab, ";").concat("11", ";").concat("xiaomi", ";").concat("6.10.0");
    var ae = {
      ua: ac,
      commonUa: ad,
      uuid: a8
    };
    return ae;
  }
  function a0(a7) {
    return a7[Math.floor(Math.random() * a7.length)];
  }
  function a1() {
    return a2.apply(this, arguments);
  }
  function a2() {
    a2 = i(g().mark(function a8() {
      var a9;
      return g().wrap(function aa(ab) {
        for (;;) {
          switch (ab.prev = ab.next) {
            case 0:
              if (a9 = $.getdata("Utils_Code") || "", !a9 || !Object.keys(a9).length) {
                ab.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(a9);
              return ab.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return ab.abrupt("return", new Promise(function () {
                var ad = i(g().mark(function ae(af) {
                  return g().wrap(function ah(ai) {
                    for (;;) {
                      switch (ai.prev = ai.next) {
                        case 0:
                          $.getScript("".concat(k, "/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js")).then(function (aj) {
                            $.setdata(aj, "Utils_Code");
                            eval(aj);
                            console.log("✅ Utils加载成功, 请继续");
                            af(creatUtils());
                          });
                        case 1:
                        case "end":
                          return ai.stop();
                      }
                    }
                  }, ae);
                }));
                return function (af) {
                  return ad.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return ab.stop();
          }
        }
      }, a8);
    }));
    return a2.apply(this, arguments);
  }
  function a3() {
    return a4.apply(this, arguments);
  }
  function a4() {
    a4 = i(g().mark(function a7() {
      return g().wrap(function (a9) {
        for (;;) {
          switch (a9.prev = a9.next) {
            case 0:
              return a9.abrupt("return", new Promise(function (ab) {
                var ad = {
                  url: "https://fastly.jsdelivr.net/gh/xzxxn777/Surge@main/Utils/Notice.json"
                };
                $.get(ad, function () {
                  var ae = i(g().mark(function af(ag, ah, ai) {
                    return g().wrap(function (ak) {
                      for (;;) {
                        switch (ak.prev = ak.next) {
                          case 0:
                            try {
                              ag ? (console.log("".concat(JSON.stringify(ag))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : console.log(JSON.parse(ai).notice);
                            } catch (al) {
                              $.logErr(al, ah);
                            } finally {
                              ab();
                            }
                          case 1:
                          case "end":
                            return ak.stop();
                        }
                      }
                    }, af);
                  }));
                  return function (ag, ah, ai) {
                    return ae.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a9.stop();
          }
        }
      }, a7);
    }));
    return a4.apply(this, arguments);
  }
  function a5(a7) {
    return a6.apply(this, arguments);
  }
  function a6() {
    a6 = i(g().mark(function a8(a9) {
      return g().wrap(function (ac) {
        for (;;) {
          switch (ac.prev = ac.next) {
            case 0:
              if (!$.isNode()) {
                ac.next = 5;
                break;
              }
              ac.next = 3;
              return notify.sendNotify($.name, a9);
            case 3:
              ac.next = 6;
              break;
            case 5:
              $.msg($.name, "", a9);
            case 6:
            case "end":
              return ac.stop();
          }
        }
      }, a8);
    }));
    return a6.apply(this, arguments);
  }
  i(g().mark(function a7() {
    return g().wrap(function (a9) {
      for (;;) {
        switch (a9.prev = a9.next) {
          case 0:
            a9.next = 2;
            return a3();
          case 2:
            a9.next = 4;
            return A();
          case 4:
          case "end":
            return a9.stop();
        }
      }
    }, a7);
  }))().catch(function (a8) {
    $.log(a8);
  }).finally(function () {
    $.done({});
  });
})();
function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      return new Promise((e, i) => {
        s.call(this, t, (t, s, o) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.logLevels = {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3
      };
      this.logLevelPrefixs = {
        debug: "[DEBUG] ",
        info: "[INFO] ",
        warn: "[WARN] ",
        error: "[ERROR] "
      };
      this.logLevel = "info";
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    getEnv() {
      return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : undefined;
    }
    isNode() {
      return "Node.js" === this.getEnv();
    }
    isQuanX() {
      return "Quantumult X" === this.getEnv();
    }
    isSurge() {
      return "Surge" === this.getEnv();
    }
    isLoon() {
      return "Loon" === this.getEnv();
    }
    isShadowrocket() {
      return "Shadowrocket" === this.getEnv();
    }
    isStash() {
      return "Stash" === this.getEnv();
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null, ...s) {
      try {
        return JSON.stringify(t, ...s);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      if (this.getdata(t)) {
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      }
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return false;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let o = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        o = o ? 1 * o : 20;
        o = e && e.timeout ? e.timeout : o;
        const [r, a] = i.split("@");
        const n = {
          url: `http://${a}/v1/scripting/evaluate`,
          body: {
            script_text: t,
            mock_type: "cron",
            timeout: o
          },
          headers: {
            "X-Key": r,
            Accept: "*/*"
          },
          timeout: o
        };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile);
        const e = this.path.resolve(process.cwd(), this.dataFile);
        const s = this.fs.existsSync(t);
        const i = !s && this.fs.existsSync(e);
        if (!s && !i) {
          return {};
        }
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile);
        const e = this.path.resolve(process.cwd(), this.dataFile);
        const s = this.fs.existsSync(t);
        const i = !s && this.fs.existsSync(e);
        const o = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, o) : i ? this.fs.writeFileSync(e, o) : this.fs.writeFileSync(t, o);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let o = t;
      for (const t of i) if (o = Object(o)[t], undefined === o) {
        return s;
      }
      return o;
    }
    lodash_set(t, e, s) {
      Object(t) !== t || (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s);
      return t;
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t);
        const o = s ? this.getval(s) : "";
        if (o) {
          try {
            const t = JSON.parse(o);
            e = t ? this.lodash_get(t, i, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = false;
      if (/^@/.test(e)) {
        const [, i, o] = /^@(.*?)\.(.*?)$/.exec(e);
        const r = this.getval(i);
        const a = i ? "null" === r ? null : r || "{}" : "{}";
        try {
          const e = JSON.parse(a);
          this.lodash_set(e, o, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const r = {};
          this.lodash_set(r, o, t);
          s = this.setval(JSON.stringify(r), i);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(t);
        case "Quantumult X":
          return $prefs.valueForKey(t);
        case "Node.js":
          this.data = this.loaddata();
          return this.data[t];
        default:
          return this.data && this.data[t] || null;
      }
    }
    setval(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(t, e);
        case "Quantumult X":
          return $prefs.setValueForKey(t, e);
        case "Node.js":
          this.data = this.loaddata();
          this.data[e] = t;
          this.writedata();
          return true;
        default:
          return this.data && this.data[e] || null;
      }
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, t && (t.headers = t.headers ? t.headers : {}, undefined === t.headers.cookie && undefined === t.headers.Cookie && undefined === t.cookieJar && (t.cookieJar = this.ckjar)));
    }
    get(t, e = () => {}) {
      switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), undefined === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = false), this.isQuanX() && (t.opts ? t.opts.redirection = false : t.opts = {
        redirection: false
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": false
          }));
          $httpClient.get(t, (t, s, i) => {
            !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, i);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: false
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            }, r, a);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let s = require("iconv-lite");
          this.initGotEnv(t);
          this.got(t).on("redirect", (t, e) => {
            try {
              if (t.headers["set-cookie"]) {
                const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                s && this.ckjar.setCookieSync(s, null);
                e.cookieJar = this.ckjar;
              }
            } catch (t) {
              this.logErr(t);
            }
          }).then(t => {
            const {
              statusCode: i,
              statusCode: o,
              headers: r,
              rawBody: a
            } = t;
            const n = s.decode(a, this.encoding);
            e(null, {
              status: i,
              statusCode: o,
              headers: r,
              rawBody: a,
              body: n
            }, n);
          }, t => {
            const {
              message: i,
              response: o
            } = t;
            e(i, o, o && s.decode(o.rawBody, this.encoding));
          });
          break;
      }
    }
    post(t, e = () => {}) {
      const s = t.method ? t.method.toLocaleLowerCase() : "post";
      switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), undefined === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = false), this.isQuanX() && (t.opts ? t.opts.redirection = false : t.opts = {
        redirection: false
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": false
          }));
          $httpClient[s](t, (t, s, i) => {
            !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, i);
          });
          break;
        case "Quantumult X":
          t.method = s;
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: false
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            }, r, a);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let i = require("iconv-lite");
          this.initGotEnv(t);
          const {
            url: o,
            ...r
          } = t;
          this.got[s](o, r).then(t => {
            const {
              statusCode: s,
              statusCode: o,
              headers: r,
              rawBody: a
            } = t;
            const n = i.decode(a, this.encoding);
            e(null, {
              status: s,
              statusCode: o,
              headers: r,
              rawBody: a,
              body: n
            }, n);
          }, t => {
            const {
              message: s,
              response: o
            } = t;
            e(s, o, o && i.decode(o.rawBody, this.encoding));
          });
          break;
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    queryStr(t) {
      let e = "";
      for (const s in t) {
        let i = t[s];
        null != i && "" !== i && ("object" == typeof i && (i = JSON.stringify(i)), e += `${s}=${i}&`);
      }
      e = e.substring(0, e.length - 1);
      return e;
    }
    msg(e = t, s = "", i = "", o = {}) {
      const r = t => {
        const {
          $open: e,
          $copy: s,
          $media: i,
          $mediaMime: o
        } = t;
        switch (typeof t) {
          case undefined:
            return t;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                return {
                  url: t
                };
              case "Loon":
              case "Shadowrocket":
                return t;
              case "Quantumult X":
                return {
                  "open-url": t
                };
              case "Node.js":
                return;
            }
          case "object":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              case "Shadowrocket":
              default:
                {
                  const r = {};
                  let a = t.openUrl || t.url || t["open-url"] || e;
                  a && Object.assign(r, {
                    action: "open-url",
                    url: a
                  });
                  let n = t["update-pasteboard"] || t.updatePasteboard || s;
                  if (n && Object.assign(r, {
                    action: "clipboard",
                    text: n
                  }), i) {
                    let t;
                    let e;
                    let s;
                    if (i.startsWith("http")) {
                      t = i;
                    } else {
                      if (i.startsWith("data:")) {
                        const [t] = i.split(";");
                        const [, o] = i.split(",");
                        e = o;
                        s = t.replace("data:", "");
                      } else {
                        e = i;
                        s = (t => {
                          const e = {
                            JVBERi0: "application/pdf",
                            R0lGODdh: "image/gif",
                            R0lGODlh: "image/gif",
                            iVBORw0KGgo: "image/png",
                            "/9j/": "image/jpg"
                          };
                          for (var s in e) if (0 === t.indexOf(s)) {
                            return e[s];
                          }
                          return null;
                        })(i);
                      }
                    }
                    Object.assign(r, {
                      "media-url": t,
                      "media-base64": e,
                      "media-base64-mime": o ?? s
                    });
                  }
                  Object.assign(r, {
                    "auto-dismiss": t["auto-dismiss"],
                    sound: t.sound
                  });
                  return r;
                }
              case "Loon":
                {
                  const s = {};
                  let o = t.openUrl || t.url || t["open-url"] || e;
                  o && Object.assign(s, {
                    openUrl: o
                  });
                  let r = t.mediaUrl || t["media-url"];
                  i?.startsWith("http") && (r = i);
                  r && Object.assign(s, {
                    mediaUrl: r
                  });
                  console.log(JSON.stringify(s));
                  return s;
                }
              case "Quantumult X":
                {
                  const o = {};
                  let r = t["open-url"] || t.url || t.openUrl || e;
                  r && Object.assign(o, {
                    "open-url": r
                  });
                  let a = t["media-url"] || t.mediaUrl;
                  i?.startsWith("http") && (a = i);
                  a && Object.assign(o, {
                    "media-url": a
                  });
                  let n = t["update-pasteboard"] || t.updatePasteboard || s;
                  n && Object.assign(o, {
                    "update-pasteboard": n
                  });
                  console.log(JSON.stringify(o));
                  return o;
                }
              case "Node.js":
                return;
            }
          default:
            return;
        }
      };
      if (!this.isMute) {
        switch (this.getEnv()) {
          case "Surge":
          case "Loon":
          case "Stash":
          case "Shadowrocket":
          default:
            $notification.post(e, s, i, r(o));
            break;
          case "Quantumult X":
            $notify(e, s, i, r(o));
            break;
          case "Node.js":
            break;
        }
      }
      if (!this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    debug(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.debug && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.debug}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    info(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.info && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.info}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    warn(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.warn && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.warn}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    error(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.error && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.error}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.map(t => t ?? String(t)).join(this.logSeparator));
    }
    logErr(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", `❗️${this.name}, 错误!`, e, t);
          break;
        case "Node.js":
          this.log("", `❗️${this.name}, 错误!`, e, undefined !== t.message ? t.message : t, t.stack);
          break;
      }
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = (new Date().getTime() - this.startTime) / 1000;
      switch (this.log("", `🔔${this.name}, 结束! 🕛 ${e} 秒`), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(t);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(t, e);
}