function isNumberAdjacentToSymbol(matrix, row, col) {
    // Define the possible directions for adjacent cells, including diagonals
    const directions = [
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [0, -1],
        [0, 1],
        [1, -1],
        [1, 0],
        [1, 1],
    ];

    // Iterate through each direction
    for (const [dr, dc] of directions) {
        const newRow = row + dr;
        const newCol = col + dc;

        // Check if the new coordinates are within the matrix boundaries
        if (
            newRow >= 0 &&
            newRow < matrix.length &&
            newCol >= 0 &&
            newCol < matrix[0].length
        ) {
            // Check if the adjacent cell contains a symbol (any non-digit character)
            if (!/^[0-9.]$/.test(matrix[newRow][newCol])) {
                return true; // Number is adjacent to a symbol
            }
        }
    }

    return false; // Number is not adjacent to any symbol
}

export function getSumOfNumbersAdjacentToSymbol(input) {
    const rows = input.split("\n");
    const matrix = rows.map((row) => row.split(""));

    let sum = 0;

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            // Check if the current cell contains a digit or dot
            if (/^[0-9]$/.test(matrix[row][col])) {
                // Read the whole number by iterating to the right
                let number = matrix[row][col];
                let nextCol = col + 1;
                while (
                    nextCol < matrix[row].length &&
                    /^[0-9]$/.test(matrix[row][nextCol])
                ) {
                    number += matrix[row][nextCol];
                    nextCol++;
                }
                // Check if any part of the number is adjacent to a symbol
                let isAdjacent = false;
                for (let i = 0; i < number.length; i++) {
                    if (isNumberAdjacentToSymbol(matrix, row, col + i)) {
                        isAdjacent = true;
                        break;
                    }
                }
                // Skip the part of the number that has already been included
                col = nextCol - 1;
                if (isAdjacent) {
                    // Add the parsed number to the sum
                    sum += parseInt(number);
                }
            }
        }
    }

    return sum;
}
