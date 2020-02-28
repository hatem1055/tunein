<template>
  <div v-show='favsBol' class="f">
<div class="mg-left mg-top">
<h4>FAVOURATE TUNES</h4>
<div class="fav-tunes row">
    <div class="col-lg-6 d-flex" v-for="(tune,index) in favTunes" :key='index'>
        <div class="tune-img">
            <img :src="tune.imgSrc" alt=""
              @click="playMusic($event,index)"
            >
        </div>
        <div class="tune-info">
            <p class="track-name">{{tune.trackName}}</p>
            <p class="artist-name">{{tune.name}}</p>
            <p class="remove-tune"
            @click="removeItem($event,index)"
            >remove</p>
        </div>
    </div>
</div>
</div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
computed:{
  ...mapState([
    'favsBol','favTunes',"artists",'currentTrackSrc',
    'currentImgSrc','musicBol','isPause',
    'currentArtistName','favTunes',
    'currentTrackName','discoverBol','globalIndex'
  ])
},
methods:{
        playMusic(e,index){
    let store = this.$store.state
    store.currentTrackSrc=this.$store.state.favTunes[index].trackSrc
    store.currentImgSrc=this.$store.state.favTunes[index].imgSrc
    store.currentTrackName=this.$store.state.favTunes[index].trackName
    store.currentArtistName=this.$store.state.favTunes[index].name
    store.musicBol=true
    store.isPause = true
    // store.globalArtist=this.artist
    store.globalIndex=index
    store.fromFav=true
    store.fromDisc=false
    },
    removeItem(e,index){
      let favTunes = this.$store.state.favTunes
      let artists =this.$store.state.artists
      let currentIndex = artists[favTunes[index].shortName].indexOf(favTunes[index])
      artists[favTunes[index].shortName][currentIndex].fav = false
        favTunes.splice(index,1)
    }
}
}
</script>

<style>
.f h4{
  opacity: 0.9;
  /* margin-top: 59px; */
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
        margin-top: 0px;
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
.remove-tune{
    margin-top: -15px;
    color: #db1d40;
    font-size: 18px;
    cursor: pointer;
    font-weight: bold;
}
</style>