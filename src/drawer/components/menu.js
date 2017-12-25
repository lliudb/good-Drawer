export default {
  menu: {
    /** 新建图层 **/
    newDiv: {
      icon: 'new-div',
      desc: '新建图层',
      click: 'newDiv'
    },
    /** 新建图层 **/
    removeDiv: {
      icon: 'remove-div',
      desc: '删除指定图层，当前层不可删除',
      click: 'newDiv'
    },
    /** 保存当前历史数据到localStorage **/
    saveLocalHistory: {
      icon: 'save-local-history',
      desc: '保存历史数据，防止被程序崩溃整崩溃',
      click: 'saveLocalHistory'
    },
    /** 上传数据到服务器 **/
    uploadData: {
      icon: 'upload-datas',
      desc: '上传数据到服务器，永久保存哦！',
      click: 'uploadDatas'
    },
    /** 帮助性阅读 **/
    help: {
      icon: 'read-me',
      desc: '请仔细阅读我',
      content: '',
      component: {
        name: 'model',
        title: '',
        size: {w: 300, h: 400},
        okText: '我知道了！'
      }
    }
  },
  toolbar: {
    base: {
      pencil: {
        icon: 'tool-pencil',
        name: '画铅笔',
        click: 'newPencil',
        attributes: {
          color: {r:1, g:1, b:1, a:1},
          width: 12,
          shape: 'stroke', /** 闭合的形式， **/
          shapes: [{text: 'stroke', value: 'stroke'}, {text: 'fill', value: 'fill'}]
        }
      },
      rubber: {
        icon: 'tool-rubber',
        name: '橡皮擦',
        click: 'newPencil',
        attributes: {
          color: {r:1, g:1, b:1, a:1},
          width: 12,
          shape: 'stroke', /** 闭合的形式， **/
          shapes: [{text: 'stroke', value: 'stroke'}, {text: 'fill', value: 'fill'}]
        }
      }
    }
  },
  stateBar: {
    isRedrawing: false, /** 重绘中 **/
    loading: false, /** 处理中 **/
    isDrawing: false, /** 绘制中 **/
    description: '等待'
  },
  history: {
    replay: {
      base: {
        speed: 1, /** 播放速度 **/

      },
      filter: {
        divs: {
          pushNew: true, /** 添加图层 **/
          remove: true, /** 删除图层 **/
          reOrder: true, /** 图层重新排序 **/
          check: true, /** 切换图层 **/
          resize: true, /** 重置画布大小 **/
          move: true, /** 移动画布 **/
          scale: true, /** 缩放画布 **/
          translate: true /** 变换画布 **/
        },
        pencil: {
          check: true /** 笔刷 **/
        }
      }
    }
  },
  divs: {
    max: {
      length: 7,
      msg: '目前最多支持7个图层'
    }
  }
}