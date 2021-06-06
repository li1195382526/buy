<template>
    <div class="user">
        <div class="user-info">
            <div class="info-input"><p>创建客户</p><div class="line"></div></div>
            <div class="info-text">
                <span>客户名称</span>
                <div>
                    <el-input v-model="input" placeholder="请输入客户名称"></el-input>
                </div>
            </div>
            <!--  -->
             <div class="info-text">
                <span>归属团队</span>
                <div>
                     <div>
                     <el-select v-model="value" placeholder="请选择归属团队">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                    <el-select v-model="value" placeholder="请选择客户">
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
        </div>
        <div class="user-info">
            <div class="info-input"><p>公司资料</p><div class="line"></div></div>
            <div class="info-text">
                <span>名称</span>
                <div>
                    <el-input v-model="input" placeholder="请输入公司名称"></el-input>
                </div>
            </div>
            <!--  -->
             <div class="info-text">
                <span>所属行业</span>
                <div>
                     <div>
                     <el-select v-model="value" placeholder="选择公司所属行业">
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
            <div class="info-text">
                <span>地区</span>
                <div>
                     <div>
                     <el-select v-model="value" placeholder="省">
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
             <div class="info-text">
                <span></span>
                <div>
                     <div>
                     <el-select v-model="value" placeholder="市">
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
             <div class="info-text">
                <span></span>
                <div>
                     <div>
                     <el-select v-model="value" placeholder="区">
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
        </div>
        <div class="user-info">
            <div class="info-input"><p>客户资料</p><div class="line"></div></div>
            <div class="info-text">
                <span>名称</span>
                <div>
                    <el-input v-model="input" placeholder="请输入客户名称"></el-input>
                </div>
            </div>
            <div class="info-text">
                <span>电话</span>
                <div>
                    <el-input v-model="input" placeholder="请输入客户电话"></el-input>
                </div>
            </div>
              <div class="info-text">
                <span>职务</span>
                <div>
                    <el-input v-model="input" placeholder="请输入客户职务"></el-input>
                </div>
            </div>
        </div>
       <div>
           <!-- <el-button type="info">取消</el-button> -->
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