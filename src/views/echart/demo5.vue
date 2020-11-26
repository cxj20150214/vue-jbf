<template>
  <div>
    <div class="qie" @click="next">
      <img src="../../assets/img/qhbutton.png" alt="" />
    </div>
    <div class="qie1" @click="sx">
      <img
        v-show="ssImg1"
        class="img1"
        src="../../assets/img/ssbutton.png"
        alt=""
      /><img
        v-show="ssImg2"
        class="img2"
        src="../../assets/img/ztbutton.png"
        alt=""
      />
    </div>
    <el-carousel
      height="100vh"
      class="lb"
      ref="carousel"
      :interval="8000"
      :autoplay="autoplay"
      trigger="click"
    >
      <el-carousel-item>
        <div class="bg">
          <div class="echartBox">
            <div class="flexBox">
              <el-select class="select_1" v-model="value1" placeholder="请选择">
                <el-option
                  v-for="item in options1"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
              <el-select
                class="select_1"
                v-model="value"
                placeholder="请选择"
                @change="getJGH"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
              <el-date-picker
                v-show="dateMode"
                v-model="selectTime"
                class="select_2"
                type="daterange"
                align="right"
                unlink-panels
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                value-format="yyyy-MM-dd"
                @change="getDatePick"
                :picker-options="pickerOptions"
              >
              </el-date-picker>
            </div>
            <div class="boxLeft">
              <div class="title">
                <p>实时反欺诈</p>
              </div>
              <el-tabs
                class="e_tabs"
                v-model="activeName"
                @tab-click="handleClick"
              >
                <el-tab-pane label="世界地区" name="first">
                  <div class="sjBox">
                    <div class="tit">
                      <p>欺诈国家</p>
                      <p>欺诈事件数(件)</p>
                      <p>欺诈事件金额(万元)</p>
                    </div>
                    <ul class="gjBox">
                      <li>
                        <p class="p1">中国</p>
                        <p class="p2">1,200</p>
                        <p class="p3">2,225,000</p>
                      </li>
                      <li>
                        <p class="p1">韩国</p>
                        <p class="p2">800</p>
                        <p class="p3">1,225,000</p>
                      </li>
                      <li>
                        <p class="p1">日本</p>
                        <p class="p2">1,400</p>
                        <p class="p3">2,655,000</p>
                      </li>
                      <li>
                        <p class="p1">俄罗斯</p>
                        <p class="p2">1,080</p>
                        <p class="p3">1,245,000</p>
                      </li>
                      <li>
                        <p class="p1">新加坡</p>
                        <p class="p2">900</p>
                        <p class="p3">225,000</p>
                      </li>
                      <li>
                        <p class="p1">印度</p>
                        <p class="p2">1,000</p>
                        <p class="p3">125,000</p>
                      </li>
                    </ul>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="中国地区" name="second">
                  <div class="sjBox">
                    <div class="tit">
                      <p>欺诈地区</p>
                      <p>欺诈事件数(件)</p>
                      <p>欺诈事件金额(万元)</p>
                    </div>
                    <ul class="gjBox">
                      <li>
                        <p class="p1">福建</p>
                        <p class="p2">1,200</p>
                        <p class="p3">32,000</p>
                      </li>
                      <li>
                        <p class="p1">浙江</p>
                        <p class="p2">1,200</p>
                        <p class="p3">42,000</p>
                      </li>
                      <li>
                        <p class="p1">黑龙江</p>
                        <p class="p2">1,200</p>
                        <p class="p3">12,000</p>
                      </li>
                      <li>
                        <p class="p1">河北</p>
                        <p class="p2">1,200</p>
                        <p class="p3">14,000</p>
                      </li>
                      <li>
                        <p class="p1">云南</p>
                        <p class="p2">1,200</p>
                        <p class="p3">11,000</p>
                      </li>
                      <li>
                        <p class="p1">四川</p>
                        <p class="p2">1,200</p>
                        <p class="p3">322,000</p>
                      </li>
                    </ul>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="商户维度" name="third">
                  <div class="sjBox">
                    <div class="tit">
                      <p>商户类型</p>
                      <p>欺诈事件数(件)</p>
                      <p>欺诈事件金额(万元)</p>
                    </div>
                    <ul class="gjBox">
                      <li>
                        <p class="p1">类型</p>
                        <p class="p2">1,200</p>
                        <p class="p3">2,225,000</p>
                      </li>
                      <li>
                        <p class="p1">类型</p>
                        <p class="p2">1,200</p>
                        <p class="p3">2,225,000</p>
                      </li>
                      <li>
                        <p class="p1">类型</p>
                        <p class="p2">1,200</p>
                        <p class="p3">2,225,000</p>
                      </li>
                      <li>
                        <p class="p1">类型</p>
                        <p class="p2">1,200</p>
                        <p class="p3">2,225,000</p>
                      </li>
                      <li>
                        <p class="p1">类型</p>
                        <p class="p2">1,200</p>
                        <p class="p3">2,225,000</p>
                      </li>
                      <li>
                        <p class="p1">类型</p>
                        <p class="p2">1,200</p>
                        <p class="p3">2,225,000</p>
                      </li>
                    </ul>
                  </div>
                </el-tab-pane>
              </el-tabs>
            </div>
            <div class="boxRight">
              <div class="ditu" id="ditu1" v-show="sjMap"></div>
              <div class="ditu" id="ditu2"></div>
            </div>
          </div>
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <div class="bg1">
          <div class="echartBox">
            <div class="flexBox">
              <el-select
                class="select_1"
                v-model="value2"
                placeholder="请选择"
                @change="getJGH"
              >
                <el-option
                  v-for="item in options2"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
              <el-date-picker
                v-show="dateMode1"
                v-model="selectTime1"
                class="select_2 select_2_1"
                type="date"
                placeholder="选择日期"
                value-format="yyyy-MM-dd"
                @change="getDatePick1"
                :picker-options="pickerOptions1"
              >
              </el-date-picker>
            </div>
            <div class="box1">
              <div class="title">
                <span>当日监测交易量</span>
                <p>135,532笔</p>
              </div>
              <ul class="list">
                <li>
                  <p class="p1">当日监测客户数</p>
                  <p class="p2">23,365 户</p>
                </li>
                <li>
                  <p class="p1">告警量</p>
                  <p class="p2">13,365 起</p>
                </li>
                <li>
                  <p class="p1">处理量</p>
                  <p class="p2">3,365 起</p>
                </li>
                <li v-show="sskb">
                  <p class="p1">待处理量</p>
                  <p class="p2">3,365 起</p>
                </li>
                <li v-show="sskb">
                  <p class="p1">在线人数</p>
                  <p class="p2">3,36 人</p>
                </li>
              </ul>
            </div>
            <div class="box2">
              <div class="bingtu" id="Pie1"></div>
            </div>
            <div class="box3">
              <el-tabs
                class="e_tabs e_tabs1"
                v-model="activeName1"
                @tab-click="handleClick1"
              >
                <el-tab-pane label="告警量" name="first">
                  <div class="zxtTxt">
                    <p>当天告警量比平时少<span>37.5%</span></p>
                    <div class="zxtTxt1">
                      <p>当天：2570起</p>
                      <p>平均：2570起</p>
                    </div>
                  </div>
                  <div class="zxt" id="zxt"></div>
                </el-tab-pane>
                <el-tab-pane label="欺诈事件数" name="second">
                  <div class="zxtTxt">
                    <p>当天欺诈事件数比平时少<span>37.5%</span></p>
                    <div class="zxtTxt1">
                      <p>当天：2570起</p>
                      <p>平均：2570起</p>
                    </div>
                  </div>
                  <div class="zxt" id="zxt1"></div>
                </el-tab-pane>
                <el-tab-pane label="自动处理概况" name="third">
                  <div class="zxt" id="zxt2"></div>
                </el-tab-pane>
              </el-tabs>
            </div>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
    <!-- <div class="bg">
      <div class="echartBox">
        <div class="boxLeft">
          <div class="title">
            <p>实时反欺诈</p>
          </div>
          <div class="sjBox">
            <div class="tit">
              <p>欺诈国家</p>
              <p>欺诈案件数(件)</p>
              <p>欺诈案件金额(万元)</p>
            </div>
            <ul class="gjBox">
              <li>
                <p class="p1">中国</p>
                <p class="p2">1,200</p>
                <p class="p3">2,225,000</p>
              </li>
              <li>
                <p class="p1">中国</p>
                <p class="p2">1,200</p>
                <p class="p3">2,225,000</p>
              </li>
              <li>
                <p class="p1">中国</p>
                <p class="p2">1,200</p>
                <p class="p3">2,225,000</p>
              </li>
              <li>
                <p class="p1">中国</p>
                <p class="p2">1,200</p>
                <p class="p3">2,225,000</p>
              </li>
              <li>
                <p class="p1">中国</p>
                <p class="p2">1,200</p>
                <p class="p3">2,225,000</p>
              </li>
              <li>
                <p class="p1">中国</p>
                <p class="p2">1,200</p>
                <p class="p3">2,225,000</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="boxRight">
          <div class="ditu" id="ditu1"></div>
        </div>
      </div>
    </div> -->
  </div>
</template>
<script>
import "echarts/map/js/world.js";
import "echarts/map/js/china.js";
export default {
  name: "demo5",
  data() {
    return {
      lang: "cn",
      sskb: true,
      // 下拉选择全部/线上/线下
      options1: [
        {
          value: "a1",
          label: "全部"
        },
        {
          value: "a2",
          label: "线上"
        },
        {
          value: "a3",
          label: "线下"
        }
      ],
      value1: "全部",
      // 下拉选择实时历史
      options: [
        {
          value: "b1",
          label: "实时看板"
        },
        {
          value: "b2",
          label: "历史看板"
        }
      ],
      options2: [
        {
          value: "b3",
          label: "实时看板"
        },
        {
          value: "b4",
          label: "历史看板"
        }
      ],
      value: "实时看板",
      value2: "实时看板",
      // 下拉日期选择
      dateMode: false,
      dateMode1: false,
      pickerOptions: {
        // disabledDate是一个函数,参数是当前选中的日期值,这个函数需要返回一个Boolean值,
        disabledDate: time => {
          // 如果函数处理比较简单,可以直接在这里写逻辑方法
          // return time.getTime() < Date.now() - 8.64e7

          // 如果函数里处理的数据比较麻烦,也可以单独放在一个函数里,避免data数据太臃肿
          return this.dealDisabledDate(time);
        }
      },
      pickerOptions1: {
        // disabledDate是一个函数,参数是当前选中的日期值,这个函数需要返回一个Boolean值,
        disabledDate: time => {
          // 如果函数处理比较简单,可以直接在这里写逻辑方法
          // return time.getTime() < Date.now() - 8.64e7

          // 如果函数里处理的数据比较麻烦,也可以单独放在一个函数里,避免data数据太臃肿
          return this.dealDisabledDate(time);
        }
      },
      selectTime: "",
      selectTime1: "",
      ssImg1: true,
      ssImg2: false,
      activeName: "first",
      activeName1: "first",
      sjMap: true,
      zgMap: false,
      autoplay: false,
      toggle: "开",
      handle: "40%"
    };
  },
  mounted() {
    console.log(this.$el);
    this.piedemo();
    this.DrawMap();
    window.onresize = () => {
      return (() => {
        this.$router.go(0);
      })();
    };
  },
  created() {
    console.log(this.$data);
    this.$nextTick(() => {
      // 禁用右键
      document.oncontextmenu = new Function("event.returnValue=false");
      // 禁用选择
      document.onselectstart = new Function("event.returnValue=false");
    });
  },
  methods: {
    // 监听下拉日期
    getDatePick() {
      console.log(this.selectTime);
    },
    getDatePick1() {
      console.log(this.selectTime1);
    },
    // 监听 下拉实时/历史
    getJGH(val) {
      console.log(val);
      if (val == "b2") {
        this.dateMode = true;
      }
      if (val == "b1") {
        this.dateMode = false;
      }
      if (val == "b4") {
        this.dateMode1 = true;
        this.sskb = false;
      }
      if (val == "b3") {
        this.dateMode1 = false;
        this.sskb = true;
      }
    },
    // 下拉日期选择
    dealDisabledDate(time) {
      // time.getTime是把选中的时间转化成自1970年1月1日 00:00:00 UTC到当前时间的毫秒数
      // Date.now()是把今天的时间转化成自1970年1月1日 00:00:00 UTC到当前时间的毫秒数,这样比较好比较
      // return的值,true是不可以操作选择,false可以操作选择,比如下面这个判断就只能选择今天之后的时间
      // return time.getTime() < Date.now();
      // 设置可选择的日期为今天之前的一个月内
      let curDate = new Date().getTime();
      // 这里算出一个月的毫秒数,这里使用30的平均值,实际中应根据具体的每个月有多少天计算
      let day = 31 * 24 * 3600 * 1000;
      let dateRegion = curDate - day;
      return (
        time.getTime() > Date.now() - 8.64e7 || time.getTime() < dateRegion
      );

      // 这里减8.64e7的作用是,让今天的日期可以选择,如果不减的话,今天的日期就不可以选择,判断中写<= 也是没用的,一天的毫秒数就是8.64e7
      // return time.getTime() <= Date.now()
      // return time.getTime() < Date.now() - 8.64e7
    },
    // 测试轮询
    ceshiData() {
      this.ceshi111 = this.ceshi111 + 1;
    },
    ceshi() {
      window.setInterval(() => {
        setTimeout(this.ceshiData(), 0);
      }, 30000);
    },
    // 切换下一页
    next() {
      this.$refs.carousel.next();
    },
    sx() {
      if (this.autoplay === true) {
        this.autoplay = false;
        this.ssImg2 = false;
        this.ssImg1 = true;
        console.log("关闭自动");
        return false;
      }
      if (this.autoplay === false) {
        this.autoplay = true;
        this.ssImg2 = true;
        this.ssImg1 = false;
        console.log("启动自动");
        return false;
      }
    },
    // 切换列表
    handleClick(tab, event) {
      if (tab.name === "first") {
        this.sjMap = true;
        this.zgMap = false;
      }
      if (tab.name === "second") {
        this.sjMap = false;
        this.zgMap = true;
      }
    },
    handleClick1(tab, event) {
      this.piedemo();
    },
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
      let zxt = this.$echarts.init(document.getElementById("zxt"));
      let zxt1 = this.$echarts.init(document.getElementById("zxt1"));
      let zxt2 = this.$echarts.init(document.getElementById("zxt2"));
      this.$nextTick(() => {
        Pie1.resize();
      });
      this.$nextTick(() => {
        zxt.resize();
      });
      this.$nextTick(() => {
        zxt1.resize();
      });
      this.$nextTick(() => {
        zxt2.resize();
      });
      // 折线图
      let t = this;
      zxt.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
            label: {
              show: true
            }
          }
        },
        grid: {
          left: "4%",
          top: "18%",
          right: "5%",
          bottom: "22%"
        },

        xAxis: {
          data: ["16:30"],
          axisLine: {
            show: true, //隐藏X轴轴线
            lineStyle: {
              color: "#3d5269",
              width: 1
            }
          },
          axisTick: {
            show: true, //隐藏X轴刻度
            alignWithLabel: true
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: "#d2d2d3", //X轴文字颜色
              fontSize: 14
            },
            interval: 0
          }
        },
        yAxis: [
          {
            type: "value",
            name: "数量",
            nameTextStyle: {
              color: "#d2d2d3",
              fontSize: 14
            },
            splitLine: {
              show: true,
              lineStyle: {
                width: 1,
                color: "#3d5269"
              }
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: "#d2d2d3",
                fontSize: 14
              }
            }
          }
        ],
        series: [
          {
            name: "当日",
            type: "bar",
            barWidth: 18,
            itemStyle: {
              normal: {
                color: "#32e8f5"
              }
            },
            data: [133]
          },
          {
            name: "平均",
            type: "bar",
            barWidth: 18,
            itemStyle: {
              normal: {
                color: "#f69846"
              }
            },
            data: [123]
          }
        ]
      });
      zxt1.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
            label: {
              show: true
            }
          }
        },
        grid: {
          left: "4%",
          top: "18%",
          right: "5%",
          bottom: "22%"
        },

        xAxis: {
          data: ["16:30"],
          axisLine: {
            show: true, //隐藏X轴轴线
            lineStyle: {
              color: "#3d5269",
              width: 1
            }
          },
          axisTick: {
            show: true, //隐藏X轴刻度
            alignWithLabel: true
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: "#d2d2d3", //X轴文字颜色
              fontSize: 14
            },
            interval: 0
          }
        },
        yAxis: [
          {
            type: "value",
            name: "数量",
            nameTextStyle: {
              color: "#d2d2d3",
              fontSize: 14
            },
            splitLine: {
              show: true,
              lineStyle: {
                width: 1,
                color: "#3d5269"
              }
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: "#d2d2d3",
                fontSize: 14
              }
            }
          }
        ],
        series: [
          {
            name: "当日",
            type: "bar",
            barWidth: 18,
            itemStyle: {
              normal: {
                color: "#32e8f5"
              }
            },
            data: [133]
          },
          {
            name: "平均",
            type: "bar",
            barWidth: 18,
            itemStyle: {
              normal: {
                color: "#f69846"
              }
            },
            data: [123]
          }
        ]
      });
      zxt2.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
            label: {
              show: true
            }
          }
        },
        grid: {
          left: "4%",
          top: "18%",
          right: "5%",
          bottom: "22%"
        },

        xAxis: {
          data: ["微信", "短信", "智能外呼", "自动查验"],
          axisLine: {
            show: true, //隐藏X轴轴线
            lineStyle: {
              color: "#3d5269",
              width: 1
            }
          },
          axisTick: {
            show: true, //隐藏X轴刻度
            alignWithLabel: true
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: "#d2d2d3", //X轴文字颜色
              fontSize: 14
            },
            interval: 0
          }
        },
        yAxis: [
          {
            type: "value",
            name: "数量",
            nameTextStyle: {
              color: "#d2d2d3",
              fontSize: 14
            },
            splitLine: {
              show: true,
              lineStyle: {
                width: 1,
                color: "#3d5269"
              }
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: "#d2d2d3",
                fontSize: 14
              }
            }
          }
        ],
        series: [
          {
            name: "当日",
            type: "bar",
            barWidth: 18,
            itemStyle: {
              normal: {
                color: "#32e8f5"
              }
            },
            data: [133, 127, 110, 90]
          },
          {
            name: "平均",
            type: "bar",
            barWidth: 18,
            itemStyle: {
              normal: {
                color: "#f69846"
              }
            },
            data: [123, 80, 70, 93]
          }
        ]
      });
      // 饼图
      let color = ["#f69846", "#45dbf7"];
      let names = ["自动处理", "人工处理"];
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
                borderWidth: 8,
                shadowBlur: 10,
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
            center: ["50%", "55%"],
            radius: ["50%", "52%"],
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
            center: ["50%", "55%"],
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
                    formatter: this.handle + "已处理",
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
      window.addEventListener("resize", function() {
        Pie1.resize();
      });
      window.addEventListener("resize", function() {
        zxt.resize();
      });
      window.addEventListener("resize", function() {
        zxt1.resize();
      });
      window.addEventListener("resize", function() {
        zxt2.resize();
      });
    },
    DrawMap() {
      // 世界地图
      let dituJB1 = this.$echarts.init(document.getElementById("ditu1"));
      let dituJB2 = this.$echarts.init(document.getElementById("ditu2"));
      this.$nextTick(() => {
        dituJB1.resize();
      });
      this.$nextTick(() => {
        dituJB2.resize();
      });
      var data = [
        // { name: "卢旺达", value: 56.99 },
        // { name: "布隆迪", value: 20.27 },
        // { name: "尼泊尔", value: 40.01 },
        // { name: "乌干达", value: 40.37 },
        // { name: "老挝", value: 71.28 },
        // { name: "埃塞俄比亚", value: 19.96 },
        // { name: "马达加斯加", value: 21.82 },
        // { name: "海地", value: 33.11 },
        // { name: "也门", value: 51.51 },
        // { name: "肯尼亚", value: 33.33 },
        // { name: "菲律宾", value: 68.82 },
        // { name: "索马里", value: 0 },
        // { name: "阿富汗", value: 15.94 },
        // { name: "巴基斯坦", value: 28.16 },
        { name: "朝鲜", value: 0 },
        // { name: "印度", value: 33.2 },
        // { name: "厄立特里亚", value: 10.59 },
        // { name: "哥伦比亚", value: 143.51 },
        // { name: "哥伦比亚", value: 143.51 },
        // { name: "巴布亚新几内亚", value: 32.39 },
        // { name: "布基纳法索", value: 12.84 },
        // { name: "马拉维", value: 9.97 },
        // { name: "埃及", value: 53.39 },
        // { name: "塞拉利昂", value: 8.72 },
        // { name: "尼加拉瓜", value: 29.14 },
        // { name: "坦桑尼亚", value: 13.09 },
        // { name: "尼日利亚", value: 43.94 },
        // { name: "尼日尔", value: 6.35 },
        // { name: "毛里塔尼亚", value: 21.69 },
        // { name: "喀麦隆", value: 19.69 },
        // { name: "新加坡", value: 788.07 },
        // { name: "缅甸", value: 15.48 },
        // { name: "印尼", value: 49.68 },
        // { name: "贝宁", value: 11.62 },
        // { name: "摩洛哥", value: 44.39 },
        // { name: "马里", value: 10.68 },
        // { name: "哥斯达黎加", value: 124.23 },
        // { name: "萨尔瓦多", value: 53.55 },
        // { name: "厄瓜多尔", value: 69.56 },
        // { name: "泰国", value: 75.76 },
        // { name: "斯里兰卡", value: 40.52 },
        // { name: "多米尼加", value: 77.08 },
        // { name: "韩国", value: 312.71 },
        // { name: "刚果民主共和国", value: 4.37 },
        // { name: "越南", value: 18.4 },
        // { name: "几内亚", value: 5.92 },
        // { name: "危地马拉", value: 37.58 },
        // { name: "利比里亚", value: 4.31 },
        // { name: "多哥", value: 6.35 },
        // { name: "秘鲁", value: 64.13 },
        // { name: "毛里求斯", value: 100.04 },
        // { name: "莫桑比克", value: 5.08 },
        // { name: "阿尔及利亚", value: 53.74 },
        // { name: "柬埔寨", value: 9.37 },
        // { name: "斯威士兰", value: 45.26 },
        // { name: "乍得", value: 10.66 },
        // { name: "塞内加尔", value: 11.74 },
        // { name: "津巴布韦", value: 7.85 },
        // { name: "黎巴嫩", value: 95.02 },
        // { name: "洪都拉斯", value: 22.47 },
        // { name: "伊拉克", value: 47.76 },
        // { name: "科特迪瓦", value: 13.1 },
        // { name: "孟加拉国", value: 7.25 },
        // { name: "赞比亚", value: 13.51 },
        // { name: "巴拿马", value: 72.29 },
        // { name: "中非共和国", value: 3.97 },
        // { name: "突尼斯", value: 36.71 },
        // { name: "加纳", value: 11.49 },
        // { name: "斐济", value: 31.41 },
        // { name: "安哥拉", value: 32.99 },
        // { name: "冈比亚", value: 4.76 },
        { name: "中国", value: 150.89 },
        // { name: "刚果共和国", value: 24.02 },
        // { name: "古巴", value: 45.95 },
        // { name: "苏丹", value: 14.59 },
        // { name: "伊朗", value: 49.76 },
        // { name: "委内瑞拉", value: 106.43 },
        // { name: "土耳其", value: 73.85 },
        // { name: "牙买加", value: 32.98 },
        // { name: "叙利亚", value: 0 },
        // { name: "玻利维亚", value: 13.1 },
        { name: "巴西", value: 38.18 },
        // { name: "阿联酋", value: 204.32 },
        // { name: "智利", value: 70.17 },
        // { name: "马来西亚", value: 47.23 },
        // { name: "苏里南", value: 43.68 },
        // { name: "前南马其顿", value: 23.52 },
        // { name: "加蓬", value: 47.86 },
        // { name: "日本", value: 224.41 },
        // { name: "阿尔巴尼亚", value: 19.88 },
        { name: "墨西哥", value: 42.05 },
        // { name: "波多黎各", value: 122.98 },
        // { name: "以色列", value: 137.51 },
        // { name: "西班牙", value: 139 },
        // { name: "特立尼达和多巴哥", value: 73.85 },
        // { name: "卡塔尔", value: 312.81 },
        // { name: "克罗地亚", value: 19.07 },
        // { name: "乌拉圭", value: 50.36 },
        // { name: "塔吉克斯坦", value: 3.13 },
        // { name: "巴林", value: 85.71 },
        // { name: "巴拉圭", value: 13.55 },
        // { name: "沙特阿拉伯", value: 75.26 },
        // { name: "瑞士", value: 290.61 },
        // { name: "蒙古", value: 10.27 },
        // { name: "科威特", value: 144.27 },
        // { name: "圭亚那", value: 11.3 },
        // { name: "英国", value: 142.92 },
        // { name: "塞浦路斯", value: 85.21 },
        // { name: "阿根廷", value: 36.4 },
        // { name: "爱尔兰", value: 170.27 },
        // { name: "意大利", value: 122.84 },
        // { name: "南非", value: 25.19 },
        // { name: "荷兰", value: 167.29 },
        // { name: "黑山共和国", value: 20.69 },
        // { name: "利比亚", value: 35.61 },
        // { name: "亚美尼亚", value: 9.26 },
        // { name: "斯洛文尼亚", value: 68.59 },
        // { name: "波兰", value: 35.51 },
        // { name: "希腊", value: 74.84 },
        // { name: "纳米比亚", value: 14.1 },
        // { name: "德国", value: 113.16 },
        // { name: "阿曼", value: 53.31 },
        // { name: "格鲁吉亚", value: 7.76 },
        // { name: "卢森堡", value: 261.76 },
        // { name: "葡萄牙", value: 56.74 },
        // { name: "阿塞拜疆", value: 14.7 },
        // { name: "新喀里多尼亚", value: 0 },
        // { name: "吉尔吉斯斯坦", value: 2.18 },
        // { name: "新西兰", value: 81.44 },
        // { name: "乌兹别克斯坦", value: 3.28 },
        // { name: "塞尔维亚", value: 12.33 },
        // { name: "法国", value: 91.28 },
        // { name: "奥地利", value: 102.69 },
        // { name: "捷克共和国", value: 39.81 },
        // { name: "斯洛伐克", value: 33.15 },
        // { name: "拉脱维亚", value: 21.6 },
        // { name: "挪威", value: 164.82 },
        // { name: "土库曼斯坦", value: 8.36 },
        // { name: "比利时", value: 81.96 },
        // { name: "丹麦", value: 99.84 },
        // { name: "匈牙利", value: 22.46 },
        // { name: "伯利兹", value: 6.99 },
        // { name: "瑞典", value: 82.78 },
        // { name: "博茨瓦纳", value: 9.84 },
        // { name: "罗马尼亚", value: 12.26 },
        { name: "俄罗斯", value: 5.51 },
        { name: "澳大利亚", value: 74.66 },
        { name: "加拿大", value: 17.79 },
        // { name: "保加利亚", value: 9.73 },
        // { name: "哈萨克斯坦", value: 12.24 },
        // { name: "立陶宛", value: 16.14 },
        // { name: "爱沙尼亚", value: 19.49 },
        // { name: "白俄罗斯", value: 7.67 },
        { name: "美国", value: 63.52 },
        { name: "美国", value: 63.52 }
        // { name: "文莱", value: 45.69 },
        // { name: "摩尔多瓦", value: 2.08 },
        // { name: "巴哈马", value: 26.37 },
        // { name: "芬兰", value: 55.07 },
        // { name: "乌克兰", value: 3.33 },
        // { name: "北马里亚纳", value: 0 }

        //{name:'南苏丹',value:0},
        //{name:'索马里兰',value:0},
        //{name:'黑山',value:0},
        //{name:'科索沃',value:0},
        //{name:'塞尔维亚',value:0},
      ];

      var data1 = [
        {
          name: "黑龙江",
          value: 0
        },
        {
          name: "广西",
          value: 0
        },
        {
          name: "甘肃",
          value: 0
        },
        {
          name: "山西",
          value: 0
        },
        {
          name: "陕西",
          value: 0
        },
        {
          name: "吉林",
          value: 0
        },
        {
          name: "贵州",
          value: 0
        },
        {
          name: "新疆",
          value: 0
        },
        {
          name: "青海",
          value: 0
        },
        {
          name: "西藏",
          value: 0
        },
        {
          name: "四川",
          value: 0
        },
        {
          name: "宁夏",
          value: 0
        },
        {
          name: "海南",
          value: 0
        },
        {
          name: "台湾",
          value: 0
        },
        {
          name: "香港",
          value: 0
        },
        {
          name: "澳门",
          value: 0
        },
        {
          name: "上海",
          value: 140
        },
        {
          name: "安徽",
          value: 120
        },
        {
          name: "江苏",
          value: 200
        },
        {
          name: "浙江",
          value: 20
        },
        {
          name: "北京",
          value: 20
        },
        {
          name: "天津",
          value: 10
        },
        {
          name: "河北",
          value: 10
        },
        {
          name: "河南",
          value: 10
        },
        {
          name: "内蒙古",
          value: 10
        },
        {
          name: "湖南",
          value: 10
        },
        {
          name: "山东",
          value: 10
        },
        {
          name: "江西",
          value: 10
        },
        {
          name: "湖北",
          value: 10
        },
        {
          name: "福建",
          value: 10
        },
        {
          name: "广东",
          value: 10
        }
      ];

      var nameMap = {
        Afghanistan: "阿富汗",
        Albania: "阿尔巴尼亚",
        Algeria: "阿尔及利亚",
        Andorra: "安道尔",
        Angola: "安哥拉",
        Antarctica: "南极洲",
        "Antigua and Barbuda": "安提瓜和巴布达",
        Argentina: "阿根廷",
        Armenia: "亚美尼亚",
        Australia: "澳大利亚",
        Austria: "奥地利",
        Azerbaijan: "阿塞拜疆",
        "The Bahamas": "巴哈马",
        Bahrain: "巴林",
        Bangladesh: "孟加拉国",
        Barbados: "巴巴多斯",
        Belarus: "白俄罗斯",
        Belgium: "比利时",
        Belize: "伯利兹",
        Benin: "贝宁",
        Bermuda: "百慕大",
        Bhutan: "不丹",
        Bolivia: "玻利维亚",
        "Bosnia and Herzegovina": "波斯尼亚和黑塞哥维那",
        Botswana: "博茨瓦纳",
        Brazil: "巴西",
        Brunei: "文莱",
        Bulgaria: "保加利亚",
        "Burkina Faso": "布基纳法索",
        Burundi: "布隆迪",
        Cambodia: "柬埔寨",
        Cameroon: "喀麦隆",
        Canada: "加拿大",
        "Cape Verde": "佛得角",
        "Central African Republic": "中非共和国",
        Chad: "乍得",
        Chile: "智利",
        China: "中国",
        Colombia: "哥伦比亚",
        Comoros: "科摩罗",
        "Republic of the Congo": "刚果共和国",
        "Costa Rica": "哥斯达黎加",
        Croatia: "克罗地亚",
        Cuba: "古巴",
        Cyprus: "塞浦路斯",
        "Czech Republic": "捷克共和国",
        Denmark: "丹麦",
        Djibouti: "吉布提",
        Dominica: "多米尼加",
        "Dominican Republic": "多明尼加共和国",
        Ecuador: "厄瓜多尔",
        Egypt: "埃及",
        "El Salvador": "萨尔瓦多",
        "Equatorial Guinea": "赤道几内亚",
        Eritrea: "厄立特里亚",
        Estonia: "爱沙尼亚",
        Ethiopia: "埃塞俄比亚",
        "Falkland Islands": "福克兰群岛",
        "Faroe Islands": "法罗群岛",
        Fiji: "斐济",
        Finland: "芬兰",
        France: "法国",
        "French Guiana": "法属圭亚那",
        "French Southern and Antarctic Lands": "法属南半球和南极领地",
        Gabon: "加蓬",
        Gambia: "冈比亚",
        "Gaza Strip": "加沙",
        Georgia: "格鲁吉亚",
        Germany: "德国",
        Ghana: "加纳",
        Greece: "希腊",
        Greenland: "格陵兰",
        Grenada: "格林纳达",
        Guadeloupe: "瓜德罗普",
        Guatemala: "危地马拉",
        Guinea: "几内亚",
        "Guinea Bissau": "几内亚比绍",
        Guyana: "圭亚那",
        Haiti: "海地",
        Honduras: "洪都拉斯",
        "Hong Kong": "香港",
        Hungary: "匈牙利",
        Iceland: "冰岛",
        India: "印度",
        Indonesia: "印尼",
        Iran: "伊朗",
        Iraq: "伊拉克",
        "Iraq-Saudi Arabia Neutral Zone": "伊拉克阿拉伯中立区",
        Ireland: "爱尔兰",
        "Isle of Man": "马恩岛",
        Israel: "以色列",
        Italy: "意大利",
        "Ivory Coast": "科特迪瓦",
        Jamaica: "牙买加",
        "Jan Mayen": "扬马延岛",
        Japan: "日本",
        Jordan: "约旦",
        Kazakhstan: "哈萨克斯坦",
        Kenya: "肯尼亚",
        Kerguelen: "凯尔盖朗群岛",
        Kiribati: "基里巴斯",
        "North Korea": "北朝鲜",
        "South Korea": "韩国",
        Kuwait: "科威特",
        Kyrgyzstan: "吉尔吉斯斯坦",
        Laos: "老挝",
        Latvia: "拉脱维亚",
        Lebanon: "黎巴嫩",
        Lesotho: "莱索托",
        Liberia: "利比里亚",
        Libya: "利比亚",
        Liechtenstein: "列支敦士登",
        Lithuania: "立陶宛",
        Luxembourg: "卢森堡",
        Macau: "澳门",
        Macedonia: "马其顿",
        Madagascar: "马达加斯加",
        Malawi: "马拉维",
        Malaysia: "马来西亚",
        Maldives: "马尔代夫",
        Mali: "马里",
        Malta: "马耳他",
        Martinique: "马提尼克",
        Mauritania: "毛里塔尼亚",
        Mauritius: "毛里求斯",
        Mexico: "墨西哥",
        Moldova: "摩尔多瓦",
        Monaco: "摩纳哥",
        Mongolia: "蒙古",
        Morocco: "摩洛哥",
        Mozambique: "莫桑比克",
        Myanmar: "缅甸",
        Namibia: "纳米比亚",
        Nepal: "尼泊尔",
        Netherlands: "荷兰",
        "New Caledonia": "新喀里多尼亚",
        "New Zealand": "新西兰",
        Nicaragua: "尼加拉瓜",
        Niger: "尼日尔",
        Nigeria: "尼日利亚",
        "Northern Mariana Islands": "北马里亚纳群岛",
        Norway: "挪威",
        Oman: "阿曼",
        Pakistan: "巴基斯坦",
        Panama: "巴拿马",
        "Papua New Guinea": "巴布亚新几内亚",
        Paraguay: "巴拉圭",
        Peru: "秘鲁",
        Philippines: "菲律宾",
        Poland: "波兰",
        Portugal: "葡萄牙",
        "Puerto Rico": "波多黎各",
        Qatar: "卡塔尔",
        Reunion: "留尼旺岛",
        Romania: "罗马尼亚",
        Russia: "俄罗斯",
        Rwanda: "卢旺达",
        "San Marino": "圣马力诺",
        "Sao Tome and Principe": "圣多美和普林西比",
        "Saudi Arabia": "沙特阿拉伯",
        Senegal: "塞内加尔",
        Seychelles: "塞舌尔",
        "Sierra Leone": "塞拉利昂",
        Singapore: "新加坡",
        Slovakia: "斯洛伐克",
        Slovenia: "斯洛文尼亚",
        "Solomon Islands": "所罗门群岛",
        Somalia: "索马里",
        "South Africa": "南非",
        Spain: "西班牙",
        "Sri Lanka": "斯里兰卡",
        "St. Christopher-Nevis": "圣",
        "St. Lucia": "圣露西亚",
        "St. Vincent and the Grenadines": "圣文森特和格林纳丁斯",
        Sudan: "苏丹",
        Suriname: "苏里南",
        Svalbard: "斯瓦尔巴特群岛",
        Swaziland: "斯威士兰",
        Sweden: "瑞典",
        Switzerland: "瑞士",
        Syria: "叙利亚",
        Taiwan: "台湾",
        Tajikistan: "塔吉克斯坦",
        "United Republic of Tanzania": "坦桑尼亚",
        Thailand: "泰国",
        Togo: "多哥",
        Tonga: "汤加",
        "Trinidad and Tobago": "特里尼达和多巴哥",
        Tunisia: "突尼斯",
        Turkey: "土耳其",
        Turkmenistan: "土库曼斯坦",
        "Turks and Caicos Islands": "特克斯和凯科斯群岛",
        Uganda: "乌干达",
        Ukraine: "乌克兰",
        "United Arab Emirates": "阿联酋",
        "United Kingdom": "英国",
        " United States": "美国",
        Uruguay: "乌拉圭",
        Uzbekistan: "乌兹别克斯坦",
        Vanuatu: "瓦努阿图",
        Venezuela: "委内瑞拉",
        Vietnam: "越南",
        "Western Sahara": "西撒哈拉",
        "Western Samoa": "西萨摩亚",
        Yemen: "也门",
        Yugoslavia: "南斯拉夫",
        "Democratic Republic of the Congo": "刚果民主共和国",
        Zambia: "赞比亚",
        Zimbabwe: "津巴布韦",
        "South Sudan": "南苏丹",
        Somaliland: "索马里兰",
        Montenegro: "黑山",
        Kosovo: "科索沃",
        "Republic of Serbia": "塞尔维亚"
      };
      dituJB1.setOption({
        timeline: {
          axisType: "category",
          orient: "vertical",
          autoPlay: true,
          inverse: true,
          playInterval: 5000,
          left: null,
          right: -105,
          top: 20,
          bottom: 20,
          width: 46
        },
        baseOption: {
          visualMap: {
            show: false,
            type: "piecewise", //分段型。
            splitNumber: 6,
            inverse: true,
            pieces: [
              {
                min: 0,
                max: 10,
                color: "#60D8FF"
              },
              {
                min: 10,
                max: 20,
                color: "#973412"
              },
              {
                min: 20,
                max: 40,
                color: "#8E164E"
              },
              {
                min: 40,
                max: 70,
                color: "#e69d87"
              },
              {
                min: 70,
                max: 140,
                color: "#B26410"
              },
              {
                min: 140,
                //max: 1000,
                color: "#882503"
              }
            ],
            left: "left",
            top: "bottom",
            textStyle: {
              color: "#000"
            }
            //min: 0,
            //max: 60000,
            //text:['High','Low'],
            //realtime: true,
            //calculable: true,
            //color: ['red','orange','lightgreen']
          },
          series: [
            {
              type: "map",
              map: "world",
              zoom: 1.2,
              layoutCenter: ["50%", "50%"],
              roam: false,
              itemStyle: {
                normal: {
                  borderColor: "#2ab8ff",
                  borderWidth: 0.8,
                  areaColor: "#12235c"
                },
                emphasis: {
                  areaColor: "#2AB8FF",
                  borderWidth: 0,
                  color: "green"
                }
              },
              label: {
                emphasis: {
                  //对应的鼠标悬浮效果
                  show: false,
                  textStyle: { color: "#FFFFFF" }
                }
              },
              nameMap: nameMap
            }
          ]
        },

        options: [
          {
            tooltip: {
              trigger: "item",
              formatter: function(params) {
                var value = params.value;
                //value = value.toFixed(5);toFixed(3)控制小数位数
                value = value;
                if (!value) {
                  return;
                }
                //var abc=(params.abc);
                return params.name + " : " + value + " 万元";
              }
            },
            series: {
              data: data
            }
          }
        ]
      });

      dituJB2.setOption({
        timeline: {
          axisType: "category",
          orient: "vertical",
          autoPlay: true,
          inverse: true,
          playInterval: 5000,
          left: null,
          right: -105,
          top: 20,
          bottom: 20,
          width: 46
        },
        baseOption: {
          visualMap: {
            show: false,
            type: "piecewise", //分段型。
            splitNumber: 6,
            inverse: true,
            pieces: [
              {
                min: 0,
                max: 10,
                color: "#60D8FF"
              },
              {
                min: 10,
                max: 20,
                color: "#973412"
              },
              {
                min: 20,
                max: 40,
                color: "#8E164E"
              },
              {
                min: 40,
                max: 70,
                color: "#e69d87"
              },
              {
                min: 70,
                max: 140,
                color: "#B26410"
              },
              {
                min: 140,
                //max: 1000,
                color: "#882503"
              }
            ],
            left: "left",
            top: "bottom",
            textStyle: {
              color: "#000"
            }
            //min: 0,
            //max: 60000,
            //text:['High','Low'],
            //realtime: true,
            //calculable: true,
            //color: ['red','orange','lightgreen']
          },
          series: [
            {
              type: "map",
              map: "china",
              zoom: 1.2,
              layoutCenter: ["50%", "50%"],
              roam: false,
              itemStyle: {
                normal: {
                  borderColor: "#666666",
                  borderWidth: 0.8,
                  areaColor: "#12235c"
                },
                emphasis: {
                  areaColor: "#2AB8FF",
                  borderWidth: 0,
                  color: "green"
                }
              },
              label: {
                emphasis: {
                  //对应的鼠标悬浮效果
                  show: false,
                  textStyle: { color: "#FFFFFF" }
                }
              },
              nameMap: nameMap
            }
          ]
        },

        options: [
          {
            tooltip: {
              trigger: "item",
              formatter: function(params) {
                var value = params.value;
                //value = value.toFixed(5);toFixed(3)控制小数位数
                value = value;
                if (!value) {
                  return;
                }
                //var abc=(params.abc);
                return params.name + " : " + value + " 万元";
              }
            },
            series: {
              data: data1
            }
          }
        ]
      });

      window.addEventListener("resize", function() {
        dituJB1.resize();
      });
      window.addEventListener("resize", function() {
        dituJB2.resize();
      });
    }
  },
  computed: {}
};
</script>
<style lang="scss" scoped>
.select_1 {
  width: 150px;
  margin-right: 15px;
}

.select_2 {
  width: 280px;
  &.select_2_1 {
    width: 220px;
  }
}
.flexBox {
  position: absolute;
  display: flex;
  flex-direction: row;
  top: 2%;
  left: 2.5%;
  z-index: 999999;
}
.lb {
  width: 100vw;
}
p {
  margin: 0px;
}
li {
  list-style: none;
}
.bg {
  width: 100vw;
  height: 100vh;
  background: #000;
  display: flex;
  padding: 100px 0px;
  .echartBox {
    width: 100%;
    height: 100%;
    background-image: url("../../assets/img/demo5bg2.jpg");
    background-repeat: no-repeat;
    background-size: 100%;
    background-position-y: -150px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
    .boxLeft {
      width: 30%;
      height: 100%;
      padding: 50px;
      display: flex;
      flex-direction: column;
      .title {
        width: 300px;
        height: 50px;
        background: rgba(0, 80, 216, 0.8);
        margin-left: 50px;
        margin-top: 30px;
        position: relative;
        &::before {
          content: "";
          position: absolute;
          width: 300px;
          height: 50px;
          background-color: #0150d8;
          opacity: 0.5;
          left: -50px;
          top: 25px;
        }
        p {
          font-size: 48px;
          color: #fff;
          font-weight: 700;
          letter-spacing: 3px;
          position: absolute;
          top: -20px;
          right: 0px;
        }
      }
      .sjBox {
        width: 80%;
        height: 50%;
        margin-left: 5%;
        .tit {
          width: 600px;
          height: 50px;
          line-height: 50px;
          background: rgba(1, 80, 216, 0.4);
          display: flex;
          flex-direction: row;
          p {
            color: #00b7d5;
            margin-left: 30px;
            font-size: 18px;
          }
        }
        .gjBox {
          width: 550px;
          padding: 0px;
          padding-left: 30px;
          margin-top: -5px;
          li {
            display: flex;
            flex-direction: row;
            height: 40px;
            line-height: 20px;
            margin-bottom: 15px;
            &:nth-child(2n) {
              p {
                opacity: 0.6;
              }
            }
            &:nth-child(2) {
              p {
                &.p3 {
                  width: 200px;
                  background: rgba(196, 218, 251, 0.2);
                }
              }
            }
            &:nth-child(3) {
              p {
                &.p3 {
                  width: 180px;
                  background: rgba(196, 218, 251, 0.2);
                }
              }
            }
            &:nth-child(4) {
              p {
                &.p3 {
                  width: 160px;
                  background: rgba(196, 218, 251, 0.2);
                }
              }
            }
            &:nth-child(5) {
              p {
                &.p3 {
                  width: 140px;
                  background: rgba(196, 218, 251, 0.2);
                }
              }
            }
            &:nth-child(6) {
              p {
                &.p3 {
                  width: 120px;
                  background: rgba(196, 218, 251, 0.2);
                }
              }
            }
            p {
              color: #fff;
              text-align: left;
              padding: 10px;
              margin-right: 10px;
              font-size: 16px;
              &.p1 {
                width: 80px;
                background-color: #0060ff;
              }
              &.p2 {
                width: 160px;
                background: rgba(196, 218, 251, 0.2);
              }
              &.p3 {
                width: 250px;
                background: rgba(196, 218, 251, 0.2);
              }
            }
          }
        }
      }
    }
    .boxRight {
      width: 70%;
      height: 100%;
      overflow: hidden;
      position: relative;
      .ditu {
        width: 100%;
        height: 100%;
      }
    }
  }
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
        width: 460px;
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
        width: 450px;
        margin: 0px;
        padding: 0px;
        padding-left: 20px;
        margin-top: 60px;
        li {
          display: flex;
          flex-direction: row;
          height: 45px;
          line-height: 45px;
          margin-bottom: 35px;
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
        top: -10%;
      }
    }
    .box3 {
      .title {
        font-size: 32px;
        color: #fff;
      }
      .zxtTxt {
        .zxtTxt1 {
          display: flex;
          flex-direction: row;
          p {
            margin-left: 30px;
            &:nth-child(1) {
              color: #32e8f5;
            }
            &:nth-child(2) {
              color: #f69846;
            }
          }
        }
        color: #fff;
        margin-top: 20px;
        font-size: 18px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .zxtTxt1 {
        }
        span {
          color: #20a56c;
          padding-left: 5px;
          font-size: 20px;
          font-weight: 700;
        }
      }
      .zxt {
        width: 100%;
        height: 300px;
      }
      width: 50%;
      height: 100%;
      padding-top: 80px;
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
            &:nth-child(1) {
              margin-right: 100px;
            }
            &:nth-child(2) {
              margin-right: 80px;
            }
            &:nth-child(3) {
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
                color: #00b7d5;
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
.qie {
  position: absolute;
  color: #fff;
  left: 6%;
  top: 42px;
  z-index: 999999;
  cursor: pointer;
  img {
    width: 30px;
  }
}
.qie1 {
  position: absolute;
  display: flex;
  flex-direction: row;
  color: #fff;
  left: 3%;
  top: 5%;
  z-index: 999999;
  cursor: pointer;
  .img1 {
    width: 25px;
  }
  .img2 {
    width: 25px;
  }
}
</style>
<style lang="scss">
.select_2_1 {
  .el-input__inner {
    background-color: transparent;
    font-size: 12px;
    height: 28px;
    line-height: 28px;
    color: #fff;
  }
  .el-input__icon {
    line-height: 22px;
  }
}
.select_1 {
  .el-input__inner {
    background-color: transparent;
    font-size: 12px;
    height: 28px;
    line-height: 28px;
    color: #fff;
  }
  .el-input__icon {
    line-height: 17px;
  }
}
.flexBox {
  .select_2 {
    font-size: 12px;
    height: 28px;
    line-height: 28px;
    color: #fff;
    background-color: transparent;
    .el-range__icon {
      line-height: 14px;
    }
    .el-range-input {
      width: 46%;
      font-size: 12px;
      color: #fff;
      background-color: transparent;
    }
    .el-range__close-icon {
      line-height: 14px;
    }
    .el-range-separator {
      line-height: 14px;
      font-size: 12px;
      color: #fff;
    }
  }
}
.e_tabs {
  &.e_tabs1 {
    width: 100%;
    height: 100%;
    margin-top: 20px;
    .el-tabs__header {
      margin-left: 0px;
      margin: 0px;
    }
  }
  width: 700px;
  height: 50%;
  margin-top: 60px;
  .el-tabs__header {
    margin-left: 60px;
  }
  .el-tabs__item {
    font-size: 22px;
    color: #d2d2d3;
  }
  .el-tabs__item.is-active {
    color: #fff;
    font-size: 28px;
  }
  .el-tabs__nav-wrap {
    &::after {
      background-color: transparent;
    }
  }
}
</style>