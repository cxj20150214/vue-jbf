<template>
  <div>
    <el-card class="box-card">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="模型名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="编码">
          <el-input v-model="form.code"></el-input>
        </el-form-item>
        <el-form-item label="模型字段">
          <el-table border :data="tableData" style="width: 100%">
            <el-table-column prop="cname" label="字段名"></el-table-column>
            <el-table-column prop="name" label="英文"></el-table-column>
            <el-table-column prop="type" label="类型"></el-table-column>
            <el-table-column prop="source" label="来源"></el-table-column>
          </el-table>
        </el-form-item>
        <el-form-item label="策略">
          <div class="box1">
            <el-form-item label="名称">
              <el-input v-model="form.strategy.name"></el-input>
            </el-form-item>
            <el-form-item label="类型">
              <el-input v-model="form.strategy.type"></el-input>
            </el-form-item>
            <el-form-item label="告警值">
              <el-input v-model="form.strategy.value"></el-input>
            </el-form-item>
            <el-form-item label="规则">
              <div class="box2">
                <el-form-item label="名称">
                  <el-input v-model="form.strategy.rules[0].name"></el-input>
                </el-form-item>
                <el-form-item label="得分">
                  <el-input v-model="form.strategy.rules[0].score"></el-input>
                </el-form-item>
                <el-form-item label="优先级">
                  <el-input v-model="form.strategy.rules[0].priority"></el-input>
                </el-form-item>
                <el-form-item label="规则条目">
                  <el-table border :data="form.strategy.rules[0].ruleItems" style="width: 100%">
                    <el-table-column prop="ruleId" label="ruleId"></el-table-column>
                    <el-table-column prop="type" label="类型"></el-table-column>
                    <el-table-column prop="value" label="交易金额"></el-table-column>
                  </el-table>
                </el-form-item>
              </div>
            </el-form-item>
          </div>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
import { getModelInfo } from "@/api/user";
export default {
  name: "merchant",
  data() {
    return {
      form: {},
      tableData: []
    };
  },
  created() {
    getModelInfo().then(res => {
      this.form = res.data;
      this.tableData = res.data.modelFields;
    });
  }
};
</script>
<style lang="scss" scoped>
.box-card {
  width: 980px;
  margin: 30px auto;
}
.box1 {
  background-color: #f2f2f2;
  padding: 30px;
}
.box2 {
  background-color: #e3e3e3;
  padding: 30px;
}
.el-form-item .el-form-item {
  margin-bottom: 20px;
}
</style>