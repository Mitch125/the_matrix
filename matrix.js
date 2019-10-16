export class Matrix {
    constructor(rawMatrixString) {
        this.matrix = this.writeToMatrix(rawMatrixString);
        this.trans = this.transpose(this.matrix);
    }
    writeToMatrix(rawMatrixString) {
        let matrix = rawMatrixString.split("\n");
        matrix.forEach((row, i) => (matrix[i] = row.split(" ").map(num => parseInt(num))));
        return [...matrix];
    }

    get rows() {
        return this.matrix;
    }

    transpose(input_matrix) {
        return input_matrix[0].map((col, i) => input_matrix.map(row => row[i]));
    }

    get columns() {
        return this.trans;
    }
}
