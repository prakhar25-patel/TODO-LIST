// console.log('ji')

let todolist=[
              {
                item:'Buy milk',
                 dueDate: '4/4/25'
                },
              {
                item: 'Go to collage',
                 dueDate:'5/4/23'
                }
 ];

displayItems();
function addTodo(){
let inputelement= document.querySelector("#todo-input");
let dateelement= document.querySelector("#todo-date");
let tododate= dateelement.value;

let todoItem= inputelement.value;
// console.log(todoItem);
todolist.push({item:todoItem, dueDate:tododate});
inputelement.value='';
dateelement.value=' ';
displayItems();
}


function displayItems(){
  let containerElement= document.querySelector('.todo-container');
  let newHTML='';


  for(let i=0;i< todolist.length;i++){
    // let dueDate=todolist[i].dueDate;
    // let item=todolist[i].item;
    let {item, dueDate}=todolist[i];
    newHTML+=` 
    
    <span>${item} </span> 
    <span>${dueDate} </span> 
    <button class='btn-delete' onclick="todolist.splice(${i},1);  displayItems();">Delete</button>     
    `;

  }
  containerElement.innerHTML=newHTML;

}