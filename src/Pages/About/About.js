import React from "react";
import { FaSearch, FaTruck, FaRegThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h2>About</h2>
      <div className="about-store-section">
        <h3>Vov Vinyl Records</h3>

        <p>
          Vov Vinyl Records is {/* <br /> */}
          Online record store, we are specialized in the distribution of reggae
          vinyl records since 2000. {/* <br /> */}
          In our catalogue you will find the latest news and re-releases as well
          as original collectors' records and pressings.
          <br /> Our selection, although more oriented towards the productions
          of the 60s, 70s and 80s, extends to all "styles". Mento, Rocksteady,
          Ska, Reggae, Roots, Dub, Rub A Dub, Early Digital, Digital,
          Dancehall...
        </p>

        <span>
          All formats are represented: Albums LP, Singles 7", Singles 10",
          Singles 12"
        </span>
      </div>

      <div className="events-container">
        <h3>Store events</h3>
        <div className="store-events">
          <div className="events-card">
            <div className="events-card-top">
              <FaSearch size={60} />
            </div>
            <div className="events-card-body">
              <h4>Our Products</h4>
              <p>
                Our products are supplied with star rating that should help
                hesitant buyers to take a decision. What’s more, you can search
                our site if you know exactly what you are looking for or use a
                bunch of different filters that will considerably save your time
                and efforts.
              </p>
            </div>
          </div>

          <div className="events-card">
            <div className="events-card-top">
              <FaTruck size={60} />
            </div>
            <div className="events-card-body">
              <h4>Delivery to all regions</h4>
              <p>
                We deliver our goods worldwide. No matter where you live, your
                order will be shipped in time and delivered right to your door
                or to any other location you have stated. The packages are
                handled with utmost care, so the ordered products will be handed
                to you safe and sound, just like you expect them to be.
              </p>
            </div>
          </div>

          <div className="events-card">
            <div className="events-card-top">
              <FaRegThumbsUp size={60} />
            </div>
            <div className="events-card-body">
              <h4>Highest quality of products</h4>
              <p>
                We guarantee the highest quality of the products we sell.
                Several decades of successful operation and millions of happy
                customers let us feel certain about that. Besides, all items we
                sell pass thorough quality control, so no characteristics
                mismatch can escape the eye of our professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-section-footer">
        <h6>
          Have a Question? Drop us a line
          <span>
            <Link to="/contact"> here </Link>
          </span>
        </h6>
      </div>
    </div>
  );
};

export default About;
