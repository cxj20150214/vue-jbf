<template>
  <div class="bg">
    <div class="title_time">
      <p class="tit">裕农通智能风控</p>
      <p class="time">{{ nowDate + " " + nowTime + " " + nowWeek }}</p>
    </div>
    <div class="box1">
      <div class="mod1">
        <div
          class="selectBox
        "
        >
          <div class="box4_tab">
            <p
              :class="{ active: showDate == 1 }"
              class="title_all"
              @click="clickDR()"
            >
              当日
            </p>
            <p
              :class="{ active: showDate == 2 }"
              class="title_all"
              @click="clickDY()"
            >
              当月
            </p>
            <p
              :class="{ active: showDate == 3 }"
              class="title_all"
              @click="clickDN()"
            >
              今年
            </p>
          </div>
          <el-select
            class="ccbSelect"
            v-model="valueSelect"
            placeholder="请选择"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <p class="title">准入风险评级</p>
        <ul class="list">
          <li>
            <img class="diqiu" src="../../assets/img/diqiu2.png" alt />
            <div class="txt">
              <p class="p1">1090</p>
              <span>进件数</span>
            </div>
            <img class="jt" src="../../assets/img/jt1.png" alt />
          </li>
          <li>
            <img class="diqiu" src="../../assets/img/diqiu2.png" alt />
            <div class="txt">
              <p class="p2">165</p>
              <span>通过数</span>
            </div>
            <img class="jt" src="../../assets/img/jt1.png" alt />
          </li>
          <li>
            <img class="diqiu" src="../../assets/img/diqiu2.png" alt />
            <div class="txt">
              <p class="p3">40%</p>
              <span>通过率</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="mod2 mod2_1">
        <div class="titleBox">
          <img src="../../assets/img/sj1.png" alt />
          <p class="title">
            准入评级拒件分布
            {{ province }}
          </p>
        </div>
        <div class="zrBox">
          <div class="zrPie" id="zrPie"></div>
        </div>
      </div>
      <div class="mod2">
        <div class="titleBox">
          <img src="../../assets/img/sj1.png" alt />
          <p class="title">存量评级概况</p>
        </div>
        <p class="sq_txt">总异常率</p>
        <div class="clBox">
          <div class="sqPie" id="sqPie"></div>
          <div class="jdt">
            <ul class="jdt_list">
              <li>
                <p>风险级</p>
                <el-progress
                  class="jdt_box"
                  :text-inside="true"
                  :stroke-width="12"
                  :percentage="75"
                  status="exception"
                ></el-progress>
              </li>
              <li>
                <p>警示级</p>
                <el-progress
                  class="jdt_box "
                  :text-inside="true"
                  :stroke-width="12"
                  :percentage="50"
                  status="warning"
                ></el-progress>
              </li>
              <li>
                <p>预警级</p>
                <el-progress
                  class="jdt_box jdt_box_1"
                  :text-inside="true"
                  :stroke-width="12"
                  :percentage="60"
                  status="success"
                ></el-progress>
              </li>
              <li>
                <p>关注级</p>
                <el-progress
                  class="jdt_box"
                  :text-inside="true"
                  :stroke-width="12"
                  :percentage="70"
                ></el-progress>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="box2">
      <div class="modBox1">
        <!-- <img class="diqiuyi" src="../../assets/img/diqiuyi.png" alt /> -->
        <div class="bg">
          <div class="ditu" id="ditu1"></div>
          <!-- <div class="ditu" id="zxt"></div> -->
          <p class="title">全国风险预警大数据统计图</p>
        </div>
      </div>
      <div class="modBox2">
        <div class="box1">
          <div class="ybpPie" id="ybpPie"></div>
        </div>
        <!-- <div class="box1">
          <div class="titleBox">
            <img src="../../assets/img/sj.png" alt />
            <p class="title">风险预警排行TOP10</p>
          </div>
          <vue-seamless-scroll
            :class-option="optionscroll1"
            :data="listData1"
            class="seamless-warp1"
          >
            <ul class="itemhua">
              <li v-for="item in listData1">
                <div class="tit">裕农通-福建省分行</div>
                <div class="txt">
                  <div class="paihan">NO {{item.no}}</div>
                  <div class="boxP">
                    <div class="box">
                      <p class="t1">预警总数</p>
                      <p class="t2">{{item.data1}}</p>
                    </div>
                    <div class="box">
                      <p class="t1">已处理数</p>
                      <p class="t2">{{item.data2}}</p>
                    </div>
                    <div class="box">
                      <p class="t1">处理率</p>
                      <p class="t2">{{item.data3}}</p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </vue-seamless-scroll>
        </div> -->
      </div>
    </div>
    <div class="box3">
      <div class="modr1">
        <p class="title">风险预警处理率</p>
        <div class="yjBox">
          <div class="yjPie" id="yjPie"></div>
        </div>
      </div>
      <div class="modr2">
        <div class="titleBox">
          <img src="../../assets/img/sj.png" alt />
          <p class="title">风险预警数统计</p>
        </div>
        <div class="zhexiantu" id="Pie2"></div>
      </div>
      <div class="modr3">
        <div class="titleBox">
          <img src="../../assets/img/sj.png" alt />
          <p class="title">巡检数据统计</p>
          <p :class="{ active: showXJ == 1 }" class="title_all" @click="clAll">
            巡检总数
          </p>
          <p :class="{ active: showXJ == 2 }" class="title_cll" @click="cll">
            处理率
          </p>
        </div>
        <!-- <div class="zhuzhuangtu" id="Pie3"></div> -->
        <div class="bingtu" id="Pie1" v-show="chuliliang"></div>
        <div class="bingtu" id="Pie4" v-show="chulilv"></div>
      </div>
    </div>
    <div class="box4">
      <div class="box4_tab">
        <p :class="{ active: shows == 3 }" class="title_all" @click="clickZR()">
          准入评级
        </p>
        <p :class="{ active: shows == 2 }" class="title_all" @click="clickCL()">
          存量评级
        </p>
        <p :class="{ active: shows == 1 }" class="title_all" @click="clickYJ()">
          预警
        </p>
        <p :class="{ active: shows == 4 }" class="title_all" @click="clickXJ()">
          巡检
        </p>
      </div>
      <div class="box4Pie" id="box4Pie"></div>
    </div>
    <div class="loginOut" @click="drawer = true"><</div>
    <el-drawer
      size="20%"
      title="我是标题"
      :visible.sync="drawer"
      :with-header="false"
    >
      <div class="buttonBox">
        <el-button class="button1" @click="demo3" type="primary" size="mini"
          >demo3</el-button
        >
        <el-button class="button1" @click="demo4" type="primary" size="mini"
          >demo4</el-button
        >
        <el-button class="button1" @click="logout" type="danger" size="mini"
          >退出登录</el-button
        >
      </div>
    </el-drawer>
  </div>
</template>
<script>
import "echarts/map/js/china.js";
import obj from "echarts/map/json/china.json";
import "echarts-liquidfill/src/liquidFill.js";
export default {
  name: "demo8",
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "全国"
        },
        {
          value: "选项2",
          label: "福建"
        },
        {
          value: "选项3",
          label: "泉州"
        }
      ],
      valueSelect: "全国",
      province: "",
      shows: 3,
      showXJ: 1,
      showDate: 1,
      search: "",
      drawer: false,
      listArr: [], //城市json
      nowDate: "", // 当前日期
      nowTime: "", // 当前时间
      nowWeek: "", // 当前星期
      chuliliang: true,
      chulilv: false,
      zsData: [
        1100,
        950,
        780,
        560,
        555,
        543,
        432,
        410,
        395,
        360,
        340,
        220,
        211,
        201,
        150,
        142,
        132,
        120,
        105,
        101,
        92,
        82,
        63,
        40,
        35,
        26,
        12,
        8
      ],
      wclData: [
        1100,
        950,
        780,
        560,
        555,
        543,
        432,
        410,
        395,
        360,
        340,
        220,
        211,
        201,
        150,
        142,
        132,
        120,
        105,
        101,
        92,
        82,
        63,
        40,
        35,
        26,
        12,
        8
      ],
      wclvData: [
        6.1,
        5.3,
        4.67,
        4.92,
        3.58,
        3.6,
        3.99,
        3.67,
        3.92,
        3.58,
        3,
        3.99,
        3.67,
        4.92,
        3.58,
        2.8,
        2.99,
        2.67,
        1.92,
        1.58,
        1,
        1.99,
        1.67,
        1.92,
        1.58,
        1,
        1.99,
        1.67
      ],
      zrData: [
        {
          name: "征信类占比",
          value: "40000"
        },
        {
          name: "黑名单类占比",
          value: "13000"
        },
        {
          name: "内部数据名单类",
          value: "60000"
        },
        {
          name: "外部数据名单类",
          value: "50000"
        }
      ],
      listData: [
        {
          data1: "120个",
          data2: "60个",
          data3: "80%"
        },
        {
          data1: "120个",
          data2: "60个",
          data3: "80%"
        },
        {
          data1: "120个",
          data2: "60个",
          data3: "80%"
        },
        {
          data1: "120个",
          data2: "60个",
          data3: "80%"
        },
        {
          data1: "120个",
          data2: "60个",
          data3: "80%"
        }
      ],
      listData1: [
        {
          data1: "120个",
          data2: "60个",
          data3: "80%",
          no: "1",
          name: "福建省分行"
        },
        {
          data1: "120个",
          data2: "60个",
          data3: "80%",
          no: "2",
          name: "浙江省分行"
        },
        {
          data1: "120个",
          data2: "60个",
          data3: "80%",
          no: "3",
          name: "江西省分行"
        },
        {
          data1: "120个",
          data2: "60个",
          data3: "80%",
          no: "4",
          name: "黑龙江省分行"
        },
        {
          data1: "120个",
          data2: "60个",
          data3: "80%",
          no: "5",
          name: "辽宁省分行"
        },
        {
          data1: "120个",
          data2: "60个",
          data3: "80%",
          no: "6",
          name: "云南省分行"
        },
        {
          data1: "120个",
          data2: "60个",
          data3: "80%",
          no: "7",
          name: "江苏省分行"
        },
        {
          data1: "120个",
          data2: "60个",
          data3: "80%",
          no: "8",
          name: "重庆省分行"
        },
        {
          data1: "120个",
          data2: "60个",
          data3: "80%",
          no: "9",
          name: "天津省分行"
        },
        {
          data1: "120个",
          data2: "60个",
          data3: "80%",
          no: "10",
          name: "四川省分行"
        }
      ]
    };
  },
  computed: {
    //过滤方法
    itemss: function() {
      var _search = this.search;
      if (_search) {
        //不区分大小写处理
        var reg = new RegExp(_search, "ig");
        //es6 filter过滤匹配，有则返回当前，无则返回所有
        return this.listData1.filter(function(e) {
          //匹配所有字段
          return Object.keys(e).some(function(key) {
            return e[key].match(reg);
          });
          //匹配某个字段
          //  return e.name.match(reg);
        });
      }
      return this.listData1;
      console.log(this.listData1);
    },
    // optionscroll() {
    //   return {
    //     // hoverStop: false,
    //     step: 0.2
    //   };
    // },
    optionscroll1() {
      return {
        // hoverStop: false,
        step: 0.4,
        direction: 2,
        limitMoveNum: 2
      };
    }
  },
  methods: {
    // 当月 当日 当年
    clickDR() {
      this.showDate = 1;
    },
    clickDY() {
      this.showDate = 2;
    },
    clickDN() {
      this.showDate = 3;
    },
    // 预警 存量 准入 巡检  切换
    clickYJ() {
      this.shows = 1;
    },
    clickCL() {
      this.shows = 2;
      this.zsData = [
        1100,
        900,
        680,
        560,
        455,
        543,
        432,
        410,
        295,
        360,
        380,
        320,
        211,
        201,
        150,
        242,
        132,
        120,
        105,
        101,
        92,
        72,
        63,
        47,
        25,
        16,
        12,
        8
      ];
      this.wclData = [
        1100,
        1000,
        780,
        560,
        355,
        443,
        232,
        410,
        295,
        360,
        380,
        320,
        181,
        101,
        150,
        342,
        132,
        120,
        75,
        101,
        52,
        72,
        63,
        47,
        25,
        16,
        12,
        8
      ];
      this.wclvData = [
        6.1,
        3.3,
        5.97,
        6.22,
        4.28,
        4.9,
        3.59,
        3.17,
        3.92,
        3.28,
        3,
        4.99,
        3.67,
        2.92,
        1.58,
        1.8,
        2.99,
        1.67,
        1.3,
        1.28,
        1,
        1.99,
        1.27,
        1.92,
        1.28,
        1,
        0.99,
        0.67
      ];
    },
    clickZR() {
      this.shows = 3;
      this.zsData = [
        1100,
        950,
        780,
        560,
        555,
        543,
        432,
        410,
        395,
        360,
        340,
        220,
        211,
        201,
        150,
        142,
        132,
        120,
        105,
        101,
        92,
        82,
        63,
        40,
        35,
        26,
        12,
        8
      ];
      this.wclData = [
        1100,
        950,
        780,
        560,
        555,
        543,
        432,
        410,
        395,
        360,
        340,
        220,
        211,
        201,
        150,
        142,
        132,
        120,
        105,
        101,
        92,
        82,
        63,
        40,
        35,
        26,
        12,
        8
      ];
      this.wclvData = [
        6.1,
        5.3,
        4.67,
        4.92,
        3.58,
        3.6,
        3.99,
        3.67,
        3.92,
        3.58,
        3,
        3.99,
        3.67,
        4.92,
        3.58,
        2.8,
        2.99,
        2.67,
        1.92,
        1.58,
        1,
        1.99,
        1.67,
        1.92,
        1.58,
        1,
        1.99,
        1.67
      ];
    },
    clickXJ() {
      this.shows = 4;
    },
    // 测试点击监听改变图表
    PieClick1(value) {
      if (value === undefined) {
        this.province = "";
        this.zrData = [
          {
            name: "征信类占比",
            value: "40000"
          },
          {
            name: "黑名单类占比",
            value: "23000"
          },
          {
            name: "内部数据名单类",
            value: "25000"
          },
          {
            name: "外部数据名单类",
            value: "10000"
          }
        ];
      }
    },
    PieClick(value) {
      this.province = "（" + value + "）";
      if (value === "福建") {
        this.zrData = [
          {
            name: "征信类占比",
            value: "10000"
          },
          {
            name: "黑名单类占比",
            value: "13000"
          },
          {
            name: "内部数据名单类",
            value: "30000"
          },
          {
            name: "外部数据名单类",
            value: "20000"
          }
        ];
      }
      if (value === "新疆") {
        this.zrData = [
          {
            name: "征信类占比",
            value: "70000"
          },
          {
            name: "黑名单类占比",
            value: "18000"
          },
          {
            name: "内部数据名单类",
            value: "25000"
          },
          {
            name: "外部数据名单类",
            value: "10000"
          }
        ];
      }
    },
    // 处理量 处理率
    clAll() {
      this.chuliliang = true;
      this.chulilv = false;
      this.piedemo();
      this.showXJ = 1;
    },
    cll() {
      this.showXJ = 2;
      this.chuliliang = false;
      this.chulilv = true;
      this.piedemo();
    },
    // 当前日期
    currentTime() {
      setInterval(this.getDate, 500);
    },
    getDate: function() {
      var _this = this;
      let yy = new Date().getFullYear();
      let mm = new Date().getMonth() + 1;
      let dd = new Date().getDate();
      let week = new Date().getDay();
      let hh = new Date().getHours();
      let mf =
        new Date().getMinutes() < 10
          ? "0" + new Date().getMinutes()
          : new Date().getMinutes();
      if (week == 1) {
        this.nowWeek = "星期一";
      } else if (week == 2) {
        this.nowWeek = "星期二";
      } else if (week == 3) {
        this.nowWeek = "星期三";
      } else if (week == 4) {
        this.nowWeek = "星期四";
      } else if (week == 5) {
        this.nowWeek = "星期五";
      } else if (week == 6) {
        this.nowWeek = "星期六";
      } else {
        this.nowWeek = "星期日";
      }
      _this.nowTime = hh + ":" + mf;
      _this.nowDate = yy + "/" + mm + "/" + dd;
    },
    // 跑马灯
    scroll() {
      this.animate = true; // 因为在消息向上滚动的时候需要添加css3过渡动画，所以这里需要设置true
      setTimeout(() => {
        //  这里直接使用了es6的箭头函数，省去了处理this指向偏移问题，代码也比之前简化了很多
        this.items.push(this.items[0]); // 将数组的第一个元素添加到数组的
        this.items.shift(); //删除数组的第一个元素
        this.animate = false; // margin-top 为0 的时候取消过渡动画，实现无缝滚动
      }, 500);
    },
    // 中国地图
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
      // 中间部分折线图
      // let zxt = this.$echarts.init(document.getElementById("zxt"));
      // zxt.setOption({
      //   grid: {
      //     left: "5%",
      //     right: "10%",
      //     top: "20%",
      //     bottom: "15%",
      //     containLabel: true
      //   },
      //   tooltip: {
      //     show: true,
      //     trigger: "item"
      //   },
      //   xAxis: [
      //     {
      //       type: "category",
      //       boundaryGap: false,
      //       axisLabel: {
      //         color: "#30eee9"
      //       },
      //       axisLine: {
      //         show: true,
      //         lineStyle: {
      //           color: "#397cbc"
      //         }
      //       },
      //       axisTick: {
      //         show: false
      //       },
      //       splitLine: {
      //         show: false,
      //         lineStyle: {
      //           color: "#195384"
      //         }
      //       },
      //       data: [
      //         "1月",
      //         "2月",
      //         "3月",
      //         "4月",
      //         "5月",
      //         "6月",
      //         "7月",
      //         "8月",
      //         "9月",
      //         "10月",
      //         "11月",
      //         "12月"
      //       ]
      //     }
      //   ],
      //   yAxis: [
      //     {
      //       type: "value",
      //       name: "",
      //       min: 0,
      //       max: 1000,
      //       axisLabel: {
      //         formatter: "{value}",
      //         textStyle: {
      //           color: "#2ad1d2"
      //         }
      //       },
      //       axisLine: {
      //         lineStyle: {
      //           color: "#27b4c2"
      //         }
      //       },
      //       axisTick: {
      //         show: false
      //       },
      //       splitLine: {
      //         show: true,
      //         lineStyle: {
      //           color: "#11366e"
      //         }
      //       }
      //     }
      //   ],
      //   series: [
      //     {
      //       name: "低预警",
      //       type: "line",
      //       stack: "总量",
      //       symbol: "circle",
      //       symbolSize: 8,
      //       itemStyle: {
      //         normal: {
      //           color: "#0092f6",
      //           lineStyle: {
      //             color: "#0092f6",
      //             width: 1
      //           }
      //         }
      //       },
      //       markPoint: {
      //         itemStyle: {
      //           normal: {
      //             color: "red"
      //           }
      //         }
      //       },
      //       data: [120, 132, 101, 134, 90, 230, 210, 182, 191, 234, 290, 330]
      //     },
      //     {
      //       name: "高预警",
      //       type: "line",
      //       stack: "总量",
      //       symbol: "circle",
      //       symbolSize: 8,

      //       itemStyle: {
      //         normal: {
      //           color: "#00d4c7",
      //           lineStyle: {
      //             color: "#00d4c7",
      //             width: 1
      //           }
      //         }
      //       },
      //       data: [220, 182, 191, 234, 290, 330, 310, 201, 154, 190, 330, 410]
      //     }
      //   ]
      // });
      // 全国地图渐变
      let dituJB1 = this.$echarts.init(document.getElementById("ditu1"));
      // 省份点击联动
      let _that = this;
      dituJB1.on("click", function(param) {
        _that.PieClick(param.name);
        console.log(param);
      });
      dituJB1.getZr().on("click", res => {
        // 点击空白处
        _that.PieClick1(res.target);
      });
      var mapName = "china";
      var dataJB = [
        {
          name: "北京",
          value: 177
        },
        {
          name: "天津",
          value: 42
        },
        {
          name: "河北",
          value: 102
        },
        {
          name: "山西",
          value: 81
        },
        {
          name: "内蒙古",
          value: 47
        },
        {
          name: "辽宁",
          value: 67
        },
        {
          name: "吉林",
          value: 82
        },
        {
          name: "黑龙江",
          value: 66
        },
        {
          name: "上海",
          value: 24
        },
        {
          name: "江苏",
          value: 92
        },
        {
          name: "浙江",
          value: 114
        },
        {
          name: "安徽",
          value: 109
        },
        {
          name: "福建",
          value: 116,
          id: 123456
        },
        {
          name: "厦门",
          value: 116
        },
        {
          name: "江西",
          value: 91
        },
        {
          name: "山东",
          value: 119
        },
        {
          name: "河南",
          value: 137
        },
        {
          name: "湖北",
          value: 116
        },
        {
          name: "湖南",
          value: 114
        },
        {
          name: "重庆",
          value: 91
        },
        {
          name: "四川",
          value: 125
        },
        {
          name: "贵州",
          value: 62
        },
        {
          name: "云南",
          value: 83
        },
        {
          name: "西藏",
          value: 9
        },
        {
          name: "陕西",
          value: 80
        },
        {
          name: "甘肃",
          value: 56
        },
        {
          name: "青海",
          value: 10
        },
        {
          name: "宁夏",
          value: 18
        },
        {
          name: "新疆",
          value: 67
        },
        {
          name: "广东",
          value: 123
        },
        {
          name: "广西",
          value: 59
        },
        {
          name: "海南",
          value: 14
        }
      ];
      var dataJB1 = [
        {
          name: "厦门",
          value: 116
        },
        {
          name: "深圳",
          value: 116
        },
        {
          name: "苏州",
          value: 116
        },
        {
          name: "大连",
          value: 116
        },
        {
          name: "青岛",
          value: 116
        },
        {
          name: "三峡",
          value: 116
        }
      ];
      var geoCoordMap = {
        厦门: [118.159101, 24.491196],
        深圳: [114.062198, 22.549668],
        苏州: [120.678332, 31.321619],
        大连: [121.651314, 38.925283],
        青岛: [120.473524, 36.105373],
        三峡: [111.284501, 30.708209]
      };
      var toolTipData = [
        {
          name: "北京",
          value: [
            {
              name: "准入",
              value: 95
            },
            {
              name: "存量",
              value: 82
            },
            {
              name: "预警",
              value: 82
            },
            {
              name: "巡检",
              value: 82
            }
          ]
        },
        {
          name: "天津",
          value: [
            {
              name: "准入",
              value: 95
            },
            {
              name: "存量",
              value: 82
            },
            {
              name: "预警",
              value: 82
            },
            {
              name: "巡检",
              value: 82
            }
          ]
        },
        {
          name: "河北",
          value: [
            {
              name: "准入",
              value: 95
            },
            {
              name: "存量",
              value: 82
            },
            {
              name: "预警",
              value: 82
            },
            {
              name: "巡检",
              value: 82
            }
          ]
        },
        {
          name: "山西",
          value: [
            {
              name: "准入",
              value: 95
            },
            {
              name: "存量",
              value: 82
            },
            {
              name: "预警",
              value: 82
            },
            {
              name: "巡检",
              value: 82
            }
          ]
        },
        {
          name: "内蒙古",
          value: [
            {
              name: "准入",
              value: 95
            },
            {
              name: "存量",
              value: 82
            },
            {
              name: "预警",
              value: 82
            },
            {
              name: "巡检",
              value: 82
            }
          ]
        },
        {
          name: "辽宁",
          value: [
            {
              name: "准入",
              value: 95
            },
            {
              name: "存量",
              value: 82
            },
            {
              name: "预警",
              value: 82
            },
            {
              name: "巡检",
              value: 82
            }
          ]
        },
        {
          name: "吉林",
          value: [
            {
              name: "准入",
              value: 95
            },
            {
              name: "存量",
              value: 82
            },
            {
              name: "预警",
              value: 82
            },
            {
              name: "巡检",
              value: 82
            }
          ]
        },
        {
          name: "黑龙江",
          value: [
            {
              name: "准入",
              value: 95
            },
            {
              name: "存量",
              value: 82
            },
            {
              name: "预警",
              value: 82
            },
            {
              name: "巡检",
              value: 82
            }
          ]
        },
        {
          name: "上海",
          value: [
            {
              name: "准入",
              value: 95
            },
            {
              name: "存量",
              value: 82
            },
            {
              name: "预警",
              value: 82
            },
            {
              name: "巡检",
              value: 82
            }
          ]
        },
        {
          name: "江苏",
          value: [
            {
              name: "准入",
              value: 95
            },
            {
              name: "存量",
              value: 82
            },
            {
              name: "预警",
              value: 82
            },
            {
              name: "巡检",
              value: 82
            }
          ]
        },
        {
          name: "浙江",
          value: [
            {
              name: "准入",
              value: 95
            },
            {
              name: "存量",
              value: 82
            },
            {
              name: "预警",
              value: 82
            },
            {
              name: "巡检",
              value: 82
            }
          ]
        },
        {
          name: "安徽",
          value: [
            {
              name: "准入",
              value: 95
            },
            {
              name: "存量",
              value: 82
            },
            {
              name: "预警",
              value: 82
            },
            {
              name: "巡检",
              value: 82
            }
          ]
        },
        {
          name: "福建",
          value: [
            {
              name: "准入",
              value: 95
            },
            {
              name: "存量",
              value: 82
            },
            {
              name: "预警",
              value: 82
            },
            {
              name: "巡检",
              value: 82
            }
          ]
        },
        {
          name: "江西",
          value: [
            {
              name: "准入",
              value: 95
            },
            {
              name: "存量",
              value: 82
            },
            {
              name: "预警",
              value: 82
            },
            {
              name: "巡检",
              value: 82
            }
          ]
        },
        {
          name: "山东",
          value: [
            {
              name: "准入",
              value: 95
            },
            {
              name: "存量",
              value: 82
            },
            {
              name: "预警",
              value: 82
            },
            {
              name: "巡检",
              value: 82
            }
          ]
        },
        {
          name: "河南",
          value: [
            {
              name: "准入",
              value: 95
            },
            {
              name: "存量",
              value: 82
            },
            {
              name: "预警",
              value: 82
            },
            {
              name: "巡检",
              value: 82
            }
          ]
        },
        {
          name: "湖北",
          value: [
            {
              name: "准入",
              value: 95
            },
            {
              name: "存量",
              value: 82
            },
            {
              name: "预警",
              value: 82
            },
            {
              name: "巡检",
              value: 82
            }
          ]
        },
        {
          name: "湖南",
          value: [
            {
              name: "准入",
              value: 95
            },
            {
              name: "存量",
              value: 82
            },
            {
              name: "预警",
              value: 82
            },
            {
              name: "巡检",
              value: 82
            }
          ]
        },
        {
          name: "重庆",
          value: [
            {
              name: "准入",
              value: 95
            },
            {
              name: "存量",
              value: 82
            },
            {
              name: "预警",
              value: 82
            },
            {
              name: "巡检",
              value: 82
            }
          ]
        },
        {
          name: "四川",
          value: [
            {
              name: "准入",
              value: 95
            },
            {
              name: "存量",
              value: 82
            },
            {
              name: "预警",
              value: 82
            },
            {
              name: "巡检",
              value: 82
            }
          ]
        },
        {
          name: "贵州",
          value: [
            {
              name: "准入",
              value: 95
            },
            {
              name: "存量",
              value: 82
            },
            {
              name: "预警",
              value: 82
            },
            {
              name: "巡检",
              value: 82
            }
          ]
        },
        {
          name: "云南",
          value: [
            {
              name: "准入",
              value: 95
            },
            {
              name: "存量",
              value: 82
            },
            {
              name: "预警",
              value: 82
            },
            {
              name: "巡检",
              value: 82
            }
          ]
        },
        {
          name: "西藏",
          value: [
            {
              name: "准入",
              value: 95
            },
            {
              name: "存量",
              value: 82
            },
            {
              name: "预警",
              value: 82
            },
            {
              name: "巡检",
              value: 82
            }
          ]
        },
        {
          name: "陕西",
          value: [
            {
              name: "准入",
              value: 95
            },
            {
              name: "存量",
              value: 82
            },
            {
              name: "预警",
              value: 82
            },
            {
              name: "巡检",
              value: 82
            }
          ]
        },
        {
          name: "甘肃",
          value: [
            {
              name: "准入",
              value: 95
            },
            {
              name: "存量",
              value: 82
            },
            {
              name: "预警",
              value: 82
            },
            {
              name: "巡检",
              value: 82
            }
          ]
        },
        {
          name: "青海",
          value: [
            {
              name: "准入",
              value: 95
            },
            {
              name: "存量",
              value: 82
            },
            {
              name: "预警",
              value: 82
            },
            {
              name: "巡检",
              value: 82
            }
          ]
        },
        {
          name: "宁夏",
          value: [
            {
              name: "准入",
              value: 95
            },
            {
              name: "存量",
              value: 82
            },
            {
              name: "预警",
              value: 82
            },
            {
              name: "巡检",
              value: 82
            }
          ]
        },
        {
          name: "新疆",
          value: [
            {
              name: "准入",
              value: 95
            },
            {
              name: "存量",
              value: 82
            },
            {
              name: "预警",
              value: 82
            },
            {
              name: "巡检",
              value: 82
            }
          ]
        },
        {
          name: "广东",
          value: [
            {
              name: "准入",
              value: 95
            },
            {
              name: "存量",
              value: 82
            },
            {
              name: "预警",
              value: 82
            },
            {
              name: "巡检",
              value: 82
            }
          ]
        },
        {
          name: "广西",
          value: [
            {
              name: "准入",
              value: 95
            },
            {
              name: "存量",
              value: 82
            },
            {
              name: "预警",
              value: 82
            },
            {
              name: "巡检",
              value: 82
            }
          ]
        },
        {
          name: "海南",
          value: [
            {
              name: "准入",
              value: 95
            },
            {
              name: "存量",
              value: 82
            },
            {
              name: "预警",
              value: 82
            },
            {
              name: "巡检",
              value: 82
            }
          ]
        },
        {
          name: "台湾",
          value: [
            {
              name: "准入",
              value: 95
            },
            {
              name: "存量",
              value: 82
            },
            {
              name: "预警",
              value: 82
            },
            {
              name: "巡检",
              value: 82
            }
          ]
        }
      ];
      /*获取地图数据*/
      var mapFeatures = this.$echarts.getMap(mapName).geoJson.features;
      mapFeatures.forEach(function(v) {
        // 地区名称
        var name = v.properties.name;
        // 地区经纬度
        geoCoordMap[name] = v.properties.cp;
      });
      var max = 480,
        min = 9; // todo
      var maxSize4Pin = 100,
        minSize4Pin = 20;

      var convertData = function(dataJB) {
        var res = [];
        for (var i = 0; i < dataJB.length; i++) {
          var geoCoord = geoCoordMap[dataJB[i].name];
          if (geoCoord) {
            res.push({
              name: dataJB[i].name,
              value: geoCoord.concat(dataJB[i].value)
            });
          }
        }
        return res;
      };
      var convertData1 = function(dataJB1) {
        var res = [];
        for (var i = 0; i < dataJB1.length; i++) {
          var geoCoord = geoCoordMap[dataJB1[i].name];
          if (geoCoord) {
            res.push({
              name: dataJB1[i].name,
              value: geoCoord.concat(dataJB1[i].value)
            });
          }
        }
        return res;
      };
      dituJB1.setOption({
        tooltip: {
          trigger: "item",
          formatter: function(params) {
            if (typeof params.value[2] == "undefined") {
              var toolTiphtml = "";
              for (var i = 0; i < toolTipData.length; i++) {
                if (params.name == toolTipData[i].name) {
                  toolTiphtml += toolTipData[i].name + ":<br>";
                  for (var j = 0; j < toolTipData[i].value.length; j++) {
                    toolTiphtml +=
                      toolTipData[i].value[j].name +
                      ":" +
                      toolTipData[i].value[j].value +
                      "<br>";
                  }
                }
              }
              // console.log(convertData(data))
              return toolTiphtml;
            } else {
              var toolTiphtml = "";
              for (var i = 0; i < toolTipData.length; i++) {
                if (params.name == toolTipData[i].name) {
                  toolTiphtml += toolTipData[i].name + ":<br>";
                  for (var j = 0; j < toolTipData[i].value.length; j++) {
                    toolTiphtml +=
                      toolTipData[i].value[j].name +
                      ":" +
                      toolTipData[i].value[j].value +
                      "<br>";
                  }
                }
              }
              // console.log(toolTiphtml);

              return toolTiphtml;
            }
          }
        },

        visualMap: {
          itemWidth: this.setFontsize(0.2), //图形的宽度，即长条的宽度。
          itemHeight: this.setFontsize(0.9),
          textStyle: {
            color: "#fff"
          },
          show: true,
          min: 0,
          max: 200,
          left: "left",
          top: "bottom",
          text: ["高", "低"], // 文本，默认为数值文本
          calculable: true,
          seriesIndex: [1],
          inRange: {
            color: ["#00467F", "#A5CC82"] // 蓝绿
          }
        },

        geo: {
          zoom: 1.2,
          show: true,
          map: mapName,
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: false
            }
          },
          roam: true,
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
            name: "散点",
            zoom: 1.2,
            type: "scatter",
            coordinateSystem: "geo",
            data: convertData1(dataJB1),
            symbolSize: function(val) {
              return val[2] / 10;
            },
            label: {
              normal: {
                formatter: "{b}",
                position: "right",
                show: true,
                color: "#fff"
              },
              emphasis: {
                show: true
              }
            },
            itemStyle: {
              normal: {
                color: "#05C3F9"
              }
            }
          },
          {
            type: "map",
            map: mapName,
            zoom: 1.2,
            geoIndex: 0,
            aspectScale: 0.75, //长宽比
            showLegendSymbol: false, // 存在legend时显示
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: false,
                textStyle: {
                  color: "#fff"
                }
              }
            },
            roam: true,
            itemStyle: {
              normal: {
                areaColor: "#031525",
                borderColor: "#3B5077"
              },
              emphasis: {
                areaColor: "#fff"
              }
            },
            animation: false,
            data: dataJB
          }
        ]
      });
      // 渐变地图
      var data = [
        // {
        //   name: "重庆",
        //   value: 10
        // },
        // {
        //   name: "云南",
        //   value: 5
        // },
        // {
        //   name: "辽宁",
        //   value: 5
        // },
        {
          name: "黑龙江",
          value: 10
        },
        {
          name: "广西",
          value: 5
        },
        {
          name: "甘肃",
          value: 5
        },
        {
          name: "山西",
          value: 5
        },
        {
          name: "陕西",
          value: 5
        },
        {
          name: "吉林",
          value: 5
        },
        {
          name: "贵州",
          value: 10
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
          value: 5
        },
        {
          name: "四川",
          value: 20
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
          value: 30
        },
        {
          name: "澳门",
          value: 0
        },
        {
          name: "上海",
          value: 30
        },
        {
          name: "安徽",
          value: 20
        },
        {
          name: "江苏",
          value: 20
        },
        {
          name: "浙江",
          value: 30
        },
        {
          name: "北京",
          value: 30
        },
        {
          name: "天津",
          value: 20
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
          value: 20
        },
        {
          name: "山东",
          value: 10
        },
        {
          name: "江西",
          value: 20
        },
        {
          name: "湖北",
          value: 20
        },
        {
          name: "福建",
          value: 10
        },
        {
          name: "广东",
          value: 30
        }
      ];
      // let dituJB = this.$echarts.init(document.getElementById("ditu"));
      // dituJB.setOption({
      //   color: ["", "#fc5353", "#f4fc6c", "#e68b55", "#9a68ff", "#ff60c5"],
      //   /*地图上面的五大项颜色*/
      //   tooltip: {
      //     trigger: "item",
      //     formatter: function(params) {
      //       var MAP_VALUE_DIC = {
      //         "0": "高级预警",
      //         "10": "中级预警",
      //         "20": "初级预警"
      //       };
      //       if (params.seriesType) {
      //         return params.name + ": " + MAP_VALUE_DIC[params.data.value];
      //       } else {
      //         return params.name;
      //       }
      //     }
      //   },

      //   visualMap: {
      //     type: "piecewise",
      //     splitNumber: 3,
      //     pieces: [
      //       {
      //         min: 20,
      //         label: "高级预警(20以上)",
      //         color: "#7F1100"
      //       },
      //       {
      //         max: 20,
      //         min: 10,
      //         label: "中级预警(10-20个)",
      //         color: "#FF5428"
      //       },
      //       {
      //         max: 10,
      //         min: 1,
      //         label: "初级预警(0-10个)",
      //         color: "#FF8C71"
      //       },
      //       {
      //         value: 0,
      //         label: "无风险(0个)",
      //         color: "#FFFFFF"
      //       }
      //     ],
      //     textStyle: {
      //       color: "#fff",
      //       fontSize: this.setFontsize(0.16)
      //     },
      //     min: 0,
      //     max: 20,
      //     left: "left",
      //     top: "bottom",
      //     calculable: true,
      //     show: true,
      //     seriesIndex: 0
      //   },
      //   geo: {
      //     map: "china",
      //     zoom: 1.2,
      //     layoutCenter: ["50%", "50%"],
      //     layoutSize: "100%"
      //   },
      //   series: [
      //     {
      //       type: "map",
      //       mapType: "china",
      //       showLegendSymbol: false,
      //       zoom: 1.2,
      //       layoutCenter: ["50%", "50%"],
      //       layoutSize: "100%",
      //       label: {
      //         normal: {
      //           show: false,
      //           /*是否城市名字*/
      //           textStyle: {
      //             color: "#fff"
      //           }
      //         },
      //         emphasis: {
      //           show: false
      //         }
      //       },
      //       itemStyle: {
      //         normal: {
      //           // borderColor: '#2a507a',//区域边框颜色
      //           // borderWidth :1.5
      //           // shadowBlur: 6,
      //           // shadowColor: 'rgba(39,64,110,0.6)',/*地图内的阴影*/
      //           // shadowOffsetY: 10,
      //           // shadowOffsetx: 10
      //         }
      //       },
      //       data: data
      //     }
      //   ]
      // });
      // let myChart8 = this.$echarts.init(document.getElementById("main"));
      // console.log(
      //   "最大value值",
      //   this.max,
      //   "\n",
      //   "最小value值",
      //   this.min,
      //   "\n",
      //   "城市数据",
      //   this.listArr
      // );
      // myChart8.setOption({
      //   title: {
      //     top: 20,
      //     bottom: 20,
      //     subtext: "",
      //     x: "center",
      //     textStyle: {
      //       color: "#ccc",
      //       fontSize: this.setFontsize(0.24)
      //     }
      //   },

      //   tooltip: {
      //     trigger: "item",
      //     formatter: "{b}<br/>{c} (个)"
      //   },
      //   geo: {
      //     show: true,
      //     map: "china",
      //     zoom: 1.15,
      //     label: {
      //       normal: {
      //         show: false
      //       },
      //       emphasis: {
      //         show: false
      //       }
      //     },
      //     roam: false,
      //     itemStyle: {
      //       normal: {
      //         areaColor: "#031525",
      //         borderColor: "#3B5077"
      //       },
      //       emphasis: {
      //         areaColor: "#2B91B7"
      //       }
      //     }
      //   },
      //   series: [
      //     {
      //       type: "map",
      //       map: "china",
      //       zoom: 1.15,
      //       label: {
      //         normal: {
      //           show: true,
      //           textStyle: {
      //             color: "#fff",
      //             fontSize: this.setFontsize(0.12)
      //           }
      //         },
      //         emphasis: {
      //           textStyle: {
      //             color: "#fff"
      //           }
      //         }
      //       },
      //       itemStyle: {
      //         normal: {
      //           label: {
      //             show: true,
      //             formatter: "{b}\n{c}"
      //           },
      //           borderColor: "#2ab8ff",
      //           borderWidth: 1.5,
      //           areaColor: "#12235c"
      //         },
      //         emphasis: {
      //           areaColor: "#2AB8FF",
      //           borderWidth: 0,
      //           color: "green"
      //         }
      //       },
      //       data: this.listArr
      //     }
      //   ]
      // });
    },
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
    // 饼图
    piedemo() {
      let Pie1 = this.$echarts.init(document.getElementById("Pie1")); //巡检处理总量
      let Pie2 = this.$echarts.init(document.getElementById("Pie2"));
      let Pie4 = this.$echarts.init(document.getElementById("Pie4")); //巡检处理率
      let zrPie = this.$echarts.init(document.getElementById("zrPie")); //准入饼图
      let sqPie = this.$echarts.init(document.getElementById("sqPie")); //水球图
      let ybpPie = this.$echarts.init(document.getElementById("ybpPie")); //仪表盘
      let yjPie = this.$echarts.init(document.getElementById("yjPie")); //预警柱状图
      let box4Pie = this.$echarts.init(document.getElementById("box4Pie")); //预警柱状图
      // 支行柱状图+折线图

      box4Pie.setOption({
        grid: {
          x: 50,
          x2: 50,
          top: "15%",
          bottom: "18%" //也可设置left和right设置距离来控制图表的大小
        },
        tooltip: {
          trigger: "axis",
          formatter: function(params) {
            var html = params[0].name + "<br>";
            for (var i = 0; i < params.length; i++) {
              html +=
                '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' +
                params[i].color +
                ';"></span>';
              html += params[i].seriesName + ":" + params[i].value + "<br>";
            }
            return html;
          }
        },
        axisPointer: {
          type: "shadow",
          label: {
            show: true
          }
        },
        legend: {
          data: ["总数", "完成数", "完成率(%)"],
          top: "0%",
          textStyle: {
            color: "#fff"
          }
        },
        xAxis: {
          data: [
            "福建支行",
            "江西支行",
            "浙江支行",
            "江苏支行",
            "湖北支行",
            "广东支行",
            "福建支行",
            "江西支行",
            "浙江支行",
            "江苏支行",
            "湖北支行",
            "广东支行",
            "福建支行",
            "江西支行",
            "浙江支行",
            "江苏支行",
            "湖北支行",
            "广东支行",
            "福建支行",
            "江西支行",
            "浙江支行",
            "江苏支行",
            "湖北支行",
            "广东支行"
          ],
          axisLine: {
            show: true, //隐藏X轴轴线
            lineStyle: {
              color: "#fff"
            }
          },
          axisTick: {
            show: true //隐藏X轴刻度
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: "#fff" //X轴文字颜色
            }
          }
        },
        yAxis: [
          {
            type: "value",
            name: "数量",
            nameTextStyle: {
              color: "#fff"
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: true
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#fff"
              }
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: "#fff"
              }
            }
          },
          {
            type: "value",
            name: "比率",
            nameTextStyle: {
              color: "#fff"
            },
            position: "right",
            splitLine: {
              show: false
            },
            axisTick: {
              show: true
            },
            axisLine: {
              show: true
            },
            axisLabel: {
              show: true,
              formatter: "{value} %", //右侧Y轴文字显示
              textStyle: {
                color: "#fff"
              }
            }
          },
          {
            type: "value",
            gridIndex: 0,
            min: 50,
            max: 100,
            splitNumber: 8,
            splitLine: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            },
            splitArea: {
              show: true,
              areaStyle: {
                color: ["rgba(250,250,250,0.0)", "rgba(250,250,250,0.05)"]
              }
            }
          }
        ],
        dataZoom: [
          {
            show: true,
            height: this.setFontsize(0.18),
            xAxisIndex: [0],
            bottom: "0%",
            start: 0,
            end: 100,
            handleIcon:
              "path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z",
            handleSize: "110%",
            handleStyle: {
              color: "#d3dee5"
            },
            textStyle: {
              color: "#fff"
            },
            borderColor: "#90979c"
          },
          {
            type: "inside",
            show: true,
            height: 15,
            start: 1,
            end: 35
          }
        ],
        series: [
          {
            name: "总数",
            type: "bar",
            barWidth: this.setFontsize(0.15),
            itemStyle: {
              normal: {
                color: "#388BFF"
              }
            },
            data: this.zsData
          },
          {
            name: "完成数",
            type: "bar",
            barWidth: this.setFontsize(0.15),
            itemStyle: {
              normal: {
                color: "#F6931C"
              }
            },
            data: this.wclData
          },
          {
            name: "完成率(%)",
            type: "line",
            yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
            smooth: true, //平滑曲线显示
            showAllSymbol: true, //显示所有图形。
            symbol: "circle", //标记的图形为实心圆
            symbolSize: this.setFontsize(0.1), //标记的大小
            itemStyle: {
              //折线拐点标志的样式
              color: "#FFCC67"
            },
            lineStyle: {
              color: "#FFCC67"
            },
            data: this.wclvData,
            valueType: "percent"
          }
        ]
      });
      // 预警柱状图
      let dataYJ = [
        {
          name: "风险级",
          value: 80
        },
        {
          name: "警示级",
          value: 60
        },
        {
          name: "预警级",
          value: 40
        },
        {
          name: "关注级",
          value: 30
        }
      ];
      let label = dataYJ.map(item => {
        return item.name;
      });
      let lineColor = "rgba(255,255,255,0.2)";
      let colors = [
        {
          borderColor: "rgba(0, 183, 238,1)",
          start: "rgba(0, 183, 238,0.3)",
          end: "rgba(0, 183, 238,0.9)"
        },
        {
          borderColor: "rgba(235, 204, 123,1)",
          start: "rgba(235, 204, 123,0.9)",
          end: "rgba(235, 204, 123,0.3)"
        }
      ];
      var _this = this;
      yjPie.setOption({
        dataZoom: {
          type: "inside",
          start: 0,
          end: 100,
          yAxisIndex: [0]
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          show: true,
          icon: "rect",
          itemWidth: 20,
          itemHeight: 15,
          itemGap: 9,
          top: "5",
          left: "center",
          textStyle: {
            fontSize: 22,
            color: "#F1F1F3"
          },
          data: ["已处理", "未处理"]
        },
        grid: [
          {
            show: false,
            left: "10%",
            top: 30,
            bottom: 10,
            containLabel: true,
            width: "32%"
          },
          {
            show: false,
            left: "51.5%", //调整中间文字位置
            top: 24,
            bottom: 10,
            width: "0%"
          },
          {
            show: false,
            right: "10%",
            top: 30,
            bottom: 10,
            containLabel: true,
            width: "32%"
          }
        ],
        xAxis: [
          {
            type: "value",
            inverse: true,
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            position: "top",
            axisLabel: {
              show: false,
              color: "#fff"
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: lineColor
              }
            }
          },
          {
            gridIndex: 1,
            show: false
          },
          {
            gridIndex: 2,
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            position: "top",
            axisLabel: {
              show: false,
              color: "#fff"
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: lineColor
              }
            }
          }
        ],
        yAxis: [
          {
            type: "category",
            inverse: true,
            position: "right",
            axisLine: {
              show: false,
              lineStyle: {
                color: lineColor
              }
            },

            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            },
            data: label
          },
          {
            gridIndex: 1,
            type: "category",
            inverse: true,
            position: "left",
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: "#ffffff",
                fontSize: 18,
              }
            },
            data: label.map(value => {
              return {
                value: value,
                textStyle: {
                  align: "center"
                }
              };
            })
          },
          {
            gridIndex: 2,
            type: "category",
            inverse: true,
            position: "left",
            axisLine: {
              show: false,
              lineStyle: {
                color: lineColor
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            },
            data: label
          }
        ],
        series: [
          {
            name: "已处理",
            type: "bar",
            barWidth: 15,
            stack: "left",
            label: {
              show: true,
              fontSize: 20,
              distance: 5,
              color: "#fff",
              position: "left", //inside|right
              formatter: params => {
                return params.value + "%";
              }
            },
            itemStyle: {
              normal: {
                color: "#02C81A"
                // color:colors[0].borderColor
              }
            },
            data: dataYJ
          },
          {
            name: "未处理",
            type: "bar",
            barWidth: 15,
            stack: "right",
            xAxisIndex: 2,
            yAxisIndex: 2,
            label: {
              show: true,
              fontSize: 20,
              distance: 5,
              color: "#fff",
              position: "right", //inside|right
              formatter: params => {
                return params.value + "%";
              }
            },
            itemStyle: {
              normal: {
                color: "#FFD52E"
              }
            },
            data: dataYJ
          }
        ]
      });
      // 仪表盘
      ybpPie.setOption({
        title: [
          {
            x: "9%",
            y: "80%",
            //bottom: 100,
            text: "准入通过率",
            textStyle: {
              fontWeight: "normal",
              fontSize: 28,
              color: "#fff"
            }
          },
          {
            x: "32%",
            y: "80%",
            //bottom: 100,
            text: "评级处理率",
            textStyle: {
              fontWeight: "normal",
              fontSize: 28,
              color: "#fff"
            }
          },
          {
            x: "56%",
            y: "80%",
            //bottom: 100,
            text: "预警处理率",
            textStyle: {
              fontWeight: "normal",
              fontSize: 28,
              color: "#fff"
            }
          },
          {
            x: "79%",
            y: "80%",
            //bottom: 100,
            text: "巡检完成率",
            textStyle: {
              fontWeight: "normal",
              fontSize: 28,
              color: "#fff"
            }
          }
        ],
        series: [
          {
            name: "速度",
            type: "gauge",
            min: 0,
            max: 100,
            center: ["15%", "50%"], // 默认全局居中
            //splitNumber:11,
            radius: "95%",
            axisLine: {
              // 坐标轴线
              lineStyle: {
                // 属性lineStyle控制线条样式
                color: [
                  [0.1, "#ff4500"],
                  [0.8, "#4EE3FF"],
                  [1, "lime"]
                ],
                width: 3,
                //shadowColor : '#fff', //默认透明
                shadowBlur: 6
              }
            },
            axisLabel: {
              // 坐标轴小标记
              textStyle: {
                // 属性lineStyle控制线条样式
                fontWeight: "bolder",
                color: "#fff",
                //shadowColor : '#fff', //默认透明
                shadowBlur: 5,
                fontSize: 20
              }
            },
            axisTick: {
              // 坐标轴小标记
              length: 15, // 属性length控制线长
              lineStyle: {
                // 属性lineStyle控制线条样式
                color: "auto",
                width: 1,
                //shadowColor : '#fff', //默认透明
                shadowBlur: 5
              }
            },
            splitLine: {
              //橙色分割线
              length: 18,
              lineStyle: {
                width: 4,
                color: "#FCD209"
              }
            },
            itemStyle: {
              //指针颜色
              color: "#1e90ff"
            },
            pointer: {
              //指针长短
              length: 65,
              width: 7
            },
            detail: {
              formatter: "{value}%",
              textStyle: {
                fontSize: 40
              }
            },
            data: [{ value: 40 }]
          },
          {
            name: "速度",
            type: "gauge",
            min: 0,
            max: 100,
            center: ["38%", "50%"], // 默认全局居中
            //splitNumber:11,
            radius: "95%",
            axisLine: {
              // 坐标轴线
              lineStyle: {
                // 属性lineStyle控制线条样式
                color: [
                  [0.1, "#ff4500"],
                  [0.8, "#4EE3FF"],
                  [1, "lime"]
                ],
                width: 3,
                //shadowColor : '#fff', //默认透明
                shadowBlur: 6
              }
            },
            axisLabel: {
              // 坐标轴小标记
              textStyle: {
                // 属性lineStyle控制线条样式
                fontWeight: "bolder",
                color: "#fff",
                //shadowColor : '#fff', //默认透明
                shadowBlur: 5,
                fontSize: 20
              }
            },
            axisTick: {
              // 坐标轴小标记
              length: 15, // 属性length控制线长
              lineStyle: {
                // 属性lineStyle控制线条样式
                color: "auto",
                width: 1,
                //shadowColor : '#fff', //默认透明
                shadowBlur: 5
              }
            },
            splitLine: {
              //橙色分割线
              length: 18,
              lineStyle: {
                width: 4,
                color: "#FCD209"
              }
            },
            itemStyle: {
              //指针颜色
              color: "#1e90ff"
            },
            pointer: {
              //指针长短
              length: 65,
              width: 7
            },
            detail: {
              formatter: "{value}%",
              textStyle: {
                fontSize: 40
              }
            },
            data: [{ value: 30 }]
          },
          {
            name: "速度",
            type: "gauge",
            min: 0,
            max: 100,
            center: ["62%", "50%"], // 默认全局居中
            //splitNumber:11,
            radius: "95%",
            axisLine: {
              // 坐标轴线
              lineStyle: {
                // 属性lineStyle控制线条样式
                color: [
                  [0.1, "#ff4500"],
                  [0.8, "#4EE3FF"],
                  [1, "lime"]
                ],
                width: 3,
                //shadowColor : '#fff', //默认透明
                shadowBlur: 6
              }
            },
            axisLabel: {
              // 坐标轴小标记
              textStyle: {
                // 属性lineStyle控制线条样式
                fontWeight: "bolder",
                color: "#fff",
                //shadowColor : '#fff', //默认透明
                shadowBlur: 5,
                fontSize: 20
              }
            },
            axisTick: {
              // 坐标轴小标记
              length: 15, // 属性length控制线长
              lineStyle: {
                // 属性lineStyle控制线条样式
                color: "auto",
                width: 1,
                //shadowColor : '#fff', //默认透明
                shadowBlur: 5
              }
            },
            splitLine: {
              //橙色分割线
              length: 18,
              lineStyle: {
                width: 4,
                color: "#FCD209"
              }
            },
            itemStyle: {
              //指针颜色
              color: "#1e90ff"
            },
            pointer: {
              //指针长短
              length: 65,
              width: 7
            },
            detail: {
              formatter: "{value}%",
              textStyle: {
                fontSize: 40
              }
            },
            data: [{ value: 90 }]
          },
          {
            name: "速度",
            type: "gauge",
            min: 0,
            max: 100,
            center: ["85%", "50%"], // 默认全局居中
            //splitNumber:11,
            radius: "95%",
            axisLine: {
              // 坐标轴线
              lineStyle: {
                // 属性lineStyle控制线条样式
                color: [
                  [0.1, "#ff4500"],
                  [0.8, "#4EE3FF"],
                  [1, "lime"]
                ],
                width: 3,
                //shadowColor : '#fff', //默认透明
                shadowBlur: 6
              }
            },
            axisLabel: {
              // 坐标轴小标记
              textStyle: {
                // 属性lineStyle控制线条样式
                fontWeight: "bolder",
                color: "#fff",
                //shadowColor : '#fff', //默认透明
                shadowBlur: 5,
                fontSize: 20
              }
            },
            axisTick: {
              // 坐标轴小标记
              length: 15, // 属性length控制线长
              lineStyle: {
                // 属性lineStyle控制线条样式
                color: "auto",
                width: 1,
                //shadowColor : '#fff', //默认透明
                shadowBlur: 5
              }
            },
            splitLine: {
              //橙色分割线
              length: 18,
              lineStyle: {
                width: 4,
                color: "#FCD209"
              }
            },
            itemStyle: {
              //指针颜色
              color: "#1e90ff"
            },
            pointer: {
              //指针长短
              length: 65,
              width: 7
            },
            detail: {
              formatter: "{value}%",
              textStyle: {
                fontSize: 40
              }
            },
            data: [{ value: 20 }]
          }
        ]
      });
      // 水球图
      sqPie.setOption({
        title: {
          text: "",
          textStyle: {
            fontWeight: "normal",
            fontSize: 25,
            color: "rgb(97, 142, 205)"
          }
        },
        series: [
          {
            type: "liquidFill",
            radius: "65%",
            center: ["50%", "40%"],
            data: [0.5, 0.5, 0.5], // data个数代表波浪数
            backgroundStyle: {
              borderWidth: 1,
              color: "rgb(255,0,255,0.1)"
            },
            label: {
              normal: {
                formatter: (0.5 * 100).toFixed(2) + "%",
                textStyle: {
                  fontSize: this.setFontsize(0.25)
                }
              }
            },
            outline: {
              show: false
            }
          },
          {
            type: "pie",
            center: ["50%", "40%"],
            radius: ["70%", "72%"],
            hoverAnimation: false,
            data: [
              {
                name: "",
                value: 500,
                labelLine: {
                  show: false
                },
                itemStyle: {
                  color: "#5886f0"
                },
                emphasis: {
                  labelLine: {
                    show: false
                  },
                  itemStyle: {
                    color: "#5886f0"
                  }
                }
              }
            ]
          }
        ]
      });
      // 准入拒件饼图
      var seriesData = this.zrData;
      var legendData = [
        "征信类占比",
        "黑名单类占比",
        "内部数据名单类",
        "外部数据名单类"
      ];
      var colorList1 = ["#73ACFF", "#9E87FF", "#FD866A", "#FDD56A"];
      zrPie.setOption({
        tooltip: {
          trigger: "item",
          borderColor: "rgba(255,255,255,.3)",
          backgroundColor: "rgba(13,5,30,.6)",
          borderWidth: 1,
          padding: 5,
          textStyle: {
            fontSize: 30
          },
          formatter: function(parms) {
            var str =
              parms.marker +
              "" +
              parms.data.name +
              "</br>" +
              "数量：" +
              parms.data.value +
              "个</br>" +
              "占比：" +
              parms.percent +
              "%";
            return str;
          }
        },
        legend: {
          type: "scroll",
          orient: "vertical",
          left: "left",
          align: "auto",
          top: "middle",
          itemWidth: 17,
          itemHeight: 15,
          textStyle: {
            color: "#fff",
            fontSize: 26
          },
          data: legendData
        },
        series: [
          {
            type: "pie",
            z: 3,
            center: ["65%", "55%"],
            radius: ["50%", "80%"],
            clockwise: true,
            avoidLabelOverlap: true,
            hoverOffset: this.setFontsize(0.07),
            itemStyle: {
              normal: {
                color: function(params) {
                  return colorList1[params.dataIndex];
                }
              }
            },
            label: {
              fontSize: 32,
              show: true,
              position: "outside",
              formatter: "{d}%\n{hr|}",
              rich: {
                a: {
                  padding: [-30, 15, -20, 15]
                }
              }
            },
            labelLine: {
              normal: {
                length: 10,
                length2: 15,
                lineStyle: {
                  width: 1
                }
              }
            },
            data: seriesData
          }
        ]
      });
      //
      this.$nextTick(() => {
        Pie1.resize();
      });
      this.$nextTick(() => {
        Pie4.resize();
      });
      // let Pie3 = this.$echarts.init(document.getElementById("Pie3"));
      // 右侧最下角饼图
      var data = [];

      // 折线图
      // Pie3.setOption({
      //   tooltip: {
      //     //提示框组件
      //     trigger: "axis",
      //     formatter: "{b}<br />{a0}: {c0}<br />{a1}: {c1}",
      //     axisPointer: {
      //       type: "shadow",
      //       label: {
      //         backgroundColor: "#6a7985"
      //       }
      //     },
      //     textStyle: {
      //       color: "#fff",
      //       fontStyle: "normal",
      //       fontFamily: "微软雅黑",
      //       fontSize: 18
      //     }
      //   },
      //   grid: {
      //     left: "10%",
      //     right: "10%",
      //     bottom: "10%",
      //     top: "40%",
      //     //	padding:'0 0 10 0',
      //     containLabel: true
      //   },
      //   legend: {
      //     //图例组件，颜色和名字
      //     right: "10%",
      //     top: "30%",
      //     itemGap: 16,
      //     itemWidth: 18,
      //     itemHeight: 10,
      //     data: [
      //       {
      //         name: "本年"
      //         //icon:'image://../wwwroot/js/url2.png', //路径
      //       },
      //       {
      //         name: "本月"
      //       }
      //     ],
      //     textStyle: {
      //       color: "#a8aab0",
      //       fontStyle: "normal",
      //       fontFamily: "微软雅黑",
      //       fontSize: 16
      //     }
      //   },
      //   xAxis: [
      //     {
      //       type: "category",
      //       //	boundaryGap: true,//坐标轴两边留白
      //       data: [
      //         "远程巡检",
      //         "现场巡检",
      //         "专项巡检",
      //         "应巡检服务点数",
      //         "巡检数量",
      //         "巡检率"
      //       ],
      //       axisLabel: {
      //         //坐标轴刻度标签的相关设置。
      //         //		interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
      //         //	margin:15,
      //         textStyle: {
      //           color: "#078ceb",
      //           fontStyle: "normal",
      //           fontFamily: "微软雅黑",
      //           fontSize: 12
      //         },
      //         rotate: 50
      //       },
      //       axisTick: {
      //         //坐标轴刻度相关设置。
      //         show: false
      //       },
      //       axisLine: {
      //         //坐标轴轴线相关设置
      //         lineStyle: {
      //           color: "#fff",
      //           opacity: 0.2
      //         }
      //       },
      //       splitLine: {
      //         //坐标轴在 grid 区域中的分隔线。
      //         show: false
      //       }
      //     }
      //   ],
      //   yAxis: [
      //     {
      //       type: "value",
      //       splitNumber: 5,
      //       axisLabel: {
      //         textStyle: {
      //           color: "#a8aab0",
      //           fontStyle: "normal",
      //           fontFamily: "微软雅黑",
      //           fontSize: 12
      //         }
      //       },
      //       axisLine: {
      //         show: false
      //       },
      //       axisTick: {
      //         show: false
      //       },
      //       splitLine: {
      //         show: true,
      //         lineStyle: {
      //           color: ["#fff"],
      //           opacity: 0.06
      //         }
      //       }
      //     }
      //   ],
      //   series: [
      //     {
      //       name: "本年",
      //       type: "bar",
      //       data: [10, 15, 30, 45, 55, 60],
      //       barWidth: 25,
      //       barGap: 0, //柱间距离
      //       // label: {//图形上的文本标签
      //       //     normal: {
      //       //       show: true,
      //       //       position: 'top',
      //       //       textStyle: {
      //       //           color: '#a8aab0',
      //       //           fontStyle: 'normal',
      //       //           fontFamily: '微软雅黑',
      //       //           fontSize: 12,
      //       //       },
      //       //     },
      //       // },
      //       itemStyle: {
      //         normal: {
      //           show: true,
      //           barBorderRadius: 0,
      //           borderWidth: 0,
      //           color: "#77C8FF"
      //         }
      //       }
      //     },
      //     {
      //       name: "本月",
      //       type: "bar",
      //       data: [8, 5, 25, 30, 35, 55, 62, 78, 65, 55, 60, 45, 42, 15, 12, 5],
      //       barWidth: 25,
      //       barGap: 0, //柱间距离
      //       // label: {//图形上的文本标签
      //       //     normal: {
      //       //       show: true,
      //       //       position: 'top',
      //       //       textStyle: {
      //       //           color: '#a8aab0',
      //       //           fontStyle: 'normal',
      //       //           fontFamily: '微软雅黑',
      //       //           fontSize: 12,
      //       //       },
      //       //     },
      //       // },
      //       itemStyle: {
      //         normal: {
      //           show: true,
      //           barBorderRadius: 0,
      //           borderWidth: 0
      //         }
      //       }
      //     }
      //   ]
      // });
      //

      //  仪表盘
      var dataArry = {
        one: 500,
        two: 300,
        three: 200,
        four: 200
      };
      Pie4.setOption({
        tooltip: {
          formatter: "{a} <br/>{c} {b}"
        },
        series: [
          {
            name: "未巡检",
            type: "gauge",
            color: ["#f00"],
            min: 0,
            max: 8,
            splitNumber: 8,
            radius: "30%",
            center: ["15%", "55%"],
            axisLine: {
              // 坐标轴线
              lineStyle: {
                // 属性lineStyle控制线条样式
                width: 10,
                color: [
                  [0.4, "#203add"],
                  [1, "#0d1758"]
                ]
              },
              backgroundColor: "none"
            },
            tooltip: {
              formatter: function() {
                if (dataArry.one) {
                  return "未巡检:" + dataArry.one;
                }
              }
            },
            axisTick: {
              // 坐标轴小标记
              length: 12, // 属性length控制线长
              lineStyle: {
                // 属性lineStyle控制线条样式
                color: "auto"
              }
            },
            splitLine: {
              // 分隔线
              length: 5, // 属性length控制线长
              lineStyle: {
                // 属性lineStyle（详见lineStyle）控制线条样式
                color: "rgba(255,255,255,0.7)"
              }
            },
            axisLabel: {
              borderRadius: 1,
              color: "rgba(255,255,255,0.7)",
              padding: 1
            },
            title: {
              // 其余属性默认使用全局文本样式，详见TEXTSTYLE
              // fontWeight: 'bolder',
              fontSize: 22,
              fontColor: "#FFF",
              color: "#FFF",
              paddingTop: 15,
              offsetCenter: [0, "110%"]
              // fontStyle: 'italic'
            },
            itemStyle: {
              color: "#1092ff"
            },
            detail: {
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              // borderWidth: 1,
              textBorderColor: "#000",
              textBorderWidth: 1,
              textShadowBlur: 1,
              textShadowColor: "#fff",
              textShadowOffsetX: 0,
              textShadowOffsetY: 0,
              paddingTop: 10,
              fontFamily: "digital",
              fontSize: 20,
              width: 30,
              color: "#fff",
              rich: {},
              offsetCenter: [0, "65%"],
              formatter: function(value) {
                console.info(value);
                return value * 10 + "%";
              }
            },
            data: [
              {
                value: 5,
                name: "未巡检"
              }
            ]
          },
          {
            name: "远程巡检",
            type: "gauge",
            color: ["#f00"],
            min: 0,
            max: 8,
            splitNumber: 8,
            radius: "30%",
            center: ["34%", "55%"],
            axisLine: {
              // 坐标轴线
              lineStyle: {
                // 属性lineStyle控制线条样式
                width: 10,
                color: [
                  [0.4, "#203add"],
                  [1, "#0d1758"]
                ]
              },
              backgroundColor: "none"
            },
            axisTick: {
              // 坐标轴小标记
              length: 12, // 属性length控制线长
              lineStyle: {
                // 属性lineStyle控制线条样式
                color: "auto"
              }
            },
            tooltip: {
              formatter: function() {
                if (dataArry.two) {
                  return "远程巡检:" + dataArry.two;
                }
              }
            },
            splitLine: {
              // 分隔线
              length: 5, // 属性length控制线长
              lineStyle: {
                // 属性lineStyle（详见lineStyle）控制线条样式
                color: "rgba(255,255,255,0.7)"
              }
            },
            axisLabel: {
              borderRadius: 1,
              color: "rgba(255,255,255,0.7)",
              padding: 1
            },
            title: {
              fontSize: 22,
              fontColor: "#FFF",
              color: "#FFF",
              paddingTop: 15,
              offsetCenter: [0, "110%"]
            },
            itemStyle: {
              color: "#1092ff"
            },
            detail: {
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              textBorderColor: "#000",
              textBorderWidth: 1,
              textShadowBlur: 1,
              textShadowColor: "#fff",
              textShadowOffsetX: 0,
              textShadowOffsetY: 0,
              paddingTop: 10,
              fontFamily: "digital",
              fontSize: 20,
              width: 30,
              color: "#fff",
              rich: {},
              offsetCenter: [0, "65%"],
              formatter: function(value) {
                return value * 10 + "%";
              }
            },
            data: [
              {
                value: 3,
                name: "远程巡检"
              }
            ]
          },
          {
            name: "现场巡检",
            type: "gauge",
            color: ["#f00"],
            min: 0,
            max: 8,
            splitNumber: 8,
            radius: "30%",
            center: ["53%", "55%"],
            axisLine: {
              // 坐标轴线
              lineStyle: {
                // 属性lineStyle控制线条样式
                width: 10,
                color: [
                  [0.4, "#203add"],
                  [1, "#0d1758"]
                ]
              },
              backgroundColor: "none"
            },
            axisTick: {
              // 坐标轴小标记
              length: 12, // 属性length控制线长
              lineStyle: {
                // 属性lineStyle控制线条样式
                color: "auto"
              }
            },
            splitLine: {
              // 分隔线
              length: 5, // 属性length控制线长
              lineStyle: {
                // 属性lineStyle（详见lineStyle）控制线条样式
                color: "rgba(255,255,255,0.7)"
              }
            },
            tooltip: {
              formatter: function() {
                if (dataArry.three) {
                  return "现场巡检:" + dataArry.three;
                }
              }
            },
            axisLabel: {
              borderRadius: 1,
              color: "rgba(255,255,255,0.7)",
              padding: 1
            },
            title: {
              fontSize: 22,
              fontColor: "#FFF",
              color: "#FFF",
              paddingTop: 15,
              offsetCenter: [0, "110%"]
            },
            itemStyle: {
              color: "#1092ff"
            },
            detail: {
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              textBorderColor: "#000",
              textBorderWidth: 1,
              textShadowBlur: 1,
              textShadowColor: "#fff",
              textShadowOffsetX: 0,
              textShadowOffsetY: 0,
              paddingTop: 10,
              fontFamily: "digital",
              fontSize: 20,
              width: 30,
              color: "#fff",
              rich: {},
              offsetCenter: [0, "65%"],
              formatter: function(value) {
                return value * 10 + "%";
              }
            },
            data: [
              {
                value: 2,
                name: "现场巡检"
              }
            ]
          },
          {
            name: "专项巡检",
            type: "gauge",
            color: ["#f00"],
            min: 0,
            max: 8,
            splitNumber: 8,
            radius: "30%",
            center: ["72%", "55%"],
            axisLine: {
              // 坐标轴线
              lineStyle: {
                // 属性lineStyle控制线条样式
                width: 10,
                color: [
                  [0.4, "#203add"],
                  [1, "#0d1758"]
                ]
              },
              backgroundColor: "none"
            },
            axisTick: {
              // 坐标轴小标记
              length: 12, // 属性length控制线长
              lineStyle: {
                // 属性lineStyle控制线条样式
                color: "auto"
              }
            },
            splitLine: {
              // 分隔线
              length: 5, // 属性length控制线长
              lineStyle: {
                // 属性lineStyle（详见lineStyle）控制线条样式
                color: "rgba(255,255,255,0.7)"
              }
            },
            tooltip: {
              formatter: function() {
                if (dataArry.four) {
                  return "专项巡检:" + dataArry.four;
                }
              }
            },
            axisLabel: {
              borderRadius: 1,
              color: "rgba(255,255,255,0.7)",
              padding: 1
            },
            title: {
              fontSize: 22,
              fontColor: "#FFF",
              color: "#FFF",
              paddingTop: 15,
              offsetCenter: [0, "110%"]
            },
            itemStyle: {
              color: "#1092ff"
            },
            detail: {
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              textBorderColor: "#000",
              textBorderWidth: 1,
              textShadowBlur: 1,
              textShadowColor: "#fff",
              textShadowOffsetX: 0,
              textShadowOffsetY: 0,
              paddingTop: 10,
              fontFamily: "digital",
              fontSize: 20,
              width: 30,
              color: "#fff",
              rich: {},
              offsetCenter: [0, "65%"],
              formatter: function(value) {
                return value * 10 + "%";
              }
            },
            data: [
              {
                value: 2,
                name: "专项巡检"
              }
            ]
          }
        ]
      });
      window.addEventListener("resize", function() {
        Pie1.resize();
      });
      window.addEventListener("resize", function() {
        Pie4.resize();
      });
      // 巡检数据柱状图
      var data1 = [20, 30, 20, 30];
      var data3 = [20, 24, 15, 20];
      var datacity = ["风险级", "警示级", "预警级", "关注级"];
      Pie2.setOption({
        color: ["#388BFF", "#E6A23C"],
        tooltip: {
          trigger: "axis",
          textStyle: {
            fontSize: 30
          }
        },
        legend: {
          top: "8%",
          data: ["预警总数", "处理数"],
          textStyle: {
            color: "#fff",
            fontSize: 30,
          }
        },
        grid: {
          //图表的位置
          top: "20%",
          left: "3%",
          right: "4%",
          bottom: "5%",
          containLabel: true
        },
        yAxis: [
          {
            type: "value",
            axisLabel: {
              show: true,
              interval: "auto",
              formatter: "{value} ",
              textStyle: {
                fontSize: 30,
                color: "#fff"
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                type: "dashed"
              }
            },
            show: true
          }
        ],
        xAxis: [
          {
            type: "category",
            axisLabel: {
              interval: 0,
              show: true,
              splitNumber: 15,
              textStyle: {
                fontSize: 30,
                color: "#fff"
              }
            },
            data: datacity
          }
        ],
        series: [
          {
            name: "预警总数",
            type: "bar",
            stack: "sum",
            barWidth: this.setFontsize(0.5),
            data: data1
          },
          {
            name: "处理数",
            type: "bar",
            color: "#E6A23C",
            stack: "sum1",
            barWidth: this.setFontsize(0.5),
            data: data3
          }
        ]
      });
      var colorList = [
        "#73DDFF",
        "#73ACFF",
        "#FDD56A",
        "#FDB36A",
        "#FD866A",
        "#9E87FF",
        "#58D5FF"
      ];
      Pie1.setOption({
        backgroundColor: "",
        title: {
          text: "",
          left: "center",
          top: 20,
          textStyle: {
            color: "#ccc"
          }
        },

        tooltip: {
          trigger: "item",
          formatter: "{b} : {c} ({d}%)",
          textStyle: {
            fontSize: 24
          }
        },

        visualMap: {
          show: false,
          min: 500,
          max: 600,
          inRange: {
            //colorLightness: [0, 1]
          }
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "50%",
            center: ["45%", "62%"],
            color: ["rgb(131,249,103)", "#FBFE27", "#FE5050", "#1DB7E5"], //'#FBFE27','rgb(11,228,96)','#FE5050'
            data: [
              {
                value: 285,
                name: "未巡检"
              },
              {
                value: 410,
                name: "远程巡检"
              },
              {
                value: 274,
                name: "现场巡检"
              },
              {
                value: 235,
                name: "专项巡检"
              }
            ].sort(function(a, b) {
              return a.value - b.value;
            }),
            roseType: "radius",

            label: {
              normal: {
                formatter: ["{c|{c}个}", "{b|{b}}"].join("\n"),
                rich: {
                  c: {
                    color: "#77c8ff",
                    fontSize: 24,
                    fontWeight: "bold",
                    lineHeight: 5
                  },
                  b: {
                    color: "rgb(98,137,169)",
                    fontSize: 20,
                    height: 40
                  }
                }
              }
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: "rgb(98,137,169)"
                },
                smooth: 0.2,
                length: 10,
                length2: 20
              }
            },
            itemStyle: {
              normal: {
                shadowColor: "rgba(0, 0, 0, 0.8)",
                shadowBlur: 50
              }
            }
          }
        ]
      });
    },
    // 链接跳转
    echart() {
      this.$router.push("/echart");
    },
    demo3() {
      this.$router.push("/demo3");
    },
    demo4() {
      this.$router.push("/demo4");
    },
    logout() {
      this.$store.dispatch("user/logout").then(() => {
        this.$router.push(`/login?redirect=${this.$route.fullPath}`);
      });
    }
  },
  mounted() {
    this.currentTime();
    this.piedemo();
    this.DrawMap();
    window.onresize = () => {
      return (() => {
        this.$router.go(0);
      })();
    };
  },
  watch: {
    zrData(val) {
      //监听数据发生改变 刷新图表数据
      const loading = this.$loading({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      });
      setTimeout(() => {
        loading.close();
        this.piedemo();
      }, 1000);
    },
    zsData() {
      console.log("监听总数变化");
      //监听数据发生改变 刷新图表数据
      this.piedemo();
    },
    wclData() {
      console.log("监听完成量变化");
      //监听数据发生改变 刷新图表数据
      this.piedemo();
    },
    wclvData() {
      console.log("监听完成率变化");
      //监听数据发生改变 刷新图表数据
      this.piedemo();
    }
  },
  created() {
    this.getData();
    // console.log(this.setFontsize(0.3), "1111");
  },
  beforeDestroy: function() {
    if (this.getDate) {
      console.log("销毁定时器");
      clearInterval(this.getDate); // 在Vue实例销毁前，清除时间定时器
    }
  }
};
</script>
<style lang="scss" scoped>
// 新增css
.ccbSelect {
  width: 60%;
  height: 50%;
  margin-top: 3%;
}
.selectBox {
  position: absolute;
  z-index: 999;
  width: 320px;
  height: 50px;
  right: -22%;
  display: flex;
  flex-direction: row;
  .box4_tab {
    width: 40%;
    height: 50%;
    margin-top: 3%;
    display: flex;
    flex-direction: row;
  }
  .title_all {
    color: #d2d2d3;
    padding: 3% 3% 3% 3%;
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    &.active {
      color: #fff;
      font-size: 16px;
      font-weight: 700;
      border: 1px solid #6088b1;
      padding: 2% 3% 2% 3%;
      border-radius: 5px;
    }
  }
}
.box4 {
  width: 90%;
  height: 18%;
  position: absolute;
  padding: 0.5%;
  bottom: 5%;
  left: 5%;
  border: 1px solid rgba(40, 114, 159, 0.2);
  box-shadow: 0px 1px 2px 3px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: row;
  .box4Pie {
    width: 95%;
    height: 100%;
  }
  .box4_tab {
    width: 5%;
    display: flex;
    flex-direction: column;
    margin-top: 15px;
  }
  .title_all {
    color: #d2d2d3;
    padding: 1px;
    padding-bottom: 2px;
    text-align: center;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 10px;
    cursor: pointer;
    &.active {
      color: #fff;
      font-size: 16px;
      font-weight: 700;
      border-bottom: 2px solid #409eff;
      background-color: rgba(255, 255, 255, 0.2);
    }
  }
  .title_cll {
    color: #d2d2d3;
    font-size: 14px;
    font-weight: 700;
    margin-top: 4%;
    margin-left: 2%;
    cursor: pointer;
    &.active {
      color: #fff;
      font-size: 15px;
      font-weight: 700;
      margin-top: 3%;
      border-bottom: 1px solid #409eff;
    }
  }
}
.zrBox {
  width: 230%;
  height: 200%;
  position: absolute;
  bottom: -67%;
  left: -60%;
  transform: scale(0.4);
  .zrPie {
    width: 100%;
    height: 100%;
  }
}
.sq_txt {
  position: absolute;
  color: #fff;
  font-size: 16px;
  bottom: 10%;
  left: 20%;
  font-weight: 700;
}
.clBox {
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: row;
  position: relative;
  .sqPie {
    width: 40%;
    height: 100%;
  }
  .jdt {
    width: 60%;
    height: 100%;
    .jdt_list {
      margin: 0px;
      margin-top: 15px;
      padding: 0px;
      display: flex;
      flex-direction: column;
      li {
        display: flex;
        flex-direction: row;
        margin-bottom: 15px;
        p {
          color: #fff;
          float: left;
          font-size: 10px;
        }
        .jdt_box {
          width: 70%;
          margin-left: 10px;
          .jdt_box_1 {
          }
        }
      }
    }
  }
}
.ybpPie {
  width: 200%;
  height: 170%;
  position: absolute;
  left: -50%;
  top: -33%;
  transform: scale(0.5);
}
//
.loading {
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 999999;
  left: 0px;
  top: 0px;
}
p {
  padding: 0px;
  margin: 0px;
}
ul {
  li {
    list-style: none;
  }
}
.bg {
  .title_time {
    .time {
      color: #fff;
      font-size: 16px;
      margin-top: 15px;
      height: 30%;
    }
    width: 24%;
    height: 12%;
    left: 50%;
    margin-left: -12%;
    top: 0px;
    position: absolute;
    text-align: center;
    .tit {
      font-size: 38px;
      margin-top: 20px;
      letter-spacing: 2px;
      height: 30%;
      line-height: 30px;
      color: #80ccff;
    }
  }
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  background-image: url("../../assets/img/demo2bg.jpg");
  background-size: 100vw 100vh;
  background-position: center;
  background-repeat: no-repeat;
  padding: 3%;
  position: relative;
  .box1 {
    width: 26%;
    height: 80%;
    display: flex;
    flex-direction: column;
    .mod1 {
      width: 100%;
      height: 30%;
      margin-bottom: 2%;
      // background-color: rgba(13, 49, 130, 0.8);
      background-image: url("../../assets/img/mod1.png");
      background-size: 100% 100%;
      background-repeat: no-repeat;
      background-position: center;
      position: relative;
      .title {
        position: absolute;
        color: #70c5ff;
        font-size: 18px;
        left: 9%;
        top: 17%;
        font-weight: 700;
      }
      .list {
        width: 80%;
        height: 60%;
        margin: 50px auto 0px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 0px;
        li {
          width: 28%;
          height: 100%;
          color: #70c5ff;
          text-align: center;
          position: relative;
          .txt {
            position: absolute;
            left: 0px;
            top: 30px;
            height: 30%;
            width: 100%;
            p {
              font-size: 20px;
              margin: 0px;
              line-height: 24px;
              font-weight: 700;
              &.p1 {
                color: #05c3fa;
              }
              &.p2 {
                color: #56a444;
              }
              &.p3 {
                color: #ffb956;
              }
            }
            span {
              font-size: 12px;
              color: #fff;
            }
          }
          .diqiu {
            width: 100%;
            animation: rotate 5s linear infinite;
          }
          .jt {
            width: 20%;
            position: absolute;
            right: -25%;
            top: 30%;
          }
        }
      }
    }
    .mod2 {
      width: 100%;
      height: 38%;
      background-image: url("../../assets/img/mod2.png");
      background-size: 95% 100%;
      background-repeat: no-repeat;
      background-position-x: 100%;
      position: relative;
      padding: 5% 6% 2% 10%;
      display: flex;
      flex-direction: column;
      &.mod2_1 {
        margin-bottom: 2%;
      }
      .titleBox {
        display: flex;
        flex-direction: row;
        margin-bottom: 2%;
        width: 100%;
        height: 18%;
        .title {
          color: #70c5ff;
          font-size: 18px;
          margin-top: 2%;
          margin-left: 2%;
          font-weight: 700;
        }
        img {
          width: 8%;
        }
      }
    }
  }
  .box2 {
    width: calc(48% - 20px);
    margin: 0px 10px;
    height: 80%;
    display: flex;
    flex-direction: column;
    .modBox1 {
      height: 65%;
      background-image: url("../../assets/img/box2mod1.png");
      background-size: 100% 100%;
      background-repeat: no-repeat;
      position: relative;
      margin-top: 5%;
      .diqiuyi {
        width: 60%;
        left: 50%;
        margin-left: -30%;
        top: 10%;
        position: absolute;
        z-index: 997;
        animation: rotate 9s linear infinite;
      }
      .bg {
        width: 100%;
        height: 102%;
        position: absolute;
        z-index: 998;
        left: -0.5%;
        top: -1%;
        background-image: url("../../assets/img/box2mod2.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        .title {
          position: absolute;
          color: #70c5ff;
          font-size: 18px;
          left: 5%;
          top: 10%;
          font-weight: 700;
        }
        .ditu {
          width: 100%;
          height: 100%;
        }
      }
    }
    .modBox2 {
      margin-top: 1%;
      height: 35%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      position: relative;
      .box1 {
        .phList {
          width: 90%;
          margin: 0px auto;
          padding: 0px;
          margin-top: 2%;
          display: flex;
          flex-direction: column;
          li {
            border-bottom: 1px solid #1a4785;
            height: 20%;
            padding-bottom: 3%;
            padding-top: 3%;
            color: #aaddff;
            font-size: 14px;
          }
        }
        width: 100%;
        height: 100%;
        background-image: url("../../assets/img/box2mod1.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        padding: 2%;
        position: relative;
        .bingtu {
          width: 200%;
          height: 200%;
          position: absolute;
          transform: scale(0.55);
          left: -45%;
          top: -50%;
        }
        .titleBox {
          display: flex;
          flex-direction: row;
          margin-bottom: 2%;
          position: relative;
          height: 18%;
          .title {
            color: #70c5ff;
            font-size: 18px;
            margin-top: 1%;
            margin-left: 2%;
            font-weight: 700;
          }
          img {
            width: 5%;
          }
        }
      }
    }
  }
  .box3 {
    width: 26%;
    height: 80%;
    display: flex;
    flex-direction: column;
    .modr1 {
      width: 100%;
      height: 30%;
      margin-bottom: 2%;
      background-image: url("../../assets/img/modR1.png");
      background-size: 100% 100%;
      background-repeat: no-repeat;
      background-position: center;
      position: relative;
      display: flex;
      flex-direction: column;
      .title {
        position: absolute;
        color: #70c5ff;
        font-size: 18px;
        right: 9%;
        top: 17%;
        font-weight: 700;
      }
      .txt {
        color: #70c5ff;
        font-size: 16px;
        width: 80%;
        height: 55%;
        overflow: hidden;
        margin: 15% auto 0px;
        line-height: 24px;
      }
      .yjBox {
        width: 200%;
        left: -50%;
        height: 150%;
        padding: 2% 7% 2% 5%;
        top: -14%;
        transform: scale(0.5);
        position: absolute;
        display: flex;
        color: #aaddff;
        .yjPie {
          width: 100%;
          height: 100%;
        }
      }
    }
    // 裕农通风险管理
    .modr2 {
      display: flex;
      flex-direction: column;
      .zhexiantu {
        width: 215%;
        height: 220%;
        position: absolute;
        transform: scale(0.35);
        left: -60%;
        top: -50%;
      }
      .titleBox {
        display: flex;
        flex-direction: row;
        margin-bottom: 2%;
        height: 18%;
        .title {
          color: #70c5ff;
          font-size: 18px;
          font-weight: 700;
          margin-top: 1%;
          margin-left: 2%;
        }
        img {
          width: 7%;
        }
      }
      width: 100%;
      height: 40%;
      background-image: url("../../assets/img/mod2.png");
      background-size: 95% 100%;
      background-repeat: no-repeat;
      position: relative;
      padding: 5% 5% 11% 8%;
    }
    .modr3 {
      .bingtu {
        width: 200%;
        height: 200%;
        position: absolute;
        transform: scale(0.55);
        left: -45%;
        top: -50%;
      }
      .zhuzhuangtu {
        width: 200%;
        height: 200%;
        position: absolute;
        transform: scale(0.45);
        left: -55%;
        top: -45%;
      }
      .titleBox {
        display: flex;
        flex-direction: row;
        margin-bottom: 2%;
        height: 18%;
        position: absolute;
        z-index: 999;
        width: 80%;
        .title {
          color: #70c5ff;
          font-size: 18px;
          font-weight: 700;
          margin-top: 3%;
          margin-left: 1%;
        }
        .title_all {
          color: #d2d2d3;
          font-size: 14px;
          font-weight: 700;
          margin-top: 4%;
          margin-left: 24%;
          cursor: pointer;
          &.active {
            color: #fff;
            font-size: 15px;
            font-weight: 700;
            margin-top: 3%;
            border-bottom: 1px solid #409eff;
          }
        }
        .title_cll {
          color: #d2d2d3;
          font-size: 14px;
          font-weight: 700;
          margin-top: 4%;
          margin-left: 2%;
          cursor: pointer;
          &.active {
            color: #fff;
            font-size: 15px;
            font-weight: 700;
            margin-top: 3%;
            border-bottom: 1px solid #409eff;
          }
        }
        img {
          width: 10%;
        }
      }
      width: 100%;
      height: 40%;
      margin-top: 2%;
      background-image: url("../../assets/img/mod3.png");
      background-size: 95% 100%;
      background-repeat: no-repeat;
      position: relative;
      padding: 4% 4% 4% 9%;
    }
  }
}
// 无限旋转
.trans {
  border-radius: 50%;
  overflow: hidden;
  animation: rotate 3s linear infinite; // 意思就是匀速的运动   infinite// 就是无限滚动的意思
}
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
// 链接导航
.loginOut {
  width: 15px;
  height: 35px;
  line-height: 35px;
  color: #fff;
  font-size: 18px;
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
  margin: 10px;
}
.piebox {
  height: 100%;
  position: relative;
  .t1 {
    width: 45%;
    height: 45%;
    position: absolute;
    top: 0px;
    left: 0px;
    .title {
      color: #70c5ff;
      font-size: 16px;
      font-weight: 700;
      margin-bottom: 3%;
    }
    ul {
      display: flex;
      flex-direction: column;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 5%;
      padding: 5%;
      margin: 0px;
      li {
        p {
          color: #fff;
          font-size: 14px;
          padding: 0px;
          float: left;
        }
        span {
          color: #ffb956;
          font-size: 14px;
          float: right;
        }
        margin-bottom: 5%;
      }
    }
  }
  .t2 {
    width: 45%;
    height: 45%;
    position: absolute;
    right: 0px;
    top: 0px;
    .title {
      color: #70c5ff;
      font-size: 16px;
      text-align: right;
      font-weight: 700;
      margin-bottom: 3%;
    }
    ul {
      display: flex;
      flex-direction: column;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 5%;
      padding: 5%;
      margin: 0px;
      li {
        p {
          color: #fff;
          font-size: 14px;
          padding: 0px;
          float: left;
        }
        span {
          color: #ffb956;
          font-size: 14px;
          float: right;
        }
        margin-bottom: 5%;
      }
    }
  }
  .t3 {
    .title {
      color: #70c5ff;
      font-size: 16px;
      font-weight: 700;
      margin-bottom: 3%;
    }
    ul {
      display: flex;
      flex-direction: column;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 5%;
      padding: 5%;
      margin: 0px;
      li {
        p {
          color: #fff;
          font-size: 14px;
          padding: 0px;
          float: left;
        }
        span {
          color: #ffb956;
          font-size: 14px;
          float: right;
        }
        margin-bottom: 5%;
      }
    }
    width: 45%;
    height: 45%;
    position: absolute;
    bottom: 0px;
    left: 0px;
  }
  .t4 {
    .title {
      color: #70c5ff;
      font-size: 16px;
      text-align: right;
      font-weight: 700;
      margin-bottom: 3%;
    }
    ul {
      display: flex;
      flex-direction: column;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 5%;
      padding: 5%;
      margin: 0px;
      li {
        p {
          color: #fff;
          font-size: 14px;
          padding: 0px;
          float: left;
        }
        span {
          color: #ffb956;
          font-size: 14px;
          float: right;
        }
        margin-bottom: 5%;
      }
    }
    width: 45%;
    height: 45%;
    position: absolute;
    right: 0px;
    bottom: 0px;
  }
}
.yuanhuan {
  width: 200%;
  height: 150%;
  position: absolute;
  left: -47%;
  top: -23%;
  transform: scale(0.25);
}
.sjx {
  width: 20%;
  top: 41%;
  left: 55%;
  margin-left: -12%;
  position: absolute;
  animation: rotate 5s linear infinite;
}
.seamless-warp {
  width: 95%;
  margin: 0px auto;
  height: 100%;
  overflow: hidden;

  .itemhua {
    padding: 0px;
    margin: 0px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    li {
      width: 100%;
      margin-top: 2%;
      // background: rgba(255, 255, 255, 0.1);
      .tit {
        color: #fff;
        font-size: 18px;
        margin-top: 2%;
        margin-left: 5%;
        margin-bottom: 5%;
      }
      .txt {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-bottom: 5%;
        .box {
          width: 33.33%;
          font-size: 18px;
          text-align: center;
          color: #fff;
          .t1 {
            color: #77c8ff;
            margin-bottom: 5%;
          }
          .t2 {
            color: #ffb956;
          }
        }
      }
    }
  }
}

.seamless-warp1 {
  width: 90%;
  margin: 0px auto;
  height: 100%;
  overflow: hidden;
  display: block;
  .itemhua {
    padding: 0px;
    margin: 0px;
    display: flex;
    flex-direction: row;
    height: 200px;
    margin-top: 20px;
    li {
      width: 300px;
      height: 150px;
      margin-right: 20px;
      .tit {
        color: #fff;
        font-size: 16px;
        margin-bottom: 10px;
      }
      .txt {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 5px;
        height: 100px;
        .paihan {
          width: 80px;
          height: 80px;
          margin-top: 10px;
          margin-left: 10px;
          border: 1px solid #2988c1;
          font-size: 22px;
          border-radius: 5px;
          color: #ffb956;
          text-align: center;
          line-height: 80px;
          background: rgba(255, 255, 255, 0.1);
        }
        .boxP {
          display: flex;
          flex-direction: column;
          margin-top: 10px;
          margin-right: 15px;
          margin-left: 5px;
          .box {
            width: 170px;
            font-size: 14px;
            text-align: center;
            background: rgba(255, 255, 255, 0.1);
            height: 22px;
            margin-bottom: 5px;
            line-height: 22px;
            padding-left: 5px;
            color: #fff;
            border-left: 1px solid #2988c1;
            .t1 {
              color: #fff;
              float: left;
            }
            .t2 {
              color: #ffb956;
              float: right;
              margin-right: 15px;
            }
          }
        }
      }
    }
  }
}
.el-carousel__item:nth-child(2n) {
  // background-color: #072769;
  background: rgba(53, 87, 154, 0.5);
  border-radius: 10px;
}
.el-carousel__item:nth-child(2n + 1) {
  // background-color: #1e325a;
  background: rgba(30, 50, 90, 0.5);
  border-radius: 10px;
}
.el-carousel__item:nth-child(2n).is-active {
  background: rgba(53, 87, 154, 0.95);
}
.el-carousel__item:nth-child(2n + 1).is-active {
  background: rgba(30, 50, 90, 0.95);
}

.topClose {
  color: #fff;
  cursor: pointer;
  font-size: 16px;
}
@media screen and (max-width: 1280px) {
  .selectBox {
    width: 420px;
    right: -45%;
  }
  .selectBox .box4_tab {
    width: 50%;
    height: 55%;
  }
  .selectBox .title_all {
    padding: 2% 5% 2% 5%;
  }
  .selectBox .title_all.active {
    padding: 2% 5% 2% 5%;
  }
  .sq_txt {
    bottom: 2%;
  }
  .clBox .jdt .jdt_list {
    margin-top: 0px;
  }
}
</style>
<style lang="scss">
.jdt_box_1 {
  .el-progress-bar__inner {
    background-color: #ffd52e !important;
  }
}
.jdt {
  .el-progress-bar__outer {
    background-color: #0d0a23;
  }
}

.ssYijihan {
  .el-input__inner {
    background-color: transparent;
    border: 0px;
    border-radius: 0px;
    color: #fff;
  }
  &:focus {
  }
  width: 250px;
  position: absolute;
  right: 60px;
  top: 30px;
  background-color: transparent;
}
.seamless-warp {
  .el-carousel__mask {
    opacity: 1;
    background-color: transparent;
  }
}
.topBox {
  .itemhua {
    padding: 0px;
    margin: 0px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    height: 420px;
    margin-top: 20px;
    li {
      width: 48%;
      height: 170px;
      margin-bottom: 15px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 5px;
      padding: 10px;
      .tit {
        color: #fff;
        font-size: 24px;
        margin-bottom: 15px;
        display: flex;
        flex-direction: row;
      }
      .txt {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        height: 100px;
        .paihan {
          width: 100px;
          height: 100px;

          border: 1px solid #2988c1;
          font-size: 24px;
          border-radius: 5px;
          color: #ffb956;
          text-align: center;
          line-height: 100px;
          background: rgba(255, 255, 255, 0.1);
        }
        .boxP {
          width: 70%;
          display: flex;
          flex-direction: column;
          .box {
            width: 100%;
            font-size: 16px;
            text-align: center;
            background: rgba(255, 255, 255, 0.1);
            height: 33.3%;
            margin-bottom: 2px;
            line-height: 30px;
            padding-left: 10px;
            color: #fff;
            border-left: 1px solid #2988c1;
            .t1 {
              color: #fff;
              float: left;
            }
            .t2 {
              color: #ffb956;
              float: right;
              margin-right: 15px;
            }
          }
        }
      }
    }
  }
  .el-dialog__title {
    color: #70c5ff;
  }
  .el-dialog__headerbtn:focus .el-dialog__close,
  .el-dialog__headerbtn:hover .el-dialog__close {
    color: #fff;
  }
  .el-dialog__headerbtn .el-dialog__close {
    color: #fff;
  }
  .el-dialog {
    background: rgba(5, 26, 71, 0.95);
    background-image: url("../../assets/img/box2mod2.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 70%;
  }
  .el-dialog__header {
    padding: 40px 20px 10px;
  }
  .el-dialog__body {
    padding: 20px 20px;
  }
}
.ccbSelect {
  .el-select-dropdown__item.selected {
    color: #fff;
  }
  .el-select-dropdown__item {
    color: #fff;
  }
  .el-select-dropdown__item.hover,
  .el-select-dropdown__item:hover {
    background-color: #637ea7;
  }
  .el-select-dropdown {
    border: 1px solid #6088b1;
    background-color: #061743;
  }
  .el-input__inner {
    background-color: #021742;
    border: 1px solid #6088b1;
    height: 30px;
    line-height: 30px;
    color: #fff;
  }
  .el-input__icon {
    line-height: normal;
  }
}
</style>