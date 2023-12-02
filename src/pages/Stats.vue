<template>
    <main>
        <h1>
            <span class="vue-color">₿TC</span>
            /
            <span class="vue-color">U$D</span>
            Statistics
        </h1>
        <Chart v-if="marketPriceHistory" v-bind:timestamps="timestamps" v-bind:prices="prices" />
    </main>
</template>
<script>
import { bitcoinService } from '../services/bitcoinService.js'
import Chart from '../cmps/Chart.vue'

export default {
    components: {
        Chart
    },
    data() {
        return {
            // rate: 0.00002569,
            // avgBlockSize: [{ x: 1688515200, y: 1.6932442774193548 }, { x: 1688515200, y: 1.6932442774193548 }],
            // marketPriceHistory: [{ x: 1688515200, y: 30774.87 }, { x: 1688515200, y: 30774.87 }],
            rate: 0,
            marketPriceHistory: null,
            avgBlockSize: null,
        }
    },
    computed: {
        timestamps() {
            if (!this.marketPriceHistory) return
            return this.marketPriceHistory.map(i => new Date(i.x * 1000).toLocaleDateString())
        },
        prices() {
            if (!this.marketPriceHistory) return
            return this.marketPriceHistory.map(i => i.y)
        }
    },
    async mounted() {
        this.rate = await bitcoinService.getRate()
        this.marketPriceHistory = await bitcoinService.getMarketPriceHistory()
        // this.avgBlockSize = await bitcoinService.getAvgBlockSize()
    },
}
</script>
<style lang="scss" scoped>
main {
    min-width: 90vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3rem;
    margin-inline: 1rem;

    h1 {
        margin-inline: auto;
    }
}
</style>