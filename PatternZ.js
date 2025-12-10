function printZ(rows) {
    for (let i = 1; i <= rows; i++) {
        let line = "";
        for (let j = 1; j <= rows; j++) {
            if (i === 1 || i === rows || j === rows - i + 1) {
                line += "*";
            } else {
                line += " ";
            }
        }
        console.log(line);
    }
}

printZ(7);
