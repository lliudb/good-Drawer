
import Div from './components/div.js'
import Tool from './components/help.js'
import History from './components/history.js'
import Path from './components/path.js'
import Renderer from './components/renderer.js'
import Pencil from './pencils/pencil.js'
import NewPencil from './pencils/new-pencil.js'
import Rubber from './pencils/rubber.js'

class Core {
  _version = '1.0.0'
  _productionInformation = 'good drawer'

  _isLeftPress = false
  _isRightPress = false
  /** 依赖项 **/
  _drawHistories = null
  _renderer = null
  /** 鼠标当前位置 **/
  _mousePosition = {}
  /** 鼠标当前位置 **/
  _currPencil = {}

  constructor (dom, c) {
    this._container = document.getElementById(dom)
    /** 配置画布信息 **/
    this._configCanvas(c)
    /** 初始化依赖对象 **/
    this._registerDependences()
    /** 注册监听事件 **/
    this._addListeners()
  }

  /** 重置画布宽度 **/
  resize (rex) {
    this._container.width = rex.w
    this._container.height = rex.h
    this._offset = this.getElementOffset(this._container)
    for (let i in this._divs) {
      this._divs[i].resize(rex.w, rex.h)
    }
  }

  /** 依赖注入 **/
  _registerDependences () {
    const that = this
    /** 加载记录器 **/
    this._drawHistories = new History()
    /** 加载渲染器 **/
    this._renderer = new Renderer(that, {})
  }

  /** 配置canvas信息 **/
  _configCanvas (c) {
    /** 设置画布 **/
    this._container.width = c.w
    this._container.height = c.h
    this._offset = this.getElementOffset(this._container)
//    this._container.style.left = this._offset.left + 'px'
//    this._container.style.top = this._offset.top + 'px'
    /** 初始化图层信息 **/
    this._currPencil = new Pencil()
    this._divInfo = {
      current: 'div1',
      length: 1,
      sort: ['div1']
    }
    this._divs = {
      div1: new Div(this._container, { name: '图层1', level: 1 })
    }
  }

  _addListeners () {
    const that = this
    /** 画布鼠标移动时间 **/
    that._container.addEventListener('mousemove', function (ev) {
      let pos = that.getTrueMoursePos(ev)
      that._mousePosition = pos
      if (this._isLeftPress) {
        that._doWhenMML(pos)
      } else if (this._isRightPress) {
        that._doWhenMMR(pos)
      }
    })

    /** 画布鼠标按下事件MouseUp **/
    this._container.addEventListener('mousedown', function (ev) {
      if (ev.button === 0) {
        this._isLeftPress = true
        that._doWhenMDL(ev)
      } else if (ev.button === 2) {
        this._isRightPress = true
        that._doWhenMDR(ev)
      }
    })

    /** 画布鼠标按下事件MouseUp **/
    this._container.addEventListener('mouseup', function (ev) {
      if (ev.button === 0) {
        this._isLeftPress = false
        that._doWhenMUL(ev)
      } else if (ev.button === 2) {
        this._isRightPress = false
        that._doWhenMUR(ev)
      }
    })
  }

  _doWhenMML (pos) {
    this._drawHistories.pushPath(pos)
//    console.log('move : doWhenMML')
//    this.drawHistories.pushHistory('doWhenMML', event)
  }

  _doWhenMMR (pos) {
//    console.log('move : doWhenMMR')
//    this.drawHistories.pushHistory('doWhenMMR', event)
  }

  _doWhenMDL (event) {
//    console.log('doWhenMDL : _isLeftPress is ' + this._isLeftPress)
//    this.drawHistories.pushHistory('doWhenMDL', event)
  }

  _doWhenMDR (event) {
//    console.log('doWhenMDR : _isRightPress is ' + this._isRightPress)
//    this.drawHistories.pushHistory('doWhenMDR', event)
  }

  _doWhenMUL (event) {
//    console.log('doWhenMUL : _isLeftPress is ' + this._isLeftPress)
//    this.drawHistories.pushHistory('doWhenMUL', event)
    this._divs[this._divInfo.current].path.push(new Path(this._currPencil, this._drawHistories.getPath()))
    this._drawHistories.newPath()
  }

  _doWhenMUR (event) {
//    console.log('doWhenMUR : _isRightPress is ' + this._isRightPress)
//    this.drawHistories.pushHistory('doWhenMUR', event)
  }

  /** 打印当前产品信息 **/
  info () {
    console.log(this._productionInformation + ': ver ' + this._version + ' is ready ')
  }

  getCurrentDiv () {
    return this._divs[this._divInfo.current]
  }

  getCurrentPath () {
    const that = this
    return {pencil: that._currPencil, path: that._drawHistories.getPath()}
  }

  pushNewDiv () {
    var len = this._divInfo.length += 1
    var name = 'div' + len
    this._divs[name] = new Div(this._container, { name: '图层' + len, level: len })
    this._divInfo.current = name
    return this._divs[name]
  }

  getTrueMoursePos (event) {
    var pos = this.getMousePos(event)
    return {
      x: pos.x - this._offset.left,
      y: pos.y - this._offset.top
    }
  }

  /** 设置当前笔 **/
  setCurrentPencil (type, c) {
    if (type === 'Pencil') {
      this._currPencil = new Pencil(Tool.toRgba(c.color), c.width, type)
    } else if (type === 'Pencil1') {
      this._currPencil = new NewPencil(Tool.toRgba(c.color), c.width, type)
    } else if (type === 'Pencil2') {
      this._currPencil = new Rubber(null, c.width)
    }
  }

  /** 删除图层 **/
  removeDiv (div) {
    if (this._divInfo.current === div) {
      console.log('不能移除当前层')
    } else {
      delete this._divs[div]
    }
  }

  /** 删除图层 **/
  redirectDiv (div) {
    this._divInfo.current = div
  }

  /** 根据历史记录加载数据 **/
  _loadHistory () {

  }

  /**
   * 获取鼠标相对于当前画布的位置
   * @return {x,y}
   */
  getMousePos (event) {
    let e = event || window.event
    let scrollX = document.documentElement.scrollLeft || document.body.scrollLeft
    let scrollY = document.documentElement.scrollTop || document.body.scrollTop
    return {
      x: e.pageX || e.clientX + scrollX,
      y: e.pageY || e.clientY + scrollY
    }
  }
  /**
   * 获取元素相距文档最左/最顶部距离
   * @return {left, top}
   */
  getElementOffset (element) {
    var actualLeft = element.offsetLeft
    var actualTop = element.offsetTop
    var current = element.offsetParent
    while (current !== null) {
      actualLeft += current.offsetLeft
      actualTop += current.offsetTop
      current = current.offsetParent
    }
    return {
      left: actualLeft,
      top: actualTop
    }
  }
}

export default Core
