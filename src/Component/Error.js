import React from "react";
import { Alert } from "react-bootstrap";

const ErrorMessage = ({ variant = "info", children }) => {
    return (
        <Alert
            variant={variant}
            style={{
                fontSize: '18px',
                width: '300px',
                textAlign: 'center',
                position: 'absolute',
                top: '30%',
                left: '35%',
                zIndex: '999',
            }}>
            <strong>{children}</strong>
            <p>please refresh the page or check your network connection...</p>
        </Alert>
    );
};

export default ErrorMessage;
