import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";

export default function File(props) {
  return (
    <div className='p-2 bd-highlight d-flex align-items-center'>
      <FontAwesomeIcon icon={faFile} />
        &nbsp;
      <div>{props.file.name}</div>
    </div>
  );
}
