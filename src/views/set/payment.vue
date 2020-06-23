<template>
  <div class="app-container">
    <div class="filter-container">
      <el-button
        class="filter-item"
        style="margin-left: 10px;"
        type="primary"
        icon="el-icon-plus"
        @click="handleCreate"
      >新增</el-button>
    </div>

    <el-table
      :key="tableKey"
      v-loading="listLoading"
      :data="list"
      border
      highlight-current-row
      style="width: 100%;"
    >
      <el-table-column label="序号" prop="id" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="名称" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="支付渠道" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.typename }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="150" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="handleUpdate(scope.row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="getList"
    />

    <el-dialog
      :title="textMap[dialogStatus]"
      :visible.sync="dialogFormVisible"
      :close-on-press-escape="dialogEsc"
      :close-on-click-modal="dialogEsc"
      width="900px"
    >
      <el-form
        ref="dataForm"
        :rules="rules"
        :model="temp"
        label-position="left"
        label-width="120px"
        style="width: 800px; margin-left:25px;"
      >
        <el-form-item label="支付渠道" prop="type">
          <el-radio-group v-model="temp.payment_type">
            <el-radio
              v-for="item in typeOptions"
              :key="item.key"
              :label="item.key"
            >{{ item.display_name }}</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="名称" prop="name">
          <el-input v-model="temp.name" placeholder="请输入名称" />
        </el-form-item>
        <el-form-item v-if="temp.payment_type==='0'" label="app_id" prop>
          <el-input v-model="temp.parameter.app_id" placeholder="app_id" />
        </el-form-item>
        <el-form-item v-if="temp.payment_type==='0'" label="ali_public_key" prop>
          <el-input v-model="temp.parameter.ali_public_key" placeholder="ali_public_key" />
        </el-form-item>
        <el-form-item v-if="temp.payment_type==='0'" label="private_key" prop>
          <el-input v-model="temp.parameter.private_key" placeholder="private_key" />
        </el-form-item>
        <el-form-item v-if="temp.payment_type==='1'" label="支付宝支付参数" prop>
          <el-card class="box-card">
            <el-form-item label="商户appID" prop>
              <el-input v-model="temp.parameter.alipayappId" placeholder="请输入商户appID" />
            </el-form-item>
            <el-form-item label="商户私钥" prop style="margin-top: 10px;">
              <el-input
                v-model="temp.parameter.rsaPrivateKey"
                :autosize="{ minRows: 2, maxRows: 8}"
                type="textarea"
                placeholder="请输入商户私钥"
              />
            </el-form-item>
            <el-form-item label="支付宝公钥" prop style="margin-top: 10px;">
              <el-input
                v-model="temp.parameter.alipayrsaPublicKey"
                :autosize="{ minRows: 2, maxRows: 8}"
                type="textarea"
                placeholder="请输入支付宝公钥"
              />
            </el-form-item>
          </el-card>
        </el-form-item>
        <el-form-item v-if="temp.payment_type==='1'" label="微信支付参数" prop>
          <el-card class="box-card">
            <el-form-item label="开放平台ID" prop>
              <el-input v-model="temp.parameter.wxAppID" placeholder="请输入开放平台wxAppID" />
            </el-form-item>
            <el-form-item label="应用凭证" prop style="margin-top: 10px;">
              <el-input v-model="temp.parameter.wxAppSecret" placeholder="请输入wxAppSecret" />
            </el-form-item>
            <el-form-item label="商户号" prop style="margin-top: 10px;">
              <el-input v-model="temp.parameter.wxPartnerID" placeholder="请输入wxPartnerID" />
            </el-form-item>
            <el-form-item label="商户号" prop style="margin-top: 10px;">
              <el-input v-model="temp.parameter.wxPartnerKey" placeholder="请输入wxPartnerKey" />
            </el-form-item>
          </el-card>
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input
            v-model="temp.remark"
            :autosize="{ minRows: 2, maxRows: 4}"
            type="textarea"
            placeholder="请输入备注"
          />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogStatus==='create'?createData():updateData()">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getPaymentList, postPayment } from '@/api/payment'
import waves from '@/directive/waves' // Waves directive
import Pagination from '@/components/Pagination' // Secondary package based on el-pagination
const typeOptions = [
  { key: '0', display_name: '平台支付渠道' },
  { key: '1', display_name: '司机支付渠道' }
]
export default {
  name: 'Menu',
  components: { Pagination },
  directives: { waves },
  data() {
    return {
      tableKey: 0,
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20
      },
      temp: {
        id: undefined,
        name: '',
        remark: '',
        payment_type: '',
        parameter: {}
      },
      typeOptions,
      dialogTreeVisible: false,
      dialogFormVisible: false,
      dialogEsc: false,
      dialogStatus: '',
      textMap: {
        update: '编辑',
        create: '新增'
      },
      rules: {
        name: [{ required: true, message: '名称为必填项', trigger: 'blur' }],
        id: [{ required: true, message: '标识为必填项', trigger: 'blur' }]
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      getPaymentList(this.listQuery).then(response => {
        this.list = response.data.list
        this.total = response.data.total
        setTimeout(() => {
          this.listLoading = false
        }, 0.5 * 1000)
      })
    },
    handleFilter() {
      this.listQuery.page = 1
      this.getList()
    },
    resetTemp() {
      this.temp = {
        id: undefined,
        name: '',
        payment_type: '',
        remark: '',
        parameter: {}
      }
    },
    handleCreate() {
      this.resetTemp()
      this.dialogStatus = 'create'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    createData() {
      this.$refs['dataForm'].validate(valid => {
        if (valid) {
          postPayment(this.temp).then(response => {
            this.list.unshift(response.data)
            this.dialogFormVisible = false
            this.$notify({
              title: '成功',
              message: '创建成功',
              type: 'success',
              duration: 2000
            })
          })
        }
      })
    },
    handleUpdate(row) {
      row.pid = row.pid === '0' ? '' : row.pid
      this.temp = Object.assign({}, row) // copy obj
      this.dialogStatus = 'update'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    updateData() {
      this.$refs['dataForm'].validate(valid => {
        if (valid) {
          const tempData = Object.assign({}, this.temp)
          postPayment(tempData).then(response => {
            for (const v of this.list) {
              if (v.id === this.temp.id) {
                const index = this.list.indexOf(v)
                this.list.splice(index, 1, response.data)
                break
              }
            }
            this.dialogFormVisible = false
            this.$notify({
              title: '成功',
              message: '更新成功',
              type: 'success',
              duration: 2000
            })
          })
        }
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.el-row {
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
}
</style>

