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

    const editbtn=document.createElement('button')
    editbtn.innerText='Edit'
    editbtn.classList.add("btn")
    li.appendChild(editbtn)

    const deletebtn=document.createElement('button')
    deletebtn.innerText='Remove'
    deletebtn.classList.add("btn")
    li.appendChild(deletebtn)

    todo.appendChild(li)
    inputBox.value=""


}
const updateToDo=(e)=>{
    if(e.target.innerHTML==='Remove'){
        todo.removeChild(e.target.parentElement)
    }
    if(e.target.innerHTML==='Edit'){
        
    }
}

addbtn.addEventListener('click',addTodo);