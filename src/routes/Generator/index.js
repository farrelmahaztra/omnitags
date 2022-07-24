import { Route, Navigate, Routes } from "react-router-dom";
import Basic from "./Basic";
import Advanced from "./Advanced";
import Custom from "./Custom";

function Generator() {
  return (
    <Routes>
      <Route path="" element={<Navigate to="basic" />} />
      <Route path="basic" replace element={<Basic />} />
      <Route path="advanced" replace element={<Advanced />} />
      <Route path="custom" replace element={<Custom />} />
    </Routes>
  );
}

export default Generator;
