import { loadState, storeState } from "../app/state";

class Timer {
  constructor() {
  }

  start() {
    let state = loadState();
    state = {
      ...state,
      timeStart: process.hrtime()
    };
    storeState(state);
  }

  end() {
    let state = loadState();
    state = {
      ...state,
      timeEnd: process.hrtime(state.timeStart)
    };
    storeState(state);
  }

  timeInMs() {
    const state = loadState();
    return state.timeEnd[1]/1000000;
  }
}


const timer = new Timer();
export default timer;