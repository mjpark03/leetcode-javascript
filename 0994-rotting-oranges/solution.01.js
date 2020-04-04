/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const H = grid.length
    const W = grid[0].length
    
    const queue = []
    let freshCount = 0
    let minutes = 0
    
    for (let i = 0; i < H; i++) {
        for (let j = 0; j < W; j++) {
            if (grid[i][j] === 2)
                queue.push([i,j])
            else if (grid[i][j] === 1)
                freshCount++
        }
    }
    
    while (queue.length > 0) {
        const size = queue.length
        
        for (let i = 0; i < size; i++) {
            const [x, y] = queue.shift()
            if (x-1 >= 0 && grid[x-1][y] === 1) {
                grid[x-1][y] = 2
                freshCount--
                queue.push([x-1, y])
            }

            if (x+1 < H && grid[x+1][y] === 1) {
                grid[x+1][y] = 2
                freshCount--
                queue.push([x+1, y])
            }

            if (y-1 >= 0 && grid[x][y-1] === 1) {
                grid[x][y-1] = 2
                freshCount--
                queue.push([x, y-1])
            }

            if (y+1 < W && grid[x][y+1] === 1) {
                grid[x][y+1] = 2
                freshCount--
                queue.push([x, y+1])
            }
        }
        
        
        if (queue.length > 0)
            minutes++
    }
    
    return freshCount === 0 ? minutes : -1
}
