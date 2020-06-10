const rowAvailable = (grid, row, num) => {
    let present = 0
    for (let i = 0; i < 9; i++) {
        console.log("Row num: ", num)
        console.log("Row present: ", present)

        if (grid[row][i] == num) {
            present += 1
        }
        if (present === 2) {
            return false
        }
    }
    return true
}

const colAvailable = (grid, col, num) => {
    let present = 0
    for (let i = 0; i < 9; i++) {
        console.log("Col num: ", num)
        console.log("Col present: ", present)

        if (grid[i][col] == num) {
            present += 1
        }
        if (present == 2) {
            return false
        }
    }
    return true
}

const boxAvailable = (grid, row, col, num) => {
    // to find this: 
    let present = 0
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            console.log("Box num: ", num)
            console.log("Box present: ", present)
            if (grid[row + i][col + j] == num) {
                present += 1
            }
            if (present == 2) {
                return false
            }
        }

    }
    return true

}

const sudoku2 = (grid) => {
    let n = grid.length
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1; j++) {
            let num = grid[i][j] // not sure about this one // 
            if (num != '.') {
                if (!rowAvailable(grid, i, num) || !colAvailable(grid, j, num) || !boxAvailable(grid, i - i % 3, j - j % 3, num)) {
                    return false
                }
            }
        }
    }
    return true
}

const grid1 = [['.', '.', '.', '1', '4', '.', '.', '2', '.'],
['.', '.', '6', '.', '.', '.', '.', '.', '.'],
['.', '.', '.', '.', '.', '.', '.', '.', '.'],
['.', '.', '1', '.', '.', '.', '.', '.', '.'],
['.', '6', '7', '.', '.', '.', '.', '.', '9'],
['.', '.', '.', '.', '.', '.', '8', '1', '.'],
['.', '3', '.', '.', '.', '.', '.', '.', '6'],
['.', '.', '.', '.', '.', '7', '.', '.', '.'],
['.', '.', '.', '5', '.', '.', '.', '7', '.']]


const grid2  = [['.', '.', '2', '2', '2', '.', '.', '9', '.'],
['.', '.', '2', '2', '6', '.', '.', '.', '.'],
['7', '1', '.', '.', '7', '5', '.', '.', '.'],
['.', '7', '.', '.', '.', '.', '.', '.', '.'],
['.', '.', '.', '.', '8', '3', '.', '.', '.'],
['.', '.', '8', '.', '.', '7', '.', '6', '.'],
['.', '.', '.', '.', '.', '2', '.', '.', '.'],
['.', '1', '.', '2', '.', '.', '.', '.', '.'],
['.', '2', '.', '.', '3', '.', '.', '.', '.']]

// console.log(sudoku2(grid1) === true)

console.log(sudoku2(grid2) === false)
