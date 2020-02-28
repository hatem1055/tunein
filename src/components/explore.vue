<template>
  <div class="explore-div col-lg-3">
    <div class="wrapper">
  <div class="logo mg-top mg-left">
      <h1><i class="fas fa-compact-disc"></i><span>TUNEIN</span></h1>
        </div>
      <div class="explore mg-left">
        <h2>explore</h2>
        <ul class="list">
         <li class="explore-list-item"><a @click="nav($event,'discoverBol','favsBol','searchBol')">
        <i class="fas fa-compact-disc"></i> <span>discover</span>  
        </a></li>
       <li class="explore-list-item"><a @click="nav($event,'searchBol','discoverBol','favsBol')">
        <i class="fas fa-search"></i> <span>search</span>  
        </a></li>
        <li class="explore-list-item"><a @click="nav($event,'favsBol','searchBol','discoverBol')">
        <i class="fas fa-heart"></i><span>your tunes</span>  
        </a></li>
        </ul> 
      </div>
    </div>
      <div class="responsive">
        <ul>
          <li @click="nav($event,'discoverBol','favsBol','searchBol')"
          :class="discoverBol?'active':''"
          ><a><i class="fas fa-compact-disc"></i></a></li>
          <li @click="nav($event,'searchBol','discoverBol','favsBol')"
          :class="searchBol?'active':''"
          ><a><i class="fas fa-search"></i></a></li>
          <li @click="nav($event,'favsBol','searchBol','discoverBol')"
          :class="favsBol?'active':''"
          ><a><i class="fas fa-heart"></i></a></li>
        </ul>
      </div>
  </div>
</template>

<script>
import {mapState} from "vuex"
export default {
computed:{
  ...mapState([
    'favsBol','discoverBol','searchBol'
  ])
},
methods:{
nav(e,show,hide1,hide2){
this.$store.state[show]=true
this.$store.state[hide1]=false 
this.$store.state[hide2]=false 
}
}
}
</script>

<style scoped>
.explore-div{
  background: #7e2236;
}
.logo span,.explore span,.services span{
margin-left: 27px;
}
.explore li,.services li{
      margin-left: -37px;
      margin-top: 10px;
      font-size: 17px;
}
.explore li a,.services li a,.responsive li a{
     cursor:pointer;
      opacity: 0.8;
}
.explore li a:hover,.services li a:hover,.responsive li a:hover{
  opacity: 1;
}
 .responsive li{
display: inline-block;
margin:10px; 
} 
.responsive{
  display:none;
}
/* resoinsive styling */
@media(max-width:800px){ 
 .responsive{
   display:block
 }
 .wrapper{
   display:none;
 }
 .responsive ul{
   margin-left: -13px;
   margin-top: 15px;
}
.responsive li{
font-size: 16px;
margin-right: 50px;
}
.active{
  color:white;
  font-size:20px;
  font-weight: bold;  
}
}
</style>