function printJ(rows) {
    for (let i = 1; i <= rows; i++) {
        let line = "";
        for (let j = 1; j <= rows; j++) {
            if (i === 1 || (j === Math.ceil(rows / 2) && i !== rows) || (i === rows && j <= Math.ceil(rows / 2))) {
                line += "*";
            } else {
                line += " ";
            }
        }
        console.log(line);
    }
}

printJ(5);
