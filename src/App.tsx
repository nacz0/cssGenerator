import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Boxshadow } from "./components/BoxShadow";
import { Root } from "./components/Root";
import { TextShadow } from "./components/TextShadow";
import { TextStroke } from "./components/TextStroke";
import { Gradient } from "./components/Gradient";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "text-shadow",
        element: <TextShadow />,
      },
      {
        path: "box-shadow",
        element: <Boxshadow />,
      },
      {
        path: "text-stroke",
        element: <TextStroke />,
      },
      {
        path: "gradient",
        element: <Gradient />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
