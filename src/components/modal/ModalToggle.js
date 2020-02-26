import React, { useState } from "react";
import { Modal } from "react-bootstrap";

function ModalToggle({ show, settingShow, peoples }) {
  const [openNumber, setopenNumber] = useState(false);
  const [openEmail, setopenEmail] = useState(false);

  return (
    <>
      <Modal
        show={show}
        onHide={() => {
          settingShow();
          setopenNumber(false);
          setopenEmail(false);
        }}
        dialogClassName="modal-30w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            <p className="id">ID: {peoples.id}</p>
            <p className="hash">Hash: {peoples.hash}</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="contacting">
            {peoples.number && (
              <p className="number" onClick={() => setopenNumber(true)}>
                <i className="fas fa-phone"></i>
                {openNumber ? `${peoples.number}` : "click to view"}
              </p>
            )}
            {peoples.email && (
              <p className="email" onClick={() => setopenEmail(true)}>
                <i className="far fa-envelope"></i>
                {openEmail ? `${peoples.email}` : "click to view"}
              </p>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalToggle;
