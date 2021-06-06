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
           
             <el-button type="primary"> <i class="el-icon-plus"></i>增加</el-button>
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
            label="广告计划"
            width="100">
            <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.name }}</span>
            </template>
            </el-table-column>
            <el-table-column
            label="状态"
            width="100">
            <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.status }}</span>
            </template>
            </el-table-column>
            <!--  -->
             <el-table-column
                label="预算（元）"
                width="100">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.account }}</span>
                </template>
            </el-table-column>
            <!--  -->
             <el-table-column
                label="剩余预算（元/天）"
                width="100">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.role }}</span>
                </template>
            </el-table-column>
            <!-- 121 -->
             <el-table-column
                label="推广单元（个）"
                width="100">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </template>
            </el-table-column>
            <!-- 23 -->
             <el-table-column
                label="展现量"
                width="80">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.isDisable }}</span>
            </template>
            </el-table-column>
            <!--  -->
             <el-table-column
                label="点击量"
                width="80">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.isDisable }}</span>
            </template>
            </el-table-column>
            <!--  -->
             <el-table-column
                label="消费"
                width="80">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.isDisable }}</span>
            </template>
            </el-table-column>
               <!--  -->
             <el-table-column
                label="单价"
                width="80">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.isDisable }}</span>
            </template>
            </el-table-column>
               <!--  -->
             <el-table-column
                label="下载量"
                width="80">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.isDisable }}</span>
            </template>
            </el-table-column>
              <!--  -->
             <el-table-column
                label="安装量"
                width="80">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.isDisable }}</span>
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
          date: '2',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          status:'正常',
          account:'20',
          role:'销售负责人',
          isDisable:'是'
        }, {
          date: '4',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          status:'正常',
          account:'222',
          role:'销售负责人',
           isDisable:'是'
        }, {
          date: '01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          status:'正常',
          account:'444',
          role:'销售负责人',
           isDisable:'是'
        }, {
          date: '16',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          status:'正常',
          account:'66',
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