window.onload = function(){

  const button = document.querySelector("button");

  const input = document.getElementById("taskInput");

  const taskList = document.getElementById("taskList");

  button.addEventListener("click", function(){

    const li = document.createElement("li");

    li.textContent = input.value;

    const deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";

    deleteButton.onclick = function(){

      li.remove();

    }

    li.appendChild(deleteButton);

    taskList.appendChild(li);

    input.value = "";

  });

}
