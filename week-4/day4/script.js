window.onload = function() {
    const todos = JSON.parse(localStorage.getItem("todos")) || []
    todos.forEach((item) => tampilkanTodo(item));
}

function tambahkanTodo() {
    const input = document.getElementById("todoinput");
    const value = input.value.trim();
    if (value === "") return;

    tambahkanTodo(value);
    simpanTodo(value);
    input.value = "";
}

function tampilkanTodo(text) {
    const list = document.getElementById("todoList");
    const item = document.createElement("li")
    item.textContent = text;
    item.onclick = function() {
        list.removeChild(item);
        hapusTodo(text);
    };
    list.appendChild(item);
}

function simpanTodo(value) {
    const todos = JSON.parse(localStorage.getItem("item")) || []
    todos.push(value);
    localStorage.setItem("todos", JSON.stringify(todos))
}

function hapusTodo(value) {
    const todos = JSON.parse(localStorage.getItem("todos")) || []
    todos = todos.filter((item) => item !== value);
    localStorage.setItem("todos", JSON.stringify(todos));
}