// //반복문
const animals = [
    {name: 'lion', size: 'big', isAggressive: true, weight: 200},
    {name: 'monkey', size: 'medium', isAggressive: true, weight: 30},
    {name: 'cat', size: 'small', isAggressive: false, weight: 12},
    {name: 'rat', size: 'small', isAggressive: false, weight: 2}
];

//forEach, map, filter, reduce

animals.forEach(function(animal, index){
    console.log(animal)
    console.log(index)
})

const animalsNames = animals.map(function(animal){
    return `Animal's name is ${animal.name} and size is ${animal.size}`
});
console.log(animalsNames)

const smallAnimal = animals.filter(function(item){
    return item.size === 'small';
}) 
console.log(smallAnimal)

const numbers = [1, 10, 11, 23, 444];

const total = numbers.reduce(function(acc, cur){
    console.log(acc,cur);
    return acc+cur;
})

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
const add2 = (a = 1, b = 2) => a + b; //{}와 return을 생략가능 코드가 간결해짐
const add3 = a => a + 5; //파라미터가 하나일때 ()도 생략가능
console.log(add2())


// //OOP
// function Song(title, writer, singer, released) {
//     this.title = title;
//     this.writer = writer;
//     this.singer = singer;
//     this.released = new Date(released);
//     //console.log(this);
//     //new를 사용하지 않은 this는 전체 window기능을 보여준다
// }
// Song.prototype.getReleasedDay = function() {
//     return this.released.getDay();
// }
// Song.prototype.getSongInfo = function() {
//     return `제목: ${this.title}, 작곡: ${this.writer}, 가수: ${this.singer}`;
// }

//Class [위와 같은 구조]
class Song {
    constructor(title, writer, singer, released) {
        this.title = title;
        this.writer = writer;
        this.singer = singer;
        this.released = new Date(released);
    }
    getReleasedDay() {
        return this.released.getDay();
    }
    getSongInfo() {
        return `제목: ${this.title}, 작곡: ${this.writer}, 가수: ${this.singer}`;
    }
}

//인스턴스
const song1 = new Song('love yourslef', 'eminem', 'eminem', '1999-07-10');
const song2 = new Song('hater', 'joe', 'joe', '2015-11-22');
//new키워드로 Song을 인스턴스화 시켰다
//new를 사용하지 않고 console.log로 (this)를 확인하면 Song이 아닌 이 윈도우 기능을 보여준다
console.log(song1.getReleasedDay())
console.log(song1.getSongInfo(),song2.getSongInfo())
console.log(song1)

const fruits = ["apple", "banana", "cherry", "date"];
let removed = fruits.splice(1, 2); // 인덱스 1부터 2개의 요소 삭제

console.log(fruits);   // ["apple", "date"]
console.log(removed);  // ["banana", "cherry"]