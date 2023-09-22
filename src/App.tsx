import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { TextShadow } from "./components/TextShadow";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TextShadow />,
  },
]);
function App() {
  return (
    <main className="w-screen h-screen flex flex-col bg-slate-200">
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
