window.onload = function(){

  const button = document.querySelector("button");

  const input = document.getElementById("taskInput");

  const taskList = document.getElementById("taskList");

  button.addEventListener("click", function(){

    const li = document.createElement("li");

    li.innerHTML = input.value + ' <button class="delete-btn">Delete</button>';
    li.addEventListener("click", function(){

  li.style.textDecoration = "line-through";

  li.style.opacity = "0.6";

});

    taskList.appendChild(li);

    input.value = "";

    const deleteButtons = document.querySelectorAll(".delete-btn");

    deleteButtons.forEach(function(btn){

      btn.onclick = function(){

        btn.parentElement.remove();

      }

    });

  });

}
