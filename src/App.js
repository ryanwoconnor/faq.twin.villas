import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import './App.css';
import BeebeBnb from './components/beebebnb';

function App() {
  return (

    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      {/* 👇️ Wrap your Route components in a Routes component */}
      
    </div>
  );
}

export default App;
