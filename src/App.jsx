
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import './assets/css/animate.min.css';
import './assets/css/flaticon.min.css';
import './assets/css/fontawesome-5.14.0.min.css';
import './assets/css/nice-select.min.css';
import './assets/css/slick.min.css';
// import './assets/css/style.css';
import '../src/pages/globals.css';

function App() {
    return (
        <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/:user" element={<Home />} /> */}
        </Routes>
    </Router>
    );
}

export default App;