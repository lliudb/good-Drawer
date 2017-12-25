HTMLCollection.prototype.toArray = function () {
  return [].slice.call(this)
}

const deepCopy = function (o) {
  if (o instanceof Array) {
    let n = []
    for (let i = 0; i < o.length; ++i) {
      n[i] = deepCopy(o[i])
    }
    return n
  } else if (o instanceof Object) {
    let n = {}
    for (let i in o) {
      n[i] = deepCopy(o[i])
    }
    return n
  } else {
    return o
  }
}

const Rgba = function (c) {
  return 'rgba(' + c.r + ',' + c.g + ',' + c.b + ',' + c.a + ')'
}

const toRgba = function (c) {
  c = c.slice(c.indexOf('(') + 1, c.indexOf(')'))
  let rgba = c.split(',')
  return {r: parseFloat(rgba[0]), g: parseFloat(rgba[1]), b: parseFloat(rgba[2]), a: parseFloat(rgba[3])}
}

export default {deepCopy, Rgba, toRgba}
