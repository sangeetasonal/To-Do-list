const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")
function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");

    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        const img = document.createElement("img");
        img.src = 'images/cancel.png';
        li.appendChild(img);
    }
    inputBox.value = "";
    saveData();
}
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();

    }
        else if(e.target.tagName === "IMG"){
            e.target.parentElement.remove();
            saveData();

        }
    
}, false);
    
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
    
}
showTask();
inputBox.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
