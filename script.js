//your code here
let newTodoInput = document.getElementById("newTodoInput");//input

let todoList = document.getElementById("todoList");//ol


let btn = document.getElementById("addTodoBtn");//btn

// btn.addEventListener("click",f());

function f(){
	let newele = document.createElement("li");
	newele.textContent  = newTodoInput.value;
	todoList.appendChild(newele)
}