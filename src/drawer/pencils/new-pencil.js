import BasePencil from './base-pencil.js'
import Tool from '../components/help.js'
/** 柳叶笔 **/
class NewPencil extends BasePencil {
  constructor (c, w, n) {
    super()
    this.color = c || {r: 1, g: 1, b: 21, a: 0.7}
    this.width = w || 4
    this.pname = n || 'newone'
  }

  render (path, div) {
    const _ = this
    /** do something ... **/
    div._cxt.globalCompositeOperation = 'destination-over'
    div._cxt.fillStyle = Tool.Rgba(_.getColor(div))
    div._cxt.lineWidth = _.width
    div._cxt.lineCap = 'round'
    div._cxt.lineJoin = 'round'
    if (!path.length) return
    div._cxt.moveTo(path.x, path.y)
    div._cxt.beginPath()
    for (var j = 0; j < path.length; j++) {
      div._cxt.lineTo(path[j].x, path[j].y)
    }
    div._cxt.fill()
  }
}

export default NewPencil
