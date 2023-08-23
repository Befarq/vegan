import React from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Create from "./pages/Create";
import Retsept from "./pages/Retsept";
function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/create" element={<Create />} />
        <Route path="/recept" element={<Retsept />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
