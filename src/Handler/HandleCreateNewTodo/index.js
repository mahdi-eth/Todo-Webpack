import { toastify } from "../../Components/toastify";

const todoTitle = document.getElementById("title");
const todoDesc = document.getElementById("desc");
const mainList = document.getElementById("main");

function getLoccatedTodos() {
  const savedLCTodos = localStorage.getItem("todosList");
  return JSON.parse(savedLCTodos)?.sort((a, b) => a.id - b.id) || [];
}
let savedTodos = [...getLoccatedTodos()];
const createNewTodo = (title, desc, id, checked) => {
  const listItem = document.createElement("li");
  listItem.className = "list-item";
  listItem.id = id;
  const todoTitleHeading = document.createElement("h3");
  const todoTitleInput = document.createElement("input");
  todoTitleInput.disabled = true;
  todoTitleInput.className = "title-input";
  todoTitleInput.defaultValue = title;
  todoTitleHeading.appendChild(todoTitleInput);
  const todoDescPara = document.createElement("p");
  const todoDescInput = document.createElement("input");
  todoDescInput.disabled = true;
  todoDescInput.defaultValue = desc;
  todoDescPara.appendChild(todoDescInput);
  listItem.appendChild(todoTitleHeading);
  listItem.appendChild(todoDescPara);
  const htmlDel = document.createElement("button");
  htmlDel.setAttribute("data-id", id);
  htmlDel.innerHTML = "Del";
  const htmlCheck = document.createElement("button");
  htmlCheck.innerText = "Check";
  htmlCheck.setAttribute("data-id", id);
  const htmlEDIT = document.createElement("button");
  htmlEDIT.innerText = "Edit";
  htmlEDIT.setAttribute("data-id", id);
  listItem.appendChild(htmlDel);
  listItem.appendChild(htmlCheck);
  listItem.appendChild(htmlEDIT);
  mainList.appendChild(listItem);
  if(desc) {
    todoDescPara.className = "todo-desc";
  }
  if (checked) {
    todoTitleHeading.style.background = "rgba(0, 162, 255, 0.850)";
    todoTitleInput.style.background = "transparent";
    todoTitleInput.style.textDecoration = "line-through";
    htmlCheck.innerText = "Uncheck";
    if(desc) {
      todoDescPara.style.textDecoration = "line-through";
      todoDescPara.style.background = "rgba(0, 162, 255, 0.850)";
    }
  }
};
function renderTodoElements() {
  getLoccatedTodos().forEach((todo) =>
    createNewTodo(todo.title, todo.desc, todo.id, todo.checked)
  );
}
renderTodoElements();
export const handleCreateNewTodo = (event) => {
  event.preventDefault();
  if (!todoTitle.value)
    return toastify("please enter a valid title ...", {
      time: 3000,
      type: "warn",
    });
  const newTodo = {
    id: Date.now(),
    title: todoTitle.value,
    desc: todoDesc.value,
    checked: false,
  };
  savedTodos.push(newTodo);
  localStorage.setItem("todosList", JSON.stringify(savedTodos));
  createNewTodo(newTodo.title, newTodo.desc, newTodo.id);
};
mainList.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  if (e.target.innerText === "Del") {
    const filtredTodos = getLoccatedTodos().filter(
      (item) => item.id !== Number(id)
    );
    localStorage.setItem("todosList", JSON.stringify(filtredTodos));
    mainList.innerHTML = "";
    renderTodoElements();
  } else if (e.target.innerText === "Check") {
    const filtredTodo = getLoccatedTodos().filter(
      (item) => item.id === Number(id)
    );
    const updateFiltredTodo = { ...filtredTodo[0], checked: true };
    const filtredTodos = getLoccatedTodos().filter(
      (item) => item.id !== Number(id)
    );
    const updateSavedTodos = [...filtredTodos, updateFiltredTodo];
    localStorage.setItem("todosList", JSON.stringify(updateSavedTodos));
    mainList.innerHTML = "";
    renderTodoElements();
  } else if (e.target.innerText === "Uncheck") {
    const filtredTodo = getLoccatedTodos().filter(
      (item) => item.id === Number(id)
    );
    const updateFiltredTodo = { ...filtredTodo[0], checked: false };
    const filtredTodos = getLoccatedTodos().filter(
      (item) => item.id !== Number(id)
    );
    const updateSavedTodos = [...filtredTodos, updateFiltredTodo];
    localStorage.setItem("todosList", JSON.stringify(updateSavedTodos));
    mainList.innerHTML = "";
    renderTodoElements();
  } else if (e.target.innerText === "Edit") {
    const todoEl = e.target.parentElement;
    todoEl.children[0].children[0].disabled = false;
    todoEl.children[0].children[0].select();
    todoEl.children[0].style.border = " .1rem solid blue";
    todoEl.children[1].children[0].disabled = false;
    todoEl.children[1].style.border = " .1rem solid blue";
    todoEl.children[0].children[0].style.textDecoration = "none";
    todoEl.children[1].children[0].style.textDecoration = "none";
    todoEl.children[0].style.background = "transparent";
    todoEl.children[1].style.background = "transparent";
    e.target.innerText = "SAVE";
    e.target.addEventListener("click", () => {
      const filtredTodo = getLoccatedTodos().filter(
        (item) => item.id === Number(id)
      );
      const updateFiltredTodo = {
        ...filtredTodo[0],
        title: todoEl.children[0].children[0].value,
        desc: todoEl.children[1].children[0].value
      };
      const filtredTodos = getLoccatedTodos().filter(
        (item) => item.id !== Number(id)
      );
      const updateSavedTodos = [...filtredTodos, updateFiltredTodo];
      localStorage.setItem("todosList", JSON.stringify(updateSavedTodos));
      mainList.innerHTML = "";
      renderTodoElements();
    });
  }
});