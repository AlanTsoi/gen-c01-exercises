const prompt = require('prompt-sync')({ sigint: true });



const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';



class Field {
    constructor(fieldArray) {
        this.field = fieldArray;
    }

    print() {
        let fieldString = ''
        for (let i = 0; i < this.field.length; i++) {
            fieldString += this.field[i].join(' ')
            /*this.field[i].forEach(elem => fieldString += elem)*/
            fieldString += '\n';
        }
        console.log(fieldString);
    }

    validateInput(row, col) {
        try {
            if (this.field[row][col] === '^') {
                return 1;
            } else if (this.field[row][col] === '0') {
                return 2;
            } else {
                return 3;
            }
        } catch (e) {
            console.log('u went out of bounds')
        }


    }

    updateFieldArray(row, col) {
        console.log(this.field[row][col])
        this.field[row][col] = '*';
    }

}




const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
]);



//myField.print()

function playGame() {
    let rowIndex = 0;
    let columnIndex = 0;
    let validInput = 3;
    myField.print()
    let userInput = prompt('Which direction? : ')

    if (userInput === 'l') {
        columnIndex -= 1;
    } else if (userInput === 'r') {
        columnIndex += 1;
    } else if (userInput === 'u') {
        rowIndex -= 1;
    } else if (userInput === 'd') {
        rowIndex += 1;
    } else {

    }

    console.log(rowIndex, columnIndex)

    validInput = myField.validateInput(rowIndex, columnIndex);

    myField.updateFieldArray(rowIndex, columnIndex)
    myField.print()
}

playGame()