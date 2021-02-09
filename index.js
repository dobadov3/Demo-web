var todoList = document.getElementById('todo-list');

var url = 'http://localhost:3000/todos';
var input = document.getElementById('input');
var btnAdd = document.getElementById('btn-add');

btnAdd.addEventListener('click', addItem);

axios.get(url).then(function(respone){
    render(respone.data);
})

function render(items){
    var content = items.map(function(item){
        return '<li>' + item.content + '</li>';
    });

    todoList.innerHTML = content.join('');
}

function addItem(){

    var newItem = {
        content: input.value
    }
    axios.post(url, newItem).then(function(item){
        console.log(item);
    });

    
}