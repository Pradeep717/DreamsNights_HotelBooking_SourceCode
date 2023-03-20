import React, { useState } from "react";
import { Modal, Button, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

function Room({ room }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="row bs bs:hover">
      <div className="col-md-4">
        <img src={room.imageurls[0]} alt={room.name} className="smalling" />
      </div>
      <div className="col-md-7">
        <h1>{room.name}</h1>
        <b>
          <p>Max Count: {room.maxcount}</p>
          <p>Phone Number: {room.phonenumber}</p>
          <p>Type: {room.type}</p>
        </b>

        <div style={{ float: "right" }}>
          <Link
            to={{
              pathname: `/book/${room._id}`,
              state: { room: room },
            }}
          >
            <button className="btn btn-primary btn:hover m-2">Book Now</button>
          </Link>
          <button className="btn btn-primary btn:hover" onClick={handleShow}>
            View Details
          </button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header>
          <Modal.Title className="modal-title">{room.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel interval={3500} prevLabel="" nextLabel="">
            {room.imageurls.map((url, index) => {
              return (
                <Carousel.Item>
                  <img
                    className="d-block w-100 biging"
                    src={url}
                    alt={`Image of ${room.name}`}
                  />
                </Carousel.Item>
              );
            })}
          </Carousel>
          <p>{room.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleClose}
            className="modal-close-button"
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Room;
