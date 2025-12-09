//변수 var, let, const
//ES6문법이 나온뒤로 var은 더 이상 사용하지 않는것이 좋다
//블럭단위
{
let age = 30;
age = 25;
console.log(age)
//let은 재정의가 가능한 변수

const nai = 30;
// nai = 25;
console.log(nai)
//const는 재정의가 불가능
}

//data-type
//String, Number, Boolean, null, undefined-어떤값도 선언하지않은 상태
const name = "jaehoon";
const nicname = "parkjaehoon"
const age = 25;
const weight = 76.3;
const isMale = true;
const money = null;
const girlfriend = undefined;
let boyfriend;

// console.log(money)

// console.log("제이름은"+name+"입니다.") 옛날 방식
// console.log(`제이름은 ${name} 입니다.`) 이렇게 쓰는 편이 좋다

console.log(nicname.substring(0,4).toUpperCase()) //0번 인덱스에서 4번까지
console.log(name.split("")) //split으로 "" 한칸마디마다 자를수 있음

const hobbies = "baseball, basketball, game, computer";

console.log(hobbies.split(",")[0])
//split을 , 기준으로 나눔 뒤에 []배열을 넣으면 해달 칸의 값을 가져옴


//!Array
//const animals = ["lion", "bear", "monkey"]

// animals[3] = "deer" //지정 해서 넣을 수 있음

// animals.push("fish") //push함수로 맨 마지막으로 넣을수 있음

// animals.unshift("hippo") //unshift함수로 맨 앞으로 넣을 수 있음

// console.log(animals)

// animals.pop() //pop함수로 뺄수있음
// console.log(animals)

// console.log(Array.isArray(animals))

// console.log(animals.indexOf('hippo')) //몇번째에 있는지 확인가능


// console.log(animals)
// const bearIndex = animals.indexOf('lion')
// animals.splice(bearIndex,2) //splice는 (?,?) 첫번째 ?부터 2번째 ?전까지
// console.log(animals)


//Object
const monkey = {
    name: "ringo",
    face: "funny",
    age: 11,
    food: ["banana","apple","strawberry"],
    tail: true,
    location: {
        country: "Congo",
        place: "forest",
        isAfrica: true,
    }
}

console.log(monkey)
console.log(monkey.location.place) //오브젝트안에 오브젝트는 . 을 찍으면됨

monkey.name = "star";
console.log(monkey.name)

monkey.food[1] = "peanut";
console.log(monkey.food)

monkey.weight = 50;
console.log(monkey.weight)


//JSON 변화
const monkeyJSON = JSON.stringify(monkey);
console.log(monkeyJSON);

//JSON데이터 JS화
const monkeyJSONParse = JSON.parse(monkeyJSON);
console.log(monkeyJSONParse);


//반복문
const animals = [
    {name: 'lion', size: 'big', isAggressive: true, weight: 200},
    {name: 'monkey', size: 'medium', isAggressive: true, weight: 30},
    {name: 'cat', size: 'small', isAggressive: false, weight: 12},
    {name: 'rat', size: 'small', isAggressive: false, weight: 2}
];

// for (let i = 0; i < animals.length; i++) {
//     console.log(animals[i].name);
// }

// for(let animal of animals) {
//     console.log(animal)
// }

// let i = 0;
// while (i < 10) {
//     console.log(i)
//     i++;
// } 
// 여기까지는 정석적인 반복문


//forEach, map, filter, reduce 반복문

// animals.forEach(function(animal, index){
//     console.log(animal)
//     console.log(index)
// })

// const animalsNames = animals.map(function(animal){
//     return `Animal's name is ${animal.name} and size is ${animal.size}`
// });
// console.log(animalsNames)

// const smallAnimal = animals.filter(function(item){
//     return item.size === 'small';
// }) 
// console.log(smallAnimal)

// const numbers = [1, 10, 11, 23, 444];

// const total = numbers.reduce(function(acc, cur){
//     console.log(acc,cur);
//     return acc+cur;
// })

const totalWeight = animals.reduce(function(acc,cur) {
    return acc + cur.weight;
}, 0) //초기값을 0으로 해야 문제없이 됨

console.log(totalWeight)


//조건문
const x = 10;
if(x == "10") { //자료형이 달라도 값만 같으면 표시됨
    console.log(`x is 10`)
}
if(x === "10") { //자료형까지 같아야 표시됨
    console.log(`x is 10`)
} else if (x === 20) {
    console.log(`x is 20`)
}
else {
    console.log(`x is not 10`)
}


//삼항조건문
const animal = 'lion'
const food = animal === 'lion' ? "meat" : "apple"; //food는 animal이 lion이면 meat를 값을 아니면 apple을 값을 준다

console.log(food)

//switch case
switch(animal) {
    case 'lion':
        console.log('animal is lion');
        break;
    case 'monkey':
        console.log('animal is monkey');
        break;
    default:
        console.log('animal is unknown');
        break;
}

//function문
function add(a = 1, b = 2) { //ES6에서는 파라미터를 넣지않고 미리 넣을 수 있게 됨 a = 1, b = 2이런식
    return a+b;
}
//const sum = add(); //()안에 값을 넣을수잇음 (1, 2)

//애로우function =>
const add1 = (a, b) => {
    return a + b;
}
//애로우펑션의 장점
const add2 = (a = 1, b = 2) => a + b;
console.log(add2())