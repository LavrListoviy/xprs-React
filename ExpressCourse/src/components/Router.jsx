import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/home/home";
import Error404 from "./screens/error/404";
import CarInfo from "./screens/car-info/CarInfo";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route element={<CarInfo />} path="/car/:id"/>
        <Route
          path="*"
          element={<Error404 />}
        />
      </Routes>
    </BrowserRouter>
  );
};
