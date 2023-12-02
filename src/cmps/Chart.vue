<template>
    <div class="chart-container">
        <Line :data="data" :options="options" />
    </div>
</template>

<script>
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import { Line } from 'vue-chartjs'

const chartConfig = {
    options: {
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
            mode: 'index', // or 'nearest'
            intersect: false,
            callbacks: {
                title: function (tooltipItem, data) {
                    // You can customize the title here, e.g., return data.labels[tooltipItem[0].index];
                    return '';
                },
                label: function (tooltipItem, data) {
                    const datasetLabel = data.datasets[tooltipItem.datasetIndex].label || '';
                    return datasetLabel + ': ' + tooltipItem.yLabel;
                },
            },
        },
    },
    data: {
        labels: [],
        datasets: [
            {
                label: 'Average USD market price across major bitcoin exchanges.',
                backgroundColor: '#35495e',
                borderColor: '#41B883',
                data: [],
                tension: 0.4,
                pointRadius: 0,
            }
        ]
    }
}

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

export default {
    props: ['timestamps', 'prices'],
    name: 'Chart',
    components: {
        Line
    },
    data() {
        chartConfig.data.labels = this.timestamps
        chartConfig.data.datasets[0].data = this.prices
        return chartConfig
    }
}
</script>

<style lang="scss">
.chart-container {
    height: 450px;
    margin-inline: 1rem;
}
</style>
