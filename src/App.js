import React, { useState, useEffect } from "react";
import server from "./data/server";
import "./App.css";
import Person from "./components/Person/Person";
import Button from "./components/Button/Button";
import { RotateSpinner } from "react-spinners-kit";
import ModalToggle from "./components/modal/ModalToggle";

function App() {
  //declaring all  state

  const [persons, setPersons] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [loading, setloading] = useState(false);
  const [peoplePerPage, setpeoplePerPage] = useState(4);
  const [show, setShow] = useState(false);
  const [targetedPerson, settargetedPerson] = useState('')

  useEffect(() => {
    const peoples = server;

    setPersons(peoples);
  }, []);

  // getting current people
  const indexOfLastPeople = currentPage * peoplePerPage;
  const indexOfFirstPeople = indexOfLastPeople - peoplePerPage;
  const currentPeople = persons.slice(indexOfFirstPeople, indexOfLastPeople);

  // declaring all action

  const loadNextFour = () => {
    setcurrentPage(currentPage + 1);
  };

  const quickLoadItems = () => {
    setloading(true);

    setTimeout(() => {
      setloading(false);
      setpeoplePerPage(peoplePerPage + 4);
    }, 500);
  };

  const lazyLoadItems = () => {
    setloading(true);

    setTimeout(() => {
      setloading(false);
      setpeoplePerPage(peoplePerPage + 4);
    }, 2500);
  };

  const navigateFirstPage = () => {
    setcurrentPage(1);
    setpeoplePerPage(4);
  };
  const toggleModal = () => {
    setShow(true);
  };
  const settingShow = () => {
    setShow(false);
  };
  const sendPersonToPerent = (person) => {
    settargetedPerson(person)
    
  }
  

  return (
    <div className="App p-4">
      <div className="person_area">
        {loading ? (
          <div className="spinner">
            <div className="centering">
              <RotateSpinner size={40} color="green" loading={loading} />
            </div>
          </div>
        ) : (
          <div className="row">
            {currentPeople.map(person => {
              return (
                <Person
                  toggleModal={toggleModal}
                  person={person}
                  key={person.id}
                  sendPersonToPerent={sendPersonToPerent}
                />
              );
            })}
          </div>
        )}
      </div>
      <div className="btn-area">
        <Button
          lazyLoadItems={lazyLoadItems}
          loadNextFour={loadNextFour}
          quickLoadItems={quickLoadItems}
          navigateFirstPage={navigateFirstPage}
        />
      </div>
      <div>
        <ModalToggle peoples={targetedPerson} show={show} settingShow={settingShow}  />
      </div>
    </div>
  );
}

export default App;
