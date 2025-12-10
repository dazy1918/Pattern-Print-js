function printA(rows) {
    let mid = (rows + 1) / 2;
    for (let i = 1; i <= rows; i++) {
        let line = "";
        for (let j = 1; j <= rows; j++) {
            if ((j === 1 && i !== 1) || (j === rows && i !== 1) || (i === 1 && j > 1 && j < rows) || (i === mid)) {
                line += "*";
            } else {
                line += " ";
            }
        }
        console.log(line);
    }
}

printA(5);
