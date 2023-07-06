//所有的请求都定义在这个位置
import axios  from "axios";
import store  from "storejs";
const http = axios.create({
    baseURL:'https://netease-cloud-music-api-five-roan-88.vercel.app'
})
//添加请求拦截器h
// http.interceptors.request.use(function(config){
//   const cookie = store.get('__m__cookie') ?? '';
//   config.params = config.params||{};
//   config.params.cookie = cookie;
//   // console.log(config);
//   return config;
// });
export const fetchPlaylistHot = () =>{
   return  http
      .get(
        '/playlist/hot'
      )
}
export const fetchPlaylists=(cat) =>{ 
  return http.get('/top/playlist',{params: {cat}})
}


export const Ranking = ()=>{
  return http.get('/toplist/detail')
}


export const newSong=()=>{
  return http.get('/homepage/block/page')
}


export const fetchSearchResult = (params) => http.get('/cloudsearch',{params})


export const getMusicCalendar = (params) => http.get('/calendar',{params})


export const getQRKey = () => http.get('/login/qr/key')

export const getQrInfo = (key,qrimg=1) =>http.get('/login/qr/create',{params:{key,qrimg}})

export const checkQrStatus  = (key) => http.get('/login/qr/check',{params:{key,timestamp:Date.now()}})

export const getUserAccount = () => http.get('/user/account')

// 获取歌单详情
export const getSonglisthead = (id) =>http.get('/playlist/detail',{params:{id}})
export const getSonglist = (id) =>http.get('/playlist/track/all',{params:{id}})