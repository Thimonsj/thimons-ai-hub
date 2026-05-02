import { Link } from 'react-router-dom';

export default function SparksHome() {
  return (
    <div className="p-6">
      <h1 className="text-3xl mb-4">Sparks Portal</h1>
      <Link to="/sparks/lesson/1" className="underline">Sample Lesson</Link>
    </div>
  );
}
