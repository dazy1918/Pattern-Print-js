function printY(rows) {
    for (let i = 1; i <= rows; i++) {
        let line = "";
        for (let j = 1; j <= rows; j++) {
            if ((j === i && i <= rows / 2) || (j === rows - i + 1 && i <= rows / 2) || (j === Math.ceil(rows / 2) && i > rows / 2)) {
                line += "*";
            } else {
                line += " ";
            }
        }
        console.log(line);
    }
}

printY(7);
