import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import AdminProducts from "./AdminProducts";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faUserXmark } from "@fortawesome/free-solid-svg-icons";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get("http://localhost:5500/auth/all_users");
      setUsers(res.data);
    };
    fetchUsers();
  },);

  const RemoveUser = async (id) => {
    console.log(id);
    try {
      const res = await axios.delete(`http://localhost:5500/auth/${id}`);
      console.log(res.data);
      toast.success("User removed!");
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div className="content d-flex justify-content-sm-center">
      <div>
        <h3>Admin Dashboard</h3>
        <h5>
          Welcome administrator <FontAwesomeIcon icon={faAddressCard} />{" "}
        </h5>
        <h5 style={{ color: "#6DAD9F", margin: "2rem" }}>
          All registered users in app
        </h5>
        <div className="users-render">
          <table>
            <tbody>
              <tr>
                <th className="td_id">Customer ID</th>
                <th className="td_info">First name</th>
                <th className="td_info">Last name</th>
                <th className="td_email">e-mail</th>
                <th className="td_info">Username</th>
                <th className="td_info">Remove user</th>
              </tr>
            </tbody>
          </table>

          {users.map((elem, index) => {
            return (
              <table key={index}>
                <tbody>
                  <tr>
                    <td className="td_id" key={elem.id}>
                      {elem._id}
                    </td>

                    <td className="td_info" key={elem.id}>
                      {elem.firstName}
                    </td>

                    <td className="td_info" key={elem.id}>
                      {elem.lastName}
                    </td>
                    <td className="td_email" key={elem.id}>
                      {elem.email}
                    </td>
                    <td className="td_info" key={elem.id}>
                      {elem.username}
                    </td>
                    <td className="td_info" key={elem.id}>
                      <button
                        className="td_btn"
                        onClick={() => RemoveUser(elem._id)}
                      >
                        <FontAwesomeIcon icon={faUserXmark} />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            );
          })}

          <AdminProducts></AdminProducts>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
