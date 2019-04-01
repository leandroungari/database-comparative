import app from "./app";
import interpreter from "./interpreter";
import timer from "./timer";
import tester from "./tester";

import {
  cmd, 
  dataset,
  database,
  test
} from "./commands";

app
  .test(tester)
  .databases()
  .interpreter(
    interpreter
    .timer(timer)
    .commands({
      ...cmd, 
      ...dataset,
      ...database,
      ...test
    })
    .start()
  )
  .play();