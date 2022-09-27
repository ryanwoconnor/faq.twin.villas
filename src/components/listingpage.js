import { React, useState } from "react";
import "../App.css";
import BinderList from "./BinderList";
import { useLocation } from "react-router-dom";
function ListingPage(props) {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const location = useLocation();

  return (
    <div className="main">
      <h1>{props.heading}</h1>
      <h2>Virtual Binder</h2>
      <table>
        <tbody>
          <tr>
            <td>
              <h3 style={{ padding: "0px", magin: "0px" }}>
                Search Through Binder:
              </h3>{" "}
            </td>
            <td>
              {" "}
              <input
                type="text"
                onChange={inputHandler}
                label="Search"
                style={{
                  border: "1px solid #cccccc",
                  padding: "0px",
                  magin: "0px",
                }}
              />
            </td>
          </tr>
        </tbody>
      </table>

      <BinderList
        path={location.pathname}
        input={inputText}
        list={[
          {
            id: 1,
            text: "Information for our Listing in Stonington, CT found [at this link.](https://www.airbnb.com/h/rusticretreatct)",
            heading: "Entrance to the Listing",
            listings: ["/rusticretreatct"],
          },
          {
            id: 2,
            text: 'When you enter the driveway, please pull straight in and park in front of the Guest Parking sign that is visible straight ahead.\n\nWe currently can only accomodate **two cars** at this Airbnb at a time. This is for multiple reasons:\n- Unfortunately, due to prior guests throwing parties at our listing. \n- To limit "traffic" on the property and any cars potentially bumping into one another.\n\nIf you have more than 2 vehicles, you are welcome to park an additional vehicle about a 1.5 miles away at the following Commuter Lot:\n\n[15 Taugwonk Road, Stonington CT, 06378](https://www.google.com/search?q=15+Taugwonk+Road%2C+Stonington+CT%2C+06378&oq=15+Taugwonk+Road%2C+Stonington+CT%2C+06378&aqs=chrome..69i57j33i299j33i22i29i30.549j0j7&sourceid=chrome&ie=UTF-8#)',
            heading: "Parking",
            listings: ["/rusticretreatct"],
          },
          {
            id: 3,
            text: "Please do not arrive to the property until check-in time. We mean no disrespect to you, or your plans. \n- No cars are allowed to be left parked in the driveway, or on the street in front of the house either before check-in time, or after check out time.\n- You may not stay past your check out time to use the pool.\n- You may not arrive before your check-in time to use the pool.",
            heading: "Arriving Early to the Property",
            listings: ["/rusticretreatct"],
          },
          {
            id: 4,
            text: "Instructions on using Apple TV Remote:",
            heading: "Apple TV Remote",
            listings: ["/rusticretreatct"],
          },
          {
            id: 5,
            text: "There are 5 thermostats at this location. 3 are for **heat only**. 2 are for air conditioners. \n\n#### Heat\n\nThe thermostats shown below are for **HEAT** only. The apartment is equipped with electric heat. The thermostats are located in each bedroom, and one just outside the bathroom door. Photos of them are located here:\n\n![rr_therm1](assets/images/rr_therm1.jpeg)\n\n\n![rr_therm2](assets/images/rr_therm2.jpeg)\n\n![image info](assets/images/rr_therm3.jpeg)\n\n#### Air Conditioning\n\nWe have two air conditioners in the apartment. They are located in the bedroom and in the kitchen. These are not central air, they are referred to as mini splits. These units are **not** controlled by the thermostats on the walls. You need to utilize the remote control to control each of these. Remotes are labeled and images of them are below.\n\n##### Bedroom Air Conditioner Remote\n\n![image info](assets/images/bedroom_remote_1.jpeg)\n\n![image info](assets/images/bedroom_remote_2.jpeg)\n\n##### Kitchen Air Conditioner Remote\n\n![image info](assets/images/main_remote_1.jpeg)\n\n![image info](assets/images/main_remote_2.jpeg)",
            heading: "Thermostats",
            listings: ["/rusticretreatct"],
          },
          {
            id: 6,
            text: 'Trash and recycling bins are located on the side of the driveway. **Trash must be bagged**. This is in accordance with town rules. We cannot throw loose trash away at our local transfer station. \n\nIf you do not see the bins outside, it likely means they are inside the yellow shed. You are welcome to open the door and place any trash or recycling in the bins inside of the shed. \n\n🔴 Red Bin is for Trash\n\n🟢 Green Bin is for Recycling\n\n**Other notes:**\n\nNo trash should be brought to the premises when you arrive. \n\nPlease place all trash and recycling in the appropriate bin before you leave.\n\nAny guests who create excess trash will be charged accordingly for removal. If you\'re unclear on what "excess trash" means in relation to your visit, please feel free to ask. \n\n* As an example, you should not plan to throw a party and leave us with 12 bags of trash.',
            heading: "Trash and Recycling",
            listings: ["/rusticretreatct"],
          },
          {
            id: 7,
            text: "As a guest of this listing, you are welcome to use the pool. The pool is open for use between 8AM and 10PM. Please understand that is a shared space, and so you should be respectful of other guests who may also want to use the pool.\n\nWe leave the lights on around the pool area up until 10PM. We ask that you read and agree to the following rules.\n\n\n\n- No lifeguard on duty, swim at your own risk.\n\n- Shower before entering the pool.\n\n- No animals in pool or on pool deck.\n\n- No food, glassware, or alcoholic beverages allowed in pool or on pool deck.\n\n- No diving or running.\n\n- No boisterous or rough play.\n\n- Children under the age of 14 years old shall not use pool without a parent or adult guardian in attendance.\n\n- 8 persons allowed in the pool at one time.\n\n- For Emergency Assistance Dial 911.\n\n- No Parties. \n\n- No loud music. You may play music quietly - but no loud music from bluetooth speakers or other devices. \n\n- Pool Hours: 8AM through 10PM\n\n- No unregistered guests at the pool without permission from host. Any unregistered guests at the pool who have not been cleared with host will be asked to leave.",
            heading: "Pool Rules",
            listings: ["/rusticretreatct"],
          },
          {
            id: 8,
            text: "Local Recommendations Dinner Restaurants",
            heading: "Local Recommendations",
            listings: [
              "/beebebnb",
              "/rusticretreatct",
              "/carriagehousestonington",
            ],
          },
          {
            id: 9,
            text: "The outdoor fire table is available for use. We are including an instructional video here for those who may be wondering how to turn it on.  ",
            heading: "Fire Table",
            listings: ["/rusticretreatct"],
          },
          {
            id: 10,
            text: "The grill outside is available for use. Please also abide by the following rules: \n\n- The Grill is a shared ammenity. \n\n- Grill should be monitored and attended at all times. Do not leave grill unattended for any reason. For example: Do not attempt to cook ribs and leave the grill on for several hours and leave the house. \n\n- After use, please ensure the propane is **completely** shut off using the knobs, as well as on the tank itself.\n\n- Please ensure all utensils are removed from the grill, and brought back to the listing once you are done. This includes any forks, knives, spatulas, etc.\n\n- Do not leave any food on the grill after you're done using it. \n\n- Please cover the grill only once it has cooled down.",
            heading: "Grill",
            listings: [
              "/beebebnb",
              "/rusticretreatct",
              "/carriagehousestonington",
            ],
          },
          {
            id: 11,
            text: "#### Propane Guidelines\n\nWhen using the grill or the fire table, please ensure the propane is completely shut off when you are done. This means using the dial, as well as on the tank itself. We've unfortunately had many instances of folks leaving the dial on which is dangerous, and also costly as it will empty the entire tank. \n\nIf we you've turned on the propane at the tank, and on the dial and you're still unable to get the grill or fire table lit - please try to light it using a match or lighter. \n\nIf you're still unable to get it lit, there is a chance we are out of propane for some reason - however we always ensure the tanks are full. You can feel free to send us a message as we may have a spare. \n\nIf by chance I am not in the area, and you need propane, you can feel free to take the tank to one of several local locations to exchange the tank. It generally costs around $15-$20. Two locations that do tank exchanges nearby are the following: \n##### If You're Staying in Mystic:\n\n- [True Value Mystic](https://www.google.com/search?q=9+Hendel+Dr%2C+Mystic%2C+CT+06355&oq=9+Hendel+Dr%2C+Mystic%2C+CT+06355&aqs=chrome..69i57j33i160j33i299j33i22i29i30.143j0j7&sourceid=chrome&ie=UTF-8)\n##### If You're Staying in Stonington/Westerly: \n\n- [Mobil Station Westerly](https://www.google.com/search?q=87+W+Broad+St%2C+Pawcatuck%2C+CT+06379&biw=1300&bih=692&tbm=lcl&sxsrf=ALiCzsZavglFdUQTS50SqHrfWXtI-H9PEw%3A1654374455954&ei=N8CbYoLuOduhptQP5uKe2A0&oq=87+W+Broad+St%2C+Pawcatuck%2C+CT+06379&gs_l=psy-ab.3..38.33164.33164.0.33311.1.1.0.0.0.0.85.85.1.1.0....0...1c.2.64.psy-ab..0.1.85....0.gpEbLj9_vgA)\n\n- [Walgreens Westerly](https://www.google.com/search?q=170+Granite+St%2C+Westerly%2C+RI+02891&biw=1300&bih=692&tbm=lcl&sxsrf=ALiCzsZ1Hbv8TXTZnV24m10VIgt41e3rOQ%3A1654374556269&ei=nMCbYsPsD7yaptQP_Zq2yAU&oq=170+Granite+St%2C+Westerly%2C+RI+02891&gs_l=psy-ab.3..38.8163.9845.0.10096.2.2.0.0.0.0.200.337.0j1j1.2.0....0...1c.1j2.64.psy-ab..0.2.336...33i299k1j33i30i22i29k1.0.BRcqlyKVOsI)",
            heading: "Propane",
            listings: [
              "/beebebnb",
              "/rusticretreatct",
              "/carriagehousestonington",
            ],
          },
          {
            id: 12,
            text: "You're more than welcome to enjoy the property and have a good time, but we thank you in advance for keeping noise to a low volume.\n\nWe have a quiet space here and have had no noise complaints from any of the neighbors or guests - and we intend to keep it that way. \n\nIf you plan to play music, keep it at a low volume. There should be no bluetooth speakers being used in any outdoor spaces as not everyone may want to hear the same music as you do. ",
            heading: "Noise",
            listings: [
              "/beebebnb",
              "/rusticretreatct",
              "/carriagehousestonington",
            ],
          },
          {
            id: 13,
            text: "If you are planning to use the pool while you are here, please plan to bring your own towels from home. Please also bring them with you when you depart. ",
            heading: "Pool Towels",
            listings: ["/rusticretreatct", "/carriagehousestonington"],
          },
          {
            id: 14,
            text: "As a safety mechanism, we have several lights throughout the listing. These lights are constantly charged via the power outlet they are plugged into. In the event of a power outage they can be unplugged and will double as a flashlight. \n\n![nightlight](assets/images/nightlight3.JPG)\n\nWhen these are plugged in, the lights will only automatically turn on when it is dark. The light sensor is located as shown below. \n\n![nightlight2](assets/images/nightlight2.JPG)\n\nIf you would like to turn the light off, press the power button on the side of the light. \n\n![nightlight3](assets/images/nightlight1.JPG)\n\nNote that some guests may power safety lights off using the button, however they still will be charging and you can turn them back on during your stay.",
            heading: "Safety Lights",
            listings: ["/carriagehousestonington", "/rusticretreatct"],
          },
          {
            id: 15,
            text: "We thank you in advance for keeping our property free of smoking and vaping.\n\nSmoking and vaping is prohibited on **the entire** property - both inside and out. \n\n![no smoking](assets/images/nosmoking.jpg)",
            heading: "Smoking & Vaping",
            listings: [
              "/beebebnb",
              "/rusticretreatct",
              "/carriagehousestonington",
            ],
          },
          {
            id: 16,
            text: 'We understand that you may need to receive a shipment during your stay. You are more than welcome to ship small items to the house, but please keep in mind a couple of things:\n\n- Guest is responsible for picking up, or accepting, any packages. Host will not be expected to do this on guest\'s behalf. As such, no packages should be sent "C/O" or "Care Of" your host.\n\n- Host is not responsible for any missing packages. Guest will need to keep an eye out for packages being delivered to them, and work with carrier for any packages that do not arrive as expected. \n\n- Guest is responsible for any boxes that their packages are shipped in. Small boxes that are broken down, can be left inside the recycling bin. \n\n- Any medium or large size boxes need to be removed from the premises by the guest. Especially boxes that do not fit inside the recycling bin, or boxes that need to be "squeezed" to fit inside of the recycling bin. Leaving boxes out or packing the recycling bin full of boxes may result in a fee.',
            heading: "Packages & Deliveries",
            listings: [
              "/beebebnb",
              "/rusticretreatct",
              "/carriagehousestonington",
            ],
          },
          {
            id: 17,
            text: "For guests we provide:\n\n- One roll of toilet paper (per bathroom)\n\n- One roll of paper towels (per kitchen)\n\n- One trash bag (per kitchen)\n\nAs an example, for our properties that have two bathrooms, you'll find a roll of toilet paper in each. \n\nIf you're wondering why: we've unfortunately had guests throw parties in the past (against our policies) and leave 15-20 completely full bags of trash in and around the property. This has caused quite a disruption and so we've unfortunately decided to leave fewer disposables. As a result, these amenities we do leave are a \"what you see is what you get\". \n\nWe therefore do not provide additional paper towels, toilet paper, or trash bags. So please remember extra if you're staying for a period of time where you think you'll need additional. ",
            heading: "Toilet Paper, Paper Towels, and Trash Bags",
            listings: [
              "/beebebnb",
              "/rusticretreatct",
              "/carriagehousestonington",
            ],
          },
          {
            id: 18,
            text: "If you accidentally leave something behind at one of our listings, have no fear! If we find it, we will be happy to ship it back to you. We've shipped it all: phone chargers, smart watch chargers, bathing suits, coats, wallets, life preservers, someone's favorite undergarments, and many other things. \n\n##### Logistics for getting your items back:\n\n- You will need to provide us with the shipping name and address. \n\n- We will bring your item to [https://mysticmailbox.wixsite.com/mysticmailbox/about](Mystic Mailbox) along with your address and contact information. \n\n- Mystic Mailbox will contact you to collect payment information and ship your items out.\n\nPlease understand that this is a \"best effort\" service. Shipping items does require time out of our work day to collect your items and bring them to be shipped. So we do not have any guaranteed timeframe to get them back. ",
            heading: "Lost and Found",
            listings: [
              "/beebebnb",
              "/rusticretreatct",
              "/carriagehousestonington",
            ],
          },
          {
            id: 19,
            text: "We understand that each and every guest has their own preferences and needs, and so we do our best to consistently ensure we have everything guests could want in an Airbnb. \n\nThat being said, there will be gaps and ultimately times when a guests needs something - and we just don't have it. \n\nDuring those times, you are welcome to talk to us about your needs, and we will do our best to acquire what you need or work with you to ensure you are comfortable. However, if you go ahead and purchase something for our listing, we will not automatically reimburse you for that item. This could include anything from curtains to blenders, etc.\n\nWe appreciate the feedback and the desire to improve our listing, but we also reserve the right to make our own purchasing and decorating decisions.",
            heading: "Purchasing Items for the Airbnb",
            listings: [
              "/beebebnb",
              "/rusticretreatct",
              "/carriagehousestonington",
            ],
          },
          {
            id: 20,
            text: "We appreciate that everyone has their own artistic vision for our listings, but please talk to us before deciding to do any freelance interior decorating while staying at our listing. \n\nThis includes, but is not limited to:\n\n- Painting walls\n\n- Replacing curtains\n\n- Re-arranging furniture\n\n- Adding pictures, paintings, knick-knacks, etc.",
            heading: "Decorating",
            listings: [
              "/beebebnb",
              "/rusticretreatct",
              "/carriagehousestonington",
            ],
          },
          {
            id: 21,
            text: "#### Airbnb Reservation Cancellations\n\nAt this time, we are currently honoring [Airbnb's strict cancellation policy](https://www.airbnb.com/home/cancellation_policies#strict-with-grace-period) for all bookings placed through Airbnb. If there is an extenuating circumstance you believe should be covered, we ask that you please contact Airbnb support directly as they have their own [extenuating circumstances policy](https://www.airbnb.com/help/article/1320/extenuating-circumstances-policy) that is separate from the host cancellation policy, but it may protect you in some circumstances. \n\n#### All Other Reservation Cancellations\n\nFor cancellations related to all bookings placed outside of Airbnb, our cancellation policy is a strict non-refundable policy. \n\n#### Travel Insurance\n\nAs a general rule, we recommend you look into purchasing some form of travel insurance before your stay. This is not required, but it may help protect you when there are unforeseen circumstances that prevent you from traveling. It has helped me on a few trips I have taken over the years. ",
            heading: "Cancellation Policy",
            listings: [
              "/beebebnb",
              "/rusticretreatct",
              "/carriagehousestonington",
            ],
          },
          {
            id: 22,
            text: "If you have any questions regarding this page, or about the listing you are staying in, please contact us ASAP. We really strive to give guests a 5 ⭐️ experience and are looking forward to hosting you!",
            heading: "Support or Contact",
            listings: [
              "/beebebnb",
              "/rusticretreatct",
              "/carriagehousestonington",
            ],
          },
        ]}
      />
    </div>
  );
}

export default ListingPage;
