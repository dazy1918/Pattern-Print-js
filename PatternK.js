function printK(rows) {
    let mid = rows / 2;
    for (let i = 1; i <= rows; i++) {
        let line = "";
        for (let j = 1; j <= rows; j++) {
            if (j === 1 || (j === rows - i + 1 && i <= mid) || (j === i - mid && i > mid)) {
                line += "*";
            } else {
                line += " ";
            }
        }
        console.log(line);
    }
}

printK(6);
