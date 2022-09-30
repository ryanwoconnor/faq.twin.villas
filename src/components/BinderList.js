import { React } from "react";
import ReactMarkdown from "react-markdown";
import { Helmet } from "react-helmet";

function BinderList(props) {
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

  //create a new array by filtering the original array
  const filteredFAQ = props.faqlist.filter((el) => {
    //if no input the return the original
    if (props.input === "") {
      return el;
    }
    //return the item which contains the user input
    else {
      return el.text.toLowerCase().includes(props.input);
    }
  });
  const exceptions = [
    "Local Recommendations",
    "Apple TV Remote",
    "Fire Table",
    "Closing the Back Door",
  ];
  return (
    <>
      {filteredData.map((item) => (
        <>
          {item.listings.includes(props.path) ? (
            <>
              {item.heading === "Apple TV Remote" ? (
                <>
                  <h2 style={{ margin: "0px", padding: "0px" }}>
                    Apple TV Remote
                  </h2>
                  <iframe
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
                  <h2
                    style={{ margin: "0px", padding: "0px" }}
                    id="localrecommendations"
                  >
                    Local Recommendations
                  </h2>
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
                    to see a more detailed list where you can filter the map and
                    use other advanced features.
                  </p>
                </>
              ) : (
                <></>
              )}{" "}
              {item.heading === "Fire Table" ? (
                <>
                  <h3 id="firetable">Fire Table</h3>

                  <p>
                    The outdoor fire table is available for use. We are
                    including an instructional video here for those who may be
                    wondering how to turn it on.{" "}
                  </p>

                  <h4>Fire Table Starting Instructions</h4>

                  <iframe
                    style={{ height: "100%", border: "none" }}
                    src="https://www.youtube.com/embed/Sw6Qyfz_p2M"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </>
              ) : (
                <></>
              )}{" "}
              {item.heading === "Closing the Back Door" ? (
                <>
                  {" "}
                  <h2 style={{ margin: "0px", padding: "0px" }}>
                    {item.heading}
                  </h2>
                  <span style={{ size: "10px" }}>
                    <ReactMarkdown
                      components={{
                        img: ({ node, ...props }) => (
                          <div style={{ width: "100%", textAlign: "center" }}>
                            <img
                              style={{
                                maxWidth: "20%",
                              }}
                              {...props}
                            />
                          </div>
                        ),
                      }}
                    >
                      {item.text}
                    </ReactMarkdown>
                  </span>
                  <iframe
                    src="https://www.youtube.com/embed/H6mOuvIzpKE"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </>
              ) : (
                <></>
              )}
              {exceptions.includes(item.heading) ? (
                <></>
              ) : (
                <>
                  <h2 style={{ margin: "0px", padding: "0px" }}>
                    {item.heading}
                  </h2>
                  <span style={{ size: "10px" }}>
                    <ReactMarkdown
                      components={{
                        img: ({ node, ...props }) => (
                          <div style={{ width: "100%", textAlign: "center" }}>
                            <img
                              style={{
                                maxWidth: "30%",
                              }}
                              {...props}
                            />
                          </div>
                        ),
                      }}
                    >
                      {item.text}
                    </ReactMarkdown>
                  </span>
                </>
              )}
            </>
          ) : (
            <></>
          )}
        </>
      ))}
      {filteredFAQ.length > 0 ? <h1>FAQ</h1> : <></>}

      {filteredFAQ.map((item) => (
        <>
          {item.listings.includes(props.path) ? (
            <>
              <h2>{item.text}</h2>
              <ReactMarkdown
                components={{
                  img: ({ node, ...props }) => (
                    <div style={{ width: "100%", textAlign: "center" }}>
                      <img
                        style={{
                          maxWidth: "30%",
                        }}
                        {...props}
                      />
                    </div>
                  ),
                }}
              >
                {item.answer}
              </ReactMarkdown>
            </>
          ) : (
            <></>
          )}
        </>
      ))}
    </>
  );
}

export default BinderList;
