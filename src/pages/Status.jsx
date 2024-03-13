import React from "react";
import Nav from "../assets/components/Nav/Nav";
import useApiResponse from "../assets/Globals/ApiResponse";

const Status = () => {
  //lokal variabel/etc
  const { response } = useApiResponse(); //hämtar vad vi vill ha från vår apiResponse
  return (
    <>
      {response.orderInProgress ? (
        <>
          <p>ETA: {response.eta} </p>
          <p>Ordernummer: {response.ordernummer}</p>
        </>
      ) : (
        <p>Ingen order lagd än</p>
      )}
    </>
  );
};

export default Status;
