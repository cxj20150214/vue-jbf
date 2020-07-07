<template>
  <div class="bg">
    <div class="title_time">
      <p class="tit">裕农通智能风控</p>
      <p class="time">{{date}}</p>
    </div>
    <div class="box1">
      <div class="mod1">
        <p class="title">准入风险评级</p>
        <ul class="list">
          <li>
            <img class="diqiu" src="../../assets/img/diqiu1.png" alt />
            <div class="txt">
              <p>1090</p>
              <span>进件数</span>
            </div>
            <img class="jt" src="../../assets/img/jt.png" alt />
          </li>
          <li>
            <img class="diqiu" src="../../assets/img/diqiu1.png" alt />
            <div class="txt">
              <p>165</p>
              <span>通过数</span>
            </div>
            <img class="jt" src="../../assets/img/jt.png" alt />
          </li>
          <li>
            <img class="diqiu" src="../../assets/img/diqiu1.png" alt />
            <div class="txt">
              <p>40%</p>
              <span>通过率</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="mod2">
        <div class="titleBox">
          <img src="../../assets/img/sj.png" alt />
          <p class="title">风险评级数据</p>
        </div>
        <div class="modBox1">
          <p class="txt1">拒件数量/拒件率</p>
          <p class="txt2">
            <span class="s1">90个</span>
            <span class="s2">/</span>
            <span class="s3">87%</span>
          </p>
        </div>
        <div class="modBox2">
          <div class="box_l">
            <p class="txt1">本年</p>
            <p class="txt2">
              <span class="s1">90</span>
              <span class="s2">/</span>
              <span class="s3">87%</span>
            </p>
          </div>
          <div class="box_r">
            <p class="txt1">本月</p>
            <p class="txt2">
              <span class="s1">12</span>
              <span class="s2">/</span>
              <span class="s3">80%</span>
            </p>
          </div>
        </div>
        <div class="modBox3">
          <div class="titleBox">
            <p class="title">本月拒件占比</p>
          </div>
          <div class="bingtu" id="Pie"></div>
        </div>
      </div>
      <div class="mod3">
        <div class="titleBox">
          <img src="../../assets/img/sj1.png" alt />
          <p class="title">拒件数据统计</p>
        </div>
        <div class="tBox">
          <div class="boxchild">
            <img class="imgbox" src="../../assets/img/sq.png" alt />
            <p class="t2">本年统计</p>
          </div>
          <div class="boxchild">
            <p class="t1">征信</p>
            <p class="t3">299个</p>
          </div>
          <div class="boxchild">
            <p class="t1">黑名单</p>
            <p class="t3">187个</p>
          </div>
          <div class="boxchild">
            <p class="t1">外部数据名单</p>
            <p class="t4">255个</p>
          </div>
        </div>
        <div class="tBox">
          <div class="boxchild">
            <img class="imgbox" src="../../assets/img/bld.png" alt />
            <p class="t2">本月统计</p>
          </div>
          <div class="boxchild">
            <p class="t1">征信</p>
            <p class="t3">299个</p>
          </div>
          <div class="boxchild">
            <p class="t1">黑名单</p>
            <p class="t3">187个</p>
          </div>
          <div class="boxchild">
            <p class="t1">外部数据名单</p>
            <p class="t4">255个</p>
          </div>
        </div>
      </div>
    </div>
    <div class="box2">
      <div class="modBox1">
        <!-- <img class="diqiuyi" src="../../assets/img/diqiuyi.png" alt /> -->
        <div class="bg">
          <!-- <div class="ditu" id="ditu"></div> -->
          <div class="ditu" id="ditu1"></div>
          <p class="title">全国风险预警大数据统计图</p>
        </div>
      </div>
      <div class="modBox2">
        <div class="box1">
          <div class="titleBox">
            <img src="../../assets/img/sj1.png" alt />
            <p class="title">本月风险存量占比</p>
          </div>
          <div class="bingtu" id="Pie1"></div>
        </div>
        <div class="box1">
          <div class="titleBox">
            <img src="../../assets/img/sj.png" alt />
            <p class="title">服务点</p>
          </div>
          <!-- 跑马灯 -->
          <ul class="phList">
            <li>1.厦门市湖里区吕岭路与金泰路交叉口</li>
            <li>2.湖北省武汉市武昌区友谊大道368号</li>
            <li>3.武汉市武昌区中南路9号中商广场B1</li>
            <li>4.民主路786号华银大厦10层1006</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="box3">
      <div class="modr1">
        <p class="title">实时公告通知</p>
        <p
          class="txt"
        >中国建设银行（China Construction Bank）成立于1954年10月1日。总行位于北京金融大街25号， [1-2] 是中央管理的大型国有银行， [3-4] 国家副部级单位。</p>
      </div>
      <div class="modr2">
        <div class="titleBox">
          <img src="../../assets/img/sj.png" alt />
          <p class="title">本月风险预警数据</p>
        </div>
        <div class="zhexiantu" id="Pie2"></div>
      </div>
      <div class="modr3">
        <div class="titleBox">
          <img src="../../assets/img/sj.png" alt />
          <p class="title">巡检数据统计</p>
        </div>
        <div class="zhuzhuangtu" id="Pie3"></div>
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
  name: "demo2",
  data() {
    return {
      drawer: false,
      listArr: [], //城市json
      date: new Date()
    };
  },
  methods: {
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
              "0": "高级预警",
              "10": "中级预警",
              "20": "初级预警"
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
      // var data = [
      //   {
      //     name: "重庆",
      //     value: 10
      //   },
      //   {
      //     name: "云南",
      //     value: 5
      //   },
      //   {
      //     name: "辽宁",
      //     value: 5
      //   },
      //   {
      //     name: "黑龙江",
      //     value: 10
      //   },
      //   {
      //     name: "广西",
      //     value: 5
      //   },
      //   {
      //     name: "甘肃",
      //     value: 5
      //   },
      //   {
      //     name: "山西",
      //     value: 5
      //   },
      //   {
      //     name: "陕西",
      //     value: 5
      //   },
      //   {
      //     name: "吉林",
      //     value: 5
      //   },
      //   {
      //     name: "贵州",
      //     value: 10
      //   },
      //   {
      //     name: "新疆",
      //     value: 0
      //   },
      //   {
      //     name: "青海",
      //     value: 0
      //   },
      //   {
      //     name: "西藏",
      //     value: 5
      //   },
      //   {
      //     name: "四川",
      //     value: 20
      //   },
      //   {
      //     name: "宁夏",
      //     value: 0
      //   },
      //   {
      //     name: "海南",
      //     value: 0
      //   },
      //   {
      //     name: "台湾",
      //     value: 0
      //   },
      //   {
      //     name: "香港",
      //     value: 30
      //   },
      //   {
      //     name: "澳门",
      //     value: 0
      //   },
      //   {
      //     name: "上海",
      //     value: 30
      //   },
      //   {
      //     name: "安徽",
      //     value: 20
      //   },
      //   {
      //     name: "江苏",
      //     value: 20
      //   },
      //   {
      //     name: "浙江",
      //     value: 30
      //   },
      //   {
      //     name: "北京",
      //     value: 30
      //   },
      //   {
      //     name: "天津",
      //     value: 20
      //   },
      //   {
      //     name: "河北",
      //     value: 10
      //   },
      //   {
      //     name: "河南",
      //     value: 10
      //   },
      //   {
      //     name: "内蒙古",
      //     value: 10
      //   },
      //   {
      //     name: "湖南",
      //     value: 20
      //   },
      //   {
      //     name: "山东",
      //     value: 10
      //   },
      //   {
      //     name: "江西",
      //     value: 20
      //   },
      //   {
      //     name: "湖北",
      //     value: 20
      //   },
      //   {
      //     name: "福建",
      //     value: 10
      //   },
      //   {
      //     name: "广东",
      //     value: 30
      //   }
      // ];
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
      let Pie = this.$echarts.init(document.getElementById("Pie"));
      let Pie1 = this.$echarts.init(document.getElementById("Pie1"));
      let Pie2 = this.$echarts.init(document.getElementById("Pie2"));
      let Pie3 = this.$echarts.init(document.getElementById("Pie3"));
      // 折线图
      Pie3.setOption({
        tooltip: {
          //提示框组件
          trigger: "axis",
          formatter: "{b}<br />{a0}: {c0}<br />{a1}: {c1}",
          axisPointer: {
            type: "shadow",
            label: {
              backgroundColor: "#6a7985"
            }
          },
          textStyle: {
            color: "#fff",
            fontStyle: "normal",
            fontFamily: "微软雅黑",
            fontSize: 18
          }
        },
        grid: {
          left: "10%",
          right: "10%",
          bottom: "10%",
          top: "40%",
          //	padding:'0 0 10 0',
          containLabel: true
        },
        legend: {
          //图例组件，颜色和名字
          right: "10%",
          top: "30%",
          itemGap: 16,
          itemWidth: 18,
          itemHeight: 10,
          data: [
            {
              name: "本年"
              //icon:'image://../wwwroot/js/url2.png', //路径
            },
            {
              name: "本月"
            }
          ],
          textStyle: {
            color: "#a8aab0",
            fontStyle: "normal",
            fontFamily: "微软雅黑",
            fontSize: 16
          }
        },
        xAxis: [
          {
            type: "category",
            //	boundaryGap: true,//坐标轴两边留白
            data: [
              "远程巡检",
              "现场巡检",
              "专项巡检",
              "应巡检服务点数",
              "巡检数量",
              "巡检率"
            ],
            axisLabel: {
              //坐标轴刻度标签的相关设置。
              //		interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
              //	margin:15,
              textStyle: {
                color: "#078ceb",
                fontStyle: "normal",
                fontFamily: "微软雅黑",
                fontSize: 12
              },
              rotate: 50
            },
            axisTick: {
              //坐标轴刻度相关设置。
              show: false
            },
            axisLine: {
              //坐标轴轴线相关设置
              lineStyle: {
                color: "#fff",
                opacity: 0.2
              }
            },
            splitLine: {
              //坐标轴在 grid 区域中的分隔线。
              show: false
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            splitNumber: 5,
            axisLabel: {
              textStyle: {
                color: "#a8aab0",
                fontStyle: "normal",
                fontFamily: "微软雅黑",
                fontSize: 12
              }
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: ["#fff"],
                opacity: 0.06
              }
            }
          }
        ],
        series: [
          {
            name: "本年",
            type: "bar",
            data: [10, 15, 30, 45, 55, 60],
            barWidth: 25,
            barGap: 0, //柱间距离
            // label: {//图形上的文本标签
            //     normal: {
            //       show: true,
            //       position: 'top',
            //       textStyle: {
            //           color: '#a8aab0',
            //           fontStyle: 'normal',
            //           fontFamily: '微软雅黑',
            //           fontSize: 12,
            //       },
            //     },
            // },
            itemStyle: {
              normal: {
                show: true,
                barBorderRadius: 0,
                borderWidth: 0,
                color: "#77C8FF"
              }
            }
          },
          {
            name: "本月",
            type: "bar",
            data: [8, 5, 25, 30, 35, 55, 62, 78, 65, 55, 60, 45, 42, 15, 12, 5],
            barWidth: 25,
            barGap: 0, //柱间距离
            // label: {//图形上的文本标签
            //     normal: {
            //       show: true,
            //       position: 'top',
            //       textStyle: {
            //           color: '#a8aab0',
            //           fontStyle: 'normal',
            //           fontFamily: '微软雅黑',
            //           fontSize: 12,
            //       },
            //     },
            // },
            itemStyle: {
              normal: {
                show: true,
                barBorderRadius: 0,
                borderWidth: 0
              }
            }
          }
        ]
      });
      Pie2.setOption({
        title: {},
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["本年", "本月"],
          textStyle: {
            color: "#fff",
            fontSize: 24
          }
        },
        toolbox: {
          show: false,

          feature: {
            mark: {
              show: true
            },
            dataView: {
              show: true,
              readOnly: false
            },
            magicType: {
              show: true,
              type: ["line", "bar"]
            },
            restore: {
              show: true
            },
            saveAsImage: {
              show: true
            }
          }
        },
        calculable: true,
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: ["风险级", "警示及", "预警级", "关注级"],
            axisLabel: {
              show: true,
              textStyle: {
                color: "#ffffff", //X轴文字颜色
                fontSize: 24
              }
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            axisLabel: {
              formatter: "{value} ",
              color: "#ffffff",
              textStyle: {
                fontSize: 24
              }
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#ccc"
              }
            }
          }
        ],
        series: [
          {
            name: "本年",
            type: "line",
            data: [1, 4, 2, 5, 1, 2, 1],
            lineStyle: {
              normal: {
                width: 8,
                color: {
                  type: "linear",

                  colorStops: [
                    {
                      offset: 0,
                      color: "#57BD9F" // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#19BC8C" // 100% 处的颜色
                    }
                  ],
                  globalCoord: false // 缺省为 false
                },
                shadowColor: "rgba(72,216,191, 0.3)",
                shadowBlur: 6,
                shadowOffsetY: 10
              }
            },
            itemStyle: {
              normal: {
                color: "#57BD9F",
                borderWidth: 10,
                borderColor: "#57BD9F"
              }
            },
            markPoint: {
              data: [
                {
                  type: "max",
                  name: "最大值"
                },
                {
                  type: "min",
                  name: "最小值"
                }
              ]
            }
          },
          {
            name: "本月",
            type: "line",
            data: [0, 1, 1, 3, 2],
            lineStyle: {
              normal: {
                width: 8,
                color: {
                  type: "linear",

                  colorStops: [
                    {
                      offset: 0,
                      color: "#7597EB" // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#638BEE" // 100% 处的颜色
                    }
                  ],
                  globalCoord: false // 缺省为 false
                },
                shadowColor: "rgba(72,216,191, 0.3)",
                shadowBlur: 6,
                shadowOffsetY: 10
              }
            },
            itemStyle: {
              normal: {
                color: "#7597EB",
                borderWidth: 10,
                borderColor: "#7597EB"
              }
            },
            markPoint: {
              data: [
                {
                  type: "max",
                  name: "最大值"
                },
                {
                  type: "min",
                  name: "最小值"
                }
              ]
            }
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
      Pie.setOption({
        title: {
          text: "百分比",
          x: "center",
          y: "center",
          textStyle: {
            fontSize: 8,
            color: "#fff"
          }
        },
        tooltip: {
          trigger: "item",
          textStyle: {
            fontSize: 10
          }
        },
        series: [
          {
            type: "pie",
            center: ["50%", "50%"],
            radius: ["24%", "45%"],
            clockwise: true,
            avoidLabelOverlap: true,
            hoverOffset: 10,
            itemStyle: {
              normal: {
                color: function(params) {
                  return colorList[params.dataIndex];
                }
              }
            },
            label: {
              normal: {
                textStyle: {
                  fontSize: 16
                }
              },
              show: true,
              position: "outside",
              formatter: "{a|{b}：{d}%}\n{hr|}",
              rich: {
                hr: {
                  backgroundColor: "t",
                  borderRadius: 3,
                  width: 3,
                  height: 3,
                  padding: [3, 3, 0, -12]
                },
                a: {
                  padding: [-30, 15, -20, 15]
                }
              }
            },
            labelLine: {
              normal: {
                length: 20,
                length2: 30,
                lineStyle: {
                  width: 1
                }
              }
            },
            data: [
              {
                name: "征信类",
                value: 5600
              },
              {
                name: "黑名单类",
                value: 3600
              },
              {
                name: "外部数据",
                value: 1500
              }
            ]
          }
        ]
      });
    },
    // 链接跳转
    echart() {
      this.$router.push("/echart");
    },
    demo2() {
      this.$router.push("/demo2");
    },
    demo3() {
      this.$router.push("/demo3");
    },
    logout() {
      this.$store.dispatch("user/logout").then(() => {
        this.$router.push(`/login?redirect=${this.$route.fullPath}`);
      });
    }
  },
  mounted() {
    this.piedemo();
    this.DrawMap();
    let _this = this;
    this.timer = setInterval(function() {
      _this.date = new Date().toLocaleString();
    });
  },
  created() {
    this.getData();
  },
  beforeDestroy: function() {
    if (this.timer) {
      clearInterval(this.timer);
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
        width: 200%;
        height: 200%;
        position: absolute;
        transform: scale(0.35);
        left: -60%;
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
      height: 40%;
      background-image: url("../../assets/img/mod2.png");
      background-size: 95% 95%;
      background-repeat: no-repeat;
      position: relative;
      padding: 5% 5% 11% 8%;
    }
    .modr3 {
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
</style>

