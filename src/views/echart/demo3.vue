<template>
  <div class="bg">
    <div class="title_time">
      <p class="tit">裕农通智能风控</p>
      <p class="time">{{ nowDate + ' ' + nowTime + ' ' + nowWeek }}</p>
    </div>
    <div class="box1">
      <div class="mod1">
        <p class="title">准入风险评级</p>
        <ul class="list">
          <li>
            <img class="diqiu" src="../../assets/img/diqiu2.png" alt />
            <div class="txt">
              <p>1090</p>
              <span>进件数</span>
            </div>
            <img class="jt" src="../../assets/img/jt1.png" alt />
          </li>
          <li>
            <img class="diqiu" src="../../assets/img/diqiu2.png" alt />
            <div class="txt">
              <p>165</p>
              <span>通过数</span>
            </div>
            <img class="jt" src="../../assets/img/jt1.png" alt />
          </li>
          <li>
            <img class="diqiu" src="../../assets/img/diqiu2.png" alt />
            <div class="txt">
              <p>40%</p>
              <span>通过率</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="mod2">
        <img class="sjx" src="../../assets/img/diqiuyi.png" alt />
        <div class="piebox">
          <div class="t1">
            <p class="title">准入评级</p>
            <ul>
              <li>
                <p>拒件率：</p>
                <span>50%</span>
              </li>
              <li>
                <p>数量：</p>
                <span>10个</span>
              </li>
              <li>
                <p>征信类占比：</p>
                <span>12%</span>
              </li>
              <li>
                <p>黑名单类占比：</p>
                <span>12%</span>
              </li>
              <li>
                <p>外部数据名单类：</p>
                <span>12%</span>
              </li>
            </ul>
          </div>
          <div class="t2">
            <p class="title">存量评级</p>
            <ul>
              <li>
                <p>服务点总数：</p>
                <span>50个</span>
              </li>
              <li>
                <p>风险级占比：</p>
                <span>10%</span>
              </li>
              <li>
                <p>警示级占比：</p>
                <span>12%</span>
              </li>
              <li>
                <p>预警级占比：</p>
                <span>12%</span>
              </li>
              <li>
                <p>关注级占比：</p>
                <span>12%</span>
              </li>
            </ul>
          </div>
          <div class="t3">
            <p class="title">风险预警</p>
            <ul>
              <li>
                <p>预警总数：</p>
                <span>50个</span>
              </li>
              <li>
                <p>风险级占比：</p>
                <span>10%</span>
              </li>
              <li>
                <p>警示级占比：</p>
                <span>12%</span>
              </li>
              <li>
                <p>预警级占比：</p>
                <span>12%</span>
              </li>
              <li>
                <p>关注级占比：</p>
                <span>12%</span>
              </li>
            </ul>
          </div>
          <div class="t4">
            <p class="title">专项巡检</p>
            <ul>
              <li>
                <p>应巡检服务点数：</p>
                <span>50个</span>
              </li>
              <li>
                <p>一季度：</p>
                <span>10%</span>
              </li>
              <li>
                <p>二季度：</p>
                <span>12%</span>
              </li>
              <li>
                <p>三季度：</p>
                <span>12%</span>
              </li>
              <li>
                <p>四季度：</p>
                <span>12%</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="yuanhuan" id="yuan"></div>
      </div>
      <div class="mod3">
        <div class="titleBox">
          <img src="../../assets/img/sj1.png" alt />
          <p class="title">风险预警与巡检评级</p>
        </div>
        <div class="tBox">
          <div class="boxchild">
            <img class="imgbox" src="../../assets/img/sq.png" alt />
            <p class="t2">上季度巡检</p>
          </div>
          <div class="boxchild">
            <p class="t1">总服务点数</p>
            <p class="t3">299个</p>
          </div>
          <div class="boxchild">
            <p class="t1">巡检数</p>
            <p class="t3">187个</p>
          </div>
          <div class="boxchild">
            <p class="t1">巡检率</p>
            <p class="t4">50%</p>
          </div>
        </div>
        <div class="tBox">
          <div class="boxchild">
            <img class="imgbox" src="../../assets/img/bld.png" alt />
            <p class="t2">风险预警</p>
          </div>
          <div class="boxchild">
            <p class="t1">总数</p>
            <p class="t3">299个</p>
          </div>
          <div class="boxchild">
            <p class="t1">处理数</p>
            <p class="t3">187个</p>
          </div>
          <div class="boxchild">
            <p class="t1">处理率</p>
            <p class="t4">50%</p>
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
          <div class="titleBox">
            <img src="../../assets/img/sj1.png" alt />
            <p class="title">风险预警数</p>
          </div>
          <!-- <div class="bingtu" id="Pie1"></div> -->
          <vue-seamless-scroll :class-option="optionscroll" :data="listData" class="seamless-warp">
            <ul class="itemhua">
              <li v-for="item in listData">
                <div class="tit">福建省分行</div>
                <div class="txt">
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
              </li>
            </ul>
          </vue-seamless-scroll>
        </div>
        <div class="box1">
          <div class="titleBox">
            <img src="../../assets/img/sj.png" alt />
            <p class="title">风险预警排行TOP10</p>
          </div>
          <!-- 跑马灯 -->
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
        </div>
      </div>
    </div>
    <div class="box3">
      <div class="modr1">
        <p class="title">实时公告通知</p>
        <p
          class="txt"
        >裕农通智能风控检测出风险共：12650个,检测风险率为：80%，提供风险预警服务：8000个，处理数：7500个，统计率达：80%。其中风险预警高峰地区为...</p>
      </div>
      <div class="modr2">
        <div class="titleBox">
          <img src="../../assets/img/sj.png" alt />
          <p class="title">巡检数据统计</p>
        </div>
        <div class="zhexiantu" id="Pie2"></div>
      </div>
      <div class="modr3">
        <div class="titleBox">
          <img src="../../assets/img/sj.png" alt />
          <p class="title">本月风险预警</p>
        </div>
        <!-- <div class="zhuzhuangtu" id="Pie3"></div> -->
        <div class="bingtu" id="Pie1"></div>
      </div>
    </div>
    <div class="loginOut" @click="drawer = true"><</div>
    <el-drawer size="20%" title="我是标题" :visible.sync="drawer" :with-header="false">
      <div class="buttonBox">
        <el-button class="button1" @click="demo3" type="primary" size="mini">demo3</el-button>
        <el-button class="button1" @click="demo2" type="primary" size="mini">demo2</el-button>
        <el-button class="button1" @click="logout" type="danger" size="mini">退出登录</el-button>
      </div>
    </el-drawer>
  </div>
</template>
<script>
import "echarts/map/js/china.js";
import obj from "echarts/map/json/china.json";
export default {
  name: "demo3",
  data() {
    return {
      drawer: false,
      listArr: [], //城市json
      nowDate: "", // 当前日期
      nowTime: "", // 当前时间
      nowWeek: "", // 当前星期
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
          no: "1"
        },
        {
          data1: "120个",
          data2: "60个",
          data3: "80%",
          no: "2"
        },
        {
          data1: "120个",
          data2: "60个",
          data3: "80%",
          no: "3"
        },
        {
          data1: "120个",
          data2: "60个",
          data3: "80%",
          no: "4"
        },
        {
          data1: "120个",
          data2: "60个",
          data3: "80%",
          no: "5"
        },
        {
          data1: "120个",
          data2: "60个",
          data3: "80%",
          no: "6"
        },
        {
          data1: "120个",
          data2: "60个",
          data3: "80%",
          no: "7"
        },
        {
          data1: "120个",
          data2: "60个",
          data3: "80%",
          no: "8"
        },
        {
          data1: "120个",
          data2: "60个",
          data3: "80%",
          no: "9"
        },
        {
          data1: "120个",
          data2: "60个",
          data3: "80%",
          no: "10"
        }
      ]
    };
  },
  computed: {
    optionscroll() {
      return {
        // hoverStop: false,
        step: 0.2
      };
    },
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
      // 渐变2
      let dituJB1 = this.$echarts.init(document.getElementById("ditu1"));
      var dataJb = [
        {
          name: "重庆",
          value: 0
        },
        {
          name: "云南",
          value: 0
        },
        {
          name: "辽宁",
          value: 0
        },
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
          value: 20
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
      dituJB1.setOption({
        // backgroundColor: "#1e345d",
        color: [
          "",
          "#fc5353",
          "#f4fc6c",
          "#e68b55",
          "#9a68ff",
          "#ff60c5"
        ] /*地图上面的五大项颜色*/,
        tooltip: {
          trigger: "item",
          formatter: function(params) {
            var MAP_VALUE_DIC = {
              "0": "初级预警",
              "10": "中级预警",
              "20": "高级预警"
            };
            if (params.seriesType) {
              return params.name + ": " + MAP_VALUE_DIC[params.data.value];
            } else {
              return params.name;
            }
          }
        },
        visualMap: {
          type: "piecewise",
          splitNumber: 3,
          pieces: [
            {
              min: 10,
              label: "高级预警",
              color: "#0090c6"
            },
            {
              max: 10,
              min: 1,
              label: "中级预警",
              color: "#2ab1ea"
            },
            {
              value: 0,
              label: "初级预警",
              color: "#66d1ff"
            }
          ],
          textStyle: {
            color: "#fff"
          },
          min: 0,
          max: 20,
          left: "left",
          top: "bottom",
          calculable: true,
          show: true,
          seriesIndex: 0
        },
        geo: {
          map: "china",
          zoom: 1.2,
          layoutCenter: ["50%", "50%"],
          layoutSize: "100%"
        },
        series: [
          {
            type: "map",
            mapType: "china",
            showLegendSymbol: false,
            zoom: 1.2,
            layoutCenter: ["50%", "50%"],
            layoutSize: "100%",
            label: {
              normal: {
                show: false /*是否城市名字*/,
                textStyle: {
                  color: "#fff"
                }
              },
              emphasis: {
                show: false
              }
            },
            itemStyle: {
              normal: {
                // borderColor: '#2a507a',//区域边框颜色
                // borderWidth :1.5
                // shadowBlur: 6,
                // shadowColor: 'rgba(39,64,110,0.6)',/*地图内的阴影*/
                // shadowOffsetY: 10,
                // shadowOffsetx: 10
              }
            },
            data: dataJb
          }
        ]
      });
      // 渐变地图
      var data = [
        {
          name: "重庆",
          value: 10
        },
        {
          name: "云南",
          value: 5
        },
        {
          name: "辽宁",
          value: 5
        },
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
      let yuan = this.$echarts.init(document.getElementById("yuan"));
      let Pie1 = this.$echarts.init(document.getElementById("Pie1"));
      let Pie2 = this.$echarts.init(document.getElementById("Pie2"));
      // let Pie3 = this.$echarts.init(document.getElementById("Pie3"));
      // 右侧最下角饼图

      // 发光圆形
      var trafficWay = [
        {
          name: "正高级教师",
          value: 20
        },
        {
          name: "高级教师",
          value: 10
        },
        {
          name: "一级教师",
          value: 30
        },
        {
          name: "二级教师",
          value: 40
        },
        {
          name: "三级教师",
          value: 50
        }
      ];

      var data = [];
      var color = [
        "#00ffff",
        "#00cfff",
        "#006ced",
        "#ffe000",
        "#ffa800",
        "#ff5b00",
        "#ff3000"
      ];
      for (var i = 0; i < trafficWay.length; i++) {
        data.push(
          {
            value: trafficWay[i].value,
            name: trafficWay[i].name,
            itemStyle: {
              normal: {
                borderWidth: 5,
                shadowBlur: 20,
                borderColor: color[i],
                shadowColor: color[i]
              }
            }
          },
          {
            value: 2,
            name: "",
            itemStyle: {
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
            }
          }
        );
      }
      var seriesOption = [
        {
          name: "",
          type: "pie",
          clockWise: false,
          radius: [105, 109],
          hoverAnimation: false,
          itemStyle: {
            normal: {
              label: {
                show: false,
                position: "outside",
                fontSize: 24,
                color: "#ddd",
                formatter: function(params) {
                  var percent = 0;
                  var total = 0;
                  for (var i = 0; i < trafficWay.length; i++) {
                    total += trafficWay[i].value;
                  }
                  percent = ((params.value / total) * 100).toFixed(0);
                  if (params.name !== "") {
                    return (
                      "教师职称：" +
                      params.name +
                      "\n" +
                      "\n" +
                      "占百分比：" +
                      percent +
                      "%"
                    );
                  } else {
                    return "";
                  }
                }
              },
              labelLine: {
                length: 20,
                length2: 50,
                show: true,
                color: "#00ffff"
              }
            }
          },
          data: data
        }
      ];
      yuan.setOption({
        color: color,
        title: {
          text: "风险评级",
          top: "46%",
          textAlign: "center",
          left: "49%",
          textStyle: {
            color: "#70c5ff",
            fontSize: 32,
            fontWeight: "400"
          }
        },
        graphic: {
          elements: [
            {
              type: "image",
              z: 3,
              style: {
                width: 178,
                height: 178
              },
              left: "center",
              top: "center",
              position: [100, 100]
            }
          ]
        },
        tooltip: {
          show: false
        },
        legend: {
          show: false,
          icon: "circle",
          orient: "horizontal",
          // x: 'left',
          data: ["正高级教师", "高级教师", "一级教师", "二级教师", "三级教师"],
          right: 340,
          bottom: 150,
          align: "right",
          textStyle: {
            color: "#fff"
            // fontSize:24,
          },
          itemGap: 20
        },
        toolbox: {
          show: false
        },
        series: seriesOption
      });
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
      var data1 = [20, 30, 20, 30]; 
      var data2 = [9, 30, 9, 60];
      var data3 = [20, 30, 20, 30];
      var data4 = [9, 30, 9, 60];
      var datacity = ["一季度", "二季度", "三季度", "四季度"];
      Pie2.setOption({
        color: ["#388BFF", "#05C3FA", "#F6931C", "#FFD52E"],
        tooltip: {
          trigger: "axis"
        },
        legend: {
          top: "8%",
          data: ["未巡检", "远程巡检", "现场巡检", "专项巡检"],
          textStyle: {
            color: "#fff",
            fontSize: this.setFontsize(0.3)
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
                fontSize: this.setFontsize(0.3),
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
                fontSize: this.setFontsize(0.3),
                color: "#fff"
              }
            },
            data: datacity
          }
        ],
        series: [
          {
            name: "未巡检",
            type: "bar",
            stack: "sum",
            barWidth: this.setFontsize(0.5),
            data: data1
          },
          {
            name: "远程巡检",
            type: "bar",
            barWidth: this.setFontsize(0.5),
            stack: "sum",
            data: data2
          },
          {
            name: "现场巡检",
            type: "bar",
            color: "#F6931C",
            stack: "sum1",
            barWidth: this.setFontsize(0.5),
            data: data3
          },
          {
            name: "专项巡检",
            type: "bar",
            color: "#FFD52E",
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
          formatter: "{b} : {c} ({d}%)"
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
            center: ["50%", "50%"],
            color: ["rgb(131,249,103)", "#FBFE27", "#FE5050", "#1DB7E5"], //'#FBFE27','rgb(11,228,96)','#FE5050'
            data: [
              {
                value: 285,
                name: "风险级"
              },
              {
                value: 410,
                name: "警示级"
              },
              {
                value: 274,
                name: "预警级"
              },
              {
                value: 235,
                name: "关注级"
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
                    fontSize: 20,
                    fontWeight: "bold",
                    lineHeight: 5
                  },
                  b: {
                    color: "rgb(98,137,169)",
                    fontSize: 15,
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
    demo2() {
      this.$router.push("/demo2");
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
  },
  created() {
    this.getData();
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
      font-size: 0.8rem;
      margin-top: 2.5%;
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
      font-size: 1.2rem;
      margin-top: 4%;
      letter-spacing: 2px;
      height: 30%;
      line-height: 1.2rem;
      color: #80ccff;
    }
  }
  width: 100vw;
  height: 100vh;
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
    height: 100%;
    display: flex;
    flex-direction: column;
    .mod1 {
      width: 100%;
      height: 25%;
      margin-bottom: 5%;
      // background-color: rgba(13, 49, 130, 0.8);
      background-image: url("../../assets/img/mod1.png");
      background-size: 100%;
      background-repeat: no-repeat;
      background-position: center;
      position: relative;
      .title {
        position: absolute;
        color: #70c5ff;
        font-size: 0.8rem;
        left: 9%;
        top: 17%;
        font-weight: 700;
      }
      .list {
        width: 80%;
        height: 50%;
        margin: 15% auto 0px;
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
            top: 40%;
            height: 30%;
            width: 100%;
            p {
              font-size: 0.8rem;
              margin: 0px;
              margin-bottom: 5%;
              line-height: 0.24rem;
            }
            span {
              font-size: 0.4rem;
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
      height: 40%;
      background-image: url("../../assets/img/mod2.png");
      background-size: 95% 95%;
      background-repeat: no-repeat;
      background-position-x: 100%;
      position: relative;
      padding: 5% 5% 8% 11%;
      display: flex;
      flex-direction: column;
      .titleBox {
        display: flex;
        flex-direction: row;
        margin-bottom: 2%;
        height: 18%;
        .title {
          color: #70c5ff;
          font-size: 0.8rem;
          font-weight: 700;
          margin-top: 2%;
          margin-left: 2%;
        }
        img {
          width: 8%;
        }
      }
      .modBox1 {
        width: 100%;
        height: 20%;
        border: 1px solid #297aae;
        margin-bottom: 2%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 2% 5% 2% 5%;
        .txt1 {
          color: #70c5ff;
          font-size: 0.8rem;
        }
        .txt2 {
          font-size: 1.4rem;
          .s1 {
            color: #ffb956;
          }
          .s2 {
            color: #495f73;
          }
          .s3 {
            color: #77c8ff;
          }
        }
      }
      .modBox2 {
        width: 100%;
        height: 20%;
        margin-bottom: 2%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        .box_l {
          width: calc(50% - 2%);
          padding: 3% 5%;
          height: 100%;
          margin-right: 2%;
          border: 1px solid #297aae;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          .txt1 {
            color: #70c5ff;
            font-size: 0.6rem;
            line-height: 0.8rem;
          }
          .txt2 {
            font-size: 0.8rem;
            .s1 {
              color: #ffb956;
            }
            .s2 {
              color: #495f73;
            }
            .s3 {
              color: #77c8ff;
            }
          }
        }
        .box_r {
          width: calc(50% - 2%);
          padding: 3% 5%;
          height: 100%;
          border: 1px solid #297aae;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          .txt1 {
            color: #70c5ff;
            font-size: 0.6rem;
            line-height: 0.8rem;
          }
          .txt2 {
            font-size: 0.8rem;
            .s1 {
              color: #ffb956;
            }
            .s2 {
              color: #495f73;
            }
            .s3 {
              color: #77c8ff;
            }
          }
        }
      }
      .modBox3 {
        .titleBox {
          display: flex;
          flex-direction: row;
          margin-bottom: 2%;
          height: 18%;
          .title {
            color: #70c5ff;
            font-size: 0.6rem;
            margin-top: 2%;
            margin-left: 2%;
          }
          img {
            width: 8%;
          }
        }
        width: 100%;
        height: 40%;
        border: 1px solid #297aae;
        position: relative;
        .bingtu {
          width: 100%;
          height: 200%;
          position: absolute;
          transform: scale(0.55);
          left: 10%;
          top: -41%;
        }
      }
    }
    .mod3 {
      .tBox {
        margin-top: 3%;
        display: flex;
        flex-direction: row;
        color: #aaddff;
        border-bottom: 1px solid #1a4786;
        padding-bottom: 2%;
        .boxchild {
          text-align: center;
          display: flex;
          flex-direction: column;
          .imgbox {
            width: 40%;
            margin: 0px auto;
          }
          width: 25%;
          .t1 {
            font-size: 0.6rem;
            margin-top: 6%;
            margin-bottom: 5%;
          }
          .t2 {
            font-size: 0.7rem;
            text-align: center;
          }
          .t3 {
            color: #77c8ff;
            font-size: 1.2rem;
          }
          .t4 {
            color: #ffb956;
            font-size: 1.2rem;
          }
        }
      }
      .titleBox {
        display: flex;
        flex-direction: row;
        margin-bottom: 2%;
        height: 18%;
        .title {
          color: #70c5ff;
          font-size: 0.8rem;
          font-weight: 700;
          margin-top: 2%;
          margin-left: 2%;
        }
        img {
          width: 8%;
        }
      }
      width: 100%;
      height: 30%;
      margin-top: 2%;
      background-image: url("../../assets/img/mod3.png");
      background-size: 95% 100%;
      background-repeat: no-repeat;
      background-position-x: 100%;
      position: relative;
      padding: 5% 5% 5% 11%;
      display: flex;
      flex-direction: column;
    }
  }
  .box2 {
    width: calc(48% - 40px);
    margin: 0px 20px;
    height: 100%;
    display: flex;
    flex-direction: column;
    .modBox1 {
      height: 60%;
      background-image: url("../../assets/img/box2mod1.png");
      background-size: 100% 100%;
      background-repeat: no-repeat;
      position: relative;
      margin-top: 6%;
      .diqiuyi {
        width: 60%;
        left: 50%;
        margin-left: -30%;
        top: 10%;
        position: absolute;
        z-index: 998;
        animation: rotate 9s linear infinite;
      }
      .bg {
        width: 100%;
        height: 102%;
        position: absolute;
        z-index: 999;
        left: -0.5%;
        top: -1%;
        background-image: url("../../assets/img/box2mod2.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        .title {
          position: absolute;
          color: #70c5ff;
          font-size: 0.8rem;
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
      margin-top: 3%;
      height: 30%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
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
            font-size: 0.6rem;
          }
        }
        width: 49%;
        background-image: url("../../assets/img/mod3.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        padding: 3%;
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
            font-size: 0.8rem;
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
  }
  .box3 {
    width: 26%;
    height: 100%;
    .modr1 {
      width: 100%;
      height: 25%;
      margin-bottom: 5%;
      background-image: url("../../assets/img/modR1.png");
      background-size: 100%;
      background-repeat: no-repeat;
      background-position: center;
      position: relative;
      display: flex;
      flex-direction: column;
      .title {
        position: absolute;
        color: #70c5ff;
        font-size: 0.8rem;
        right: 9%;
        top: 17%;
        font-weight: 700;
      }
      .txt {
        color: #70c5ff;
        font-size: 0.7rem;
        width: 80%;
        height: 55%;
        overflow: hidden;
        margin: 15% auto 0px;
        line-height: 1.2rem;
      }
    }
    // 裕农通风险管理
    .modr2 {
      display: flex;
      flex-direction: column;
      .zhexiantu {
        width: 220%;
        height: 190%;
        position: absolute;
        transform: scale(0.4);
        left: -60%;
        top: -43%;
      }
      .titleBox {
        display: flex;
        flex-direction: row;
        margin-bottom: 2%;
        height: 18%;
        .title {
          color: #70c5ff;
          font-size: 0.8rem;
          font-weight: 700;
          margin-top: 2%;
          margin-left: 2%;
        }
        img {
          width: 8%;
        }
      }
      width: 100%;
      height: 40%;
      background-image: url("../../assets/img/mod2.png");
      background-size: 95% 95%;
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
        .title {
          color: #70c5ff;
          font-size: 0.8rem;
          font-weight: 700;
          margin-top: 2%;
          margin-left: 2%;
        }
        img {
          width: 8%;
        }
      }
      width: 100%;
      height: 30%;
      margin-top: 2%;
      background-image: url("../../assets/img/mod3.png");
      background-size: 95% 100%;
      background-repeat: no-repeat;
      position: relative;
      padding: 5% 5% 5% 11%;
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
.piebox {
  height: 100%;
  position: relative;
  .t1 {
    width: 35%;
    height: 45%;
    position: absolute;
    top: 0px;
    left: 0px;
    .title {
      color: #70c5ff;
      font-size: 0.24rem;
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
          font-size: 0.24rem;
          padding: 0px;
          float: left;
        }
        span {
          color: #ffb956;
          font-size: 0.24rem;
          float: right;
        }
        margin-bottom: 5%;
      }
    }
  }
  .t2 {
    width: 35%;
    height: 45%;
    position: absolute;
    right: 0px;
    top: 0px;
    .title {
      color: #70c5ff;
      font-size: 0.24rem;
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
          font-size: 0.24rem;
          padding: 0px;
          float: left;
        }
        span {
          color: #ffb956;
          font-size: 0.24rem;
          float: right;
        }
        margin-bottom: 5%;
      }
    }
  }
  .t3 {
    .title {
      color: #70c5ff;
      font-size: 0.24rem;
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
          font-size: 0.24rem;
          padding: 0px;
          float: left;
        }
        span {
          color: #ffb956;
          font-size: 0.24rem;
          float: right;
        }
        margin-bottom: 5%;
      }
    }
    width: 35%;
    height: 45%;
    position: absolute;
    bottom: 0px;
    left: 0px;
  }
  .t4 {
    .title {
      color: #70c5ff;
      font-size: 0.24rem;
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
          font-size: 0.24rem;
          padding: 0px;
          float: left;
        }
        span {
          color: #ffb956;
          font-size: 0.24rem;
          float: right;
        }
        margin-bottom: 5%;
      }
    }
    width: 35%;
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
  top: -28%;
  transform: scale(0.35);
}
.sjx {
  width: 24%;
  top: 31%;
  left: 53%;
  margin-left: -12%;
  position: absolute;
  animation: rotate 5s linear infinite;
}
.seamless-warp {
  height: 80%;
  overflow: hidden;
  .itemhua {
    padding: 0px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    li {
      width: 48%;
      margin-bottom: 3%;
      margin-top: 2%;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 5%;
      padding: 2%;
      .tit {
        color: #fff;
        font-size: 0.6rem;
        margin-top: 2%;
        margin-bottom: 5%;
      }
      .txt {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        .box {
          width: 33.33%;
          font-size: 0.5rem;
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
    height: 5rem;
    margin-top: 1rem;
    li {
      width: 10rem;
      height: 100%;
      margin-right: 0.6rem;
      .tit {
        color: #fff;
        font-size: 0.6rem;
        margin-bottom: 2%;
      }
      .txt {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 5%;
        height: 4rem;
        .paihan {
          width: 3rem;
          height: 3rem;
          margin-top: 0.5rem;
          margin-left: 0.5rem;
          border: 0.01rem solid #2988c1;
          font-size: 0.8rem;
          border-radius: 5%;
          color: #ffb956;
          text-align: center;
          line-height: 3rem;
          background: rgba(255, 255, 255, 0.1);
        }
        .boxP {
          display: flex;
          flex-direction: column;
          margin-top: 0.5rem;
          margin-right: 0.5rem;
          margin-left: 0.2rem;
          .box {
            width: 5.8rem;
            font-size: 0.5rem;
            text-align: center;
            background: rgba(255, 255, 255, 0.1);
            height: 0.9rem;
            margin-bottom: 0.1rem;
            line-height: 0.9rem;
            padding-left: 0.2rem;
            color: #fff;
            border-left: 1px solid #2988c1;
            .t1 {
              color: #fff;
              float: left;
            }
            .t2 {
              color: #ffb956;
              float: right;
              margin-right: 0.1rem;
            }
          }
        }
      }
    }
  }
}
</style>

