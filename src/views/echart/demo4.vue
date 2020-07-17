<template>
  <div>
    <div class="bg">
      <div class="mod">
        <div class="mod_box">
          <div class="tab">
            <div class="tab_heard">
              <ul>
                <li>
                  <p>时段</p>
                </li>
                <li>
                  <p>告警量</p>
                </li>
                <li>
                  <p>日均告警量</p>
                </li>
                <li>
                  <p>处理量</p>
                </li>
                <li>
                  <p>拦截量</p>
                </li>
                <li>
                  <p>告警量浮动</p>
                </li>
                <li>
                  <p>在线人数</p>
                </li>
                <li>
                  <p>人工处理率</p>
                </li>
                <li>
                  <p>自动处理率</p>
                </li>
              </ul>
            </div>
            <div class="tab_box">
              <vue-seamless-scroll
                :class-option="optionscroll"
                :data="tabList"
                class="seamless-warp"
              >
                <ul>
                  <li v-for="item in tabList">
                    <p>{{item.sd}}</p>
                    <p>{{item.gjl}}</p>
                    <p>{{item.rjgjl}}</p>
                    <p>{{item.cll}}</p>
                    <p>{{item.ljl}}</p>
                    <p>{{item.gjlfd}}</p>
                    <p>{{item.zxrs}}</p>
                    <p>{{item.rgcll}}</p>
                    <p>{{item.zdcll}}</p>
                  </li>
                </ul>
              </vue-seamless-scroll>
            </div>
          </div>
          <!-- echart表格 -->
          <div class="echart">
            <div class="ebox1">
              <div class="bingtu" id="zzt"></div>
            </div>
            <div class="ebox2">
              <div class="ebox2_box1">
                <div class="box border">
                  <p>在线人数</p>
                  <p class="t1">15人</p>
                </div>
                <div class="box">
                  <p>告警量</p>
                  <p class="t2">14.5%</p>
                </div>
              </div>
              <div class="ebox2_box2">
                <div class="bingtu" id="bt"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "demo4",
  data() {
    return {
      tabList: [
        {
          sd: "00:00~13:00",
          gjl: "5000",
          rjgjl: "4209",
          cll: "3100",
          ljl: "70",
          gjlfd: "-40%",
          zxrs: "19",
          rgcll: "80%",
          zdcll: "40.25%"
        },
        {
          sd: "00:00~13:00",
          gjl: "5000",
          rjgjl: "4209",
          cll: "3100",
          ljl: "70",
          gjlfd: "-40%",
          zxrs: "19",
          rgcll: "80%",
          zdcll: "40.25%"
        },
        {
          sd: "00:00~13:00",
          gjl: "5000",
          rjgjl: "4209",
          cll: "3100",
          ljl: "70",
          gjlfd: "-40%",
          zxrs: "19",
          rgcll: "80%",
          zdcll: "40.25%"
        },
         {
          sd: "00:00~13:00",
          gjl: "5000",
          rjgjl: "4209",
          cll: "3100",
          ljl: "70",
          gjlfd: "-40%",
          zxrs: "19",
          rgcll: "80%",
          zdcll: "40.25%"
        },
         {
          sd: "00:00~13:00",
          gjl: "5000",
          rjgjl: "4209",
          cll: "3100",
          ljl: "70",
          gjlfd: "-40%",
          zxrs: "19",
          rgcll: "80%",
          zdcll: "40.25%"
        },
        {
          sd: "00:00~13:00",
          gjl: "5000",
          rjgjl: "4209",
          cll: "3100",
          ljl: "70",
          gjlfd: "-40%",
          zxrs: "19",
          rgcll: "80%",
          zdcll: "40.25%"
        },
        {
          sd: "00:00~13:00",
          gjl: "5000",
          rjgjl: "4209",
          cll: "3100",
          ljl: "70",
          gjlfd: "-40%",
          zxrs: "19",
          rgcll: "80%",
          zdcll: "40.25%"
        },
        {
          sd: "00:00~13:00",
          gjl: "5000",
          rjgjl: "4209",
          cll: "3100",
          ljl: "70",
          gjlfd: "-40%",
          zxrs: "19",
          rgcll: "80%",
          zdcll: "40.25%"
        },
        {
          sd: "00:00~13:00",
          gjl: "5000",
          rjgjl: "4209",
          cll: "3100",
          ljl: "70",
          gjlfd: "-40%",
          zxrs: "19",
          rgcll: "80%",
          zdcll: "40.25%"
        },
        {
          sd: "00:00~13:00",
          gjl: "5000",
          rjgjl: "4209",
          cll: "3100",
          ljl: "70",
          gjlfd: "-40%",
          zxrs: "19",
          rgcll: "80%",
          zdcll: "40.25%"
        },
        {
          sd: "00:00~13:00",
          gjl: "5000",
          rjgjl: "4209",
          cll: "3100",
          ljl: "70",
          gjlfd: "-40%",
          zxrs: "19",
          rgcll: "80%",
          zdcll: "40.25%"
        },
        {
          sd: "00:00~13:00",
          gjl: "5000",
          rjgjl: "4209",
          cll: "3100",
          ljl: "70",
          gjlfd: "-40%",
          zxrs: "19",
          rgcll: "80%",
          zdcll: "40.25%"
        }
      ]
    };
  },
  mounted() {
    this.echart();
  },
  methods: {
    // 字体大小
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
    echart() {
      let zzt = this.$echarts.init(document.getElementById("zzt"));
      let bt = this.$echarts.init(document.getElementById("bt"));
      // 饼图
      bt.setOption({
        legend: {
          itemWidth: 20,
          itemHeight: 10,
          orient: "vertical",
          top: "50%",
          right: "0%",
          data: ["自动处理率", "人工处理率"],
          textStyle: {
            color: "#fff",
            fontSize: this.setFontsize(0.14)
          }
        },
        tooltip: {
          trigger: "item",
          formatter: "{b} : {d}%"
        },
        series: [
          {
            name: "处理率",
            type: "pie",
            radius: ["30%", "80%"],
            center: ["50%", "50%"],
            roseType: "radius",
            label: {
              show: true,
              normal: {
                position: "outside",
                fontSize: this.setFontsize(0.12)
              }
            },
            labelLine: {
              length: 1,
              length2: 20,
              smooth: true
            },
            data: [
              {
                value: 1,
                name: "人工处理率",
                itemStyle: {
                  color: "rgba(243,108,108,0.7)",
                  borderColor: "rgba(243,108,108,1)",
                  borderWidth: this.setFontsize(0.02)
                }
              },
              {
                value: 2,
                name: "自动处理率",
                itemStyle: {
                  color: "rgba(50,123,250,0.7)",
                  borderColor: "rgba(50,123,250,1)",
                  borderWidth: this.setFontsize(0.02)
                }
              }
            ]
          }
        ]
      });
      zzt.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "2%",
          right: "4%",
          bottom: "4%",
          top: "16%",
          containLabel: true
        },
        legend: {
          data: ["日均告警量", "告警量", "处理量", "拦截量"],
          right: 10,
          top: 12,
          textStyle: {
            color: "#fff",
            fontSize: this.setFontsize(0.15)
          },
          itemWidth: 12,
          itemHeight: 10
          // itemGap: 35
        },
        xAxis: {
          type: "category",
          show: false,
          data: ["当日数据"],
          axisLine: {
            lineStyle: {
              color: "white"
            }
          },
          axisLabel: {
            // interval: 0,
            // rotate: 40,
            textStyle: {
              fontFamily: "Microsoft YaHei"
            }
          }
        },

        yAxis: {
          type: "value",
          max: "4500",
          axisLine: {
            show: false,
            lineStyle: {
              color: "white"
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "rgba(255,255,255,0.3)"
            }
          },
          axisLabel: {
            textStyle: {
              fontSize: this.setFontsize(0.15)
            }
          }
        },
        series: [
          {
            name: "日均告警量",
            type: "bar",
            barWidth: "12%",
            barGap: "80%",
            itemStyle: {
              normal: {
                color: "#F6931C"
              }
            },
            data: [4000]
          },
          {
            name: "告警量",
            type: "bar",
            barWidth: "12%",
            barGap: "80%",
            itemStyle: {
              normal: {
                color: "#8bd46e"
              }
            },
            data: [3700]
          },
          {
            name: "处理量",
            type: "bar",
            barWidth: "12%",
            barGap: "80%",
            itemStyle: {
              normal: {
                color: "#248ff7"
              }
            },
            data: [1800]
          },
          {
            name: "拦截量",
            type: "bar",
            barWidth: "12%",
            barGap: "80%",
            itemStyle: {
              normal: {
                color: "#F36C6C"
              }
            },
            data: [400]
          }
        ]
      });
    }
  },
  computed: {
    optionscroll() {
      return {
        // hoverStop: false,
        step: 0.2
      };
    }
  }
};
</script>
<style lang="scss" scoped>
li {
  list-style: none;
}
.bg {
  width: 100vw;
  height: 100vh;
  background: url("../../assets/img/demo2bg.jpg");
  background-size: 100vw 100vh;
  display: flex;
  flex-direction: column;
  .mod {
    width: 50vw;
    margin: 15vh auto;
    height: 70vh;
    background: url("../../assets/img/box2mod1.png");
    background-size: 100% 100%;
    position: relative;
    .mod_box {
      width: 95%;
      height: 95%;
      margin: 2% auto;
      background-color: rgba(3, 24, 67, 0.8);
      display: flex;
      flex-direction: column;
      .tab {
        width: 100%;
        height: 35%;
        margin-top: 1%;
        display: flex;
        flex-direction: column;
        .tab_heard {
          width: 100%;
          background-color: rgba(255, 255, 255, 0.1);
          ul {
            display: flex;
            flex-direction: row;
            padding: 0px;
            margin: 0px;
            li {
              width: 11.1111%;
              list-style: none;
              color: #fff;
              font-size: 0.6rem;
              float: left;
              color: #70c5ff;
              font-weight: 700;
              text-align: center;
              &.w1 {
              }
            }
          }
        }
        .tab_box {
          width: 100%;
          height: 70%;
          display: flex;
          ul {
            width: 100%;
            padding: 0px;
            margin: 0px;
            font-size: 0.6rem;
            li {
              float: left;
              width: 100%;
              &:nth-child(2n) {
                background-color: rgba(255, 255, 255, 0.1);
              }
              &:last-child {
                border-bottom: 1px solid rgba(255, 255, 255, 0.1);
              }
              p {
                width: 11.1111%;
                text-align: center;
                float: left;
                text-align: center;
                color: #fff;
                &.w1 {
                  width: 12%;
                }
              }
            }
          }
        }
      }
      .echart {
        margin-top: 2%;
        height: 63%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .ebox1 {
          width: 48%;
          height: 100%;
          .bingtu {
            width: 100%;
            height: 100%;
          }
        }
        .ebox2 {
          width: 50%;
          height: 100%;
          display: flex;
          flex-direction: column;
          .ebox2_box1 {
            width: 80%;
            margin: 0px auto;
            display: flex;
            flex-direction: row;
            .box {
              width: 50%;
              font-size: 0.8rem;
              color: #aaddff;
              text-align: center;
              position: relative;
              &:nth-child(1):after {
                position: absolute;
                content: "";
                right: 0px;
                width: 1px;
                height: 25%;
                background-color: rgba(255, 255, 255, 0.3);
                top: 10%;
              }
              .t1 {
                color: #77c8ff;
                font-size: 1.2rem;
              }
              .t2 {
                color: #ffb956;
                font-size: 1.2rem;
              }
            }
          }
          .ebox2_box2 {
            width: 95%;
            margin: 3% auto 0px;
            height: 50%;
            .bingtu {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
  }
}
.seamless-warp {
  height: 100%;
  overflow: hidden;
}
</style>