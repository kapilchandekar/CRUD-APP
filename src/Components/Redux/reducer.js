import * as types from "./constant";
const initialState = {
  users: [],
  isFilter: false,
  filterUser: [],
  loading: false,
  err: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_USER_DATA:
    case types.LOAD_USER_DATA:
    case types.UPDATE_USER_DATA:
    case types.DEL_USER_DATA:
      return {
        ...state,
        loading: true,
      };
    case types.LOAD_SUCCESS_DATA:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case types.CREATE_SUCCESS_DATA:
    case types.UPDATE_SUCCESS_DATA:
      return {
        ...state,
        isFilter: false,
        loading: false,
      };
    case types.DEL_SUCCESS_DATA:
      return {
        ...state,
        loading: false,
        filterUser: state.filterUser.filter(
          (users) => users._id !== action.payload
        ),
        users: state.users.filter((users) => users._id !== action.payload),
      };
    case types.CREATE_ERORR_DATA:
    case types.LOAD_ERORR_DATA:
    case types.DEL_ERORR_DATA:
      return {
        ...state,
        loading: false,
        err: action.payload,
      };
    case types.FILTER_USER_DATA:
      return {
        ...state,
        filterUser: state.users.filter((item) =>
          item.FullName.toLowerCase().includes(action.payload.toLowerCase())
        ),
        isFilter: action.payload.length > 0 ? true : false,
      };

    // case "UPDATE_DATA":
    //     console.log("id", action.payload)
    //     return {
    //         ...state,
    //         user: state.user.map((item) => item.id === action.payload.id ? action.payload : item),
    //         filterUser: state.filterUser.map((item) => item.id === action.payload.id ? action.payload : item)
    //     }

    default:
      return state;
  }
};

export default userReducer;
