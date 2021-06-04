<template>
    <div>
        <vheader></vheader>
        <div class="box">
            <meun></meun>
        </div>
    </div>
</template>
<script>
import vheader from './header/index'
import meun from './meun/index'
export default {
    components:{
        vheader,meun
    },
    setup() {
        
    },
    data(){

    }
}
</script>
<style scoped lang="less">
.box{
width: 100%;
}
</style>
