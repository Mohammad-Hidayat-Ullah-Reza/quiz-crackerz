import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Main from "./layouts/Main";
import Home from "./components/Home/Home";
import Blog from "./components/Blog/Blog";
import Statistic from "./components/Statistic/Statistic";
import Quizzes from "./components/Quizzes/Quizzes";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: async () =>
            fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Home></Home>,
        },
        {
          path: "/home",
          loader: async () =>
            fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Home></Home>,
        },
        {
          element: <Quizzes></Quizzes>,
          path: "/:quizId",
          loader: async ({ params }) => {
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.quizId}`
            );
          },
        },
        {
          path: "/statistic",
          element: <Statistic></Statistic>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
      ],
    },
    {
      path: "*",
      element: <ErrorPage></ErrorPage>,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
