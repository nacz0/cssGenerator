import { Link, Outlet } from "react-router-dom";

export function Root() {
  return (
    <main className="w-screen h-screen flex flex-col bg-slate-200 overflow-hidden">
      <nav className="sticky top-0 h-24 bg-slate-400 w-full flex flex-row p-4 items-center gap-4 ">
        <Link to="/text-shadow" className="text-3xl font-bold">
          Text Shadow
        </Link>
        <Link to="/box-shadow" className="text-3xl font-bold">
          Box Shadow
        </Link>
        <Link to="/text-stroke" className="text-3xl font-bold">
          Text Stroke
        </Link>
        <Link to="/gradient" className="text-3xl font-bold">
          Gradient
        </Link>
      </nav>
      <Outlet />
    </main>
  );
}
