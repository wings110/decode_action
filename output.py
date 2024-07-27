#2024-07-27 01:13:21
import requests
import time
import os
from urllib.parse import urlparse,parse_qs,quote
import re
import random
import math
code="可乐阅读"
ver="1.9"
envname="yuanshen_klyd"
split_chars=['@','&','\n']
debug=False
debugcookie=""
def env(*args,**kwargs):
 def split_cookies(cookie,split_chars):
  for sep in split_chars:
   if sep in cookie:
    return cookie.split(sep)
  return[cookie]
 def scmain(cookies):
  for i,cookie in enumerate(cookies,1):
   print(f"--------开始第{i}个账号--------")
   main=yuanshen(cookie)
   main.main()
   print(f"--------第{i}个账号执行完毕--------")
 if not os.getenv(envname)and not debug:
  print(f"请先设置环境变量[{envname}]")
  exit()
 cookie=os.getenv(envname,"")
 if debug:
  cookie=debugcookie
 try:
  print(requests.get("https://gitee.com/HuaJiB/yuanshen34/raw/master/pubilc.txt").text,"\n\n\n")
 except:
  print("网络异常,链接公告服务器失败(gitee)，请检查网络")
  exit()
 cookies=split_cookies(cookie,split_chars)
 account_count=len(cookies)
 print(f"一共获取到{account_count}个账号")
 print(f"=========🔔开始执行[{code}][{ver}]=========\n")
 start_time=time.time()
 if debug:
  scmain(cookies)
 else:
  try:
   scmain(cookies,*args,**kwargs)
  except Exception as e:
   print(f"脚本执行出错: {e}")
 end_time=time.time()
 execution_time=end_time-start_time
 print(f"\n============🔔脚本[{code}]执行结束============")
 print(f"本次脚本总运行时间: [{execution_time:.2f}] 秒")
class yuanshen:
 def __init__(self,cookie)->None:
  self.fuck_list=fuck_list
  self.biz_list=['MzkwNTY1MzYxOQ==','MzA3NzMzNjMwMQ==']
  self.cookies={"udtauth12":cookie}
 def tuisong(self):
  url=f"https://wxpusher.zjiecode.com/api/send/message/?appToken={appToken}&topicId={topicIds}&content=检测文章%0A请在20秒内完成验证!%0A%3Cbody+onload%3D%22window.location.href%3D%27{quote(self.readurl)}%27%22%3E"
  r=requests.get(url).json()
  print(f"🎉️检测文章推送结果{r}")
 def getmain(self):
  headers={"Host":"230640607122241.asfuoqa.cn","Connection":"keep-alive","Upgrade-Insecure-Requests":"1","User-Agent":user_agent,"Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/wxpic,image/tpg,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7","X-Requested-With":"com.tencent.mm","Accept-Encoding":"gzip, deflate","Accept-Language":"zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"}
  url='http://230640607122241.asfuoqa.cn/r?upuid=2306406'
  r=requests.get(url,headers=headers,allow_redirects=False)
  if r.status_code==302:
   j=urlparse(r.headers['Location'])
   self.mainurl=j.netloc
   print(f"获取主域名成功:[{self.mainurl}]")
   self.headers={"Host":self.mainurl,"Connection":"keep-alive","Accept":"application/json, text/plain, */*","User-Agent":user_agent,"X-Requested-With":"XMLHttpRequest","Referer":f"http://{self.mainurl}/new?upuid=2306406","Accept-Encoding":"gzip, deflate","Accept-Language":"zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"}
  else:
   print('获取主域名失败')
   exit()
 def getdomain(self):
  url=f'http://{self.mainurl}/tuijian?url='
  r=requests.get(url,headers=self.headers,cookies=self.cookies).json()
  if r['code']==0:
   self.today_num=int(r["data"]["infoView"]["num"])
   try:
    print(r["data"]["infoView"]["msg"])
    return False
   except:
    pass
  url=f'http://{self.mainurl}/new/bbbbb'
  r=requests.get(url,headers=self.headers,cookies=self.cookies)
  self.domain=r.json()['jump']
  j=urlparse(self.domain)
  p=parse_qs(self.domain.split('?')[1])
  self.iu=p.get('iu',[None])[0]
  self.domain_url=j.netloc
  print(f"获取域名成功:[{self.domain_url}][{self.iu}]")
  time.sleep(2)
  h={"Host":self.domain_url,"Connection":"keep-alive","Upgrade-Insecure-Requests":"1","User-Agent":user_agent,"Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/wxpic,image/tpg,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7","X-Requested-With":"com.tencent.mm","Accept-Encoding":"gzip, deflate","Accept-Language":"zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"}
  r=requests.get(self.domain,headers=h,allow_redirects=False)
  match=re.search(r"var url = '(.*)'",r.text)
  if match:
   self.canshu=match.group(1)
   print("Get 阅读参数----Ok!")
  else:
   print("发生未知错误 获取参数失败")
   exit()
  print("="*30)
  return True
 def read(self):
  self.readh2={"Host":"m.zzyi4cf7z8.cn","Connection":"keep-alive","sec-ch-ua":"Chromium;v=122, Not(A:Brand;v=24, Android","X-Requested-With":"XMLHttpRequest","sec-ch-ua-mobile":"?1","User-Agent":user_agent,"sec-ch-ua-platform":"Android","Accept":"*/*","Origin":f"http://{self.domain_url}","Sec-Fetch-Site":"cross-site","Sec-Fetch-Mode":"cors","Sec-Fetch-Dest":"empty","Referer":f"http://{self.domain_url}/","Accept-Encoding":"gzip, deflate, br","Accept-Language":"zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"}
  print(f"今日已读:[{self.today_num}]篇文章")
  if self.today_num>=Quantity_limit:
   print(f"今日已读数量已达设置上限")
   return
  jkey=None
  time.sleep(random.randint(2,5))
  while True:
   self.today_num+=1
   r=random.random()
   if jkey is None:
    url=f"{self.canshu}?iu={self.iu}&pageshow&r={r}"
   else:
    url=f"{self.canshu}?iu={self.iu}&pageshow&r={r}&jkey={jkey}"
   r=requests.get(url,headers=self.readh2).json()
   try:
    jkey=r["jkey"]
    self.readurl=r['url']
    if r['url']is None:
     print(f"未返回有效文章url")
     return
   except:
    print(f"获取文章链接失败[{r}]")
    break
   print(f"第[{self.today_num}]次获取文章成功:[{r['url']}]")
   k=urlparse(self.readurl)
   biz=parse_qs(k.query).get('__biz',[''])[0]if '__biz' in parse_qs(k.query)else ''
   if biz in self.biz_list or self.today_num in self.fuck_list:
    print('遇到检测文章，推送ing....')
    self.tuisong()
    time.sleep(random.randint(20,26))
   else:
    time.sleep(random.randint(8,18))
 def userinfo(self):
  url=f'http://{self.mainurl}/tuijian?url='
  r=requests.get(url,headers=self.headers,cookies=self.cookies).json()
  if r['code']==0:
   gold=float(r['data']['user']['score'])*100
   print(f'今日已赚金币:[{float(r["data"]["infoView"]["score"])*100}]\n当前账号剩余金币:[{gold}] = [{gold/10000}]元')
   if gold>=withdrawal_money:
    self.withdrawal()
   else:
    print(f"金币余额不足[{withdrawal_money}] 不提现")
  else:
   print(f"查询个人余额失败:[{r}]")
 def withdrawal(self):
  url=f'http://{self.mainurl}/withdrawal'
  r=requests.get(url,headers=self.headers,cookies=self.cookies).json()
  if r['code']==0:
   score=math.floor(float(r['data']['user']['score']))
   data={'amount':score,'type':'wx'}
   url=f'http://{self.mainurl}/withdrawal/doWithdraw'
   r=requests.post(url,data=data,headers=self.headers,cookies=self.cookies)
   print(f"提现结果:[{r.text}]")
 def main(self):
  self.getmain()
  time.sleep(random.randint(2,5))
  if self.getdomain():
   self.read()
  print("="*40)
  self.userinfo()
if __name__=='__main__':
 appToken=''
 topicIds=''
 if debug:
  appToken=''
  topicIds=''
 if not appToken or not topicIds:
  appToken=os.getenv('yuanshen_apptoken')
  topicIds=os.getenv('yuanshen_topicid')
  if not appToken or not topicIds:
   print("❌你还没有设置推送,请设置环境变量:yuanshen_topicid和yuanshen_apptoken")
   exit()
 user_agent=os.getenv('yuanshen_useragent')
 if not user_agent:
  print("❌你还没有设置user_agent,请设置环境变量:yuanshen_useragent")
  exit()
 env()
