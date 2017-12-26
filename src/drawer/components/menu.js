export default {
  menu: {
    /** 编辑画布 **/
    editCanvas: {
      icon: 'edit-canvas',
      desc: '删除指定图层，当前层不可删除',
      click: 'newDiv'
    },
    /** 保存当前历史数据到localStorage **/
    saveLocalHistory: {
      icon: 'save-local-history',
      desc: '保存历史数据，防止被程序崩溃整崩溃',
      click: 'saveLocalHistory'
    },
    /** 上传录像数据到服务器 **/
    uploadReplayData: {
      icon: 'upload-replay-datas',
      desc: '上传录像数据到服务器，永久保存哦！',
      click: 'uploadReplayData'
    },
    /** 导出svg的数据 **/
    exportSvg: {
      icon: 'export-svg',
      desc: '导出svg',
      click: 'exportSvg'
    },
    /** 导出矢量数据 **/
    exportVector: {
      icon: 'export-vector',
      desc: '导出矢量数据',
      click: 'exportVector'
    },
    /** 全屏 **/
    fullScreen: {
      icon: 'full-screen',
      desc: '设置为全屏',
      click: 'fullScreen'
    },
    /** 正常屏幕大小 **/
    normalScreen: {
      icon: 'normal-screen',
      desc: '还原屏幕大小',
      click: 'normalScreen'
    },
    /** 回放绘制过程 **/
    replayDraw: {
      icon: 'replay-draw',
      desc: '回放绘制过程',
      component: {
        speed: 1, /** 播放速度 **/
        resetBtn: 'resetData',
        pauseBtn: 'pauseDraw',
        playBtn: 'replayDraw'
      }
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
    switch: { /** 非常nb，也挺耗性能的辅助 **/
      adjoin: { /** 提供吸附能力，当你绘制图形时，他会自动依附附近的边界值，默认关闭 **/
        state: false,
        icon: 'adjoin',
        range: 20, /** 误差值，会在当前点的20像素范围内进行选择，未发现内容时，则忽略 **/
        click: 'adjoin'
      }
    },
    base: {
      pencil: {
        icon: 'tool-pencil',
        name: '画铅笔',
        click: 'newPencil',
        attributes: {
          color: {r: 1, g: 1, b: 1, a: 1},
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
          color: {r: 1, g: 1, b: 1, a: 1},
          width: 12,
          shape: 'stroke', /** 闭合的形式， **/
          shapes: [{text: 'stroke', value: 'stroke'}, {text: 'fill', value: 'fill'}]
        }
      },
      paintBucket: {
        icon: 'tool-paint-bucket',
        name: '油漆桶',
        click: 'newPaintBucket',
        attributes: {
          color: {r: 1, g: 1, b: 1, a: 1},
        }
      },
      straw: {
        icon: 'tool-straw',
        name: '拾色器',
        click: 'strawColor'
      }
    },
    move: {
      /** 拖动当前画布 **/
      moveCanvas: {
        icon: 'move-canvas',
        name: '油漆桶',
        desc: '拖动当前画布',
        click: 'moveCanvas'
      },

    }
  },
  /** 状态栏 **/
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
        tips: true /** 提示性内容 **/
      },
      filter: { /** 这个过滤貌似没啥卵用 **/
        divs: {
          check: true, /** 切换图层 **/
          pushNew: true, /** 添加图层 **/
          remove: true, /** 删除图层 **/
          reOrder: true, /** 图层重新排序 **/
          resize: true, /** 重置画布大小 **/
          move: true, /** 移动画布 **/
          scale: true, /** 缩放画布 **/
          translate: true, /** 变换画布 镜像 **/
          opacity: true /** 画布透明度 **/
        },
        pencil: {
          check: true, /** 笔刷切换 **/
          resize: true, /** 笔刷线宽度 **/
          color: true, /** 笔刷颜色 **/
        }
      }
    }
  },
  shortcut: {
    'ctl+z': 'revoke',
    'ctl+s': 'save',
    'ctl+d': 'new',
    'whitespace': 'moveCanvas', /** 移动画布 **/
    'shift': 'moveDiv', /** 移动当前图层内容 **/
  },
  divs: {
    toolBar: {
      /** 新建图层 **/
      newDiv: {
        icon: 'new-div',
        desc: '新建图层',
        click: 'newDiv'
      },
      /** 编辑图层 **/
      editDiv: {
        icon: 'edit-div',
        desc: '新建图层',
        click: 'editDiv'
      },
      /** 合并图层 **/
      mergeDiv: {
        icon: 'merge-div',
        desc: '合并图层，将多个图层合并',
        click: 'mergeDiv'
      }
    },
    attributes: {
      w: 1200,
      h: 700,
      scale: 1
    },
    max: {
      length: 7,
      msg: '目前最多支持7个图层'
    },
    childTool: [ /** 图层附属的子功能 **/
      {
        /** 删除图层 **/
        removeDiv: {
          icon: 'remove-div',
          desc: '删除指定图层，当前层不可删除',
          click: 'removeDiv'
        }
      },
      {
        /** 显示图层 **/
        showDiv: {
          icon: 'show-div',
          desc: '显示当前图层',
          click: 'showDiv'
        }
      },
      {
        /** 显示图层 **/
        hideDiv: {
          icon: 'hide-div',
          desc: '隐藏当前图层',
          click: 'hideDiv'
        }
      },
      {
        /** 拖动图层内容 **/
        moveDiv: {
          icon: 'move-div',
          desc: '删除指定图层，当前层不可删除',
          click: 'moveDiv'
        }
      }
    ]
  }
}