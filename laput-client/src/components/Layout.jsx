import { Outlet } from "react-router-dom";
import NavBar from "./navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-900 flex flex-col">
      <NavBar />
      <main className="pt-9 flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
