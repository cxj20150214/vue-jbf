<template>
  <div>
    <div class="bg1">
      <div class="echartBox">
        <div class="box1">
          <div class="title">
            <span>当日卡片交易量</span>
            <p>135,532笔</p>
          </div>
          <ul class="list">
            <li>
              <p class="p1">持卡客户数</p>
              <p class="p2">23,365 户</p>
            </li>
            <li>
              <p class="p1">告警量</p>
              <p class="p2">13,365 次</p>
            </li>
            <li>
              <p class="p1">拦截量</p>
              <p class="p2">3,365 次</p>
            </li>
            <li>
              <p class="p1">处理量</p>
              <p class="p2">3,365 次</p>
            </li>
          </ul>
        </div>
        <div class="box2">
          <div class="bingtu" id="Pie1"></div>
        </div>
        <div class="box3">
          <div class="title">自主交互情况</div>
          <div class="sjBox">
            <div class="tit">
              <p>卡号</p>
              <p>交易日期</p>
              <p>交易时间</p>
              <p>交易金额(万元)</p>
              <p>交互内容</p>
            </div>
            <ul class="gjBox">
              <li>
                <p class="p1">KH3568</p>
                <p class="p2">2019/05/06</p>
                <p class="p3">09:25</p>
                <p class="p4">12,356</p>
                <p class="p5">内容内容内容</p>
              </li>
              <li>
                <p class="p1">KH3568</p>
                <p class="p2">2019/05/06</p>
                <p class="p3">09:25</p>
                <p class="p4">12,356</p>
                <p class="p5">内容内容内容</p>
              </li>
              <li>
                <p class="p1">KH3568</p>
                <p class="p2">2019/05/06</p>
                <p class="p3">09:25</p>
                <p class="p4">12,356</p>
                <p class="p5">内容内容内容</p>
              </li>
              <li>
                <p class="p1">KH3568</p>
                <p class="p2">2019/05/06</p>
                <p class="p3">09:25</p>
                <p class="p4">12,356</p>
                <p class="p5">内容内容内容</p>
              </li>
              <li>
                <p class="p1">KH3568</p>
                <p class="p2">2019/05/06</p>
                <p class="p3">09:25</p>
                <p class="p4">12,356</p>
                <p class="p5">内容内容内容</p>
              </li>
              <li>
                <p class="p1">KH3568</p>
                <p class="p2">2019/05/06</p>
                <p class="p3">09:25</p>
                <p class="p4">12,356</p>
                <p class="p5">内容内容内容</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "demo6",
  data() {
    return {
      
    };
  },
  mounted() {
    this.piedemo();
  },
  created() {},
  methods: {
    // 设置字体
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
    piedemo() {
      let Pie1 = this.$echarts.init(document.getElementById("Pie1"));
      // 饼图
      let color = ["#f69846", "#45dbf7"];
      let names = ["告警率", "处理率"];
      let data = [300, 444];
      let list = [];
      let total = 0;
      for (let i in data) {
        total += data[i];
      }

      let placeHolderStyle = {
        normal: {
          label: {
            show: false
          },
          labelLine: {
            show: false
          },
          color: "rgba(0, 0, 0, 0)",
          borderColor: "rgba(0, 0, 0, 0)",
          borderWidth: 0
        }
      };

      let rich = {
        white: {
          align: "center",
          padding: [3, 0]
        }
      };

      for (let i in data) {
        list.push(
          {
            value: data[i],
            name: names[i],
            itemStyle: {
              normal: {
                borderWidth: 5,
                shadowBlur: 20,
                borderColor: color[i],
                shadowColor: color[i],
                color: color[i]
              }
            }
          },
          {
            value: total / 30,
            name: "",
            itemStyle: placeHolderStyle
          }
        );
      }

      let func = params => {
        let percent = ((params.value / total) * 100).toFixed(1);
        let name = params.name.replace(/\n/g, "");
        if (params.name !== "") {
          return name + "\n{white|" + percent + "%}";
        } else {
          return "";
        }
      };
      Pie1.setOption({
        tooltip: {
          show: false
        },
        series: [
          {
            name: "",
            type: "pie",
            clockWise: false,
            startAngle: "90",
            center: ["50%", "50%"],
            radius: ["50%", "51%"],
            hoverAnimation: false,
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  position: "outside",
                  formatter: func,
                  rich: rich
                },
                labelLine: {
                  length: 5,
                  length2: 15,
                  show: true,
                  color: "#00ffff"
                }
              }
            },
            data: list,
            animationType: "scale",
            animationEasing: "elasticOut",
            animationDelay: function(idx) {
              return idx * 50;
            }
          },
          {
            name: "",
            type: "pie",
            center: ["50%", "50%"],
            radius: ["49%", "49%"],
            itemStyle: {
              color: "transparant"
            },
            startAngle: "90",
            data: [
              {
                value: total,
                name: "",
                label: {
                  normal: {
                    show: true,
                    formatter: "处理记录",
                    rich: {
                      c: {
                        color: "rgb(98,137,169)",
                        fontSize: this.setFontsize(0.4),
                        fontWeight: "bold",
                        lineHeight: 5
                      },
                      b: {
                        color: "rgb(98,137,169)",
                        fontSize: this.setFontsize(0.4),
                        lineHeight: 5
                      }
                    },
                    textStyle: {
                      fontSize: this.setFontsize(0.35),
                      // fontWeight: "bold",
                      color: "#d2d2d3"
                    },
                    position: "center"
                  }
                }
              }
            ]
          }
        ]
      });
    }
  },
  computed: {}
};
</script>
<style lang="scss" scoped>
p {
  margin: 0px;
}
li {
  list-style: none;
}
.bg1 {
  width: 100vw;
  height: 100vh;
  background: #000;
  display: flex;
  padding: 100px 0px;
  .echartBox {
    width: 100%;
    height: 100%;
    padding: 80px;
    background-image: url("../../assets/img/demo5bg4.jpg");
    background-repeat: no-repeat;
    background-size: 100%;
    background-position-y: -150px;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .box1 {
      width: 33%;
      height: 100;
      .title {
        width: 500px;
        height: 50px;
        background: rgba(0, 80, 216, 0.8);
        margin-top: 30px;
        position: relative;
        padding: 0px 20px;
        &::before {
          content: "";
          position: absolute;
          width: 500px;
          height: 60px;
          background-color: #0150d8;
          opacity: 0.3;
          right: -100px;
          top: -25px;
        }
        span {
          line-height: 50px;
          color: #fff;
          font-size: 26px;
        }
        p {
          font-size: 48px;
          color: #fff;
          font-weight: 700;
          letter-spacing: 3px;
          position: absolute;
          top: -10px;
          right: 20px;
        }
      }
      .list {
        width: 400px;
        margin: 0px;
        padding: 0px;
        padding-left: 20px;
        margin-top: 60px;
        li {
          display: flex;
          flex-direction: row;
          height: 45px;
          line-height: 45px;
          margin-bottom: 45px;
          justify-content: space-between;
          p {
            color: #d2d2d3;
            &.p2 {
              font-size: 48px;
              letter-spacing: 3px;
            }
            &.p1 {
              font-size: 20px;
              line-height: 60px;
            }
          }
        }
      }
    }
    .box2 {
      width: 25%;
      height: 100%;
      position: relative;
      .bingtu {
        width: 120%;
        height: 120%;
        position: absolute;
        left: -20%;
        top:-10%;
      }
    }
    .box3 {
      .title{
        font-size: 32px;
        color:#fff;
      }
      width: 50%;
      height: 100%;
      padding-top:80px;
      .sjBox {
        width: 100%;
        height: 50%;
        margin-top: 20px;
        .tit {
          width: 100%;
          height: 50px;
          line-height: 50px;
          display: flex;
          flex-direction: row;
          p {
            color: #00b7d5;
            margin-right: 50px;
            &:nth-child(1){
              margin-right:100px;
            }
            &:nth-child(2){
              margin-right: 80px;
            }
            &:nth-child(3){
              margin-right: 40px;
            }
            font-size: 18px;
          }
        }
        .gjBox {
          width: 100%;
          padding: 0px;
          margin-top: -5px;
          li {
            display: flex;
            flex-direction: row;
            height: 35px;
            line-height: 17px;
            margin-bottom: 10px;
            &:nth-child(2n) {
              p {
                opacity: 0.6;
              }
            }
            p {
              color: #fff;
              text-align: left;
              padding: 10px;
              margin-right: 10px;
              font-size: 16px;
              letter-spacing: 2px;
              &.p1 {
                width: 120px;
                 background: rgba(196, 218, 251, 0.2);
              }
              &.p2 {
                width: 140px;
                background: rgba(196, 218, 251, 0.2);
                color:#00b7d5;
              }
              &.p3 {
                width: 100px;
                background: rgba(196, 218, 251, 0.2);
              }
              &.p4 {
                width: 170px;
                background: rgba(196, 218, 251, 0.2);
              }
              &.p5 {
                width: 150px;
                background: rgba(196, 218, 251, 0.2);
              }
            }
          }
        }
      }
    }
  }
}
</style>