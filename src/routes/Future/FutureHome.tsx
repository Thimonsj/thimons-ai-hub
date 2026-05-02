import { Link } from 'react-router-dom';

export default function FutureHome() {
  return (
    <div className="p-6">
      <h1 className="text-3xl mb-4">Future Workforce Portal</h1>
      <Link to="/future-workforce/lesson/1" className="underline">Sample Lesson</Link>
    </div>
  );
}
