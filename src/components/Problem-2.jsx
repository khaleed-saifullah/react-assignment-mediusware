import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import allCountryList from "../APIRequest/allCountry";
import specificCountry from "../APIRequest/specificCountry";

const Problem2 = () => {
  const [showModalA, setShowModalA] = useState(false);
  const [showModalB, setShowModalB] = useState(false);
  const [showModalC, setShowModalC] = useState(false);
  const [allCountry, setAllCountry] = useState([]);
  const [singleCountry, setSingleCountry] = useState([]);

  const [singleCountryInfo, setSingleCountryInfo] = useState({});

  useEffect(() => {
    allCountryList()
      .then((data) => setAllCountry(data))
      .catch((err) => console.log(err));

    specificCountry("United States")
      .then((data) => setSingleCountry(data))
      .catch((err) => console.log(err));
  }, []);

  function modalShowB() {
    setShowModalA(false);
    setShowModalB(true);
  }

  function modalShowA() {
    setShowModalA(true);
    setShowModalB(false);
  }

  function filterDataAllCountry(even) {
    let filterData = [];
    if (even) {
      filterData = allCountry.filter((item) => item.id % 2 == 0);
      setAllCountry(filterData);
    } else {
      allCountryList()
        .then((data) => setAllCountry(data))
        .catch((err) => console.log(err));
    }
  }

  function filterDataSpecificCountry(even) {
    let filterData = [];
    if (even) {
      filterData = singleCountry.filter((item) => item.id % 2 == 0);
      setSingleCountry(filterData);
    } else {
      specificCountry("United States")
        .then((data) => setSingleCountry(data))
        .catch((err) => console.log(err));
    }
  }

  function modalShowC(item) {
    setShowModalA(false);
    setShowModalB(false);
    setShowModalC(true);
    setSingleCountryInfo(item);
  }

  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

          <div className="d-flex justify-content-center gap-3">
            <button
              className="btn btn-lg btn-outline-primary"
              type="button"
              onClick={() => setShowModalA(true)}
            >
              All Contacts
            </button>
            <button
              className="btn btn-lg btn-outline-warning"
              type="button"
              onClick={() => setShowModalB(true)}
            >
              US Contacts
            </button>
          </div>
        </div>
      </div>
      {/* Modal A */}
      <Modal show={showModalA} onHide={() => setShowModalA(false)}>
        <Modal.Header>
          <Modal.Title>Modal A</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {allCountry.map((item, index) => {
            return (
              <div
                key={index}
                className="country-list"
                onClick={() => modalShowC(item)}
              >
                <p>Name : {item.country.name}</p>
                <p>Phone : {item.phone}</p>
              </div>
            );
          })}
        </Modal.Body>
        <Modal.Footer>
          <div>
            <input
              type="checkbox"
              onChange={(e) => filterDataAllCountry(e.target.checked)}
            />
            Only Even
          </div>
          <Button className="button-a">All Contacts</Button>
          <Button className="button-b" onClick={modalShowB}>
            US Contacts
          </Button>
          <Button className="button-c" onClick={() => setShowModalA(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Modal B */}
      <Modal show={showModalB} onHide={() => setShowModalB(false)}>
        <Modal.Header>
          <Modal.Title>Modal B</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {singleCountry.map((item, index) => {
            return (
              <div
                key={index}
                className="country-list"
                onClick={() => modalShowC(item)}
              >
                <p>Name : {item.country.name}</p>
                <p>Phone : {item.phone}</p>
              </div>
            );
          })}
        </Modal.Body>
        <Modal.Footer>
          <input
            type="checkbox"
            onChange={(e) => filterDataSpecificCountry(e.target.checked)}
          />
          Only Even
          <Button className="button-a" onClick={modalShowA}>
            All Contacts
          </Button>
          <Button className="button-b">US Contacts</Button>
          <Button className="button-c" onClick={() => setShowModalB(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal C */}
      <Modal show={showModalC} onHide={() => setShowModalC(false)}>
        <Modal.Header>
          <Modal.Title>Modal C</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <p>
              Name :{" "}
              {singleCountryInfo.country && singleCountryInfo.country.name}
            </p>
            <p>Phone : {singleCountryInfo.phone}</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="button-c" onClick={() => setShowModalC(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Problem2;
