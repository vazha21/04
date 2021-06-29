const arr = document.getElementById("list");
const input = document.getElementById("input");

input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    const value = input.value;

    const li = document.createElement("li");
    const span = document.createElement("span");
    const deleteBtn = document.createElement("button");

    span.innerText = value;
    deleteBtn.innerText = "წაშალე";
    deleteBtn.addEventListener("click", () => li.remove());

    li.appendChild(span);
    li.appendChild(deleteBtn);

    arr.appendChild(li);
    input.value = "";
  }
});
