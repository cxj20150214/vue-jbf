<template>
  <div class="bg">
    <div class="chart_box">
      <div class="bingtu" id="myChart"></div>
      <div class="ditu" id="main"></div>
      <div class="zhexiantu" id="zhexiantu"></div>
    </div>
    <el-button class="loginOut" @click="logout" type="danger">退出登录</el-button>
  </div>
</template>
<script>
import "echarts/map/js/province/fujian.js";
import obj from "echarts/map/json/province/fujian.json";
export default {
  name: "chart",
  data() {
    return {
      listArr: [], //城市json
      max: "", //最大value值
      min: "" // 最小value值
    };
  },
  methods: {
    //   设置字体
    setFontsize(res) {
      let docEl = document.documentElement,
        clientWidth =
          window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth;
      if (!clientWidth) return;
      let fontSize = 100 * (clientWidth / 1920);
      return res * fontSize;
    },
    //   退出登录
    logout() {
      this.$store.dispatch("user/logout").then(() => {
        this.$router.push(`/login?redirect=${this.$route.fullPath}`);
      });
    },
    // 饼图
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        title: {
          text: "某站点用户访问来源",
          subtext: "纯属虚构",
          left: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: 335, name: "直接访问" },
              { value: 310, name: "邮件营销" },
              { value: 234, name: "联盟广告" },
              { value: 135, name: "视频广告" },
              { value: 1548, name: "搜索引擎" }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      });
    },
    // 绘制地图
    getData() {
      // 获取城市名称数据
      console.log("取到的福建省的json数据", obj);
      if (obj) {
        let arr = obj.features;
        // 循环取出 城市名称和value值
        for (var j = 0; j < arr.length; j++) {
          this.max = arr[0].id;
          this.min = arr[0].id;
          if (arr[j].id > this.max) {
            this.max = arr[j].id;
          }
          if (arr[j].id < this.min) {
            this.min = arr[j].id;
          }
          this.listArr.push({
            name: arr[j].properties.name,
            value: arr[j].id
          });
        }
      }
    },
    DrawMap() {
      let _this = this;
      let myChart8 = this.$echarts.init(document.getElementById("main"));
      console.log(
        "最大value值",
        this.max,
        "\n",
        "最小value值",
        this.min,
        "\n",
        "城市数据",
        this.listArr
      );
      myChart8.setOption({
        visualMap: {
          min: _this.min,
          max: _this.max,
          show: false,
          inRange: {
            // color: ["lightskyblue", "yellow", "orangered"]
          }
        },
        series: [
          {
            type: "map",
            map: "福建",
            label: {
              normal: {
                show: true,
                textStyle: {
                  color: "#fff",
                  fontSize: this.setFontsize(0.16)
                }
              },
              emphasis: {
                textStyle: {
                  color: "#fff"
                }
              }
            },
            itemStyle: {
              normal: {
                borderColor: "#2ab8ff",
                borderWidth: 1.5,
                areaColor: "#12235c"
              },
              emphasis: {
                areaColor: "#2AB8FF",
                borderWidth: 0,
                color: "green"
              }
            },
            data: _this.listArr
          }
        ]
      });
    },
    // 折线图
    zhexian() {
      let myChart = this.$echarts.init(document.getElementById("zhexiantu"));
      // 绘制图表
      myChart.setOption({
        title: {
          text: "某地区蒸发量和降水量",
          subtext: "纯属虚构"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["蒸发量", "降水量"]
        },
        toolbox: {
          show: true,
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ["line", "bar"] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        calculable: true,
        xAxis: [
          {
            type: "category",
            data: [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月"
            ]
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "蒸发量",
            type: "bar",
            data: [
              2.0,
              4.9,
              7.0,
              23.2,
              25.6,
              76.7,
              135.6,
              162.2,
              32.6,
              20.0,
              6.4,
              3.3
            ],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            }
            // markLine: {
            //   data: [{ type: "average", name: "平均值" }]
            // }
          },
          {
            name: "降水量",
            type: "bar",
            data: [
              2.6,
              5.9,
              9.0,
              26.4,
              28.7,
              70.7,
              175.6,
              182.2,
              48.7,
              18.8,
              6.0,
              2.3
            ],
            markPoint: {
              data: [
                { name: "年最高", value: 182.2, xAxis: 7, yAxis: 183 },
                { name: "年最低", value: 2.3, xAxis: 11, yAxis: 3 }
              ]
            }
            // markLine: {
            //   data: [{ type: "average", name: "平均值" }]
            // }
          }
        ]
      });
    }
  },
  mounted() {
    this.drawLine();
    this.DrawMap();
    this.zhexian();
  },
  created() {
    this.getData();
  },
  destroyed() {}
};
</script>
<style lang="scss" scoped>
.bg {
  width: 100vw;
  height: 100vh;
  //   background-color: #000;
  display: flex;
  flex-direction: row;
  .chart_box {
    // background-color: #4a4142;
    width: 100vw;
    height: 80vh;
    margin-top: 10vh;
    display: flex;
    flex-direction: row;
    .bingtu {
      width: 25%;
      height: 100%;
      border: 2px solid #999;
    }
    .ditu {
      width: 35%;
      height: 100%;
      border: 2px solid #999;
      background-color: #020933;
    }
    .zhexiantu {
      width: 40%;
      height: 100%;
      border: 2px solid #999;
    }
  }
}
.loginOut {
  position: fixed;
  right: 10px;
  top: 10px;
}
</style>