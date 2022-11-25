import React from "react";
import { Navbar, Container, Nav, Dropdown, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaTrash } from "react-icons/fa";
import { BsVinylFill } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { useGlobalContext } from "../context/Context";
import { Button } from "react-bootstrap";

const Header = () => {
  const { cart, dispatch, singleVinyl } = useGlobalContext();

  return (
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
          <BsVinylFill style={{ marginRight: "10px", color: "transparent" }} />
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
            <Nav.Link as={Link} to="/wishlist">
              <span>
                <BsHeart
                  style={{
                    fill: "#fff",
                    marginRight: "5px",
                    fontSize: "16px",
                  }}
                />
              </span>
              Wishlist
            </Nav.Link>
            <Dropdown align="end">
              <Dropdown.Toggle variant="dark">
                <FaShoppingCart fontSize="20px" />
                <Badge bg="transparent">{cart.length}</Badge>
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ minWidth: 400 }}>
                {cart.length > 0 ? (
                  <>
                    {cart.map((item) => (
                      <span key={item.id} className="cartItem">
                        <img
                          src={item.images[0].resource_url}
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

            {/* <Nav.Link as={Link} to='/wishlist'>
                            <FaUserAlt color='#fff' fontSize='20px' />
                        </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    // <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#252525' }}>
    //     <div className="container-fluid">
    //         <Link to='/' className='"navbar-brand"'>
    //             <BsVinylFill style={{ marginRight: '10px' }} />
    //             Vinyl-Store
    //         </Link>

    //         <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //                 <li className="nav-item">
    //                     <Link className="nav-link" href="#">Home</Link>
    //                 </li>
    //                 <li className="nav-item">
    //                     <Link className="nav-link" href="#">Store</Link>
    //                 </li>
    //             </ul>
    //         </div>

    //         <div className="d-flex align-items-center">
    //             <a className="text-reset me-3" href="#">
    //                 <i className="fas fa-shopping-cart"></i>
    //             </a>

    //             <div className="dropdown">
    //                 <a
    //                     className="text-reset me-3 dropdown-toggle hidden-arrow"
    //                     href="#"
    //                     id="navbarDropdownMenuLink"
    //                     role="button"
    //                     data-mdb-toggle="dropdown"
    //                     aria-expanded="false"
    //                 >
    //                     <i className="fas fa-bell"></i>
    //                     <span className="badge rounded-pill badge-notification bg-danger">1</span>
    //                 </a>
    //                 <ul
    //                     className="dropdown-menu dropdown-menu-end"
    //                 // aria-labelledby="navbarDropdownMenuLink"
    //                 >
    //                     <li>
    //                         <a className="dropdown-item" href="#">Some news</a>
    //                     </li>
    //                     <li>
    //                         <a className="dropdown-item" href="#">Another news</a>
    //                     </li>
    //                     <li>
    //                         <a className="dropdown-item" href="#">Something else here</a>
    //                     </li>
    //                 </ul>
    //             </div>
    //             <div className="dropdown">
    //                 <a
    //                     className="dropdown-toggle d-flex align-items-center hidden-arrow"
    //                     href="#"
    //                     id="navbarDropdownMenuAvatar"
    //                     role="button"
    //                     data-mdb-toggle="dropdown"
    //                     aria-expanded="false"
    //                 >
    //                     <img
    //                         src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
    //                         className="rounded-circle"
    //                         height="25"
    //                         alt="Black and White Portrait of a Man"
    //                         loading="lazy"
    //                     />
    //                 </a>
    //                 <ul
    //                     className="dropdown-menu dropdown-menu-end"
    //                 // aria-labelledby="navbarDropdownMenuAvatar"
    //                 >
    //                     <li>
    //                         <a className="dropdown-item" href="#">My profile</a>
    //                     </li>
    //                     <li>
    //                         <a className="dropdown-item" href="#">Settings</a>
    //                     </li>
    //                     <li>
    //                         <a className="dropdown-item" href="#">Logout</a>
    //                     </li>
    //                 </ul>
    //             </div>
    //         </div>
    //     </div>
    // </nav>
  );
};

export default Header;
