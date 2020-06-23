<template>
  <div class="dashboard-editor-container">
    <div class=" clearfix">
      <pan-thumb :image="avatar_url" style="float: left">
        {{ realname }}
      </pan-thumb>
      <div class="info-container">
        <span class="display_name">{{ realname }}</span>
        <el-tag
          v-for="tag in roles"
          :key="tag"
          class="el-tagbox">
          {{ tag }}
        </el-tag>
      </div>
    </div>
    <div>
      <img :src="emptyGif" class="emptyGif">
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PanThumb from '@/components/PanThumb'
import emptyGif from '@/assets/emptyGif.gif'

export default {
  name: 'Dashboard',
  components: { PanThumb },
  data() {
    return {
      emptyGif: emptyGif
    }
  },
  computed: {
    ...mapGetters([
      'realname',
      'avatar_url',
      'roles'
    ])
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .emptyGif {
    display: block;
    width: 45%;
    margin: 0 auto;
  }

  .dashboard-editor-container {
    background-color: #e3e3e3;
    min-height: 100vh;
    padding: 50px 60px 0px;
    .pan-info-roles {
      font-size: 12px;
      font-weight: 700;
      color: #333;
      display: block;
    }
    .info-container {
      position: relative;
      margin-left: 190px;
      height: 150px;
      line-height: 200px;
      .display_name {
        font-size: 48px;
        line-height: 48px;
        color: #212121;
        position: absolute;
        top: 25px;
      }
    }
  }
</style>
