const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Add Task
function addTask(){
    if(inputBox.value === ''){
        alert("You need to add something 😋");
    }
    else{
        let list = document.createElement("li");
        list.innerHTML =inputBox.value;
        listContainer.appendChild(list);
        let crossIcon = document.createElement("span");
        crossIcon.innerHTML = "\u00d7";
        list.appendChild(crossIcon);
    }
    inputBox.value = "";
    storeTask();
}

// Click Function
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        storeTask();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        storeTask();
    }
}, false)

// Storing Data in Local Storage
function storeTask(){
    localStorage.setItem("task", listContainer.innerHTML);
}

// Showing Tasks from Local Storage
function showTask(){
    listContainer.innerHTML = localStorage.getItem("task");
}
showTask();