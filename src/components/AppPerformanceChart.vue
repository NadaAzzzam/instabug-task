<template>
<div>

  <v-chart class="chart" :option="option" />

</div>
</template>

<script>
import moment from "moment";

import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { LineChart } from "echarts/charts";
import {
  LegendComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  VisualMapComponent,
  DataZoomComponent,
  MarkLineComponent,
  MarkAreaComponent,
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";

use([
  CanvasRenderer,
  LineChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  ToolboxComponent,
  GridComponent,
  VisualMapComponent,
  DataZoomComponent,
  MarkLineComponent,
  MarkAreaComponent,
]);

export default {
  name: "PerformanceChartComponent",

  components: {
    VChart,
  },
  provide: {
    [THEME_KEY]: "light",
  },
  props: ["chartData",'startDate',"endDate"],

  computed: {
    option() {
      return {
        title: {
          text: "Team Performance Index ",
          left: "center",
        },
        tooltip: {
          trigger: "axis",
        },
        xAxis: {
          type: "category",
          data: this.xAxisData,
        },
        yAxis: {
          type: "value",
        },
        visualMap: {
          top: 50,
          right: 10,
          pieces: [
            {
              gt: 0,
              lte: 50,
              color: "#FD0100",
            },
            {
              gt: 50,
              lte: 80,
              color: "#FBDB0F",
            },
            {
              gt: 80,
              lte: 100,
              color: "#93CE07",
            },
          ],
          outOfRange: {
            color: "#999",
          },
        },
        series: [
          {
            name: "Electricity",
            type: "line",
            data: this.yAxisData,
            markArea: {
              itemStyle: {
                color: "rgba(255, 173, 177, 0.4)",
              },
              data: [
                [
                  {
                    name: "Date Range",
                    xAxis: this.startDate,
                  },
                  {
                    xAxis: this.endDate,
                  },
                ],
              ],
            },
          },
        ],
      };
    },

    xAxisData() {
      return this.chartData.map((item) => this.formatDate(item.date_ms));
    },

    yAxisData() {
      return this.chartData.map((item) => +item.performance * 100);
    },
  },
  methods: {
    formatDate(dateInMs) {
      return moment(dateInMs).format("DD MMM YYYY");
    },
  },
};
</script>

<style scoped>
.chart {
  height: 400px;
}
</style>