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

import {
  mongoDB, 
  mysql
} from "./database";

app
  .test(tester)
  .databases([
    mongoDB,
    mysql
  ])
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