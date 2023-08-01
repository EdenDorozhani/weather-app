import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import TodayWeather from "./pages/TodayWeather";
import WeeklyWeather from "./pages/WeeklyWeather";
import { useSelector } from "react-redux";
import classes from "./App.module.css";
import { modeAction } from "./store";
import { useDispatch } from "react-redux";
function App() {
  const state = useSelector((state) => state.mode);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
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

  let URL;

  if (state) {
    URL =
      "https://img.freepik.com/premium-vector/planet-space-starry-sky-moon-night-sky-sunset-evening-sky-stars_497922-1149.jpg";
  } else {
    URL =
      "https://img.freepik.com/premium-vector/background-with-orange-sky_1308-9764.jpg";
  }

  return (
    <>
      <img src={`${URL}`} className={classes.image} />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
