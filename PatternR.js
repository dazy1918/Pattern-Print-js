function printR(rows) {
    let mid = Math.floor(rows / 2);
    for (let i = 1; i <= rows; i++) {
        let line = "";
        for (let j = 1; j <= rows; j++) {
            if (
                j === 1 || 
                (i === 1 && j < rows) || 
                (i === mid && j < rows) || 
                (j === rows && i > 1 && i < mid) || 
                (i - j === mid - 1 && i >= mid)
            ) {
                line += "*";
            } else {
                line += " ";
            }
        }
        console.log(line);
    }
}

printR(7);
