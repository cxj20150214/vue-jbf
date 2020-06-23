<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input
        v-model="listQuery.keyword"
        clearable
        style="width: 200px;"
        class="filter-item"
        placeholder="用户名/手机/姓名"
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
      <el-select
        v-model="listQuery.role_id"
        placeholder="角色"
        clearable
        class="filter-item"
        style="width: 130px"
      >
        <el-option v-for="item in role_plist" :key="item.id" :label="item.name" :value="item.id" />
      </el-select>
      <el-button
        v-waves
        class="filter-item"
        type="primary"
        icon="el-icon-search"
        @click="handleFilter"
      >搜索</el-button>
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
      <el-table-column label="会员id" prop="id" align="center" width="300">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="用户名" align="center" width="150">
        <template slot-scope="scope">
          <span>
            <svg-icon v-if="scope.row.system == '1'" icon-class="admin" />
            {{ scope.row.username }}
            <el-tooltip :content="scope.row.status == '1'?'启用':'禁用'" placement="top">
              <svg-icon :icon-class="scope.row.status == '1'?'enabled':'disabled'" />
            </el-tooltip>
          </span>
        </template>
      </el-table-column>
      <el-table-column label="真实姓名 " align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.realname }}</span>
        </template>
      </el-table-column>
      <el-table-column label="手机号码 " align="center" width="120">
        <template slot-scope="scope">
          <span>{{ scope.row.mobile }}</span>
        </template>
      </el-table-column>
      <el-table-column label="角色 " align="center" width="200">
        <template slot-scope="scope">
          <el-tag v-for="tag in scope.row.role_name" :key="tag" class="el-tagbox">{{ tag }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        align="center"
        width="220"
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
          <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
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
      width="550px"
    >
      <el-form
        ref="dataForm"
        :rules="rules"
        :model="temp"
        label-position="left"
        label-width="100px"
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
        <el-form-item label="用户名" prop="username">
          <el-input v-model="temp.username" :disabled="username_disabled" placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item label="真实姓名" prop="realname">
          <el-input v-model="temp.realname" placeholder="请输入真实姓名" />
        </el-form-item>
        <el-form-item label="手机号码" prop="mobile">
          <el-input v-model="temp.mobile" maxlength="11" placeholder="请输入手机号码" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="temp.password" type="password" placeholder="请输入密码，不修改密码，不填即可" />
        </el-form-item>
        <el-form-item label="角色" prop="role_id">
          <el-select v-model="temp.role_id" multiple placeholder="请选择角色">
            <el-option
              v-for="item in role_plist"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="系统管理员" prop="system">
          <el-switch v-model="temp.system" active-value="1" inactive-value="0" />
        </el-form-item>
        <el-form-item label="状态" prop="status">
          <el-switch v-model="temp.status" active-value="1" inactive-value="0" />
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
import { getAdminList, postAdmin, deleteAdmin, getRolePlist } from '@/api/admin'
import waves from '@/directive/waves' // Waves directive
import Pagination from '@/components/Pagination' // Secondary package based on el-pagination
import ImageCropper from '@/components/ImageCropper'
import PanThumb from '@/components/PanThumb'

const statusOptions = [
  { key: '0', display_name: '禁用' },
  { key: '1', display_name: '启用' }
]

export default {
  name: 'Admin',
  components: { ImageCropper, PanThumb, Pagination },
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
      username_disabled: false,
      role_plist: null,
      listQuery: {
        page: 1,
        limit: 20,
        keyword: '',
        role_id: '',
        status: ''
      },
      statusOptions,
      temp: {
        id: undefined,
        realname: '',
        avatar_id: '',
        avatar_url: '',
        username: '',
        password: '',
        role_id: [],
        role_name: [],
        system: '0',
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
        status: [
          { required: true, message: '状态不能为空', trigger: 'change' }
        ],
        username: [
          { required: true, message: '用户名为必填项', trigger: 'blur' }
        ],
        mobile: [
          { required: true, message: '手机号码为必填项', trigger: 'blur' }
        ],
        realname: [
          { required: true, message: '真实姓名为必填项', trigger: 'blur' }
        ],
        password:[
          { required: true, message: '密码为必填项', trigger: 'blur' }
        ]
      },
      imagecropperShow: false,
      imagecropperKey: 0,
      upload_url: process.env.VUE_APP_BASE_API + '/api/file'
    }
  },
  created() {
    this.getList()
    this.getRolePlist()
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
      getAdminList(this.listQuery).then(response => {
        this.list = response.data.list
        this.total = response.data.total

        // Just to simulate the time of the request
        setTimeout(() => {
          this.listLoading = false
        }, 0.5 * 1000)
      })
    },
    getRolePlist() {
      getRolePlist().then(response => {
        this.role_plist = response.data
      })
    },
    handleFilter() {
      this.listQuery.page = 1
      this.getList()
    },
    handleModifyStatus(row, status) {
      row.status = status
      postAdmin(row).then(response => {
        this.$message({
          message: '操作成功',
          type: 'success'
        })
        row.status = status
        row.status_name = response.data.status_name
      })
    },
    resetTemp() {
      this.username_disabled = false
      this.temp = {
        id: undefined,
        realname: '',
        avatar_id: '',
        avatar_url: '',
        username: '',
        password: '',
        role_id: [],
        role_name: [],
        system: '0',
        status: '1'
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
          postAdmin(this.temp).then(response => {
            console.log(response)
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
      this.temp = Object.assign({}, row) // copy obj
      this.dialogStatus = 'update'
      this.dialogFormVisible = true
      this.username_disabled = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    updateData() {
      this.$refs['dataForm'].validate(valid => {
        if (valid) {
          const tempData = Object.assign({}, this.temp)
          postAdmin(tempData).then(response => {
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
    handleDelete(row) {
      this.$confirm('此操作将永久删除, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          deleteAdmin(row).then(() => {
            this.$notify({
              title: '成功',
              message: '删除成功',
              type: 'success',
              duration: 2000
            })
            const index = this.list.indexOf(row)
            this.list.splice(index, 1)
            this.getList()
          })
        })
        .catch(() => {})
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.el-tagbox.el-tag {
  margin-left: 10px;
}
</style>
