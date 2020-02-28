<template>
  <div v-show='searchBol'>
   <div class="mg-left mg-top">
       <form action="" @submit.prevent="serach">
       <input type="text" class="search-input" v-model="searchModel">
       </form>
       <div class="searched-tracks" v-if="error">
           <h4 class="">search results for "{{searchVal}}"</h4>
           <div class="searched-tracks-list row">
     <div class="col-lg-6 d-flex tune"
      v-for="(track,index) in searchedTracks" :key='index'
     >
        <div class="tune-img">
            <img :src="track.imgSrc" alt=""
              @click="playMusic($event,index)"
            >
        </div>
        <div class="tune-info">
            <p class="track-name">{{track.trackName}}</p>
            <p class="artist-name">{{track.name}}</p>
        </div>
    </div>
           </div>
       </div>
   </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    data(){
     return{
         searchModel:'',
         searchVal:'',
         searchedTracks:[],
         localArtists:['abu','maro','pablo','wegz'],
         error:false
     }
    },
computed:{
  ...mapState([
    'searchBol',"artists", 'currentTrackSrc',
    'currentImgSrc','musicBol','isPause',
    'currentArtistName',
    'currentTrackName'
  ])
},
methods:{
    serach(){
        this.searchVal = this.searchModel
        this.searchedTracks = []
        this.error = false
        for(let i=0;i<=this.localArtists.length-1;i++){
         for(let j=0;j<=this.artists[this.localArtists[i]].length-1;j++){
          for(let l=0;l<=this.artists[this.localArtists[i]][j].searchKeys.length-1;l++)
            if(this.artists[this.localArtists[i]][j].searchKeys[l]==this.searchModel.toLowerCase()){
              let theIndex = this.artists[this.localArtists[i]].indexOf(this.artists[this.localArtists[i]][j])
              this.searchedTracks.push(this.artists[this.localArtists[i]][theIndex]) 
             }
          }
         }
         if(this.searchedTracks.length==0){
             this.error=false
         }
         else{
             this.error=true 
         }
    },
    playMusic(e,index){
    let store = this.$store.state
    store.currentTrackSrc=this.searchedTracks[index].trackSrc
    store.currentImgSrc=this.searchedTracks[index].imgSrc
    store.currentTrackName=this.searchedTracks[index].trackName
    store.currentArtistName=this.searchedTracks[index].name
    store.musicBol=true
    store.isPause=true
    }
}
}
</script>
<style scoped>
.search-input{
    /* margin-top: 10px; */
    position: relative;
    left: 22%;
    width: 250px;
    border-radius: 15px;
    border: 1px solid grey;
    background-color: #4a4a4a;
    color: white;
        padding-left: 13px;
}
.search-input:focus,.search-input:active{
border-radius: 15px;
    border: 1px solid grey;
    -webkit-appearance: none;
    outline: 0px !important;
}
.searched-tracks h4{
    /* margin-top: 15px; */
    margin-left: 0px;
}
.tune{
    margin-bottom: 15px;
}
.tune-img img{
    width: 80px;
    height: 80px;
    border: 2px solid #c2c2c2;
    cursor:pointer;
}
.tune-img img:hover{
      transform: scale(1.05);
}
.tune-info{
    margin-left: 20px;
    margin-top: 8px;
}
.artist-name{
      margin-top: -13px;
    font-size: 17px;
    opacity: 0.8;
}
.track-name{
      margin-bottom: 20px;
    text-transform: capitalize;
    font-size: 20px;
}
@media (max-width: 800px) {
.search-input{
left: 12%;
width: 262px;
}
}
</style>