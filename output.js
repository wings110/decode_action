//Thu May 01 2025 05:18:32 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const $ = new Env("望潮");
const notify = $.isNode() ? require("../sendNotify") : "";
(() => {
  function b(ao) {
    {
      b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (ar) {
        {
          return typeof ar;
        }
      } : function (ar) {
        {
          return ar && "function" == typeof Symbol && ar.constructor === Symbol && ar !== Symbol.prototype ? "symbol" : typeof ar;
        }
      };
      return b(ao);
    }
  }
  function c(ao, ap) {
    {
      var ar = "undefined" != typeof Symbol && ao[Symbol.iterator] || ao["@@iterator"];
      if (!ar) {
        {
          if (Array.isArray(ao) || (ar = d(ao)) || ap && ao && "number" == typeof ao.length) {
            {
              ar && (ao = ar);
              var as = 0;
              var at = function () {};
              return {
                s: at,
                n: function () {
                  {
                    var az = {
                      done: true
                    };
                    return as >= ao.length ? az : {
                      done: false,
                      value: ao[as++]
                    };
                  }
                },
                e: function (ay) {
                  {
                    throw ay;
                  }
                },
                f: at
              };
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
      }
      var au;
      var av = true;
      var aw = false;
      return {
        s: function () {
          {
            ar = ar.call(ao);
          }
        },
        n: function () {
          {
            var aA = ar.next();
            av = aA.done;
            return aA;
          }
        },
        e: function (aA) {
          {
            aw = true;
            au = aA;
          }
        },
        f: function () {
          {
            try {
              {
                av || null == ar.return || ar.return();
              }
            } finally {
              {
                if (aw) {
                  throw au;
                }
              }
            }
          }
        }
      };
    }
  }
  function d(ao, ap) {
    {
      if (ao) {
        {
          if ("string" == typeof ao) {
            return f(ao, ap);
          }
          var aq = {}.toString.call(ao).slice(8, -1);
          "Object" === aq && ao.constructor && (aq = ao.constructor.name);
          return "Map" === aq || "Set" === aq ? Array.from(ao) : "Arguments" === aq || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(aq) ? f(ao, ap) : undefined;
        }
      }
    }
  }
  function f(ao, ap) {
    {
      (null == ap || ap > ao.length) && (ap = ao.length);
      for (var aq = 0, ar = Array(ap); aq < ap; aq++) {
        ar[aq] = ao[aq];
      }
      return ar;
    }
  }
  function g() {
    "use strict";

    g = function () {
      {
        return aq;
      }
    };
    var ap;
    var aq = {
      wrap: az,
      isGeneratorFunction: function (aY) {
        {
          var aZ = "function" == typeof aY && aY.constructor;
          return !!aZ && (aZ === aH || "GeneratorFunction" === (aZ.displayName || aZ.name));
        }
      },
      mark: function (aY) {
        {
          Object.setPrototypeOf ? Object.setPrototypeOf(aY, aI) : (aY.__proto__ = aI, ay(aY, ax, "GeneratorFunction"));
          aY.prototype = Object.create(aM);
          return aY;
        }
      },
      awrap: function (aY) {
        {
          var aZ = {
            __await: aY
          };
          return aZ;
        }
      },
      AsyncIterator: aO,
      async: function (aY, aZ, b0, b1, b2) {
        {
          undefined === b2 && (b2 = Promise);
          var b4 = new aO(az(aY, aZ, b0, b1), b2);
          return aq.isGeneratorFunction(aZ) ? b4 : b4.next().then(function (b6) {
            {
              return b6.done ? b6.value : b4.next();
            }
          });
        }
      }
    };
    var ar = Object.prototype;
    var as = ar.hasOwnProperty;
    var at = Object.defineProperty || function (aV, aW, aX) {
      {
        aV[aW] = aX.value;
      }
    };
    var au = "function" == typeof Symbol ? Symbol : {};
    var av = au.iterator || "@@iterator";
    var aw = au.asyncIterator || "@@asyncIterator";
    var ax = au.toStringTag || "@@toStringTag";
    function ay(aV, aW, aX) {
      {
        var aY = {
          value: aX,
          enumerable: true,
          configurable: true,
          writable: true
        };
        Object.defineProperty(aV, aW, aY);
        return aV[aW];
      }
    }
    try {
      {
        ay({}, "");
      }
    } catch (aW) {
      {
        ay = function (aY, aZ, b0) {
          return aY[aZ] = b0;
        };
      }
    }
    function az(aY, aZ, b0, b1) {
      {
        var b2 = aZ && aZ.prototype instanceof aG ? aZ : aG;
        var b3 = Object.create(b2.prototype);
        var b4 = new aT(b1 || []);
        at(b3, "_invoke", {
          value: aP(aY, b0, b4)
        });
        return b3;
      }
    }
    function aA(aY, aZ, b0) {
      {
        try {
          {
            return {
              type: "normal",
              arg: aY.call(aZ, b0)
            };
          }
        } catch (b4) {
          {
            var b2 = {
              type: "throw",
              arg: b4
            };
            return b2;
          }
        }
      }
    }
    var aB = "suspendedStart";
    var aC = "suspendedYield";
    var aD = "executing";
    var aE = "completed";
    var aF = {};
    function aG() {}
    function aH() {}
    function aI() {}
    var aJ = {};
    ay(aJ, av, function () {
      return this;
    });
    var aK = Object.getPrototypeOf;
    var aL = aK && aK(aK(aU([])));
    aL && aL !== ar && as.call(aL, av) && (aJ = aL);
    aI.prototype = aG.prototype = Object.create(aJ);
    var aM = aI.prototype;
    function aN(aY) {
      {
        ["next", "throw", "return"].forEach(function (b0) {
          {
            ay(aY, b0, function (b3) {
              {
                return this._invoke(b0, b3);
              }
            });
          }
        });
      }
    }
    function aO(aY, aZ) {
      {
        function b3(b4, b5, b6, b7) {
          {
            var b9 = aA(aY[b4], aY, b5);
            if ("throw" !== b9.type) {
              {
                var ba = b9.arg;
                var bb = ba.value;
                return bb && "object" == b(bb) && as.call(bb, "__await") ? aZ.resolve(bb.__await).then(function (bc) {
                  {
                    b3("next", bc, b6, b7);
                  }
                }, function (bc) {
                  {
                    b3("throw", bc, b6, b7);
                  }
                }) : aZ.resolve(bb).then(function (bc) {
                  {
                    ba.value = bc;
                    b6(ba);
                  }
                }, function (bc) {
                  return b3("throw", bc, b6, b7);
                });
              }
            }
            b7(b9.arg);
          }
        }
        var b1;
        at(this, "_invoke", {
          value: function (b4, b5) {
            {
              function b8() {
                {
                  return new aZ(function (ba, bb) {
                    {
                      b3(b4, b5, ba, bb);
                    }
                  });
                }
              }
              return b1 = b1 ? b1.then(b8, b8) : b8();
            }
          }
        });
      }
    }
    function aP(aY, aZ, b0) {
      {
        var b2 = aB;
        return function (b3, b4) {
          {
            if (b2 === aD) {
              throw Error("Generator is already running");
            }
            if (b2 === aE) {
              {
                if ("throw" === b3) {
                  throw b4;
                }
                var b6 = {
                  value: ap,
                  done: true
                };
                return b6;
              }
            }
            for (b0.method = b3, b0.arg = b4;;) {
              {
                var b7 = b0.delegate;
                if (b7) {
                  {
                    var b8 = aQ(b7, b0);
                    if (b8) {
                      {
                        if (b8 === aF) {
                          continue;
                        }
                        return b8;
                      }
                    }
                  }
                }
                if ("next" === b0.method) {
                  b0.sent = b0._sent = b0.arg;
                } else {
                  if ("throw" === b0.method) {
                    {
                      if (b2 === aB) {
                        throw b2 = aE, b0.arg;
                      }
                      b0.dispatchException(b0.arg);
                    }
                  } else {
                    "return" === b0.method && b0.abrupt("return", b0.arg);
                  }
                }
                b2 = aD;
                var b9 = aA(aY, aZ, b0);
                if ("normal" === b9.type) {
                  {
                    if (b2 = b0.done ? aE : aC, b9.arg === aF) {
                      continue;
                    }
                    var ba = {
                      value: b9.arg,
                      done: b0.done
                    };
                    return ba;
                  }
                }
                "throw" === b9.type && (b2 = aE, b0.method = "throw", b0.arg = b9.arg);
              }
            }
          }
        };
      }
    }
    function aQ(aY, aZ) {
      {
        var b0 = aZ.method;
        var b1 = aY.iterator[b0];
        if (b1 === ap) {
          aZ.delegate = null;
          "throw" === b0 && aY.iterator.return && (aZ.method = "return", aZ.arg = ap, aQ(aY, aZ), "throw" === aZ.method) || "return" !== b0 && (aZ.method = "throw", aZ.arg = new TypeError("The iterator does not provide a '" + b0 + "' method"));
          return aF;
        }
        var b2 = aA(b1, aY.iterator, aZ.arg);
        if ("throw" === b2.type) {
          aZ.method = "throw";
          aZ.arg = b2.arg;
          aZ.delegate = null;
          return aF;
        }
        var b3 = b2.arg;
        return b3 ? b3.done ? (aZ[aY.resultName] = b3.value, aZ.next = aY.nextLoc, "return" !== aZ.method && (aZ.method = "next", aZ.arg = ap), aZ.delegate = null, aF) : b3 : (aZ.method = "throw", aZ.arg = new TypeError("iterator result is not an object"), aZ.delegate = null, aF);
      }
    }
    function aR(aY) {
      {
        var b1 = {
          tryLoc: aY[0]
        };
        1 in aY && (b1.catchLoc = aY[1]);
        2 in aY && (b1.finallyLoc = aY[2], b1.afterLoc = aY[3]);
        this.tryEntries.push(b1);
      }
    }
    function aS(aY) {
      {
        var aZ = aY.completion || {};
        aZ.type = "normal";
        delete aZ.arg;
        aY.completion = aZ;
      }
    }
    function aT(aY) {
      {
        var aZ = {
          tryLoc: "root"
        };
        this.tryEntries = [aZ];
        aY.forEach(aR, this);
        this.reset(true);
      }
    }
    function aU(aY) {
      {
        if (aY || "" === aY) {
          {
            var b0 = aY[av];
            if (b0) {
              return b0.call(aY);
            }
            if ("function" == typeof aY.next) {
              return aY;
            }
            if (!isNaN(aY.length)) {
              {
                var b1 = -1;
                var b2 = function b4() {
                  {
                    for (; ++b1 < aY.length;) {
                      if (as.call(aY, b1)) {
                        b4.value = aY[b1];
                        b4.done = false;
                        return b4;
                      }
                    }
                    b4.value = ap;
                    b4.done = true;
                    return b4;
                  }
                };
                return b2.next = b2;
              }
            }
          }
        }
        throw new TypeError(b(aY) + " is not iterable");
      }
    }
    aH.prototype = aI;
    at(aM, "constructor", {
      value: aI,
      configurable: true
    });
    at(aI, "constructor", {
      value: aH,
      configurable: true
    });
    aH.displayName = ay(aI, ax, "GeneratorFunction");
    aN(aO.prototype);
    ay(aO.prototype, aw, function () {
      {
        return this;
      }
    });
    aN(aM);
    ay(aM, ax, "Generator");
    ay(aM, av, function () {
      {
        return this;
      }
    });
    ay(aM, "toString", function () {
      return "[object Generator]";
    });
    aq.keys = function (aY) {
      {
        var aZ = Object(aY);
        var b0 = [];
        for (var b1 in aZ) b0.push(b1);
        b0.reverse();
        return function b3() {
          {
            for (; b0.length;) {
              {
                var b5 = b0.pop();
                if (b5 in aZ) {
                  b3.value = b5;
                  b3.done = false;
                  return b3;
                }
              }
            }
            b3.done = true;
            return b3;
          }
        };
      }
    };
    aq.values = aU;
    aT.prototype = {
      constructor: aT,
      reset: function (aY) {
        {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = ap, this.done = false, this.delegate = null, this.method = "next", this.arg = ap, this.tryEntries.forEach(aS), !aY) {
            for (var aZ in this) "t" === aZ.charAt(0) && as.call(this, aZ) && !isNaN(+aZ.slice(1)) && (this[aZ] = ap);
          }
        }
      },
      stop: function () {
        {
          this.done = true;
          var aY = this.tryEntries[0].completion;
          if ("throw" === aY.type) {
            throw aY.arg;
          }
          return this.rval;
        }
      },
      dispatchException: function (aY) {
        {
          if (this.done) {
            throw aY;
          }
          var b0 = this;
          function b7(b8, b9) {
            {
              b3.type = "throw";
              b3.arg = aY;
              b0.next = b8;
              b9 && (b0.method = "next", b0.arg = ap);
              return !!b9;
            }
          }
          for (var b1 = this.tryEntries.length - 1; b1 >= 0; --b1) {
            {
              var b2 = this.tryEntries[b1];
              var b3 = b2.completion;
              if ("root" === b2.tryLoc) {
                return b7("end");
              }
              if (b2.tryLoc <= this.prev) {
                {
                  var b4 = as.call(b2, "catchLoc");
                  var b5 = as.call(b2, "finallyLoc");
                  if (b4 && b5) {
                    {
                      if (this.prev < b2.catchLoc) {
                        return b7(b2.catchLoc, true);
                      }
                      if (this.prev < b2.finallyLoc) {
                        return b7(b2.finallyLoc);
                      }
                    }
                  } else {
                    if (b4) {
                      {
                        if (this.prev < b2.catchLoc) {
                          return b7(b2.catchLoc, true);
                        }
                      }
                    } else {
                      {
                        if (!b5) {
                          throw Error("try statement without catch or finally");
                        }
                        if (this.prev < b2.finallyLoc) {
                          return b7(b2.finallyLoc);
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      abrupt: function (aY, aZ) {
        {
          for (var b2 = this.tryEntries.length - 1; b2 >= 0; --b2) {
            {
              var b3 = this.tryEntries[b2];
              if (b3.tryLoc <= this.prev && as.call(b3, "finallyLoc") && this.prev < b3.finallyLoc) {
                {
                  var b4 = b3;
                  break;
                }
              }
            }
          }
          b4 && ("break" === aY || "continue" === aY) && b4.tryLoc <= aZ && aZ <= b4.finallyLoc && (b4 = null);
          var b5 = b4 ? b4.completion : {};
          b5.type = aY;
          b5.arg = aZ;
          return b4 ? (this.method = "next", this.next = b4.finallyLoc, aF) : this.complete(b5);
        }
      },
      complete: function (aY, aZ) {
        {
          if ("throw" === aY.type) {
            throw aY.arg;
          }
          "break" === aY.type || "continue" === aY.type ? this.next = aY.arg : "return" === aY.type ? (this.rval = this.arg = aY.arg, this.method = "return", this.next = "end") : "normal" === aY.type && aZ && (this.next = aZ);
          return aF;
        }
      },
      finish: function (aY) {
        {
          for (var b1 = this.tryEntries.length - 1; b1 >= 0; --b1) {
            {
              var b2 = this.tryEntries[b1];
              if (b2.finallyLoc === aY) {
                this.complete(b2.completion, b2.afterLoc);
                aS(b2);
                return aF;
              }
            }
          }
        }
      },
      catch: function (aY) {
        {
          for (var aZ = this.tryEntries.length - 1; aZ >= 0; --aZ) {
            {
              var b0 = this.tryEntries[aZ];
              if (b0.tryLoc === aY) {
                {
                  var b1 = b0.completion;
                  if ("throw" === b1.type) {
                    {
                      var b2 = b1.arg;
                      aS(b0);
                    }
                  }
                  return b2;
                }
              }
            }
          }
          throw Error("illegal catch attempt");
        }
      },
      delegateYield: function (aY, aZ, b0) {
        {
          this.delegate = {
            iterator: aU(aY),
            resultName: aZ,
            nextLoc: b0
          };
          "next" === this.method && (this.arg = ap);
          return aF;
        }
      }
    };
    return aq;
  }
  function h(ao, ap, aq, ar, as, at, au) {
    {
      try {
        {
          var aw = ao[at](au);
          var ax = aw.value;
        }
      } catch (az) {
        {
          return void aq(az);
        }
      }
      aw.done ? ap(ax) : Promise.resolve(ax).then(ar, as);
    }
  }
  function i(ao) {
    return function () {
      var aq = this;
      var ar = arguments;
      return new Promise(function (as, at) {
        var au = ao.apply(aq, ar);
        function av(ax) {
          {
            h(au, as, at, av, aw, "next", ax);
          }
        }
        function aw(ax) {
          {
            h(au, as, at, av, aw, "throw", ax);
          }
        }
        av(undefined);
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
  var w = "";
  var x = "";
  var y = "10019";
  var z = "";
  var A = "";
  var B = "";
  var C = "";
  var D = "";
  var E = "FR*r!isE5W";
  function F() {
    {
      return G.apply(this, arguments);
    }
  }
  function G() {
    G = i(g().mark(function aq() {
      {
        var as;
        var at;
        var au;
        var av;
        var aw;
        var ax;
        var ay;
        var az;
        var aA;
        var aB;
        var aC;
        var aD;
        var aE;
        var aF;
        var aG;
        var aH;
        var aI;
        var aJ;
        var aK;
        var aL;
        var aM;
        var aN;
        var aO;
        var aP;
        var aQ;
        var aR;
        var aS;
        var aT;
        var aU;
        var aV;
        var aW;
        var aX;
        var aY;
        var aZ;
        var b0;
        var b1;
        var b2;
        var b3;
        var b4;
        var b5;
        var b6;
        var b7;
        var b8;
        var b9;
        var ba;
        var bb;
        var bc;
        var bd;
        return g().wrap(function (be) {
          {
            for (;;) {
              switch (be.prev = be.next) {
                case 0:
                  if (j) {
                    {
                      be.next = 5;
                      break;
                    }
                  }
                  console.log("先去boxjs填写账号密码");
                  be.next = 4;
                  return am("先去boxjs填写账号密码");
                case 4:
                  return be.abrupt("return");
                case 5:
                  be.next = 7;
                  return ai();
                case 7:
                  l = be.sent;
                  as = j.split(" ");
                  at = c(as);
                  be.prev = 10;
                  at.s();
                case 12:
                  if ((au = at.n()).done) {
                    {
                      be.next = 219;
                      break;
                    }
                  }
                  av = au.value;
                  console.log("随机生成UA");
                  aw = ag();
                  o = aw.ua;
                  p = aw.commonUa;
                  q = aw.uuid;
                  console.log(o);
                  console.log(p);
                  u = av.split("&")[0];
                  v = av.split("&")[1];
                  w = av.split("&")[2];
                  x = av.split("&")[3] || u;
                  console.log("用户：".concat(u, "开始任务"));
                  console.log("获取sessionId");
                  be.next = 29;
                  return N("/api/account/init");
                case 29:
                  ax = be.sent;
                  z = ax.data.session.id;
                  console.log(z);
                  console.log("获取signature_key");
                  be.next = 35;
                  return H("/web/init?client_id=".concat(y));
                case 35:
                  ay = be.sent;
                  m = ay.data.client.signature_key;
                  console.log(m);
                  console.log("获取code");
                  be.next = 41;
                  return J("/web/oauth/credential_auth");
                case 41:
                  if (az = be.sent, az.data) {
                    {
                      be.next = 45;
                      break;
                    }
                  }
                  console.log(az.message);
                  return be.abrupt("continue", 217);
                case 45:
                  aA = az.data.authorization_code.code;
                  console.log(aA);
                  console.log("登录");
                  be.next = 50;
                  return N("/api/zbtxz/login", "check_token=&code=".concat(aA, "&token=&type=-1&union_id="));
                case 50:
                  aB = be.sent;
                  console.log("登录成功");
                  t = aB.data.session.account_id;
                  z = aB.data.session.id;
                  be.next = 56;
                  return L("/api/app_feature_switch/list");
                case 56:
                  aC = be.sent;
                  console.log("进入app：".concat(aC.message));
                  console.log("————————————");
                  console.log("每日签到");
                  be.next = 62;
                  return R("/auth/userLogin", {
                    accountId: t,
                    sessionId: z,
                    q: "bcuABCdvYzEJodimBMvIjKjDQ5CiVGO2yL2Tm66bWYU=",
                    tenantCode: "xsb_wangchao"
                  });
                case 62:
                  aD = be.sent;
                  A = aD.data.token;
                  be.next = 66;
                  return P("/activity/signin?deviceId=".concat(q, "&sessionId=").concat(z));
                case 66:
                  aE = be.sent;
                  console.log("签到结果：".concat(aE.message));
                  be.next = 70;
                  return P("/activity/getFixSigninInfo");
                case 70:
                  if (aF = be.sent, !(aF.data.fixSigninDate.length > 0)) {
                    {
                      be.next = 80;
                      break;
                    }
                  }
                  aG = "";
                  aH = c(aF.data.fixSigninDate);
                  try {
                    {
                      for (aH.s(); !(aI = aH.n()).done;) {
                        aJ = aI.value;
                        aG += aJ + ",";
                      }
                    }
                  } catch (bn) {
                    aH.e(bn);
                  } finally {
                    {
                      aH.f();
                    }
                  }
                  aG = aG.substring(0, aG.length - 1);
                  be.next = 78;
                  return P("/activity/fixSignin?deviceId=".concat(q, "&sessionId=").concat(z, "&fixSigninDate=").concat(aG));
                case 78:
                  aK = be.sent;
                  console.log("补签结果：".concat(aK.message));
                case 80:
                  be.next = 82;
                  return P("/activity/getUserActivityInfo?startTime=2025-03-15&endTime=2029-03-31&deviceId=".concat(q, "&ytoken="));
                case 82:
                  aL = be.sent;
                  aM = c(aL.data.h5ActivityExtraRewardList);
                  be.prev = 84;
                  aM.s();
                case 86:
                  if ((aN = aM.n()).done) {
                    {
                      be.next = 147;
                      break;
                    }
                  }
                  if (aO = aN.value, "已完成" == aO.completionDegree) {
                    {
                      be.next = 90;
                      break;
                    }
                  }
                  return be.abrupt("continue", 145);
                case 90:
                  be.next = 92;
                  return P("/activity/getLotteryLink?rewardId=".concat(aO.rewardId, "&type=").concat(aO.signinType));
                case 92:
                  if (aP = be.sent, aP.data) {
                    {
                      be.next = 97;
                      break;
                    }
                  }
                  be.next = 96;
                  return P("/activity/getLotteryLink?rewardId=".concat(aO.rewardId, "&type=2"));
                case 96:
                  aP = be.sent;
                case 97:
                  be.next = 99;
                  return V("/api/auth/userLogin", {
                    accountId: t,
                    sessionId: z,
                    q: decodeURIComponent(aP.data.split("q=")[1]),
                    tenantCode: "xsb_wangchao"
                  });
                case 99:
                  aQ = be.sent;
                  B = aQ.data.token;
                  aR = aQ.data.thirdId;
                  be.next = 104;
                  return T("/activity/lottery/frontPageNum?activityId=".concat(aR));
                case 104:
                  aS = be.sent;
                  console.log("抽奖id：".concat(aR, " 剩余抽奖次数：").concat(aS.data.remainPrizeNum));
                  aT = 0;
                case 107:
                  if (!(aT < aS.data.remainPrizeNum)) {
                    {
                      be.next = 115;
                      break;
                    }
                  }
                  var bg = {
                    activityId: aR,
                    clientId: q
                  };
                  be.next = 110;
                  return V("/h5/activity/lottery/userActivityLottery", bg);
                case 110:
                  aU = be.sent;
                  1 == aU.data.isPrize ? (console.log("抽奖获得：".concat(aU.data.prizeName)), D += "用户：".concat(u, " 抽奖获得：").concat(aU.data.prizeName, "\n")) : 0 == aU.data.isPrize ? console.log("未中奖") : console.log(JSON.stringify(aU));
                case 112:
                  aT++;
                  be.next = 107;
                  break;
                case 115:
                  be.next = 117;
                  return T("/activity/lottery/accountPrizeRecord/userPrizeRecord?activityId=".concat(aR));
                case 117:
                  if (aV = be.sent, aW = /\?u=([^"]*)/, aX = JSON.stringify(aV).match(aW), !aX) {
                    {
                      be.next = 144;
                      break;
                    }
                  }
                  be.next = 123;
                  return Z("/user/auth/userLogin", {
                    u: decodeURIComponent(aX[1]),
                    accountId: t,
                    sessionId: z
                  });
                case 123:
                  aY = be.sent;
                  C = aY.data.token;
                  be.next = 127;
                  return X("/redBag/getFundsDetail?fundsChannelType=0");
                case 127:
                  if (aZ = be.sent, aZ.data.account) {
                    {
                      be.next = 133;
                      break;
                    }
                  }
                  be.next = 131;
                  return X("/redBag/saveAliPayAccount?userName=".concat(w, "&account=").concat(x));
                case 131:
                  b0 = be.sent;
                  console.log("绑定支付宝：".concat(b0.message));
                case 133:
                  be.next = 135;
                  return X("/redBag/getWalletInfo");
                case 135:
                  if (b1 = be.sent, console.log("钱包余额：".concat(b1.data.aliPayTotalPrice)), !(b1.data.aliPayTotalPrice > 0)) {
                    {
                      be.next = 142;
                      break;
                    }
                  }
                  be.next = 140;
                  return X("/redBag/createTrans?price=".concat(b1.data.aliPayTotalPrice, "&fundsChannelType=0&yToken=0&deviceId=").concat(q));
                case 140:
                  b2 = be.sent;
                  console.log("提现：".concat(b2.message));
                case 142:
                  be.next = 145;
                  break;
                case 144:
                  console.log("获取钱包id失败");
                case 145:
                  be.next = 86;
                  break;
                case 147:
                  be.next = 152;
                  break;
                case 149:
                  be.prev = 149;
                  be.t0 = be.catch(84);
                  aM.e(be.t0);
                case 152:
                  be.prev = 152;
                  aM.f();
                  return be.finish(152);
                case 155:
                  console.log("————————————");
                  console.log("阅读抽奖");
                  r = "";
                  console.log("获取登录cookie");
                  be.next = 161;
                  return a1("/prod-api/user-read/app/login?id=".concat(t, "&sessionId=").concat(z, "&deviceId=").concat(q));
                case 161:
                  if (r = be.sent, r) {
                    {
                      be.next = 164;
                      break;
                    }
                  }
                  return be.abrupt("continue", 217);
                case 164:
                  console.log(r);
                  be.next = 167;
                  return a3("/prod-api/user-read/list/".concat(af()));
                case 167:
                  b3 = be.sent;
                  b4 = c(b3.data.articleIsReadList);
                  be.prev = 169;
                  b4.s();
                case 171:
                  if ((b5 = b4.n()).done) {
                    {
                      be.next = 187;
                      break;
                    }
                  }
                  b6 = b5.value;
                  console.log("文章：".concat(b6.title));
                  be.next = 176;
                  return L("/api/article/detail?id=".concat(b6.newsId));
                case 176:
                  be.sent;
                  be.next = 179;
                  return L("/api/article/read_time?channel_article_id=".concat(b6.newsId, "&is_end=true&read_time=7934"));
                case 179:
                  be.sent;
                  b7 = JSON.stringify({
                    timestamp: Date.now(),
                    articleId: b6.id,
                    accountId: t
                  });
                  be.next = 183;
                  return a3("/prod-api/already-read/article/new?signature=".concat(ab(b7)), b7);
                case 183:
                  b8 = be.sent;
                  console.log("阅读：".concat(b8.msg));
                case 185:
                  be.next = 171;
                  break;
                case 187:
                  be.next = 192;
                  break;
                case 189:
                  be.prev = 189;
                  be.t1 = be.catch(169);
                  b4.e(be.t1);
                case 192:
                  be.prev = 192;
                  b4.f();
                  return be.finish(192);
                case 195:
                  be.next = 197;
                  return a3("/prod-api/user-read-count/count/".concat(af()));
                case 197:
                  if (b9 = be.sent, console.log("剩余抽奖次数：".concat(b9.data)), !(b9.data > 0)) {
                    {
                      be.next = 217;
                      break;
                    }
                  }
                  s = "";
                  be.next = 203;
                  return a5("/tzrb/user/loginWC?accountId=".concat(t, "&sessionId=").concat(z));
                case 203:
                  s = be.sent;
                  console.log("获取抽奖cookie");
                  console.log(s);
                  be.next = 208;
                  return a7("/tzrb/awardUpgrade/list?activityId=67");
                case 208:
                  ba = be.sent;
                  bb = ba.data;
                  bc = g().mark(function bA() {
                    {
                      var bC;
                      var bD;
                      return g().wrap(function (bF) {
                        {
                          for (;;) {
                            switch (bF.prev = bF.next) {
                              case 0:
                                bF.next = 2;
                                return a9("/tzrb/userAwardRecordUpgrade/saveUpdate", "activityId=67&sessionId=undefined&sig=undefined&token=undefined");
                              case 2:
                                bC = bF.sent;
                                bD = bb.findIndex(function (bG) {
                                  {
                                    return bG.id == bC.data;
                                  }
                                });
                                -1 != bD ? (console.log("抽奖获得：".concat(bb[bD].title)), D += "用户：".concat(u, " 抽奖获得：").concat(bb[bD].title, "\n")) : console.log(JSON.stringify(bC));
                              case 5:
                              case "end":
                                return bF.stop();
                            }
                          }
                        }
                      }, bA);
                    }
                  });
                  bd = 0;
                case 212:
                  if (!(bd < b9.data)) {
                    {
                      be.next = 217;
                      break;
                    }
                  }
                  return be.delegateYield(bc(), "t2", 214);
                case 214:
                  bd++;
                  be.next = 212;
                  break;
                case 217:
                  be.next = 12;
                  break;
                case 219:
                  be.next = 224;
                  break;
                case 221:
                  be.prev = 221;
                  be.t3 = be.catch(10);
                  at.e(be.t3);
                case 224:
                  be.prev = 224;
                  at.f();
                  return be.finish(224);
                case 227:
                  if (!D) {
                    {
                      be.next = 230;
                      break;
                    }
                  }
                  be.next = 230;
                  return am(D);
                case 230:
                case "end":
                  return be.stop();
              }
            }
          }
        }, aq, null, [[10, 221, 224, 227], [84, 149, 152, 155], [169, 189, 192, 195]]);
      }
    }));
    return G.apply(this, arguments);
  }
  function H(ao) {
    {
      return I.apply(this, arguments);
    }
  }
  function I() {
    {
      I = i(g().mark(function aq(ar) {
        return g().wrap(function (at) {
          {
            for (;;) {
              switch (at.prev = at.next) {
                case 0:
                  return at.abrupt("return", new Promise(function (av) {
                    {
                      var ax = {
                        url: "https://passport.tmuyun.com".concat(ar),
                        headers: {
                          Connection: "Keep-Alive",
                          "Cache-Control": "no-cache",
                          "X-REQUEST-ID": ae(),
                          "Accept-Encoding": "gzip",
                          "user-agent": o
                        }
                      };
                      $.get(ax, function () {
                        {
                          var az = i(g().mark(function aB(aC, aD, aE) {
                            return g().wrap(function (aG) {
                              {
                                for (;;) {
                                  switch (aG.prev = aG.next) {
                                    case 0:
                                      try {
                                        {
                                          aC ? (console.log("".concat(JSON.stringify(aC))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : av(JSON.parse(aE));
                                        }
                                      } catch (aI) {
                                        {
                                          $.logErr(aI, aD);
                                        }
                                      } finally {
                                        av();
                                      }
                                    case 1:
                                    case "end":
                                      return aG.stop();
                                  }
                                }
                              }
                            }, aB);
                          }));
                          return function (aC, aD, aE) {
                            {
                              return az.apply(this, arguments);
                            }
                          };
                        }
                      }());
                    }
                  }));
                case 1:
                case "end":
                  return at.stop();
              }
            }
          }
        }, aq);
      }));
      return I.apply(this, arguments);
    }
  }
  function J(ao) {
    {
      return K.apply(this, arguments);
    }
  }
  function K() {
    {
      K = i(g().mark(function ar(as) {
        {
          var au;
          return g().wrap(function (av) {
            {
              for (;;) {
                switch (av.prev = av.next) {
                  case 0:
                    au = ac();
                    return av.abrupt("return", new Promise(function (ax) {
                      {
                        var az = {
                          url: "https://passport.tmuyun.com".concat(as),
                          headers: {
                            Connection: "Keep-Alive",
                            "X-REQUEST-ID": au.uuid,
                            "X-SIGNATURE": au.signature,
                            "Cache-Control": "no-cache",
                            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                            "Accept-Encoding": "gzip",
                            "user-agent": o
                          },
                          body: au.body
                        };
                        $.post(az, function () {
                          {
                            var aC = i(g().mark(function aE(aF, aG, aH) {
                              return g().wrap(function (aK) {
                                {
                                  for (;;) {
                                    switch (aK.prev = aK.next) {
                                      case 0:
                                        try {
                                          {
                                            aF ? (console.log("".concat(JSON.stringify(aF))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ax(JSON.parse(aH));
                                          }
                                        } catch (aO) {
                                          {
                                            $.logErr(aO, aG);
                                          }
                                        } finally {
                                          {
                                            ax();
                                          }
                                        }
                                      case 1:
                                      case "end":
                                        return aK.stop();
                                    }
                                  }
                                }
                              }, aE);
                            }));
                            return function (aF, aG, aH) {
                              {
                                return aC.apply(this, arguments);
                              }
                            };
                          }
                        }());
                      }
                    }));
                  case 2:
                  case "end":
                    return av.stop();
                }
              }
            }
          }, ar);
        }
      }));
      return K.apply(this, arguments);
    }
  }
  function L(ao) {
    {
      return M.apply(this, arguments);
    }
  }
  function M() {
    M = i(g().mark(function ap(aq) {
      var as;
      return g().wrap(function (at) {
        for (;;) {
          switch (at.prev = at.next) {
            case 0:
              as = ad(aq);
              return at.abrupt("return", new Promise(function (au) {
                var aw = {
                  Connection: "Keep-Alive",
                  "X-TIMESTAMP": as.time,
                  "X-SESSION-ID": z,
                  "X-REQUEST-ID": as.uuid,
                  "X-SIGNATURE": as.signature,
                  "X-TENANT-ID": n,
                  "X-ACCOUNT-ID": t,
                  "Cache-Control": "no-cache",
                  "Accept-Encoding": "gzip",
                  "user-agent": p
                };
                var ax = {
                  url: "https://vapp.taizhou.com.cn".concat(aq),
                  headers: aw
                };
                $.get(ax, function () {
                  var az = i(g().mark(function aA(aB, aC, aD) {
                    return g().wrap(function (aF) {
                      {
                        for (;;) {
                          switch (aF.prev = aF.next) {
                            case 0:
                              if (aF.prev = 0, !aB) {
                                {
                                  aF.next = 6;
                                  break;
                                }
                              }
                              console.log("".concat(JSON.stringify(aB)));
                              console.log("".concat($.name, " API请求失败，请检查网路重试"));
                              aF.next = 9;
                              break;
                            case 6:
                              aF.next = 8;
                              return $.wait(2000);
                            case 8:
                              au(JSON.parse(aD));
                            case 9:
                              aF.next = 14;
                              break;
                            case 11:
                              aF.prev = 11;
                              aF.t0 = aF.catch(0);
                              $.logErr(aF.t0, aC);
                            case 14:
                              aF.prev = 14;
                              au();
                              return aF.finish(14);
                            case 17:
                            case "end":
                              return aF.stop();
                          }
                        }
                      }
                    }, aA, null, [[0, 11, 14, 17]]);
                  }));
                  return function (aB, aC, aD) {
                    return az.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return at.stop();
          }
        }
      }, ap);
    }));
    return M.apply(this, arguments);
  }
  function N(ao, ap) {
    return O.apply(this, arguments);
  }
  function O() {
    O = i(g().mark(function ap(aq, ar) {
      var as;
      return g().wrap(function (at) {
        for (;;) {
          switch (at.prev = at.next) {
            case 0:
              as = ad(aq);
              return at.abrupt("return", new Promise(function (av) {
                var ax = {
                  url: "https://vapp.taizhou.com.cn".concat(aq),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": as.time,
                    "X-SESSION-ID": z,
                    "X-REQUEST-ID": as.uuid,
                    "X-SIGNATURE": as.signature,
                    "X-TENANT-ID": n,
                    "X-ACCOUNT-ID": t,
                    "Cache-Control": "no-cache",
                    "Accept-Encoding": "gzip",
                    "user-agent": p
                  },
                  body: ar
                };
                $.post(ax, function () {
                  var ay = i(g().mark(function az(aA, aB, aC) {
                    return g().wrap(function (aE) {
                      for (;;) {
                        switch (aE.prev = aE.next) {
                          case 0:
                            if (aE.prev = 0, !aA) {
                              aE.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(aA)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aE.next = 9;
                            break;
                          case 6:
                            aE.next = 8;
                            return $.wait(2000);
                          case 8:
                            av(JSON.parse(aC));
                          case 9:
                            aE.next = 14;
                            break;
                          case 11:
                            aE.prev = 11;
                            aE.t0 = aE.catch(0);
                            $.logErr(aE.t0, aB);
                          case 14:
                            aE.prev = 14;
                            av();
                            return aE.finish(14);
                          case 17:
                          case "end":
                            return aE.stop();
                        }
                      }
                    }, az, null, [[0, 11, 14, 17]]);
                  }));
                  return function (aA, aB, aC) {
                    return ay.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return at.stop();
          }
        }
      }, ap);
    }));
    return O.apply(this, arguments);
  }
  function P(ao) {
    return Q.apply(this, arguments);
  }
  function Q() {
    Q = i(g().mark(function ap(aq) {
      return g().wrap(function (at) {
        for (;;) {
          switch (at.prev = at.next) {
            case 0:
              return at.abrupt("return", new Promise(function (av) {
                var aw = {
                  accept: "application/json, text/plain, */*",
                  authorization: A,
                  "sec-fetch-site": "sec-fetch-site",
                  "accept-language": "zh-CN,zh-Hans;q=0.9",
                  "sec-fetch-mode": "cors",
                  "sec-fetch-dest": "empty",
                  "user-agent": p
                };
                var ax = {
                  url: "https://act.tmlyun.com/activity-api/signin/h5".concat(aq),
                  headers: aw
                };
                $.get(ax, function () {
                  var az = i(g().mark(function aA(aB, aC, aD) {
                    return g().wrap(function (aE) {
                      for (;;) {
                        switch (aE.prev = aE.next) {
                          case 0:
                            if (aE.prev = 0, !aB) {
                              aE.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(aB)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aE.next = 9;
                            break;
                          case 6:
                            aE.next = 8;
                            return $.wait(2000);
                          case 8:
                            av(JSON.parse(aD));
                          case 9:
                            aE.next = 14;
                            break;
                          case 11:
                            aE.prev = 11;
                            aE.t0 = aE.catch(0);
                            $.logErr(aE.t0, aC);
                          case 14:
                            aE.prev = 14;
                            av();
                            return aE.finish(14);
                          case 17:
                          case "end":
                            return aE.stop();
                        }
                      }
                    }, aA, null, [[0, 11, 14, 17]]);
                  }));
                  return function (aB, aC, aD) {
                    return az.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return at.stop();
          }
        }
      }, ap);
    }));
    return Q.apply(this, arguments);
  }
  function R(ao, ap) {
    return S.apply(this, arguments);
  }
  function S() {
    S = i(g().mark(function aq(ar, as) {
      return g().wrap(function (au) {
        for (;;) {
          switch (au.prev = au.next) {
            case 0:
              return au.abrupt("return", new Promise(function (av) {
                var ax = {
                  url: "https://act.tmlyun.com/activity-api/signin/h5".concat(ar),
                  headers: {
                    "content-type": "application/json",
                    accept: "application/json, text/plain, */*",
                    authorization: A,
                    "sec-fetch-site": "sec-fetch-site",
                    "accept-language": "zh-CN,zh-Hans;q=0.9",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    "user-agent": p
                  },
                  body: JSON.stringify(as)
                };
                $.post(ax, function () {
                  var az = i(g().mark(function aA(aB, aC, aD) {
                    return g().wrap(function (aE) {
                      for (;;) {
                        switch (aE.prev = aE.next) {
                          case 0:
                            if (aE.prev = 0, !aB) {
                              aE.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(aB)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aE.next = 9;
                            break;
                          case 6:
                            aE.next = 8;
                            return $.wait(2000);
                          case 8:
                            av(JSON.parse(aD));
                          case 9:
                            aE.next = 14;
                            break;
                          case 11:
                            aE.prev = 11;
                            aE.t0 = aE.catch(0);
                            $.logErr(aE.t0, aC);
                          case 14:
                            aE.prev = 14;
                            av();
                            return aE.finish(14);
                          case 17:
                          case "end":
                            return aE.stop();
                        }
                      }
                    }, aA, null, [[0, 11, 14, 17]]);
                  }));
                  return function (aB, aC, aD) {
                    return az.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return au.stop();
          }
        }
      }, aq);
    }));
    return S.apply(this, arguments);
  }
  function T(ao) {
    return U.apply(this, arguments);
  }
  function U() {
    U = i(g().mark(function ap(aq) {
      return g().wrap(function (as) {
        for (;;) {
          switch (as.prev = as.next) {
            case 0:
              return as.abrupt("return", new Promise(function (au) {
                var av = {
                  url: "https://act.tmlyun.com/activity-api/lottery/h5".concat(aq),
                  headers: {
                    accept: "application/json, text/plain, */*",
                    authorization: B,
                    "sec-fetch-site": "sec-fetch-site",
                    "accept-language": "zh-CN,zh-Hans;q=0.9",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    "user-agent": p
                  }
                };
                $.get(av, function () {
                  var ax = i(g().mark(function ay(az, aA, aB) {
                    return g().wrap(function (aC) {
                      for (;;) {
                        switch (aC.prev = aC.next) {
                          case 0:
                            if (aC.prev = 0, !az) {
                              aC.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(az)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aC.next = 9;
                            break;
                          case 6:
                            aC.next = 8;
                            return $.wait(2000);
                          case 8:
                            au(JSON.parse(aB));
                          case 9:
                            aC.next = 14;
                            break;
                          case 11:
                            aC.prev = 11;
                            aC.t0 = aC.catch(0);
                            $.logErr(aC.t0, aA);
                          case 14:
                            aC.prev = 14;
                            au();
                            return aC.finish(14);
                          case 17:
                          case "end":
                            return aC.stop();
                        }
                      }
                    }, ay, null, [[0, 11, 14, 17]]);
                  }));
                  return function (az, aA, aB) {
                    return ax.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return as.stop();
          }
        }
      }, ap);
    }));
    return U.apply(this, arguments);
  }
  function V(ao, ap) {
    return W.apply(this, arguments);
  }
  function W() {
    W = i(g().mark(function ap(aq, ar) {
      return g().wrap(function (as) {
        for (;;) {
          switch (as.prev = as.next) {
            case 0:
              return as.abrupt("return", new Promise(function (au) {
                var aw = {
                  url: "https://act.tmlyun.com/activity-api/lottery".concat(aq),
                  headers: {
                    "content-type": "application/json",
                    accept: "application/json, text/plain, */*",
                    authorization: B,
                    "sec-fetch-site": "sec-fetch-site",
                    "accept-language": "zh-CN,zh-Hans;q=0.9",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    "user-agent": p
                  },
                  body: JSON.stringify(ar)
                };
                $.post(aw, function () {
                  var ay = i(g().mark(function az(aA, aB, aC) {
                    return g().wrap(function (aD) {
                      for (;;) {
                        switch (aD.prev = aD.next) {
                          case 0:
                            if (aD.prev = 0, !aA) {
                              aD.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(aA)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aD.next = 9;
                            break;
                          case 6:
                            aD.next = 8;
                            return $.wait(2000);
                          case 8:
                            au(JSON.parse(aC));
                          case 9:
                            aD.next = 14;
                            break;
                          case 11:
                            aD.prev = 11;
                            aD.t0 = aD.catch(0);
                            $.logErr(aD.t0, aB);
                          case 14:
                            aD.prev = 14;
                            au();
                            return aD.finish(14);
                          case 17:
                          case "end":
                            return aD.stop();
                        }
                      }
                    }, az, null, [[0, 11, 14, 17]]);
                  }));
                  return function (aA, aB, aC) {
                    return ay.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return as.stop();
          }
        }
      }, ap);
    }));
    return W.apply(this, arguments);
  }
  function X(ao) {
    return Y.apply(this, arguments);
  }
  function Y() {
    Y = i(g().mark(function ap(aq) {
      return g().wrap(function (as) {
        for (;;) {
          switch (as.prev = as.next) {
            case 0:
              return as.abrupt("return", new Promise(function (au) {
                var aw = {
                  url: "https://my.tmlyun.com/equity-api".concat(aq),
                  headers: {
                    accept: "application/json, text/plain, */*",
                    authorization: C,
                    "sec-fetch-site": "sec-fetch-site",
                    "accept-language": "zh-CN,zh-Hans;q=0.9",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    "user-agent": p
                  }
                };
                $.get(aw, function () {
                  var ay = i(g().mark(function az(aA, aB, aC) {
                    return g().wrap(function (aD) {
                      for (;;) {
                        switch (aD.prev = aD.next) {
                          case 0:
                            if (aD.prev = 0, !aA) {
                              aD.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(aA)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aD.next = 9;
                            break;
                          case 6:
                            aD.next = 8;
                            return $.wait(2000);
                          case 8:
                            au(JSON.parse(aC));
                          case 9:
                            aD.next = 14;
                            break;
                          case 11:
                            aD.prev = 11;
                            aD.t0 = aD.catch(0);
                            $.logErr(aD.t0, aB);
                          case 14:
                            aD.prev = 14;
                            au();
                            return aD.finish(14);
                          case 17:
                          case "end":
                            return aD.stop();
                        }
                      }
                    }, az, null, [[0, 11, 14, 17]]);
                  }));
                  return function (aA, aB, aC) {
                    return ay.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return as.stop();
          }
        }
      }, ap);
    }));
    return Y.apply(this, arguments);
  }
  function Z(ao, ap) {
    return a0.apply(this, arguments);
  }
  function a0() {
    a0 = i(g().mark(function ao(ap, aq) {
      return g().wrap(function (as) {
        for (;;) {
          switch (as.prev = as.next) {
            case 0:
              return as.abrupt("return", new Promise(function (at) {
                var av = {
                  url: "https://my.tmlyun.com/equity-api".concat(ap),
                  headers: {
                    "content-type": "application/json",
                    accept: "application/json, text/plain, */*",
                    authorization: C,
                    "sec-fetch-site": "sec-fetch-site",
                    "accept-language": "zh-CN,zh-Hans;q=0.9",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    "user-agent": p
                  },
                  body: JSON.stringify(aq)
                };
                $.post(av, function () {
                  var ax = i(g().mark(function ay(az, aA, aB) {
                    return g().wrap(function (aC) {
                      for (;;) {
                        switch (aC.prev = aC.next) {
                          case 0:
                            if (aC.prev = 0, !az) {
                              aC.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(az)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aC.next = 9;
                            break;
                          case 6:
                            aC.next = 8;
                            return $.wait(2000);
                          case 8:
                            at(JSON.parse(aB));
                          case 9:
                            aC.next = 14;
                            break;
                          case 11:
                            aC.prev = 11;
                            aC.t0 = aC.catch(0);
                            $.logErr(aC.t0, aA);
                          case 14:
                            aC.prev = 14;
                            at();
                            return aC.finish(14);
                          case 17:
                          case "end":
                            return aC.stop();
                        }
                      }
                    }, ay, null, [[0, 11, 14, 17]]);
                  }));
                  return function (az, aA, aB) {
                    return ax.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return as.stop();
          }
        }
      }, ao);
    }));
    return a0.apply(this, arguments);
  }
  function a1(ao) {
    return a2.apply(this, arguments);
  }
  function a2() {
    a2 = i(g().mark(function ap(aq) {
      return g().wrap(function (as) {
        for (;;) {
          switch (as.prev = as.next) {
            case 0:
              return as.abrupt("return", new Promise(function (at) {
                var av = {
                  url: "https://xmt.taizhou.com.cn".concat(aq),
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
                $.get(av, function () {
                  var ax = i(g().mark(function ay(az, aA, aB) {
                    return g().wrap(function (aC) {
                      for (;;) {
                        switch (aC.prev = aC.next) {
                          case 0:
                            if (aC.prev = 0, !az) {
                              aC.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(az)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aC.next = 16;
                            break;
                          case 6:
                            aC.next = 8;
                            return $.wait(2000);
                          case 8:
                            if (200 == JSON.parse(aB).code) {
                              aC.next = 13;
                              break;
                            }
                            console.log(JSON.parse(aB).msg);
                            D += "用户：".concat(u, " ").concat(JSON.parse(aB).msg, "\n");
                            at("");
                            return aC.abrupt("return");
                          case 13:
                            r = $.isNode() ? aA.headers["set-cookie"][0] : aA.headers["set-cookie"] || aA.headers["Set-Cookie"];
                            r = r.split(";")[0];
                            at(r);
                          case 16:
                            aC.next = 21;
                            break;
                          case 18:
                            aC.prev = 18;
                            aC.t0 = aC.catch(0);
                            $.logErr(aC.t0, aA);
                          case 21:
                            aC.prev = 21;
                            at();
                            return aC.finish(21);
                          case 24:
                          case "end":
                            return aC.stop();
                        }
                      }
                    }, ay, null, [[0, 18, 21, 24]]);
                  }));
                  return function (az, aA, aB) {
                    return ax.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return as.stop();
          }
        }
      }, ap);
    }));
    return a2.apply(this, arguments);
  }
  function a3(ao) {
    return a4.apply(this, arguments);
  }
  function a4() {
    a4 = i(g().mark(function ap(aq) {
      return g().wrap(function (ar) {
        for (;;) {
          switch (ar.prev = ar.next) {
            case 0:
              return ar.abrupt("return", new Promise(function (at) {
                var av = {
                  url: "https://xmt.taizhou.com.cn".concat(aq),
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
                $.get(av, function () {
                  var ax = i(g().mark(function ay(az, aA, aB) {
                    return g().wrap(function (aC) {
                      for (;;) {
                        switch (aC.prev = aC.next) {
                          case 0:
                            if (aC.prev = 0, !az) {
                              aC.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(az)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aC.next = 9;
                            break;
                          case 6:
                            aC.next = 8;
                            return $.wait(2000);
                          case 8:
                            at(JSON.parse(aB));
                          case 9:
                            aC.next = 14;
                            break;
                          case 11:
                            aC.prev = 11;
                            aC.t0 = aC.catch(0);
                            $.logErr(aC.t0, aA);
                          case 14:
                            aC.prev = 14;
                            at();
                            return aC.finish(14);
                          case 17:
                          case "end":
                            return aC.stop();
                        }
                      }
                    }, ay, null, [[0, 11, 14, 17]]);
                  }));
                  return function (az, aA, aB) {
                    return ax.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ar.stop();
          }
        }
      }, ap);
    }));
    return a4.apply(this, arguments);
  }
  function a5(ao) {
    return a6.apply(this, arguments);
  }
  function a6() {
    a6 = i(g().mark(function ap(aq) {
      return g().wrap(function (ar) {
        for (;;) {
          switch (ar.prev = ar.next) {
            case 0:
              return ar.abrupt("return", new Promise(function (at) {
                var av = {
                  url: "https://srv-app.taizhou.com.cn".concat(aq),
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
                $.get(av, function () {
                  var aw = i(g().mark(function ax(ay, az, aA) {
                    return g().wrap(function (aC) {
                      for (;;) {
                        switch (aC.prev = aC.next) {
                          case 0:
                            if (aC.prev = 0, !ay) {
                              aC.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ay)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aC.next = 11;
                            break;
                          case 6:
                            aC.next = 8;
                            return $.wait(2000);
                          case 8:
                            s = $.isNode() ? az.headers["set-cookie"][0] : az.headers["set-cookie"] || az.headers["Set-Cookie"];
                            s = s.split(";")[0];
                            at(s);
                          case 11:
                            aC.next = 16;
                            break;
                          case 13:
                            aC.prev = 13;
                            aC.t0 = aC.catch(0);
                            $.logErr(aC.t0, az);
                          case 16:
                            aC.prev = 16;
                            at();
                            return aC.finish(16);
                          case 19:
                          case "end":
                            return aC.stop();
                        }
                      }
                    }, ax, null, [[0, 13, 16, 19]]);
                  }));
                  return function (ay, az, aA) {
                    return aw.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ar.stop();
          }
        }
      }, ap);
    }));
    return a6.apply(this, arguments);
  }
  function a7(ao) {
    return a8.apply(this, arguments);
  }
  function a8() {
    a8 = i(g().mark(function ap(aq) {
      return g().wrap(function (as) {
        for (;;) {
          switch (as.prev = as.next) {
            case 0:
              return as.abrupt("return", new Promise(function (at) {
                var av = {
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
                };
                var aw = {
                  url: "https://srv-app.taizhou.com.cn".concat(aq),
                  headers: av
                };
                $.get(aw, function () {
                  var ay = i(g().mark(function az(aA, aB, aC) {
                    return g().wrap(function (aD) {
                      for (;;) {
                        switch (aD.prev = aD.next) {
                          case 0:
                            if (aD.prev = 0, !aA) {
                              aD.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(aA)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aD.next = 9;
                            break;
                          case 6:
                            aD.next = 8;
                            return $.wait(2000);
                          case 8:
                            at(JSON.parse(aC));
                          case 9:
                            aD.next = 14;
                            break;
                          case 11:
                            aD.prev = 11;
                            aD.t0 = aD.catch(0);
                            $.logErr(aD.t0, aB);
                          case 14:
                            aD.prev = 14;
                            at();
                            return aD.finish(14);
                          case 17:
                          case "end":
                            return aD.stop();
                        }
                      }
                    }, az, null, [[0, 11, 14, 17]]);
                  }));
                  return function (aA, aB, aC) {
                    return ay.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return as.stop();
          }
        }
      }, ap);
    }));
    return a8.apply(this, arguments);
  }
  function a9(ao, ap) {
    return aa.apply(this, arguments);
  }
  function aa() {
    aa = i(g().mark(function ao(ap, aq) {
      return g().wrap(function (as) {
        for (;;) {
          switch (as.prev = as.next) {
            case 0:
              return as.abrupt("return", new Promise(function (au) {
                var aw = {
                  url: "https://srv-app.taizhou.com.cn".concat(ap),
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
                  body: aq
                };
                $.post(aw, function () {
                  var ax = i(g().mark(function ay(az, aA, aB) {
                    return g().wrap(function (aD) {
                      for (;;) {
                        switch (aD.prev = aD.next) {
                          case 0:
                            if (aD.prev = 0, !az) {
                              aD.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(az)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aD.next = 9;
                            break;
                          case 6:
                            aD.next = 8;
                            return $.wait(2000);
                          case 8:
                            au(JSON.parse(aB));
                          case 9:
                            aD.next = 14;
                            break;
                          case 11:
                            aD.prev = 11;
                            aD.t0 = aD.catch(0);
                            $.logErr(aD.t0, aA);
                          case 14:
                            aD.prev = 14;
                            au();
                            return aD.finish(14);
                          case 17:
                          case "end":
                            return aD.stop();
                        }
                      }
                    }, ay, null, [[0, 11, 14, 17]]);
                  }));
                  return function (az, aA, aB) {
                    return ax.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return as.stop();
          }
        }
      }, ao);
    }));
    return aa.apply(this, arguments);
  }
  function ab(ao) {
    var ap = l.loadSM2();
    return ap.doEncrypt(ao, "04A50803A27F000D6B310607EBA2A1C899E82872C0B538CA41DB6F0183B4C7E164DAFC6946ABF93C8AF1C0AD96D0E770D29264EF9F907DDBAE97A2A0BB1036D4AC", 1);
  }
  function ac() {
    var ao = new (l.loadJSEncrypt())();
    ao.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB");
    v = ao.encrypt(v);
    var ap = ae();
    var aq = "client_id=".concat(y, "&password=").concat(v, "&phone_number=").concat(u);
    var ar = "post%%/web/oauth/credential_auth?".concat(aq, "%%").concat(ap, "%%");
    aq = "client_id=".concat(y, "&password=").concat(encodeURIComponent(v), "&phone_number=").concat(u);
    CryptoJS = l.createCryptoJS();
    var as = CryptoJS.HmacSHA256(ar, m);
    var at = CryptoJS.enc.Hex.stringify(as);
    var au = {
      uuid: ap,
      signature: at,
      body: aq
    };
    return au;
  }
  function ad(ao) {
    var ap = ae();
    var aq = Date.now();
    ao.indexOf("?") > 0 && (ao = ao.substring(0, ao.indexOf("?")));
    CryptoJS = l.createCryptoJS();
    var ar = CryptoJS.SHA256("".concat(ao, "&&").concat(z, "&&").concat(ap, "&&").concat(aq, "&&").concat(E, "&&").concat(n)).toString();
    var as = {
      uuid: ap,
      time: aq,
      signature: ar
    };
    return as;
  }
  function ae() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (ap) {
      var aq = 16 * Math.random() | 0;
      var ar = "x" === ap ? aq : 3 & aq | 8;
      return ar.toString(16);
    });
  }
  function af() {
    var ao = new Date();
    var ap = ao.getFullYear();
    var aq = String(ao.getMonth() + 1).padStart(2, "0");
    var ar = String(ao.getDate()).padStart(2, "0");
    return "".concat(ap).concat(aq).concat(ar);
  }
  function ag() {
    var ao = "6.0.2";
    var ap = ae();
    var aq = ah(["M1903F2A", "M2001J2E", "M2001J2C", "M2001J1E", "M2001J1C", "M2002J9E", "M2011K2C", "M2102K1C", "M2101K9C", "2107119DC", "2201123C", "2112123AC", "2201122C", "2211133C", "2210132C", "2304FPN6DC", "23127PN0CC", "24031PN0DC", "23090RA98C", "2312DRA50C", "2312CRAD3C", "2312DRAABC", "22101316UCP", "22101316C"]);
    var ar = "Xiaomi " + aq;
    var as = "Android";
    var at = "".concat(as.toUpperCase(), ";").concat("11", ";").concat(y, ";").concat(ao, ";1.0;null;").concat(aq);
    var au = "".concat(ao, ";").concat(ap, ";").concat(ar, ";").concat(as, ";").concat("11", ";").concat("xiaomi", ";").concat("6.10.0");
    var av = {
      ua: at,
      commonUa: au,
      uuid: ap
    };
    return av;
  }
  function ah(ao) {
    return ao[Math.floor(Math.random() * ao.length)];
  }
  function ai() {
    return aj.apply(this, arguments);
  }
  function aj() {
    aj = i(g().mark(function ap() {
      var aq;
      return g().wrap(function ar(as) {
        for (;;) {
          switch (as.prev = as.next) {
            case 0:
              if (aq = $.getdata("Utils_Code") || "", !aq || !Object.keys(aq).length) {
                as.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(aq);
              return as.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return as.abrupt("return", new Promise(function () {
                var av = i(g().mark(function aw(ax) {
                  return g().wrap(function ay(az) {
                    for (;;) {
                      switch (az.prev = az.next) {
                        case 0:
                          $.getScript("".concat(k, "/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js")).then(function (aB) {
                            $.setdata(aB, "Utils_Code");
                            eval(aB);
                            console.log("✅ Utils加载成功, 请继续");
                            ax(creatUtils());
                          });
                        case 1:
                        case "end":
                          return az.stop();
                      }
                    }
                  }, aw);
                }));
                return function (ax) {
                  return av.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return as.stop();
          }
        }
      }, ap);
    }));
    return aj.apply(this, arguments);
  }
  function ak() {
    return al.apply(this, arguments);
  }
  function al() {
    al = i(g().mark(function ap() {
      return g().wrap(function (aq) {
        for (;;) {
          switch (aq.prev = aq.next) {
            case 0:
              return aq.abrupt("return", new Promise(function (as) {
                var at = {
                  url: "https://fastly.jsdelivr.net/gh/xzxxn777/Surge@main/Utils/Notice.json"
                };
                $.get(at, function () {
                  var av = i(g().mark(function aw(ax, ay, az) {
                    return g().wrap(function (aA) {
                      for (;;) {
                        switch (aA.prev = aA.next) {
                          case 0:
                            try {
                              ax ? (console.log("".concat(JSON.stringify(ax))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : console.log(JSON.parse(az).notice);
                            } catch (aB) {
                              $.logErr(aB, ay);
                            } finally {
                              as();
                            }
                          case 1:
                          case "end":
                            return aA.stop();
                        }
                      }
                    }, aw);
                  }));
                  return function (ax, ay, az) {
                    return av.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return aq.stop();
          }
        }
      }, ap);
    }));
    return al.apply(this, arguments);
  }
  function am(ao) {
    return an.apply(this, arguments);
  }
  function an() {
    an = i(g().mark(function aq(ar) {
      return g().wrap(function (as) {
        for (;;) {
          switch (as.prev = as.next) {
            case 0:
              if (!$.isNode()) {
                as.next = 5;
                break;
              }
              as.next = 3;
              return notify.sendNotify($.name, ar);
            case 3:
              as.next = 6;
              break;
            case 5:
              $.msg($.name, "", ar);
            case 6:
            case "end":
              return as.stop();
          }
        }
      }, aq);
    }));
    return an.apply(this, arguments);
  }
  i(g().mark(function ao() {
    return g().wrap(function (ap) {
      for (;;) {
        switch (ap.prev = ap.next) {
          case 0:
            ap.next = 2;
            return ak();
          case 2:
            ap.next = 4;
            return F();
          case 4:
          case "end":
            return ap.stop();
        }
      }
    }, ao);
  }))().catch(function (ap) {
    $.log(ap);
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