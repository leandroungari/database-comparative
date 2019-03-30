import app from "./app";
import Interpreter from "./interpreter";

const cmd = new Interpreter();

app
  .databases()
  .interpreter(cmd.start())
  .play();