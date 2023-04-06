import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Daily from './components/daily';
import Longterm from './components/longterm';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
    <div className="vh-100 d-flex flex-column">
      <div class="container h-100 pt-3">
        <ul class="nav nav-tabs nav-fill"id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <Link to="/daily" style={{ textDecoration: 'none'}}>
              <button class="nav-link active" id="daily-tab" data-bs-toggle="tab" data-bs-target="#daily" type="button" role="tab" aria-controls="daily" aria-selected="true" style={{color:"#495057"}}>Daily</button>
            </Link>
          </li>
          <li class="nav-item" role="presentation">
            <Link to="/longterm" style={{ textDecoration: 'none' }}>
              <button class="nav-link" id="longterm-tab" data-bs-toggle="tab" data-bs-target="#longterm" type="button" role="tab" aria-controls="longterm" aria-selected="false" style={{color:"#495057"}}>Long term</button>
            </Link>
          </li>
        </ul>
        <div class="container border-start border-end h-100" >
          <Routes>
            <Route path="/" element={<Daily/>} />
            <Route path="/daily"element={<Daily/>}/>
            <Route path="/longterm" element={<Longterm/>} />
          </Routes>
        </div>
      </div>
     </div>
  </BrowserRouter>
  );
}

export default App;
