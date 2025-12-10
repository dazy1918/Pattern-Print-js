function printP(rows) {
    let mid = (rows + 1) / 2;
    for (let i = 1; i <= rows; i++) {
        let line = "";
        for (let j = 1; j <= rows; j++) {
            if (j === 1 || (i === 1 && j < rows) || (i === mid && j < rows) || (j === rows && i > 1 && i < mid)) {
                line += "*";
            } else {
                line += " ";
            }
        }
        console.log(line);
    }
}

printP(5);
