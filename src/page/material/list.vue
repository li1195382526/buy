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
           
             <el-button type="primary" @click="handleAdd"> <i class="el-icon-plus"></i>增加</el-button>
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
            width="55">
            </el-table-column>
            <el-table-column
            label="物料名称"
            width="180">
            <template slot-scope="scope">
                <span>{{ scope.row.mname }}</span>
            </template>
            </el-table-column>
            <el-table-column
            label="图片预览"
            width="100">
            <template slot-scope="scope">
                <span class="slot-spen">{{ scope.row.pview }}</span>
            </template>
            </el-table-column>
            <!--  审核状态-->
             <el-table-column
                label="审核状态"
                width="100">
                <template slot-scope="scope">
                    <span>{{ scope.row.audit }}</span>
                </template>
            </el-table-column>
            <!--  物料分类-->
             <el-table-column
                label="物料分类"
                width="100">
                <template slot-scope="scope">
                    <span>{{ scope.row.classify }}</span>
                </template>
            </el-table-column>
            <!-- 物料类型 -->
             <el-table-column
                label="物料类型"
                width="100">
                <template slot-scope="scope">
                    <span>{{ scope.row.type }}</span>
                </template>
            </el-table-column>
            <!-- 客户 -->
             <el-table-column
                label="客户"
                width="100">
                <template slot-scope="scope">
                    <span>{{ scope.row.customer }}</span>
                </template>
            </el-table-column>
            <!-- 团队 -->
             <el-table-column
                label="团队"
                width="100">
                <template slot-scope="scope">
                    <span>{{ scope.row.team }}</span>
                </template>
            </el-table-column>
            <!-- 操作 -->
             <el-table-column
                label="禁用/启用"
                width="100">
                <template slot-scope="scope">
                    <span>{{ scope.row.isDisable }}</span>
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
         <div class="page">
            <el-pagination
            background
            layout="prev, pager, next"
            :total="1000">
            </el-pagination>
        </div>
    </div>
</div>
 
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          mname: '听见',
          pview: '查看图片',
          audit: '已通过',
          classify:'3C/IT',
          type:'易值贴',
          role:'销售负责人',
          customer:'听见广播',
          team:'康佳平台',
          isDisable:'否'
        },{
          mname: '宝马客户',
          pview: '查看图片',
          audit: '已通过',
          classify:'3C/IT',
          type:'易值贴',
          role:'销售负责人',
          customer:'宝马团队',
          team:'影谱销售',
          isDisable:'否'
        },{
          mname: 'rq演示',
          pview: '查看图片',
          audit: '未通过',
          classify:'快销品',
          type:'模版及时贴',
          role:'销售负责人',
          customer:'听见广播',
          team:'影谱内部测试',
          isDisable:'是'
        },{
          mname: '智能投放',
          pview: '查看图片',
          audit: '已通过',
          classify:'快销品',
          type:'模版及时贴',
          role:'销售负责人',
          customer:'华数植入易',
          team:'影谱内部测试',
          isDisable:'否'
        },{
          mname: '芒果tv',
          pview: '查看图片',
          audit: '已通过',
          classify:'3C/IT',
          type:'易值贴',
          role:'销售负责人',
          customer:'听见广播',
          team:'芒果平台',
          isDisable:'否'
        },{
          mname: '暴风影音',
          pview: '查看图片',
          audit: '已通过',
          classify:'3C/IT',
          type:'易值贴',
          role:'销售负责人',
          customer:'听见广播',
          team:'暴风平台',
          isDisable:'否'
        },{
          mname: '至美广告',
          pview: '查看图片',
          audit: '已通过',
          classify:'快销品',
          type:'易值贴',
          role:'销售负责人',
          customer:'听见广播',
          team:'影谱内部测试',
          isDisable:'是'
        },{
          mname: '北新广告',
          pview: '查看图片',
          audit: '已通过',
          classify:'3C/IT',
          type:'易值贴',
          role:'销售负责人',
          customer:'听见广播',
          team:'影谱内部测试',
          isDisable:'是'
        },{
          mname: '爱奇艺',
          pview: '查看图片',
          audit: '已通过',
          classify:'3C/IT',
          type:'易值贴',
          role:'销售负责人',
          customer:'听见广播',
          team:'爱奇艺平台',
          isDisable:'否'
        },{
          mname: '抖音',
          pview: '查看图片',
          audit: '已通过',
          classify:'3C/IT',
          type:'易值贴',
          role:'销售负责人',
          customer:'听见广播',
          team:'字节跳动平台',
          isDisable:'否'
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
      handleAdd(){
          this.$router.push({path: '/materialadd'})
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
        .slot-spen{
            color:deepskyblue;
        }
    }
    .page{
        margin-top:10px;
    }
}
</style>