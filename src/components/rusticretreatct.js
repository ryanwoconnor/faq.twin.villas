import { React, useState } from "react";
import "../App.css";
import FAQList from "./FAQList";

function RusticRetreat() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <div className="main">
      <h1>Rustic Retreat</h1>
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
            text: "Information for our Listing in Stonington, CT found [at this link.](https://www.airbnb.com/h/rusticretreatct)",
            heading: "Entrance to the Listing",
          },
          {
            id: 2,
            text: 'When you enter the driveway, please pull straight in and park in front of the Guest Parking sign that is visible straight ahead.\n\nWe currently can only accomodate **two cars** at this Airbnb at a time. This is for multiple reasons:\n- Unfortunately, due to prior guests throwing parties at our listing. \n- To limit "traffic" on the property and any cars potentially bumping into one another.\n\nIf you have more than 2 vehicles, you are welcome to park an additional vehicle about a 1.5 miles away at the following Commuter Lot:\n\n[15 Taugwonk Road, Stonington CT, 06378](https://www.google.com/search?q=15+Taugwonk+Road%2C+Stonington+CT%2C+06378&oq=15+Taugwonk+Road%2C+Stonington+CT%2C+06378&aqs=chrome..69i57j33i299j33i22i29i30.549j0j7&sourceid=chrome&ie=UTF-8#)',
            heading: "Parking",
          },
          {
            id: 3,
            text: "Please do not arrive to the property until check-in time. We mean no disrespect to you, or your plans. \n- No cars are allowed to be left parked in the driveway, or on the street in front of the house either before check-in time, or after check out time.\n- You may not stay past your check out time to use the pool.\n- You may not arrive before your check-in time to use the pool.",
            heading: "Arriving Early to the Property",
          },
          {
            id: 4,
            text: "Dynabox",
            heading: "Apple TV Remote",
          },
          {
            id: 5,
            text: "Avaveo",
            heading: "Thermostats",
          },
          {
            id: 6,
            text: "Demivee",
            heading: "Trash and Recycling",
          },
          {
            id: 7,
            text: "Jayo",
            heading: "Pool Rules",
          },
          {
            id: 8,
            text: "Blognation",
            heading: "Local Recommendations",
          },
          {
            id: 9,
            text: "Podcat",
            heading: "Fire Table",
          },
          {
            id: 10,
            text: "Layo",
            heading: "Grill",
          },
          {
            id: 11,
            text: "Blognation",
            heading: "Propane",
          },
          {
            id: 12,
            text: "Podcat",
            heading: "Noise",
          },
          {
            id: 13,
            text: "Layo",
            heading: "Pool Towels",
          },
          {
            id: 14,
            text: "Layo",
            heading: "Safety Lights",
          },
          {
            id: 15,
            text: "Blognation",
            heading: "Smoking & Vaping",
          },
          {
            id: 16,
            text: "Podcat",
            heading: "Packages & Deliveries",
          },
          {
            id: 17,
            text: "Layo",
            heading: "Toilet Paper, Paper Towels, and Trash Bags",
          },
          {
            id: 18,
            text: "Blognation",
            heading: "Lost and Found",
          },
          {
            id: 19,
            text: "Podcat",
            heading: "Purchasing Items for the Airbnb",
          },
          {
            id: 20,
            text: "Layo",
            heading: "Decorating",
          },
          {
            id: 21,
            text: "Layo",
            heading: "Cancellation Policy",
          },
          {
            id: 22,
            text: "Blognation",
            heading: "Support or Contact",
          },
        ]}
      />
    </div>
  );
}

export default RusticRetreat;
