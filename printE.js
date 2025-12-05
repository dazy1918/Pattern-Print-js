function printE() {
    let rows = 5;
    for (let i = 1; i <= rows; i++) {
        let line = "";
        for (let j = 1; j <= rows; j++) {
            if (j === 1 || i === 1 || i === 3 || i === rows) line += "E";
            else line += " ";
        }
        console.log(line);
    }
}

printE();