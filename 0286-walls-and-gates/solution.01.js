/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function(rooms) {
    const H = rooms.length
    const W = H && rooms[0].length
    
    for (let r = 0; r < H; r++) {
        for (let c = 0; c < W; c++) {
            if (rooms[r][c] === 0) {
                dfs(r, c, 0)
            }
        }
    }
    
    function dfs(r, c, distance) {
        if (r < 0 || c < 0 || r === H || c === W) return
        if (rooms[r][c] === -1 || rooms[r][c] < distance)
            return
        else
            rooms[r][c] = distance
        
        dfs(r+1, c, distance+1)
        dfs(r-1, c, distance+1)
        dfs(r, c+1, distance+1)
        dfs(r, c-1, distance+1)
    }
}

