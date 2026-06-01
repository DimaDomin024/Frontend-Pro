const tasks = document.querySelector("#tasks")
const actions = ["Task 1","Task 2","Task 3"];
const input = document.querySelector("#addTask")
const addButton = document.querySelector("#addButton")

function createTask(newInput){
    const item = document.createElement("li");
    const itemButton = document.createElement("button");
    item.classList.add("action");
    itemButton.classList.add("itemButton");
    item.textContent = newInput;
    itemButton.textContent = "Delete";
    item.append(itemButton);
    tasks.append(item);
    itemButton.addEventListener("click", e => {
        item.remove();
    });
}
actions.forEach(action => createTask(action)) 

addButton.addEventListener("click", e => {
    createTask(input.value);
    input.value = "";
    e.stopPropagation();
})