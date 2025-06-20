let title = document.getElementById("task-title");
let decsript = document.getElementById("description");

let tasks = []; //for storing all tasks inside this array

submit.addEventListener("click", addTask);

function addTask() {
  let taskTitle = title.value.trim();
  let taskDescrpt = decsript.value.trim();
  if (taskTitle === "") {
    alert("Title is compulsory");
  }

  const task = {
    id: Date.now(),
    title: taskTitle,
    description: taskDescrpt,
  };

  tasks.push(task);

  renderTask();
  title.value = "";
  description.value = "";
  tasks = [];
  console.log(`Current Task: ${task.title}`);
}

function renderTask() {
  const card = document.getElementById("card");

  tasks.forEach((item, index) => {
    //Title
    const tTitle = document.createElement("p");
    tTitle.innerText = item.title;
    tTitle.classList.add("tCard");
    card.appendChild(tTitle);

    //Description
    const tDecsript = document.createElement("p");
    tDecsript.innerText = item.description;
    tDecsript.classList.add("tCard");
    card.appendChild(tDecsript);

    //Delete button
    const delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    card.appendChild(delBtn);
    delBtn.classList.add("btn");

    //Event handler
    delBtn.addEventListener("click", () => {
      tasks.splice(index, 1);
      renderTask();
      card.innerHTML = "";
    });
    console.log(tasks);
  });
}
