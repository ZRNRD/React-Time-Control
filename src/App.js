import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { TimeControl } from './components/TimeControl/TimeControl.tsx';

function App() {
  return (
    <BrowserRouter>
      <TimeControl />
    </BrowserRouter>
  );
}

export default App;
