# get-url-params
[![npm](https://img.shields.io/npm/v/get-url-params.svg?style=flat-square)](https://www.npmjs.com/package/get-url-params)
[![npm](https://img.shields.io/npm/dm/get-url-params.svg?style=flat-square)](https://www.npmjs.com/package/get-url-params)
[![David](https://img.shields.io/david/hnzycfcfed/get-url-params.svg?style=flat-square)](https://www.npmjs.com/package/get-url-params)
[![David](https://img.shields.io/david/dev/hnzycfcfed/get-url-params.svg?style=flat-square)](https://www.npmjs.com/package/get-url-params)
[![GitHub stars](https://img.shields.io/github/stars/hnzycfcfed/get-url-params.svg?style=flat-square)](https://github.com/hnzycfcfed/get-url-params/stargazers)

## 提示
如果 url 参数存在多个 key 相同而 value 不同时，会强制使用第一个参数

## 安装
---
yarn:
```
yarn add get-url-params
```
npm:
```
npm i --save get-url-params
```

## 演示
---
```javascript
import getUrlParams from 'get-url-params';

console.log(getUrlParams());          // 获取当前页面 url 参数 location.href = 'https://h.hnzycfc.com/alipay/?id=123'
console.log(getUrlParams('https://h.hnzycfc.com/promotion/?channel=zyxf_jg_pyq_5&id=1273733713'));      // 获取 url 字符串参数

```

输出
```
{ id: 123 }

{ channel: 'zyxf_jg_pyq_5', id: '1273733713' }
```

## License

Licensed under the MIT License, Copyright © 2018-present hnzycfc.com, https://www.hnzycfc.com/

See [LICENSE](./LICENSE) for more information.
