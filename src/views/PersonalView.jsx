import styled from 'styled-components-vue';
import _store from 'storejs';
const Vantab = styled.section`
/* height:20vh; */
    .van-tabs{
        /* height:20vh; */
        display: flex;
        flex-direction: column;
    }
    .van-tabs__nav{
        background:none;
    }
    .van-tabs__content{
        flex: auto;
        width: 92vw;
        box-sizing: border-box;
        overflow:hidden;
        align-self: center;
        margin: 2vw 0 4vw 0;
    }
    .van-tabs__line{
        width: 16px;
    }
    .van-tab--active{
        font-weight: bold;
    }
    .van-tabs__wrap{
        padding-bottom: 2vw;
        position: sticky;
        z-index: 999;
        top: 10vw;
    }
`
import { mapState } from '@/vuex';
import { getUserLeave, getUserFollows, getUserFolloweds, getUserSubcount, getUserplaylist, getboke } from '@/request';
import { areaList } from '@vant/area-data';
import { times } from 'lodash';
// console.log(areaList);

export default {
    render() {
        return (
            <div>
                <div class="box-border bg-[#f3f4f8]">
                    <header id='head' class="fixed w-[100%] text-white z-[666] top-0 flex justify-between items-center box-border px-[4vw] py-[4vw]">
                        <Icon
                            class="text-[5vw]"
                            onClick={'toback'}
                            icon="teenyicons:left-outline"
                        />
                        <span></span>
                        <Icon class="text-[5vw]" icon="ri:more-2-line" />
                    </header>
                    <section
                        class="h-[35vh] flex flex-col"
                        style={{
                            backgroundImage: `url(${this.userinfo.backgroundUrl})`,
                            backgroundSize: 'cover',
                        }}
                    >
                        <div class="flex justify-center mt-[4vw]">
                            <div class="flex items-center">
                                <span class="rounded-[8px] px-[10px] py-[1px] text-xs bg-white">
                                    照片墙
                                </span>
                                <Icon
                                    class="mx-[1vw] text-white opacity-70"
                                    icon="ic:round-lens"
                                />
                                <Icon
                                    class=" text-white opacity-70"
                                    icon="ic:round-lens"
                                    width="10px"
                                />
                            </div>
                        </div>
                        <div class="flex-auto flex justify-center items-center">
                            <p class="text-[4vw] flex items-center text-xs  font-[550] tracking-wide text-white">
                                换一个好看的封面吧
                                <Icon
                                    class="ml-[1vw] font-bold"
                                    icon="ps:right"
                                    color="white"
                                />
                            </p>
                        </div>
                    </section>

                    <section id='content' class="rounded-[12px] bg-white relative mt-[-2vh] w-[90%] mx-auto mb-[6vw] shadow-sm">
                        <div class="flex flex-col relative items-center">
                            <img
                                class=" shadow-lg w-[60px] h-[60px] rounded-[50%] absolute translate-y-[-50%]"
                                src={this.userinfo.avatarUrl}
                                alt=""
                            />
                            <p class=" sticky top-[4vw] font-[550] text[16px] tracking-[0.5px] mt-[40px]">
                                {this.userinfo.nickname}
                            </p>
                            <div class="flex items-center text-[#9498a2] text-[12px] my-[2vh]">
                                <p>
                                    <span class="mr-[1vw]">{this.guanzhu}</span>关注
                                </p>
                                <p class="mx-[5vw]">
                                    <span class="mr-[1vw]">{this.fensi}</span>粉丝
                                </p>
                                <p>
                                    Lv.<span>{this.lv}</span>
                                </p>
                            </div>
                            <div class="flex items-center text-[12px] my-[2vh] text-center">
                                <p class="px-[2vw] py-[5px] tracking-[0.5px] text-[#3f4659]  text-[14px] border border-gray-500 rounded-[12px]">
                                    IP:
                                    <span>
                                        {this.areaList.province_list[
                                            this.userinfo.province
                                        ].replace('省', '')}
                                    </span>
                                </p>
                                <p class="px-[2vw] py-[5px] tracking-[0.5px] text-[#3f4659]  text-[14px] border border-gray-500 rounded-[12px] mx-[2vw]">
                                    <span class="mr-[1vw]">
                                        {this.areaList.province_list[
                                            this.userinfo.province
                                        ].replace('省', '')}
                                    </span>
                                    <span>
                                        {this.areaList.city_list[this.userinfo.city].replace(
                                            '市',
                                            ''
                                        )}
                                    </span>
                                </p>
                                <p class="px-[2vw] py-[5px] tracking-[0.5px] text-[#3f4659]  text-[14px] border border-gray-500 rounded-[12px]">
                                    村龄
                                    <span>
                                        {new Date().getFullYear() -
                                            new Date(this.userinfo.createTime).getFullYear()}
                                    </span>
                                    年
                                </p>
                            </div>

                            <div class="flex items-center mb-[4vw] ">
                                <span class="text-[#3f4659] font-[700] tracking-[1px] text-sm border rounded-[25px] border-gray-500 px-[4vw] py-[1vw] mr-[2vw]">
                                    编辑资料
                                </span>
                                <span class="text-[#3f4659] font-[600] text-[14px] border border-gray-500 rounded-[50%] flex items-center jusitfy-center p-[2vw]">
                                    <Icon icon="bytesize:chevron-bottom" color="black" />
                                </span>
                            </div>
                        </div>
                    </section>

                    <Vantab>
                        <van-tabs v-model={this.active} swipeable animated>
                            <van-tab class=" min-h-screen" title="主页">
                                <div class="bg-white rounded-[8px] p-4 box-border">
                                    <header class=" font-semibold mb-[4vw]">音乐品味</header>
                                    <section class="flex justify-between">
                                        <div class=" flex justify-between flex-col text-[12px] border border-[#f8e7e8] text-[#9f9998] shadow rounded-[6px] p-[2vw] box-border w-[31%] bg-gradient-to-b from-[#fbf0ef] to-white">
                                            <div>
                                                <p class="">我的喜欢</p>
                                                <p class="font-semibold text-[#535c6a] text-[16px]">{this.Subccount?.bindings.length}首</p>
                                            </div>
                                            <p class="flex items-center"><Icon icon="icon-park-solid:like" /><span class="ml-[1vw]">喜欢的音乐</span></p>

                                        </div>
                                        <div class="border border-[#f8f1e4] flex justify-between flex-col text-[12px] text-[#9f9998] shadow rounded-[6px] p-[2vw] box-border w-[31%] bg-gradient-to-b from-[#fdf6eb] to-white">
                                            <div>
                                                <p class="">累计听歌</p>
                                                <p class="font-semibold text-[#535c6a] text-[16px]">{this.Subccount?.listenSongs}首</p>
                                            </div>
                                            <p class="flex items-center"><Icon icon="fa6-solid:ranking-star" /><span class="ml-[1vw]">听歌排行</span></p>

                                        </div>
                                        <div class="border h-[30vw] border-[#e8ecf0] flex justify-between flex-col text-[12px] text-[#9f9998] shadow rounded-[6px] p-[2vw] box-border w-[31%] bg-gradient-to-b from-[#ecf3fe] to-white">
                                            <div>
                                                <p class="">本周关键词</p>
                                                <p class="font-semibold text-[#535c6a] text-[16px]">每一首歌都心动</p>
                                            </div>
                                            <p class="flex items-center"><Icon icon="solar:hourglass-bold" /><span class="ml-[1vw]">黑胶时光机</span></p>

                                        </div>
                                    </section>
                                </div>

                                <div class="bg-white rounded-[8px] p-4 box-border my-[4vw]">
                                    <header class=" font-semibold mb-[4vw]">创建的歌单<span class=" font-[500] text-[12px] text-[#aaa]">（{this.createlists.length}个）</span></header>
                                    <ul>
                                        {this.createlists.map((item, index) => (
                                            <li key={index} class="mt-[2vw] flex">
                                                <img class="w-[13vw] rounded-[6px] mr-[2vw]" src={item.coverImgUrl} alt="" />
                                                <div class="flex  flex-col justify-around">
                                                    <p class="text-[14px]">{item.name}</p>
                                                    <p class="flex text-[12px] items-center text-[#aaaaaa]"><span>{item.trackCount}首</span><span>{item.playCount > 0 ? ',播放' + item.playCount + '次' : ''}</span></p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div class="bg-white rounded-[8px] p-4 box-border my-[4vw]">
                                    <header class=" font-semibold mb-[4vw]">收藏的歌单<span class=" font-[500] text-[12px] text-[#aaa]">（{this.collectlists.length}个）</span></header>
                                    <ul>
                                        {this.collectlists.map((item, index) => (
                                            <li key={index} class="mt-[2vw] flex">
                                                <img class="w-[13vw] rounded-[6px] mr-[2vw]" src={item.coverImgUrl} alt="" />
                                                <div class="flex  flex-col justify-around">
                                                    <p class="text-[14px]">{item.name}</p>
                                                    <p class="flex text-[12px] items-center text-[#aaaaaa]"><span>{item.trackCount}首</span><span class="mx-[2px]">,By  {item.creator.nickname}</span><span>{item.playCount > 0 ? ',播放' + item.playCount + '次' : ''}</span></p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div class="bg-white rounded-[8px] p-4 box-border my-[4vw]">
                                    <header class=" font-semibold mb-[4vw] flex items-center justify-between"><span>基本信息</span><span class=" font-[500] px-[10px] py-[3px] text-[14px] text-[#aaa] border rounded-[16px]">领取村民证</span></header>
                                    <ul class=" text-[#aaa] tracking-[2px]">
                                        <li class="flex items-center mb-[2vw]"><span class="mr-[1vw] ">村龄:</span>
                                            <p class="flex">
                                                <span> {new Date().getFullYear() -
                                                    new Date(this.userinfo.createTime).getFullYear()}年</span>
                                                <span>（
                                                    {
                                                        new Date(this.userinfo.createTime).getFullYear()
                                                    }
                                                    年
                                                    {
                                                        new Date(this.userinfo.createTime).getMonth() + 1
                                                    }
                                                    月注册）
                                                </span>
                                            </p></li>
                                        <li class="flex items-center mb-[2vw]"><span class="mr-[1vw] ">性别:</span><span>{this.userinfo.gender ? '男' : '女'}</span></li>
                                        <li class="flex items-center mb-[2vw]">
                                            <span class="mr-[1vw] ">地区:</span>
                                            <p class="flex">
                                                <span class="mr-[1vw]">
                                                    {this.areaList.province_list[
                                                        this.userinfo.province
                                                    ].replace('省', '')}
                                                </span>
                                                <span>
                                                    {this.areaList.city_list[this.userinfo.city].replace(
                                                        '市',
                                                        ''
                                                    )}
                                                </span></p></li>

                                    </ul>
                                    <div class="flex item-center justify-center border-t pt-[4vw]">
                                        <span class="flex items-center">
                                            查看全部
                                            <Icon icon="teenyicons:right-outline" color="black" />
                                        </span>
                                    </div>
                                </div>
                            </van-tab>
                            <van-tab class=" min-h-screen" title="动态">
                                <div class="flex justify-center items-center">
                                    <p class=" translate-y-[20vh]">暂无相关动态</p>
                                </div>
                            </van-tab>
                            <van-tab class=" min-h-screen" title="播客">
                                <div class=" flex justify-center">
                                    <div class=" translate-y-[20vh] flex flex-col items-center">
                                        <img class=" w-[20vw] h-[25vw] bg-gray-400" src="" alt="" />
                                        <p class=" font-[600] my-[2vw] text-[#3c3c3c]">暂无声音</p>
                                        <p>开始录制你的第一条声音吧</p>
                                        <p class=" rounded-[25px] px-[10vw] py-[3vw] mt-[7vw] bg-[#eb4d44] text-white tracking-[2px]">去录制</p>
                                    </div>
                                </div>
                            </van-tab>
                        </van-tabs>
                    </Vantab>
                </div>
            </div>
        );
    },
    data() {
        return {
            active: 0,
            lv: null,
            guanzhu: null,
            fensi: null,
            areaList,
            Subccount: null,
            createlists: [],
            collectlists: [],
        };
    },
    beforeCreate() {
        if (_store.get('profile')) {
            const userinfo = JSON.parse(_store.get('profile'));
            this.$store.state.userinfo = userinfo;
        }
        if (_store.get('userID')) {
            const userid = _store.get('userID');
            this.$store.state.userid = userid;
        }
    },
    methods: {
        toback() {
            window.history.back();
        },
    },
    computed: {
        ...mapState(['userinfo', 'userid']),
    },
    updated() {

        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const head = document.querySelector('#head');
            const content = document.querySelector('#content');
            const headheight = head.offsetHeight;
            const contenttop = content.getBoundingClientRect().top;
            const vantab = document.querySelector('.van-tabs__wrap');
            const vantabtop = vantab.getBoundingClientRect().top;
            if (contenttop < headheight) {
                head.classList.add('bg-[#f7fafc]')
                // head.classList.add('text-black')
                head.classList.remove('text-white')
            } else {
                head.classList.remove('bg-[#f7fafc]')
                // head.classList.remove('text-black')
                head.classList.add('text-white')
            }

            if (vantabtop < headheight) {
                vantab.classList.add('bg-[#f7fafc]')
            } else {
                vantab.classList.remove('bg-[#f7fafc]')
            }

        })
        // this.$on('hook:beforeDestroy',window.removeEventListener('scroll'))
    },

    async created() {
        // console.log(this.userid)
        const res = await getUserLeave();
        this.lv = res.data.data.level;

        const follows = await getUserFollows(this.userid);
        this.guanzhu = follows.data.follow.length;

        const followeds = await getUserFolloweds(this.userid);
        this.fensi = followeds.data.followeds.length;
        console.log(this.userinfo);

        const Subccountres = await getUserSubcount(this.userid);
        this.Subccount = Subccountres.data;
        // console.log(Subccountres.data)

        const Songlist = await getUserplaylist(this.userid);
        // console.log(Songlist.data.playlist)
        this.createlists = Songlist.data.playlist.filter(item => {
            return item.creator.nickname == this.userinfo.nickname
        })
        this.collectlists = Songlist.data.playlist.filter(item => {
            return item.creator.nickname !== this.userinfo.nickname
        })

    },
};
