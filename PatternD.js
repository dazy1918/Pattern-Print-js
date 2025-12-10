function printD(rows) {
    for (let i = 1; i <= rows; i++) {
        let line = "";
        for (let j = 1; j <= rows; j++) {
            if (j === 1 || (i === 1 && j < rows) || (i === rows && j < rows) || (j === rows && i !== 1 && i !== rows)) {
                line += "*";
            } else {
                line += " ";
            }
        }
        console.log(line);
    }
}

printD(5);
