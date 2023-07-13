import React from 'react';
import './Form.css';
import { useState, useEffect } from 'react';
import { getOneUser, updateUser } from './services/api';
import { useNavigate, useParams } from 'react-router-dom';

const EditUser = () => {
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
  const [user, setUser] = useState(defaultValue);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    userDetail();
  });

  const userDetail = async () => {
    var response = await getOneUser(id);
    response = response.data[0];
    setUser(response);
  };
  const onValueChange = (e) => {
    // we are using "...user" so that new parameter gets append into it
    var settingUser = { ...user, [e.target.name]: e.target.value };
    setUser(settingUser);
  };

  const handleEdit = async () => {
    await updateUser(user);
    navigate('/');
  };

  return (
    <div>
      <button
        onClick={() => navigate('/')}
        style={{ backgroundColor: '#1d1d5b', width: '100px' }}
      >
        Home
      </button>
      <div className='container'>
        <div className='inputs'>
          <label>Name</label>
          <input
            onChange={(e) => onValueChange(e)}
            name='userName'
            placeholder='Your Name'
            value={user.userName}
          />
          <label>Phone Number</label>
          <input
            onChange={(e) => onValueChange(e)}
            type='number'
            name='phone'
            placeholder='Your Phone Number'
            value={user.phone}
          />
          <label>Email</label>
          <input
            onChange={(e) => onValueChange(e)}
            type='email'
            name='email'
            placeholder='example@gmail.com'
            value={user.email}
          />
          <label>Hobbies</label>
          <input
            onChange={(e) => onValueChange(e)}
            name='hobbies'
            placeholder='Your Hobbies'
            value={user.hobbies}
          />
          <button type='submit' onClick={handleEdit}>
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
