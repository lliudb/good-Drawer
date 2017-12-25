import BasePencil from './base-pencil.js'
/** 橡皮擦 **/
class Rubber extends BasePencil {
  constructor (c, w, n) {
    super()
    this.color = c || {r: 1, g: 1, b: 21, a: 0.7}
    this.width = w || 12
    this.pname = n || 'newone'
  }

  render (path, div) {
    /** do something ... **/
    div._cxt.globalCompositeOperation = 'destination-out'
    div._cxt.strokeStyle = 'rgba(255, 255, 255, .5)'
    div._cxt.beginPath()
    if (!path.length) return
    div._cxt.moveTo(path.x, path.y)
    for (var j = 0; j < path.length; j++) {
      div._cxt.lineTo(path[j].x, path[j].y)
    }
    div._cxt.stroke()
  }
}

export default Rubber
