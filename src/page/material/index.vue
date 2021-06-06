<template>
    <div class="user">
        <div class="user-info">
            <div class="info-input"><p>创建物料</p><div class="line"></div></div>
            <div class="info-text">
                <span>广告物料名称</span>
                <div>
                    <el-input v-model="input" placeholder="请输入内容"></el-input>
                </div>
            </div>
            <div class="info-text">
                <span>类型</span>
                <div class="info-checked">
                      <el-radio v-model="radio" label="1">文字</el-radio>
                      <el-radio v-model="radio" label="2">图片</el-radio>
                      <el-radio v-model="radio" label="3">Flash</el-radio>
                      <el-radio v-model="radio" label="4">富媒体</el-radio>
                </div>
            </div>
            <!--  -->
            <div class="info-text">
                <span>图片类型</span>
                <div class="info-checked">
                      <el-radio v-model="radio" label="1">上传</el-radio>
                      <el-radio v-model="radio" label="2">远程</el-radio>
                </div>
            </div>
            <div class="updata">
                <div class="up">
                    <div>
                         <el-input v-model="input" placeholder="选择图片"></el-input>
                    </div>
                    <div class="up-btn">
                         <el-button type="primary" disabled>上传图片</el-button>
                    </div>
                </div> 
            </div>
            <!--  -->
             <div class="info-text">
                <span>客户归属</span>
                <div>
                     <div>
                     <el-select v-model="value" placeholder="选择团队">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                    <el-select v-model="value" placeholder="选择客户">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                </div>
            </div>
            <!--  -->
             <div class="info-text">
                <span>物料分类</span>
                <div>
                     <el-select v-model="value" placeholder="选择分类">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </div>
            </div>
            <!--  -->
            <div class="info-text">
                <span>图片描述</span>
                <div>
                    <el-input v-model="input" placeholder="请填写图片描述"></el-input>
                </div>
            </div>
            <div class="info-text">
                <span>点击链接</span>
                <div>
                    <el-input v-model="input" placeholder="请填写链接地址"></el-input>
                </div>
            </div>
            <div class="info-text">
                <span>目标窗口</span>
                <div class="info-checked">
                      <el-radio v-model="radio" label="1">新窗口</el-radio>
                      <el-radio v-model="radio" label="2">原窗口</el-radio>
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
            radio:'1'
        }
    }
}
</script>
<style scoped lang="less">
.user{
    width: 100%;
    .save-btn{
        width: 200px;
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