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
            width="180">
            <template slot-scope="scope">
                <span>{{ scope.row.name }}</span>
            </template>
            </el-table-column>
            <el-table-column
            label="状态"
            width="100">
            <template slot-scope="scope">
                <span>{{ scope.row.status }}</span>
            </template>
            </el-table-column>
            <!--  -->
             <el-table-column
                label="预算（元）"
                width="100">
                <template slot-scope="scope">
                    <span>{{ scope.row.account }}</span>
                </template>
            </el-table-column>
            <!--  -->
             <el-table-column
                label="剩余预算（元/天）"
                width="100">
                <template slot-scope="scope">
                    <span>{{ scope.row.surplus }}</span>
                </template>
            </el-table-column>
            <!-- 121 -->
             <el-table-column
                label="推广单元（个）"
                width="100">
                <template slot-scope="scope">
                    <span>{{ scope.row.unit }}</span>
                </template>
            </el-table-column>
            <!-- 23 -->
             <el-table-column
                label="展现量"
                width="80">
                <template slot-scope="scope">
                    <span>{{ scope.row.show }}</span>
            </template>
            </el-table-column>
            <!--  -->
             <el-table-column
                label="点击量"
                width="80">
                <template slot-scope="scope">
                    <span>{{ scope.row.click }}</span>
            </template>
            </el-table-column>
            <!--  -->
             <el-table-column
                label="消费"
                width="80">
                <template slot-scope="scope">
                    <span>{{ scope.row.consume }}</span>
            </template>
            </el-table-column>
               <!--  -->
             <el-table-column
                label="单价"
                width="80">
                <template slot-scope="scope">
                    <span>{{ scope.row.univalence }}</span>
            </template>
            </el-table-column>
               <!--  -->
             <el-table-column
                label="下载量"
                width="80">
                <template slot-scope="scope">
                    <span>{{ scope.row.download }}</span>
            </template>
            </el-table-column>
              <!--  -->
             <el-table-column
                label="安装量"
                width="80">
                <template slot-scope="scope">
                    <span>{{ scope.row.install }}</span>
            </template>
            </el-table-column>
            <el-table-column label="操作" width="150">
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
          name: '听见广播-一刻英语',
          status: '投放完成',
          surplus:'5000',
          unit:'0',
          show:'0',
          click:'5000',
          consume:'15000',
          univalence:'3',
          download:'1000',
          install:'999',
          address: '上海市普陀区金沙江路 1518 弄',
          account:'20000',
          role:'销售负责人',
          isDisable:'是'
        },{
          name: '听见广播-火花思维',
          status: '投放完成',
          surplus:'-10000',
          unit:'0',
          show:'0',
          click:'10000',
          consume:'40000',
          univalence:'4',
          download:'5000',
          install:'3800',
          address: '上海市普陀区金沙江路 1518 弄',
          account:'30000',
          role:'销售负责人',
          isDisable:'是'
        },{
          name: '听见广播-贝因美',
          status: '投放完成',
          surplus:'1669',
          unit:'0',
          show:'0',
          click:'6666',
          consume:'23331',
          univalence:'3.5',
          download:'0',
          install:'0',
          address: '上海市普陀区金沙江路 1518 弄',
          account:'25000',
          role:'销售负责人',
          isDisable:'是'
        },{
          name: '芒果tv-脉动',
          status: '投放完成',
          surplus:'15000',
          unit:'0',
          show:'0',
          click:'5000',
          consume:'25000',
          univalence:'5',
          download:'0',
          install:'0',
          address: '上海市普陀区金沙江路 1518 弄',
          account:'40000',
          role:'销售负责人',
          isDisable:'是'
        },{
          name: '芒果tv-999感冒灵',
          status: '投放完成',
          surplus:'5000',
          unit:'0',
          show:'0',
          click:'15000',
          consume:'3000',
          univalence:'5',
          download:'0',
          install:'0',
          address: '上海市普陀区金沙江路 1518 弄',
          account:'20000',
          role:'销售负责人',
          isDisable:'是'
        },{
          name: '暴风影音-boss直聘',
          status: '投放进行中',
          surplus:'15000',
          unit:'0',
          show:'0',
          click:'20000',
          consume:'50000',
          univalence:'2.5',
          download:'15000',
          install:'13000',
          address: '上海市普陀区金沙江路 1518 弄',
          account:'65000',
          role:'销售负责人',
          isDisable:'是'
        },{
          name: '暴风影音-美团买菜',
          status: '投放进行中',
          surplus:'30000',
          unit:'0',
          show:'0',
          click:'30000',
          consume:'90000',
          univalence:'3',
          download:'27000',
          install:'23000',
          address: '上海市普陀区金沙江路 1518 弄',
          account:'120000',
          role:'销售负责人',
          isDisable:'是'
        },{
          name: '爱奇艺-加多宝',
          status: '投放完成',
          surplus:'3750',
          unit:'0',
          show:'0',
          click:'5000',
          consume:'6250',
          univalence:'2.5',
          download:'0',
          install:'0',
          address: '上海市普陀区金沙江路 1518 弄',
          account:'10000',
          role:'销售负责人',
          isDisable:'是'
        },{
          name: '爱奇艺-公牛饮料',
          status: '投放进行中',
          surplus:'50000',
          unit:'0',
          show:'0',
          click:'10000',
          consume:'50000',
          univalence:'5',
          download:'0',
          install:'0',
          address: '上海市普陀区金沙江路 1518 弄',
          account:'100000',
          role:'销售负责人',
          isDisable:'是'
        },{
          name: '腾讯视频-康师傅绿茶',
          status: '投放进行中',
          surplus:'50000',
          unit:'0',
          show:'0',
          click:'30000',
          consume:'150000',
          univalence:'5',
          download:'0',
          install:'0',
          address: '上海市普陀区金沙江路 1518 弄',
          account:'200000',
          role:'销售负责人',
          isDisable:'是'
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
    .page{
        margin-top: 10px;
    }
}
</style>