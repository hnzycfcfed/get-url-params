import getUrlParams from './index';

test('test location.href', () => {
    expect(getUrlParams()).toEqual({
        ie: 'utf-8',
        f: '8',
        rsv_bp: '1',
        rsv_idx: '1',
        tn: 'baidu',
        wd: 'babel',
        oq: 'babelHelpers',
        rsv_pq: 'b9cc3c7700075933',
        rsv_t: '8a81Gk9yDukgCvKLbKpmnbj1Qv+Wtwpj4aQWHC81apAMTWbacd77hPV3VE0',
        rqlang: 'cn',
        rsv_enter: '0',
        inputT: '1994',
        rsv_sug3: '44',
        rsv_sug1: '41',
        rsv_sug7: '100',
        rsv_sug2: '0',
        rsv_sug4: '2109',
        rsv_sug: '1'
    });
});

test('test browser router', () => {
    let params = getUrlParams('https://www.buttercatann.com/promotion/?channel=zyxf_jg_pyq_5&id=1273733713');
    expect(params).toEqual({ channel: 'zyxf_jg_pyq_5', id: '1273733713' });

    params = getUrlParams('https://www.buttercatann.com/promotion/?channel=&id=123');
    expect(params).toEqual({ channel: '', id: '123' });
});

test('test hash router', () => {
    let params = getUrlParams('https://api.l-blog.me/appServer/preRegist/index.html#/?channel=HYJR');
    expect(params).toEqual({ channel: 'HYJR' });

    params = getUrlParams('https://www.buttercatann.com/promotion/?channel=zyxf_j#g_pyq_5&id=1273733713');
    expect(params).toEqual({ channel: 'zyxf_j' });
});

test('no params', () => {
    const params = getUrlParams('https://www.buttercatann.com/promotion/');
    expect(params).toEqual({});
});

test('null string', () => {
    expect(getUrlParams('')).toEqual({});
    expect(getUrlParams('    ')).toEqual({});
    expect(getUrlParams(null)).toEqual({});

    let params = getUrlParams('https://www.buttercatann.com/promotion/?channel=zyxf_jg_pyq_5&    &id=1273733713');
    expect(params).toEqual({ channel: 'zyxf_jg_pyq_5', id: '1273733713' });
});

test('not string', () => {
    expect(getUrlParams({})).toEqual({});
    expect(getUrlParams([])).toEqual({});
    expect(getUrlParams(8)).toEqual({});
});

test('repeat key', () => {
    let params = getUrlParams('https://www.buttercatann.com/promotion/?channel=zyxf_jg_pyq_5&id=1273733713&channel=attack_value');
    expect(params).toEqual({ channel: 'zyxf_jg_pyq_5', id: '1273733713' });
});
