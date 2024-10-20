import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import BookDetails from "../component/BookDetails";
import ErrorElement from "../pages/ErrorElement/ErrorElement";
import WishLists from "../pages/WishLists/WishLists";
import Contact from "../pages/Contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorElement/>,
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/books/:id',
        element: <BookDetails />,
        loader: ({params})=>fetch(`https://gutendex.com/books/${params.id}`)
      },
      {
        path: '/wishlists',
        element: <WishLists/>
      },
      {
        path: '/contact',
        element: <Contact/>
      }
    ]
  },
]);