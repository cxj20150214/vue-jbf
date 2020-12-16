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
        <p class="title">准入评级</p>
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
                  :percentage="this.fxjData"
                  status="exception"
                ></el-progress>
              </li>
              <li>
                <p>警示级</p>
                <el-progress
                  class="jdt_box "
                  :text-inside="true"
                  :stroke-width="12"
                  :percentage="this.jsjData"
                  status="warning"
                ></el-progress>
              </li>
              <li>
                <p>预警级</p>
                <el-progress
                  class="jdt_box jdt_box_1"
                  :text-inside="true"
                  :stroke-width="12"
                  :percentage="this.yjjData"
                  status="success"
                ></el-progress>
              </li>
              <li>
                <p>关注级</p>
                <el-progress
                  class="jdt_box"
                  :text-inside="true"
                  :stroke-width="12"
                  :percentage="this.gzjData"
                ></el-progress>
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
        </div>
      </div>
      <div class="modBox2">
        <div class="box1">
          <div class="ybpPie" id="ybpPie"></div>
        </div>
      </div>
    </div>
    <div class="box3">
      <div class="modr1">
        <p class="jiedian_tit">当前位置：{{ province + selectTime }}</p>
        <p class="title">风险预警</p>
        <div class="yjBox">
          <div class="yjPie" id="yjPie"></div>
        </div>
      </div>
      <div class="modr2">
        <div class="titleBox">
          <img src="../../assets/img/sj.png" alt />
          <p class="title">风险处置</p>
        </div>
        <div class="zhexiantu" id="Pie2"></div>
      </div>
      <div class="modr3">
        <div class="titleBox">
          <img src="../../assets/img/sj.png" alt />
          <p class="title">定期巡检</p>
          <p :class="{ active: showXJ == 1 }" class="title_all" @click="clAll">
            巡检总数
          </p>
          <p :class="{ active: showXJ == 2 }" class="title_cll" @click="cll">
            巡检完成率
          </p>
        </div>
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
import obj from "echarts/map/json/china.json";
import "echarts-liquidfill/src/liquidFill.js";
export default {
  name: "demo8",
  data() {
    return {
      // 页面渲染
      zrpjData1: 80050, //准入评级
      zrpjData2: 72045,
      zrpjData3: 90,
      zrData: [
        //拒件分布
        {
          name: "征信类",
          value: "40"
        },
        {
          name: "洗钱风险类",
          value: "50"
        },
        {
          name: "司法涉诉类",
          value: "60"
        },
        {
          name: "内部黑名单类",
          value: "100"
        },
        {
          name: "外部黑名单类",
          value: "70"
        }
      ],
      shuiqiuData: 0.05, //存量评级
      fxjData: 2,
      jsjData: 3,
      yjjData: 40,
      gzjData: 55,
      zrtglData: 90, //仪表盘
      cldxlData: 95,
      yjczlData: 95,
      xjtglData: 94,
      fxyjData: [
        //风险预警
        {
          name: "风险级",
          value: 98,
          color: "#F56C6C"
        },
        {
          name: "警示级",
          value: 95,
          color: "#E6A23C"
        },
        {
          name: "预警级",
          value: 90,
          color: "#FFD52E"
        },
        {
          name: "关注级",
          value: 92,
          color: "#409EFF"
        }
      ],
      fxyjData1: [
        //风险预警
        {
          name: "风险级",
          value: 2,
          color: "#F56C6C"
        },
        {
          name: "警示级",
          value: 5,
          color: "#E6A23C"
        },
        {
          name: "预警级",
          value: 10,
          color: "#FFD52E"
        },
        {
          name: "关注级",
          value: 8,
          color: "#409EFF"
        }
      ],
      fxczData1: [900, 850, 4540, 6400], //风险处置
      fxczData2: [750, 630, 4340, 6150],
      dqxjData1: [
        //定期巡检
        {
          value: 334345,
          name: "远程巡检"
        },
        {
          value: 223431,
          name: "现场巡检"
        },
        {
          value: 163254,
          name: "专项巡检"
        }
      ],
      ycxjData: 9.2,
      xcxjData: 9.5,
      zxxjData: 9.5,
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
      dataType: "准入评级",
      selectTime: "当年",
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
          value: 80
        },
        {
          name: "广东",
          value: 40
        }
      ],
      valueSelect: "全国",
      province: "全国",
      shows: 3,
      showXJ: 1,
      showDate: 3,
      listArr: [], //城市json
      nowDate: "", // 当前日期
      nowTime: "", // 当前时间
      nowWeek: "", // 当前星期
      chuliliang: true,
      chulilv: false
    };
  },
  computed: {},
  methods: {
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
      var loading = this.$loading({
        lock:true,
        text:"加载中",
        spinner:"el-icon-loading",
        background:"rgba(0,0,0,0.7)"
      });
      this.zrpjData1 = 800 //准入评级
      this.zrpjData2 = 720
      this.zrpjData3 = 90
      this.zrData = [
        //拒件分布
        {
          name: "征信类",
          value: "20"
        },
        {
          name: "洗钱风险类",
          value: "10"
        },
        {
          name: "司法涉诉类",
          value: "30"
        },
        {
          name: "内部黑名单类",
          value: "60"
        },
        {
          name: "外部黑名单类",
          value: "25"
        }
      ],
      this.shuiqiuData = 0.15, //存量评级
      this.fxjData = 25,
      this.jsjData= 13,
      this.yjjData= 40,
      this.gzjData= 55,
      this.zrtglData= 90, //仪表盘
      this.cldxlData= 85,
      this.yjczlData= 75,
      this.xjtglData= 54,
      this.fxyjData = [
        //风险预警
        {
          name: "风险级",
          value: 48,
          color: "#F56C6C"
        },
        {
          name: "警示级",
          value: 65,
          color: "#E6A23C"
        },
        {
          name: "预警级",
          value: 80,
          color: "#FFD52E"
        },
        {
          name: "关注级",
          value: 72,
          color: "#409EFF"
        }
      ],
      this.fxyjData1 = [
        //风险预警
        {
          name: "风险级",
          value: 4,
          color: "#F56C6C"
        },
        {
          name: "警示级",
          value: 7,
          color: "#E6A23C"
        },
        {
          name: "预警级",
          value: 6,
          color: "#FFD52E"
        },
        {
          name: "关注级",
          value: 14,
          color: "#409EFF"
        }
      ],
      this.fxczData1 = [80, 85, 45, 64], //风险处置
      this.fxczData2 = [75, 63, 43, 61],
      this.dqxjData1 = [
        //定期巡检
        {
          value: 4970,
          name: "远程巡检"
        },
        {
          value: 2234,
          name: "现场巡检"
        },
        {
          value: 1632,
          name: "专项巡检"
        }
      ],
      this.ycxjData= 8.2,
      this.xcxjData= 7.5,
      this.zxxjData= 9.5,
      setTimeout(() => {
        loading.close()
        this.piedemo();
      }, 800);
    },
    clickDY() {
      this.showDate = 2;
      this.selectTime = "当月";
      var loading = this.$loading({
        lock:true,
        text:"加载中",
        spinner:"el-icon-loading",
        background:"rgba(0,0,0,0.7)"
      });
      this.zrpjData1 = 1800 //准入评级
      this.zrpjData2 = 1720
      this.zrpjData3 = 90
      this.zrData = [
        //拒件分布
        {
          name: "征信类",
          value: "120"
        },
        {
          name: "洗钱风险类",
          value: "210"
        },
        {
          name: "司法涉诉类",
          value: "130"
        },
        {
          name: "内部黑名单类",
          value: "360"
        },
        {
          name: "外部黑名单类",
          value: "225"
        }
      ],
      this.shuiqiuData = 0.45, //存量评级
      this.fxjData = 65,
      this.jsjData= 43,
      this.yjjData= 30,
      this.gzjData= 55,
      this.zrtglData= 70, //仪表盘
      this.cldxlData= 65,
      this.yjczlData= 35,
      this.xjtglData= 24,
      this.fxyjData = [
        //风险预警
        {
          name: "风险级",
          value: 148,
          color: "#F56C6C"
        },
        {
          name: "警示级",
          value: 165,
          color: "#E6A23C"
        },
        {
          name: "预警级",
          value: 480,
          color: "#FFD52E"
        },
        {
          name: "关注级",
          value: 272,
          color: "#409EFF"
        }
      ],
      this.fxyjData1 = [
        //风险预警
        {
          name: "风险级",
          value: 14,
          color: "#F56C6C"
        },
        {
          name: "警示级",
          value: 17,
          color: "#E6A23C"
        },
        {
          name: "预警级",
          value: 46,
          color: "#FFD52E"
        },
        {
          name: "关注级",
          value: 24,
          color: "#409EFF"
        }
      ],
      this.fxczData1 = [180, 285, 145, 264], //风险处置
      this.fxczData2 = [175, 263, 143, 261],
      this.dqxjData1 = [
        //定期巡检
        {
          value: 14970,
          name: "远程巡检"
        },
        {
          value: 12234,
          name: "现场巡检"
        },
        {
          value: 21632,
          name: "专项巡检"
        }
      ],
      this.ycxjData= 5.2,
      this.xcxjData= 7.5,
      this.zxxjData= 4.5,
      setTimeout(() => {
        loading.close()
        this.piedemo();
      }, 800);
    
    },
    clickDN() {
      this.showDate = 3;
      this.selectTime = "当年";
      var loading = this.$loading({
        lock:true,
        text:"加载中",
        spinner:"el-icon-loading",
        background:"rgba(0,0,0,0.7)"
      });
      this.zrpjData1 = 24800 //准入评级
      this.zrpjData2 = 23720
      this.zrpjData3 = 90
      this.zrData = [
        //拒件分布
        {
          name: "征信类",
          value: "400"
        },
        {
          name: "洗钱风险类",
          value: "900"
        },
        {
          name: "司法涉诉类",
          value: "360"
        },
        {
          name: "内部黑名单类",
          value: "650"
        },
        {
          name: "外部黑名单类",
          value: "251"
        }
      ],
      this.shuiqiuData = 0.75, //存量评级
      this.fxjData = 25,
      this.jsjData= 13,
      this.yjjData= 7,
      this.gzjData= 8,
      this.zrtglData= 60, //仪表盘
      this.cldxlData= 45,
      this.yjczlData= 35,
      this.xjtglData= 24,
      this.fxyjData = [
        //风险预警
        {
          name: "风险级",
          value: 149,
          color: "#F56C6C"
        },
        {
          name: "警示级",
          value: 1265,
          color: "#E6A23C"
        },
        {
          name: "预警级",
          value: 4280,
          color: "#FFD52E"
        },
        {
          name: "关注级",
          value: 872,
          color: "#409EFF"
        }
      ],
      this.fxyjData1 = [
        //风险预警
        {
          name: "风险级",
          value: 414,
          color: "#F56C6C"
        },
        {
          name: "警示级",
          value: 217,
          color: "#E6A23C"
        },
        {
          name: "预警级",
          value: 126,
          color: "#FFD52E"
        },
        {
          name: "关注级",
          value: 145,
          color: "#409EFF"
        }
      ],
      this.fxczData1 = [4280, 2485, 4345, 2464], //风险处置
      this.fxczData2 = [3275, 763, 543, 1261],
      this.dqxjData1 = [
        //定期巡检
        {
          value: 44970,
          name: "远程巡检"
        },
        {
          value: 32234,
          name: "现场巡检"
        },
        {
          value: 21632,
          name: "专项巡检"
        }
      ],
      this.ycxjData= 4.2,
      this.xcxjData= 3.5,
      this.zxxjData= 6.5,
      setTimeout(() => {
        loading.close()
        this.piedemo();
      }, 800);
    
    },
    // 预警 存量 准入 巡检  切换
    clickYJ() {
      var loading = this.$loading({
        lock:true,
        text:"加载中",
        spinner:"el-icon-loading",
        background:"rgba(0,0,0,0.7)"
      });
      this.shows = 1;
      this.dataType = "风险预警";
      this.box4PieData = ["预警数", "处置数", "预警处置率(%)"];
       var dituNewData = [
      { name: "福建", value: 1663, value1: 2431, value2: 0.712880210289148 },
      { name: "上海", value: 2441, value1: 2323, value2: 0.951659156083572 },
      { name: "北京", value: 1610, value1: 1555, value2: 0.86583850931677 },
      { name: "广东", value: 2100, value1: 2097, value2: 0.998571428571429 },
      { name: "深圳", value: 1202, value1: 1112, value2: 0.925124792013311 },
      { name: "山东", value: 2325, value1: 2300, value2: 0.989247311827957 },
      { name: "江苏", value: 1124, value1: 1002, value2: 0.718627450980392 },
      { name: "浙江", value: 1559, value1: 2100, value2: 0.929614873837981 },
      { name: "大连", value: 1789, value1: 2033, value2: 0.968697596422582 },
      { name: "厦门", value: 2166, value1: 730, value2: 0.784803001876173 },
      { name: "重庆", value: 2423, value1: 1897, value2: 0.937716262975779 },
      { name: "湖北", value: 2355, value1: 2100, value2: 0.89171974522293 },
      { name: "天津", value: 1002, value1: 574, value2: 0.872255489021956 },
      { name: "宁波", value: 2133, value1: 1795, value2: 0.241537740271918 },
      { name: "湖南", value: 1704, value1: 2097, value2: 0.634685230024213 },
      { name: "青岛", value: 1548, value1: 2456, value2: 0.963893249607535 },
      { name: "河南", value: 3001, value1: 2764, value2: 0.921026324558481 },
      { name: "河北", value: 2610, value1: 2055, value2: 0.78735632183908 },
      { name: "苏州", value: 3996, value1: 1947, value2: 0.975450901803607 },
      { name: "四川", value: 2035, value1: 1475, value2: 0.87051597051597 },
      { name: "云南", value: 2855, value1: 2724, value2: 0.954115586690018 },
      { name: "陕西", value: 2627, value1: 1277, value2: 0.87619384506544 },
      { name: "广西", value: 2544, value1: 2341, value2: 0.920204402515723 },
      { name: "宁夏", value: 2210, value1: 2201, value2: 0.995927601809955 },
      { name: "青海", value: 2444, value1: 1386, value2: 0.812602291325696 },
      { name: "江西", value: 2031, value1: 1799, value2: 0.285770556376169 },
      { name: "黑龙江", value: 2613, value1: 2548, value2: 0.975124378109453 },
      { name: "吉林", value: 3212, value1: 2899, value2: 0.902552926525529 },
      { name: "山西", value: 2214, value1: 2455, value2: 0.472423596304193 },
      { name: "甘肃", value: 1377, value1: 2247, value2: 0.917176809506662 },
      { name: "辽宁", value: 1491, value1: 2404, value2: 0.344640706543557 },
      { name: "海南", value: 1045, value1: 687, value2: 0.75311004784689 },
      { name: "内蒙古", value: 1160, value1: 1160, value2: 1 },
      { name: "安徽", value: 1655, value1: 1944, value2: 0.873319755600815 },
      { name: "新疆", value: 2234, value1: 1518, value2: 0.948075201432408 },
      { name: "贵州", value: 1496, value1: 1700, value2: 0.89662447257384 },
      { name: "西藏", value: 756, value1: 712, value2: 0.941798941798942 }
    ];
    this.dituData = dituNewData;
    dituNewData.sort(function(a, b) {
      if (a.value > b.value) {
        return -1;
      } else if (a.value < b.value) {
        return 1;
      }
      return 0;
    });
    var itemName = [];
    var itemValue1 = [];
    var itemValue2 = [];
    var itemValue3 = [];
    dituNewData.map(item => {
      itemName.push(item.name);
      itemValue1.push(parseFloat(item.value));
      itemValue2.push(parseFloat(item.value1));
      itemValue3.push((parseFloat(item.value2) * 100).toFixed(2));
    });
    this.zhihanglist = itemName;
    this.zsData = itemValue1;
    this.wclData = itemValue2;
    this.wclvData = itemValue3;
      this.box4PieDemo();
      setTimeout(() => {
        loading.close()
        this.piedemo();
      }, 800);
    },
    clickCL() {
      var loading = this.$loading({
        lock:true,
        text:"加载中",
        spinner:"el-icon-loading",
        background:"rgba(0,0,0,0.7)"
      });
      this.shows = 2;
      this.dataType = "存量评级";
      this.box4PieData = ["服务点数", "中高风险服务点数", "占比(%)"];
       var dituNewData = [
      { name: "福建", value: 1663, value1: 2431, value2: 0.712880210289148 },
      { name: "上海", value: 2441, value1: 2323, value2: 0.951659156083572 },
      { name: "北京", value: 1610, value1: 1555, value2: 0.86583850931677 },
      { name: "广东", value: 2100, value1: 2097, value2: 0.998571428571429 },
      { name: "深圳", value: 1202, value1: 1112, value2: 0.925124792013311 },
      { name: "山东", value: 2325, value1: 2300, value2: 0.989247311827957 },
      { name: "江苏", value: 1124, value1: 1002, value2: 0.718627450980392 },
      { name: "浙江", value: 2259, value1: 2100, value2: 0.929614873837981 },
      { name: "大连", value: 2789, value1: 1733, value2: 0.968697596422582 },
      { name: "厦门", value: 1066, value1: 730, value2: 0.784803001876173 },
      { name: "重庆", value: 2423, value1: 1897, value2: 0.937716262975779 },
      { name: "湖北", value: 1355, value1: 2100, value2: 0.89171974522293 },
      { name: "天津", value: 2002, value1: 1874, value2: 0.872255489021956 },
      { name: "宁波", value: 2133, value1: 2095, value2: 0.241537740271918 },
      { name: "湖南", value: 2304, value1: 2097, value2: 0.634685230024213 },
      { name: "青岛", value: 1548, value1: 2756, value2: 0.963893249607535 },
      { name: "河南", value: 2001, value1: 1464, value2: 0.921026324558481 },
      { name: "河北", value: 2610, value1: 2055, value2: 0.78735632183908 },
      { name: "苏州", value: 2996, value1: 1947, value2: 0.975450901803607 },
      { name: "四川", value: 2035, value1: 1975, value2: 0.87051597051597 },
      { name: "云南", value: 3855, value1: 2724, value2: 0.954115586690018 },
      { name: "陕西", value: 2827, value1: 2477, value2: 0.87619384506544 },
      { name: "广西", value: 2544, value1: 2341, value2: 0.920204402515723 },
      { name: "宁夏", value: 2210, value1: 2201, value2: 0.995927601809955 },
      { name: "青海", value: 2444, value1: 1986, value2: 0.812602291325696 },
      { name: "江西", value: 2031, value1: 1799, value2: 0.285770556376169 },
      { name: "黑龙江", value: 2613, value1: 2548, value2: 0.975124378109453 },
      { name: "吉林", value: 3212, value1: 1699, value2: 0.902552926525529 },
      { name: "山西", value: 2214, value1: 2455, value2: 0.472423596304193 },
      { name: "甘肃", value: 2777, value1: 1947, value2: 0.917176809506662 },
      { name: "辽宁", value: 1491, value1: 1504, value2: 0.344640706543557 },
      { name: "海南", value: 1045, value1: 787, value2: 0.75311004784689 },
      { name: "内蒙古", value: 1160, value1: 1160, value2: 1 },
      { name: "安徽", value: 2455, value1: 2144, value2: 0.873319755600815 },
      { name: "新疆", value: 2234, value1: 2118, value2: 0.948075201432408 },
      { name: "贵州", value: 1896, value1: 1700, value2: 0.89662447257384 },
      { name: "西藏", value: 756, value1: 712, value2: 0.941798941798942 }
    ];
    this.dituData = dituNewData;
    dituNewData.sort(function(a, b) {
      if (a.value > b.value) {
        return -1;
      } else if (a.value < b.value) {
        return 1;
      }
      return 0;
    });
    var itemName = [];
    var itemValue1 = [];
    var itemValue2 = [];
    var itemValue3 = [];
    dituNewData.map(item => {
      itemName.push(item.name);
      itemValue1.push(parseFloat(item.value));
      itemValue2.push(parseFloat(item.value1));
      itemValue3.push((parseFloat(item.value2) * 100).toFixed(2));
    });
    this.zhihanglist = itemName;
    this.zsData = itemValue1;
    this.wclData = itemValue2;
    this.wclvData = itemValue3;
      this.box4PieDemo();
      setTimeout(() => {
        loading.close()
        this.piedemo();
      }, 800);
    },
    clickZR() {
      var loading = this.$loading({
        lock:true,
        text:"加载中",
        spinner:"el-icon-loading",
        background:"rgba(0,0,0,0.7)"
      });
      this.shows = 3;
      this.dataType = "准入评级";
      this.box4PieData = ["进件数", "通过数", "准入通过率(%)"];
      var dituNewData = [
      { name: "福建", value: 1663, value1: 2431, value2: 0.712880210289148 },
      { name: "上海", value: 2441, value1: 2323, value2: 0.951659156083572 },
      { name: "北京", value: 1610, value1: 1555, value2: 0.86583850931677 },
      { name: "广东", value: 2100, value1: 2097, value2: 0.998571428571429 },
      { name: "深圳", value: 1202, value1: 1112, value2: 0.925124792013311 },
      { name: "山东", value: 2325, value1: 2300, value2: 0.989247311827957 },
      { name: "江苏", value: 1124, value1: 1002, value2: 0.718627450980392 },
      { name: "浙江", value: 2259, value1: 2100, value2: 0.929614873837981 },
      { name: "大连", value: 1789, value1: 1733, value2: 0.968697596422582 },
      { name: "厦门", value: 1066, value1: 730, value2: 0.784803001876173 },
      { name: "重庆", value: 2423, value1: 1897, value2: 0.937716262975779 },
      { name: "湖北", value: 2355, value1: 2100, value2: 0.89171974522293 },
      { name: "天津", value: 1002, value1: 874, value2: 0.872255489021956 },
      { name: "宁波", value: 2133, value1: 1795, value2: 0.241537740271918 },
      { name: "湖南", value: 2304, value1: 2097, value2: 0.634685230024213 },
      { name: "青岛", value: 1548, value1: 2456, value2: 0.963893249607535 },
      { name: "河南", value: 3001, value1: 2764, value2: 0.921026324558481 },
      { name: "河北", value: 2610, value1: 2055, value2: 0.78735632183908 },
      { name: "苏州", value: 3996, value1: 1947, value2: 0.975450901803607 },
      { name: "四川", value: 2035, value1: 1975, value2: 0.87051597051597 },
      { name: "云南", value: 2855, value1: 2724, value2: 0.954115586690018 },
      { name: "陕西", value: 2827, value1: 2477, value2: 0.87619384506544 },
      { name: "广西", value: 2544, value1: 2341, value2: 0.920204402515723 },
      { name: "宁夏", value: 2210, value1: 2201, value2: 0.995927601809955 },
      { name: "青海", value: 2444, value1: 1986, value2: 0.812602291325696 },
      { name: "江西", value: 2031, value1: 1799, value2: 0.285770556376169 },
      { name: "黑龙江", value: 2613, value1: 2548, value2: 0.975124378109453 },
      { name: "吉林", value: 3212, value1: 2899, value2: 0.902552926525529 },
      { name: "山西", value: 2214, value1: 2455, value2: 0.472423596304193 },
      { name: "甘肃", value: 2777, value1: 2547, value2: 0.917176809506662 },
      { name: "辽宁", value: 1491, value1: 2104, value2: 0.344640706543557 },
      { name: "海南", value: 1045, value1: 787, value2: 0.75311004784689 },
      { name: "内蒙古", value: 1160, value1: 1160, value2: 1 },
      { name: "安徽", value: 2455, value1: 2144, value2: 0.873319755600815 },
      { name: "新疆", value: 2234, value1: 2118, value2: 0.948075201432408 },
      { name: "贵州", value: 1896, value1: 1700, value2: 0.89662447257384 },
      { name: "西藏", value: 756, value1: 712, value2: 0.941798941798942 }
    ];
    this.dituData = dituNewData;
    dituNewData.sort(function(a, b) {
      if (a.value > b.value) {
        return -1;
      } else if (a.value < b.value) {
        return 1;
      }
      return 0;
    });
    var itemName = [];
    var itemValue1 = [];
    var itemValue2 = [];
    var itemValue3 = [];
    dituNewData.map(item => {
      itemName.push(item.name);
      itemValue1.push(parseFloat(item.value));
      itemValue2.push(parseFloat(item.value1));
      itemValue3.push((parseFloat(item.value2) * 100).toFixed(2));
    });
    this.zhihanglist = itemName;
    this.zsData = itemValue1;
    this.wclData = itemValue2;
    this.wclvData = itemValue3;
    this.box4PieDemo();
    setTimeout(() => {
        loading.close()
        this.piedemo();
      }, 800);
    },
    clickXJ() {
      var loading = this.$loading({
        lock:true,
        text:"加载中",
        spinner:"el-icon-loading",
        background:"rgba(0,0,0,0.7)"
      });
      this.shows = 4;
      this.dataType = "巡检";
      this.box4PieData = ["服务点数", "巡检通过服务点数", "巡检通过率(%)"];
       var dituNewData = [
      { name: "福建", value: 2663, value1: 2431, value2: 0.712880210289148 },
      { name: "上海", value: 2441, value1: 2323, value2: 0.951659156083572 },
      { name: "北京", value: 1810, value1: 1555, value2: 0.86583850931677 },
      { name: "广东", value: 2100, value1: 2097, value2: 0.998571428571429 },
      { name: "深圳", value: 1202, value1: 1112, value2: 0.925124792013311 },
      { name: "山东", value: 2325, value1: 2300, value2: 0.989247311827957 },
      { name: "江苏", value: 1124, value1: 1002, value2: 0.718627450980392 },
      { name: "浙江", value: 2259, value1: 2100, value2: 0.929614873837981 },
      { name: "大连", value: 2789, value1: 1733, value2: 0.968697596422582 },
      { name: "厦门", value: 1066, value1: 730, value2: 0.784803001876173 },
      { name: "重庆", value: 1423, value1: 1897, value2: 0.937716262975779 },
      { name: "湖北", value: 2355, value1: 2100, value2: 0.89171974522293 },
      { name: "天津", value: 1802, value1: 874, value2: 0.872255489021956 },
      { name: "宁波", value: 2733, value1: 1795, value2: 0.241537740271918 },
      { name: "湖南", value: 2304, value1: 2097, value2: 0.634685230024213 },
      { name: "青岛", value: 1548, value1: 2456, value2: 0.963893249607535 },
      { name: "河南", value: 3201, value1: 2764, value2: 0.921026324558481 },
      { name: "河北", value: 2610, value1: 2055, value2: 0.78735632183908 },
      { name: "苏州", value: 3996, value1: 1947, value2: 0.975450901803607 },
      { name: "四川", value: 1035, value1: 1975, value2: 0.87051597051597 },
      { name: "云南", value: 2855, value1: 2724, value2: 0.954115586690018 },
      { name: "陕西", value: 4827, value1: 2477, value2: 0.87619384506544 },
      { name: "广西", value: 2544, value1: 2341, value2: 0.920204402515723 },
      { name: "宁夏", value: 1210, value1: 2201, value2: 0.995927601809955 },
      { name: "青海", value: 1644, value1: 1986, value2: 0.812602291325696 },
      { name: "江西", value: 2031, value1: 1799, value2: 0.285770556376169 },
      { name: "黑龙江", value: 2613, value1: 2548, value2: 0.975124378109453 },
      { name: "吉林", value: 3212, value1: 2899, value2: 0.902552926525529 },
      { name: "山西", value: 2214, value1: 2455, value2: 0.472423596304193 },
      { name: "甘肃", value: 2777, value1: 2547, value2: 0.917176809506662 },
      { name: "辽宁", value: 1491, value1: 2104, value2: 0.344640706543557 },
      { name: "海南", value: 2545, value1: 787, value2: 0.75311004784689 },
      { name: "内蒙古", value: 1160, value1: 1160, value2: 1 },
      { name: "安徽", value: 2455, value1: 2144, value2: 0.873319755600815 },
      { name: "新疆", value: 2234, value1: 2118, value2: 0.948075201432408 },
      { name: "贵州", value: 1896, value1: 1700, value2: 0.89662447257384 },
      { name: "西藏", value: 756, value1: 712, value2: 0.941798941798942 }
    ];
    this.dituData = dituNewData;
    dituNewData.sort(function(a, b) {
      if (a.value > b.value) {
        return -1;
      } else if (a.value < b.value) {
        return 1;
      }
      return 0;
    });
    var itemName = [];
    var itemValue1 = [];
    var itemValue2 = [];
    var itemValue3 = [];
    dituNewData.map(item => {
      itemName.push(item.name);
      itemValue1.push(parseFloat(item.value));
      itemValue2.push(parseFloat(item.value1));
      itemValue3.push((parseFloat(item.value2) * 100).toFixed(2));
    });
    this.zhihanglist = itemName;
    this.zsData = itemValue1;
    this.wclData = itemValue2;
    this.wclvData = itemValue3;
      this.box4PieDemo();
      setTimeout(() => {
        loading.close()
        this.piedemo();
      }, 800);
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
    PieClick(value) {
      this.province = value.name;
      alert(value.id);
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
      // 全国地图渐变
      let dituJB1 = this.$echarts.init(document.getElementById("ditu1"));
      // 省份点击联动
      let _that = this;
      dituJB1.on("click", function(param) {
        console.log(param);
        // _that.PieClick(param.data);
      });
      // dituJB1.getZr().on("click", res => {
      //   // 点击空白处
      //   _that.PieClick1(res.target);
      // });
      var mapName = "china";
      var dataJB = this.dituData;
      var dataJB1 = [
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
      var geoCoordMap = {
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
      dituJB1.setOption({
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
          max: 3300,
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
          top: "30%",
          bottom: "22%" //也可设置left和right设置距离来控制图表的大小
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
            textStyle: {
              color: "#fff" //X轴文字颜色
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
              show: true,
              textStyle: {
                color: "#fff",
                fontSize: this.setFontsize(0.12)
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
            end: 40,
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
    xunJianPie() {
      let Pie1 = this.$echarts.init(document.getElementById("Pie1")); //巡检处理总量
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
            color: ["#FBFE27", "#FE5050", "#1DB7E5"], //'#FBFE27','rgb(11,228,96)','#FE5050'
            data: this.dqxjData1.sort(function(a, b) {
              return a.value - b.value;
            }),
            roseType: "radius",

            label: {
              normal: {
                formatter: ["{c|{c}个}", "{b|{b}}"].join("\n"),
                rich: {
                  c: {
                    color: "#77c8ff",
                    fontSize: 28,
                    fontWeight: "bold",
                    lineHeight: 5
                  },
                  b: {
                    color: "rgb(98,137,169)",
                    fontSize: 24,
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
      let Pie4 = this.$echarts.init(document.getElementById("Pie4")); //巡检处理率
      var dataArry = {
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
            name: "远程巡检",
            type: "gauge",
            color: ["#f00"],
            min: 0,
            max: 8,
            splitNumber: 8,
            radius: "30%",
            center: ["20%", "55%"],
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
                value: this.ycxjData,
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
            center: ["40%", "55%"],
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
                value: this.xcxjData,
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
            center: ["62%", "55%"],
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
                value: this.zxxjData,
                name: "专项巡检"
              }
            ]
          }
        ]
      });
      this.$nextTick(() => {
        Pie1.resize();
      });
      this.$nextTick(() => {
        Pie4.resize();
      });
    },
    // 饼图
    piedemo() {
      let Pie1 = this.$echarts.init(document.getElementById("Pie1")); //巡检处理总量
      let Pie2 = this.$echarts.init(document.getElementById("Pie2")); //风险处置柱状图
      let Pie4 = this.$echarts.init(document.getElementById("Pie4")); //巡检处理率
      let zrPie = this.$echarts.init(document.getElementById("zrPie")); //准入饼图
      let sqPie = this.$echarts.init(document.getElementById("sqPie")); //水球图
      let ybpPie = this.$echarts.init(document.getElementById("ybpPie")); //仪表盘
      let yjPie = this.$echarts.init(document.getElementById("yjPie")); //预警柱状图
      let box4Pie = this.$echarts.init(document.getElementById("box4Pie")); //预警柱状图
      // 支行柱状图+折线图
      var that = this;
      box4Pie.setOption({
        grid: {
          x: 50,
          x2: 50,
          top: "30%",
          bottom: "22%" //也可设置left和right设置距离来控制图表的大小
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
            textStyle: {
              color: "#fff" //X轴文字颜色
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
              show: true,
              textStyle: {
                color: "#fff",
                fontSize: this.setFontsize(0.12)
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
            end: 40,
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
                fontSize: 18
              }
            },
            data: label.map(value => {
              return {
                value: value[0],
                textStyle: {
                  align: "center",
                  color: value[1],
                  fontSize: 24
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
            data: dataYJ1
          }
        ]
      });
      // 仪表盘
      ybpPie.setOption({
        title: [
          {
            x: "9.5%",
            y: "80%",
            //bottom: 100,
            text: "准入通过率",
            textStyle: {
              fontWeight: "normal",
              fontSize: 32,
              color: "#fff"
            }
          },
          {
            x: "32.5%",
            y: "80%",
            //bottom: 100,
            text: "存量低险率",
            textStyle: {
              fontWeight: "normal",
              fontSize: 32,
              color: "#fff"
            }
          },
          {
            x: "56.5%",
            y: "80%",
            //bottom: 100,
            text: "预警处置率",
            textStyle: {
              fontWeight: "normal",
              fontSize: 32,
              color: "#fff"
            }
          },
          {
            x: "79.5%",
            y: "80%",
            //bottom: 100,
            text: "巡检通过率",
            textStyle: {
              fontWeight: "normal",
              fontSize: 32,
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
                fontSize: 24
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
                fontSize: 45
              }
            },
            data: [{ value: this.zrtglData }]
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
                fontSize: 24
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
                fontSize: 45
              }
            },
            data: [{ value: this.cldxlData }]
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
                fontSize: 24
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
                fontSize: 45
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
                fontSize: 24
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
                fontSize: 45
              }
            },
            data: [{ value: this.xjtglData }]
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
            data: [this.shuiqiuData, this.shuiqiuData, this.shuiqiuData], // data个数代表波浪数
            backgroundStyle: {
              borderWidth: 1,
              color: "rgb(255,0,255,0.1)"
            },
            label: {
              normal: {
                formatter: (this.shuiqiuData * 100).toFixed(2) + "%",
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
        "征信类",
        "洗钱风险类",
        "司法涉诉类",
        "内部黑名单类",
        "外部黑名单类"
      ];
      var colorList1 = ["#73ACFF", "#9E87FF", "#FD866A", "#FDD56A","#02C81A"];
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
            fontSize: 29
          },
          data: legendData
        },
        series: [
          {
            type: "pie",
            z: 3,
            center: ["61%", "55%"],
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
      //  仪表盘
      var dataArry = {
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
            name: "远程巡检",
            type: "gauge",
            color: ["#f00"],
            min: 0,
            max: 8,
            splitNumber: 8,
            radius: "30%",
            center: ["20%", "55%"],
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
                value: this.ycxjData,
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
            center: ["40%", "55%"],
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
                value: this.xcxjData,
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
            center: ["62%", "55%"],
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
                value: this.zxxjData,
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
      // 风险处置
      var data1 = this.fxczData1;
      var data3 = this.fxczData2;
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
          top: "6%",
          data: ["预警总数", "处理数"],
          textStyle: {
            color: "#fff",
            fontSize: 36
          }
        },
        grid: {
          //图表的位置
          top: "22%",
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
                fontSize: 34,
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
            color: ["#FBFE27", "#FE5050", "#1DB7E5"], //'#FBFE27','rgb(11,228,96)','#FE5050'
            data: this.dqxjData1.sort(function(a, b) {
              return a.value - b.value;
            }),
            roseType: "radius",

            label: {
              normal: {
                formatter: ["{c|{c}个}", "{b|{b}}"].join("\n"),
                rich: {
                  c: {
                    color: "#77c8ff",
                    fontSize: 30,
                    fontWeight: "bold",
                    lineHeight: 5
                  },
                  b: {
                    color: "rgb(98,137,169)",
                    fontSize: 24,
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
  watch: {},
  created() {
    this.getData();
    // 数据解析备用
    // box4Pie数据
    var dituNewData = [
      { name: "福建", value: 2663, value1: 2431, value2: 0.912880210289148 },
      { name: "上海", value: 2441, value1: 2323, value2: 0.951659156083572 },
      { name: "北京", value: 1610, value1: 1555, value2: 0.96583850931677 },
      { name: "广东", value: 2100, value1: 2097, value2: 0.998571428571429 },
      { name: "深圳", value: 1202, value1: 1112, value2: 0.925124792013311 },
      { name: "山东", value: 2325, value1: 2300, value2: 0.989247311827957 },
      { name: "江苏", value: 1224, value1: 1002, value2: 0.818627450980392 },
      { name: "浙江", value: 2259, value1: 2100, value2: 0.929614873837981 },
      { name: "大连", value: 1789, value1: 1733, value2: 0.968697596422582 },
      { name: "厦门", value: 1066, value1: 730, value2: 0.684803001876173 },
      { name: "重庆", value: 2023, value1: 1897, value2: 0.937716262975779 },
      { name: "湖北", value: 2355, value1: 2100, value2: 0.89171974522293 },
      { name: "天津", value: 1002, value1: 874, value2: 0.872255489021956 },
      { name: "宁波", value: 2133, value1: 1795, value2: 0.841537740271918 },
      { name: "湖南", value: 3304, value1: 2097, value2: 0.634685230024213 },
      { name: "青岛", value: 2548, value1: 2456, value2: 0.963893249607535 },
      { name: "河南", value: 3001, value1: 2764, value2: 0.921026324558481 },
      { name: "河北", value: 2610, value1: 2055, value2: 0.78735632183908 },
      { name: "苏州", value: 1996, value1: 1947, value2: 0.975450901803607 },
      { name: "四川", value: 2035, value1: 1975, value2: 0.97051597051597 },
      { name: "云南", value: 2855, value1: 2724, value2: 0.954115586690018 },
      { name: "陕西", value: 2827, value1: 2477, value2: 0.87619384506544 },
      { name: "广西", value: 2544, value1: 2341, value2: 0.920204402515723 },
      { name: "宁夏", value: 2210, value1: 2201, value2: 0.995927601809955 },
      { name: "青海", value: 2444, value1: 1986, value2: 0.812602291325696 },
      { name: "江西", value: 2031, value1: 1799, value2: 0.885770556376169 },
      { name: "黑龙江", value: 2613, value1: 2548, value2: 0.975124378109453 },
      { name: "吉林", value: 3212, value1: 2899, value2: 0.902552926525529 },
      { name: "山西", value: 2814, value1: 2455, value2: 0.872423596304193 },
      { name: "甘肃", value: 2777, value1: 2547, value2: 0.917176809506662 },
      { name: "辽宁", value: 2491, value1: 2104, value2: 0.844640706543557 },
      { name: "海南", value: 1045, value1: 787, value2: 0.75311004784689 },
      { name: "内蒙古", value: 1160, value1: 1160, value2: 1 },
      { name: "安徽", value: 2455, value1: 2144, value2: 0.873319755600815 },
      { name: "新疆", value: 2234, value1: 2118, value2: 0.948075201432408 },
      { name: "贵州", value: 1896, value1: 1700, value2: 0.89662447257384 },
      { name: "西藏", value: 756, value1: 712, value2: 0.941798941798942 }
    ];
    this.dituData = dituNewData;
    dituNewData.sort(function(a, b) {
      if (a.value > b.value) {
        return -1;
      } else if (a.value < b.value) {
        return 1;
      }
      return 0;
    });
    var itemName = [];
    var itemValue1 = [];
    var itemValue2 = [];
    var itemValue3 = [];
    dituNewData.map(item => {
      itemName.push(item.name);
      itemValue1.push(parseFloat(item.value));
      itemValue2.push(parseFloat(item.value1));
      itemValue3.push((parseFloat(item.value2) * 100).toFixed(2));
    });
    this.zhihanglist = itemName;
    this.zsData = itemValue1;
    this.wclData = itemValue2;
    this.wclvData = itemValue3;
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
  bottom: -56%;
  left: -60%;
  transform: scale(0.38);
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
  width: 250%;
  height: 170%;
  position: absolute;
  left: -75%;
  top: -33%;
  transform: scale(0.4);
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
      margin-top: 17px;
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
      margin-top: 22px;
      letter-spacing: 2px;
      height: 30%;
      line-height: 30px;
      color: #80ccff;
    }
  }
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  user-select: none;
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
        margin: 0px auto;
        position: absolute;
        left:10%;
        top:32%;
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
  .clBox .sqPie {
    width: 36%;
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