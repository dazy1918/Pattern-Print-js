function printX(rows) {
    for (let i = 1; i <= rows; i++) {
        let line = "";
        for (let j = 1; j <= rows; j++) {
            if (j === i || j === rows - i + 1) {
                line += "*";
            } else {
                line += " ";
            }
        }
        console.log(line);
    }
}

printX(7);

