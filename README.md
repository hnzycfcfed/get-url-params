# get-url-params
[![npm](https://img.shields.io/npm/v/@hnzycfcfed/get-url-params.svg?style=flat-square)](https://www.npmjs.com/package/@hnzycfcfed/get-url-params)
[![npm](https://img.shields.io/npm/dm/@hnzycfcfed/get-url-params.svg?style=flat-square)](https://www.npmjs.com/package/@hnzycfcfed/get-url-params)
[![GitHub stars](https://img.shields.io/github/stars/hnzycfcfed/get-url-params.svg?style=flat-square)](https://github.com/hnzycfcfed/get-url-params/stargazers)

## 提示
如果 url 参数存在多个 key 相同而 value 不同时，会强制使用第一个参数

## 安装
---
yarn:
```
yarn add @hnzycfcfed/get-url-params
```
npm:
```
npm i --save @hnzycfcfed/get-url-params
```

## 演示
---
```javascript
import getUrlParams from '@hnzycfcfed/get-url-params';

console.log(getUrlParams());          // 获取当前页面 url 参数 location.href = 'https://www.buttercatann.com/?id=123'
console.log(getUrlParams('https://www.buttercatann.com/?channel=podcast&id=1273733713'));      // 获取 url 字符串参数

```

输出
```
{ id: 123 }

{ channel: 'zyxf_jg_pyq_5', id: '1273733713' }
```

## License

Licensed under the MIT License, Copyright © 2018-present hnzycfc.com, https://www.hnzycfc.com/

See [LICENSE](./LICENSE) for more information.
