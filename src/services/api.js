import axios from 'axios';

// const URL = "https://tiny-cyan-hedgehog-suit.cyclic.app";
const URL = 'http://localhost:8500';

export const getUsers = async () => {
  try {
    return await axios.get(`${URL}/`);
  } catch (error) {
    console.log('Error while calling getUser API', error);
  }
};

export const addUser = async (user) => {
  // const userData = { userId: user.userId, name: user.name};
  // const [userId, userName, phone, email, Hobbies] = user;
  try {
    return await axios.post(`${URL}/add`, user);
  } catch (error) {
    console.log('Error while subcribing', error);
  }
};

export const deleteUser = async (id) => {
  try {
    return await axios.delete(`${URL}/${id}`);
  } catch (error) {
    console.log('Error while deleting data', error);
  }
};

export const updateUser = async (user) => {
  console.log('userData', user);
  try {
    return await axios.put(`${URL}/${user._id}`, user);
  } catch (error) {
    console.log('Error while updating city', error);
  }
};

export const getOneUser = async (userId) => {
  try {
    console.log('Fetching detail of', userId);
    return await axios.get(`${URL}/${userId}`);
  } catch (error) {
    console.log('Error while getting one user detail', error);
  }
};
