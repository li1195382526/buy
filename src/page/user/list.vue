<template>
<div class="list">
    <div class="list-btn">
        <div>
            <el-select v-model="value" placeholder="请选择角色">
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
            label="名称"
            width="100">
            <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.name }}</span>
            </template>
            </el-table-column>
            <el-table-column
            label="全部状态"
            width="100">
            <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.status }}</span>
            </template>
            </el-table-column>
            <!--  -->
             <el-table-column
                label="账号"
                width="220">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.account }}</span>
                </template>
            </el-table-column>
            <!--  -->
             <el-table-column
                label="角色"
                width="180">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.role }}</span>
                </template>
            </el-table-column>
            <!-- 121 -->
             <el-table-column
                label="创建时间"
                width="180">
                <template slot-scope="scope">
                    <i class="el-icon-time"></i>
                    <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </template>
            </el-table-column>
            <!-- 23 -->
             <el-table-column
                label="禁用/启用"
                width="180">
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
          date: '2020-05-02',
          name: '王小龙',
          address: '北京市朝阳区',
          status:'正常',
          account:'wangxiaolong@moviebook.cn',
          role:'销售负责人',
          isDisable:'否'
        }, {
          date: '2020-01-04',
          name: '马思玉',
          address: '北京市海淀区',
          status:'正常',
          account:'masiyu@moviebook.cn',
          role:'超级管理员',
           isDisable:'否'
        }, {
          date: '2021-04-01',
          name: '辛路路',
          address: '上海市普陀区金沙江路 1519 弄',
          status:'异常',
          account:'xinlulu@moviebook.cn',
          role:'调试负责人',
           isDisable:'是'
        }, {
          date: '2020-08-13',
          name: '李美丽',
          address: '上海市普陀区金沙江路 1516 弄',
          status:'正常',
          account:'limeili@moviebook.cn',
          role:'销售负责人',
          isDisable:'否'
        },
         {
          date: '2021-03-01',
          name: '付莹',
          address: '上海市普陀区金沙江路 1516 弄',
          status:'正常',
          account:'fuying@moviebook.cn',
          role:'地方',
          isDisable:'否'
        },
         {
          date: '2020-03-01',
          name: '张亚莉',
          address: '上海市普陀区金沙江路 1516 弄',
          status:'正常',
          account:'zhangyali@moviebook.cn',
          role:'超级管理员',
          isDisable:'否'
        },
         {
          date: '2020-09-20',
          name: '孙建飞',
          address: '上海市普陀区金沙江路 1516 弄',
          status:'正常',
          account:'sunjianfei@moviebook.cn',
          role:'销售负责人',
          isDisable:'否'
        },
         {
          date: '2020-01-15',
          name: '魏玉超',
          address: '上海市普陀区金沙江路 1516 弄',
          status:'正常',
          account:'weiyuchao@moviebook.cn',
          role:'超级管理员',
          isDisable:'否'
        },
         {
          date: '2021-03-01',
          name: '邓钦文',
          address: '上海市普陀区金沙江路 1516 弄',
          status:'正常',
          account:'dengqinwen@moviebook.cn',
          role:'地方',
          isDisable:'是'
        },
         {
          date: '2021-03-01',
          name: '刘伟',
          address: '上海市普陀区金沙江路 1516 弄',
          status:'正常',
          account:'liuwei@moviebook.cn',
          role:'超级管理员',
          isDisable:'否'
        }
        ],
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
           this.$router.push({path: '/user'})
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
    .page{
        width: 100%;
       //display: flex;
        margin-top: 10px;
    }
}
</style>