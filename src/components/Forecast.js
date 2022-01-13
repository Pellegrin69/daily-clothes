import React, {useState} from 'react';
import {getForecast} from "../api/weather";
import {Col, Container, Row} from "react-bootstrap";

const Forecast = () => {
   let [responseObj, setResponseObj] = useState({})
   getForecast().then(response => {
      setResponseObj(response)
   })

   return <>
      <p>{responseObj}</p>
   </>;
};

export default Forecast;