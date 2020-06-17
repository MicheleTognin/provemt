import React, { useState } from "react";
import { Container, Button, Alert } from "react-bootstrap";
import { CSSTransition } from "react-transition-group";

import "./css.transition.css";

function Example() {
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  return (
    <Container style={{ paddingTop: "10rem", paddingLeft: "10rem" }}>
      {showButton && (
        <Button
          onClick={() => setShowMessage(true)}
          size="xxl"
          variant="danger"
        >
          Mostra Messaggio
        </Button>
      )}
      <CSSTransition
        in={showMessage}
        timeout={300}
        classNames="alert"
        unmountOnExit
        onEnter={() => setShowButton(false)}
        onExited={() => setShowButton(true)}
      >
        <Alert
          variant="danger"
          dismissible
          onClose={() => setShowMessage(false)}
        >
          <Alert.Heading>Messaggio Animato</Alert.Heading>
          <p>Messaggio creato con CSSTransition e React Bottstrap!</p>
          <Button onClick={() => setShowMessage(false)} variant="danger">
            Chiudi
          </Button>
        </Alert>
      </CSSTransition>
    </Container>
  );
}

export default Example;