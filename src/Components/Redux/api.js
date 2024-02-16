import axios from "axios";

export const UserApi = async () =>
  await axios.get(
    "https://crudcrud.com/api/3c898b186f414f128026b35d3d6bd455/users"
  );

export const createUserApi = async (user) =>
  await axios.post(
    "https://crudcrud.com/api/3c898b186f414f128026b35d3d6bd455/users",
    user
  );

export const delUserApi = async (userId) =>
  await axios.delete(
    `https://crudcrud.com/api/3c898b186f414f128026b35d3d6bd455/users/${userId}`
  );

export const updateUserApi = async (UserID, info) =>
  //    console.log("eee",UserID,userInfo)
  await axios.put(
    `https://crudcrud.com/api/3c898b186f414f128026b35d3d6bd455/users/${UserID}`,
    info
  );
