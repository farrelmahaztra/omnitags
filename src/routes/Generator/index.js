import { Route, Navigate, Routes } from "react-router-dom";
import Basic from "./Basic";

function Generator() {
  return (
    <Routes>
      <Route path="" element={<Navigate to="basic" />} />
      <Route path="basic" replace element={<Basic />} />
      <Route path="advanced" replace element={<Basic />} />
      <Route path="custom" replace element={<Basic />} />
    </Routes>
  );
}

export default Generator;
