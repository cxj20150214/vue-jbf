<template>
  <div>
    <div class="head">
      <div class="ss">
        <img src="../../../assets/img/ss.png" alt />
        <input type="text" placeholder="搜索菜谱、食材等" />
      </div>
      <div class="tabs">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="精选" name="tab1" v-loading="loading">
            <ul class="Flist">
              <li v-for="item in Flist">
                <div class="img_box">
                  <img :src="item.url" alt />
                </div>
                <div class="title_box">
                  <p class="title">{{item.title}}</p>
                  <p class="dz">
                    <img src="../../../assets/img/sc.png" alt />
                    <span>{{item.dianz}}</span>
                  </p>
                </div>
              </li>
            </ul>
          </el-tab-pane>
          <el-tab-pane label="早餐" name="tab2">配置管理</el-tab-pane>
          <el-tab-pane label="变女神" name="tab3">角色管理</el-tab-pane>
          <el-tab-pane label="家常菜" name="tab4">定时任务补偿</el-tab-pane>
          <el-tab-pane label="私房菜" name="tab5">定时任务补偿</el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>
<script>
import { getfoodList } from "@/api/user";
export default {
  name: "foodlist",
  data() {
    return {
      activeName: "tab1",
      foodtype: "type_jx",
      Flist: "",
      loading: false
    };
  },
  methods: {
    handleClick(tab) {
      if (tab.name == "tab1") {
        this.foodtype = "type_jx";
        this.foodlist();
      }
    },
    foodlist() {
      getfoodList({
        foodtype: this.foodtype
      }).then(res => {
        this.loading = true;
        if ((res.code = 20000)) {
          this.Flist = res.data.list;
          this.loading = false;
        }
      });
    }
  },
  created() {
    getfoodList({
      foodtype: this.foodtype
    }).then(res => {
      this.loading = true;
      if ((res.code = 20000)) {
        this.Flist = res.data.list;
        this.loading = false;
      }
    });
  }
};
</script>
<style lang="scss">
.head {
  height: 160px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  .ss {
    height: 60px;
    line-height: 60px;
    border-radius: 5px;
    width: 95%;
    margin: 20px auto 0px;
    background-color: #f6f6f6;
    img {
      width: 45px;
      margin: 7px 0px 0px 10px;
      float: left;
    }
    input {
      background-color: #f6f6f6;
      border: 0px;
      height: 55px;
      float: left;
      font-size: 26px;
      margin-left: 15px;
      width: calc(100% - 100px);
      &:focus {
        outline: none;
      }
    }
  }
}
.tabs {
  .el-loading-spinner .path {
    stroke: #d51f43;
  }
  .el-tab-pane {
    background-color: #f3f3f3;
  }
  .el-tabs__nav-wrap {
    &::after {
      background-color: #fff;
    }
  }
  margin-top: 20px;
  .el-tabs__nav-scroll {
    display: flex;
    .el-tabs__nav {
      margin: 0px auto;
    }
  }
  .el-tabs__item {
    font-size: 30px;
    font-weight: 700;
    padding: 0 35px;
    height: 60px;
  }
  .el-tabs__active-bar {
    background-color: #d51f43;
  }
  .el-tabs__item {
    &:hover {
      color: #d51f43;
    }
  }
  .el-tabs__item.is-active {
    color: #d51f43;
  }
}
.Flist {
  width: 95%;
  padding: 0px;
  margin: 0px auto 120px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  li {
    width: calc(50% - 10px);
    list-style-type: none;
    background-color: #fff;
    float: left;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 20px;
    .img_box {
      width: 100%;
      height: 300px;
      position: relative;
      overflow: hidden;
      img {
        position: absolute;
        width: 100%;
      }
    }
    .title_box {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 0px 15px;
      .title {
        font-size: 28px;
        color: #333;
        font-weight: 700;
      }
      .dz {
        font-size: 28px;
        color: #999;
        img {
          width: 25px;
          margin-top: -2px;
        }
      }
    }
  }
}
</style>