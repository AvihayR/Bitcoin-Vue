<template>
    <div class="chart-container">
        <Line :data="data" :options="options" />
    </div>
</template>
<script>
import {
    Chart,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'vue-chartjs';

const chartConfig = {
    options: {
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
            mode: 'index',
            intersect: false,
            callbacks: {
                title: function (tooltipItem, data) {
                    return '';
                },
                label: function (tooltipItem, data) {
                    const datasetLabel =
                        data.datasets[tooltipItem.datasetIndex].label || '';
                    return datasetLabel + ': ' + tooltipItem.yLabel;
                },
            },
        },
    },
    data: {
        labels: [],
        datasets: [
            {
                label:
                    'Average USD market price across major bitcoin exchanges.',
                backgroundColor: '#35495e',
                borderColor: '#41B883',
                data: [],
                tension: 0.4,
                pointRadius: 0,
            },
        ],
    },
};

Chart.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export default {
    props: ['timestamps', 'prices'],
    name: 'Chart',
    components: {
        Line,
    },
    data() {
        chartConfig.data.labels = this.timestamps;
        chartConfig.data.datasets[0].data = this.prices;
        return chartConfig;
    },
};
</script>
<style lang="scss">
.chart-container {
    height: 450px;
    margin-inline: 1rem;

    @media (max-width: 550px) {
        margin-inline: unset;
    }
}
</style>