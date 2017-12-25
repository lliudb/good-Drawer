import Tool from '../components/help.js'
class BasePencil {
  constructor (c, w) {
    this.color = c || {r: 1, g: 1, b: 2, a: 1}
    this.width = w || 4
  }

  getColor (div) {
    let color = {r: this.color.r, g: this.color.g, b: this.color.b, a: this.color.a}
    if (div.opacity < 100) {
      color.a = (div.opacity * color.a / 100)
    }
    return color
  }

  /** 调节画笔边粗细 **/
  editPencilWidth (width) {
    this.width = width
  }

  /** 调节画笔颜色 **/
  editPencilColor (color) {
    this.color = Tool.toRgba(color)
  }
}
export default BasePencil
