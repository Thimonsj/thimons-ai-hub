import LessonLayout from '../../src/components/LessonLayout';
import lesson from '../../src/content/futureLesson1';

export default function FutureLesson() {
  return <LessonLayout title="Humanoid Motion Control" lesson={lesson} />;
}
