import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <nav>
        <ul>
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
    </div>
  );
}

export default App;
