import { Link } from 'react-router-dom';

export default function WikiIndex() {
  return (
    <div className="p-6">
      <h1 className="text-3xl mb-4">Hardware Wiki</h1>
      <Link to="/wiki/yanshee" className="underline">Yanshee</Link>
    </div>
  );
}
