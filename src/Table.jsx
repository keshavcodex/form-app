import React from 'react';
import { useState, useEffect } from 'react';
import { getUsers, deleteUser } from './services/api';
import Form from './Form';
import { Link, useNavigate } from 'react-router-dom';
import './Table.scss';

const Table = () => {
  const defaultValue = [
    {
      _id: '',
      userName: '',
      phone: '',
      email: '',
      hobbies: '',
      lastUpdated: '',
    },
  ];
  const navigate = useNavigate();
  const [userList, setUserList] = useState(defaultValue);

  const getUserList = async () => {
    try {
      var response = await getUsers();
    } catch (error) {
      return 'Server is down';
    }
    setUserList(response.data.reverse());
  };

  useEffect(() => {
    getUserList();
  }, []);

  const handleEdit = ({ _id }) => {
    console.log(_id);
    navigate(`/edit/${_id}`);
  };

  const handleDelete = async (userId) => {
    console.log(userId);
    deleteUser(userId);
    getUserList();
    navigate('/');
  };

  return (
    <div>
      <h1>Form App</h1>
      <div className='flex-box'>
        <div >
         
        </div>
          <table>
            <thead>
              <tr>
                <th>User Id</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Hobbies</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {userList.map((props, index) => (
                <tr key={index}>
                  <td key={props._id}>{props._id}</td>
                  <td>{props.userName}</td>
                  <td>{props.phone}</td>
                  <td>{props.email}</td>
                  <td>{props.hobbies}</td>
                  <td>
                    <span
                      className='btn'
                      component={Link}
                      onClick={() => handleEdit(props)}
                    >
                      Edit
                    </span>
                  </td>
                  <td>
                    <span
                      className='btn-del'
                      onClick={() => handleDelete(props._id)}
                    >
                      Remove
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        <Form />
      </div>
    </div>
  );
};

export default Table;
