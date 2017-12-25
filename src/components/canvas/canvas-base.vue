<template>
    <div class="xx">
        <Card :bordered="false">
            <Card :bordered="false" style="position:relative;width: 100%;min-height:800px;">
                <Card class="x-menu" :bordered="false">
                    <Button  @click="pencil1">笔1</Button>
                    <Button  @click="pencil2">笔2</Button>
                    <Button  @click="pencil3">橡皮</Button>
                    <Button  @click="div1">层1</Button>
                    <Button  @click="div2">层2</Button>
                    <Button  @click="div3">层3</Button>
                    <ColorPicker v-model="color3" alpha @on-change="changePencilColer" :colors="colors"/>
                </Card>
                <div :id="xcanvas" :style="style">

                </div>
                <!--<canvas :id="xcanvas" :style="style"></canvas>-->
            </Card>


            <Card :bordered="true"  style="z-index: 1200;">
                <div class="member-wrap">
                    <Input v-model="xwidth"  type="number" placeholder="Enter something..." style="width: 120px"></Input>
                    <Input v-model="xheight" type="number" placeholder="Enter something..." style="width: 120px"></Input>
                    <Button  @click="click">新建画布</Button>

                    <Button  @click="tDiv">调整画布大小</Button>
                    <Button  @click="newDiv">新建图层</Button>
                </div>
            </Card>
        </Card>

    </div>
</template>

<script>
  import Core from '../../drawer/core'
  var core = null
  export default{
    props: ['xwidth', 'xheight'],
    methods: {
      click () {
        if (!core) {
          core = new Core(this.xcanvas, {w: this.xwidth, h: this.xheight})
          console.log(core)
        }
      },
      tDiv () {
        core.resize({w: this.xwidth, h: this.xheight})
      },
      newDiv () {
        core.pushNewDiv()
      },
      pencil1 () {
        const _ = this
        core.setCurrentPencil('Pencil', { color: _.color3, width: 42 })
      },
      pencil2 () {
        const _ = this
        core.setCurrentPencil('Pencil1', { color: _.color3, width: 12 })
      },
      pencil3 () {
        const _ = this
        core.setCurrentPencil('Pencil2', { color: _.color3, width: 12 })
      },
      div1 () {
        core.redirectDiv('div1')
      },
      div2 () {
        core.redirectDiv('div2')
      },
      div3 () {
        core.redirectDiv('div3')
      },
      changePencilColer (c, a, s) {
        const _ = this
        core.setCurrentPencil('Pencil1', { color: _.color3, width: 42 })
      }
    },
    data () {
      return {
        colors: ['#311B92', '#512DA8', '#673AB7', '#9575CD', '#D1C4E9'],
        color3: 'rgba(1,1,1,1)',
        is_onpress: false,
        xcanvas: 'myCanvas',
        style: 'display:block;background:white;border:1px solid #ccc;border-radius:4px;position:absolute;height:800px;width:1200px;z-index:109',
        config: {},
        odata: {
          'div1': {
            level: 1,
            name: 'div1',
            path: []
          }
        },
        divs: {},
        stack: {
          current: 'div1',
          path: [],
          pencil: {
            name: 'nomarl',
            width: 4
          }
        }
      }
    }
  }
</script>

<style>
    .ivu-card{
        background: transparent;
    }

    .x-menu{
        z-index: 10000;
        position: absolute;
        top:2px;
        left:2px;
        border:2px solid crimson;
        border-radius: 4px;
        box-shadow: #5b6270;
    }
    .x-menu .ivu-card-body {
        padding:2px;
        display: flex;
        flex-direction: column;
    }
</style>