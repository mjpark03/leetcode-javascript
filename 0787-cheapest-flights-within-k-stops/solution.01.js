/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, K) {
    let flightMap = {}
    for (const flight of flights) {
        const [from, to, price] = flight
        if (flightMap[from] === undefined)
            flightMap[from] = {}
        flightMap[from][to] = price
    }
    
    let priceQ = [[0, 0, src]]
    while (priceQ.length > 0) {
        const [price, stop, from] = priceQ.shift()
        if (stop > K+1)
            continue
        if (from == dst) return price
        
        const toList = flightMap[from]
        for (const to in toList) {
            priceQ.push([price+toList[to], stop+1, to])
        }
                        
        priceQ.sort((a,b) => a[0]-b[0])
    }
    
    return -1
}

