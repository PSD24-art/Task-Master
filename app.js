let title = document.getElementById("task-title");
let descript = document.getElementById("description");

let tasks = []; //for storing all tasks inside this array

submit.addEventListener("click", addTask);

function addTask() {
  let taskTitle = title.value.trim();
  let taskDescrpt = descript.value.trim();
  if (!taskTitle) {
    alert("Title is compulsory");
    return;
  }

  //Creating a new Object tasks
  const task = {
    title: taskTitle,
    description: taskDescrpt,
  };

  //Pushing the task to the Tasks array
  tasks.push(task);

  //callback function
  renderTask();

  //empty all the input fields
  title.value = "";
  descript.value = "";
  tasks = [];
  console.log(`Current Task: ${task.title}`);
}

function renderTask() {
  const card = document.getElementById("card");
  const sepCard = document.createElement("div");
  sepCard.setAttribute("class", "sepCard");
  sepCard.classList.add("sepCard");

  tasks.forEach((item, index) => {
    //Title
    let tTitle = document.createElement("p");
    tTitle.innerText = item.title;
    tTitle.classList.add("tCard");
    sepCard.appendChild(tTitle);

    //Description
    let tDescript = document.createElement("p");
    tDescript.innerText = item.description;
    tDescript.classList.add("tCard");
    sepCard.appendChild(tDescript);

    //Button group div
    const div = document.createElement("div");
    div.setAttribute("class", "btnGrp");
    // div.classList.add("btnGrp");

    //adding delete button inside div
    const delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    div.appendChild(delBtn);
    delBtn.classList.add("btn");

    //Event handler Delete
    delBtn.addEventListener("click", () => {
      tasks.splice(index, 1);
      renderTask();
      sepCard.innerHTML = "";
    });

    //Edit button
    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    div.appendChild(editBtn);
    editBtn.classList.add("btn");

    //Event handler Edit
    editBtn.addEventListener("click", () => {
      //Creating new Input title and description
      let titleInput = document.createElement("input");
      let descriptInput = document.createElement("textarea");

      //Assigning the existing values to the respective inputs
      titleInput.value = item.title;
      descriptInput.value = item.description;

      //Updating the child element with new input elements
      sepCard.replaceChild(titleInput, tTitle);
      sepCard.replaceChild(descriptInput, tDescript);
    });

    //Adding div to sepCard and sepCard to card
    sepCard.appendChild(div);
    card.appendChild(sepCard);
  });
}

//Delete button
