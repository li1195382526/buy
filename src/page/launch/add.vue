<template>
    <div class="user">
        <div class="user-info">
            <div class="info-input"><p>计划信息</p><div class="line"></div></div>
            <div class="info-text">
                <span>计划名称</span>
                <div>
                    <el-input v-model="input" placeholder="请输入内容"></el-input>
                </div>
            </div>
            <div class="info-text">
                <span>投放方式</span>
                <div class="info-checked">
                      <el-radio v-model="radio" label="1">cpm投放</el-radio>
                      <el-radio v-model="radio" label="2">包剧投放</el-radio>
                      <el-radio v-model="radio" label="3">场景投放</el-radio>
                      <el-radio v-model="radio" label="4">综合投放</el-radio>
                </div>
            </div>
            <!--  -->
            <div class="info-text">
                <span>终端</span>
                <div class="info-checked">
                       <el-checkbox v-model="checked">PC端</el-checkbox>
                        <el-checkbox v-model="checked">手机端</el-checkbox>
                </div>
            </div>
            <!--  -->
             <div class="info-text">
                <span>是否智点投放</span>
                <div class="info-checked">
                      <el-radio v-model="radio" label="1">否</el-radio>
                      <el-radio v-model="radio" label="2">是</el-radio>
                </div>
            </div>
            <!--  -->
             <div class="info-text">
                <span>测投</span>
                <div class="info-checked">
                      <el-radio v-model="radio" label="1">正常</el-radio>
                      <el-radio v-model="radio" label="2">侧投</el-radio>
                </div>
            </div>
             <!--  -->
            <div class="info-text">
                <span>合同价格</span>
                <div>
                    <el-input v-model="input" placeholder="请填写合同价格"></el-input>
                </div>
            </div>
             <div class="info-text">
                <span>折扣</span>
                <div>
                    <el-input v-model="input" placeholder="请填写折扣"></el-input>
                </div>
            </div>
             <!--  -->
             <div class="info-text">
                <span>投放类型</span>
                <div class="info-checked">
                      <el-radio v-model="radio" label="1">正常投放</el-radio>
                      <el-radio v-model="radio" label="2">正常+补量</el-radio>
                      <el-radio v-model="radio" label="2">纯补量</el-radio>
                </div>
            </div>
            <div class="info-text">
                <span>投放时间</span>
                <div>
                       <el-date-picker
                        v-model="value1"
                        type="date"
                        placeholder="选择开始日期">
                        </el-date-picker>
                         <el-date-picker
                        v-model="value1"
                        type="date"
                        placeholder="选择结束日期">
                        </el-date-picker>
                </div>
            </div>
        </div>
         <div class="save-btn">
            <el-button type="primary">保存</el-button>
        </div>
    </div>
</template>
<script>
export default {
    setup() {
        
    },
    data:function(){
        return{
            input:'',
            checked:false,
            options: [{
            value: '选项1',
            label: '黄金糕'
            }, {
            value: '选项2',
            label: '双皮奶'
            }, {
            value: '选项3',
            label: '蚵仔煎'
            }, {
            value: '选项4',
            label: '龙须面'
            }, {
            value: '选项5',
            label: '北京烤鸭'
            }],
            value: '',
            radio:'1',
            value1:''
        }
    }
}
</script>
<style scoped lang="less">
.user{
    width: 100%;
.save-btn{
width: 300px;
}
    .user-info{
        width: 100%;
        margin: auto;
        .info-input{
            width: 100%;
            display: flex;
            p{
                margin-bottom: 10px;
                text-align: left; 
                line-height: 40px;
                margin: 0 10px 10px 10px;
                color: #a9c9e3;
                font-weight: 600;
            }
            
            .line{
                  height: 1px;
                width: 93%;
                margin-top: 20px;
                background: rgb(169, 201, 227);
            }
        }
        .info-text{
            display: flex;
            margin-bottom: 10px;
            span{
                width: 100px;
                text-align: right;
                display: inline-block;
                margin-right: 10px;
                line-height: 40px;
            }
            .info-checked{
                margin-top:10px;
            }
        }
        .updata{
            margin-bottom: 10px;
            .up{
                display: flex;
                margin-left: 111px;
                .up-btn{
                    margin-left: 10px;
                }
            }
        }
    }
}
</style>