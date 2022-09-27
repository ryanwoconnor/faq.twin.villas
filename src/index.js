import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import ListingPage from "./components/listingpage";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route
        path="/beebebnb"
        element={<ListingPage heading="Beebe Cove Bnb" />}
      ></Route>
      <Route
        path="/rusticretreatct"
        element={<ListingPage heading="Rustic Retreat" />}
      ></Route>
      <Route
        path="/carriagehousestonington"
        element={<ListingPage heading="Carriage House Apartment" />}
      ></Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
