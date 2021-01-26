<template>
  <div class="bg">
    <div class="title_time">
      <p class="tit">裕农通普惠金融服务点智能风控</p>
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
              当年
            </p>
          </div>
          <el-select
            class="ccbSelect ccbSelect1"
            v-model="valueSelect1"
            placeholder="历史年份"
            @change="getJGH1"
          >
            <el-option
              v-for="item in options1"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <el-select
            class="ccbSelect"
            v-model="valueSelect"
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
        </div>
        <p class="title">准入控制</p>
        <ul class="list">
          <li>
            <img class="diqiu" src="../../assets/img/diqiu2.png" alt />
            <div class="txt">
              <p class="p1">{{ this.zrpjData1 }}</p>
              <span>进件数</span>
            </div>
            <img class="jt" src="../../assets/img/jt1.png" alt />
          </li>
          <li>
            <img class="diqiu" src="../../assets/img/diqiu2.png" alt />
            <div class="txt">
              <p class="p2">{{ this.zrpjData2 }}</p>
              <span>通过数</span>
            </div>
            <img class="jt" src="../../assets/img/jt1.png" alt />
          </li>
          <li>
            <img class="diqiu" src="../../assets/img/diqiu2.png" alt />
            <div class="txt">
              <p class="p3">{{ this.zrpjData3 }}%</p>
              <span>通过率</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="mod2 mod2_1">
        <div class="titleBox">
          <img src="../../assets/img/sj1.png" alt />
          <p class="title">拒件分布</p>
        </div>
        <div class="zrBox">
          <div class="zrPie" id="zrPie"></div>
        </div>
      </div>
      <div class="mod2">
        <div class="titleBox">
          <img src="../../assets/img/sj1.png" alt />
          <p class="title">存量评级</p>
        </div>
        <div class="clBox">
          <div class="jdt">
            <ul class="jdt_list">
              <li>
                <p>风险级</p>
                <el-progress
                  class="jdt_box"
                  :text-inside="true"
                  :stroke-width="14"
                  :percentage="this.fxjData"
                  status="exception"
                ></el-progress>
                <p>数量:370</p>
              </li>
              <li>
                <p>警示级</p>
                <el-progress
                  class="jdt_box "
                  :text-inside="true"
                  :stroke-width="14"
                  :percentage="this.jsjData"
                  status="warning"
                ></el-progress>
                <p>数量:370</p>
              </li>
              <li>
                <p>预警级</p>
                <el-progress
                  class="jdt_box jdt_box_1"
                  :text-inside="true"
                  :stroke-width="14"
                  :percentage="this.yjjData"
                  status="success"
                ></el-progress>
                <p>数量:370</p>
              </li>
              <li>
                <p>关注级</p>
                <el-progress
                  class="jdt_box"
                  :text-inside="true"
                  :stroke-width="14"
                  :percentage="this.gzjData"
                ></el-progress>
                <p>数量:370</p>
              </li>
              <li>
                <p>正常级</p>
                <el-progress
                  class="jdt_box"
                  :text-inside="true"
                  :stroke-width="14"
                  :percentage="this.zcjData"
                  status="success"
                  color="#52AF52"
                ></el-progress>
                <p>数量:370</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="box2">
      <div class="modBox1">
        <div class="bg">
          <div class="ditu" id="ditu1"></div>
          <p class="title">{{ province }}{{ dataType }}大数据统计</p>
          <p class="back" v-show="showShen" @click="toChina">返回</p>
          <!-- 跑马灯 -->
          <vue-seamless-scroll
            :class-option="optionscroll1"
            :data="listData1"
            class="seamless-warp1"
          >
            <ul class="itemhua">
              <li v-for="item in listData1">
                <!-- <div class="tit">裕农通-福建省分行</div> -->
                <div class="txt">
                  <!-- <div class="paihan">NO {{ item.no }}</div> -->
                  <div class="boxP">
                    <div class="box">
                      <p class="t1">裕农通-福建省分行</p>
                    </div>
                    <div class="box">
                      <p class="t1">总数</p>
                      <p class="t2">{{ item.data1 }}</p>
                    </div>
                    <!-- <div class="box">
                      <p class="t1">已处理数</p>
                      <p class="t2">{{item.data2}}</p>
                    </div>
                    <div class="box">
                      <p class="t1">处理率</p>
                      <p class="t2">{{item.data3}}</p>
                    </div> -->
                  </div>
                </div>
              </li>
            </ul>
          </vue-seamless-scroll>
        </div>
      </div>
      <div class="modBox2">
        <div class="box1">
          <div class="ybpname">
            <p>准入通过率</p>
            <p>存量低险率</p>
            <p>预警处置率</p>
            <p>巡检通过率</p>
          </div>
          <div class="ybpPie" id="ybpPie"></div>
        </div>
      </div>
    </div>
    <div class="box3">
      <div class="modr1">
        <p class="jiedian_tit">当前位置：{{ province + selectTime }}</p>
        <p class="title">风险预警</p>
        <div class="yjBox">
          <div class="yjPie" id="Pie2"></div>
        </div>
      </div>
      <div class="modr2">
        <div class="titleBox">
          <img src="../../assets/img/sj.png" alt />
          <p class="title">风险处置</p>
        </div>
        <div class="zhexiantu" id="yjPie"></div>
      </div>
      <div class="modr3">
        <div class="titleBox">
          <img src="../../assets/img/sj.png" alt />
          <p class="title">定期巡检</p>
          <!-- <p :class="{ active: showXJ == 1 }" class="title_all" @click="clAll">
            巡检总数
          </p>
          x
          <p :class="{ active: showXJ == 2 }" class="title_cll" @click="cll">
            巡检完成率
          </p> -->
        </div>
        <ul class="xjTitle">
          <li>专项</li>
          <li>远程</li>
          <li>现场</li>
        </ul>
        <div class="bingtu" id="PieXJ"></div>
        <!-- <div class="bingtu" id="Pie1" v-show="chuliliang"></div>
        <div class="bingtu" id="Pie4" v-show="chulilv"></div> -->
      </div>
    </div>
    <div class="box4">
      <div class="box4_tab">
        <p :class="{ active: shows == 3 }" class="title_all" @click="clickZR()">
          准入控制
        </p>
        <p :class="{ active: shows == 2 }" class="title_all" @click="clickCL()">
          存量评级
        </p>
        <p :class="{ active: shows == 1 }" class="title_all" @click="clickYJ()">
          预警处置
        </p>
        <p :class="{ active: shows == 4 }" class="title_all" @click="clickXJ()">
          定期巡检
        </p>
      </div>
      <div class="box4Pie" id="box4Pie"></div>
    </div>
  </div>
</template>
<script>
import "echarts/map/js/china.js";
import "echarts/map/js/province/fujian.js";
import "echarts/map/js/province/anhui.js";
import "echarts/map/js/province/aomen.js";
import "echarts/map/js/province/beijing.js";
import "echarts/map/js/province/chongqing.js";
import "echarts/map/js/province/gansu.js";
import "echarts/map/js/province/guangdong.js";
import "echarts/map/js/province/guangxi.js";
import "echarts/map/js/province/guizhou.js";
import "echarts/map/js/province/hainan.js";
import "echarts/map/js/province/hebei.js";
import "echarts/map/js/province/heilongjiang.js";
import "echarts/map/js/province/henan.js";
import "echarts/map/js/province/hubei.js";
import "echarts/map/js/province/hunan.js";
import "echarts/map/js/province/jiangsu.js";
import "echarts/map/js/province/jiangxi.js";
import "echarts/map/js/province/jilin.js";
import "echarts/map/js/province/liaoning.js";
import "echarts/map/js/province/neimenggu.js";
import "echarts/map/js/province/ningxia.js";
import "echarts/map/js/province/qinghai.js";
import "echarts/map/js/province/shandong.js";
import "echarts/map/js/province/shanghai.js";
import "echarts/map/js/province/shanxi.js";
import "echarts/map/js/province/shanxi1.js";
import "echarts/map/js/province/sichuan.js";
import "echarts/map/js/province/taiwan.js";
import "echarts/map/js/province/tianjin.js";
import "echarts/map/js/province/xianggang.js";
import "echarts/map/js/province/xinjiang.js";
import "echarts/map/js/province/xizang.js";
import "echarts/map/js/province/yunnan.js";
import "echarts/map/js/province/zhejiang.js";
// import obj from "echarts/map/json/province/shanxi1.json";
import "echarts-liquidfill/src/liquidFill.js";
export default {
  name: "demo8",
  data() {
    return {
      // 页面渲染
      zrpjData1: 1500, //准入控制
      zrpjData2: 900,
      zrpjData3: 60,
      // 跑马灯
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
      ],
      // 散点数据
      dituData1: [
        {
          name: "北京",
          value: 116,
          id: 2222222
        },
        {
          name: "天津",
          value: 116,
          id: 2222222
        },
        {
          name: "重庆",
          value: 116,
          id: 2222222
        },
        {
          name: "厦门",
          value: 116,
          id: 2222222
        },
        {
          name: "深圳",
          value: 116,
          id: 2222222
        },
        {
          name: "苏州",
          value: 116,
          id: 2222222
        },
        {
          name: "大连",
          value: 116,
          id: 2222222
        },
        {
          name: "青岛",
          value: 116,
          id: 2222222
        },
        {
          name: "三峡",
          value: 116,
          id: 2222222
        }
      ],
      zrData: [
        //拒件分布
        {
          name: "征信类",
          value: "40"
        },
        {
          name: "黑名单类",
          value: "50"
        },
        {
          name: "内部数据名单类",
          value: "60"
        },
        {
          name: "外部数据名单类",
          value: "70"
        }
      ],
      shuiqiuData: 0.8, //存量评级
      fxjData: 20,
      jsjData: 45,
      yjjData: 60,
      gzjData: 30,
      zcjData: 40,
      zrtglData: 80, //仪表盘
      cldxlData: 90,
      yjczlData: 40,
      xjtglData: 60,
      fxyjData: [
        //风险预警
        {
          name: "风险级",
          value: 80,
          color: "#F56C6C"
        },
        {
          name: "警示级",
          value: 70,
          color: "#E6A23C"
        },
        {
          name: "预警级",
          value: 60,
          color: "#FFD52E"
        },
        {
          name: "关注级",
          value: 50,
          color: "#409EFF"
        }
      ],
      fxyjData1: [
        //风险预警
        {
          name: "风险级",
          value: 20,
          color: "#F56C6C"
        },
        {
          name: "警示级",
          value: 30,
          color: "#E6A23C"
        },
        {
          name: "预警级",
          value: 40,
          color: "#FFD52E"
        },
        {
          name: "关注级",
          value: 50,
          color: "#409EFF"
        }
      ],
      fxczData1: [90, 80, 65, 40], //风险处置
      fxczData2: [40, 70, 40, 30],
      dqxjData1: [
        //定期巡检
        {
          value: 400,
          name: "远程巡检"
        },
        {
          value: 350,
          name: "现场巡检"
        },
        {
          value: 200,
          name: "专项巡检"
        }
      ],
      ycxjData: 8.1,
      xcxjData: 55.2844444444,
      zxxjData: 80,
      zhihanglist: [
        //box4pie数据
        "重庆",
        "云南",
        "辽宁",
        "黑龙江",
        "广西",
        "甘肃",
        "山西",
        "陕西",
        "吉林",
        "贵州",
        "新疆",
        "青海",
        "西藏"
      ],
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
      //默认参数
      box4PieData: ["进件数", "通过数", "准入通过率(%)"],
      dataType: "准入控制",
      selectTime: "当日",
      options1: [
        {
          value: "选项0",
          label: "选择年份"
        },
        {
          value: "选项1",
          label: "2020年"
        },
        {
          value: "选项2",
          label: "2019年"
        },
        {
          value: "选项3",
          label: "2018年"
        }
      ],
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
          label: "浙江"
        }
      ],
      dituData: [
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
          value: 20
        },
        {
          name: "甘肃",
          value: 20
        },
        {
          name: "山西",
          value: 10
        },
        {
          name: "陕西",
          value: 0
        },
        {
          name: "吉林",
          value: 40
        },
        {
          name: "贵州",
          value: 20
        },
        {
          name: "新疆",
          value: 0
        },
        {
          name: "青海",
          value: 10
        },
        {
          name: "西藏",
          value: 0
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
          value: 0
        },
        {
          name: "澳门",
          value: 0
        },
        {
          name: "上海",
          value: 100
        },
        {
          name: "安徽",
          value: 150
        },
        {
          name: "江苏",
          value: 140
        },
        {
          name: "浙江",
          value: 120
        },
        {
          name: "北京",
          value: 80
        },
        {
          name: "天津",
          value: 60
        },
        {
          name: "河北",
          value: 0
        },
        {
          name: "河南",
          value: 0
        },
        {
          name: "内蒙古",
          value: 0
        },
        {
          name: "湖南",
          value: 0
        },
        {
          name: "山东",
          value: 180
        },
        {
          name: "江西",
          value: 160
        },
        {
          name: "湖北",
          value: 0
        },
        {
          name: "福建",
          value: 80,
          id: 350000
        },
        {
          name: "广东",
          value: 40
        }
      ],
      showShen: false,
      valueSelect: "全国",
      valueSelect1: "历史年份",
      mapName: "china",
      province: "全国",
      shows: 3,
      showXJ: 1,
      showDate: 1,
      listArr: [], //城市json
      nowDate: "", // 当前日期
      nowTime: "", // 当前时间
      nowWeek: "", // 当前星期
      chuliliang: true,
      chulilv: false
    };
  },
  computed: {
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
    // 返回中国地图
    toChina() {
      this.dituData1 = [
        {
          name: "北京",
          value: 116,
          id: 2222222
        },
        {
          name: "天津",
          value: 116,
          id: 2222222
        },
        {
          name: "重庆",
          value: 116,
          id: 2222222
        },
        {
          name: "厦门",
          value: 116,
          id: 2222222
        },
        {
          name: "深圳",
          value: 116,
          id: 2222222
        },
        {
          name: "苏州",
          value: 116,
          id: 2222222
        },
        {
          name: "大连",
          value: 116,
          id: 2222222
        },
        {
          name: "青岛",
          value: 116,
          id: 2222222
        },
        {
          name: "三峡",
          value: 116,
          id: 2222222
        }
      ];
      this.dituData = [
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
          value: 20
        },
        {
          name: "甘肃",
          value: 20
        },
        {
          name: "山西",
          value: 10
        },
        {
          name: "陕西",
          value: 0
        },
        {
          name: "吉林",
          value: 40
        },
        {
          name: "贵州",
          value: 20
        },
        {
          name: "新疆",
          value: 0
        },
        {
          name: "青海",
          value: 10
        },
        {
          name: "西藏",
          value: 0
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
          value: 0
        },
        {
          name: "澳门",
          value: 0
        },
        {
          name: "上海",
          value: 100
        },
        {
          name: "安徽",
          value: 150
        },
        {
          name: "江苏",
          value: 140
        },
        {
          name: "浙江",
          value: 120
        },
        {
          name: "北京",
          value: 80
        },
        {
          name: "天津",
          value: 60
        },
        {
          name: "河北",
          value: 0
        },
        {
          name: "河南",
          value: 0
        },
        {
          name: "内蒙古",
          value: 0
        },
        {
          name: "湖南",
          value: 0
        },
        {
          name: "山东",
          value: 180
        },
        {
          name: "江西",
          value: 160
        },
        {
          name: "湖北",
          value: 0
        },
        {
          name: "福建",
          value: 80,
          id: 350000
        },
        {
          name: "广东",
          value: 40
        }
      ];
      this.mapName = "china";
      this.DrawMap();
      this.showShen = false;
    },
    // 获取下拉框历史年份
    getJGH1(val) {
      console.log(val);
      let obj = {};
      obj = this.options.find(item => {
        return item.value === val;
      });
      let getLabel = "";
      getLabel = obj.label;
      // this.province = getLabel;
    },
    // 获取下拉框机构号和名称
    getJGH(val) {
      console.log(val);
      let obj = {};
      obj = this.options.find(item => {
        return item.value === val;
      });
      let getLabel = "";
      getLabel = obj.label;
      this.province = getLabel;
    },
    // 当月 当日 当年
    clickDR() {
      this.showDate = 1;
      this.selectTime = "当日";
    },
    clickDY() {
      this.showDate = 2;
      this.selectTime = "当月";
    },
    clickDN() {
      this.showDate = 3;
      this.selectTime = "当年";
    },
    // 预警 存量 准入 巡检  切换
    clickYJ() {
      this.shows = 1;
      this.dataType = "风险预警";
      this.box4PieData = ["预警数", "处置数", "预警处置率(%)"];
      this.box4PieDemo();
    },
    clickCL() {
      this.shows = 2;
      this.dataType = "存量评级";
      this.box4PieData = ["服务点数", "中高风险服务点数", "占比(%)"];
    },
    clickZR() {
      this.shows = 3;
      this.dataType = "准入控制";
      this.box4PieData = ["进件数", "通过数", "准入通过率(%)"];
    },
    clickXJ() {
      this.shows = 4;
      this.dataType = "巡检";
      this.box4PieData = ["服务点数", "巡检通过服务点数", "巡检通过率(%)"];
    },
    // 测试点击监听改变图表
    // PieClick1(value) {
    //   if (value === undefined) {
    //     this.province = "";
    //     this.zrData = [
    //       {
    //         name: "征信类占比",
    //         value: "40000"
    //       },
    //       {
    //         name: "黑名单类占比",
    //         value: "23000"
    //       },
    //       {
    //         name: "内部数据名单类",
    //         value: "25000"
    //       },
    //       {
    //         name: "外部数据名单类",
    //         value: "10000"
    //       }
    //     ];
    //   }
    // },
    PieClick(param) {
      // this.province = value.name;
      this.dituData = [];
      this.dituData1 = [];
      if (param.name === "福建") {
        this.dituData = [
          {
            name: "泉州市",
            value: 100
          },
          {
            name: "厦门市",
            value: 50
          }
        ];
      }
      if (param.name === "厦门市") {
        this.axios.get("/data/350200.json").then(data => {
          this.dituData = [
            {
              name: "思明区",
              value: 100
            }
          ];
          console.log(data);
          const getJson = data.data;
          this.$echarts.registerMap(param.name, getJson);
          this.DrawMap(); // resize 图形功能方法
        });
      }
      this.mapName = param.name;
      this.DrawMap();
      if (this.mapName !== "china") {
        this.showShen = true;
      }
    },
    // 处理量 处理率
    clAll() {
      this.chuliliang = true;
      this.chulilv = false;
      this.xunJianPie();
      this.showXJ = 1;
    },
    cll() {
      this.showXJ = 2;
      this.chuliliang = false;
      this.chulilv = true;
      this.xunJianPie();
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
      // console.log("取到的XX省的json数据", obj);
      // if (obj) {
      //   let arr = obj.features;
      //   // 循环取出 城市名称和value值
      //   for (var j = 0; j < arr.length; j++) {
      //     // this.max = arr[0].id;
      //     // this.min = arr[0].id;
      //     // if (arr[j].id > this.max) {
      //     //   this.max = arr[j].id;
      //     // }
      //     // if (arr[j].id < this.min) {
      //     //   this.min = arr[j].id;
      //     // }
      //     this.listArr.push(
      //       arr[j].properties.name
      //       // value: arr[j].id
      //     );
      //   }
      //   console.log(this.listArr, "XX省json");
      // }
    },
    DrawMap() {
      // 全国地图渐变
      let myChart = this.$echarts.init(document.getElementById("ditu1"));
      // 省份点击联动
      let _that = this;
      myChart.off("click");
      myChart.on("click", function(param) {
        console.log(param);
        _that.PieClick(param);
      });
      // 地图高亮轮播
      var count = 0;
      var timeTicket = null;
      var dataLength = this.dituData.length;
      timeTicket && clearInterval(timeTicket);
      timeTicket = setInterval(function() {
        myChart.dispatchAction({
          type: "downplay",
          seriesIndex: 1
        });
        myChart.dispatchAction({
          type: "highlight",
          seriesIndex: 1,
          dataIndex: count % dataLength
        });
        myChart.dispatchAction({
          type: "showTip",
          seriesIndex: 1,
          dataIndex: count % dataLength
        });
        count++;
      }, 3000);
      myChart.on("mouseover", function(params) {
        clearInterval(timeTicket);
        myChart.dispatchAction({
          type: "downplay",
          seriesIndex: 1
        });
        myChart.dispatchAction({
          type: "highlight",
          seriesIndex: 1,
          dataIndex: params.dataIndex
        });
        myChart.dispatchAction({
          type: "showTip",
          seriesIndex: 1,
          dataIndex: params.dataIndex
        });
      });
      myChart.on("mouseout", function(params) {
        timeTicket && clearInterval(timeTicket);
        timeTicket = setInterval(function() {
          myChart.dispatchAction({
            type: "downplay",
            seriesIndex: 1
          });
          myChart.dispatchAction({
            type: "highlight",
            seriesIndex: 1,
            dataIndex: count % dataLength
          });
          myChart.dispatchAction({
            type: "showTip",
            seriesIndex: 1,
            dataIndex: count % dataLength
          });
          count++;
        }, 3000);
      });

      // dituJB1.getZr().on("click", res => {
      //   // 点击空白处
      //   _that.PieClick1(res.target);
      // });
      var mapName = this.mapName;
      var dataJB = this.dituData;
      var dataJB1 = this.dituData1;
      var geoCoordMap = {
        北京: [116.403039, 39.917565],
        天津: [116.403039, 39.917565],
        重庆: [106.554413, 29.556932],
        厦门: [118.159101, 24.491196],
        宁波: [121.622188, 29.871286],
        深圳: [114.062198, 22.549668],
        苏州: [120.678332, 31.321619],
        大连: [121.651314, 38.925283],
        青岛: [120.473524, 36.105373]
      };
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
              value: geoCoord.concat(dataJB1[i].value),
              id: dataJB1[i].id
            });
          }
        }
        return res;
      };
      myChart.setOption({
        tooltip: {
          trigger: "item",
          formatter: function(params) {
            if (typeof params.value[2] == "undefined") {
              var toolTiphtml = "";
              for (var i = 0; i < dataJB.length; i++) {
                if (params.name == dataJB[i].name) {
                  toolTiphtml += dataJB[i].name + ":" + dataJB[i].value;
                }
              }
              return toolTiphtml;
            } else {
              var toolTiphtml = "";
              for (var i = 0; i < dataJB.length; i++) {
                if (params.name == dataJB[i].name) {
                  toolTiphtml += dataJB[i].name + ":" + dataJB[i].value;
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
            color: "#fff",
            show: false
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
          roam: false,
          itemStyle: {
            normal: {
              areaColor: "#00467F",
              borderColor: "#3B5077"
            },
            emphasis: {
              areaColor: "#FFD52E"
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
            roam: false,
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
    // box4Pie单独请求
    box4PieDemo() {
      let box4Pie = this.$echarts.init(document.getElementById("box4Pie")); //预警柱状图
      var that = this;
      box4Pie.setOption({
        grid: {
          x: 50,
          x2: 50,
          top: "15%",
          bottom: "15%" //也可设置left和right设置距离来控制图表的大小
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
          data: that.box4PieData,
          top: "0%",
          textStyle: {
            color: "#fff"
          }
        },
        xAxis: {
          data: this.zhihanglist,
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
            interval: 0,
            rotate: 40,
            textStyle: {
              color: "#fff" //X轴文字颜色
            }
          }
        },
        yAxis: [
          {
            type: "value",
            name: " ",
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
              textStyle: {
                color: "#fff",
                fontSize: this.setFontsize(0.12)
              }
            }
          },
          {
            type: "value",
            name: " ",
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
              formatter: "{value} %", //右侧Y轴文字显示
              textStyle: {
                color: "#fff",
                fontSize: this.setFontsize(0.12)
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
            end: 50,
            handleIcon:
              "path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z",
            handleSize: "110%",
            handleStyle: {
              color: "#d3dee5"
            },
            textStyle: {
              show: false,
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
            name: this.box4PieData[0],
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
            name: this.box4PieData[1],
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
            name: this.box4PieData[2],
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
    },
    // 巡检切换的两个图单独请求
    // xunJianPie() {
    //   let Pie1 = this.$echarts.init(document.getElementById("Pie1")); //巡检处理总量
    //   var colorList = [
    //     "#73DDFF",
    //     "#73ACFF",
    //     "#FDD56A",
    //     "#FDB36A",
    //     "#FD866A",
    //     "#9E87FF",
    //     "#58D5FF"
    //   ];
    //   Pie1.setOption({
    //     backgroundColor: "",
    //     title: {
    //       text: "",
    //       left: "center",
    //       top: 20,
    //       textStyle: {
    //         color: "#ccc"
    //       }
    //     },

    //     tooltip: {
    //       trigger: "item",
    //       formatter: "{b} : {c} ({d}%)",
    //       textStyle: {
    //         fontSize: 24
    //       }
    //     },

    //     visualMap: {
    //       show: false,
    //       min: 500,
    //       max: 600,
    //       inRange: {
    //         //colorLightness: [0, 1]
    //       }
    //     },
    //     series: [
    //       {
    //         name: "访问来源",
    //         type: "pie",
    //         radius: "50%",
    //         center: ["45%", "62%"],
    //         color: ["#FBFE27", "#FE5050", "#1DB7E5"], //'#FBFE27','rgb(11,228,96)','#FE5050'
    //         data: this.dqxjData1.sort(function(a, b) {
    //           return a.value - b.value;
    //         }),
    //         roseType: "radius",

    //         label: {
    //           normal: {
    //             formatter: ["{c|{c}个}", "{b|{b}}"].join("\n"),
    //             rich: {
    //               c: {
    //                 color: "#77c8ff",
    //                 fontSize: 28,
    //                 fontWeight: "bold",
    //                 lineHeight: 40
    //               },
    //               b: {
    //                 color: "rgb(98,137,169)",
    //                 fontSize: 24,
    //                 height: 60
    //               }
    //             }
    //           }
    //         },
    //         labelLine: {
    //           normal: {
    //             lineStyle: {
    //               color: "rgb(98,137,169)"
    //             },
    //             smooth: 0.2,
    //             length: 10,
    //             length2: 20
    //           }
    //         },
    //         itemStyle: {
    //           normal: {
    //             shadowColor: "rgba(0, 0, 0, 0.8)",
    //             shadowBlur: 50
    //           }
    //         }
    //       }
    //     ]
    //   });
    //   let Pie4 = this.$echarts.init(document.getElementById("Pie4")); //巡检处理率
    //   var dataArry = {
    //     two: 300,
    //     three: 200,
    //     four: 200
    //   };
    //   Pie4.setOption({
    //     tooltip: {
    //       formatter: "{a} <br/>{c} {b}"
    //     },
    //     series: [
    //       {
    //         name: "远程巡检",
    //         type: "gauge",
    //         color: ["#f00"],
    //         min: 0,
    //         max: 100,
    //         splitNumber: 8,
    //         radius: "30%",
    //         center: ["20%", "55%"],
    //         axisLine: {
    //           // 坐标轴线
    //           lineStyle: {
    //             // 属性lineStyle控制线条样式
    //             width: 10,
    //             color: [
    //               [0.4, "#203add"],
    //               [1, "#0d1758"]
    //             ]
    //           },
    //           backgroundColor: "none"
    //         },
    //         axisTick: {
    //           // 坐标轴小标记
    //           length: 12, // 属性length控制线长
    //           lineStyle: {
    //             // 属性lineStyle控制线条样式
    //             color: "auto"
    //           }
    //         },
    //         tooltip: {
    //           formatter: function() {
    //             if (dataArry.two) {
    //               return "远程巡检:" + dataArry.two;
    //             }
    //           }
    //         },
    //         splitLine: {
    //           // 分隔线
    //           length: 5, // 属性length控制线长
    //           lineStyle: {
    //             // 属性lineStyle（详见lineStyle）控制线条样式
    //             color: "rgba(255,255,255,0.7)"
    //           }
    //         },
    //         axisLabel: {
    //           borderRadius: 1,
    //           color: "rgba(255,255,255,0.7)",
    //           padding: 1
    //         },
    //         title: {
    //           fontSize: 22,
    //           fontColor: "#FFF",
    //           color: "#FFF",
    //           paddingTop: 15,
    //           offsetCenter: [0, "110%"]
    //         },
    //         itemStyle: {
    //           color: "#1092ff"
    //         },
    //         detail: {
    //           shadowOffsetX: 0,
    //           shadowOffsetY: 0,
    //           textBorderColor: "#000",
    //           textBorderWidth: 1,
    //           textShadowBlur: 1,
    //           textShadowColor: "#fff",
    //           textShadowOffsetX: 0,
    //           textShadowOffsetY: 0,
    //           paddingTop: 10,
    //           fontFamily: "digital",
    //           fontSize: 20,
    //           width: 30,
    //           color: "#fff",
    //           rich: {},
    //           offsetCenter: [0, "65%"],
    //           formatter: function(value) {
    //             return value * (10).toFixed(2) + "%";
    //           }
    //         },
    //         data: [
    //           {
    //             value: this.ycxjData,
    //             name: "远程巡检"
    //           }
    //         ]
    //       },
    //       {
    //         name: "现场巡检",
    //         type: "gauge",
    //         color: ["#f00"],
    //         min: 0,
    //         max: 100,
    //         splitNumber: 8,
    //         radius: "30%",
    //         center: ["40%", "55%"],
    //         axisLine: {
    //           // 坐标轴线
    //           lineStyle: {
    //             // 属性lineStyle控制线条样式
    //             width: 10,
    //             color: [
    //               [0.4, "#203add"],
    //               [1, "#0d1758"]
    //             ]
    //           },
    //           backgroundColor: "none"
    //         },
    //         axisTick: {
    //           // 坐标轴小标记
    //           length: 12, // 属性length控制线长
    //           lineStyle: {
    //             // 属性lineStyle控制线条样式
    //             color: "auto"
    //           }
    //         },
    //         splitLine: {
    //           // 分隔线
    //           length: 5, // 属性length控制线长
    //           lineStyle: {
    //             // 属性lineStyle（详见lineStyle）控制线条样式
    //             color: "rgba(255,255,255,0.7)"
    //           }
    //         },
    //         tooltip: {
    //           formatter: function() {
    //             if (dataArry.three) {
    //               return "现场巡检:" + dataArry.three;
    //             }
    //           }
    //         },
    //         axisLabel: {
    //           borderRadius: 1,
    //           color: "rgba(255,255,255,0.7)",
    //           padding: 1
    //         },
    //         title: {
    //           fontSize: 22,
    //           fontColor: "#FFF",
    //           color: "#FFF",
    //           paddingTop: 15,
    //           offsetCenter: [0, "110%"]
    //         },
    //         itemStyle: {
    //           color: "#1092ff"
    //         },
    //         detail: {
    //           shadowOffsetX: 0,
    //           shadowOffsetY: 0,
    //           textBorderColor: "#000",
    //           textBorderWidth: 1,
    //           textShadowBlur: 1,
    //           textShadowColor: "#fff",
    //           textShadowOffsetX: 0,
    //           textShadowOffsetY: 0,
    //           paddingTop: 10,
    //           fontFamily: "digital",
    //           fontSize: 20,
    //           width: 30,
    //           color: "#fff",
    //           rich: {},
    //           offsetCenter: [0, "65%"],
    //           formatter: function(value) {
    //             return value.toFixed(2) + "%";
    //           }
    //         },
    //         data: [
    //           {
    //             value: this.xcxjData,
    //             name: "现场巡检"
    //           }
    //         ]
    //       },
    //       {
    //         name: "专项巡检",
    //         type: "gauge",
    //         color: ["#f00"],
    //         min: 0,
    //         max: 100,
    //         splitNumber: 8,
    //         radius: "30%",
    //         center: ["62%", "55%"],
    //         axisLine: {
    //           // 坐标轴线
    //           lineStyle: {
    //             // 属性lineStyle控制线条样式
    //             width: 10,
    //             color: [
    //               [0.4, "#203add"],
    //               [1, "#0d1758"]
    //             ]
    //           },
    //           backgroundColor: "none"
    //         },
    //         axisTick: {
    //           // 坐标轴小标记
    //           length: 12, // 属性length控制线长
    //           lineStyle: {
    //             // 属性lineStyle控制线条样式
    //             color: "auto"
    //           }
    //         },
    //         splitLine: {
    //           // 分隔线
    //           length: 5, // 属性length控制线长
    //           lineStyle: {
    //             // 属性lineStyle（详见lineStyle）控制线条样式
    //             color: "rgba(255,255,255,0.7)"
    //           }
    //         },
    //         tooltip: {
    //           formatter: function() {
    //             if (dataArry.four) {
    //               return "专项巡检:" + dataArry.four;
    //             }
    //           }
    //         },
    //         axisLabel: {
    //           borderRadius: 1,
    //           color: "rgba(255,255,255,0.7)",
    //           padding: 1
    //         },
    //         title: {
    //           fontSize: 22,
    //           fontColor: "#FFF",
    //           color: "#FFF",
    //           paddingTop: 15,
    //           offsetCenter: [0, "110%"]
    //         },
    //         itemStyle: {
    //           color: "#1092ff"
    //         },
    //         detail: {
    //           shadowOffsetX: 0,
    //           shadowOffsetY: 0,
    //           textBorderColor: "#000",
    //           textBorderWidth: 1,
    //           textShadowBlur: 1,
    //           textShadowColor: "#fff",
    //           textShadowOffsetX: 0,
    //           textShadowOffsetY: 0,
    //           paddingTop: 10,
    //           fontFamily: "digital",
    //           fontSize: 20,
    //           width: 30,
    //           color: "#fff",
    //           rich: {},
    //           offsetCenter: [0, "65%"],
    //           formatter: function(value) {
    //             return value + "%";
    //           }
    //         },
    //         data: [
    //           {
    //             value: this.zxxjData,
    //             name: "专项巡检"
    //           }
    //         ]
    //       }
    //     ]
    //   });
    //   this.$nextTick(() => {
    //     Pie1.resize();
    //   });
    //   this.$nextTick(() => {
    //     Pie4.resize();
    //   });
    // },
    // 饼图
    piedemo() {
      let PieXJ = this.$echarts.init(document.getElementById("PieXJ")); //新巡检图
      // let Pie1 = this.$echarts.init(document.getElementById("Pie1")); //巡检处理总量
      let Pie2 = this.$echarts.init(document.getElementById("Pie2")); //风险处置柱状图
      // let Pie4 = this.$echarts.init(document.getElementById("Pie4")); //巡检处理率
      let zrPie = this.$echarts.init(document.getElementById("zrPie")); //准入饼图
      let ybpPie = this.$echarts.init(document.getElementById("ybpPie")); //仪表盘
      let yjPie = this.$echarts.init(document.getElementById("yjPie")); //预警柱状图
      let box4Pie = this.$echarts.init(document.getElementById("box4Pie")); //预警柱状图
      //新巡检图
      PieXJ.setOption({
        grid: {
          x: 80,
          y: 50,
          x2: 140,
          y2: 50
        },
        legend: {
          data: ["现场", "远程", "专项"],
          top: "8%",
          right: "5%",
          textStyle: {
            color: "#fff",
            fontSize: 24
          }
        },
        barWidth: 16,
        xAxis: {
          type: "value",
          splitLine: {
            lineStyle: {
              color: "rgba(255,255,255,0.2)"
            }
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false,
            //  改变x轴颜色
            lineStyle: {
              color: "#26D9FF"
            }
          },
          axisLabel: {
            show: false,
            //  改变x轴字体颜色和大小
            textStyle: {
              color: "#fff",
              fontSize: 24
            }
          }
        },
        yAxis: {
          type: "category",
          data: ["现场", "远程", "专项"],
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLine: {
            //  改变y轴颜色
            lineStyle: {
              color: "#26D9FF"
            }
          },
          axisLabel: {
            //  改变y轴字体颜色和大小
            //formatter: '{value} m³ ', //  给y轴添加单位
            show: false,
            textStyle: {
              color: "#fff",
              fontSize: 24
            }
          }
        },
        series: [
          {
            type: "bar",
            name: "现场",
            itemStyle: {
              normal: {
                label: {
                  show: true, //开启显示
                  formatter: function(data) {
                    return "总数:" + data.value + "个";
                  },
                  position: "right", //在上方显示
                  textStyle: {
                    //数值样式
                    color: "#fff",
                    fontSize: 24
                  }
                },
                color: "#1DB7E5"
              }
            },
            data: [28, ,]
          },
          {
            type: "bar",
            name: "现场",
            itemStyle: {
              normal: {
                label: {
                  show: true, //开启显示
                  formatter: function(data) {
                    return "完成数:" + data.value + "个";
                  },
                  position: "right", //在上方显示
                  textStyle: {
                    //数值样式
                    color: "#fff",
                    fontSize: 24
                  }
                },
                color: "#1DB7E5"
              }
            },
            data: [10, ,]
          },
          {
            type: "bar",
            name: "远程",
            itemStyle: {
              normal: {
                label: {
                  show: true, //开启显示
                  formatter: function(data) {
                    return "总数:" + data.value + "个";
                  },
                  position: "right", //在上方显示
                  textStyle: {
                    //数值样式
                    color: "#fff",
                    fontSize: 24
                  }
                },
                color: "#F94E4E"
              }
            },
            data: [, 12]
          },
          {
            type: "bar",
            name: "远程",
            itemStyle: {
              normal: {
                label: {
                  show: true, //开启显示
                  formatter: function(data) {
                    return "完成数:" + data.value + "个";
                  },
                  position: "right", //在上方显示
                  textStyle: {
                    //数值样式
                    color: "#fff",
                    fontSize: 24
                  }
                },
                color: "#F94E4E"
              }
            },
            data: [, 9]
          },
          {
            type: "bar",
            name: "专项",
            itemStyle: {
              normal: {
                label: {
                  show: true, //开启显示
                  formatter: function(data) {
                    return "总数:" + data.value + "个";
                  },
                  position: "right", //在上方显示
                  textStyle: {
                    //数值样式
                    color: "#fff",
                    fontSize: 24
                  }
                },
                color: "#FFD52E"
              }
            },
            data: [, , 9]
          },
          {
            type: "bar",
            name: "专项",
            itemStyle: {
              normal: {
                label: {
                  show: true, //开启显示
                  formatter: function(data) {
                    return "完成数:" + data.value + "个";
                  },
                  position: "right", //在上方显示
                  textStyle: {
                    //数值样式
                    color: "#fff",
                    fontSize: 24
                  }
                },
                color: "#FFD52E"
              }
            },
            data: [, , 10]
          }
        ]
      });
      // 支行柱状图+折线图
      var that = this;
      box4Pie.setOption({
        grid: {
          x: 50,
          x2: 50,
          top: "20%",
          bottom: "15%" //也可设置left和right设置距离来控制图表的大小
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
          data: that.box4PieData,
          top: "0%",
          textStyle: {
            color: "#fff",
            fontSize: 16
          }
        },
        xAxis: {
          data: this.zhihanglist,
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
              color: "#fff", //X轴文字颜色
              fontSize: 14
            }
          }
        },
        yAxis: [
          {
            type: "value",
            name: "",
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
              textStyle: {
                color: "#fff",
                fontSize: 14
              }
            }
          },
          {
            type: "value",
            name: "",
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
                color: "#fff",
                fontSize: 14
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
            show: false,
            height: 15,
            start: 1,
            end: 35
          }
        ],
        series: [
          {
            name: this.box4PieData[0],
            type: "bar",
            barWidth: 18,
            itemStyle: {
              normal: {
                color: "#388BFF"
              }
            },
            data: this.zsData
          },
          {
            name: this.box4PieData[1],
            type: "bar",
            barWidth: 18,
            itemStyle: {
              normal: {
                color: "#F6931C"
              }
            },
            data: this.wclData
          },
          {
            name: this.box4PieData[2],
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
      let dataYJ = this.fxyjData;
      let dataYJ1 = this.fxyjData1;
      let label = dataYJ.map(item => {
        return [item.name, item.color];
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
          show: false,
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
          right: "5",
          // left: "center",
          textStyle: {
            fontSize: 32,
            color: "#F1F1F3"
          },
          data: ["已处理", "未处理"]
        },
        grid: [
          {
            show: false,
            left: "14%",
            top: 30,
            bottom: 10,
            containLabel: true,
            width: "28%"
          },
          {
            show: false,
            left: "51.5%", //调整中间文字位置
            top: 26,
            bottom: 10,
            width: "20%"
          },
          {
            show: false,
            right: "14%",
            top: 30,
            bottom: 10,
            containLabel: true,
            width: "28%"
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
                fontSize: 26
              }
            },
            data: label.map(value => {
              return {
                value: value[0],
                textStyle: {
                  align: "center",
                  color: value[1],
                  fontSize: 32
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
            barWidth: 20,
            stack: "left",
            label: {
              show: true,
              fontSize: 28,
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
            barWidth: 20,
            stack: "right",
            xAxisIndex: 2,
            yAxisIndex: 2,
            label: {
              show: true,
              fontSize: 28,
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
            data: dataYJ1
          }
        ]
      });
      // 仪表盘
      ybpPie.setOption({
        series: [
          {
            name: "速度",
            type: "gauge",
            min: 0,
            max: 100,
            center: ["14.5%", "50%"], // 默认全局居中
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
            data: [
              {
                value: this.zrtglData,
                name: "123"
              }
            ]
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
            data: [{ value: this.cldxlData }]
          },
          {
            name: "速度",
            type: "gauge",
            min: 0,
            max: 100,
            center: ["61.5%", "50%"], // 默认全局居中
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
            data: [{ value: this.yjczlData }]
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
            data: [{ value: this.xjtglData }]
          }
        ]
      });
      // 准入拒件饼图
      var seriesData = this.zrData;
      var legendData = [
        "征信类",
        "黑名单类",
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
            fontSize: 28
          },
          data: legendData
        },
        series: [
          {
            type: "pie",
            z: 3,
            center: ["65%", "55%"],
            radius: ["30%", "50%"],
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
      // this.$nextTick(() => {
      //   Pie1.resize();
      // });
      // this.$nextTick(() => {
      //   Pie4.resize();
      // });
      //  仪表盘
      // var dataArry = {
      //   two: 300,
      //   three: 200,
      //   four: 200
      // };
      // Pie4.setOption({
      //   tooltip: {
      //     formatter: "{a} <br/>{c} {b}"
      //   },
      //   series: [
      //     {
      //       name: "远程巡检",
      //       type: "gauge",
      //       color: ["#f00"],
      //       min: 0,
      //       max: 100,
      //       splitNumber: 8,
      //       radius: "30%",
      //       center: ["20%", "55%"],
      //       axisLine: {
      //         // 坐标轴线
      //         lineStyle: {
      //           // 属性lineStyle控制线条样式
      //           width: 10,
      //           color: [
      //             [0.4, "#203add"],
      //             [1, "#0d1758"]
      //           ]
      //         },
      //         backgroundColor: "none"
      //       },
      //       axisTick: {
      //         // 坐标轴小标记
      //         length: 12, // 属性length控制线长
      //         lineStyle: {
      //           // 属性lineStyle控制线条样式
      //           color: "auto"
      //         }
      //       },
      //       tooltip: {
      //         formatter: function() {
      //           if (dataArry.two) {
      //             return "远程巡检:" + dataArry.two;
      //           }
      //         }
      //       },
      //       splitLine: {
      //         // 分隔线
      //         length: 5, // 属性length控制线长
      //         lineStyle: {
      //           // 属性lineStyle（详见lineStyle）控制线条样式
      //           color: "rgba(255,255,255,0.7)"
      //         }
      //       },
      //       axisLabel: {
      //         borderRadius: 1,
      //         color: "rgba(255,255,255,0.7)",
      //         padding: 1
      //       },
      //       title: {
      //         fontSize: 22,
      //         fontColor: "#FFF",
      //         color: "#FFF",
      //         paddingTop: 15,
      //         offsetCenter: [0, "110%"]
      //       },
      //       itemStyle: {
      //         color: "#1092ff"
      //       },
      //       detail: {
      //         shadowOffsetX: 0,
      //         shadowOffsetY: 0,
      //         textBorderColor: "#000",
      //         textBorderWidth: 1,
      //         textShadowBlur: 1,
      //         textShadowColor: "#fff",
      //         textShadowOffsetX: 0,
      //         textShadowOffsetY: 0,
      //         paddingTop: 10,
      //         fontFamily: "digital",
      //         fontSize: 20,
      //         width: 30,
      //         color: "#fff",
      //         rich: {},
      //         offsetCenter: [0, "65%"],
      //         formatter: function(value) {
      //           return value + "%";
      //         }
      //       },
      //       data: [
      //         {
      //           value: this.ycxjData,
      //           name: "远程巡检"
      //         }
      //       ]
      //     },
      //     {
      //       name: "现场巡检",
      //       type: "gauge",
      //       color: ["#f00"],
      //       min: 0,
      //       max: 100,
      //       splitNumber: 8,
      //       radius: "30%",
      //       center: ["40%", "55%"],
      //       axisLine: {
      //         // 坐标轴线
      //         lineStyle: {
      //           // 属性lineStyle控制线条样式
      //           width: 10,
      //           color: [
      //             [0.4, "#203add"],
      //             [1, "#0d1758"]
      //           ]
      //         },
      //         backgroundColor: "none"
      //       },
      //       axisTick: {
      //         // 坐标轴小标记
      //         length: 12, // 属性length控制线长
      //         lineStyle: {
      //           // 属性lineStyle控制线条样式
      //           color: "auto"
      //         }
      //       },
      //       splitLine: {
      //         // 分隔线
      //         length: 5, // 属性length控制线长
      //         lineStyle: {
      //           // 属性lineStyle（详见lineStyle）控制线条样式
      //           color: "rgba(255,255,255,0.7)"
      //         }
      //       },
      //       tooltip: {
      //         formatter: function() {
      //           if (dataArry.three) {
      //             return "现场巡检:" + dataArry.three;
      //           }
      //         }
      //       },
      //       axisLabel: {
      //         borderRadius: 1,
      //         color: "rgba(255,255,255,0.7)",
      //         padding: 1
      //       },
      //       title: {
      //         fontSize: 22,
      //         fontColor: "#FFF",
      //         color: "#FFF",
      //         paddingTop: 15,
      //         offsetCenter: [0, "110%"]
      //       },
      //       itemStyle: {
      //         color: "#1092ff"
      //       },
      //       detail: {
      //         shadowOffsetX: 0,
      //         shadowOffsetY: 0,
      //         textBorderColor: "#000",
      //         textBorderWidth: 1,
      //         textShadowBlur: 1,
      //         textShadowColor: "#fff",
      //         textShadowOffsetX: 0,
      //         textShadowOffsetY: 0,
      //         paddingTop: 10,
      //         fontFamily: "digital",
      //         fontSize: 20,
      //         width: 30,
      //         color: "#fff",
      //         rich: {},
      //         offsetCenter: [0, "65%"],
      //         formatter: function(value) {
      //           return value + "%";
      //         }
      //       },
      //       data: [
      //         {
      //           value: this.xcxjData,
      //           name: "现场巡检"
      //         }
      //       ]
      //     },
      //     {
      //       name: "专项巡检",
      //       type: "gauge",
      //       color: ["#f00"],
      //       min: 0,
      //       max: 100,
      //       splitNumber: 8,
      //       radius: "30%",
      //       center: ["62%", "55%"],
      //       axisLine: {
      //         // 坐标轴线
      //         lineStyle: {
      //           // 属性lineStyle控制线条样式
      //           width: 10,
      //           color: [
      //             [0.4, "#203add"],
      //             [1, "#0d1758"]
      //           ]
      //         },
      //         backgroundColor: "none"
      //       },
      //       axisTick: {
      //         // 坐标轴小标记
      //         length: 12, // 属性length控制线长
      //         lineStyle: {
      //           // 属性lineStyle控制线条样式
      //           color: "auto"
      //         }
      //       },
      //       splitLine: {
      //         // 分隔线
      //         length: 5, // 属性length控制线长
      //         lineStyle: {
      //           // 属性lineStyle（详见lineStyle）控制线条样式
      //           color: "rgba(255,255,255,0.7)"
      //         }
      //       },
      //       tooltip: {
      //         formatter: function() {
      //           if (dataArry.four) {
      //             return "专项巡检:" + dataArry.four;
      //           }
      //         }
      //       },
      //       axisLabel: {
      //         borderRadius: 1,
      //         color: "rgba(255,255,255,0.7)",
      //         padding: 1
      //       },
      //       title: {
      //         fontSize: 22,
      //         fontColor: "#FFF",
      //         color: "#FFF",
      //         paddingTop: 15,
      //         offsetCenter: [0, "110%"]
      //       },
      //       itemStyle: {
      //         color: "#1092ff"
      //       },
      //       detail: {
      //         shadowOffsetX: 0,
      //         shadowOffsetY: 0,
      //         textBorderColor: "#000",
      //         textBorderWidth: 1,
      //         textShadowBlur: 1,
      //         textShadowColor: "#fff",
      //         textShadowOffsetX: 0,
      //         textShadowOffsetY: 0,
      //         paddingTop: 10,
      //         fontFamily: "digital",
      //         fontSize: 20,
      //         width: 30,
      //         color: "#fff",
      //         rich: {},
      //         offsetCenter: [0, "65%"],
      //         formatter: function(value) {
      //           return value + "%";
      //         }
      //       },
      //       data: [
      //         {
      //           value: this.zxxjData,
      //           name: "专项巡检"
      //         }
      //       ]
      //     }
      //   ]
      // });
      // window.addEventListener("resize", function() {
      //   Pie1.resize();
      // });
      // window.addEventListener("resize", function() {
      //   Pie4.resize();
      // });
      // 风险处置
      var xdata = ["风险级", "警示级", "预警级", "关注级"];
      var data = [50, 40, 30, 20];
      var jztColor = ["#FD4C54", "#FD950E", "#FFD52E", "#409EFF"];
      Pie2.setOption({
        legend: {
          top: "6%",
          data: ["风险级", "警示级", "预警级", "关注级"],
          textStyle: {
            color: "#fff",
            fontSize: 26
          }
        },
        tooltip: {
          trigger: "axis",
          textStyle: {
            fontSize: 26
          }
        },
        grid: {
          left: "5%",
          right: "3%",
          bottom: "0%",
          top: "28%",
          containLabel: true
        },
        xAxis: {
          data: xdata,
          triggerEvent: true,
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            show: true,
            interval: 0,
            textStyle: {
              color: "#fff",
              fontSize: 22
            }
          }
        },
        yAxis: {
          name: "总数(个)",
          triggerEvent: true,
          nameTextStyle: {
            color: "#fff",
            fontSize: 20
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "rgba(255,255,255,.1)"
            }
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "rgba(255,255,255,.1)"
            }
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: "#fff",
              fontSize: 18
            }
          }
        },
        // color: ["#e54035"],
        series: [
          {
            name: "",
            barMinHeight: 20,
            type: "pictorialBar",
            barCategoryGap: "0%",
            barGap: "0%",
            // symbol: 'path://M0,10 L10,10 L5,0 L0,10 z',
            symbol:
              "path://M0,10 L10,10 C8.5,10 5.5,5 5,0 C4.5,5 1.5,10 0,10 z",
            itemStyle: {
              normal: {
                //barBorderRadius: 5,
                //渐变色
                color: function(params) {
                  return jztColor[params.dataIndex];
                },
                label: {
                  show: true,
                  position: "top",
                  textStyle: {
                    fontSize: 24,
                    color: "#fff"
                  }
                }
              }
            },
            data: data,
            z: 10
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
      // Pie1.setOption({
      //   backgroundColor: "",
      //   title: {
      //     text: "",
      //     left: "center",
      //     top: 20,
      //     textStyle: {
      //       color: "#ccc"
      //     }
      //   },

      //   tooltip: {
      //     trigger: "item",
      //     formatter: "{b} : {c} ({d}%)",
      //     textStyle: {
      //       fontSize: 24
      //     }
      //   },

      //   visualMap: {
      //     show: false,
      //     min: 500,
      //     max: 600,
      //     inRange: {
      //       //colorLightness: [0, 1]
      //     }
      //   },
      //   series: [
      //     {
      //       name: "访问来源",
      //       type: "pie",
      //       radius: "50%",
      //       center: ["45%", "62%"],
      //       color: ["#FBFE27", "#FE5050", "#1DB7E5"], //'#FBFE27','rgb(11,228,96)','#FE5050'
      //       data: this.dqxjData1.sort(function(a, b) {
      //         return a.value - b.value;
      //       }),
      //       roseType: "radius",

      //       label: {
      //         normal: {
      //           formatter: ["{c|{c}个}", "{b|{b}}"].join("\n"),
      //           rich: {
      //             c: {
      //               color: "#77c8ff",
      //               fontSize: 30,
      //               fontWeight: "bold",
      //               lineHeight: 5
      //             },
      //             b: {
      //               color: "rgb(98,137,169)",
      //               fontSize: 24,
      //               height: 40
      //             }
      //           }
      //         }
      //       },
      //       labelLine: {
      //         normal: {
      //           lineStyle: {
      //             color: "rgb(98,137,169)"
      //           },
      //           smooth: 0.2,
      //           length: 10,
      //           length2: 20
      //         }
      //       },
      //       itemStyle: {
      //         normal: {
      //           shadowColor: "rgba(0, 0, 0, 0.8)",
      //           shadowBlur: 50
      //         }
      //       }
      //     }
      //   ]
      // });
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
  watch: {},
  created() {
    this.getData();
    // console.log(this.setFontsize(0.3), "1111");
    // 数据解析备用
    // box4Pie数据
    var rows = [
      {
        IND: "北京,560,340"
      },
      {
        IND: "天津,539,260"
      }
    ];
    var newRow = [];
    rows.map(item => {
      var newData = item.IND;
      var result = newData.split(",");
      newRow.push({
        name: result[0],
        value1: result[1],
        value2: result[2]
      });
    });
    console.log(newRow, "123456");
    var itemName = [];
    var itemValue1 = [];
    var itemValue2 = [];
    newRow.map(item => {
      itemName.push(item.name);
      itemValue1.push(parseInt(item.value1));
      itemValue2.push(parseInt(item.value2));
    });
    console.log(itemName);
    console.log(itemValue1);
    console.log(itemValue2);
    // 数据排序
    var yhData = [
      {
        name: "aaa",
        value: "2"
      },
      {
        name: "bbb",
        value: "8"
      },
      {
        name: "ccc",
        value: "5"
      }
    ];
    yhData.sort(function(a, b) {
      if (a.value > b.value) {
        return -1;
      } else if (a.value < b.value) {
        return 1;
      }
      return 0;
    });
    var newyhData = [];
    for (var i = 0; i < yhData.length; i++) {
      newyhData.push({
        name: yhData[i].name,
        value: yhData[i].value
      });
    }
    console.log(newyhData);

    var newdituData = [
      {
        name: "重庆",
        value: 20
      },
      {
        name: "云南",
        value: 10
      },
      {
        name: "辽宁",
        value: 10
      }
    ];
    newdituData = this.dituData.concat(newdituData);
    let obj = {};

    for (let i = 0; i < newdituData.length; i++) {
      for (let j = 1; j < newdituData.length; j++) {
        newdituData[i].value =
          newdituData[i].name == newdituData[j].name
            ? newdituData[j].value
            : newdituData[i].value;
      }
    }
    newdituData = newdituData.reduce((item, next) => {
      obj[next.name] ? "" : (obj[next.name] = true && item.push(next));
      return item;
    }, []);

    console.log(newdituData, "去重");

    // let arr = [
    //   {
    //     name: "张三",
    //     age: "30"
    //   },
    //   {
    //     name: "李四",
    //     age: "15"
    //   },
    //   {
    //     name: "王五",
    //     age: "20"
    //   },
    //   {
    //     name: "张三",
    //     age: "18"
    //   },
    //   {
    //     name: "王五",
    //     age: "16"
    //   }
    // ];

    // let obj = {};

    // for (let i = 0; i < arr.length; i++) {
    //   for (let j = 1; j < arr.length; j++) {
    //     arr[i].age = arr[i].name == arr[j].name ? arr[j].age : arr[i].age;
    //   }
    // }
    // arr = arr.reduce((item, next) => {
    //   obj[next.name] ? "" : (obj[next.name] = true && item.push(next));
    //   return item;
    // }, []);

    // console.log(arr, "去重");
    var shuzi111 = "1,2,3,4,5";
    JSON.parse("[" + shuzi111 + "]");
    console.log(shuzi111);
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
.ybpname {
  width: 94%;
  left: 3%;
  position: absolute;
  display: flex;
  bottom: 20px;
  p {
    color: #fff;
    width: 25%;
    text-align: center;
    font-size: 20px;
  }
}
.xjTitle {
  position: absolute;
  display: flex;
  left: 15px;
  top: 55px;
  flex-direction: column;
  color: #fff;
  padding: 0px;
  li {
    color: #fff;
    font-size: 12px;
    margin-bottom: 30px;
  }
}
.xxxl {
  height: 80%;
  overflow: auto;
}
.jiedian_tit {
  position: absolute;
  left: -9%;
  font-weight: 700;
  top: 5%;
  color: #fff;
  font-size: 16px;
}
.ccbSelect {
  width: 60%;
  height: 50%;
  margin-top: 3%;
  &.ccbSelect1 {
    width: 40%;
  }
}
.selectBox {
  position: absolute;
  z-index: 999;
  width: 500px;
  height: 50px;
  right: -58%;
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
    width: 135%;
    height: 140%;
    position: absolute;
    transform: scale(0.7);
    right: -20.5%;
    top: -20%;
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
  bottom: -60%;
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

  .jdt {
    width: 100%;
    height: 100%;
    .jdt_list {
      margin: 10px 0px;
      padding: 0px;
      display: flex;
      flex-direction: column;
      li {
        display: flex;
        flex-direction: row;
        margin-bottom: 10px;
        p {
          color: #fff;
          float: left;
          font-size: 10px;
        }
        .jdt_box {
          width: 55%;
          margin-left: 10px;
          margin-right: 10px;
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
      font-size: 26px;
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
  // user-select: none;
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
        position: absolute;
        left: 10%;
        top: 32%;
        margin: 0px auto;
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
        .back {
          position: absolute;
          color: #d2d2d3;
          font-size: 18px;
          right: 5%;
          bottom: 10%;
          font-weight: 700;
          cursor: pointer;
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
        width: 225%;
        height: 230%;
        position: absolute;
        transform: scale(0.35);
        left: -65%;
        top: -60%;
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
      padding: 5% 5% 5% 8%;
    }
    .modr3 {
      .bingtu {
        width: 200%;
        height: 280%;
        position: absolute;
        transform: scale(0.42);
        left: -55%;
        top: -80%;
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
        // z-index: 999;
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
      overflow: hidden;
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
  width: 180px;
  right: 2%;
  top: 2%;
  margin: 0px auto;
  height: 100px;
  overflow: hidden;
  display: block;
  position: absolute;
  .itemhua {
    padding: 0px;
    margin: 0px;
    display: flex;
    flex-direction: row;
    height: 80px;
    margin-top: 10px;
    li {
      width: 160px;
      height: 80px;
      margin-right: 10px;
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
        height: 80px;
        width:100%;
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
          margin-top: 15px;
          margin:0px auto;
          .box {
            width: 100%;
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
  .zrBox {
    // width: 200%;
    // left: -49%;
    // transform: scale(0.35);
  }
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
@media screen and (max-width: 1100px) {
  .bg .box3 .modr3 .titleBox .title_all {
    margin-left: 3%;
  }
  .bg .box3 .modr1 .yjBox {
    height: 170%;
  }
  .sq_txt {
    left: 18%;
  }

  .clBox .jdt {
    width: 64%;
  }
  .box4 .box4Pie {
    width: 94%;
  }
  .box4 .box4_tab {
    width: 6%;
  }
  .box4 .title_all {
    font-size: 12px;
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