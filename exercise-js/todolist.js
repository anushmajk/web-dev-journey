let displayinput=document.querySelector(".display");
      let addbtn=document.querySelector("#add");
      addbtn.addEventListener("click",function(){
        if(displayinput.value===""){
          return;
        }
        let task=document.createElement("div");
        task.setAttribute("class","task");
        let list=document.createElement("input");
        list.setAttribute("type","checkbox");
        list.setAttribute("style","border-radius: 50%;");
        list.setAttribute("class","list");
        let todo=document.createElement("p");
        todo.setAttribute("class","todo");
        todo.textContent=displayinput.value;
        let cancel=document.createElement("button");
        cancel.setAttribute("class","cancel");
        cancel.innerHTML='<i class="fa-solid fa-xmark"></i>';
        cancel.addEventListener("click",function(){
          task.remove();
        });
        task.appendChild(list);
        task.appendChild(todo);
       task.appendChild(cancel);
       document.getElementById("list-container").appendChild(task);
        displayinput.value="";
       list.addEventListener("change", function(){
      if(list.checked){
        todo.style.textDecoration="line-through";
      }else{
        todo.style.textDecoration="none";
      }
});
      });