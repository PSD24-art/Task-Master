let input = document.getElementById("task-title");

let tasks = []; //for storing all tasks inside this array

submit.addEventListener("click", addTask);

function addTask() {
  let taskText = input.value.trim();
  if (!input) {
    alert("Title is compulsory");
    return;
  }

  const task = {
    id: Date.now(),
    text: taskText,
  };

  tasks.push(task);
  input.value = " ";

  renderTask();
  input.value = "";
  tasks = [];

  console.log(`Current Task: ${task.text}`);
}

function renderTask() {
  const list = document.getElementById("card");

  tasks.forEach((item) => {
    const tCard = document.createElement("div");
    tCard.innerText = item.text;
    tCard.classList.add("tCard");
    list.appendChild(tCard);
  });
}
