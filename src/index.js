import app from "./app";
import interpreter from "./interpreter";
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
    .commands({
      ...cmd, 
      ...dataset,
      ...database,
      ...test
    })
    .start()
  )
  .play();