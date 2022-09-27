import { React } from "react";
import ReactMarkdown from "react-markdown";
import { Helmet } from "react-helmet";

function FAQList(props) {
  window.wanderlogEmbedKeys = ["stllhdmygz"];
  window.wanderlogEmbedOptions = {
    alwaysShowRouteLines: true,
    omitExternalLinks: false,
    omitWebsitePhone: false,
    version: 2,
  };

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

  const exceptions = ["Local Recommendations", "Apple TV Remote", "Fire Table"];
  return (
    <>
      {filteredData.map((item) => (
        <>
          {item.heading === "Apple TV Remote" ? (
            <>
              <h2>Apple TV Remote</h2>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/OdXFLYC8J4o"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </>
          ) : (
            <></>
          )}{" "}
          {item.heading === "Local Recommendations" ? (
            <>
              <h2 id="localrecommendations">Local Recommendations</h2>
              <p>
                Below is a map featuring a number of local recommendations.{" "}
              </p>{" "}
              <div
                id="Wanderlog__mapEmbed_stllhdmygz"
                style={{ display: "block", width: "100%" }}
              ></div>
              <Helmet>
                <script src="https://wanderlog.com/embed.js" async></script>
              </Helmet>
              <p>
                On this map We have included everything from Pizza Places to
                Grocery Stores to Museums. Please feel free to visit the{" "}
                <a href="https://wanderlog.com/view/stllhdmygz/mystic-guide/shared">
                  following link
                </a>{" "}
                to see a more detailed list where you can filter the map and use
                other advanced features.
              </p>
            </>
          ) : (
            <></>
          )}{" "}
          {item.heading === "Fire Table" ? (
            <>
              <h3 id="firetable">Fire Table</h3>

              <p>
                The outdoor fire table is available for use. We are including an
                instructional video here for those who may be wondering how to
                turn it on.{" "}
              </p>

              <h4>Fire Table Starting Instructions</h4>

              <iframe
                style={{ height: "100%", border: "none" }}
                src="https://www.youtube.com/embed/Sw6Qyfz_p2M"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </>
          ) : (
            <></>
          )}{" "}
          {exceptions.includes(item.heading) ? (
            <></>
          ) : (
            <>
              <h2>{item.heading}</h2>
              <span style={{ size: "10px" }}>
                <ReactMarkdown>{item.text}</ReactMarkdown>
              </span>
            </>
          )}
        </>
      ))}
    </>
  );
}

export default FAQList;
