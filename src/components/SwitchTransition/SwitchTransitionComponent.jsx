import React, { useState } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { Button, Form } from "react-bootstrap";
import "./SwitchTransitionStyles.css";

const modes = ["out-in", "in-out"];

function SwitchComponent() {
  const [state, setState] = useState(false);
  const [mode, setMode] = useState("out-in");
  return (
    <div className='center'>
      <div>
       <div className="label">Mode:</div>
       <div className="modes">
         {modes.map((m) => (
           <Form.Check
             key={m}
             custom
             inline
             label={m}
             id={`mode=msContentScript${m}`}
             type="radio"
             name="mode"
             checked={mode === m}
             value={m}
             onChange={(event) => {
               setMode(event.target.value);
            }}
          />
        ))}
       </div>
      </div>
      <SwitchTransition mode={mode}>
           <CSSTransition
             key={state}
             addEndListener={(node, done) => {
               node.addEventListener("transitionend", done, false);
             }}
             classNames="fade"
           >
             <div className="button-container">
               <Button onClick={() => setState((state) => !state)}>
                 {state ? "Hello, world!" : "Goodbye, world!"}
               </Button>
             </div>
           </CSSTransition>
         </SwitchTransition>
  </div>
  );
}

export default SwitchComponent;