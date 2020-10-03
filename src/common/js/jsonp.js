import OriginJSONP from 'jsonp'

export default function jsonp (url, data, options) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + params(data)
  return new Promise((resolve, reject) => {
    OriginJSONP(url, options, (err, res) => {
      if (!err) {
        resolve(res)
      } else {
        reject(err)
      }
    })
  })
}

function params (data) {
  let url = ''
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url += `&${k}=${value}`
  }
  return url ? url.substring(1) : ''
}
