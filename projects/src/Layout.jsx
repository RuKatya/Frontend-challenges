import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>
        Created by{" "}
        <a href="https://www.linkedin.com/in/katya-rukosuev/">Katya Ru</a>
      </footer>
    </div>
  );
};

export default Layout;
