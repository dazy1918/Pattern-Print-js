function printS(rows) {
    let mid = (rows + 1) / 2;
    for (let i = 1; i <= rows; i++) {
        let line = "";
        for (let j = 1; j <= rows; j++) {
            if (i === 1 || i === rows || i === mid || (i < mid && j === 1) || (i > mid && j === rows)) {
                line += "*";
            } else {
                line += " ";
            }
        }
        console.log(line);
    }
}

printS(5);
