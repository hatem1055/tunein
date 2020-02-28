import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    discoverBol:true,
    searchBol:false,
    favsBol:false,
    musicBol:false,
    currentTrackSrc:'',
    currentImgSrc:'',
    currentArtistName:'',
    currentTrackName:'',
    favTunes:[],
    globalIndex:null,
    globalArtist:'',
    isPause:true,
    isFisnished:false,
    fromFav:false,
    fromDisc:false,
    // dynamicObject:{},
    artists:{
  //////////////////////abu///////////////////////////////
      abu:[
        {
          name:"abyusif",
          imgSrc:"Artists-imgs/abu.jpg",
          trackName:"yoga",
          trackSrc:"abu-music/abu(0).mp3",
          shortName:'abu',
          fav:false,
          searchKeys:['abu',"abyusif",'yoga abyusif','yogga','abyusif yoga','yoga']
        },
        {
          name:"abyusif",
          imgSrc:"Artists-imgs/abu.jpg",
          trackName:"basha e3tmde",
          trackSrc:"abu-music/abu(1).mp3",
          shortName:'abu',
          fav:false,
          searchKeys:['abu',"abyusif",'basha e3tmed abyusif','basha','e3tmed','abyusif basha e3tmed','basha e3tmed']
        },
        {
          name:"abyusif",
          imgSrc:"Artists-imgs/abu.jpg",
          trackName:"gaw bar2",
          trackSrc:"abu-music/abu(2).mp3",
          shortName:'abu',
          fav:false,
          searchKeys:['abu',"abyusif",'gaw bar2 abyusif','gaw','bar2','abyusif gaw bar2','gaw bar2']
        },
        {
          name:"abyusif",
          imgSrc:"Artists-imgs/abu.jpg",
          trackName:"madina",
          trackSrc:"abu-music/abu(3).mp3",
          shortName:'abu',
          fav:false,
          searchKeys:['abu',"abyusif",'madina abyusif',"abyusif madina",'maddina']
        },
        {
          name:"abyusif",
          imgSrc:"Artists-imgs/abu.jpg",
          trackName:"wytwat",
          trackSrc:"abu-music/abu(4).mp3",
          shortName:'abu',
          fav:false,
          searchKeys:['abu',"abyusif",'wytwat abyusif',"abyusif wytwat",'wytwat']
        },
      ],
      //////////////////////wegz///////////////////////////////
      wegz:[
        {
          name:"wegz",
          imgSrc:"Artists-imgs/wegz.jpeg",
          trackName:"bola bola",
          trackSrc:"wegz-music/wegz(0).mp3",
          shortName:'wegz',
          fav:false,
          searchKeys:['wegz','wegz bola bola',"bola bola wegz",'bola','bola bola']
        },
        {
          name:"wegz",
          imgSrc:"Artists-imgs/wegz.jpeg",
          trackName:"keda keda",
          trackSrc:"wegz-music/wegz(1).mp3",
          shortName:'wegz',
          fav:false,
          searchKeys:['wegz','wegz keda keda ',"keda keda wegz ",'keda','keda keda']
        },
        {
          name:"wegz",
          imgSrc:"Artists-imgs/wegz.jpeg",
          trackName:"atm",
          trackSrc:"wegz-music/wegz(2).mp3",
          shortName:'wegz',
          fav:false,
          searchKeys:['wegz','wegz atm',"atm wegz",'atm']
        },
        {
          name:"wegz",
          imgSrc:"Artists-imgs/wegz.jpeg",
          trackName:"laqta",
          trackSrc:"wegz-music/wegz(3).mp3",
          shortName:'wegz',
          fav:false,
          searchKeys:['wegz','wegz laqta',"laqta wegz",'laqta']
        },
        {
          name:"wegz",
          imgSrc:"Artists-imgs/wegz.jpeg",
          trackName:"elzar",
          trackSrc:"wegz-music/wegz(4).mp3",
          shortName:'wegz',
          fav:false,
          searchKeys:['wegz','wegz elzar ',"elzar wegz",'elzar']
        },
      ],
      //////////////////////pablo///////////////////////////////
        pablo:[
          {
            name:"marwan pablo",
            imgSrc:"Artists-imgs/pablo.jpg",
            trackName:"abu mecca",
            trackSrc:"pablo-music/pablo(0).mp3",
            shortName:'pablo',
            fav:false,
            searchKeys:['marwan pablo','pablo','marwan pablo abu mecca ',"abu mecca marwan pablo ",
            'pablo abu mecca','abu mecca pablo','abo macca','abu makka','abo makka'
            ,'abu','mecca','abu mecca']
          },
          {
            name:"marwan pablo",
            imgSrc:"Artists-imgs/pablo.jpg",
            trackName:"free",
            trackSrc:"pablo-music/pablo(1).mp3",
            shortName:'pablo',
            fav:false,
            searchKeys:['marwan pablo','pablo','marwan pablo free',"free marwan pablo ",
            'pablo free','free pablo'
            ,'free']
          },
          {
            name:"marwan pablo",
            imgSrc:"Artists-imgs/pablo.jpg",
            trackName:"el8olaf",
            trackSrc:"pablo-music/pablo(2).mp3",
            shortName:'pablo',            
            fav:false,
            searchKeys:['marwan pablo','pablo','marwan pablo el8olaf',"el8olaf marwan pablo",
            'pablo el8olaf','el8olaf pablo'
           ,'el8olaf']
          },
          {
            name:"marwan pablo",
            imgSrc:"Artists-imgs/pablo.jpg",
            trackName:"sindbad",
            trackSrc:"pablo-music/pablo(3).mp3",
            shortName:'pablo',
            fav:false,
            searchKeys:['marwan pablo','pablo','marwan pablo sindbad',"sindbad marwan pablo ",
            'pablo sindbad','sindbad pablo'
           ,'sindbad']
          },
          {
            name:"marwan pablo",
            imgSrc:"Artists-imgs/pablo.jpg",
            trackName:"elgemaza",
            trackSrc:"pablo-music/pablo(4).mp3",
            shortName:'pablo',
            fav:false,
            searchKeys:['marwan pablo','pablo','marwan pablo elgemaza',"elgemaza marwan pablo ",
            'pablo elgemaza','elgemaza pablo'
           ,'elgemaza']
          },
      ],
      //////////////////////maro///////////////////////////////
      maro:[
        {
          name:"marwan moussa",
          imgSrc:"Artists-imgs/maro.jpeg",
          trackName:"nehayt el3alm",
          trackSrc:"maro-music/maro(0).mp3",
          shortName:'maro',
          fav:false,
          searchKeys:['marwan moussa','marwan moussa nehayt el3alm',"nehayt el3alm marwan moussa"
         ,'nehayt el3alm']
        },
        {
          name:"marwan moussa",
          imgSrc:"Artists-imgs/maro.jpeg",
          trackName:"elbosla da3et",
          trackSrc:"maro-music/maro(1).mp3",
          shortName:'maro',
          fav:false,
          searchKeys:['marwan moussa','marwan moussa elbosla da3et',"elbosla da3et marwan moussa"
          ,'nehayt el3alm']
        },
        {
          name:"marwan moussa",
          imgSrc:"Artists-imgs/maro.jpeg",
          trackName:"fr3on",
          trackSrc:"maro-music/maro(2).mp3",
          shortName:'maro',
          fav:false,
          searchKeys:['marwan moussa','marwan moussa fr3on',"fr3on marwan moussa "
          ,'fr3on']
        },
        {
          name:"marwan moussa",
          imgSrc:"Artists-imgs/maro.jpeg",
          trackName:"kherbt",
          trackSrc:"maro-music/maro(3).mp3",
          shortName:'maro',
          fav:false,
          searchKeys:['marwan moussa','marwan moussa kherbt',"kherbt marwan moussa "
          ,'kherbt']
        },
        {
          name:"marwan moussa",
          imgSrc:"Artists-imgs/maro.jpeg",
          trackName:"touch",
          trackSrc:"maro-music/maro(4).mp3",
          shortName:'maro',
          fav:false,
          searchKeys:['marwan moussa','marwan moussa touch',"touch marwan moussa "
          ,'touch']
        },
    ]
    }
  },
  mutations: {},
  actions: {},
  modules: {},
  getters:{
    // theArtist:(state)=>{
    //   for(let i=0;i<=state.artists.abu.length-1;i++)
    //   {
    //   return state.dynamicArray.push(state.artists.abu[i])
    //   }
  }
});
