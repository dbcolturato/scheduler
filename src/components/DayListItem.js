import React from "react";
import "components/DayListItem.scss";
import classnames from 'classnames';

const formatSpots = function(props) {
  let formatedSpots = "";

  if(props.spots === 0) {
    formatedSpots = "no spots remaining";
  }
  if(props.spots === 1) {
    formatedSpots = props.spots + " spot remaining";
  }
  if(props.spots >= 2) {
    formatedSpots = props.spots + " spots remaining";
  }
    
  return formatedSpots;
};

export default function DayListItem(props) {

  const dayClass = classnames({
    'day-list__item' : true,
    'day-list__item--selected' : props.selected,
    'day-list__item--full' : props.spots === 0
  });

  return (
    <li className={dayClass} onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2> 
      <h3 className="text--light">{formatSpots(props)}</h3>
    </li>
  );
};