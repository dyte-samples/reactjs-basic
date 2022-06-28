import './App.css';
import { Routes, Route } from 'react-router'
import Welcome from './Components/Welcome'
import Meeting from './Components/Meeting'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/meeting" element={<Meeting />} />
    </Routes>
  );
}

export default App;
