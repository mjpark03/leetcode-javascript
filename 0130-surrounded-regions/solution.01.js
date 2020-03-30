/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    const H = board.length
    const W = H && board[0].length
    
    for (let r = 0; r < H; r++) {
        for (let c = 0; c < W; c++) {
            if (board[r][c] === 'O' && (r === 0 || r === H-1 || c === 0 || c === W-1))
                dfs(r, c)
        }
    }
    
    for (let r = 0; r < H; r++) {
        for (let c = 0; c < W; c++) {
            if (board[r][c] === 'B')
                board[r][c] = 'O'
            else
                board[r][c] = 'X'
        }
    }
    
    function dfs(r, c) {
        if (r < 0 || r === H || c < 0 || c === W) return
        if (board[r][c] === 'X' || board[r][c] === 'B') return
        
        board[r][c] = 'B'
        dfs(r+1, c)
        dfs(r-1, c)
        dfs(r, c+1)
        dfs(r, c-1)
    }
    
    return board
}

