import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './page/HomePage';
import ViewIndividual from './page/ViewIndividual';
import { Error404 } from './UI/404Error';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:mainname/:subname" element={<ViewIndividual />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
