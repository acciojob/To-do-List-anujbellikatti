// //your code here
// let newTodoInput = document.getElementById("newTodoInput");//input

// let todoList = document.getElementById("todoList");//ol


// let btn = document.getElementById("addTodoBtn");//btn

// // btn.addEventListener("click",f());

// function f(){
// 	let newele = document.createElement("li");
	
// 	if(newTodoInput.value===""){

// 		return
// 	}
// 	else{
// 	newele.textContent  = newTodoInput.value;
// 	todoList.appendChild(newele)
// 	}
// }
const newTodoInput = document.getElementById('newTodoInput');
const addTodoBtn = document.getElementById('addTodoBtn');
const todoList = document.getElementById('todoList');

// Function to add a new todo item
function addTodo() {
  const todoText = newTodoInput.value.trim(); // Trim removes extra whitespaces
  if (todoText !== '') {
    const listItem = document.createElement('li');
    listItem.textContent = todoText;
    todoList.appendChild(listItem);
    newTodoInput.value = ''; // Clear the input field after adding todo
  }
}

// Event listener for the "Add todo" button click
addTodoBtn.addEventListener('click', addTodo);

// Event listener for the "Enter" key press
newTodoInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    addTodo();
  }
});