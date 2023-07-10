import styled from 'styled-components-vue';
import _store from 'storejs';
const Vantab = styled.section`
height:20vh;
    .van-tabs{
        height:20vh;
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
`
import { mapState } from '@/vuex';
import { getUserLeave, getUserFollows, getUserFolloweds,getUserSubcount } from '@/request';
import { areaList } from '@vant/area-data';
console.log(areaList);

export default {
    render() {
        return (
            <div>
                <div class="box-border bg-[#f3f4f8]">
                    <header class="fixed w-[100%] top-0 flex justify-between items-center box-border px-[4vw] pt-[4vw]">
                        <Icon
                            class="text-[5vw]"
                            onClick={'toback'}
                            icon="teenyicons:left-outline"
                            color="white"
                        />
                        <span></span>
                        <Icon class="text-[5vw]" icon="ri:more-2-line" color="white" />
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

                    <section class="rounded-[12px] bg-white relative mt-[-2vh] w-[90%] mx-auto mb-[6vw] shadow-sm">
                        <div class="flex flex-col relative items-center">
                            <img
                                class=" shadow-lg w-[60px] h-[60px] rounded-[50%] absolute translate-y-[-50%]"
                                src={this.userinfo.avatarUrl}
                                alt=""
                            />
                            <p class=" font-[550] text[16px] tracking-[0.5px] mt-[40px]">
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
                            <van-tab  title="主页">
                                    <div class="bg-white rounded-[8px] p-4 box-border">
                                            <header class=" font-semibold mb-[4vw]">音乐品味</header>
                                    </div>

                            </van-tab>
                            <van-tab  title="动态">2</van-tab>
                            <van-tab  title="播客">3</van-tab>
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
    mounted() {
        // console.log(this.userid)
    },
    async created() {
        // console.log(this.userid)
        const res = await getUserLeave();
        this.lv = res.data.data.level;

        const follows = await getUserFollows(this.userid);
        this.guanzhu = follows.data.follow.length;

        const followeds = await getUserFolloweds(this.userid);
        this.fensi = followeds.data.followeds.length;
        // console.log(this.userinfo);

        const eventres = await getUserSubcount(this.userid);
        console.log(eventres)
    },
};
