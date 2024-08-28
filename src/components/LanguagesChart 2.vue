<template>
  <div class="chart-container">
    <ul class="languages">
      <li>Romanian</li>
      <li>Russian</li>
      <li>German</li>
      <li>English</li>
    </ul>
    <canvas ref="chartRef"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Chart from 'chart.js/auto'

const chartRef = ref(null)

const createChart = () => {
  // Get the 2D drawing context of the canvas
  const ctx = chartRef.value.getContext('2d')

  // Create a linear gradient
  const gradient1 = ctx.createLinearGradient(0, 0, 400, 0)
  gradient1.addColorStop(0, 'rgba(211,84,0,1)')
  gradient1.addColorStop(1, 'rgba(244,164,96,1)')

  const gradient2 = ctx.createLinearGradient(0, 0, 400, 0)
  gradient2.addColorStop(0, 'rgba(244,164,96,1)')
  gradient2.addColorStop(1, 'rgba(88,147,212,1)')

  const gradient3 = ctx.createLinearGradient(0, 0, 400, 0)
  gradient3.addColorStop(0, 'rgba(88,147,212,1)')
  gradient3.addColorStop(1, 'rgba(36,65,107,1)')

  const gradient4 = ctx.createLinearGradient(0, 0, 400, 0)
  gradient4.addColorStop(0, 'rgba(36,65,107,1)')
  gradient4.addColorStop(1, 'rgba(235,235,235,1)')

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Romanian', 'Russian', 'German', 'English'],
      datasets: [
        {
          label: 'Languages',
          data: [100, 90, 70, 60],
          backgroundColor: [gradient1, gradient2, gradient3, gradient4],
          barThickness: 25
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      aspectRatio: 4,
      indexAxis: 'y',
      scales: {
        x: {
          grid: {
            display: false
          },
          ticks: {
            display: false
          }
        },
        y: {
          grid: {
            display: false
          },
          ticks: {
            display: false
          }
        }
      },
      plugins: {
        legend: {
          display: false
        }
      }
    }
  })
}

onMounted(() => {
  createChart()
})
</script>

<style scoped>
.chart-container {
  width: 100vmin;
  height: 20vmin;
  display: flex;
}
canvas {
  width: 100%;
}
.languages {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.3vmin;
  list-style: none;
  font-family: 'Raleway', sans-serif;
  color: #393737;
  letter-spacing: 0.2vmin;
}
</style>
