//所有的请求都定义在这个位置
import axios  from "axios";
const http = axios.create({
    baseURL:'https://netease-cloud-music-api-five-roan-88.vercel.app'
})
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
