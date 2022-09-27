import { React } from "react";
import ReactMarkdown from "react-markdown";

function FAQList(props) {
  //create a new array by filtering the original array
  const filteredData = props.list.filter((el) => {
    //if no input the return the original
    if (props.input === "") {
      return el;
    }
    //return the item which contains the user input
    else {
      return el.text.toLowerCase().includes(props.input);
    }
  });
  return (
    <>
      {" "}
      {filteredData.map((item) => (
        <>
          <h2>{item.heading}</h2>
          <span style={{ size: "10px" }}>
            <ReactMarkdown>{item.text}</ReactMarkdown>
          </span>
        </>
      ))}
    </>
  );
}

export default FAQList;
