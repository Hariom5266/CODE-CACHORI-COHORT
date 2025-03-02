document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById("taskInput");
    const addButton = document.getElementById("addButton");
    const taskList = document.getElementById("taskList");
    const totalTasks = document.getElementById("totalTasks");
    const completedTasks = document.getElementById("completedTasks");

    let totalTasksCount = 0;
    let completedTasksCount = 0;

    addButton.addEventListener('click', function () {
        const taskValue = taskInput.value.trim();
        if (!taskValue) return; // Prevent adding empty tasks

        // Prevent duplicate tasks
        const existingTasks = document.querySelectorAll(".task-text");
        for (let task of existingTasks) {
            if (task.textContent === taskValue) {
                alert("Task already exists!");
                return;
            }
        }

        // Remove "No tasks yet" message if present
        const emptyMessage = document.querySelector(".empty-list");
        if (emptyMessage) emptyMessage.remove();

        // Create task item
        const newTask = document.createElement("li");
        newTask.classList.add("task-item");
        newTask.dataset.completed = "false"; // Track completion status

        // Task text
        const taskText = document.createElement("span");
        taskText.textContent = taskValue;
        taskText.classList.add("task-text");

        // Checkbox for marking completion
        const checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.classList.add("complete-checkbox");

        // Delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-button");

        // Append elements
        newTask.appendChild(checkBox);
        newTask.appendChild(taskText);
        newTask.appendChild(deleteBtn);
        taskList.appendChild(newTask);

        taskInput.value = ""; // Clear input field

        // Update task count
        totalTasksCount++;
        totalTasks.textContent = `Total tasks: ${totalTasksCount}`;

        // Handle task completion
        checkBox.addEventListener('change', function () {
            newTask.dataset.completed = this.checked ? "true" : "false";
            newTask.classList.toggle("completed", this.checked);
            updateCompletedTasks();
        });

        // Handle task deletion
        deleteBtn.addEventListener("click", () => {
            taskList.removeChild(newTask);
            totalTasksCount--;
            if (newTask.dataset.completed === "true") {
                completedTasksCount--;
            }
            totalTasks.textContent = `Total tasks: ${totalTasksCount}`;
            updateCompletedTasks();

            // Show "No tasks yet" message when the last task is deleted
            if (totalTasksCount === 0) {
                const emptyMsg = document.createElement("li");
                emptyMsg.textContent = "No tasks yet. Add one above!";
                emptyMsg.classList.add("empty-list");
                taskList.appendChild(emptyMsg);
            }
        });
    });

    // Function to update completed task count
    function updateCompletedTasks() {
        completedTasksCount = document.querySelectorAll('.task-item[data-completed="true"]').length;
        completedTasks.textContent = `Completed: ${completedTasksCount}`;
    }
});
