var date = new Date()
document.getElementById('date-time').innerHTML = date.toLocaleTimeString();

//creating a function that return every list item to-do

var creatTodo = function(todo) {
    var list = document.createElement('li');
    list.className = "list";

    var input = document.createElement('input');
    input.type = "checkbox";
    var label = document.createElement('label');
    label.innerHTML = todo;
    label.className = "item";
    var deleteButton = document.createElement('button');
    deleteButton.className = "delete";
    deleteButton.innerHTML = "Delete"

    input.onclick = checked;
    deleteButton.onclick = removeItem;

    list.appendChild(input);
    list.appendChild(label);
    list.appendChild(deleteButton);

    return list;
}

var checked = function() {
    let parent = this.parentNode;
    parent.classList.toggle('check');
}

var removeItem = function() {
    let item = this.parentNode;
    item.remove();
}


var addButton = document.getElementById('add');

addButton.onclick = function() {
    var inputField = document.getElementById('textField');

    var text = inputField.value;
    if(text !== "") {
        var ul = document.getElementById('todo')
        ul.appendChild(creatTodo(text));
        inputField.value = '';
    }else{
        return;
    }
}