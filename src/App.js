import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import TodayWeather from "./pages/TodayWeather";
import WeeklyWeather from "./pages/WeeklyWeather";
import { useSelector } from "react-redux";
import classes from "./App.module.css";
import ErrorPage from "./pages/Error";
function App() {
  const state = useSelector((state) => state.mode);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <TodayWeather />,
        },
        {
          path: "weekly",
          element: <WeeklyWeather />,
        },
      ],
    },
  ]);

  const nameClasses = [classes.image, state ? classes.night : null].join(" ");

  return (
    <div className={nameClasses}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
