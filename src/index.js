import app from "./app";
import interpreter from "./interpreter";
import {
  cmd, 
  dataset,
  database
} from "./commands";

app
  .databases()
  .interpreter(
    interpreter
    .commands({
      ...cmd, 
      ...dataset,
      ...database
    })
    .start()
  )
  .play();