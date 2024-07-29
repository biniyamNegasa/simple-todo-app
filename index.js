const input = document.querySelector("input");
const addButton = document.querySelector("button.add")
const list = document.querySelector("ul")

addButton.addEventListener("click", (event) => {
    const content = input.value;
    input.value = "";
    if (content){
        const item = document.createElement("li");
        const task = document.createElement("div");
        const deleteButton = document.createElement("button");
        const editButton = document.createElement("button");
        
        item.style.display = "flex";
        item.style.gap = "10px";
        item.style.width = "400px";
        item.style.marginBottom = "8px";
        task.style.flex = 1;

        task.textContent = content;
        deleteButton.textContent = "delete";
        editButton.textContent = "edit";
        
        list.appendChild(item);
        item.append(task);
        item.append(editButton);
        item.append(deleteButton);

        deleteButton.addEventListener("click", (event) => {
            list.removeChild(item);
        });

        editButton.addEventListener("click", (event) => {
            const newContent = prompt("Describe the updated task").trim();
            if (newContent) {
                task.textContent = newContent;
            }
        });
    }
});