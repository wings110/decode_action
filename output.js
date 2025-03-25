//Tue Mar 25 2025 01:22:01 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("甬派");
const notify = $.isNode() ? require("../sendNotify") : "";
(() => {
  function b(W) {
    {
      b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (Y) {
        return typeof Y;
      } : function (Y) {
        {
          return Y && "function" == typeof Symbol && Y.constructor === Symbol && Y !== Symbol.prototype ? "symbol" : typeof Y;
        }
      };
      return b(W);
    }
  }
  function c(W, X) {
    {
      var Z = "undefined" != typeof Symbol && W[Symbol.iterator] || W["@@iterator"];
      if (!Z) {
        {
          if (Array.isArray(W) || (Z = d(W)) || X && W && "number" == typeof W.length) {
            {
              Z && (W = Z);
              var a0 = 0;
              var a1 = function () {};
              return {
                s: a1,
                n: function () {
                  {
                    var a8 = {
                      done: true
                    };
                    return a0 >= W.length ? a8 : {
                      done: false,
                      value: W[a0++]
                    };
                  }
                },
                e: function (a7) {
                  {
                    throw a7;
                  }
                },
                f: a1
              };
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
      }
      var a2;
      var a3 = true;
      var a4 = false;
      return {
        s: function () {
          Z = Z.call(W);
        },
        n: function () {
          {
            var a9 = Z.next();
            a3 = a9.done;
            return a9;
          }
        },
        e: function (a8) {
          {
            a4 = true;
            a2 = a8;
          }
        },
        f: function () {
          {
            try {
              {
                a3 || null == Z.return || Z.return();
              }
            } finally {
              {
                if (a4) {
                  throw a2;
                }
              }
            }
          }
        }
      };
    }
  }
  function d(W, X) {
    {
      if (W) {
        {
          if ("string" == typeof W) {
            return f(W, X);
          }
          var Y = {}.toString.call(W).slice(8, -1);
          "Object" === Y && W.constructor && (Y = W.constructor.name);
          return "Map" === Y || "Set" === Y ? Array.from(W) : "Arguments" === Y || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Y) ? f(W, X) : undefined;
        }
      }
    }
  }
  function f(W, X) {
    {
      (null == X || X > W.length) && (X = W.length);
      for (var Y = 0, Z = Array(X); Y < X; Y++) {
        Z[Y] = W[Y];
      }
      return Z;
    }
  }
  function g() {
    "use strict";

    var W = {
      bkFMS: function (at, au) {
        return at === au;
      },
      aCFIy: "nRgGq",
      nzjZR: function (at, au) {
        return at in au;
      },
      zgTMm: "function",
      muCPs: "symbol",
      HDrWW: "FlYqk",
      CaFHK: "lkFaG",
      jsnkV: "M2001J2E",
      YDqCI: "M2001J1E",
      QSRTh: "M2001J1C",
      fJdFL: "M2002J9E",
      gSCnT: "M2011K2C",
      ZgxaT: "M2101K9C",
      nZNpM: "2107119DC",
      suwkP: "2201123C",
      LGFYr: "2112123AC",
      sQCMU: "2201122C",
      tIfNK: "2210132C",
      xqHJR: "2304FPN6DC",
      RdiQU: "23090RA98C",
      DqaUX: "2312DRA50C",
      uZtlh: "2312DRAABC",
      jHldG: "22101316C",
      ngHre: function (at) {
        return at();
      },
      FSZPm: "end",
      pBZuy: function (at, au) {
        return at < au;
      },
      shURk: function (at, au) {
        return at == au;
      },
      NhIim: function (at, au) {
        return at(au);
      },
      bcuTA: function (at, au) {
        return at + au;
      },
      IsStd: function (at, au) {
        return at !== au;
      },
      rJAcr: "NmnMi",
      IHCfP: "AoeeP",
      uYWFy: "normal",
      DhaoE: function (at, au) {
        return at !== au;
      },
      JsPXw: "ECgWZ",
      LxCAL: "ewZsk",
      iQfeX: "throw",
      YNcyG: "GtobA",
      WBCQI: function (at, au) {
        return at instanceof au;
      },
      yQrsS: function (at, au, av, aw) {
        return at(au, av, aw);
      },
      vfNDK: "IOeLX",
      ysWvI: "gKndo",
      ejNnj: function (at, au, av, aw, ax) {
        return at(au, av, aw, ax);
      },
      ITZxc: "RmlUf",
      ZdnWV: function (at, au) {
        return at === au;
      },
      CBGxE: "XGdJG",
      FSFSi: function (at) {
        return at();
      },
      jvysf: function (at, au) {
        return at(au);
      },
      mlQYo: "uvHQY",
      kRkxW: "mnqBt",
      rZkid: function (at, au) {
        return at !== au;
      },
      gWFLR: "iQFAP",
      QumTr: "dSVMP",
      fgmLA: "return",
      DxAUK: "auXHg",
      MFFGb: function (at, au) {
        return at === au;
      },
      gTEvl: "pCopk",
      wmvkV: "AtEqj",
      DNhFA: "eSpGy",
      LGKDn: "4|0|1|3|2|5",
      nolTw: function (at, au) {
        return at === au;
      },
      wZvvg: function (at, au) {
        return at === au;
      },
      XZQDL: function (at, au, av) {
        return at(au, av);
      },
      SGddF: function (at, au) {
        return at !== au;
      },
      Lssxb: function (at, au) {
        return at + au;
      },
      iDuuw: "The iterator does not provide a '",
      NEeeX: "' method",
      jBRWi: "next",
      pCaXC: function (at, au) {
        return at === au;
      },
      HwTty: function (at, au) {
        return at !== au;
      },
      AgCFs: "jFGdD",
      UvmRo: "UUJkH",
      nTygW: function (at, au) {
        return at == au;
      },
      gsGqI: function (at, au) {
        return at(au);
      },
      kVyom: function (at, au, av, aw) {
        return at(au, av, aw);
      },
      KePZP: "GeneratorFunction",
      bSzLk: "DYjgi",
      zVksc: function (at, au) {
        return at < au;
      },
      qCESZ: "jKNOK",
      cOxbM: "KERMW",
      rEZAq: "oEjvU",
      XQBYj: function (at, au) {
        return at == au;
      },
      FvpDF: function (at, au) {
        return at(au);
      },
      LOHad: function (at, au) {
        return at !== au;
      },
      CqWWa: "hAQRV",
      JGqzN: "RsYaS",
      seEXS: function (at, au) {
        return at === au;
      },
      zWJEd: function (at, au) {
        return at === au;
      },
      rVZrk: function (at, au) {
        return at(au);
      },
      dTtnW: function (at, au, av) {
        return at(au, av);
      },
      JAwSG: "try statement without catch or finally",
      vVGaH: function (at, au) {
        return at !== au;
      },
      HqCZv: "dlHTj",
      xPLlF: function (at, au) {
        return at === au;
      },
      VHAoK: function (at, au) {
        return at !== au;
      },
      OZzRd: "EbxOh",
      FsZfx: "(((.+)+)+)+$",
      NqzEs: function (at, au) {
        return at !== au;
      },
      UQRdH: "IFGlG",
      eyLNs: "eOumw",
      SeYBG: function (at, au, av, aw, ax, ay, az, aA) {
        return at(au, av, aw, ax, ay, az, aA);
      },
      bGGaJ: "nBgeu",
      OpINg: function (at, au) {
        return at === au;
      },
      jYgYq: function (at, au, av, aw, ax) {
        return at(au, av, aw, ax);
      },
      FcrQO: function (at, au) {
        return at === au;
      },
      OFbkC: "unapu",
      fgJsi: function (at, au) {
        return at !== au;
      },
      Buvcc: "vNohk",
      hhFZm: "UweAa",
      HSXwi: function (at, au) {
        return at !== au;
      },
      SdYAV: function (at, au, av) {
        return at(au, av);
      },
      ccItf: "Object",
      Cmcrt: function (at, au) {
        return at === au;
      },
      tewBO: function (at, au) {
        return at === au;
      },
      BARXX: "Set",
      uUlag: "usKDJ",
      oTJHY: "TJPXe",
      VMGuj: function (at, au) {
        return at === au;
      },
      AYNoM: "root",
      NsoNh: function (at, au) {
        return at == au;
      },
      oXkKA: function (at, au) {
        return at === au;
      },
      wqkSk: function (at, au) {
        return at === au;
      },
      ABppl: " API请求失败，请检查网路重试"
    };
    g = function () {
      return Y;
    };
    var X;
    var Y = {
      wrap: a7
    };
    var Z = Object.prototype;
    var a0 = Z.hasOwnProperty;
    var a1 = Object.defineProperty || function (at, au, av) {
      at[au] = av.value;
    };
    var a2 = "function" == typeof Symbol ? Symbol : {};
    var a3 = a2.iterator || "@@iterator";
    var a4 = a2.asyncIterator || "@@asyncIterator";
    var a5 = a2.toStringTag || "@@toStringTag";
    function a6(at, au, av) {
      {
        var aw = {
          value: av,
          enumerable: true,
          configurable: true,
          writable: true
        };
        Object.defineProperty(at, au, aw);
        return at[au];
      }
    }
    try {
      {
        a6({}, "");
      }
    } catch (au) {
      a6 = function (aw, ax, ay) {
        return aw[ax] = ay;
      };
    }
    function a7(aw, ax, ay, az) {
      {
        var aB = ax && ax.prototype instanceof ae ? ax : ae;
        var aC = Object.create(aB.prototype);
        var aD = new ar(az || []);
        a1(aC, "_invoke", {
          value: an(aw, ay, aD)
        });
        return aC;
      }
    }
    function a8(aw, ax, ay) {
      try {
        {
          return {
            type: "normal",
            arg: aw.call(ax, ay)
          };
        }
      } catch (aC) {
        {
          var aA = {
            type: "throw",
            arg: aC
          };
          return aA;
        }
      }
    }
    var a9 = "suspendedStart";
    var aa = "suspendedYield";
    var ab = "executing";
    var ac = "completed";
    var ad = {};
    function ae() {}
    function af() {}
    function ag() {}
    var ah = {};
    a6(ah, a3, function () {
      return this;
    });
    var ai = Object.getPrototypeOf;
    var aj = ai && ai(ai(as([])));
    aj && aj !== Z && a0.call(aj, a3) && (ah = aj);
    ag.prototype = ae.prototype = Object.create(ah);
    var ak = ag.prototype;
    function al(aw) {
      {
        ["next", "throw", "return"].forEach(function (ay) {
          {
            a6(aw, ay, function (aA) {
              return this._invoke(ay, aA);
            });
          }
        });
      }
    }
    function am(aw, ax) {
      {
        function aB(aC, aD, aE, aF) {
          {
            var aH = a8(aw[aC], aw, aD);
            if ("throw" !== aH.type) {
              {
                var aI = aH.arg;
                var aJ = aI.value;
                return aJ && "object" == b(aJ) && a0.call(aJ, "__await") ? ax.resolve(aJ.__await).then(function (aK) {
                  aB("next", aK, aE, aF);
                }, function (aK) {
                  {
                    aB("throw", aK, aE, aF);
                  }
                }) : ax.resolve(aJ).then(function (aK) {
                  {
                    aI.value = aK;
                    aE(aI);
                  }
                }, function (aK) {
                  return aB("throw", aK, aE, aF);
                });
              }
            }
            aF(aH.arg);
          }
        }
        var az;
        a1(this, "_invoke", {
          value: function (aC, aD) {
            {
              function aF() {
                {
                  return new ax(function (aH, aI) {
                    {
                      aB(aC, aD, aH, aI);
                    }
                  });
                }
              }
              return az = az ? az.then(aF, aF) : aF();
            }
          }
        });
      }
    }
    function an(aw, ax, ay) {
      {
        var aA = a9;
        return function (aC, aD) {
          {
            if (aA === ab) {
              throw Error("Generator is already running");
            }
            if (aA === ac) {
              {
                if ("throw" === aC) {
                  throw aD;
                }
                var aF = {
                  value: X,
                  done: true
                };
                return aF;
              }
            }
            for (ay.method = aC, ay.arg = aD;;) {
              {
                var aG = ay.delegate;
                if (aG) {
                  {
                    var aH = ao(aG, ay);
                    if (aH) {
                      {
                        if (aH === ad) {
                          continue;
                        }
                        return aH;
                      }
                    }
                  }
                }
                if ("next" === ay.method) {
                  ay.sent = ay._sent = ay.arg;
                } else {
                  if ("throw" === ay.method) {
                    {
                      if (aA === a9) {
                        throw aA = ac, ay.arg;
                      }
                      ay.dispatchException(ay.arg);
                    }
                  } else {
                    "return" === ay.method && ay.abrupt("return", ay.arg);
                  }
                }
                aA = ab;
                var aI = a8(aw, ax, ay);
                if ("normal" === aI.type) {
                  {
                    if (aA = ay.done ? ac : aa, aI.arg === ad) {
                      continue;
                    }
                    var aJ = {
                      value: aI.arg,
                      done: ay.done
                    };
                    return aJ;
                  }
                }
                "throw" === aI.type && (aA = ac, ay.method = "throw", ay.arg = aI.arg);
              }
            }
          }
        };
      }
    }
    function ao(aw, ax) {
      {
        var aC = ax.method;
        var aD = aw.iterator[aC];
        if (aD === X) {
          ax.delegate = null;
          "throw" === aC && aw.iterator.return && (ax.method = "return", ax.arg = X, ao(aw, ax), "throw" === ax.method) || "return" !== aC && (ax.method = "throw", ax.arg = new TypeError("The iterator does not provide a '" + aC + "' method"));
          return ad;
        }
        var aA = a8(aD, aw.iterator, ax.arg);
        if ("throw" === aA.type) {
          ax.method = "throw";
          ax.arg = aA.arg;
          ax.delegate = null;
          return ad;
        }
        var aB = aA.arg;
        return aB ? aB.done ? (ax[aw.resultName] = aB.value, ax.next = aw.nextLoc, "return" !== ax.method && (ax.method = "next", ax.arg = X), ax.delegate = null, ad) : aB : (ax.method = "throw", ax.arg = new TypeError("iterator result is not an object"), ax.delegate = null, ad);
      }
    }
    function ap(aw) {
      {
        var ay = {
          tryLoc: aw[0]
        };
        1 in aw && (ay.catchLoc = aw[1]);
        2 in aw && (ay.finallyLoc = aw[2], ay.afterLoc = aw[3]);
        this.tryEntries.push(ay);
      }
    }
    function aq(aw) {
      {
        var ay = aw.completion || {};
        ay.type = "normal";
        delete ay.arg;
        aw.completion = ay;
      }
    }
    function ar(aw) {
      {
        var ax = {
          tryLoc: "root"
        };
        this.tryEntries = [ax];
        aw.forEach(ap, this);
        this.reset(true);
      }
    }
    function as(aw) {
      {
        if (aw || "" === aw) {
          {
            var ay = aw[a3];
            if (ay) {
              return ay.call(aw);
            }
            if ("function" == typeof aw.next) {
              return aw;
            }
            if (!isNaN(aw.length)) {
              {
                var az = -1;
                var aA = function aB() {
                  {
                    for (; ++az < aw.length;) {
                      if (a0.call(aw, az)) {
                        aB.value = aw[az];
                        aB.done = false;
                        return aB;
                      }
                    }
                    aB.value = X;
                    aB.done = true;
                    return aB;
                  }
                };
                return aA.next = aA;
              }
            }
          }
        }
        throw new TypeError(b(aw) + " is not iterable");
      }
    }
    af.prototype = ag;
    a1(ak, "constructor", {
      value: ag,
      configurable: true
    });
    a1(ag, "constructor", {
      value: af,
      configurable: true
    });
    af.displayName = a6(ag, a5, "GeneratorFunction");
    Y.isGeneratorFunction = function (aw) {
      {
        var ax = "function" == typeof aw && aw.constructor;
        return !!ax && (ax === af || "GeneratorFunction" === (ax.displayName || ax.name));
      }
    };
    Y.mark = function (aw) {
      {
        Object.setPrototypeOf ? Object.setPrototypeOf(aw, ag) : (aw.__proto__ = ag, a6(aw, a5, "GeneratorFunction"));
        aw.prototype = Object.create(ak);
        return aw;
      }
    };
    Y.awrap = function (aw) {
      {
        var ax = {
          __await: aw
        };
        return ax;
      }
    };
    al(am.prototype);
    a6(am.prototype, a4, function () {
      return this;
    });
    Y.AsyncIterator = am;
    Y.async = function (aw, ax, ay, az, aA) {
      {
        undefined === aA && (aA = Promise);
        var aC = new am(a7(aw, ax, ay, az), aA);
        return Y.isGeneratorFunction(ax) ? aC : aC.next().then(function (aD) {
          {
            return aD.done ? aD.value : aC.next();
          }
        });
      }
    };
    al(ak);
    a6(ak, a5, "Generator");
    a6(ak, a3, function () {
      {
        return this;
      }
    });
    a6(ak, "toString", function () {
      {
        return "[object Generator]";
      }
    });
    Y.keys = function (aw) {
      {
        var ay = Object(aw);
        var az = [];
        for (var aA in ay) az.push(aA);
        az.reverse();
        return function aB() {
          {
            for (; az.length;) {
              {
                var aD = az.pop();
                if (aD in ay) {
                  aB.value = aD;
                  aB.done = false;
                  return aB;
                }
              }
            }
            aB.done = true;
            return aB;
          }
        };
      }
    };
    Y.values = as;
    ar.prototype = {
      constructor: ar,
      reset: function (aw) {
        {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = X, this.done = false, this.delegate = null, this.method = "next", this.arg = X, this.tryEntries.forEach(aq), !aw) {
            for (var ax in this) "t" === ax.charAt(0) && a0.call(this, ax) && !isNaN(+ax.slice(1)) && (this[ax] = X);
          }
        }
      },
      stop: function () {
        {
          this.done = true;
          var aw = this.tryEntries[0].completion;
          if ("throw" === aw.type) {
            throw aw.arg;
          }
          return this.rval;
        }
      },
      dispatchException: function (aw) {
        {
          if (this.done) {
            throw aw;
          }
          var ay = this;
          function aE(aF, aG) {
            {
              aB.type = "throw";
              aB.arg = aw;
              ay.next = aF;
              aG && (ay.method = "next", ay.arg = X);
              return !!aG;
            }
          }
          for (var az = this.tryEntries.length - 1; az >= 0; --az) {
            {
              var aA = this.tryEntries[az];
              var aB = aA.completion;
              if ("root" === aA.tryLoc) {
                return aE("end");
              }
              if (aA.tryLoc <= this.prev) {
                {
                  var aC = a0.call(aA, "catchLoc");
                  var aD = a0.call(aA, "finallyLoc");
                  if (aC && aD) {
                    {
                      if (this.prev < aA.catchLoc) {
                        return aE(aA.catchLoc, true);
                      }
                      if (this.prev < aA.finallyLoc) {
                        return aE(aA.finallyLoc);
                      }
                    }
                  } else {
                    if (aC) {
                      {
                        if (this.prev < aA.catchLoc) {
                          return aE(aA.catchLoc, true);
                        }
                      }
                    } else {
                      {
                        if (!aD) {
                          throw Error("try statement without catch or finally");
                        }
                        if (this.prev < aA.finallyLoc) {
                          return aE(aA.finallyLoc);
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
      abrupt: function (aw, ax) {
        {
          for (var az = this.tryEntries.length - 1; az >= 0; --az) {
            {
              var aA = this.tryEntries[az];
              if (aA.tryLoc <= this.prev && a0.call(aA, "finallyLoc") && this.prev < aA.finallyLoc) {
                {
                  var aB = aA;
                  break;
                }
              }
            }
          }
          aB && ("break" === aw || "continue" === aw) && aB.tryLoc <= ax && ax <= aB.finallyLoc && (aB = null);
          var aC = aB ? aB.completion : {};
          aC.type = aw;
          aC.arg = ax;
          return aB ? (this.method = "next", this.next = aB.finallyLoc, ad) : this.complete(aC);
        }
      },
      complete: function (aw, ax) {
        {
          if ("throw" === aw.type) {
            throw aw.arg;
          }
          "break" === aw.type || "continue" === aw.type ? this.next = aw.arg : "return" === aw.type ? (this.rval = this.arg = aw.arg, this.method = "return", this.next = "end") : "normal" === aw.type && ax && (this.next = ax);
          return ad;
        }
      },
      finish: function (aw) {
        {
          for (var ay = this.tryEntries.length - 1; ay >= 0; --ay) {
            {
              var az = this.tryEntries[ay];
              if (az.finallyLoc === aw) {
                this.complete(az.completion, az.afterLoc);
                aq(az);
                return ad;
              }
            }
          }
        }
      },
      catch: function (aw) {
        {
          for (var ax = this.tryEntries.length - 1; ax >= 0; --ax) {
            {
              var ay = this.tryEntries[ax];
              if (ay.tryLoc === aw) {
                {
                  var az = ay.completion;
                  if ("throw" === az.type) {
                    {
                      var aA = az.arg;
                      aq(ay);
                    }
                  }
                  return aA;
                }
              }
            }
          }
          throw Error("illegal catch attempt");
        }
      },
      delegateYield: function (aw, ax, ay) {
        {
          this.delegate = {
            iterator: as(aw),
            resultName: ax,
            nextLoc: ay
          };
          "next" === this.method && (this.arg = X);
          return ad;
        }
      }
    };
    return Y;
  }
  function h(W, X, Y, Z, a0, a1, a2) {
    {
      try {
        {
          var a4 = W[a1](a2);
          var a5 = a4.value;
        }
      } catch (a7) {
        return void Y(a7);
      }
      a4.done ? X(a5) : Promise.resolve(a5).then(Z, a0);
    }
  }
  function i(W) {
    return function () {
      var Y = this;
      var Z = arguments;
      return new Promise(function (a0, a1) {
        var a3 = W.apply(Y, Z);
        function a4(a6) {
          h(a3, a0, a1, a4, a5, "next", a6);
        }
        function a5(a6) {
          h(a3, a0, a1, a4, a5, "throw", a6);
        }
        a4(undefined);
      });
    };
  }
  var j = ($.isNode() ? process.env.YongPai : $.getdata("YongPai")) || "";
  window = {};
  var k = "";
  var l = "";
  var m = "";
  var n = "";
  var o = "";
  var p = "";
  var q = "";
  var r = "";
  var s = "";
  var t = "";
  var u = "";
  var v = "";
  var w = "";
  function x() {
    return y.apply(this, arguments);
  }
  function y() {
    y = i(g().mark(function W() {
      var Y;
      var Z;
      var a0;
      var a1;
      var a2;
      var a3;
      var a4;
      var a5;
      var a6;
      var a7;
      var a8;
      var a9;
      var aa;
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
      return g().wrap(function aV(aW) {
        for (;;) {
          switch (aW.prev = aW.next) {
            case 0:
              if (j) {
                {
                  aW.next = 5;
                  break;
                }
              }
              console.log("先去boxjs填写账号密码");
              aW.next = 4;
              return U("先去boxjs填写账号密码");
            case 4:
              return aW.abrupt("return");
            case 5:
              Y = j.split(" ");
              Z = c(Y);
              aW.prev = 7;
              Z.s();
            case 9:
              if ((a0 = Z.n()).done) {
                {
                  aW.next = 246;
                  break;
                }
              }
              a1 = a0.value;
              console.log("随机生成设备");
              o = a1.split("&")[0];
              p = a1.split("&")[1];
              q = a1.split("&")[2];
              r = a1.split("&")[3];
              k = a1.split("&")[4];
              a2 = O();
              k || (k = a2.deviceId);
              v = a2.model;
              console.log(k);
              console.log(v);
              console.log("用户：".concat(o, "开始任务"));
              console.log("登录");
              a3 = Date.now();
              aW.next = 27;
              return z("username=".concat(o, "&password=").concat(encodeURI(p), "&deviceId=").concat(k, "&globalDatetime=").concat(a3, "&sign=").concat(md5("globalDatetime".concat(a3, "username").concat(o, "test_123456679890123456")).toUpperCase()));
            case 27:
              if (a4 = aW.sent, 0 == a4.code) {
                {
                  aW.next = 31;
                  break;
                }
              }
              console.log(a4.message);
              return aW.abrupt("continue", 244);
            case 31:
              console.log("获取userId：".concat(a4.data.userId));
              s = a4.data.userId;
              console.log("获取name：".concat(a4.data.nickname));
              a5 = a4.data.token;
              u = a4.data.nickname;
              aW.next = 38;
              return B("userId=".concat(s, "&loginName=").concat(o, "&name=").concat(encodeURI(u), "&phone=").concat(o));
            case 38:
              if (a6 = aW.sent, 200 == a6.code) {
                {
                  aW.next = 42;
                  break;
                }
              }
              console.log(a6.message);
              return aW.abrupt("continue", 244);
            case 42:
              console.log("登录成功");
              l = a6.data;
              console.log("————————————");
              console.log("开始任务");
              a7 = true;
              a8 = true;
              a9 = true;
              aW.next = 51;
              return D("/yongpai-user/api/user/my_level?userId=".concat(s));
            case 51:
              aa = aW.sent;
              ab = c(aa.data.scoreRule);
              aW.prev = 53;
              ab.s();
            case 55:
              if ((ac = ab.n()).done) {
                {
                  aW.next = 67;
                  break;
                }
              }
              if (ad = ac.value, console.log("任务：".concat(ad.type)), ad.dayscore != ad.usedScore) {
                {
                  aW.next = 61;
                  break;
                }
              }
              console.log("任务已完成");
              return aW.abrupt("continue", 65);
            case 61:
              console.log("任务进度：".concat(ad.usedScore, "/").concat(ad.dayscore));
              "阅读新闻" == ad.type && (a7 = false);
              "点赞" == ad.type && (a8 = false);
              "分享新闻" == ad.type && (a9 = false);
            case 65:
              aW.next = 55;
              break;
            case 67:
              aW.next = 72;
              break;
            case 69:
              aW.prev = 69;
              aW.t0 = aW.catch(53);
              ab.e(aW.t0);
            case 72:
              aW.prev = 72;
              ab.f();
              return aW.finish(72);
            case 75:
              if (a7 && a8 && a9) {
                {
                  aW.next = 123;
                  break;
                }
              }
              ae = [0, 2, 20183, 20184, 4, 32];
              af = 30;
              ag = 0;
              ah = ae;
            case 79:
              if (!(ag < ah.length)) {
                {
                  aW.next = 123;
                  break;
                }
              }
              ai = ah[ag];
              aW.next = 83;
              return D("/yongpai-news/api/news/list?channelId=".concat(ai, "&currentPage=1&timestamp=0"));
            case 83:
              aj = aW.sent;
              ak = c(aj.data.content);
              aW.prev = 85;
              ak.s();
            case 87:
              if ((al = ak.n()).done) {
                {
                  aW.next = 112;
                  break;
                }
              }
              if (am = al.value, R(am.sourcetime)) {
                {
                  aW.next = 91;
                  break;
                }
              }
              return aW.abrupt("continue", 110);
            case 91:
              if (0 != af) {
                {
                  aW.next = 93;
                  break;
                }
              }
              return aW.abrupt("break", 112);
            case 93:
              if (console.log("文章：".concat(am.title)), an = am.id, a7) {
                {
                  aW.next = 100;
                  break;
                }
              }
              aW.next = 98;
              return D("/yongpai-news/api/news/detail?newsId=".concat(an, "&userId=").concat(s, "&deviceId=").concat(k));
            case 98:
              ao = aW.sent;
              console.log("阅读：".concat(ao.message));
            case 100:
              if (a8) {
                {
                  aW.next = 105;
                  break;
                }
              }
              aW.next = 103;
              return D("/yongpai-ugc/api/praise/save_news?userId=".concat(s, "&newsId=").concat(an, "&deviceId=").concat(k));
            case 103:
              ap = aW.sent;
              0 == ap.code ? (af--, console.log("点赞获得：".concat(null == ap || null === (aq = ap.data) || undefined === aq ? undefined : aq.score, "积分"))) : console.log(ap.message);
            case 105:
              if (a9) {
                {
                  aW.next = 110;
                  break;
                }
              }
              aW.next = 108;
              return D("/yongpai-ugc/api/forward/news?userId=".concat(s, "&newsId=").concat(an, "&source=4"));
            case 108:
              ar = aW.sent;
              0 == ar.code ? console.log("分享获得：".concat(null == ar ? undefined : ar.data, "积分")) : console.log(ar.message);
            case 110:
              aW.next = 87;
              break;
            case 112:
              aW.next = 117;
              break;
            case 114:
              aW.prev = 114;
              aW.t1 = aW.catch(85);
              ak.e(aW.t1);
            case 117:
              aW.prev = 117;
              ak.f();
              return aW.finish(117);
            case 120:
              ag++;
              aW.next = 79;
              break;
            case 123:
              as = "";
              aW.next = 126;
              return D("/yongpai-news/api/news/list?channelId=4&currentPage=1&timestamp=0");
            case 126:
              at = aW.sent;
              au = c(at.data.content);
              aW.prev = 128;
              au.s();
            case 130:
              if ((av = au.n()).done) {
                {
                  aW.next = 138;
                  break;
                }
              }
              if (aw = av.value, !aw.title.includes("转盘") && !aw.subtitle.includes("转盘") || !aw.keywords.includes("客户端")) {
                aW.next = 136;
                break;
              }
              console.log("抽奖活动：".concat(aw.title));
              as = aw.id;
              return aW.abrupt("break", 138);
            case 136:
              aW.next = 130;
              break;
            case 138:
              aW.next = 143;
              break;
            case 140:
              aW.prev = 140;
              aW.t2 = aW.catch(128);
              au.e(aW.t2);
            case 143:
              aW.prev = 143;
              au.f();
              return aW.finish(143);
            case 146:
              if (console.log("————————————"), console.log("阅读抽奖"), console.log("获取id"), as) {
                aW.next = 153;
                break;
              }
              console.log("未找到id");
              aW.next = 238;
              break;
            case 153:
              console.log(as);
              console.log("获取抽奖id");
              aW.next = 157;
              return D("/yongpai-news/api/news/detail?newsId=".concat(as, "&userId=").concat(s, "&deviceId=").concat(k));
            case 157:
              ax = aW.sent;
              ay = ax.data.body.match(/id=\d+/);
              ay && (n = ay[0].split("=")[1]);
              console.log(n);
              console.log("阅读登录");
              aW.next = 164;
              return F("userId=".concat(s, "&dbredirect=https://92722.activity-12.m.duiba.com.cn/hdtool/index?id=").concat(n, "&dbnewopen"));
            case 164:
              az = aW.sent;
              m = "";
              aW.next = 168;
              return H(az.data);
            case 168:
              m = aW.sent;
              console.log("获取抽奖key");
              aW.next = 172;
              return L("https://92722.activity-12.m.duiba.com.cn/hdtool/index?id=".concat(n, "&dbnewopen&from=login&spm=92722.1.1.1"));
            case 172:
              aA = aW.sent;
              aW.next = 175;
              return J("/hdtool/ajaxElement?_=".concat(Date.now()), "hdType=dev&hdToolId=&preview=false&actId=".concat(n, "&adslotId="));
            case 175:
              aB = aW.sent;
              lotteryCount = aB.element.freeLimit;
              console.log("拥有".concat(lotteryCount, "次抽奖"));
              aC = 0;
            case 179:
              if (!(aC < aB.element.freeLimit)) {
                aW.next = 238;
                break;
              }
              aW.next = 182;
              return J("/hdtool/ctoken/getTokenNew", "timestamp=".concat(Date.now(), "&activityId=").concat(n, "&activityType=hdtool&consumerId=").concat(t));
            case 182:
              aD = aW.sent;
              eval(aD.token);
              aE = window[aA];
              aW.next = 187;
              return J("/hdtool/doJoin?dpm=92722.3.1.0&activityId=".concat(n, "&_=").concat(Date.now()), "actId=".concat(n, "&oaId=").concat(n, "&activityType=hdtool&consumerId=").concat(t, "&token=").concat(aE));
            case 187:
              if (aF = aW.sent, !aF.success) {
                aW.next = 234;
                break;
              }
              if (aF.orderId) {
                aW.next = 192;
                break;
              }
              console.log(aF.message);
              return aW.abrupt("break", 238);
            case 192:
              aG = aF.orderId;
              aH = 0;
            case 194:
              if (0 != aH) {
                aW.next = 232;
                break;
              }
              aW.next = 197;
              return J("/hdtool/getOrderStatus?_=".concat(Date.now()), "orderId=".concat(aG, "&adslotId="));
            case 197:
              if (aI = aW.sent, aH = aI.result, 0 != aH) {
                aW.next = 203;
                break;
              }
              console.log(aI.message);
              aW.next = 230;
              break;
            case 203:
              if ("thanks" == aI.lottery.type && (console.log("谢谢参与"), w += "用户：".concat(o, " 抽奖获得：谢谢参与\n")), "alipay" != aI.lottery.type) {
                aW.next = 230;
                break;
              }
              for (console.log("抽奖获得支付宝红包：".concat(aI.lottery.title)), aJ = aI.lottery.link, aK = aJ.split("?")[1], aL = {}, aM = aK.split("&"), aN = 0, aO = aM.length; aN < aO; aN++) {
                aP = aM[aN].split("=");
                aL[aP[0]] = aP[1];
              }
              if (aQ = aL.recordId, !q || !r) {
                aW.next = 229;
                break;
              }
              console.log("获取兑换key");
              aW.next = 216;
              return L("https://92722.activity-12.m.duiba.com.cn/activity/takePrizeNew?recordId=".concat(aQ, "&dbnewopen"));
            case 216:
              aA = aW.sent;
              aW.next = 219;
              return J("/ctoken/getToken.do");
            case 219:
              aR = aW.sent;
              eval(aR.token);
              aS = window[aA];
              aW.next = 224;
              return J("/activity/doTakePrize", "alipay=".concat(r, "&realname=").concat(encodeURI(q), "&recordId=").concat(aQ, "&token=").concat(aS));
            case 224:
              aT = aW.sent;
              console.log(aT.message);
              w += "用户：".concat(o, " 抽奖获得：").concat(aI.lottery.title, " 领取结果：").concat(aT.message, "\n");
              aW.next = 230;
              break;
            case 229:
              console.log("请设置支付宝姓名和账号");
            case 230:
              aW.next = 194;
              break;
            case 232:
              aW.next = 235;
              break;
            case 234:
              console.log(aF.message);
            case 235:
              aC++;
              aW.next = 179;
              break;
            case 238:
              console.log("————————————");
              console.log("查询积分");
              aW.next = 242;
              return D("/yongpai-user/api/user/client?userId=".concat(s, "&deviceId=").concat(k, "&token=").concat(a5));
            case 242:
              aU = aW.sent;
              console.log("拥有积分：".concat(aU.data.score, "\n"));
            case 244:
              aW.next = 9;
              break;
            case 246:
              aW.next = 251;
              break;
            case 248:
              aW.prev = 248;
              aW.t3 = aW.catch(7);
              Z.e(aW.t3);
            case 251:
              aW.prev = 251;
              Z.f();
              return aW.finish(251);
            case 254:
              if (!w) {
                aW.next = 257;
                break;
              }
              aW.next = 257;
              return U(w);
            case 257:
            case "end":
              return aW.stop();
          }
        }
      }, W, null, [[7, 248, 251, 254], [53, 69, 72, 75], [85, 114, 117, 120], [128, 140, 143, 146]]);
    }));
    return y.apply(this, arguments);
  }
  function z(W) {
    return A.apply(this, arguments);
  }
  function A() {
    A = i(g().mark(function X(Y) {
      return g().wrap(function (a0) {
        for (;;) {
          switch (a0.prev = a0.next) {
            case 0:
              return a0.abrupt("return", new Promise(function (a1) {
                var a3 = {
                  url: "https://ypapp.cnnb.com.cn/yongpai-user/api/login2/local3?".concat(Y),
                  headers: {
                    system: "android",
                    version: "30",
                    model: v,
                    appversion: "11.0.0",
                    appbuild: "202407040",
                    deviceid: k,
                    ticket: "",
                    "accept-encoding": "gzip",
                    "user-agent": "okhttp/4.9.1"
                  }
                };
                $.get(a3, function () {
                  var a5 = i(g().mark(function a6(a7, a8, a9) {
                    return g().wrap(function (aa) {
                      for (;;) {
                        switch (aa.prev = aa.next) {
                          case 0:
                            if (aa.prev = 0, !a7) {
                              aa.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(a7)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aa.next = 9;
                            break;
                          case 6:
                            aa.next = 8;
                            return $.wait(2000);
                          case 8:
                            a1(JSON.parse(a9));
                          case 9:
                            aa.next = 14;
                            break;
                          case 11:
                            aa.prev = 11;
                            aa.t0 = aa.catch(0);
                            $.logErr(aa.t0, a8);
                          case 14:
                            aa.prev = 14;
                            a1();
                            return aa.finish(14);
                          case 17:
                          case "end":
                            return aa.stop();
                        }
                      }
                    }, a6, null, [[0, 11, 14, 17]]);
                  }));
                  return function (a7, a8, a9) {
                    return a5.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a0.stop();
          }
        }
      }, X);
    }));
    return A.apply(this, arguments);
  }
  function B(W) {
    return C.apply(this, arguments);
  }
  function C() {
    C = i(g().mark(function X(Y) {
      return g().wrap(function (Z) {
        for (;;) {
          switch (Z.prev = Z.next) {
            case 0:
              return Z.abrupt("return", new Promise(function (a1) {
                var a3 = {
                  url: "https://ypapp.cnnb.com.cn/web-nbcc/member/login?".concat(Y),
                  headers: {
                    "content-type": "application/json",
                    module: "web-member",
                    sign: md5("/member/login{loginName:".concat(o, ",name:").concat(u, ",phone:").concat(o, ",userId:").concat(s)),
                    "accept-encoding": "gzip",
                    "user-agent": "okhttp/4.9.1"
                  }
                };
                $.get(a3, function () {
                  var a5 = i(g().mark(function a6(a7, a8, a9) {
                    return g().wrap(function (aa) {
                      for (;;) {
                        switch (aa.prev = aa.next) {
                          case 0:
                            if (aa.prev = 0, !a7) {
                              aa.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(a7)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aa.next = 9;
                            break;
                          case 6:
                            aa.next = 8;
                            return $.wait(2000);
                          case 8:
                            a1(JSON.parse(a9));
                          case 9:
                            aa.next = 14;
                            break;
                          case 11:
                            aa.prev = 11;
                            aa.t0 = aa.catch(0);
                            $.logErr(aa.t0, a8);
                          case 14:
                            aa.prev = 14;
                            a1();
                            return aa.finish(14);
                          case 17:
                          case "end":
                            return aa.stop();
                        }
                      }
                    }, a6, null, [[0, 11, 14, 17]]);
                  }));
                  return function (a7, a8, a9) {
                    return a5.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return Z.stop();
          }
        }
      }, X);
    }));
    return C.apply(this, arguments);
  }
  function D(W) {
    return E.apply(this, arguments);
  }
  function E() {
    E = i(g().mark(function W(X) {
      return g().wrap(function (Z) {
        for (;;) {
          switch (Z.prev = Z.next) {
            case 0:
              return Z.abrupt("return", new Promise(function (a0) {
                var a2 = {
                  url: "https://ypapp.cnnb.com.cn".concat(X),
                  headers: {
                    system: "android",
                    version: "30",
                    model: v,
                    appversion: "11.0.0",
                    appbuild: "202407040",
                    deviceid: k,
                    ticket: l,
                    "accept-encoding": "gzip",
                    "user-agent": "okhttp/4.9.1"
                  }
                };
                $.get(a2, function () {
                  var a4 = i(g().mark(function a5(a6, a7, a8) {
                    return g().wrap(function (a9) {
                      for (;;) {
                        switch (a9.prev = a9.next) {
                          case 0:
                            if (a9.prev = 0, !a6) {
                              a9.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(a6)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            a9.next = 9;
                            break;
                          case 6:
                            a9.next = 8;
                            return $.wait(2000);
                          case 8:
                            a0(JSON.parse(a8));
                          case 9:
                            a9.next = 14;
                            break;
                          case 11:
                            a9.prev = 11;
                            a9.t0 = a9.catch(0);
                            $.logErr(a9.t0, a7);
                          case 14:
                            a9.prev = 14;
                            a0();
                            return a9.finish(14);
                          case 17:
                          case "end":
                            return a9.stop();
                        }
                      }
                    }, a5, null, [[0, 11, 14, 17]]);
                  }));
                  return function (a6, a7, a8) {
                    return a4.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return Z.stop();
          }
        }
      }, W);
    }));
    return E.apply(this, arguments);
  }
  function F(W) {
    return G.apply(this, arguments);
  }
  function G() {
    G = i(g().mark(function Y(Z) {
      return g().wrap(function (a1) {
        for (;;) {
          switch (a1.prev = a1.next) {
            case 0:
              return a1.abrupt("return", new Promise(function (a2) {
                var a4 = {
                  url: "https://ypapp.cnnb.com.cn/yongpai-user/api/duiba/autologin?".concat(Z),
                  headers: {
                    "accept-encoding": "gzip",
                    "user-agent": "okhttp/4.9.1"
                  }
                };
                $.get(a4, function () {
                  var a6 = i(g().mark(function a7(a8, a9, aa) {
                    return g().wrap(function (ab) {
                      for (;;) {
                        switch (ab.prev = ab.next) {
                          case 0:
                            if (ab.prev = 0, !a8) {
                              ab.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(a8)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ab.next = 9;
                            break;
                          case 6:
                            ab.next = 8;
                            return $.wait(2000);
                          case 8:
                            a2(JSON.parse(aa));
                          case 9:
                            ab.next = 14;
                            break;
                          case 11:
                            ab.prev = 11;
                            ab.t0 = ab.catch(0);
                            $.logErr(ab.t0, a9);
                          case 14:
                            ab.prev = 14;
                            a2();
                            return ab.finish(14);
                          case 17:
                          case "end":
                            return ab.stop();
                        }
                      }
                    }, a7, null, [[0, 11, 14, 17]]);
                  }));
                  return function (a8, a9, aa) {
                    return a6.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a1.stop();
          }
        }
      }, Y);
    }));
    return G.apply(this, arguments);
  }
  function H(W) {
    return I.apply(this, arguments);
  }
  function I() {
    I = i(g().mark(function X(Y) {
      return g().wrap(function (Z) {
        for (;;) {
          switch (Z.prev = Z.next) {
            case 0:
              return Z.abrupt("return", new Promise(function (a1) {
                var a3 = {
                  "upgrade-insecure-requests": "1",
                  "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36 agentweb/4.0.2  UCBrowser/11.6.4.950 yongpai",
                  accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                  "x-requested-with": "io.dcloud.H55BDF6BE",
                  "sec-fetch-site": "none",
                  "sec-fetch-mode": "navigate",
                  "sec-fetch-user": "?1",
                  "sec-fetch-dest": "document",
                  "accept-encoding": "gzip, deflate",
                  "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                };
                var a4 = {
                  url: "".concat(Y),
                  headers: a3,
                  followRedirect: false
                };
                $.get(a4, function () {
                  var a6 = i(g().mark(function a7(a8, a9, aa) {
                    var ab;
                    var ac;
                    return g().wrap(function (ad) {
                      for (;;) {
                        switch (ad.prev = ad.next) {
                          case 0:
                            if (ad.prev = 0, !a8) {
                              ad.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(a8)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ad.next = 10;
                            break;
                          case 6:
                            ad.next = 8;
                            return $.wait(2000);
                          case 8:
                            if ($.isNode()) {
                              for (ab = a9.headers["set-cookie"] || a9.headers["Set-Cookie"], ac = 0; ac < ab.length; ac++) {
                                m += ab[ac].split(";")[0] + ";";
                              }
                            } else {
                              m = a9.headers["set-cookie"] || a9.headers["Set-Cookie"];
                              m = N(m);
                            }
                            a1(m);
                          case 10:
                            ad.next = 15;
                            break;
                          case 12:
                            ad.prev = 12;
                            ad.t0 = ad.catch(0);
                            $.logErr(ad.t0, a9);
                          case 15:
                            ad.prev = 15;
                            a1();
                            return ad.finish(15);
                          case 18:
                          case "end":
                            return ad.stop();
                        }
                      }
                    }, a7, null, [[0, 12, 15, 18]]);
                  }));
                  return function (a8, a9, aa) {
                    return a6.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return Z.stop();
          }
        }
      }, X);
    }));
    return I.apply(this, arguments);
  }
  function J(W, X) {
    return K.apply(this, arguments);
  }
  function K() {
    K = i(g().mark(function X(Y, Z) {
      return g().wrap(function (a1) {
        for (;;) {
          switch (a1.prev = a1.next) {
            case 0:
              return a1.abrupt("return", new Promise(function (a2) {
                var a4 = {
                  url: "https://92722.activity-12.m.duiba.com.cn".concat(Y),
                  headers: {
                    accept: "application/json",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36 agentweb/4.0.2  UCBrowser/11.6.4.950 yongpai",
                    "x-requested-with": "XMLHttpRequest",
                    "content-type": "application/x-www-form-urlencoded",
                    origin: "https://92722.activity-12.m.duiba.com.cn",
                    cookie: m,
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    referer: "https://92722.activity-12.m.duiba.com.cn/hdtool/index?id=".concat(n, "&dbnewopen&from=login&spm=92722.1.1.1"),
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  },
                  body: Z
                };
                $.post(a4, function () {
                  var a6 = i(g().mark(function a7(a8, a9, aa) {
                    return g().wrap(function (ac) {
                      for (;;) {
                        switch (ac.prev = ac.next) {
                          case 0:
                            if (ac.prev = 0, !a8) {
                              ac.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(a8)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ac.next = 9;
                            break;
                          case 6:
                            ac.next = 8;
                            return $.wait(2000);
                          case 8:
                            a2(JSON.parse(aa));
                          case 9:
                            ac.next = 14;
                            break;
                          case 11:
                            ac.prev = 11;
                            ac.t0 = ac.catch(0);
                            $.logErr(ac.t0, a9);
                          case 14:
                            ac.prev = 14;
                            a2();
                            return ac.finish(14);
                          case 17:
                          case "end":
                            return ac.stop();
                        }
                      }
                    }, a7, null, [[0, 11, 14, 17]]);
                  }));
                  return function (a8, a9, aa) {
                    return a6.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a1.stop();
          }
        }
      }, X);
    }));
    return K.apply(this, arguments);
  }
  function L(W) {
    return M.apply(this, arguments);
  }
  function M() {
    M = i(g().mark(function Y(Z) {
      return g().wrap(function a1(a2) {
        for (;;) {
          switch (a2.prev = a2.next) {
            case 0:
              return a2.abrupt("return", new Promise(function (a3) {
                var a5 = {
                  accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                  "upgrade-insecure-requests": "1",
                  "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36 agentweb/4.0.2  UCBrowser/11.6.4.950 yongpai",
                  "x-requested-with": "io.dcloud.H55BDF6BE",
                  "sec-fetch-site": "none",
                  "sec-fetch-mode": "navigate",
                  "sec-fetch-user": "?1",
                  "sec-fetch-dest": "document",
                  "accept-encoding": "gzip, deflate",
                  "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                  cookie: m
                };
                var a7 = {
                  url: Z,
                  headers: a5
                };
                $.get(a7, function () {
                  var a9 = i(g().mark(function aa(ab, ac, ad) {
                    var ae;
                    var af;
                    var ag;
                    var ah;
                    return g().wrap(function ai(aj) {
                      for (;;) {
                        switch (aj.prev = aj.next) {
                          case 0:
                            if (aj.prev = 0, !ab) {
                              aj.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ab)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aj.next = 18;
                            break;
                          case 6:
                            aj.next = 8;
                            return $.wait(2000);
                          case 8:
                            ae = /<script type\b[^>]*>\s*var([\s\S]*?)<\/script>/.exec(ad)[1];
                            eval(ae);
                            af = /var\s+key\s+=\s+'([^']+)';/.exec(getDuibaToken.toString())[1];
                            console.log(af);
                            console.log("获取consumerId");
                            ag = /consumerId:'(\d+)'/;
                            ah = ad.match(ag);
                            t = ah ? ah[1] : "4136126583";
                            console.log(t);
                            a3(af);
                          case 18:
                            aj.next = 23;
                            break;
                          case 20:
                            aj.prev = 20;
                            aj.t0 = aj.catch(0);
                            $.logErr(aj.t0, ac);
                          case 23:
                            aj.prev = 23;
                            a3();
                            return aj.finish(23);
                          case 26:
                          case "end":
                            return aj.stop();
                        }
                      }
                    }, aa, null, [[0, 20, 23, 26]]);
                  }));
                  return function (ab, ac, ad) {
                    return a9.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a2.stop();
          }
        }
      }, Y);
    }));
    return M.apply(this, arguments);
  }
  function N(W) {
    var X = W.split(", ");
    var Y = X.map(function (Z) {
      var a0 = Z.split(";")[0];
      return a0.trim();
    });
    return Y.join(";");
  }
  function O() {
    var W = Q();
    var X = P(["M1903F2A", "M2001J2E", "M2001J2C", "M2001J1E", "M2001J1C", "M2002J9E", "M2011K2C", "M2102K1C", "M2101K9C", "2107119DC", "2201123C", "2112123AC", "2201122C", "2211133C", "2210132C", "2304FPN6DC", "23127PN0CC", "24031PN0DC", "23090RA98C", "2312DRA50C", "2312CRAD3C", "2312DRAABC", "22101316UCP", "22101316C"]);
    var Y = {
      deviceId: W,
      model: X
    };
    return Y;
  }
  function P(W) {
    return W[Math.floor(Math.random() * W.length)];
  }
  function Q() {
    for (var W = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : 16, X = "abcdefghijklmnopqrstuvwxyz0123456789", Y = "", Z = 0; Z < W; Z++) {
      Y += X.charAt(Math.floor(36 * Math.random()));
    }
    return Y;
  }
  function R(W) {
    var X = new Date(W);
    var Y = new Date();
    return X.getFullYear() === Y.getFullYear() && X.getMonth() === Y.getMonth() && X.getDate() === Y.getDate();
  }
  function S() {
    return T.apply(this, arguments);
  }
  function T() {
    T = i(g().mark(function W() {
      return g().wrap(function (Y) {
        for (;;) {
          switch (Y.prev = Y.next) {
            case 0:
              return Y.abrupt("return", new Promise(function (a0) {
                var a2 = {
                  url: "https://fastly.jsdelivr.net/gh/xzxxn777/Surge@main/Utils/Notice.json"
                };
                $.get(a2, function () {
                  var a3 = i(g().mark(function a4(a5, a6, a7) {
                    return g().wrap(function (a9) {
                      for (;;) {
                        switch (a9.prev = a9.next) {
                          case 0:
                            try {
                              a5 ? (console.log("".concat(JSON.stringify(a5))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : console.log(JSON.parse(a7).notice);
                            } catch (aa) {
                              $.logErr(aa, a6);
                            } finally {
                              a0();
                            }
                          case 1:
                          case "end":
                            return a9.stop();
                        }
                      }
                    }, a4);
                  }));
                  return function (a5, a6, a7) {
                    return a3.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return Y.stop();
          }
        }
      }, W);
    }));
    return T.apply(this, arguments);
  }
  function U(W) {
    return V.apply(this, arguments);
  }
  function V() {
    V = i(g().mark(function W(X) {
      return g().wrap(function (Y) {
        for (;;) {
          switch (Y.prev = Y.next) {
            case 0:
              if (!$.isNode()) {
                Y.next = 5;
                break;
              }
              Y.next = 3;
              return notify.sendNotify($.name, X);
            case 3:
              Y.next = 6;
              break;
            case 5:
              $.msg($.name, "", X);
            case 6:
            case "end":
              return Y.stop();
          }
        }
      }, W);
    }));
    return V.apply(this, arguments);
  }
  i(g().mark(function W() {
    return g().wrap(function (X) {
      for (;;) {
        switch (X.prev = X.next) {
          case 0:
            X.next = 2;
            return S();
          case 2:
            X.next = 4;
            return x();
          case 4:
          case "end":
            return X.stop();
        }
      }
    }, W);
  }))().catch(function (X) {
    $.log(X);
  }).finally(function () {
    $.done({});
  });
})();
function md5(r) {
  return rstr2hex(rstr_md5(str2rstr_utf8(r)));
}
function b64_md5(r) {
  return rstr2b64(rstr_md5(str2rstr_utf8(r)));
}
function any_md5(r, t) {
  return rstr2any(rstr_md5(str2rstr_utf8(r)), t);
}
function hex_hmac_md5(r, t) {
  return rstr2hex(rstr_hmac_md5(str2rstr_utf8(r), str2rstr_utf8(t)));
}
function b64_hmac_md5(r, t) {
  return rstr2b64(rstr_hmac_md5(str2rstr_utf8(r), str2rstr_utf8(t)));
}
function any_hmac_md5(r, t, d) {
  return rstr2any(rstr_hmac_md5(str2rstr_utf8(r), str2rstr_utf8(t)), d);
}
function md5_vm_test() {
  return "900150983cd24fb0d6963f7d28e17f72" == hex_md5("abc").toLowerCase();
}
function rstr_md5(r) {
  return binl2rstr(binl_md5(rstr2binl(r), 8 * r.length));
}
function rstr_hmac_md5(r, t) {
  var d = rstr2binl(r);
  d.length > 16 && (d = binl_md5(d, 8 * r.length));
  for (var n = Array(16), _ = Array(16), m = 0; m < 16; m++) {
    n[m] = 909522486 ^ d[m];
    _[m] = 1549556828 ^ d[m];
  }
  var f = binl_md5(n.concat(rstr2binl(t)), 512 + 8 * t.length);
  return binl2rstr(binl_md5(_.concat(f), 640));
}
function rstr2hex(r) {
  for (var t, d = hexcase ? "0123456789ABCDEF" : "0123456789abcdef", n = "", _ = 0; _ < r.length; _++) {
    t = r.charCodeAt(_);
    n += d.charAt(t >>> 4 & 15) + d.charAt(15 & t);
  }
  return n;
}
function rstr2b64(r) {
  for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", d = "", n = r.length, _ = 0; _ < n; _ += 3) {
    for (var m = r.charCodeAt(_) << 16 | (_ + 1 < n ? r.charCodeAt(_ + 1) << 8 : 0) | (_ + 2 < n ? r.charCodeAt(_ + 2) : 0), f = 0; f < 4; f++) {
      8 * _ + 6 * f > 8 * r.length ? d += b64pad : d += t.charAt(m >>> 6 * (3 - f) & 63);
    }
  }
  return d;
}
function rstr2any(r, t) {
  var d;
  var n;
  var _;
  var m;
  var f;
  var h = t.length;
  var e = Array(Math.ceil(r.length / 2));
  for (d = 0; d < e.length; d++) {
    e[d] = r.charCodeAt(2 * d) << 8 | r.charCodeAt(2 * d + 1);
  }
  var a = Math.ceil(8 * r.length / (Math.log(t.length) / Math.log(2)));
  var i = Array(a);
  for (n = 0; n < a; n++) {
    for (f = Array(), m = 0, d = 0; d < e.length; d++) {
      m = (m << 16) + e[d];
      _ = Math.floor(m / h);
      m -= _ * h;
      (f.length > 0 || _ > 0) && (f[f.length] = _);
    }
    i[n] = m;
    e = f;
  }
  var o = "";
  for (d = i.length - 1; d >= 0; d--) {
    o += t.charAt(i[d]);
  }
  return o;
}
function str2rstr_utf8(r) {
  for (var t, d, n = "", _ = -1; ++_ < r.length;) {
    t = r.charCodeAt(_);
    d = _ + 1 < r.length ? r.charCodeAt(_ + 1) : 0;
    55296 <= t && t <= 56319 && 56320 <= d && d <= 57343 && (t = 65536 + ((1023 & t) << 10) + (1023 & d), _++);
    t <= 127 ? n += String.fromCharCode(t) : t <= 2047 ? n += String.fromCharCode(192 | t >>> 6 & 31, 128 | 63 & t) : t <= 65535 ? n += String.fromCharCode(224 | t >>> 12 & 15, 128 | t >>> 6 & 63, 128 | 63 & t) : t <= 2097151 && (n += String.fromCharCode(240 | t >>> 18 & 7, 128 | t >>> 12 & 63, 128 | t >>> 6 & 63, 128 | 63 & t));
  }
  return n;
}
function str2rstr_utf16le(r) {
  for (var t = "", d = 0; d < r.length; d++) {
    t += String.fromCharCode(255 & r.charCodeAt(d), r.charCodeAt(d) >>> 8 & 255);
  }
  return t;
}
function str2rstr_utf16be(r) {
  for (var t = "", d = 0; d < r.length; d++) {
    t += String.fromCharCode(r.charCodeAt(d) >>> 8 & 255, 255 & r.charCodeAt(d));
  }
  return t;
}
function rstr2binl(r) {
  for (var t = Array(r.length >> 2), d = 0; d < t.length; d++) {
    t[d] = 0;
  }
  for (d = 0; d < 8 * r.length; d += 8) {
    t[d >> 5] |= (255 & r.charCodeAt(d / 8)) << d % 32;
  }
  return t;
}
function binl2rstr(r) {
  for (var t = "", d = 0; d < 32 * r.length; d += 8) {
    t += String.fromCharCode(r[d >> 5] >>> d % 32 & 255);
  }
  return t;
}
function binl_md5(r, t) {
  r[t >> 5] |= 128 << t % 32;
  r[14 + (t + 64 >>> 9 << 4)] = t;
  for (var d = 1732584193, n = -271733879, _ = -1732584194, m = 271733878, f = 0; f < r.length; f += 16) {
    var h = d;
    var e = n;
    var a = _;
    var i = m;
    d = md5_ff(d, n, _, m, r[f + 0], 7, -680876936);
    m = md5_ff(m, d, n, _, r[f + 1], 12, -389564586);
    _ = md5_ff(_, m, d, n, r[f + 2], 17, 606105819);
    n = md5_ff(n, _, m, d, r[f + 3], 22, -1044525330);
    d = md5_ff(d, n, _, m, r[f + 4], 7, -176418897);
    m = md5_ff(m, d, n, _, r[f + 5], 12, 1200080426);
    _ = md5_ff(_, m, d, n, r[f + 6], 17, -1473231341);
    n = md5_ff(n, _, m, d, r[f + 7], 22, -45705983);
    d = md5_ff(d, n, _, m, r[f + 8], 7, 1770035416);
    m = md5_ff(m, d, n, _, r[f + 9], 12, -1958414417);
    _ = md5_ff(_, m, d, n, r[f + 10], 17, -42063);
    n = md5_ff(n, _, m, d, r[f + 11], 22, -1990404162);
    d = md5_ff(d, n, _, m, r[f + 12], 7, 1804603682);
    m = md5_ff(m, d, n, _, r[f + 13], 12, -40341101);
    _ = md5_ff(_, m, d, n, r[f + 14], 17, -1502002290);
    n = md5_ff(n, _, m, d, r[f + 15], 22, 1236535329);
    d = md5_gg(d, n, _, m, r[f + 1], 5, -165796510);
    m = md5_gg(m, d, n, _, r[f + 6], 9, -1069501632);
    _ = md5_gg(_, m, d, n, r[f + 11], 14, 643717713);
    n = md5_gg(n, _, m, d, r[f + 0], 20, -373897302);
    d = md5_gg(d, n, _, m, r[f + 5], 5, -701558691);
    m = md5_gg(m, d, n, _, r[f + 10], 9, 38016083);
    _ = md5_gg(_, m, d, n, r[f + 15], 14, -660478335);
    n = md5_gg(n, _, m, d, r[f + 4], 20, -405537848);
    d = md5_gg(d, n, _, m, r[f + 9], 5, 568446438);
    m = md5_gg(m, d, n, _, r[f + 14], 9, -1019803690);
    _ = md5_gg(_, m, d, n, r[f + 3], 14, -187363961);
    n = md5_gg(n, _, m, d, r[f + 8], 20, 1163531501);
    d = md5_gg(d, n, _, m, r[f + 13], 5, -1444681467);
    m = md5_gg(m, d, n, _, r[f + 2], 9, -51403784);
    _ = md5_gg(_, m, d, n, r[f + 7], 14, 1735328473);
    n = md5_gg(n, _, m, d, r[f + 12], 20, -1926607734);
    d = md5_hh(d, n, _, m, r[f + 5], 4, -378558);
    m = md5_hh(m, d, n, _, r[f + 8], 11, -2022574463);
    _ = md5_hh(_, m, d, n, r[f + 11], 16, 1839030562);
    n = md5_hh(n, _, m, d, r[f + 14], 23, -35309556);
    d = md5_hh(d, n, _, m, r[f + 1], 4, -1530992060);
    m = md5_hh(m, d, n, _, r[f + 4], 11, 1272893353);
    _ = md5_hh(_, m, d, n, r[f + 7], 16, -155497632);
    n = md5_hh(n, _, m, d, r[f + 10], 23, -1094730640);
    d = md5_hh(d, n, _, m, r[f + 13], 4, 681279174);
    m = md5_hh(m, d, n, _, r[f + 0], 11, -358537222);
    _ = md5_hh(_, m, d, n, r[f + 3], 16, -722521979);
    n = md5_hh(n, _, m, d, r[f + 6], 23, 76029189);
    d = md5_hh(d, n, _, m, r[f + 9], 4, -640364487);
    m = md5_hh(m, d, n, _, r[f + 12], 11, -421815835);
    _ = md5_hh(_, m, d, n, r[f + 15], 16, 530742520);
    n = md5_hh(n, _, m, d, r[f + 2], 23, -995338651);
    d = md5_ii(d, n, _, m, r[f + 0], 6, -198630844);
    m = md5_ii(m, d, n, _, r[f + 7], 10, 1126891415);
    _ = md5_ii(_, m, d, n, r[f + 14], 15, -1416354905);
    n = md5_ii(n, _, m, d, r[f + 5], 21, -57434055);
    d = md5_ii(d, n, _, m, r[f + 12], 6, 1700485571);
    m = md5_ii(m, d, n, _, r[f + 3], 10, -1894986606);
    _ = md5_ii(_, m, d, n, r[f + 10], 15, -1051523);
    n = md5_ii(n, _, m, d, r[f + 1], 21, -2054922799);
    d = md5_ii(d, n, _, m, r[f + 8], 6, 1873313359);
    m = md5_ii(m, d, n, _, r[f + 15], 10, -30611744);
    _ = md5_ii(_, m, d, n, r[f + 6], 15, -1560198380);
    n = md5_ii(n, _, m, d, r[f + 13], 21, 1309151649);
    d = md5_ii(d, n, _, m, r[f + 4], 6, -145523070);
    m = md5_ii(m, d, n, _, r[f + 11], 10, -1120210379);
    _ = md5_ii(_, m, d, n, r[f + 2], 15, 718787259);
    n = md5_ii(n, _, m, d, r[f + 9], 21, -343485551);
    d = safe_add(d, h);
    n = safe_add(n, e);
    _ = safe_add(_, a);
    m = safe_add(m, i);
  }
  return Array(d, n, _, m);
}
function md5_cmn(r, t, d, n, _, m) {
  return safe_add(bit_rol(safe_add(safe_add(t, r), safe_add(n, m)), _), d);
}
function md5_ff(r, t, d, n, _, m, f) {
  return md5_cmn(t & d | ~t & n, r, t, _, m, f);
}
function md5_gg(r, t, d, n, _, m, f) {
  return md5_cmn(t & n | d & ~n, r, t, _, m, f);
}
function md5_hh(r, t, d, n, _, m, f) {
  return md5_cmn(t ^ d ^ n, r, t, _, m, f);
}
function md5_ii(r, t, d, n, _, m, f) {
  return md5_cmn(d ^ (t | ~n), r, t, _, m, f);
}
function safe_add(r, t) {
  var d = (65535 & r) + (65535 & t);
  var n = (r >> 16) + (t >> 16) + (d >> 16);
  return n << 16 | 65535 & d;
}
function bit_rol(r, t) {
  return r << t | r >>> 32 - t;
}
var hexcase = 0;
var b64pad = "";
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