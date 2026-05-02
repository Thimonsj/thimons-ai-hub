import FiveETabs from './FiveETabs';

export default function LessonLayout({ title, lesson }) {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <FiveETabs phases={lesson} />
    </div>
  );
}
