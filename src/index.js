import App from "./app";
import Interpreter from "./interpreter";

const app = new App();
const cmd = new Interpreter();

app
  .databases()
  .interpreter(cmd)
  .play();