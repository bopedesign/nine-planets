import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import Home from './components/Home.jsx';
import WebsiteDesignDevelopment from './components/WebsiteDesignDevelopment.jsx';

const App = () => (
  <ErrorBoundary>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/website-design-development" element={<WebsiteDesignDevelopment />} />
      </Routes>
    </Router>
  </ErrorBoundary>
);

export default App;
