import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from '../routes/Landing';
import SparksHome from '../routes/Sparks/SparksHome';
import SparksLesson from '../routes/Sparks/SparksLesson';
import InnovatorsHome from '../routes/Innovators/InnovatorsHome';
import InnovatorsLesson from '../routes/Innovators/InnovatorsLesson';
import FutureHome from '../routes/Future/FutureHome';
import FutureLesson from '../routes/Future/FutureLesson';
import WikiIndex from '../routes/Wiki/WikiIndex';
import WikiYanshee from '../routes/Wiki/WikiYanshee';
import Playground from '../routes/Playground/Playground';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route path="/sparks" element={<div className="theme-sparks"><SparksHome /></div>} />
        <Route path="/sparks/lesson/1" element={<div className="theme-sparks"><SparksLesson /></div>} />

        <Route path="/innovators" element={<div className="theme-innovators"><InnovatorsHome /></div>} />
        <Route path="/innovators/lesson/1" element={<div className="theme-innovators"><InnovatorsLesson /></div>} />

        <Route path="/future-workforce" element={<div className="theme-future"><FutureHome /></div>} />
        <Route path="/future-workforce/lesson/1" element={<div className="theme-future"><FutureLesson /></div>} />

        <Route path="/wiki" element={<WikiIndex />} />
        <Route path="/wiki/yanshee" element={<WikiYanshee />} />

        <Route path="/playground" element={<Playground />} />
      </Routes>
    </BrowserRouter>
  );
}
