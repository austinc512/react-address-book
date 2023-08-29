import React, { useState, useEffect } from "react";
import ChildComponent from "./ChildComponent";

console.clear();

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api?results=25")
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        return response;
      })
      .then((response) => {
        setUsers(response.results); // Update users state
      });
  }, []);
  // having users in dependency array creates infinite loop

  useEffect(() => {
    console.log("updated, ", users);
  }, []);

  return (
    <div>
      <h1>Address Book</h1>
      <ul>
        {users.map((user) => {
          return <ChildComponent data={user} key={user.login.uuid} />;
        })}
      </ul>
    </div>
  );
};

export default App;
