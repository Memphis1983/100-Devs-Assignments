const deleteBtn = document.querySelectorAll(".del");
const todoItem = document.querySelectorAll(".todoItem span");
const todoComplete = document.querySelectorAll(".todoItem span.completed");

Array.from(deleteBtn).forEach((el) => {
  el.addEventListener("click", deleteTodo);
});
Array.from(todoItem).forEach((el) => {
  el.addEventListener("click", markComplete);
});
Array.from(todoComplete).forEach((el) => {
  el.addEventListener("click", undo);
});

async function deleteTodo() {
  const todoText = this.parentNode.childNodes[1].innerText;
  try {
    const response = await fetch("deleteTodo", {
      method: "delete",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        rainbowUnicorn: todoText,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (error) {
    console.log(error);
  }
}

async function markComplete() {
  const todoText = this.parentNode.childNodes[1].innerText;
  try {
    const response = await fetch("markComplete", {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        rainbowUnicorn: todoText,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (error) {
    console.log(error);
  }
}

async function undo() {
  const todoText = this.parentNode.childNodes[1].innerText;
  try {
    const response = await fetch("undo", {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        rainbowUnicorn: todoText,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (error) {
    console.log(error);
  }
}
