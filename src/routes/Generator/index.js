import { useReducer } from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import Basic from "./Basic";
import Advanced from "./Advanced";
import Complete from "./Complete";
import { initialState, reducer } from "./state";

function Generator() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Routes>
      <Route path="" element={<Basic state={state} dispatch={dispatch} />} />
      <Route
        path="advanced"
        replace
        element={<Advanced state={state} dispatch={dispatch} />}
      />
      <Route path="complete" replace element={<Complete state={state} />} />
      <Route path="*" element={<Navigate to="" />} />
    </Routes>
  );
}

export default Generator;
