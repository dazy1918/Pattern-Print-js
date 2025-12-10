function printV(rows) {
    for (let i = 1; i <= rows; i++) {
        let line = "";
        for (let j = 1; j <= rows * 2 - 1; j++) {
            if (j === i || j === (rows * 2 - 1) - i + 1) {
                line += "*";
            } else {
                line += " ";
            }
        }
        console.log(line);
    }
}

printV(6);
