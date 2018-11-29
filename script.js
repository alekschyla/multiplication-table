function printMultiplicationTable(size) {
    for (let i = 1; i <= size; i++) {
        var result = "";
        for (let j = 1; j <= size; j++) {
            result += i + " x " + j + " = " + i * j + "   ";
        }
        console.log(result);
    }
}

printMultiplicationTable(3);