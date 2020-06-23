<template>
  <div :style="{height:height,width:width}">
    <el-upload
      :data="dataObj"
      :action="upload_url"
      :headers="{Authorization:token}"
      :multiple="false"
      :show-file-list="false"
      :on-success="handleImageSuccess"
      style="display: inline-block;"
      class="upload-demo">
      <el-button size="small" type="primary">点击上传</el-button>
    </el-upload>
    <el-button-group v-show="fileUrl.length>1">
      <el-button type="primary" size="small" icon="el-icon-download" @click="downloadImage"/>
      <el-button type="primary" size="small" icon="el-icon-delete" @click="rmImage"/>
    </el-button-group>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SingleImageUploadIndex',
  props: {
    value: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: '200px'
    },
    height: {
      type: String,
      default: '10px'
    }
  },
  data() {
    return {
      upload_url: process.env.VUE_APP_BASE_API + '/api/file',
      tempUrl: '',
      dataObj: { token: '', key: '' }
    }
  },
  computed: {
    ...mapGetters([
      'token'
    ]),
    fileUrl() {
      return this.value
    }
  },
  methods: {
    rmImage() {
      this.$emit('upload-delete')
      // this.emitInput('')
    },
    downloadImage() {
      window.open(this.value, '_blank')
    },
    emitInput(val) {
      this.$emit('input', val)
    },
    handleImageSuccess(res, file) {
      this.$emit('upload-success', res.data)
      this.emitInput(res.data.url)
    },
    beforeUpload() {
    }
  }
}
</script>
