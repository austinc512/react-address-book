import React, { useState, useEffect } from "react";

/*

build the box that contains 1 entity
with a toggle button that shows/hides additional info

*/

const Child = (props) => {
  const [isToggled, setIsToggled] = useState(false);
  useEffect(() => {
    // console.log(isToggled);
  }, [isToggled]);

  const names = props.data.name;
  const location = props.data.location;

  //
  return (
    <li>
      <div className="basic">
        <img
          src={props.data.picture.large}
          alt="something"
          key={props.data.picture.large}
        />
        <h4 key={names.first}>
          {names.title} {names.first} {names.last}
        </h4>
      </div>
      <div className="address">
        <button
          key="toggle"
          onClick={() => {
            setIsToggled(!isToggled);
          }}
        >
          Show/Hide Address
        </button>
        <p>
          {isToggled && <br />}
          {isToggled && `${location.street.number} ${location.street.name}`}
          {isToggled && <br />}
          {isToggled &&
            `${location.city} ${location.state} ${location.postcode}`}
          {isToggled && <br />}
          {isToggled && location.country}
        </p>
      </div>
    </li>
  );
};

export default Child;
