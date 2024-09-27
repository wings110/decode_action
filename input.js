//Fri Sep 27 2024 12:22:03 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
/*
中国联通 v2.08

包含以下功能:
阅光宝盒, 首页签到, 立减金打卡, 阅读专区抽奖, 云盘抽奖, 联通祝福
支付日活动 (每个月26-28号)
618集卡活动 (5.31-6.20)

首页签到默认运行, 需要关闭的设置变量 chinaUnicomSign='false'
联通祝福默认运行, 需要关闭的设置变量 chinaUnicomLtzf='false'

定时每天两三次
需要在联通APP中选择退出登录-切换账号登录, 捉下面这个包
https://m.client.10010.com/mobileService/onLine.htm
把请求体(body)里面的token_online参数填到变量 chinaUnicomCookie 里, 多账号换行或&或@隔开:
export chinaUnicomCookie="a3e4c1ff25da2xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
不会捉包的可以使用网页获取: https://service.leafxxx.win/unicom/login.html

cron: 0 0,7,20 * * *
const $ = new Env("中国联通");
*/
function _0x2abc(_0x2dbfcb, _0x396f1d) {
  const _0xab101c = _0x1e63();
  return _0x2abc = function (_0x56ec87, _0x11ef09) {
    _0x56ec87 = _0x56ec87 - (12939 + 1825 * -7);
    let _0x5807b9 = _0xab101c[_0x56ec87];
    return _0x5807b9;
  }, _0x2abc(_0x2dbfcb, _0x396f1d);
}
const _0x381c30 = _0x2abc;
(function (_0x35bba7, _0x306df8) {
  const _0x2766bc = _0x2abc,
    _0x31874d = _0x35bba7();
}
