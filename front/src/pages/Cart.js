import React from "react";
// import axios from "axios";
// import { useEffect, useState } from "react";

const Cart = () => {
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   axios.get("http://localhost:5500/allUsers").then((response) => {
  //     console.log(response.data.data);
  //     setUsers(response.data.data);
  //   });
  // }, []);

  return (
    <div>
       <p>ovde ce biti korpa</p>
      {/*<p>trenutno je ovde ispis svih registrovanih korisnika</p>
      <div className="ispis">
      <table>
        <tr>
          <th className="td_id">id</th>
          <th className="td_info">firstName</th>
          <th className="td_info">lastName</th>
          <th className="td_email">email</th>
          <th className="td_info">username</th>
          <th className="td_info">password</th>
        </tr>
        </table>

        {users.map((elem) => {
          return (
            <table>
              <td className="td_id" key={elem.id}>{elem.id}</td>

              <td className="td_info" key={elem.id}>{elem.firstName}</td>

              <td className="td_info" key={elem.id}>{elem.lastName}</td>
              <td className="td_email" key={elem.id}>{elem.email}</td>
              <td className="td_info" key={elem.id}>{elem.username}</td>
              <td className="td_info" key={elem.id}>{elem.password}</td>
            </table>
          );
        })}
      </div> */}
    </div>
  );
};

export default Cart;
