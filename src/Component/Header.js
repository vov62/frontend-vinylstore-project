import React, { useState } from "react";
import { Navbar, Container, Nav, Dropdown, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaTrash } from "react-icons/fa";
import { BsVinylFill } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { useGlobalContext } from "../context/Context";
import { Button } from "react-bootstrap";
import noImage from "../assets/no image.jpeg";
import VinylModal from "./VinylModal";

const Header = () => {
  const { cart, dispatch, singleVinyl, wishlist } = useGlobalContext();

  // modal
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="sm"
        variant="dark"
        // bg='dark'
        style={{
          backgroundColor: "#252525",
          // backgroundColor: '#000',

          color: "#fff",
          // opacity: 0.8
        }}
      >
        <Container fluid>
          <Navbar.Brand>
            <BsVinylFill
              style={{ marginRight: "10px", color: "transparent" }}
            />
            <Link to="/">Vinyl-Store</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>

              <Nav.Link as={Link} to="/search">
                Store
              </Nav.Link>
            </Nav>
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
                        fill: "#fff",
                        marginRight: "5px",
                        fontSize: "18px",
                      }}
                    />
                  )}
                </span>
                Wishlist
              </Nav.Link>

              <Dropdown align="end">
                <Dropdown.Toggle variant="dark">
                  <FaShoppingCart fontSize="20px" />
                  <Badge bg="transparent">
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
                                : noImage
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
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {modalShow === true ? (
        <VinylModal show={modalShow} onHide={() => setModalShow(false)} />
      ) : null}
    </>
  );
};

export default Header;
