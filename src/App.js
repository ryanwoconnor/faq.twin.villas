import { Link } from "react-router-dom";
import "./App.css";

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
          <li>
            <Link to="/rusticretreatct">Rustic Retreat</Link>
          </li>
          <li>
            <Link to="/carriagehousestonington">Carriage House Apartment</Link>
          </li>
          <li>
            <Link to="/beebebnb">Beebe Cove Bnb</Link>
          </li>
        </ul>
      </nav>

      {/* 👇️ Wrap your Route components in a Routes component */}
    </div>
  );
}

export default App;
