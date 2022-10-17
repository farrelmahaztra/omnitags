import { createContext } from "react";
import { GeneratorState, GeneratorAction, initialState } from "./reducer";

export const GeneratorContext = createContext<GeneratorState>(initialState);
export const GeneratorDispatchContext = createContext<
  React.Dispatch<GeneratorAction>
>(() => {});
