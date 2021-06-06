<template>
<div class="meun">
    <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <!-- <el-submenu index="1" @click="handleGo(index)">
        <template slot="title">
        <i class="el-icon-location"></i>
        <span>用户管理</span>
        </template>
        <el-menu-item-group>
        <el-menu-item index="1-1" @click="goRouter">用户管理</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
        <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
        <template slot="title">选项4</template>
        <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
    </el-submenu> -->
     <el-menu-item index="1" @click="handleGo">
        <i class="el-icon-user-solid"></i>
        <span slot="title">用户管理</span>
    </el-menu-item>
    <el-menu-item index="2" @click="handleGo">
        <i class="el-icon-hot-water"></i>
        <span slot="title">客户管理</span>
    </el-menu-item>
    <el-menu-item index="3" @click="handleGo">
        <i class="el-icon-document"></i>
        <span slot="title">物料管理</span>
    </el-menu-item>
    <el-menu-item index="4" @click="handleGo">
        <i class="el-icon-setting"></i>
        <span slot="title">平台管理</span>
    </el-menu-item>
    <el-menu-item index="5" @click="handleGo">
        <i class="el-icon-s-promotion"></i>
        <span slot="title">投放管理</span>
    </el-menu-item>
    <!-- <el-menu-item index="6" @click="handleGo">
        <i class="el-icon-setting"></i>
        <span slot="title">曝光管理</span>
    </el-menu-item> -->
        <el-menu-item index="7" @click="handleGo">
        <i class="el-icon-s-data"></i>
        <span slot="title">计费管理</span>
    </el-menu-item>
    </el-menu>
</div>
</template>

<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
        if(key==1){
            this.$router.push({
                                path: '/list',
                            })
        }
        if(key==2){
            this.$router.push({path: '/customer'})
        }
        if(key==3){
            this.$router.push({path: '/material'})
        }
        if(key==4){
            this.$router.push({path: '/Platform'})
        }
        if(key==5){
            this.$router.push({path: '/Launch'})
        }
        if(key==6){
            this.$router.push({path: '/Exposure'})
        }
        if(key==7){
            this.$router.push({path: '/Billing'})
        }
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      goRouter(){
        this.$router.push({path: '/list'})
      },
      handleGo(val){
          console.log(val)
          if(val.index==1){
            this.$router.push({
                                path: '/list',
                            })
        }
        if(val.index==2){
            this.$router.push({path: '/customer'})
        }
        if(val.index==3){
            this.$router.push({path: '/material'})
        }
        if(val.index==4){
            this.$router.push({path: '/Platform'})
        }
        if(val.index==5){
            this.$router.push({path: '/Launch'})
        }
        if(val.index==6){
            this.$router.push({path: '/Exposure'})
        }
        if(val.index==7){
            this.$router.push({path: '/Billing'})
        }
      }
    }
  }
</script>
<style scoped lang="less">
.meun{
    width: 202px;
    height: 93vh;
    .tac{
        width: 100%;
    }
    .el-menu-vertical-demo{
        height: 100%;
    }
}
</style>