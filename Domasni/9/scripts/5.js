let clickCounter = 0;
let btn = document.createElement("button");
btn.id = "btn";
btn.textContent = "Get ToDo";
btn.style.margin = "30px";
btn.style.height = "50px";
btn.style.width = "100px";
btn.style.background = "#545454";
btn.style.color = "#eee";
btn.style.cursor = "pointer";

document.body.appendChild(btn);

document.getElementById("btn").addEventListener("click", () => {
  if (clickCounter >= 1) {
    document.getElementById("table").remove();
  }
  let todo;
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((result) => result.json())
    .then((json) => {
      todo = json[Math.floor(Math.random() * 200)];
    })
    .finally(() => {
      let table = document.createElement("table");
      table.id = "table";
      table.setAttribute("border", "5px");
      table.innerHTML = `<tr>
            <td>ID<td/>
            ${todo.id}
        <tr/>
        <tr>
            <td>Title<td/>
            ${todo.title}
        <tr/>
        <tr>
            <td>Status<td/>
            ${todo.completed ? "Completed" : "Not Completed"}
        <tr/>`;
      document.body.appendChild(table);
    });
  clickCounter++;
});
