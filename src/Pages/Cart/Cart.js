import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { useGlobalContext } from "../../context/Context";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import noImage from "../../assets/no image.jpeg";
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
      <h3>Your Shopping Cart</h3>
      <hr />

      {!cart ? (
        <div>
          <h2>nothing to show...</h2>
        </div>
      ) : (
        <div className="cart-wrapper">
          <div className="vinyls">
            {cart.map((vinyl) => (
              <div className="order-vinyl-details" key={vinyl.id}>
                <img
                  src={vinyl.images ? vinyl.images[0].resource_url : noImage}
                  alt={vinyl.title}
                  className="cartImg"
                  width="70px"
                />

                <h6 className="title">{vinyl.title}</h6>
                <h6>{vinyl.formats[0].descriptions[0]}</h6>
                <h6>&euro; {vinyl.lowest_price.toString().split(".")[0]}</h6>
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

                <h6 style={{ textAlign: "center" }}>
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
                </h6>
              </div>
            ))}
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
