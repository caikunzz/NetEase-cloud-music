//所有的请求都定义在这个位置
import axios  from "axios";
import { expr } from "jquery";
import store  from "storejs";
const http = axios.create({
    baseURL:'https://netease-cloud-music-api-five-roan-88.vercel.app'
})
//添加请求拦截器h
http.interceptors.request.use(function(config){
  const cookie = store.get('__m__cookie') ?? '';
  config.params = config.params||{};
  config.params.cookie = cookie;
  // console.log(config);
  return config;
});
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


export const getBanner = () => http('/banner?type=2')
export const getFind = () => http('/homepage/dragon/ball')



export const fetchSearchResult = (params) => http.get('/cloudsearch',{params})


export const getMusicCalendar = (params) => http.get('/calendar',{params})


export const getQRKey = () => http.get('/login/qr/key')

export const getQrInfo = (key,qrimg=1) =>http.get('/login/qr/create',{params:{key,qrimg}})

export const checkQrStatus  = (key) => http.get('/login/qr/check',{params:{key,timestamp:Date.now()}})



// 获取歌单详情
export const getSonglisthead = (id) =>http.get('/playlist/detail',{params:{id}})
export const getSonglist = (id) =>http.get('/playlist/track/all',{params:{id}})


// 获取账号信息
export const getUserAccount = () => http.get('/user/account')



// 获取用户信息 , 歌单，收藏，mv, dj 数量
export const getUserSubcount = (uid) => http.get('/user/detail',{params:{uid}})


export const getUserLeave = () => http.get('/user/level')//等级
export const getUserFollows = (uid) => http.get('/user/follows',{params:{uid}})//关注列表
export const getUserFolloweds = (uid) => http.get('/user/followeds',{params:{uid}})//粉丝列表
export const getEvent = (uid) => http.get('/user/event',{params:{uid}})

export const getUserplaylist = (uid) => http.get('/user/playlist',{params:{uid}});//创建的歌单

export const getboke = () =>http.get('/record/recent/album')


export const getTrackDetail = (id) => http.get('/song/detail', { params: { ids: id } });
export const getArtist = (limit ) =>http.get('/artist/list',{params:{limit }})

export const updateinfo = (info) => http.get('/user/update',{params:{...info}})


// 重复昵称检测
export const nicknameCheck = (nickname) =>http.get('/nickname/check',{params:{nickname}})