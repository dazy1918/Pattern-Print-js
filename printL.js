function printL(n) {
  for (let i = 1; i <= n; i++) {
    if (i < n) {
      console.log("#");           
    } else {
      console.log("# ".repeat(n)); 
    }
  }
}

printL(5);
