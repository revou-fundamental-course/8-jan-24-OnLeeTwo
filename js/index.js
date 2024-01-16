function perimeter(){
    document.getElementById("perimeterResult").innerHTML = null
    let sidePerimeter = document.getElementById("squareSidePerimeter").value;
    if (sidePerimeter < 1){
        alert("Nilai sisi harus lebih besar dari 0!")
        return null
    } else if (sidePerimeter > 999999999999999999){
        alert("Nilai sisi terlalu besar!")
        return null
    }
    let perimeter = 4*sidePerimeter
    let contentPerimeter = `Hasil:
    = 4 × a
    = 4 × ${sidePerimeter}
    = ${perimeter}
    `;
    document.getElementById("perimeterResult").innerHTML= contentPerimeter;
}

function perimeterReset(){
    document.getElementById("perimeterResult").innerHTML = null;
}

function area(){
    document.getElementById("areaResult").innerHTML = null
    let sideArea = document.getElementById("squareSideArea").value;
    if (sideArea < 1){
        alert("Nilai sisi harus lebih besar dari 0!")
        return null
    } else if (sideArea > 999999999999999999){
        alert("Nilai sisi terlalu besar!")
        return null
    }
    let area = sideArea*sideArea
    let contentArea = `Hasil:
    = a × a
    = ${sideArea} x ${sideArea}
    = ${area}
    `;
    document.getElementById("areaResult").innerHTML= contentArea;
}

function areaReset(){
    document.getElementById("areaResult").innerHTML = null;
}

function diagonal(){
    document.getElementById("diagonalResult").innerHTML = null
    let sideDiagonal = document.getElementById("squareSideDiagonal").value;
    if (sideDiagonal < 1){
        alert("Nilai sisi harus lebih besar dari 0!")
        return null
    } else if (sideDiagonal > 999999999999999999){
        alert("Nilai sisi terlalu besar!")
        return null
    }
    let diagonal = sideDiagonal * Math.sqrt(2)
    let diagonalR = diagonal.toFixed(3)
    let contentDiagonal = `Hasil:
    = a × √2
    = ${sideDiagonal} × √2
    = ${diagonalR}
    `;
    document.getElementById("diagonalResult").innerHTML = contentDiagonal;
}

function diagonalReset(){
    document.getElementById("diagonalResult").innerHTML = null;
}