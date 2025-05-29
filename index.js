const inputBox=document.getElementById("inputBox")
const addbtn=document.getElementById("addbtn");
const todo=document.getElementById("todoList")

const addTodo=()=>{
    const inputText=inputBox.value.trim();
    if(inputText.length<=0){
       return alert("add a todo")
    }
    const li=document.createElement('li')
    const p=document.createElement('p')
    p.innerHTML=inputText
    li.appendChild(p)
    todo.appendChild(li)
    inputBox.value=""


}
addbtn.addEventListener('click',addTodo);