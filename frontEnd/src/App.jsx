import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import CreateBook from "./pages/CreateBook";
import DeleteBook from "./pages/DeleteBook";
import EditBook from "./pages/EditBook";
import ShowBook from "./pages/ShowBook";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/books/create",
    element: <CreateBook />,
  },
  {
    path: "/books/details/:id",
    element: <ShowBook />,
  },
  {
    path: "/books/edit/:id",
    element: <EditBook />,
  },
  {
    path: "/books/delete/:id",
    element: <DeleteBook />,
  },
]);
const App = () => {
  return (
    <div className="App max-w-[1500px] mx-auto">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
