import React from "react";

const About = () => {
  return (
    <div style={{ fontSize: "1.1rem", width: "60vw", margin: "0 auto" }}>
      <h3>About Us</h3>

      <div style={{ display: "flex", marginTop: "3rem" }}>
        <img
          src={require("../../assets/imges/pexels-alena-chuyankova-13019088.jpg")}
          style={{ width: "300px" }}
          alt="makeup"
        />{" "}
        <div>
          <p
            style={{
              textAlign: "start",
              marginLeft: "2rem",
              marginTop: "1rem",
            }}
          >
            Makeup Store is a retailer of well-known Beauty Products with
            thousands of products from top beauty brands. With our sensational
            offers, Makeup Store will be your number one makeup shop.
          </p>

          <p
            style={{
              fontFamily: "italiana",
              fontStyle: "italic",
              fontSize: "1.2rem",
              marginTop: "3rem",
              color: "#6DAD9F",
            }}
          >
            Our commitment to our customers' beauty begins with ensuring we have
            the best selection of the products people love from the brands they
            trust.
          </p>
        </div>
      </div>

      <div style={{ display: "flex", marginTop: "2rem" }}>
        <div>
          <p
            style={{ textAlign: "end", marginRight: "1rem", marginTop: "3rem" }}
          >
            We are always discovering new brands and products to help everyone
            define their own version of beauty. We are always discovering new
            brands and products to help everyone define their own version of
            beauty.
          </p>{" "}
          <p
            style={{
              fontFamily: "italiana",
              fontStyle: "italic",
              fontSize: "1.2rem",
              marginTop: "3rem",
              color: "#ffbca5",
            }}
          >
            Our experts are passionate about combining classic brands with
            inspiring new lines, so we can constantly provide more vision and
            innovation for our customers.
          </p>
        </div>
        <img
          src={require("../../assets/imges/pexels-valeria-boltneva-90297.jpg")}
          style={{ width: "270px" }}
          alt="makeup"
        />
      </div>

      <h4
        style={{
          display: "inline-block",
          marginTop: "3rem",
          fontWeight: "200",
          borderBottom: "1px solid #333",
          fontStyle: "italic",
        }}
      >
        Product selection
      </h4>

      <div style={{ display: "flex", marginTop: "3rem" }}>
        <img
          src={require("../../assets/imges/img4.jpg")}
          style={{ width: "400px" }}
          alt="makeup"
        />
        <div>
          <p
            style={{
              textAlign: "start",
              marginLeft: "1rem",
              marginTop: "1rem",
            }}
          >
            At Makeup Store we offer the latest, most innovative and unique
            beauty selection.
          </p>
          <p  style={{
              fontFamily: "italiana",
              fontStyle: "italic",
              fontSize: "1.1rem",
              marginTop: "2rem",
              color: "#6DAD9F",
            }}>
            We love to discover the best brands and products across the world,
            so we can offer our customers the most efficient formulas, inclusive
            ranges, and environmentally responsible selections.
          </p>
        </div>
      </div>

      <div style={{ display: "flex", marginTop:"3rem" }}>
        <p style={{display:"flex", alignItems:"center", textAlign:"end", marginRight:"1rem"}}>
        At Makeup Store we are a youthful, unique group, excellence eager and as differing as our items.
        </p>
        <img
          src={require("../../assets/imges/pexels-marcelo-moreira-1926620.jpg")}
          style={{ width: "300px" }}
          alt="makeup"
        />
      </div>

      <p></p>
    </div>
  );
};

export default About;
