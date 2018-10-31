const getUrlParams = (url = location.href) => {
    const params = {};

    if (!url
        || typeof url !== 'string'
        || url.lastIndexOf('?') === -1)
        return params;

    const hashIndex = url.indexOf('#');
    let str = url;
    if (hashIndex > 0) {    // 为兼容 hash history 模式
        str = url.slice(0, hashIndex);
        str.lastIndexOf('?') === -1 && (str = url.slice(hashIndex, url.length));
    }

    const search = str.slice(str.lastIndexOf('?') + 1);
    let arr = search.split('&');

    while (arr.length) {
        const value = arr.pop();    // 如果 url 参数存在多个 key 相同而 value 不同时，会强制使用第一个参数
        const [k, v] = value.split('=');
        k && (params[k] = !!v ? decodeURIComponent(v) : v);
    }

    arr = null;

    return params;
}

export default getUrlParams;
