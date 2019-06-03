// 由于有些浏览器是给予IE或者chrome内核的 我们尽量把这两个关键字放到最下边
// 使得浏览器自身的关键字优先级高 优先匹配
// 例如在mac系统下Chrome浏览器信息也带有Safari字段 ， 需要将Safari优先级低于chrome
export const Browsers = [
  'Arora',
  'Edge',
  'Epiphany',
  'Firefox',
  'Iceape',
  'Iceweasel',
  'Kindle',
  'Konqueror',
  'Lunascape',
  'Opera',
  'QupZilla',
  'SeaMonkey',
  'Vivaldi',
  'Chrome',
  'Chromium',
  'Safari'
]

export const BrowsersRevise = {
  'fxios': 'Firefox',
  'focus': 'Firefox Focus',
  'opr': 'Opera',
  'qihoobrowser': '360浏览器(手机版)',
  'qhbrowser': '360浏览器(手机版)',
  '360se': '360安全浏览器',
  '360ee': '360极速浏览器',
  'sogou': '搜狗浏览器',
  'metasr': '搜狗浏览器',
  'qq/': 'QQ客户端',
  'qqbrowser': 'QQ浏览器',
  'uc': 'UC浏览器',
  'ubrowser': 'UC浏览器',
  'lbbrowser': '猎豹浏览器',
  'theworld': '世界之窗浏览器',
  'baidu': '百度浏览器',
  'bidubrowser': '百度浏览器',
  '2345explorer': '2345浏览器',
  'maxthon': '傲游浏览器',
  'quark': '夸克浏览器',
  'miuibrowser': '小米浏览器',
  'qiyu': '旗鱼浏览器',
  'taobrowser': '淘宝浏览器',
  'aliapp(tb': '淘宝手机客户端',
  'aliapp(tm': '天猫手机客户端',
  'aliapp(ap': '支付宝手机客户端',
  'micromessenger': '微信手机客户端',
  'weibo': '微博手机客户端',
  'com.douban.frodo': '豆瓣手机客户端',
  'snebuy-app': '苏宁易购手机客户端',
  'iqiyiapp': '爱奇艺手机客户端',
  'silk/': 'Kindle',
  'yabrowser': 'Yandex',
  'crios': 'Chrome',
  'trident': 'IE',
  'msie': 'IE'
}
