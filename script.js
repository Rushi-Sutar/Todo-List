document.addEventListener("DOMContentLoaded", function () {
  const todoInput = document.getElementById("todoInput");
  const addBtn = document.getElementById("addBtn");
  const todoList = document.getElementById("todoList");
  const clearBtn = document.getElementById("clearBtn");
  const clearAllBtn = document.getElementById("clearAllBtn");

  addBtn.addEventListener("click", addTodo);
  clearBtn.addEventListener("click", clearCompleted);
  clearAllBtn.addEventListener("click", clearAll);

  function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText !== "") {
      const li = document.createElement("li");
      const todoContent = document.createElement("div");
      todoContent.classList.add("todo-content");
      const todoTextElement = document.createElement("span");
      todoTextElement.textContent = todoText;
      todoTextElement.classList.add("todo-text");
      const editInput = document.createElement("input");
      editInput.type = "text";
      editInput.classList.add("edit-input");
      editInput.style.display = "none";
      editInput.value = todoText;
      const editBtn = document.createElement("button");
      editBtn.textContent = "Edit";
      editBtn.classList.add("edit-btn");
      const completeBtn = document.createElement("button");
      completeBtn.textContent = "Complete";
      completeBtn.classList.add("complete-btn");

      todoContent.appendChild(todoTextElement);
      todoContent.appendChild(editInput);
      li.appendChild(todoContent);
      li.appendChild(editBtn);
      li.appendChild(completeBtn);
      todoList.appendChild(li);
      todoInput.value = "";
    }
  }

  function clearCompleted() {
    const completedTodos = document.querySelectorAll(".completed");
    completedTodos.forEach((todo) => {
      todo.remove();
    });
  }

  function clearAll() {
    todoList.innerHTML = "";
  }

  todoList.addEventListener("click", function (event) {
    const target = event.target;
    if (target.classList.contains("complete-btn")) {
      const li = target.parentElement;
      li.classList.toggle("completed");
    } else if (target.classList.contains("edit-btn")) {
      const li = target.parentElement;
      const todoContent = li.querySelector(".todo-content");
      const todoTextElement = li.querySelector(".todo-text");
      const editInput = li.querySelector(".edit-input");
      const editBtn = li.querySelector(".edit-btn");
      if (editInput.style.display === "none") {
        todoTextElement.style.display = "none";
        editInput.style.display = "inline-block";
        editInput.focus();
        editInput.setSelectionRange(0, editInput.value.length);
        editBtn.textContent = "Save";
      } else {
        todoTextElement.textContent = editInput.value;
        todoTextElement.style.display = "inline";
        editInput.style.display = "none";
        editBtn.textContent = "Edit";
      }
    }
  });
});
