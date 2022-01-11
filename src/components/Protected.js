import React, {useEffect} from 'react';
import {useNavigate} from "react-router";

const Protected = (props) => {

   let navigate = useNavigate();
   useEffect(() => {
      if (!localStorage.getItem("token") && !localStorage.getItem("user")) {
         navigate("/signin")
      }
   }, [navigate])

   let Cmp = props.Cmp

   return <Cmp/>;
};

export default Protected;