<template>
<div class="list">
    <div class="list-btn">
        <div>
            <el-select v-model="value" placeholder="请选择部门">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>
        </div>
        <div class="search">
            <el-button type="primary">查询</el-button>
        </div>
        <div>
           
             <el-button type="primary" @click="handleadd"> <i class="el-icon-plus"></i>增加</el-button>
              <el-button type="danger"><i class="el-icon-delete"></i>批量删除</el-button>
            <el-button type="success"><i class="el-icon-caret-right"></i>批量启动</el-button>
        </div>
    </div>
    <div class="list-table">
          <el-table
            :data="tableData"
            style="width: 100%">
             <el-table-column
            type="selection"
            width="40">
            </el-table-column>
            <el-table-column
            label="投放计划"
            width="150">
            <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.name }}</span>
            </template>
            </el-table-column>
            <el-table-column
            label="计划状态"
            width="100">
            <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.status }}</span>
            </template>
            </el-table-column>
            <!--  -->
             <el-table-column
                label="曝光时长"
                width="50">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.exposure }}</span>
                </template>
            </el-table-column>
            <!--  -->
             <el-table-column
                label="投放策略"
                width="80">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.way }}</span>
                </template>
            </el-table-column>
            <!-- 121 -->
             <el-table-column
                label="广告位数量"
                width="100">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.nums }}</span>
                </template>
            </el-table-column>
            <!-- 23 -->
             <el-table-column
                label="定位时间"
                width="180">
                <template slot-scope="scope">
                     <i class="el-icon-time"></i>
                    <span style="margin-left: 10px">{{ scope.row.site }}</span>
            </template>
            </el-table-column>
             <!-- 23 -->
             <el-table-column
                label="团队"
                width="100">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.team }}</span>
            </template>
            </el-table-column>
             <!-- 23 -->
             <el-table-column
                label="客户"
                width="100">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.customer }}</span>
            </template>
            </el-table-column>
             <!-- 23 -->
             <el-table-column
                label="平台"
                width="100">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.platform }}</span>
            </template>
            </el-table-column>
               <!-- 23 -->
             <el-table-column
                label="终端"
                width="90">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.terminal }}</span>
            </template>
            </el-table-column>
            <el-table-column label="操作">
            <template slot-scope="scope">
                <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
            </el-table-column>
        </el-table>
    </div>
</div>
 
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          name: '听见广播-一刻英语',
          exposure: '5s',
          way: '定投',
          status:'投放完成',
          nums: '7021个',
          site:'20200115-20210506',
          team:'影谱团队',
          customer:'听见广播',
          platform:'影谱内侧',
          terminal:'OTT',
          role:'销售负责人',
          isDisable:'是'
        },{
          name: '投放计划点位测试',
          exposure: '--',
          way: '通投',
          status:'投放进行中',
          nums: '6部剧 193集 7021个',
          site:'20210115-20210116',
          team:'影谱团队',
          customer:'点位测试',
          platform:'影谱内侧',
          terminal:'IPDA',
          role:'销售负责人',
          isDisable:'是'
        },{
          name: '听见广播-少儿动漫',
          exposure: '3s',
          way: '词投',
          status:'投放进行中',
          nums: '3部剧 90集 900个',
          site:'20200115-20210506',
          team:'影谱团队',
          customer:'听见广播',
          platform:'影谱内侧',
          terminal:'PHONE',
          role:'销售负责人',
          isDisable:'是'
        },{
          name: '芒果tv-快乐大本营',
          exposure: '5s',
          way: '定投',
          status:'投放完成',
          nums: '1部剧 30集 787个',
          site:'20200115-20210506',
          team:'芒果tv',
          customer:'芒果tv',
          platform:'影谱内侧',
          terminal:'IPDA',
          role:'销售负责人',
          isDisable:'是'
        },{
          name: '腾讯视频-成人动漫',
          exposure: '3s',
          way: '通投',
          status:'投放进行中',
          nums: '15部剧 456集 4021个',
          site:'20200320-20210506',
          team:'腾讯视频',
          customer:'腾讯视频',
          platform:'影谱内侧',
          terminal:'PHONRE',
          role:'销售负责人',
          isDisable:'是'
        },{
          name: '暴风影音-电影综合',
          exposure: '5s',
          way: '通投',
          status:'投放完成',
          nums: '60部剧 60集 300个',
          site:'20200115-20201030',
          team:'暴风影音',
          customer:'暴风影音',
          platform:'影谱内侧',
          terminal:'PHONRE',
          role:'销售负责人',
          isDisable:'是'
        },{
          name: '暴风影音-电视剧',
          exposure: '5s',
          way: '定投',
          status:'投放进行中',
          nums: '50部剧 3000集 11021个',
          site:'20191010-20210604',
          team:'暴风影音',
          customer:'暴风影音',
          platform:'影谱内侧',
          terminal:'PHONRE',
          role:'销售负责人',
          isDisable:'是'
        },{
          name: '芒果tv-电视剧',
          exposure: '5s',
          way: '定投',
          status:'投放完成',
          nums: '60部剧 4500集 12018',
          site:'20191010-20210604',
          team:'芒果tv',
          customer:'芒果tv',
          platform:'影谱内侧',
          terminal:'PHONE',
          role:'销售负责人',
          isDisable:'是'
        },{
          name: '听见广播-火花思维',
          exposure: '5s',
          way: '定投',
          status:'投放完成',
          nums: '10000个',
          site:'20200115-20210506',
          team:'听见广播',
          customer:'听见广播',
          platform:'影谱内侧',
          terminal:'OTT',
          role:'销售负责人',
          isDisable:'是'
        },{
          name: '听见广播-贝因美',
          exposure: '5s',
          way: '定投',
          status:'投放完成',
          nums: '9000个',
          site:'20200115-20210506',
          team:'听见广播',
          customer:'听见广播',
          platform:'影谱内侧',
          terminal:'OTT',
          role:'销售负责人',
          isDisable:'是'
        }],
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
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      handleadd(){
           this.$router.push({path: '/Launchadd'})
      }
    }
  }
</script>
<style lang="less" scoped>
.list{
    width: 100%;
    margin-top: 10px;
    .list-btn{
        display: flex;
        margin-bottom: 10px;
        margin-left: 10px;
        .search{
            margin:0 5px;
        }
    }
    .list-table{
        margin-left: 10px;
    }
}
</style>