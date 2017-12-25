/**
 * 图层对象
 */
class Div {
  constructor (dom, c) {
    this.name = c.name || '图层1'
    this.level = c.level || 1
    this.visiable = c.visiable || true
    this.opacity = c.opacity || 80 * Math.random()
    /** 初始化path, path为一个集合 **/
    this.path = []

    let canvasId = 'canvas_' + c.level
    let canvas = document.createElement('canvas')
    canvas.id = canvasId
    canvas.width = dom.width
    canvas.height = dom.height
    canvas.style.position = 'absolute'
    canvas.style.left = 0
    canvas.style.top = 0
    console.log(canvas.attributes)
    dom.appendChild(canvas)

    this._canvas = document.getElementById(canvasId)
    this._cxt = this._canvas.getContext('2d')
  }

  /** 重置图层的宽高 **/
  resize (w, h) {
    this._canvas.width = w
    this._canvas.height = h
  }
}

export default Div
