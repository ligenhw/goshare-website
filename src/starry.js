
const collect = 'https://bestlang.cn/api/collect'

const qs = obj =>  {
    let arr = [];
    for (var o in obj) {
      arr.push(encodeURIComponent(o) + "=" + encodeURIComponent(obj[o]));
    }
    return arr.join("&");
}

const pv = name => {
    let data = {
      app: 'goshare-website',
      uid: '',
      ts: new Date().getTime(),
      url: name,
      evt: 'pv'
    }
    
    fetch(collect + '?' + qs(data), {
        method: 'POST'
    }).then(res => {
        console.log('data', data , ' log collect success ')
    }).catch(err => {
        console.error('data', data , ' log collect failed')
    })
}

export const PageView = props => {
  let children = props.children;
  pv(window.location.pathname)
  return children;
}

