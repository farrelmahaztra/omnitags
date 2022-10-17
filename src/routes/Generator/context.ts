import { createContext } from "react";
import { State, Action, initialState } from "./reducer";

export const GeneratorContext = createContext<State>(initialState);
export const GeneratorDispatchContext = createContext<React.Dispatch<Action>>(
  () => {}
);
