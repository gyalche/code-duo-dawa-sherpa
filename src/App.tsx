import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './page/HomePage';
import ViewIndividual from './page/ViewIndividual';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:mainname/:subname" element={<ViewIndividual />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
