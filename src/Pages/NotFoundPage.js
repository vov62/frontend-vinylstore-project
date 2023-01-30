import React from "react";
import Alert from "react-bootstrap/Alert";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <>
      <Alert
        variant="warning"
        style={{
          textAlign: "center",
        }}
      >
        <Alert.Heading style={{ fontSize: "70px" }}>404</Alert.Heading>
        <p>Page Not Found</p>
        <hr />
        <div className="d-flex justify-content-center">
          <Link to="/">
            <Button variant="warning">Back To Home Page</Button>
          </Link>
        </div>
      </Alert>
    </>
  );
};
