let todoItems = [
];

//var todoList = document.createElement('ul');
let todoList = document.getElementById('todoList');

function takeInput() {
  let itemNew = document.getElementById('input').value;
  document.getElementById('input').value = null;
  updateList(itemNew);
}

function updateList(itemNew) {
    let listItem = document.createElement('li');
    let todoText = document.createTextNode(itemNew);
    let checkboxItem = document.createElement('input');
    checkboxItem.setAttribute('type', 'checkbox');
    checkboxItem.setAttribute('class', 'checkBox');
    listItem.appendChild(checkboxItem);
    listItem.appendChild(todoText);
    todoList.appendChild(listItem);
    addToList(itemNew);
  }


function addToList(itemNew) {
  todoItems.push(itemNew);
  //removeFromList();
}

// function removeFromList() {
//   let finishedItems = todoItems.filter(removingItems);
// }

function removeFromList() {
  let itemsToRemove = document.getElementsByTagName('li');
  itemsToRemove.target.addEventListener('click', clickme(this));
}

// function clickme(htmlElement) {
//   console.log(htmlElement.innerHTML = "DONE");
// }
