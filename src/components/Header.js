import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">Task Manager</h1>
        <nav>
          <Link to="/dashboard" className="mr-4">Dashboard</Link>
          <Link to="/login">Logout</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
