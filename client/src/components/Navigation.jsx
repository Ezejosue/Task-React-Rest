import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <nav className="bg-gray-800 text-white flex justify-between items-center p-4">
      <div className="font-bold text-xl">
        <Link to="/" className="hover:text-gray-300">MyApp</Link>
      </div>
      <ul className="flex space-x-4">
        <li className="hover:bg-gray-700 p-2 rounded">
          <Link to="/tasks" className="hover:text-gray-300">Tasks</Link>
        </li>
        <li className="hover:bg-gray-700 p-2 rounded">
          <Link to="/task-create" className="hover:text-gray-300">Create Task</Link>
        </li>
      </ul>
    </nav>
  );
}