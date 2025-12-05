function printI() {
    let rows = 5;
    for (let i = 1; i <= rows; i++) {
        let line = "";
        for (let j = 1; j <= rows; j++) {
            if (j === 3 ||i === 1|| i===5  ) line += "I";
            else line += " ";
        }
        console.log(line);
    }
}

printI();
