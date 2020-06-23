<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input
        v-model="listQuery.keyword"
        placeholder="手机/姓名"
        clearable
        style="width: 200px;"
        class="filter-item"
        @keyup.enter.native="handleFilter"
      />
      <el-select
        v-model="listQuery.status"
        placeholder="状态"
        clearable
        class="filter-item"
        style="width: 130px"
      >
        <el-option
          v-for="item in statusOptions"
          :key="item.key"
          :label="item.display_name"
          :value="item.key"
        />
      </el-select>
      <el-button
        v-waves
        class="filter-item"
        type="primary"
        icon="el-icon-search"
        @click="handleFilter"
      >搜索</el-button>
    </div>

    <el-table
      :key="tableKey"
      v-loading="listLoading"
      :data="list"
      border
      highlight-current-row
      style="width: 100%;"
    >
      <el-table-column label="会员id" prop="id" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="手机号码" align="center">
        <template slot-scope="scope">
          <span>
            {{ scope.row.mobile }}
            <el-tooltip :content="scope.row.status == '1'?'启用':'禁用'" placement="top">
              <svg-icon :icon-class="scope.row.status == '1'?'enabled':'disabled'" />
            </el-tooltip>
          </span>
        </template>
      </el-table-column>
      <el-table-column label="真实姓名" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.realname }}</span>
        </template>
      </el-table-column>
      <el-table-column label="性别" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.gender_name }}</span>
        </template>
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        align="center"
        width="150"
        class-name="small-padding fixed-width"
      >
        <template slot-scope="scope">
          <el-button
            v-if="scope.row.status!='1'"
            size="mini"
            type="success"
            @click="handleModifyStatus(scope.row,'1')"
          >启用</el-button>
          <el-button
            v-if="scope.row.status!='0'"
            size="mini"
            @click="handleModifyStatus(scope.row,'0')"
          >禁用</el-button>
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
      :visible.sync="dialogFormVisible"
      :close-on-press-escape="dialogEsc"
      :close-on-click-modal="dialogEsc"
      title="会员信息"
      width="650px"
    >
      <el-form
        ref="dataForm"
        :rules="rules"
        :model="temp"
        label-position="left"
        label-width="80px"
        style="width: 400px; margin-left:50px;"
      >
        <el-form-item label="头像">
          <el-input v-model="temp.avatar_id" type="hidden" />
          <pan-thumb :image="temp.avatar_url" />
          <el-button
            type="primary"
            icon="upload"
            style="position: absolute;bottom: 15px;margin-left: 40px;"
            @click="imagecropperShow=true"
          >上传头像</el-button>
          <image-cropper
            v-show="imagecropperShow"
            :key="imagecropperKey"
            :width="100"
            :height="100"
            :url="upload_url"
            field="file"
            lang-type="zh"
            @close="close"
            @crop-upload-success="cropSuccess"
          />
        </el-form-item>
        <el-form-item label="手机号码" prop>
          <el-input v-model="temp.mobile" :disabled="true" />
        </el-form-item>
        <el-form-item label="真实姓名" prop>
          <el-input v-model="temp.realname" />
        </el-form-item>
        <el-form-item label="性别" prop>
          <el-select v-model="temp.gender" placeholder="请选择性别" clearable class="filter-item">
            <el-option
              v-for="item in gender"
              :key="item.key"
              :label="item.value"
              :value="item.key"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="状态" prop="status">
          <el-switch v-model="temp.status" active-value="1" inactive-value="0" />
        </el-form-item>
        <el-form-item label prop>
          <el-button @click="dialogFormVisible = false">取消</el-button>
          <el-button type="primary" @click="updateData()">确定</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { getUserList, postUser } from '@/api/user'
import { getParameterItem } from '@/api/parameter'
import waves from '@/directive/waves' // Waves directive
import Pagination from '@/components/Pagination' // Secondary package based on el-pagination
import PanThumb from '@/components/PanThumb'
import ImageCropper from '@/components/ImageCropper'

const statusOptions = [
  { key: '0', display_name: '禁用' },
  { key: '1', display_name: '启用' }
]

export default {
  name: 'User',
  components: { Pagination, PanThumb, ImageCropper },
  directives: { waves },
  filters: {
    statusFilter(status) {
      const statusMap = {
        1: 'success',
        0: 'info'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      tableKey: 0,
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20,
        keyword: '',
        status: ''
      },
      gender: [],
      statusOptions,
      temp: {
        id: undefined,
        realname: '',
        avatar_id: '',
        avatar_url: '',
        mobile: '',
        status: '1'
      },
      dialogFormVisible: false,
      dialogEsc: false,
      dialogStatus: '',
      textMap: {
        update: '编辑',
        create: '新增'
      },
      rules: {
        realname: [
          { required: true, message: '真实姓名为必填项', trigger: 'blur' }
        ],
        status: [{ required: true, message: '状态不能为空', trigger: 'change' }]
      },
      imagecropperShow: false,
      imagecropperKey: 0,
      upload_url: process.env.VUE_APP_BASE_API + '/api/file'
    }
  },
  created() {
    this.getList()
    this.getGender()
  },
  methods: {
    cropSuccess(resData) {
      this.imagecropperShow = false
      this.imagecropperKey = this.imagecropperKey + 1
      this.temp.avatar_url = resData.url
      this.temp.avatar_id = resData.id
    },
    close() {
      this.imagecropperShow = false
    },
    getList() {
      this.listLoading = true
      getUserList(this.listQuery).then(response => {
        this.list = response.data.list
        this.total = response.data.total

        // Just to simulate the time of the request
        setTimeout(() => {
          this.listLoading = false
        }, 0.5 * 1000)
      })
    },
    handleFilter() {
      this.listQuery.page = 1
      this.getList()
    },
    handleModifyStatus(row, status) {
      row.status = status
      postUser(row).then(response => {
        this.$message({
          message: '操作成功',
          type: 'success'
        })
        row.status = status
        row.status_name = response.data.status_name
      })
    },
    resetTemp() {
      this.temp = {
        id: undefined,
        realname: '',
        avatar_id: '',
        avatar_url: '',
        mobile: '',
        password: '',
        status: '1'
      }
    },
    handleUpdate(row) {
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
          postUser(tempData).then(response => {
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
    },
    getGender() {
      getParameterItem('GENDER').then(response => {
        this.gender = response.data
      })
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.avatar {
  width: 250px;
  height: 100%;
}
</style>
