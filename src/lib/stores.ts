import { writable } from "svelte/store";
import defaultWords from "./words.json";

class State {
  words: string[] = defaultWords;

  count(): number {
    if (!this.words) return 0;
    return this.words.length;
  }

  randomWords(): string[] {
    return this.words.sort(() => Math.random() - 0.5).slice(0, 4);
  }

  static fromJSON(json: any): State {
    const state = new State();
    state.words = json.words;
    return state;
  }
}

export const state = writable(loadState());

state.subscribe((value) => {
  localStorage.setItem("data", JSON.stringify(value));
});

function loadState(): State {
  try {
    return State.fromJSON(JSON.parse(localStorage.getItem("data")!));
  } catch {
    return new State();
  }
}
