<template>
    <div class="user">
        <div class="user-info">
            <div class="info-input"><p>账号资料</p><div class="line"></div></div>
            <div class="info-text">
                <span>账号</span>
                <div>
                    <el-input v-model="input" placeholder="请输入内容"></el-input>
                </div>
            </div>
            <div class="info-text">
                <span>姓名</span>
                <div>
                    <el-input v-model="input" placeholder="请输入内容"></el-input>
                </div>
            </div>
            <div class="info-text">
                <span>密码</span>
                <div>
                    <el-input v-model="input" placeholder="请输入内容"></el-input>
                </div>
            </div>
            <div class="info-text">
                <span>确认密码</span>
                <div>
                    <el-input v-model="input" placeholder="请输入内容"></el-input>
                </div>
            </div>
            <div class="info-text">
                <span>归属团队</span>
                <div class="info-checked">
                    <el-checkbox v-model="checked">备选项</el-checkbox>
                    <el-checkbox v-model="checked">备选项</el-checkbox>
                    <el-checkbox v-model="checked">备选项</el-checkbox>
                    <el-checkbox v-model="checked">备选项</el-checkbox>
                    <el-checkbox v-model="checked">备选项</el-checkbox>
                    <el-checkbox v-model="checked">备选项</el-checkbox>
                    <el-checkbox v-model="checked">备选项</el-checkbox>
                    <el-checkbox v-model="checked">备选项</el-checkbox>
                    <el-checkbox v-model="checked">备选项</el-checkbox>
                    <el-checkbox v-model="checked">备选项</el-checkbox>
                    <el-checkbox v-model="checked">备选项</el-checkbox>
                    <el-checkbox v-model="checked">备选项</el-checkbox>
                </div>
            </div>
            <div class="info-text">
                <span>确认密码</span>
                <div>
                     <el-select v-model="value" placeholder="请选择">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </div>
            </div>
             <div class="info-text">
                <span>确认密码</span>
                <div>
                     <el-select v-model="value" placeholder="请选择">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </div>
            </div>
             <div class="info-text">
                <span>归属团队</span>
                <div class="info-checked">
                    <el-checkbox v-model="checked">备选项</el-checkbox>
                    <el-checkbox v-model="checked">备选项</el-checkbox>
                    <el-checkbox v-model="checked">备选项</el-checkbox>
                </div>
            </div>
            <!-- 12 -->
             <div class="info-text">
                <span>归属团队</span>
                <div class="info-checked">
                    <el-checkbox v-model="checked">备选项</el-checkbox>
                    <el-checkbox v-model="checked">备选项</el-checkbox>
                </div>
            </div>
            <!-- 32 -->
            <div class="info-text">
                <span>确认密码</span>
                <div>
                     <el-select v-model="value" placeholder="请选择">
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
            value: ''
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
            }
            
            .line{
                height: 1px;
                width: 80%;
                background: #ccc;
                margin-top: 20px;
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
    }
}
</style>