import axios from "axios"

async function getRate() {
    const res = await axios.get('https://blockchain.info/tobtc?currency=USD&value=1')
    return res.data
}
async function getMarketPriceHistory() {
    const res = await axios.get('https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true')
    return res.data.values
}
async function getAvgBlockSize() {
    const res = await axios.get('https://api.blockchain.info/charts/avg-block-size?timespan=5months&format=json&cors=true')
    return res.data.values
}

export const bitcoinService = {
    getRate,
    getMarketPriceHistory,
    getAvgBlockSize,
}

