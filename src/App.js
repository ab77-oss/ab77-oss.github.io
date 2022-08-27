import Submit from "./components/Submit";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './sass/index.css';
import Rating from "./components/Rating";

  
function App() {

  return (
    <div className="App">
     
     <Router>
     <Submit />
        <Routes>
          <Route path="/rating/:_id" element={<Rating />} /> 
          <Route path="/" element={<Submit />} />
        </Routes>
        <Footer />
    </Router>
    </div>
  );
}

export default App;
