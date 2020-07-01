<template>
  <div class="bg">
    <div class="chart_box">
      <!-- 左侧模块 -->
      <div class="box1">
        <!-- 饼图 -->
        <div class="pie">
          <div class="title">
            <img src="../../assets/img/tj.png" alt />
            <p>
              <img src="../../assets/img/tj.png" alt />月度交易额占比统计
            </p>
          </div>
          <div class="bingtu" id="Pie"></div>
          <div class="bingtu" id="Pie1"></div>
        </div>
        <!-- 服务网点数据统计 -->
        <div class="network">
          <div class="title">
            <img src="../../assets/img/yye.png" alt />
            <p>网点营业额统计</p>
          </div>
          <div class="zhexiantu" id="zhexiantu"></div>
          <div class="networklist">
            <ul>
              <li>
                <p>建行物理网点数</p>
                <span>41个</span>
              </li>
              <li>
                <p>福建网点数</p>
                <span>41个</span>
              </li>
              <li>
                <p>累计获客数</p>
                <span>41000户</span>
              </li>
              <li>
                <p>本年福建存款增长</p>
                <span class="aa">3650万元</span>
              </li>
              <li>
                <p>手机银行签约户数</p>
                <span>4户</span>
              </li>
              <li>
                <p>建行物理网点数</p>
                <span>41个</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 地图模块 -->
      <div class="box2">
        <div class="title">
          <img src="../../assets/img/tj.png" alt />
          <p>
            <img src="../../assets/img/tj.png" alt />全国交易数据统计图
          </p>
        </div>
        <div class="ditu" id="main"></div>
      </div>
      <!-- 右侧模块 -->
      <div class="box3">
        <div class="zhexiantu" id="zhexiantu"></div>
      </div>
    </div>
    <div class="loginOut" @click="drawer = true"><</div>
    <el-drawer size="20%" title="我是标题" :visible.sync="drawer" :with-header="false">
      <div class="buttonBox">
        <el-button class="button1" @click="echart" type="primary" size="mini">案例1</el-button>
        <el-button class="button1" @click="demo2" type="primary" size="mini">案例2</el-button>
        <el-button class="button1" @click="logout" type="danger" size="mini">退出登录</el-button>
      </div>
    </el-drawer>
  </div>
</template>
<script>
import "echarts/map/js/china.js";
import obj from "echarts/map/json/china.json";
export default {
  name: "chart",
  data() {
    return {
      listArr: [], //城市json
      max: "", //最大value值
      min: "", // 最小value值
      drawer: false
    };
  },
  methods: {
    // 链接跳转
    echart() {
      this.$router.push("/echart");
    },
    demo2() {
      this.$router.push("/demo2");
    },
    //   切换地图
    // togger() {
    //   console.log("切换数据");
    //   this.listArr[0].value = "300000";
    //   this.DrawMap();
    // },
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
      let Pie = this.$echarts.init(document.getElementById("Pie"));
      let Pie1 = this.$echarts.init(document.getElementById("Pie1"));
      // 绘制图表
      Pie.setOption({
        // backgroundColor: "#091018",
        series: {
          type: "pie",
          clockWise: false,
          radius: [this.setFontsize(0.6), this.setFontsize(0.6)],
          hoverAnimation: false,
          silent: true,
          center: ["60%", "50%"],
          data: [
            {
              value: 100,
              name: "invisible",
              itemStyle: {
                normal: {
                  color: "#071925",
                  borderWidth: 1,
                  borderColor: "#073A66"
                }
              }
            },
            {
              value: 25,
              label: {
                normal: {
                  rich: {
                    a: {
                      color: "#82ffff",
                      align: "center",
                      fontSize: this.setFontsize(0.24),
                      fontWeight: "bold",
                      fontFamily: "方正粗倩_GBK"
                    },
                    b: {
                      color: "#08a0df",
                      align: "center",
                      fontSize: this.setFontsize(0.16)
                    },
                    c: {
                      fontSize: this.setFontsize(0.16),
                      fontFamily: "方正粗倩_GBK",
                      fontWeight: "bold"
                    }
                  },
                  formatter: function(params) {
                    return (
                      "{a|" +
                      params.value +
                      "}" +
                      " {c|%}" +
                      "\n\n{b|年度总交易额}"
                    );
                  },
                  position: "center",
                  show: true,
                  textStyle: {
                    fontSize: "14",
                    fontWeight: "normal",
                    color: "#fff"
                  }
                }
              },
              itemStyle: {
                normal: {
                  color: "#139FBE",
                  shadowColor: "#82ffff",
                  borderWidth: 2,
                  borderColor: "#82ffff",
                  shadowBlur: 10
                }
              }
            }
          ]
        }
      });
      Pie1.setOption({
        // backgroundColor: "#091018",
        series: {
          type: "pie",
          clockWise: false,
          radius: [this.setFontsize(0.6), this.setFontsize(0.6)],
          hoverAnimation: false,
          silent: true,
          center: ["40%", "50%"],
          data: [
            {
              value: 100,
              name: "invisible",
              itemStyle: {
                normal: {
                  color: "#071925",
                  borderWidth: 1,
                  borderColor: "#073A66"
                }
              }
            },
            {
              value: 12,
              label: {
                normal: {
                  rich: {
                    a: {
                      color: "#82ffff",
                      align: "center",
                      fontSize: this.setFontsize(0.24),
                      fontWeight: "bold",
                      fontFamily: "方正粗倩_GBK"
                    },
                    b: {
                      color: "#08a0df",
                      align: "center",
                      fontSize: this.setFontsize(0.16)
                    },
                    c: {
                      fontSize: this.setFontsize(0.16),
                      fontFamily: "方正粗倩_GBK",
                      fontWeight: "bold"
                    }
                  },
                  formatter: function(params) {
                    return (
                      "{a|" +
                      params.value +
                      "}" +
                      " {c|%}" +
                      "\n\n{b|服务网点数}"
                    );
                  },
                  position: "center",
                  show: true,
                  textStyle: {
                    fontSize: "14",
                    fontWeight: "normal",
                    color: "#fff"
                  }
                }
              },
              itemStyle: {
                normal: {
                  color: "#139FBE",
                  shadowColor: "#82ffff",
                  borderWidth: 2,
                  borderColor: "#82ffff",
                  shadowBlur: 10
                }
              }
            }
          ]
        }
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
        title: {
          top: 20,
          bottom: 20,
          subtext: "",
          x: "center",
          textStyle: {
            color: "#ccc",
            fontSize: this.setFontsize(0.24)
          }
        },

        tooltip: {
          trigger: "item",
          formatter: "{b}<br/>{c} (万元)"
        },
        geo: {
          show: true,
          map: "china",
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: false
            }
          },
          roam: false,
          itemStyle: {
            normal: {
              areaColor: "#031525",
              borderColor: "#3B5077"
            },
            emphasis: {
              areaColor: "#2B91B7"
            }
          }
        },
        series: [
          {
            type: "map",
            map: "china",
            label: {
              normal: {
                show: true,
                textStyle: {
                  color: "#fff",
                  fontSize: this.setFontsize(0.12)
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
                label: {
                  show: true,
                  formatter: "{b}\n{c}"
                },
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
            data: this.listArr
          }
        ]
      });
    },
    // 折线图
    zhexian() {
      let Line = this.$echarts.init(document.getElementById("zhexiantu"));
      // 绘制图表
      Line.setOption({
        title: {
          bottom: 10,
          left: "center",
          textStyle: {
            fontSize: 16
          }
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "5%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            axisTick: {
              show: false,
              color: "#707070"
            },
            axisLabel: {
              textStyle: {
                fontSize: this.setFontsize(0.12),
                color: "#fff"
              }
            },
            axisLine: {
              lineStyle: {
                color: "#707070"
              }
            },
            data: ["2019Q1", "2019Q2", "2019Q3", "2019Q4"]
          }
        ],
        yAxis: {
          type: "value",
          name: "营业额（亿）",
          nameTextStyle: {
            fontSize: this.setFontsize(0.12),
            color: "#fff"
          },
          axisLabel: {
            textStyle: {
              fontSize: 12,
              color: "#fff"
            }
          },
          axisLine: {
            lineStyle: {
              color: "#707070"
            }
          }
        },
        series: [
          {
            name: "营业额（亿）",
            type: "bar",
            barWidth: "60%",
            data: [
              {
                name: "2019Q1",
                value: "70",
                itemStyle: {
                  color: "#1F78B4"
                }
              },
              {
                name: "2019Q2",
                value: "50",
                itemStyle: {
                  color: "#A6CEE3"
                }
              },
              {
                name: "2019Q3",
                value: "30",
                itemStyle: {
                  color: "#B2DF8A"
                }
              },
              {
                name: "2019Q4",
                value: "25",
                itemStyle: {
                  color: "#33A02C"
                }
              }
            ]
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
  background-color: #081832;
  display: flex;
  flex-direction: row;
  background-image: url("../../assets/img/4.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 200%;
  .chart_box {
    // background-color: #4a4142;
    width: 100vw;
    height: 90vh;
    margin-top: 5vh;
    padding: 20px;
    display: flex;
    flex-direction: row;
    .box1 {
      width: 25%;
      .pie {
        width: 100%;
        position: relative;
        height: 35%;
        display: flex;
        flex-direction: row;
        border: 1px solid #034c6a;
        box-shadow: 0px 0 55px rgba(255, 255, 255, 0.1) inset;
        .bingtu {
          width: 50%;
          height: 100%;
        }
        .title {
          img {
            width: 20px;
            position: absolute;
            left: 10px;
            top: 5px;
          }
          width: 60%;
          height: 30px;
          line-height: 30px;
          position: absolute;
          top: -10px;
          left: 50%;
          margin-left: -30%;
          background-color: #034c6a;
          display: flex;
          flex-direction: row;
          border-radius: 15px;
          p {
            width: 100%;
            color: #fff;
            font-size: 14px;
            font-weight: 700;
            margin: 0px;
            padding: 2px 5px 2px 5px;
            text-align: center;
          }
        }
      }
      .network {
        .networklist {
          width: 80%;
          margin: 0px auto 0px;
          color: #fff;
          font-size: 0.6rem;
          display: flex;
          ul {
            width: 100%;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            padding: 0px;
            li {
              width: 33%;
              list-style-type: none;
              span {
                color: #fcb668;
                font-size: 0.8rem;
                font-weight: 700;
                &.aa {
                  color: #27eadf;
                }
              }
            }
          }
        }
        .zhexiantu {
          width: 80%;
          height: 50%;
          margin: 20px auto;
        }
        .title {
          img {
            width: 20px;
            position: absolute;
            left: 10px;
            top: 5px;
          }
          width: 60%;
          height: 30px;
          line-height: 30px;
          position: absolute;
          top: -10px;
          left: 50%;
          margin-left: -30%;
          background-color: #034c6a;
          display: flex;
          flex-direction: row;
          border-radius: 15px;
          p {
            width: 100%;
            color: #fff;
            font-size: 14px;
            font-weight: 700;
            margin: 0px;
            padding: 2px 5px 2px 5px;
            text-align: center;
          }
        }
        width: 100%;
        position: relative;
        height: calc(65% - 20px);
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        border: 1px solid #034c6a;
        box-shadow: 0px 0 55px rgba(255, 255, 255, 0.1) inset;
      }
    }
    .box2 {
      position: relative;
      border: 1px solid #034c6a;
      box-shadow: 0px 0 55px rgba(255, 255, 255, 0.1) inset;
      .title {
        img {
          width: 20px;
          position: absolute;
          z-index: 999;
          left: 10px;
          top: 5px;
        }
        width: 60%;
        height: 30px;
        line-height: 30px;
        position: absolute;
        top: -10px;
        left: 50%;
        margin-left: -30%;
        background-color: #034c6a;
        display: flex;
        flex-direction: row;
        border-radius: 15px;
        p {
          width: 100%;
          color: #fff;
          font-size: 14px;
          font-weight: 700;
          margin: 0px;
          padding: 2px 5px 2px 5px;
          text-align: center;
        }
      }
      width: calc(50% - 40px);
      margin: 0px 20px 0px 20px;
      .ditu {
        height: 100%;
      }
    }
    .box3 {
      width: 25%;
    }
  }
}
.loginOut {
  width: 15px;
  height: 35px;
  line-height: 35px;
  color: #fff;
  font-size: 0.8rem;
  text-align: center;
  position: fixed;
  right: 0px;
  top: 10px;
  background-color: #034c6a;
  cursor: pointer;
}
.buttonBox {
  padding: 20px;
}
.button1 {
  width: 80px;
  margin: 10px;
}
</style>