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
  console.log(`Current Task: ${task.title}`);
}

function renderTask() {
  const card = document.getElementById("card");
  card.innerHTML = "";
  tasks.forEach((item, index) => {
    const sepCard = document.createElement("div");
    sepCard.setAttribute("class", "sepCard");
    sepCard.classList.add("sepCard");

    //Title
    const tTitle = document.createElement("p");
    tTitle.innerText = item.title;
    tTitle.classList.add("tCard");
    sepCard.appendChild(tTitle);

    //Description
    const tDescript = document.createElement("p");
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
      titleInput.classList.add("task-title");

      let descriptInput = document.createElement("textarea");
      descriptInput.classList.add("description");

      //Assigning the existing values to the respective inputs
      titleInput.value = item.title;
      descriptInput.value = item.description;

      //Updating the child element with new input elements
      sepCard.replaceChild(titleInput, tTitle);
      sepCard.replaceChild(descriptInput, tDescript);

      editBtn.innerText = "Save";

      editBtn.addEventListener("click", () => {
        if (titleInput.value === "") {
          alert("Title is compulsory");
          return;
        }
        //creating variables for newly added values
        const newTitle = titleInput.value.trim();

        const newDescript = descriptInput.value.trim();

        //Update the values in the array
        tasks[index].title = newTitle;
        tasks[index].description = newDescript;

        renderTask();
      });
    });

    //Adding div to sepCard and sepCard to card
    sepCard.appendChild(div);
    card.appendChild(sepCard);
  });
}
