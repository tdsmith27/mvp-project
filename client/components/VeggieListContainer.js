import React from "react";
import VeggieList from "./VeggieList";

const lists = ["seasonal", "search", "exclude"];

const VeggieListContainer = props => (
  <div className="lists">
    {lists.map((list, key) => (
      <VeggieList
        list={list}
        veggies={props[list]}
        editList={props.editList}
        key={key}
      />
    ))}
  </div>
);

export default VeggieListContainer;
