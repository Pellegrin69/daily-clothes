import React, {useEffect} from 'react';
import {useNavigate} from "react-router";

const Protected = (props) => {

   let navigate = useNavigate();
   useEffect(() => {
      if (!localStorage.getItem("user-info")) {
         navigate("/signin")
      }
   }, [])

   let Cmp = props.Cmp
   return (
      <>
         <Cmp/>
      </>
   );
};

export default Protected;