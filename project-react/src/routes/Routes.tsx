import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import App from "../App";


/**
 * The router configuration for the application.
 */
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <HomePage
            title={"Hello, welcome to students-react with Typescript!"}
            subtitle={"You can view some of your favorite students here."}
          >
            Surely, school is fun.
          </HomePage>
        ),
      },

    ],
  },
]);
