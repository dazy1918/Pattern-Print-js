function printN(rows) {
    for (let i = 1; i <= rows; i++) {
        let line = "";
        for (let j = 1; j <= rows; j++) {
            if (j === 1 || j === rows || j === i) {
                line += "*";
            } else {
                line += " ";
            }
        }
        console.log(line);
    }
}

printN(6);
