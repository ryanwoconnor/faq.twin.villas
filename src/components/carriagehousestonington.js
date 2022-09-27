import { React, useState } from "react";
import "../App.css";
import FAQList from "./FAQList";

function CarriageHouse() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <div className="main">
      <h1>Carriage House Apartment</h1>
      <input
        type="text"
        onChange={inputHandler}
        label="Search"
        style={{ border: "1px solid #cccccc" }}
      />
      <FAQList
        input={inputText}
        list={[
          {
            id: 1,
            text: "Devpulse",
          },
          {
            id: 2,
            text: "Linklinks",
          },
          {
            id: 3,
            text: "Centizu",
          },
          {
            id: 4,
            text: "Dynabox",
          },
          {
            id: 5,
            text: "Avaveo",
          },
          {
            id: 6,
            text: "Demivee",
          },
          {
            id: 7,
            text: "Jayo",
          },
          {
            id: 8,
            text: "Blognation",
          },
          {
            id: 9,
            text: "Podcat",
          },
          {
            id: 10,
            text: "Layo",
          },
        ]}
      />
    </div>
  );
}

export default CarriageHouse;
