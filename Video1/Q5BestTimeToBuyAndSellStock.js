// Q5 Best Time to Buy and Sell Stock
// StockPrices=[7,1,3,5,8] --->>>> Buy at 1 sell at 8 Profit 7
// StockPrices=[4,5,13,34,9] --->>>> Buy at 4 sell at 34 Profit 30


// Approach 1
const maxProfit1=(prices)=>{
    let maxProfit=0
for (let i = 0; i < prices.length; i++) {
    for (let j = i+1; j < prices.length; j++) {
        if(prices[j]-prices[i]>maxProfit)
        maxProfit=prices[j]-prices[i]
    }
}
return maxProfit
}

console.log(maxProfit1([7,1,3,15,8]))

// Approach 2
const maxProfit=(prices)=>{
    let minPrice=prices[0]
    let maxProfit=0

    for (let i = 0; i < prices.length; i++) {
        const currentPrice=prices[i]
        minPrice=Math.min(minPrice,currentPrice)
        maxProfit=Math.max(maxProfit,currentPrice-minPrice)
    }
    return maxProfit
}

console.log(maxProfit([4,5,13,34,9]))