import React from "react";
import DayListItem from "components/DayListItem";

//The DayList is responsible for rendering a list of DayListItem components
export default function DayList(props) {
  const dayList = props.days.map(day =>
    <DayListItem
      key={day.id}
      name={day.name}
      spots={day.spots}
      selected={day.name === props.day}
      setDay={props.setDay}
    />
  );

  return (
    <ul>{dayList}</ul>
  );
};