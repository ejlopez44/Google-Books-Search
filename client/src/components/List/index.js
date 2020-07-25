import React from "react";
import "./style.css";
import { ViewBtn } from '../Buttons'

// This file exports both the List and ListItem components

export function List({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export function ListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}

export function ResultCard(props) {

  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        {/* need tocreate margin around this column left and top */}
        <div className="col-sm-9 titleCell" >
          <h4 className="card-title">{props.title}</h4>
          <p className="card-text"><small className="text-muted">{props.authors ? `Written by ${props.authors[0]}` : ""}</small></p>
        </div>
        {/* need to create margin top on this */}
        <div className="col-sm-2 btnCell">
          <ViewBtn href={props.link} />
          {props.children}
        </div>

        <div className="col-md-3">
          <img src={props.image} className="" alt={props.title} />
        </div>
        <div className="col-md-9">
          <div className="card-body">
            <p className="card-text overflow-auto book-desc">{props.description}</p>
            {/* <a onClick={(e) => console.log(e)}>More..</a> */}
          </div>
        </div>
      </div>
    </div>
  );
}