<template>
  <div class="app-container">
    <el-form ref="form" :model="form" :rules="rules" label-width="120px" style=" width:450px;">
      <el-form-item label="修改头像">
        <el-input v-model="form.avatar_id" type="hidden" />
        <pan-thumb :image="form.avatar_url" />
        <el-button
          type="primary"
          icon="upload"
          style="position: absolute;bottom: 15px;margin-left: 40px;"
          @click="imagecropperShow=true"
        >上传头像</el-button>
        <image-cropper
          v-show="imagecropperShow"
          :key="imagecropperKey"
          :width="300"
          :height="300"
          :url="upload_url"
          field="file"
          lang-type="zh"
          @close="close"
          @crop-upload-success="cropSuccess"
        />
      </el-form-item>
      <el-form-item label="真实姓名" prop="realname">
        <el-input v-model="form.realname" />
      </el-form-item>
      <el-form-item label="手机" prop="mobile">
        <el-input v-model="form.mobile " />
      </el-form-item>
      <el-form-item>
        <el-button v-loading="loading" type="primary" @click="onSubmit">保 存</el-button>
        <el-button v-loading="loading" @click="onReset">重 置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import ImageCropper from '@/components/ImageCropper'
import PanThumb from '@/components/PanThumb'
import { getInfo, postProfile } from '@/api/auth'

const defaultForm = {
  realname: '',
  mobile: '',
  avatar_url: '',
  avatar_id: ''
}

export default {
  components: { ImageCropper, PanThumb },
  data() {
    return {
      form: Object.assign({}, defaultForm),
      resetForm: defaultForm,
      loading: false,
      rules: {
        realname: [
          { required: true, message: '真实姓名为必填项', trigger: 'blur' }
        ],
        mobile: [{ required: true, message: '手机名为必填项', trigger: 'blur' }]
      },
      imagecropperShow: false,
      imagecropperKey: 0,
      upload_url: process.env.VUE_APP_BASE_API + '/api/file'
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    cropSuccess(resData) {
      this.imagecropperShow = false
      this.imagecropperKey = this.imagecropperKey + 1
      this.form.avatar_url = resData.url
      this.form.avatar_id = resData.id
    },
    close() {
      this.imagecropperShow = false
    },
    onSubmit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.loading = true
          postProfile(this.form)
            .then(response => {
              if (response.code === 200) {
                this.$notify({
                  title: '成功',
                  message: '保存成功',
                  type: 'success',
                  duration: 2000
                })
              }
            })
            .catch(err => {
              console.log(err)
            })

          this.loading = false
        }
        return false
      })
    },
    onReset() {
      this.form = Object.assign(this.form, this.resetForm)
    },
    fetchData() {
      getInfo()
        .then(response => {
          console.log()
          this.form = response.data
          this.resetForm = JSON.parse(JSON.stringify(response.data))
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
