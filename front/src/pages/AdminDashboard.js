import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faUserXmark } from '@fortawesome/free-solid-svg-icons'

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
 
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get("http://localhost:5500/auth/all_users");
      setUsers(res.data);
    }
    fetchUsers();
  })
  return (
    <div>
      <h3>Amin Dashboard</h3>
      <h5>Welcome administrator <FontAwesomeIcon icon={faAddressCard} /> </h5>
      <div className="ispis">
      <table>
        <tr>
          <th className="td_id">id</th>
          <th className="td_info">firstName</th>
          <th className="td_info">lastName</th>
          <th className="td_email">email</th>
          <th className="td_info">username</th>
          <th className="td_info">Remove customer</th>
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
              <td className='td_info' key={elem.id}><button className='td_btn'><FontAwesomeIcon icon={faUserXmark} /></button></td>
            </table>
          );
        })}
      </div>
    </div>
  )
}

export default AdminDashboard;
