import { useReducer } from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import Basic from "./Basic";
import Advanced from "./Advanced";
import Complete from "./Complete";
import { initialState, reducer } from "./reducer";
import { GeneratorContext, GeneratorDispatchContext } from "./context";

const Generator = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GeneratorContext.Provider value={state}>
      <GeneratorDispatchContext.Provider value={dispatch}>
        <Routes>
          <Route path="" element={<Basic />} />
          <Route caseSensitive path="advanced" element={<Advanced />} />
          <Route caseSensitive path="complete" element={<Complete />} />
          <Route path="*" element={<Navigate to="" />} />
        </Routes>
      </GeneratorDispatchContext.Provider>
    </GeneratorContext.Provider>
  );
};

export default Generator;
