window.onload = function(){

  const button = document.querySelector("button");

  const input = document.getElementById("taskInput");

  const taskList = document.getElementById("taskList");

  button.addEventListener("click", function(){

    const li = document.createElement("li");

    li.textContent = input.value;

    taskList.appendChild(li);

  });

}Learn JavaScript
