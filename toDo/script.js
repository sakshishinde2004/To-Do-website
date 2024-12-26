function addTodo() {
    const todoInput = document.getElementById("todo-input");
    const noteInput = document.getElementById("todo-note");
    const todoText = todoInput.value;
    const noteText = noteInput.value;

    if (todoText === "") {
        alert("Please enter a task!");
        return;
    }

    // Get current date and time
    const now = new Date();
    const day = now.toLocaleString('en-us', { weekday: 'long' });
    const date = now.toLocaleString('en-us', { year: 'numeric', month: 'long', day: 'numeric' });
    const time = now.toLocaleString('en-us', { hour: '2-digit', minute: '2-digit' });

    // Create a new list item
    const li = document.createElement("li");
    li.classList.add("new-task");

    // Create checkbox for marking completion
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");
    li.appendChild(checkbox);

    // Task text
    const taskText = document.createElement("span");
    taskText.textContent = todoText;
    li.appendChild(taskText);

    // Add date, time, and note
    const taskInfo = document.createElement("div");
    taskInfo.classList.add("task-info");
    taskInfo.innerHTML = `<span class="date-time">${day}, ${date} ${time}</span><span>Note: ${noteText}</span>`;
    li.appendChild(taskInfo);

    // Create delete button (keeping the button as it is, without changing text)
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "Delete";  // Keep the text as "Delete"
    deleteBtn.onclick = function () {
        li.remove();
    };
    li.appendChild(deleteBtn);

    // Add the list item to the to-do list
    document.getElementById("todo-list").appendChild(li);

    // Clear the input fields after adding the task
    todoInput.value = "";
    noteInput.value = "";
}
