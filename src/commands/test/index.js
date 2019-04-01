import app from "../../app";
import interpreter from "../../interpreter";

const testCommands = {
  "start-test-case": (name) => {
    app.tester().createTestCase(name);
    console.log("all commands executed until the end-test-case will be part of the test case.");
  },
  "list-test-case": () => {
    console.log("=> list of tests-case:");
    if (app.tester().listTestCase().length === 0) 
      console.log("there's no tests-case.");
    else 
      app.tester().listTestCase()
      .forEach((item, index) => {
        console.log(`#${index} ${item.name}`);
      });
  },
  "end-test-case": () => {
    const currentTestCaseName = app.tester()
      .getTestCase().name;
    app.tester().saveTestCase();
    console.log(
      `test-case "${currentTestCaseName}" finished`
    );
  },
  "show-stats": (name="") => {
    const test = app.tester().getTest(name);
    if (name === "") {
      console.log("you must pass test name.");
      return;
    } 
    else if (!test) {
      console.log("test not found.");
      return;
    }

    console.log("> ==============================================");
    console.log(`test name: ${test.name}`);
    test.commands.forEach(({command, stats}) => {
      console.log(`command: ${command} (${stats.time.length})`);
      console.log(
        `  min: ${  min(stats.time)} ms \n  max: ${max(stats.time)} ms \n  average: ${average(stats.time)} ms\n`
      );
    });
  },
  "run-test": (testName, testCaseName = "", times = undefined) => {
    const testCase = app.tester()
    .getTestCase(testCaseName);

    if (testName === "") {
      console.log("you must pass test name.");
      return;
    } 
    else if (times === undefined) {
      console.log("you must define number of repeats.");
      return;
    }
    else if (!testCase) {
      console.log("test not found.");
      return;
    }

    const timeOfCommands = {};
    console.log(`test ${testName} started.`)
    console.log(`running test-case ${testCase.name} ...`);
    for(let i = 0; i < times; i++) {  
      testCase.commands.forEach(({command}) => {
        interpreter.run(command, true);
        timeOfCommands[command] = [
          ...(
            timeOfCommands[command] ? 
            timeOfCommands[command] :
            []
          ),
          interpreter.currentTimer.timeInMs()
        ];
      });
    }

    app.tester()
    .createTest(testName, testCase, timeOfCommands);
  }
}

const min = list => {
  return list.reduce((min, item) => {
    return item < min ? item : min
  }, Number.MAX_VALUE);
} 

const max = list => {
  return list.reduce((max, item) => {
    return item > max ? item : max
  }, Number.MIN_VALUE);
}

const average = list => {
  return list.reduce((total, item) => {
    return total + item;
  }, 0)/list.length;
}

export default testCommands;