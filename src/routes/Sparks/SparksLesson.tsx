import LessonLayout from '../../src/components/LessonLayout';
import lesson from '../../src/content/sparksLesson1';

export default function SparksLesson() {
  return <LessonLayout title="Build & Move Your First Robot Arm" lesson={lesson} />;
}
