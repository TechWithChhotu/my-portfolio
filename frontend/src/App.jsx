import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
// import Contact from "./components/Contact";

import Contact from "./components/Contect";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageRenderer from "./components/PageRenderer";

import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layout/Layout";
import AllProjects from "./components/AllProjects";
import UpdateProject from "./components/UpdateProject";
import AddProject from "./pages/AddProject";
export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/update-project" element={<UpdateProject />} />
        <Route path="/add-project" element={<AddProject />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}
