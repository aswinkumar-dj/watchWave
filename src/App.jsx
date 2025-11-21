import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Body from "./components/body/Body";
import Header from "./components/header/Header";
import MainContainer from "./components/maincontainer/MainContainer";
import WatchPage from "./components/watchpage/WatchPage";
import SearchContainer from "./components/maincontainer/SearchContainer";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
      {
        path: "/search",
        element: <SearchContainer />,
      },
    ],
  },
]);
function App() {
  return (
    <div>
      <Header />
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
