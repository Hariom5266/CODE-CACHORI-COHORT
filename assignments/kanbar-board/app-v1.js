document.addEventListener("DOMContentLoaded", function () {
  // Drag and Drop Functionality
  let draggedTask = null;
  let draggedClone = null;
  let placeholder = document.createElement("div");
  placeholder.classList.add("drop-placeholder");
  let selectedTag = null;

  // Initialize task cards
  document.querySelectorAll(".task-card").forEach(makeTaskDraggable);

  // Initialize columns
  document.querySelectorAll(".column").forEach(column => {
    column.addEventListener("dragover", handleDragOver);
    column.addEventListener("dragleave", handleDragLeave);
    column.addEventListener("drop", handleDrop);
  });

  // Modal elements
  const taskModal = document.getElementById("taskModal");
  const columnModal = document.getElementById("columnModal");
  const addTaskBtn = document.getElementById("addTask");
  const addColumnBtn = document.getElementById("addColumn");
  const closeBtns = document.querySelectorAll(".close-btn");
  const taskForm = document.getElementById("taskForm");
  const columnForm = document.getElementById("columnForm");
  const tagOptions = document.querySelectorAll(".tag-option");

  // Event Listeners
  addTaskBtn.addEventListener("click", () => {
    taskModal.style.display = "flex";
  });

  addColumnBtn.addEventListener("click", () => {
    columnModal.style.display = "flex";
  });

  closeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      taskModal.style.display = "none";
      columnModal.style.display = "none";
    });
  });

  // Close modals when clicking outside
  window.addEventListener("click", (e) => {
    if (e.target === taskModal) taskModal.style.display = "none";
    if (e.target === columnModal) columnModal.style.display = "none";
  });

  // Handle tag selection
  tagOptions.forEach(tag => {
    tag.addEventListener("click", () => {
      // Remove selected class from all tags
      tagOptions.forEach(t => t.style.border = "none");
      // Add selected class to clicked tag
      tag.style.border = "2px solid white";
      selectedTag = tag.dataset.tag;
    });
  });

  // Form submission
  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const title = document.getElementById("taskTitle").value;
    const desc = document.getElementById("taskDesc").value;
    
    if (title) {
      // Create new task card
      const newTask = createTaskCard(title, desc, selectedTag);
      
      // Add to TODO column
      document.getElementById("todo").appendChild(newTask);
      
      // Reset form and close modal
      taskForm.reset();
      selectedTag = null;
      tagOptions.forEach(t => t.style.border = "none");
      taskModal.style.display = "none";
    }
  });

  columnForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const title = document.getElementById("columnTitle").value;
    
    if (title) {
      // Create new column
      const newColumn = createColumn(title);
      
      // Add to kanban board
      document.querySelector(".kanban-board").appendChild(newColumn);
      
      // Reset form and close modal
      columnForm.reset();
      columnModal.style.display = "none";
    }
  });

  // Helper Functions
  function makeTaskDraggable(task) {
    task.addEventListener("dragstart", (e) => {
      draggedTask = task;
      
      // Create clone for ghost effect
      draggedClone = task.cloneNode(true);
      draggedClone.style.position = "absolute";
      draggedClone.style.opacity = "0";
      document.body.appendChild(draggedClone);
      
      // Set custom ghost image (invisible)
      e.dataTransfer.setDragImage(draggedClone, 0, 0);
      
      // Add dragging class after a short delay 
      setTimeout(() => {
        task.classList.add("dragging");
      }, 0);
    });

    task.addEventListener("dragend", () => {
      task.classList.remove("dragging");
      
      // Remove clone
      if (draggedClone && draggedClone.parentNode) {
        draggedClone.parentNode.removeChild(draggedClone);
      }
      
      draggedTask = null;
      draggedClone = null;
      
      // Remove placeholder if it exists
      if (placeholder.parentNode) {
        placeholder.parentNode.removeChild(placeholder);
      }
    });
  }

  function handleDragOver(e) {
    e.preventDefault();
    
    const column = this;
    let taskUnderCursor = getTaskUnderCursor(column, e.clientY);
    
    // Insert placeholder at appropriate position
    if (!taskUnderCursor) {
      if (!column.contains(placeholder)) {
        column.appendChild(placeholder);
      }
    } else {
      column.insertBefore(placeholder, taskUnderCursor);
    }
  }

  function handleDragLeave(e) {
    // Only remove if leaving the column (not its children)
    if (e.relatedTarget && !this.contains(e.relatedTarget)) {
      if (placeholder.parentNode === this) {
        placeholder.remove();
      }
    }
  }

  function handleDrop(e) {
    e.preventDefault();
    
    if (draggedTask) {
      // Replace placeholder with task
      if (placeholder.parentNode) {
        placeholder.replaceWith(draggedTask);
      } else {
        this.appendChild(draggedTask);
      }
      
      draggedTask.classList.remove("dragging");
    }
  }

  function getTaskUnderCursor(column, y) {
    const tasks = [...column.querySelectorAll(".task-card:not(.dragging)")];
    
    return tasks.find(task => {
      const rect = task.getBoundingClientRect();
      return y < rect.top + rect.height / 2;
    });
  }

  function createTaskCard(title, desc, tagType) {
    const task = document.createElement("div");
    task.className = "task-card";
    task.draggable = true;
    task.id = "task-" + Date.now();
    
    const taskTitle = document.createElement("h3");
    taskTitle.className = "task-title";
    taskTitle.textContent = title;
    
    const taskDesc = document.createElement("h5");
    taskDesc.className = "task-desc";
    taskDesc.textContent = desc;
    
    task.appendChild(taskTitle);
    task.appendChild(taskDesc);
    
    if (tagType) {
      const tag = document.createElement("span");
      tag.className = "task-tag task-" + tagType;
      
      switch(tagType) {
        case "design":
          tag.textContent = "Design";
          break;
        case "writing":
          tag.textContent = "Writing";
          break;
        case "dev":
          tag.textContent = "Development";
          break;
      }
      
      task.appendChild(tag);
    }
    
    // Make the new task draggable
    makeTaskDraggable(task);
    
    return task;
  }

  function createColumn(title) {
    const column = document.createElement("div");
    column.className = "column";
    column.id = title.toLowerCase().replace(/\s+/g, "-");
    
    const iconWrapper = document.createElement("div");
    iconWrapper.className = "column-icon-wrapper";
    
    const icon = document.createElement("div");
    icon.className = "column-icon";
    
    const header = document.createElement("h3");
    header.className = "column-header";
    header.textContent = title.toUpperCase();
    
    iconWrapper.appendChild(icon);
    iconWrapper.appendChild(header);
    column.appendChild(iconWrapper);
    
    // Add event listeners to the new column
    column.addEventListener("dragover", handleDragOver);
    column.addEventListener("dragleave", handleDragLeave);
    column.addEventListener("drop", handleDrop);
    
    return column;
  }
});
