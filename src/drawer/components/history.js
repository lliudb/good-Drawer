/**
 * 记录所有操作步骤
 * 根据操作记录重现绘画过程
 * 重绘过程可跳过部分操作不在重播过程之内
 *
 *
 */
class History {
  constructor () {
    this._history = []
    let temporary = ''
    if (!(temporary = localStorage.getItem('history'))) {
      this._history = JSON.parse(temporary)
    }
    this.stack = []
  }

  pushHistory (opt, config) {
    this.history.push({'opt': opt, config})
  }

  pushPath (pos) {
    this.stack.push(pos)
  }

  newPath () {
    this.stack = []
  }

  getPath () {
    return this.stack
  }
}

export default History
