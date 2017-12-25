<template>
    <div class="hello">
        <mCanvas :xwidth="1800" :xheight="800"></mCanvas>
    </div>
</template>

<script>
  import mCanvas from './canvas/canvas-base.vue'

  export default {
    components: {
      mCanvas
    },
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      vsa: () => {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
