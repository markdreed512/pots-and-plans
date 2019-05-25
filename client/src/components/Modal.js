import React from "react";
import ReactDOM from "react-dom";

const Modal = props => {
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className="ui dimmer modals visible active">
      <div
        onClick={e => e.stopPropagation()}
        className="ui standard modal visible active"
        style={{
          margin: "auto",
          top: "auto",
          left: "auto",
          width: "auto",
          height: "auto"
        }}
      >
        <div className="header" style={{ color: "black" }}>
          {props.title}
        </div>
        <div className="content">{props.content}</div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
