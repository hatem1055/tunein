<template>
  <div class="music-div col-lg-3">
   <div class="mg-top mg-left">
    <div class="music-player" v-if="musicBol">
      <h4 class="text-center">now playing</h4>
      <img :src="currentImgSrc" alt="" class="track-img" id="trackImg"
      :class="isPause ? 'animate':'' "
      >
      <p class="track-name text-center">{{currentTrackName}}</p>
      <p class="artist-name text-center">{{currentArtistName}}</p>
     <i class="fas  text-center d-block" @click="playPause"
     :class="isPause ? 'fa-pause':'fa-play' "
     ></i> 
      <audio :src="currentTrackSrc"  muted   autoplay id="ad" @ended="finished"></audio>
    </div>
   </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
data(){
  return{
    
  }
},
  computed:{
   ...mapState([
    "musicBol",'currentTrackSrc',
    'currentImgSrc','isPause','globalIndex',
    'currentArtistName','isFinished','globalArtist',
    'currentTrackName','fromFav','fromDisc','favTunes'
      ])
  },
methods:{
  playPause(){
    let store = this.$store.state
    if(store.isPause){
    document.getElementById('ad').pause()
    }
    else{
      document.getElementById('ad').play()
    }
    store.isPause =!store.isPause
    },
    finished(){
    let store = this.$store.state
    store.isPause = false
    store.isFinished=true
    if(store.fromDisc){
    if(store.artists[store.globalArtist].length>store.globalIndex+1){
     store.globalIndex++
     store.isPause = true
    let  track=store.artists[store.globalArtist][store.globalIndex]
    store.currentTrackSrc=track.trackSrc
    store.currentImgSrc=track.imgSrc
    store.currentTrackName=track.trackName
    store.currentArtistName=track.name
     }
    else{
    store.globalIndex=0
    store.isPause = true
    let  track=store.artists[store.globalArtist][store.globalIndex]
    store.currentTrackSrc=track.trackSrc
    store.currentImgSrc=track.imgSrc
    store.currentTrackName=track.trackName
    store.currentArtistName=track.name
    }
    }
    else if(store.fromFav){
    if(store.favTunes.length>store.globalIndex+1){
    store.currentTrackSrc=store.favTunes[store.globalIndex].trackSrc
    store.currentImgSrc=store.favTunes[store.globalIndex].imgSrc
    store.currentTrackName=store.favTunes[store.globalIndex].trackName
    store.currentArtistName=store.favTunes[store.globalIndex].name
    }
    else{
    store.globalIndex=0
    store.currentTrackSrc=store.favTunes[store.globalIndex].trackSrc
    store.currentImgSrc=store.favTunes[store.globalIndex].imgSrc
    store.currentTrackName=store.favTunes[store.globalIndex].trackName
    store.currentArtistName=store.favTunes[store.globalIndex].name
    }
    }
    }
}
}
</script>

<style scoped>
.music-div{
 background:#db1d40;
}
.music-player{
margin-top:100px;
}
.music-player h4,.artist-name,.track-name,.fas{
      margin-right: 25px;
}
.music-player h4{
    margin-bottom: 18px;
}
.track-img{
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 2px solid #c2c2c2;
   /* animation: spin 15s linear infinite */
}
.artist-name{
      margin-top: -13px;
    font-size: 17px;
    opacity: 0.8;
}
.track-name{
    margin-bottom: 11px;
    text-transform: capitalize;
    font-size: 20px;
}
.fas{
   font-size: 24px;
    margin-top: 30px;
    cursor: pointer;
}
.animate{
  animation: spin 15s linear infinite 
}
@keyframes spin {
  from{    transform: rotate(0deg);}
  to{    transform: rotate(360deg);}
}
/* responsive styling */
@media(max-width:800px){ 
  h4.text-center{
    display:none;
  }
  .music-div{
    max-height:175px; 
  }
  .music-player{
    display:flex;
    /* margin-top:0; */
    /* display:inline-block; */
    margin: 0;
    padding-top: 33px;
    height: 75px;
    margin-top:-83px !important;
  }
  .track-img{
    width: 75px;
    height: 75px;
    border-radius: 0%;
    border: none;
    margin-left: -2px;
}
/* .mg-top{
  margin-top: -74px;
} */
.mg-left{
  margin-left: -14px;
}
.music-player h4,.artist-name,.track-name,.fas{
      margin-right: 0;
}
.fas{
    font-size: 24px;
    margin-top: 29px;
    cursor: pointer;
    width: 34px;
    float:right;
    position: absolute;
right: 0;
top: -5px;
}
p{
margin-right:10px; 
}
.artist-name{
margin-top: 0px !important;
position: absolute;
top: 17px;
margin-left: 10px;
margin-right: 13px;
left: 52%;
width: 33%;
      }
        .track-name{
   margin-bottom: 0px !important;
position: absolute;
top: 16px;
width: 33%;
left: 24%;
    }
    .animate{
      animation:none;
    }
}
</style>
