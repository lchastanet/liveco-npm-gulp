const addButton = document.querySelector(".todo-button");

const createTaskNode = (text) => {
  const li = document.createElement("li");
  li.classList.add("task");

  const input = document.createElement("input");
  input.type = "checkbox";
  input.classList.add("task-checkbox");

  input.addEventListener("change", () => p.classList.toggle("done"));

  li.append(input);

  const p = document.createElement("p");
  p.classList.add("task-text");
  p.textContent = text;

  li.append(p);

  const button = document.createElement("button");
  button.classList.add("task-button");
  button.textContent = "🗑";

  button.addEventListener("click", () => li.remove());

  li.append(button);

  return li;
};

addButton.addEventListener("click", (e) => {
  e.preventDefault();
  const tasksList = document.querySelector(".tasks-list");
  const inputText = document.querySelector(".todo-text");

  if (inputText.value.length < 3) {
    alert("Your task must contain at least 3 characters !");
  } else {
    const taskNode = createTaskNode(inputText.value);

    tasksList.append(taskNode);

    inputText.value = "";
  }
});
