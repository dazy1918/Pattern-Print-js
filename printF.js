function printF() {
    let rows = 5;
    for (let i = 1; i <= rows; i++) {
        let line = "";
        for (let j = 1; j <= rows; j++) {
            if (j === 1 || i === 1 || i === 3 ) line += "F";
            else line += " ";
        }
        console.log(line);
    }
}

printF();