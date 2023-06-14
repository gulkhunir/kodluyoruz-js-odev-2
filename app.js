const task = document.getElementById("task");
const list = document.getElementById("list");
const li = document.getElementsByTagName("li");

list.addEventListener("click", (e) => e.target.classList.toggle("checked"));

function newElement() {
  if (task.value.length == 0) {
    $("#liveToastEmpty").toast("show");
  } else {
    let liDOM = document.createElement("li");
    liDOM.innerHTML = task.value;
    list.appendChild(liDOM);
    task.value = "";
    $("#liveToastAdd").toast("show");
    iconClose(liDOM);
  }
}

function iconClose(element) {
  let btn = document.createElement("button");
  btn.type = "button";
  btn.className = "close";
  btn.ariaLabel = "Close";
  btn.addEventListener("click", (e) =>
    e.target.parentElement.parentElement.remove()
  );
  btn.innerHTML = `<span aria-hidden="true">&times<span/>`;
  element.appendChild(btn);
}

let liDom = document.getElementsByTagName("li");
for (let i = 0; i < liDom.length; i++) {
  iconClose(liDom[i]);
}
