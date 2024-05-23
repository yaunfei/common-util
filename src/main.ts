import "./style.css";
import typescriptLogo from "./typescript.svg";
import { fullScreen } from "../lib/main";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div id="mainsss">
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

let a = false
document.getElementById("counter")!.onclick = function () {
   a = !a;
  console.log(111);
  fullScreen(document.getElementById("mainsss")!, a);
};
