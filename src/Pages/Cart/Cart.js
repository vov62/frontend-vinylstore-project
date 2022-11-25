import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Form, ListGroup, Row } from "react-bootstrap";
import { useGlobalContext } from "../../context/Context";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./cart.css";

const Cart = () => {
  const { cart, dispatch } = useGlobalContext();
  // console.log(cart);

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce(
        (acc, curr) =>
          acc + Number(curr.lowest_price.toString().split(".")[0]) * curr.qty,
        0
      )
    );
  }, [cart]);

  return (
    <div className="cart-container">
      <h3>Shopping Cart</h3>
      <hr />
      {!cart ? (
        <div>
          <h2>nothing to show...</h2>
        </div>
      ) : (
        <div className="cart-wrapper">
          <div className="vinyls">
            <ListGroup>
              {cart.map((vinyl) => (
                <ListGroup.Item key={vinyl.id}>
                  <Row>
                    <Col>
                      <img
                        src={vinyl.images[0].resource_url}
                        alt={vinyl.title}
                        className="cartImg"
                        width="70px"
                      />
                    </Col>
                    <Col>
                      <span>{vinyl.title}</span>
                    </Col>
                    <Col>{vinyl.formats[0].descriptions[0]}</Col>
                    <Col>
                      &euro; {vinyl.lowest_price.toString().split(".")[0]}
                    </Col>
                    <Col>
                      <Form.Control
                        as="select"
                        value={vinyl.qty}
                        onChange={(e) =>
                          dispatch({
                            type: "CHANGE_CART_QTY",
                            // send to payload the id and qty of the current vinyl
                            payload: {
                              id: vinyl.id,
                              qty: e.target.value,
                            },
                          })
                        }
                      >
                        {[...Array(vinyl.num_for_sale).keys()].map((x) => (
                          <option key={x + 1}>{x + 1}</option>
                        ))}
                      </Form.Control>
                    </Col>
                    <Col style={{ textAlign: "center" }}>
                      <FaTrash
                        fontSize="20"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: vinyl,
                          })
                        }
                      />
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
          <div className="sub-total-items summary">
            <h5 className="title">Order Summary</h5>

            <div className="order-price">
              <p>
                Total Products: <span> {cart.length}</span>
              </p>
              <p>
                Shipping: <span>&euro; 0</span>
              </p>
              <hr />
              <p>
                Total Payment: <span> &euro; {total}</span>
              </p>
            </div>
            <Link to="#">
              <Button
                variant="success"
                style={{ width: "100%", marginTop: "10px" }}
              >
                Checkout
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
