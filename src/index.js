import "./styles/index.scss";
// import Box from "./Components/Box";
import { handleCreateNewTodo } from "./Handler/HandleCreateNewTodo";

const rootElement = document.getElementById("root");
document.body.className = "bg-yellow-300";

// function container() {
//   return Box({
//     classes: "flex flex-col items-center",
//     children: [
//       Box({
//         element: "h1",
//         children: "TODO",
//         classes: "text-8xl mt-20 mb-10",
//       }),
//       Box({
//         classes: "my-alert",
//         children: [
//           Box({
//             element: "span",
//             children: "Please fill both of the text areas",
//           }),
//           Box({
//             element: "button",
//             children: "OK",
//           }),
//         ],
//       }),
//       Box({
//         element: "form",
//         classes: "text-center w-full",
//         children: [
//           Box({
//             element: "input",
//             classes: "title ",
//           }),
//           Box({
//             element: "textarea",
//             classes: "desc",
//           }),
//           Box({
//             element: "button",
//             children: "submit",
//             classes: "submit",
//           }),
//         ],
//       }),
//       Box({
//         element: 'h1',
//         children: 'My ToDo List',
//       }),
//     Box({
//       element: 'ul',
//       classes: 'main'
//     })
//     ],
//   });
// }

/* <div class=""></div> */

const containerEl = document.createElement('div');
containerEl.className = 'flex flex-col items-center';

const header = document.createElement('h1');
header.innerText = 'TODO';
header.className = 'text-8xl mt-10 mb-10';

const span = document.createElement('span');
span.innerHTML ='<span> Please fill both of the text areas </span>';

const alertBtn = document.createElement('div');
alertBtn.innerHTML ='<button id="alertBtn" type="button">OK</button>';

const alert = document.createElement('div');
alert.innerHTML = span.innerHTML + alertBtn.innerHTML;
alert.className = 'my-alert';
alert.id = 'myAlert';

const formInput = document.createElement('div');
formInput.innerHTML ='<input id="title" type="text" placeholder="Title" />';

const formtext = document.createElement('div');
formtext.innerHTML ='<textarea id="desc" placeholder="Paragraf" rows="8"></textarea>';

const formBtn = document.createElement('div');
formBtn.innerHTML ='<button id="submit">submit</button>';

const form = document.createElement('form');
form.innerHTML = formInput.innerHTML + formtext.innerHTML + formBtn.innerHTML;

const myTOdo = document.createElement('h1');
myTOdo.innerText = 'My ToDo List';
myTOdo.className = 'text-8xl mt-10 mb-10';

const main = document.createElement('ul');
main.id = 'main';



rootElement.appendChild(header);
rootElement.appendChild(alert);
rootElement.appendChild(form);
rootElement.appendChild(myTOdo);
rootElement.appendChild(main);


formBtn.children[0].addEventListener('click', handleCreateNewTodo)


