function printC(rows) {
    for (let i = 1; i <= rows; i++) {
        let line = "";
        for (let j = 1; j <= rows; j++) {
            if (i === 1 || i === rows || j === 1) {
                line += "*";
            } else {
                line += " ";
            }
        }
        console.log(line);
    }
}

printC(5);
