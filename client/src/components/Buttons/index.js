import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
export function DeleteBtn(props) {
  return (
    <a className="btn btn-danger" {...props}>
      <i class="fa fa-trash-o"></i>
    </a>
  );
}

export function ViewBtn(props) {
  return (
    <a className="btn btn-light" {...props} target="_blank">
      <i class="fa fa-external-link"></i>
    </a>
  );
}

export function SaveBtn(props) {
  return (
    <a className="btn btn-light" {...props}>
      <i class="fa fa-floppy-o"></i>
    </a>
  );
}

// export default DeleteBtn;
