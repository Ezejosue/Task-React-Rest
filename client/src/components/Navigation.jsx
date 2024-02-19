import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/tasks">Tasks</Link>
        </li>
        <li>
          <Link to="/task-create">Create Task</Link>
        </li>
      </ul>
    </nav>
  );
}