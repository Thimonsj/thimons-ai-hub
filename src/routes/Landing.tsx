import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className="p-10 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Thimons AI & Robotics Learning Hub</h1>

      <p className="mb-6">
        Choose your learning portal.
      </p>

      <div className="flex flex-col gap-4">
        <Link className="p-4 bg-sparks-coral text-white rounded" to="/sparks">Sparks (7–10)</Link>
        <Link className="p-4 bg-innovators-blue text-white rounded" to="/innovators">Innovators (11–15)</Link>
        <Link className="p-4 bg-future-cyan text-black rounded" to="/future-workforce">Future Workforce (16–25+)</Link>
      </div>
    </div>
  );
}
