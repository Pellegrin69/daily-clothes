import React from 'react';

const Error = (props) => {
   return <>
      <span className="text-center text-danger">{props.message}</span>
   </>
};

export default Error;