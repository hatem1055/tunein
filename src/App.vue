<template>
  <div id="app">
    <div class="container">
    <div class="row">
  <explore/>
    <Main/>
  <music/>
    </div>
    </div>
    <router-view />
  </div>
</template>
<script>
import Main from "@/components/Main.vue"
import explore from "@/components/explore.vue"
import music from "@/components/music.vue"
// import {mapState} from "vuex"
export default {
  components:{
    Main,explore,music
  }
}
</script>
<style>
li{
  list-style: none;
}
body{
  background:#db1d40
}
.mg-top{
  margin-top:50px;
}
.mg-left{
  margin-left:24px;
}
#app{
      position: relative;
    margin-top: 80px;
      background:#232323;
  color:white;
}
</style>
