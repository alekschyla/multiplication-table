function printMultiplicationTable(size) {
    for (let i = 1; i <= size; i++) {
        var stars = "";
        for (let j = 1; j <= size; j++) {
            stars += "* ";
        }
        console.log(stars);
    }
}

printMultiplicationTable(3);