<template>
  <div>
    <h2>Metrics</h2>
    <!-- <b-row class="chartParent">
      <div center class="barChart">
        <BarChart></BarChart>
      </div>
      <br>
        <div center class="barChart">
          <LineChart :chart-data="datacollection"></LineChart>
        </div>
    </b-row> -->
    <!-- <hr> -->
    <b-row>
      <b-col>
        <div>
          <b-img center fluid src="../assets/bargraph_report_approval.png" alt="left image" />
          <br>
          <hr>
          <b-img  center fluid src="../assets/bargraph.png" alt="left image" />
        </div>
      </b-col>
      <b-col>
          <b-img  center fluid src="../assets/weathersnip.png" alt="left image" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import BarChart from '../components/charts/BarChartHome';
import BubbleChart from '../components/charts/BubbleChartHome';
import LineChart from '../components/charts/LineChartHome';

export default {
  components: {
    BarChart,
    LineChart
  },
  data () {
      return {
        datacollection: null
      }
    },
  mounted () {
    this.fillData()
  },
  methods: {
    fillData () {
      this.datacollection = {
        labels: [this.getRandomInt(), this.getRandomInt()],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#33DD1C',
            data: [this.getRandomInt(), this.getRandomInt()]
          }, {
            label: 'Data One',
            backgroundColor: '#33DD1C',
            data: [this.getRandomInt(), this.getRandomInt()]
          }
        ]
      }
    },
    getRandomInt () {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    }
  }
}
</script>

<style>
.title {
  color: #312377;
}
.barChart {
  width: 400px;
  height: 400px;
  flex-grow: 0;
  margin-left: 10px;
}
.chartParent {
  justify-content: center;
}
.chartImg {
  width: 800px;
  height: 200px;
}
.chartImg2 {
  width: 600px;
  height: 600px;
}

</style>
