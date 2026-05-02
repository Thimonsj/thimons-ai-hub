import { Link } from 'react-router-dom';

export default function InnovatorsHome() {
  return (
    <div className="p-6">
      <h1 className="text-3xl mb-4">Innovators Portal</h1>
      <Link to="/innovators/lesson/1" className="underline">Sample Lesson</Link>
    </div>
  );
}
