import React from "react";
import { Button, Card } from "react-bootstrap";
import { useGlobalContext } from "../context/Context";
import Modal from "react-bootstrap/Modal";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";

const VinylModal = (props) => {
  const { wishlist, dispatch } = useGlobalContext();

  if (!props.show) return null;

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className="modal-header">
          <h1>Wishlist</h1>
          <div className="modal-close-btn">
            <GrClose size={20} onClick={props.onHide} />
          </div>
        </div>

        {wishlist.length > 0 ? (
          <div className="modal-card-wrapper">
            {wishlist.map((item, i) => {
              return (
                <>
                  <Link to={`vinyl/${item.id}`}>
                    <Card className="modal-card" key={i}>
                      <img
                        src={item.images[0].resource_url}
                        alt=""
                        className="card-img-top"
                      />
                      <div className="card-body">
                        <h6 className="card-text ">{item.title}</h6>
                        <h6 className="card-text ">
                          &euro;{item.lowest_price.toString().split(".")[0]}
                        </h6>
                      </div>
                      <Button
                        variant="dark"
                        style={{ border: "none" }}
                        onClick={() => {
                          dispatch({
                            type: "REMOVE_FROM_WISHLIST",
                            payload: item,
                          });
                        }}
                      >
                        Remove
                      </Button>
                    </Card>
                  </Link>
                </>
              );
            })}
          </div>
        ) : (
          <div>
            <h3>Add Vinyl To Your Wishlist...</h3>
          </div>
        )}
      </Modal>
    </>
  );
};

export default VinylModal;
