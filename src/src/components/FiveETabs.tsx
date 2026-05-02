import { useState } from 'react';

export default function FiveETabs({ phases }) {
  const [i, setI] = useState(0);

  const labels = ['Engage', 'Explore', 'Explain', 'Elaborate', 'Evaluate'];

  return (
    <div>
      <div className="flex gap-3 mb-4">
        {labels.map((label, idx) => (
          <button
            key={label}
            onClick={() => setI(idx)}
            className={`px-4 py-2 rounded 
              ${idx === i ? 'bg-[var(--accent-1)] text-white' : 'bg-gray-200'}
            `}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="border rounded p-4">
        {phases[i]}
      </div>
    </div>
  );
}
