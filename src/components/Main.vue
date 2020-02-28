<template>
  <div class="main-div col-lg-6">
    <discover/>
    <fav/>
    <search/>
  </div>
</template>

<script>
import discover from '@/components/discover.vue'
import search from '@/components/search.vue'
import fav from '@/components/fav.vue'
import {mapState} from 'vuex'
export default {
components:{
  discover,fav,search
},
computed:{
  ...mapState([
    'discoverBol','favBol','searchBol'
  ])
}
}
</script>

<style>
/* .main{
  height: 533px;
  overflow: scroll;
} */
.main-div{
      padding-top: 7px;
      min-height: 600px;
}
@media (max-width:800px) {
  .main-div{
padding-top: 0;
padding-bottom: 20px;
margin-top: -34px;
  }
}
</style>