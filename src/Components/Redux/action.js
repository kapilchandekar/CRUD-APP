import * as types from "./constant";

export const loadUsersStart = () => {
  return {
    type: types.LOAD_USER_DATA,
  };
};

export const loadSuccessData = (users) => {
  return {
    type: types.LOAD_SUCCESS_DATA,
    payload: users,
  };
};

export const loadErrorData = (err) => {
  console.log(" show action called", err);
  return {
    type: types.LOAD_ERORR_DATA,
    payload: err,
  };
};

export const createUserData = (User) => {
  console.log("usercreated", User);
  return {
    type: types.CREATE_USER_DATA,
    payload: User,
  };
};

export const createSuccessData = () => {
  return {
    type: types.CREATE_SUCCESS_DATA,
  };
};

export const createErrData = (err) => {
  return {
    type: types.CREATE_ERORR_DATA,
    payload: err,
  };
};

export const delUserData = (userId) => {
  console.log("userid", userId);
  return {
    type: types.DEL_USER_DATA,
    payload: userId,
  };
};

export const delSuccessData = (userId) => {
  return {
    type: types.DEL_SUCCESS_DATA,
    payload: userId,
  };
};

export const delErrData = (err) => {
  return {
    type: types.CREATE_ERORR_DATA,
    payload: err,
  };
};
export const updateUserData = (userInfo) => {
  // console.log("userinfo",userInfo)
  return {
    type: types.UPDATE_USER_DATA,
    payload: userInfo,
  };
};
export const updateSuccessData = () => {
  // console.log("userinfo",userInfo)
  return {
    type: types.UPDATE_SUCCESS_DATA,
  };
};
export const filterData = (value) => {
  console.log("userinfo", value);
  return {
    type: types.FILTER_USER_DATA,
    payload: value,
  };
};
