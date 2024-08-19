function multiplyMatrices() {

    let matrixA = document.getElementById('matrixA').value.split(';').map(row => row.split(',').map(Number));
    let matrixB = document.getElementById('matrixB').value.split(';').map(row => row.split(',').map(Number));

    // Nessa parte será feita um verificação se as matrizes podem ser multiplicadas e se não for aparece um aviso
    if (matrixA[0].length !== matrixB.length) {
        alert('O número de colunas da Matriz A deve ser igual ao número de linhas da Matriz B.');
        return;
    }


    let result = new Array(matrixA.length).fill(0).map(() => new Array(matrixB[0].length).fill(0));

 
    for (let i = 0; i < matrixA.length; i++) {
        for (let j = 0; j < matrixB[0].length; j++) {
            for (let k = 0; k < matrixA[0].length; k++) {
                result[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }


    let resultString = result.map(row => row.join(',')).join('\n');
    document.getElementById('resultMatrix').innerText = resultString;
}