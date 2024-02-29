// Задачи от одногрупников

//найти разницу сумы четных и сумы нечетных чисел массива и вывести в консоль

console.log("1. моя задача");
const numbers6 = [
    23, 45, 12, 67, 90, 888, 78, 89, 55,
    10, 5, 76, 98, 43, 21, 33, 88, 19, 25,
    67, 541, 87, 32, 65, 78, 92, 13, 40, 61,
    77, 83, 29, 50, 14, 1, 95, 38, 71, 48
];
let sumEven = numbers6
    .filter(item => item % 2 === 0)
    .reduce((first, tek) => first + tek, 0);
let sumOdd = numbers6
    .filter(item => item % 2 != 0)
    .reduce((second, tek) => second + tek, 0);

if (sumEven > sumOdd) {
    console.log(sumEven - sumOdd);
}
else if (sumEven < sumOdd) {
    console.log(sumOdd - sumEven);
} else console.log('0');


//////////////////////////////////////////////////////////////////


// Найти все нечетные числа в массиве и вывести в консоль

console.log("2.1. задача Андрея");
const numbers7 = [1, 3, 6, 2, 7, 9, 11, 10];
let odd = numbers7.filter(item => item % 2 != 0)
console.log(odd);

///////////////////////////////////////////////////////////////////

console.log("2.2 задача Андрея");
let arr1 = ["Andrei", "Alex", "Nikolai", "Ilia", "John", "Olejik", "Vanya"]
let arr2 = ["Vlad", "Igor", "Max", "Nikita", "Vitali"]
// взять из второго массива все имена начиная с "Max" и добавить их в первый массив. первый массив не должен быть двумерным!
let maxIndex = arr2.indexOf('Max');
let newArr = arr2.slice(maxIndex)
arr1.push(...newArr);
console.log(arr1);

/////////////////////////////////////////////////////////////////////
console.log("2.2 задача Алекса");

const cars = ['BMW M3', 'Opel Insignia', 'Audi A8', 'Opel Astra', 'Opel Mokka', 'Mercedes S500'];
//  удалить из массива автомобили марки Opel
let filtredCars = cars.filter(item => !item.includes("Opel"));
console.log(filtredCars);