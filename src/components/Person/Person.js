import React from "react";

function Person({ person, toggleModal, sendPersonToPerent }) {
  const sendPerson = () => {
    sendPersonToPerent(person)

    toggleModal();
  };

  return (
    <div
      className="col-sm-3 p-3 mb-2 mt-2 person-details"
      style={{ height: "180px" }}
    >
      <div className="header d-flex justify-content-between">
        <h6 className="align-self-center" style={{ fontSize: "15px" }}>
          {person.name}
        </h6>
        <button onClick={() => sendPerson()} className="btn More-btn">
          More
        </button>
      </div>
      <hr />
      <div className="body pt-3 pl-4">
        <p className="address">{person.address}</p>
      </div>
    </div>
  );
}

export default Person;
