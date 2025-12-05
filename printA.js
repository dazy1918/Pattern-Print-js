function printA() {
    let rows = 5;
    for (let i = 1; i <= rows; i++) {
        let line = "";
        for (let j = 1; j <= rows; j++) {
            if (j === 1 ||i === 1 || j === 5 || i === 3 ) line += "A";
            else line += " ";
        }
        console.log(line);
    }
}

printA();
