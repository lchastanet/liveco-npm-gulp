const inputText = document.querySelector(".todo-text");
const addButton = document.querySelector(".todo-button");
const tasksList = document.querySelector(".tasks-list");

addButton.addEventListener("click", (e) => {
  e.preventDefault();

  const li = document.createElement("li");
  li.classList.add("task");

  const input = document.createElement("input");
  input.type = "checkbox";
  input.classList.add("task-checkbox");

  li.append(input);

  const p = document.createElement("p");
  p.classList.add("task-text");
  p.textContent = inputText.value;

  li.append(p);

  input.addEventListener("change", () => p.classList.toggle("done"));

  const button = document.createElement("button");
  button.classList.add("task-button");
  button.textContent = "🗑";

  button.addEventListener("click", () => li.remove());

  li.append(button);

  tasksList.append(li);
});
