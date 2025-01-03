import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-coffee-dark via-coffee to-coffee-light">
      <header className="bg-coffee-dark shadow-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-extrabold text-white">
              Rakanda Coffee
            </Link>

            <nav className="space-x-4">
              <Link
                to="/about"
                className="text-gray-300 hover:text-coffee-light"
              >
                About Us
              </Link>
              <Link to="/events" className="text-coffee-light hover:underline">
                Events
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-grow container mx-auto">
        <Outlet />
      </main>

      <footer className="bg-coffee-dark">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Rakanda Coffee. Brewing Memories.
          </p>
        </div>
      </footer>
    </div>
  );
};
export default Layout;
