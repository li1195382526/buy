<template>
    <div class="header">
        <div class="sys">
            <!-- <img :src="url" alt="" class="bgimg"> -->
            影谱智能投放系统
        </div>
    </div>
</template>
<script>
import url from '../../assets/2.png';
export default {
    setup() {
        
    },
    data:function(){
        return{
            url:''
        }
    },
    created(){
        this.url = url
    }
}
</script>
<style scoped lang="less">
.header{
    height: 50px;
    line-height: 50px;
    background: url(../../assets/bg1.jpg);
    //border-bottom:1px solid #ccc;
    .sys{
        font-size: 20px;
        font-weight: 600;
        display: flex;
        margin-left: 10px;
        color:#fff;
        .bgimg{
            width: 80px;
            height: 50px;
        }
    }
}
</style>