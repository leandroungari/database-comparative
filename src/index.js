import app from "./app";
import interpreter from "./interpreter";
import timer from "./timer";

import {
  cmd, 
  dataset,
  database,
  test
} from "./commands";

app
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