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
            label="客户名称"
            width="100">
            <template slot-scope="scope">
                <span>{{ scope.row.customer }}</span>
            </template>
            </el-table-column>
            <el-table-column
            label="行业"
            width="100">
            <template slot-scope="scope">
                <span>{{ scope.row.industry }}</span>
            </template>
            </el-table-column>
            <!-- 地区 -->
             <el-table-column
                label="地区"
                width="180">
                <template slot-scope="scope">
                    <span>{{ scope.row.area }}</span>
                </template>
            </el-table-column>
            <!--公司名称  -->
             <el-table-column
                label="公司名称"
                width="220">
                <template slot-scope="scope">
                    <span class="codestyle" :title="scope.row.company">{{ scope.row.company }}</span>
                </template>
            </el-table-column>
            <!-- 姓名 -->
             <el-table-column
                label="姓名"
                width="100">
                <template slot-scope="scope">
                    <span>{{ scope.row.name }}</span>
                </template>
            </el-table-column>
            <!-- 电话 -->
             <el-table-column
                label="电话"
                width="180">
                <template slot-scope="scope">
                    <span>{{ scope.row.phone }}</span>
                </template>
            </el-table-column>
            <!-- 职务 -->
             <el-table-column
                label="职务"
                width="100">
                <template slot-scope="scope">
                    <span>{{ scope.row.duties }}</span>
                </template>
            </el-table-column>
            <!-- 归属团队 -->
             <el-table-column
                label="全部团队"
                width="120">
                <template slot-scope="scope">
                    <span>{{ scope.row.team }}</span>
            </template>
            </el-table-column>
            <el-table-column label="操作" width="180">
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
          customer:'听见广播',
          industry:'广告传媒',
          area: '中国 北京',
          company: '北京中广创思文化传媒有限公司',
          date: '2016-05-02',
          name: '听见',
          phone: '13812345678',
          duties: '销售总监',
          team: '康佳平台'
        },{
          customer:'宝马客户',
          industry:'广告传媒',
          area: '中国 北京',
          company: '北京宝马文媒',
          date: '2016-05-02',
          name: '宝马公司',
          phone: '13812445779',
          duties: '宣传大使',
          team: '影谱销售'
        },{
          customer:'rq演示客户',
          industry:'广告传媒',
          area: '中国 北京 朝阳',
          company: 'rq演示公司',
          date: '2016-05-02',
          name: 'rq',
          phone: '118612345678',
          duties: 'test',
          team: '影谱内部测试'
        },{
          customer:'智能投放客户',
          industry:'广告传媒',
          area: '中国 北京 海淀',
          company: '测试演示',
          date: '2016-05-02',
          name: '测试演示',
          phone: '13579246810',
          duties: 'advertising',
          team: '影谱内部测试'
        },{
          customer:'芒果tv',
          industry:'广告传媒',
          area: '中国 湖南 长沙',
          company: '湖南快乐阳光互动娱乐有限公司',
          date: '2016-05-02',
          name: '金鹰网',
          phone: '13812345678',
          duties: '销售',
          team: '芒果平台'
        },{
          customer:'暴风影音',
          industry:'广告传媒',
          area: '中国 北京',
          company: '北京暴风科技有限公司',
          date: '2016-05-02',
          name: '暴风影音',
          phone: '17674336281',
          duties: '销售总监',
          team: '暴风平台'
        },{
          customer:'至美广告',
          industry:'纸媒',
          area: '中国 四川 成都',
          company: '成都至美广告有限公司',
          date: '2016-05-02',
          name: '成都至美',
          phone: '13822463475',
          duties: '宣传总监',
          team: '影谱销售'
        },{
          customer:'北新广告',
          industry:'纸媒',
          area: '中国 北京',
          company: '北京北新广告有限公司',
          date: '2016-05-02',
          name: '北新传媒',
          phone: '17736021897',
          duties: '宣传总监',
          team: '影谱销售'
        },{
          customer:'爱奇艺',
          industry:'广告传媒',
          area: '中国 北京',
          company: '北京爱奇艺科技有限公司',
          date: '2016-05-02',
          name: 'iQIYI',
          phone: '13673567789',
          duties: '销售总监',
          team: '爱奇艺平台'
        },{
          customer:'抖音',
          industry:'广告传媒',
          area: '中国 北京',
          company: '北京字节跳动科技有限公司',
          date: '2016-05-02',
          name: '抖音app',
          phone: '17789012345',
          duties: '销售总监',
          team: '字节跳动平台'
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
          this.$router.push({path: '/customeradd'})
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
        .codestyle{
            // width: 80px;
            // height: 20px;
            // overflow: hidden;
            // display: inline-block;
        }
    }
    .page{
        margin-top: 10px;
    }
}
</style>