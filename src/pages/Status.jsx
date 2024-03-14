// Status.js
import React from "react";
import Nav from "../assets/components/Nav/Nav";
import useApiResponse from "../assets/Globals/ApiResponse";
import "./Status.css";
import loadingDroneIcon from "./loadingdrone.png";

const Status = () => {
  const { response } = useApiResponse();

  return (
    <>
      <Nav />
      <div className="status-container">
        <div className="order-info">
          <p>Ordernummer: {response.ordernummer}</p>
          <p>Din beställning</p>
          <p>ETA: {response.eta}</p>
        </div>
        <img
          src={loadingDroneIcon}
          alt="Loading Drone Icon"
          className="loading-icon"
        />
        <button>Ok, cool</button>
      </div>
    </>
  );
};

export default Status;
