//根据 QueryString 参数名称获取值
export function getQueryStringByName(name) {
    let result = window.location.search.match(
        new RegExp('[?&]' + name + '=([^&]+)', 'i'),
    );
    if (result == null || result.length < 1) {
        return '';
    }
    return result[1];
}