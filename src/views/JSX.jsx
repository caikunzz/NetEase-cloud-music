import styled from 'styled-components-vue'
const Wrapper = styled.div`
    background:orange;
    width:100px;
    height:100px;
    color:red;
`
export default {
    render() {
        return (
            <Wrapper >
                <div onClick={() => { this.index++ }}>
                    {this.index % 2 == 0 ? <div>偶数</div> : <div>奇数</div>}
                </div>
                <img src={this.img} alt="" />
                <input type="text" value={this.value} onInput={(e)=>(this.value = e)} />
            </Wrapper>
        )
    },
    data() {
        return {
            msg: 'hello jsx!',
            index: 0,
            img:'',
            value:''
        }
    }
}