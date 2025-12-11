// console.log(window);

//single element
// console.log(document.getElementById('todo-form'))
//일반적방법은 변수에 따로 담아서 사용
// const form = document.getElementById('todo-form');
// console.log(form)

// const form = document.querySelector("#todo-form");

// console.log(form)


// //multiple element
// console.log(document.querySelectorAll('.item'));
// //가장 일반적으로 많이 사용함

// const items = document.querySelectorAll('.item');
// items.forEach((item) => {
//     console.log(item);
// })

// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('li'))


const todos = document.querySelector("#todo-list");
// todos.remove(); 삭제할수도 있음
console.log(todos);
todos.lastElementChild.remove(); 
//ElementChild는 todos의 #todo-list안에 있는 값들이다
//lastElementChild는 todos의 값중 가장 마지막에 있는 값을 말한다
todos.firstElementChild.textContent = 'Hello';
todos.lastElementChild.innerHTML = '<h1>Hi</hi>' //HTML문 삽입도 가능

const button = document.querySelector('.submit');

// // button.addEventListener(어떤 이벤트, 어떤 기능)
// button.addEventListener('click', function(){ //function() 익명함수
//     console.log('clicked!')
// })
// //버튼을 클릭할 때마다 자동으로 다음페이지로 넘어감

button.addEventListener('click', function(e){
    e.preventDefault();
    console.log(e)
    console.log('clicked!')
});
