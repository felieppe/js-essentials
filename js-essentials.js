// 0 - Bajar repo, hacer hola mundo console.log
function helloWorld() {
    console.log("Hello World");
}

// 2 - Funciones:
// add(firstOperator, secondOperator),
// subtract(firstOperator, secondOperator),
// divide(firstOperator, secondOperator),
// multiply(firstOperator, secondOperator)

function add(firstOperator, secondOperator) {
  return firstOperator + secondOperator;
}

function subtract(firstOperator, secondOperator) {
    return firstOperator - secondOperator;
}

function divide(firstOperator, secondOperator) {
    return firstOperator / secondOperator;
}

function multiply(firstOperator, secondOperator) {
    return firstOperator * secondOperator;
}

// 3 - Funcion
// dress(temperature, isRaining)
// si llueve, llevar paraguas☂️. si la temperatura
// es menor a 10 ir en auto🚗, si es mayor a 30 ir de short🩳.
// si la temperatura es 30 usar lentes 🕶

function dress(temperature, isRaining) {
    if (isRaining) {
        return "☂️";
    } else if (temperature < 10) {
        return "🚗";
    } else if (temperature > 30) {
        return "🩳";
    } else if (temperature === 30) {
        return "🕶";
    }
}

// 4 - Funcion
// calculate(operation, firstOperator, secondOperator)

function calculate(operation, firstOperator, secondOperator) {
    switch (operation) {
        case "add":
            return add(firstOperator, secondOperator);
        case "subtract":
            return subtract(firstOperator, secondOperator);
        case "divide":
            return divide(firstOperator, secondOperator);
        case "multiply":
            return multiply(firstOperator, secondOperator);
        default:
            return "Operación no válida";
    }
}

// 5 - Funcion
// eating(name, foods['🍔','🍟','🍗',])

function eating(name, foods) {
    let food = foods[Math.floor(Math.random() * foods.length)];
    return `${name} is eating ${food}`;
}

// 6 - Funcion
// finalCountDown(count)

function finalCountDown(count) {
    let countdown = "";
    for (let i = count; i >= 0; i--) {
        countdown += i + " ";
    }
    return countdown;
}

<<<<<<< HEAD
console.log(finalCountDown(10));

=======
>>>>>>> 09048b41d36ee867f2dac20353b7d70c72b94813
// 7 - Funcion
// getGrade(score)
// It should return the following grade according the score value.
// 0-40 => D
// 41-60 => R
// 61-74 => B
// 75-84 => BMB
// 85-96 => MB
// 97-100 => S

function getGrade(score) {
    switch (score >= 0 && score <= 100) {
        case (score >= 0 && score <= 40):
            return 'D';
        case (score >= 41 && score <= 60):
            return 'R';
        case (score >= 61 && score <= 74):
            return 'B';
        case (score >= 75 && score <= 84):
            return 'BMB';
        case (score >= 85 && score <= 96):
            return 'MB';
        case (score >= 97 && score <= 100):
            return 'S';
        default:
            return 'Operacion no valida';
    }
}

// 8 - Funcion
// fillCart(person, articlesCollection)
// cartArticlesCollection: [{article: '👟', amount: 1, price: 25}...])
// person: {name: 'Pepe', cart: []}
// it should modify person's cart in order to add the the new collection of articles

function fillCart(person, articlesCollection) {
    person.cart = articlesCollection;
    return person;
}

// 9 - Funcion
// countBanana(inventory:['🥑','🍌','🥭', '🍌']})

function countBanana(inventory) {
    let count = 0;
    inventory.forEach(item => {
        if (item === "🍌") {
            count++;
        }
    });
    return count;
}

// 10 - Function
// getTotal(inventory: [{article: '🍔', price: 15, quantity: '1'}, {article: '🍟', price: 10, quantity: '2'}])
// it should return the total. for the example data 👆 it should be: 35. (15x1 + 10x2)

function getTotal(inventory) {
    let total = 0;
    inventory.forEach(item => {
        total += item.price * item.quantity;
    });
    return total;
}
