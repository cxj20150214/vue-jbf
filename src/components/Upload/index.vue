<template>
  <div :style="{height:height,width:width}" class="singleImageUpload2 upload-container" >
    <el-upload
      :data="dataObj"
      :action="upload_url"
      :headers="{Authorization:token}"
      :multiple="false"
      :show-file-list="false"
      :on-success="handleImageSuccess"
      class="image-uploader"
      drag>
      <i v-if="imageUrl.length==0" class="el-icon-upload"/>
      <div v-if="imageUrl.length==0" class="el-upload__text" >Drag或<em>点击上传</em></div>
    </el-upload>
    <div v-show="imageUrl.length>0" class="image-preview">
      <div v-show="imageUrl.length>1" class="image-preview-wrapper">
        <img :src="imageUrl">
        <div class="image-preview-action">
          <i class="el-icon-delete" @click="rmImage"/>
        </div>
      </div>
    </div>
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
      default: '200px'
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
    imageUrl() {
      return this.value
    }
  },
  methods: {
    rmImage() {
      this.$emit('upload-delete')
      // this.emitInput('')
    },
    emitInput(val) {
      this.$emit('input', val)
    },
    handleImageSuccess(res, file) {
      this.$emit('upload-success', res.data)
      this.emitInput(res.data.url)
      // this.emitInput(this.tempUrl)
    },
    beforeUpload() {
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .upload-container {
    width: 100%;
    height: 100%;
    position: relative;
    .image-uploader {
      height: 100%;
    }
    .image-preview {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0px;
      top: 0px;
      border: 1px dashed #d9d9d9;
      .image-preview-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .image-preview-action {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        cursor: default;
        text-align: center;
        color: #fff;
        opacity: 0;
        font-size: 20px;
        background-color: rgba(0, 0, 0, .5);
        transition: opacity .3s;
        cursor: pointer;
        text-align: center;
        line-height: 200px;
        .el-icon-delete {
          font-size: 36px;
        }
      }
      &:hover {
        .image-preview-action {
          opacity: 1;
        }
      }
    }
  }
</style>
