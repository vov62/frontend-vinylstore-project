import React, { useEffect, useState, useRef } from "react";
import { Navbar, Container, Nav, Dropdown, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaTrash } from "react-icons/fa";
import { BsHeart } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { useGlobalContext } from "../../context/Context";
import { Button } from "react-bootstrap";
// import noImage from "../assets/no image.jpeg";
import VinylModal from "../VinylModal";
import img from "../../assets/second vinyl.json";
import Lottie from "lottie-react";
import "./header2.css";

const Header2 = () => {
  // context
  const { cart, dispatch, wishlist } = useGlobalContext();
  const menuRef = useRef();

  // mobile menu
  const [mobileMenu, setMobileMenu] = useState(false);
  // navbar background scroll
  // const [navbarBackground, setNavbarBackground] = useState(false);

  // modal
  const [modalShow, setModalShow] = useState(false);

  // change navbar color on scroll
  // const changeBackground = () => {
  //   if (window.scrollY >= 300) {
  //     setNavbarBackground(true);
  //   } else {
  //     setNavbarBackground(false);
  //   }
  // };
  // window.addEventListener("scroll", changeBackground);

  // close menu when click outside the menu
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setMobileMenu(false);
      }
    };
    document.body.addEventListener("mousedown", handler);

    return () => document.body.removeEventListener("mousedown", handler);
  }, []);

  return (
    <>
      <div className="main-navbar">
        <div className="sub-main-navbar">
          <div className="hamburger-icon">
            <GiHamburgerMenu
              size={25}
              onClick={() => setMobileMenu((prev) => !prev)}
            />
          </div>
          <div className="left-navbar">
            <Lottie animationData={img} />
            <Link to="/">
              <h1>Vov-Records</h1>
            </Link>
          </div>

          <div className="right-navbar">
            <Nav>
              <Nav.Link onClick={() => setModalShow(true)}>
                <span>
                  {wishlist.length > 0 ? (
                    <BsHeart
                      style={{
                        fill: "red",
                        marginRight: "5px",
                        fontSize: "18px",
                      }}
                    />
                  ) : (
                    <BsHeart
                      style={{
                        fill: "#000",
                        marginRight: "5px",
                        fontSize: "18px",
                      }}
                    />
                  )}
                </span>
                <span className="wishlist-Title">Wishlist</span>
              </Nav.Link>

              {/* Cart section */}
              <Dropdown align="end">
                <Dropdown.Toggle
                  style={{
                    color: "#000",
                    backgroundColor: "unset",
                    border: "inherit",
                  }}
                >
                  <FaShoppingCart fontSize="20px" />
                  <Badge
                    bg="inherit"
                    style={{
                      color: "#000",
                      // backgroundColor: "#dc3545",
                      fontSize: "12px",
                    }}
                  >
                    {cart.length ? cart.length : null}
                  </Badge>
                </Dropdown.Toggle>

                <Dropdown.Menu style={{ minWidth: 400 }}>
                  {cart.length > 0 ? (
                    <>
                      {cart.map((item) => (
                        <span key={item.id} className="cartItem">
                          <img
                            src={
                              item.images
                                ? item.images[0].resource_url
                                : "no image"
                            }
                            alt=""
                            className="cartItemImg"
                          />

                          <div className="cartItemDetail">
                            <span>{item.title}</span>
                            <span>
                              &euro;
                              {item.lowest_price.toString().split(".")[0]}
                            </span>
                          </div>

                          <FaTrash
                            fontSize="20"
                            style={{ cursor: "pointer" }}
                            onClick={() =>
                              dispatch({
                                type: "REMOVE_FROM_CART",
                                payload: item,
                              })
                            }
                          />
                        </span>
                      ))}
                      <Link to="/cart">
                        <Button
                          variant="success"
                          style={{ width: "95%", margin: "0 10px" }}
                        >
                          Go To Cart
                        </Button>
                      </Link>
                    </>
                  ) : (
                    <span style={{ padding: 10 }}>Cart is Empty!</span>
                  )}
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </div>
        </div>

        <div ref={menuRef} className="links-container">
          <ul className={`links-ul ${mobileMenu ? "show" : ""}`}>
            <div className="mobile-menu-close-btn">
              <GrClose size={25} onClick={() => setMobileMenu(false)} />
            </div>

            <li className="link-item">
              <Link to="/">Home</Link>
            </li>
            <li className="link-item">
              <Link to="/SearchVinyl">Store</Link>
            </li>
            <li className="link-item">
              <Link to="/about-us">About us</Link>
            </li>
            <li className="link-item">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Modal section */}
      {modalShow === true ? (
        <VinylModal show={modalShow} onHide={() => setModalShow(false)} />
      ) : null}
    </>
  );
};

export default Header2;
