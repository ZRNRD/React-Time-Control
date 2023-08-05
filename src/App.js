import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Menu } from './components/Menu/Menu.tsx';
import { Timer } from './components/Timer/Timer.tsx';
import { Stopwatch } from './components/Stopwatch/Stopwatch.tsx';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route exact path="/" element={ <Navigate to="/timer" /> }/>
        <Route path="/timer" element={<Timer />} />
        <Route path="/stopwatch" element={<Stopwatch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
