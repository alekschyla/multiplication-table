document.getElementById("multiplicationTable").innerHTML = createMultiplicationTableContent(10);

function createMultiplicationTableContent(tableSize) {
    let tableContent = "";
    for (let i = 1; i <= tableSize; i++) {
        let rowContent = "";
        for (let j = 1; j <= tableSize; j++) {
            let cellContent = i + " x " + j + " = " + i * j;
            rowContent += createCell(cellContent);
        }
        tableContent += createRow(rowContent);
    }
    return tableContent;
}

function createCell(cellContent) {
    return "<td>" + cellContent + "</td>";
}

function createRow(rowContent) {
    return "<tr>" + rowContent + "</tr>";
}

