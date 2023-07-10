import { areaList } from '@vant/area-data';
import styled from 'styled-components-vue'
const Wrapper = styled.div`
    .van-picker__confirm{
        color: red;
    }
`

export default {
    render() {
        return <div>
            <Wrapper>
                <van-popup v-model={this.pupupVisible} position="bottom" style='height:30%'>
                    <van-area title="标题" area-list={this.areaList}  columns-num="2" onConfirm={this.comfirm} onCancel={this.cancel} confirm-button-text="确认" />
                </van-popup>
            </Wrapper>
        </div >
    },
    data() {
        return {
            pupupVisible: true,
            areaList: Object.freeze(areaList),
        }
    },
    methods: {
        comfirm(e) {
            this.pupupVisible = false;
            console.log(e)
        },
        cancel() {
            this.pupupVisible = false;
        }
    }
}