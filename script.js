function printMultiplicationTable(size) {
    for (let i = 1; i <= size; i++) {
        var result = "";
        for (let j = 1; j <= size; j++) {
            result += i * j + " ";
        }
        console.log(result);
    }
}

printMultiplicationTable(3);