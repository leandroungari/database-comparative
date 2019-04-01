import {
  loadState,
  storeState,

  loadTest,
  storeTest,

  storeTestCase,
  loadTestCase
} from "../app/state";

class Test {
  constructor() {

  }

  createTestCase(name) {
    let file = loadTestCase();
    if(
      file.tests.map(a => a.name)
      .includes(name)
    ) {
      console.log("you cannot have two tests case with same name.");
      return;
    }

    let state = loadState();
    state = {
      ...state,
      currentTestCase: name
    }
    storeState(state);

    file.tests = [
      ...file.tests,
      {
        name,
        commands: []
      }
    ];
    storeTestCase(file);
  }

  listTestCase() {
    const file = loadTestCase();
    return file.tests;
  }

  updateTestCase(command) {
    const file = loadTestCase();
    let test = this.getTestCase(); 
    if (test){
      test = {
        ...test,
        commands: [
          ...test.commands,
          command
        ]
      };

      file.tests = [...file.tests
        .filter(a => a.name !== test.name),
        test
      ];
      storeTestCase(file);
    }
  }

  getTestCase(name = undefined) {
    const state = loadState();
    if (name === undefined) {
      name = state.currentTestCase;
    }
    const file = loadTestCase();
    const test = file.tests.filter(
      a => a.name === name
    )[0]; 

    return test;
  }

  thereIsTestCase() {
    const state = loadState();
    return state.currentTestCase ? true : false;
  }

  saveTestCase() {
    let state = loadState();
    state = {
      ...state,
      currentTestCase: undefined
    }
    storeState(state);
  }

  createTest(testName, testCase, timeOfCommands) {
    const file = loadTest();

    const result = {
      name: testName,
      commands: []
    }

    result.commands = testCase.commands
    .map(({command}) => {
      return {
        command,
        stats: {
          time: timeOfCommands[command]
        }
      }
    })

    file.tests = [
      ...file.tests,
      result
    ];
    storeTest(file);
  }

  thereIsTest(name) {
    return this.getTest(name) ? true : false;
  }

  getTest(name) {
    const file = loadTest();
    const test = file.tests.filter(
      a => a.name === name
    )[0]; 
    return test;
  }
}

const test = new Test();
export default test;