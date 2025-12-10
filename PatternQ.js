function printQ(rows) {
    for (let i = 1; i <= rows; i++) {
        let line = "";
        for (let j = 1; j <= rows; j++) {
            if (
                (i === 1 && j > 1 && j < rows) || 
                (i === rows - 1 && j > 1 && j < rows) || 
                (j === 1 && i > 1 && i < rows - 1) || 
                (j === rows && i > 1 && i < rows - 1) || 
                (i === j && i >= rows / 2)
            ) {
                line += "*";
            } else {
                line += " ";
            }
        }
        console.log(line);
    }
}

printQ(7);
