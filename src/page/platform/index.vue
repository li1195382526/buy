<template>
  <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane label="暴风" name="first">
        <div class="palt-box">
            <div class="title">新建</div>
            <div class="plat-input">
                <el-input
                placeholder="所属平台"
                v-model="input"
                clearable>
                </el-input>
                 <el-input
                 class="input"
                placeholder="公司名称"
                v-model="input"
                clearable>
                </el-input>
            </div>
            <div class="plat-input">
                <el-input
                placeholder="平台名称"
                v-model="input"
                clearable>
                </el-input>
                 <el-input
                 class="input"
                placeholder="物料名称"
                v-model="input"
                clearable>
                </el-input>
            </div>
            <!-- <div>
                <el-input placeholder="请输入内容" v-model="input2">
                    <template slot="append">.com</template>
                </el-input>
            </div> -->
        </div>

        <!--  -->
        <div class="palt-box">
            <div class="title">物料尺寸</div>
            <div class="plat-input">
                 <el-input placeholder="请输入内容" v-model="input2">
                    <template slot="append">宽</template>
                </el-input>
                 <el-input placeholder="请输入内容" v-model="input2" class="input">
                    <template slot="append">高</template>
                </el-input>
                 <el-input placeholder="请输入内容" v-model="input2" class="input">
                    <template slot="append">MB</template>
                </el-input>
                <div>
                    <i class="el-icon-delete-solid"></i>
                </div>
            </div>
            <div class="plat-input">
                <el-input placeholder="请输入内容" v-model="input2">
                    <template slot="append">宽</template>
                </el-input>
                 <el-input placeholder="请输入内容" v-model="input2" class="input">
                    <template slot="append">高</template>
                </el-input>
                 <el-input placeholder="请输入内容" v-model="input2" class="input">
                    <template slot="append">MB</template>
                </el-input>
                <div>
                    <i class="el-icon-delete-solid"></i>
                </div>
            </div>
            <!-- <div>
                <el-input placeholder="请输入内容" v-model="input2">
                    <template slot="append">.com</template>
                </el-input>
            </div> -->
        </div>

        <div class="palt-box">
            <div class="title">物料坐标</div>
            <div class="plat-input">
                 <el-input placeholder="" v-model="input2">
                    <template slot="append">点位</template>
                </el-input>
                 <el-input placeholder="请输入内容" v-model="input2" class="input">
                    <template slot="append">X</template>
                </el-input>
                 <el-input placeholder="请输入内容" v-model="input2" class="input">
                    <template slot="append">Y</template>
                </el-input>
                <div>
                    <i class="el-icon-delete-solid"></i>
                </div>
            </div>
            <div class="plat-input">
                <el-input placeholder="请输入内容" v-model="input2">
                    <template slot="append">点位</template>
                </el-input>
                 <el-input placeholder="请输入内容" v-model="input2" class="input">
                    <template slot="append">X</template>
                </el-input>
                 <el-input placeholder="请输入内容" v-model="input2" class="input">
                    <template slot="append">Y</template>
                </el-input>
                <div>
                    <i class="el-icon-delete-solid"></i>
                </div>
            </div>
            <!-- <div>
                <el-input placeholder="请输入内容" v-model="input2">
                    <template slot="append">.com</template>
                </el-input>
            </div> -->
        </div>
        <div class="palt-box">
            <div class="title">上传物料格式</div>
            <div class="plat-input">
                  <el-checkbox label="jpg"></el-checkbox>
                  <el-checkbox label="png"></el-checkbox>
                  <el-checkbox label="gif"></el-checkbox>
                  <el-checkbox label="swf"></el-checkbox>
                  <el-checkbox label="webp"></el-checkbox>
            </div>
        </div>
    </el-tab-pane>
    <el-tab-pane label="芒果TV" name="second">芒果TV</el-tab-pane>
    <el-tab-pane label="华数" name="third">华数</el-tab-pane>
    <el-tab-pane label="影谱演示" name="fourth">影谱演示</el-tab-pane>
  </el-tabs>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'first',
        input2:'300',
        input:''
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>
<style lang="less" scoped>
.palt-box{
    .title{
        width: 200px;
        text-align: left;
        margin-left: 10px;
        margin-bottom: 10px;
    }
    .plat-input{
        display: flex;
        margin-bottom: 10px;
        margin-left: 10px;
        .input{
            margin-left: 10px;
        }
        .el-icon-delete-solid{
                font-size: 20px;
                line-height: 40px;
                margin-left: 10px;
                color: red;
        }
    }
}
</style>