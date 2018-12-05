document.getElementById("multiplicationTableContainer").innerHTML = printMultiplicationTable(10);

function printMultiplicationTable(size) {
    var line = "";
    for (let i = 1; i <= size; i++) {
        var result = "";
        for (let j = 1; j <= size; j++) {
            result += "<td>" + i + " x " + j + " = " + i * j + "</td>";
        }
        line += "<tr>" + result + "</tr>";
    }
    return line;
}

