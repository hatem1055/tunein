<template>
 <div class="mg-left mg-top discover" v-show='discoverBol'>
<h4>discover</h4>
<ul class="artists-list">
  <li class="artist-list-item active-artist">
    <a @click="changeArtist($event,'abu')" id="abu">abyusif</a></li>
  <li class="artist-list-item">
    <a  @click="changeArtist($event,'wegz')" id="wegz">wegz</a></li>
  <li class="artist-list-item">
    <a  @click="changeArtist($event,'pablo')" id="pablo">marwan pablo</a></li>
  <li class="artist-list-item">
    <a  @click="changeArtist($event,'maro')" id="maro">marwan mousa</a></li>
</ul>
<ul class="tracks-list">
<li class="track-list-item" v-for="(track,index) in artists[artist]" :key="index">
  <div class="track-img">
  <img :src="track.imgSrc" alt=""
  @click="playMusic($event,index)"
  >
  </div>
  <div class="track-info">
  <p class="track-name">{{track.trackName}}</p>
  <p class="artist-name">{{track.name}}</p>
  </div>
  <i class="far fa-heart"
  @click="[addToFavs($event,index),track.fav=!track.fav]"
  :style="track.fav?'color:#db1d40':''"
  ></i>
</li>
</ul>
 </div>
</template>
<script>
import {mapState} from "vuex"
export default {
  data(){
    return{
      artist:"abu",
      favToggle:false,
      currentIndex:null,
      favedTrackes:[],
      activeElemnt:null,
      deactiveSibling:[]
    }
  },
  computed:{
   ...mapState([
    "artists",    'currentTrackSrc',
    'currentImgSrc','musicBol','isPaused','globalArtist',
    'currentArtistName','favTunes','globalIndex','fromFav','fromDisc',
    'currentTrackName','discoverBol','isFinished'
      ])
  },
  methods:{
    changeArtist(e,artist){
      this.artist = artist
       let siblings= document.getElementById(this.artist).parentElement.parentElement.children
     for(let i=0;i<=siblings.length-1;i++){
       siblings[i].classList.remove('active-artist')
     }
      document.getElementById(this.artist).parentElement.classList.add('active-artist')
    },
    playMusic(e,index){
      let store = this.$store.state
      store.globalIndex=index
      let  track=this.artists[this.artist][store.globalIndex]
    store.currentTrackSrc=track.trackSrc
    store.currentImgSrc=track.imgSrc
    store.currentTrackName=track.trackName
    store.currentArtistName=track.name
    store.musicBol=true
    store.isPause = true
    store.globalArtist=this.artist
    store.fromFav=false
    store.fromDisc=true
    },
    addToFavs(e,index){
        // let that= this
        if(this.$store.state.artists[this.artist][index].fav==false){
this.$store.state.favTunes.push(this.$store.state.artists[this.artist][index])
        }
        else{
            let theIndex=this.$store.state.favTunes.indexOf(this.$store.state.artists[this.artist][index])
            this.$store.state.favTunes.splice(theIndex,1) 
        }
        
    },
    // finished(e,index){
    // if(index+1<this.artists[this.artist].length){
    // let store = this.$store.state
    // let  track=this.artists[this.artist][index+1]
    // store.currentTrackSrc=track.trackSrc
    // store.currentImgSrc=track.imgSrc
    // store.currentTrackName=track.trackName
    // store.currentArtistName=track.name
    //  }
    // }
  },
}
</script>
<style scoped>
h4{
  opacity: 0.9;
  /* margin-top: 59px; */
}
.artists-list{
      margin-left: -49px;
}
.artist-list-item{
  display:inline-block;
  margin:10px; 
      border: 1px solid rgba(128, 128, 128, 0.5);
    padding: 5px;
      opacity: 0.8;
          margin-right: 31px;
}
.artist-list-item:hover{
      background: #444242;
}
.artist-list-item a{
  cursor: pointer;
}
.artist-list-item a:hover{
  opacity:1;
}
.active-artist{
  color:#db1d40;
  opacity: 1;
  font-weight: bold;
}
.discover .fa-heart:hover{
color:#db1d40;
}
.track-list-item{
  position: relative;
  margin-left: -49px;
  display: flex;
}
.track-list-item img{
    width: 63px;
    height: 63px;
    border-radius: 50%;
    border: 2px solid #c2c2c2;
}
.track-list-item img:hover{
      transform: scale(1.05);
}
.track-img{
  cursor: pointer;
}
.track-info{
         margin-left: 20px;
    margin-top: 5px;
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
.tracks-list i{
      position: absolute;
    right: 0;
    top: 23px;
    font-size: 20px;
    cursor:pointer;
}
/* responsiv styling */
@media(max-width:800px){
  .artist-list-item{
    border:none;
    padding:0;
    margin: 6px
  }
  .artist-list-item:hover{
    color:#db1d40;
    background: none;
  }
}
</style>