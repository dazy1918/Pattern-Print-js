function printW(rows) {
    let mid = (rows + 1) / 2;
    for (let i = 1; i <= rows; i++) {
        let line = "";
        for (let j = 1; j <= rows * 2 - 1; j++) {
            if (
                j === 1 ||
                j === rows * 2 - 1 ||
                (j === i && i >= mid) ||
                (j === (rows * 2 - 1) - i + 1 && i >= mid)
            ) {
                line += "*";
            } else {
                line += " ";
            }
        }
        console.log(line);
    }
}

printW(7);
