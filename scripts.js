const arrayOfTodos = [
    {
    "userId": 14,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
},
{
    "userId": 20,
    "id": 2,
    "title": "delectus aut autem",
    "completed": false
}]

const fetchTodos = () => {
    fetch('https://reqres.in/api/users?page=2')
    .then( (response) => response.json())
    .then( (json) => populateTodos(json))
}

const logTodos = () => {
    console.log(arrayOfTodos)
}

const populateTodos = (json) => {
    const todoList = document.getElementById('todo-list');

    for (let i = 0; i < json.data.length; i++) {
        const element = document.createElement('li');
        element.innerHTML = `<img src="${json.data[i].avatar}">`
        todoList.appendChild(element)
    }
}

