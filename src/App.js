import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import TodayWeather from "./pages/TodayWeather";
import WeeklyWeather from "./pages/WeeklyWeather";
import classes from "./App.module.css";
import ErrorPage from "./pages/Error";
import { useEffect, useState } from "react";
function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const mode = localStorage.getItem("mode") === "true";
    setDark(mode);
  }, []);

  const changeTheme = () => {
    setDark(!dark);
    localStorage.setItem("mode", !dark);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root dark={dark} changeTheme={changeTheme} />,
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

  const nameClasses = [classes.image, dark ? classes.night : null].join(" ");

  return (
    <div className={nameClasses}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
