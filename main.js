const boton = document.getElementById("añadir");
const input = document.getElementById("tarea");
const lista = document.getElementById("lista");

boton.addEventListener("click", function () {
  if (input.value !== "") {
    const li = document.createElement("li");
    li.textContent = input.value;
    lista.appendChild(li);
    input.value = "";
  }
});

