import React from "react";

interface CVSingleProps {
  cv: any;
}

const CVSingle: React.FC<CVSingleProps> = ({ cv }) => {
  return (
    <>
        <h1>{cv.basics?.title}</h1>
    </>
  )
};

export default CVSingle;
