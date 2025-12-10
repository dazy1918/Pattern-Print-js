function printU(rows) {
    for (let i = 1; i <= rows; i++) {
        let line = "";
        for (let j = 1; j <= rows; j++) {
            if ((j === 1 && i !== rows) || (j === rows && i !== rows) || (i === rows && j > 1 && j < rows)) {
                line += "*";
            } else {
                line += " ";
            }
        }
        console.log(line);
    }
}

printU(5);
''