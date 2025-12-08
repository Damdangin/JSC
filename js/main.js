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
const name = "hoon";
const age = 25;
const weight = 76.3;
const isMale = true;
const money = null;
const girlfriend = undefined;
let boyfriend;

console.log(money)

console.log("제이름은"+name+"입니다.")
console.log(`제이름은 ${name} 입니다.`)