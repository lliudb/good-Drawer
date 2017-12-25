/**
 * 渲染器
 */
class Renderer {
  _core = null
  constructor (core, c) {
    this._core = core
    /** **/
    this._frame = c.frame || 60
    /** 开启帧动画 **/
    this.startRender()
  }

  /** 开启帧刷新 **/
  startRender () {
    var that = this
    that._frameRender = undefined
    that._frameRender = setInterval(function () {
      that._render()
    }, that._frame)
  }

  /**  关闭帧刷新  **/
  stopRender () {
    clearInterval(this._frameRender)
    console.log('已关闭帧刷新')
  }

  _render () {
//    this.clearCanvas(1800, 800)
    this._drawDivs()
  }

  _drawDivs () {
    let divs = this._core._divs
    for (let i = 1; i <= this._core._divInfo.length; i++) {
      let cname = 'div' + i
      let curr = divs[cname]
      if (!curr) continue
      curr._cxt.clearRect(0, 0, curr._canvas.width, curr._canvas.height)
      this._drawDiv(curr)
      if (cname === this._core._divInfo.current) {
        this._drawPath()
      }
    }
  }

  _drawDiv (div) {
    const that = this
    if (!div.path) return
    for (let i = 0; i < div.path.length; i++) {
      let path = div.path[i]
      that._drawPath(div, path)
    }
  }

  _drawPath (div, path) {
    let cdiv = div || this._core.getCurrentDiv()
    let cpath = path || this._core.getCurrentPath()
    if (cpath.pencil) {
      cpath.pencil.render(cpath.path, cdiv)
    }
  }
}

export default Renderer
