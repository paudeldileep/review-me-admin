import axios from "../utils/axios";

const initialState = {
  message: null,
  status: "idle",
  error: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "user/loading": {
      return {
        ...state,
        status: "loading",
      };
    }
    case "user/delete": {
      return {
        ...state,
        message: action.payload,
        error: null,
      };
    }
    case "user/error": {
      return {
        ...state,
        message: null,
        error: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}

//action creators

export const userDeleted = (data) => ({ type: "user/delete", payload: data });
export const userError = (data) => ({ type: "user/error", payload: data });
export const loading = () => ({ type: "user/loading" });

//thunk functions
//1.delete user

export const deleteUser = (userId) => async (dispatch) => {
  dispatch(loading());
  axios
    .delete(`/admin/user/${userId}`)
    .then((res) => dispatch(userDeleted(res.data)))
    .catch((err) => {
      dispatch(userError(err.response.data));
      console.log(err.response.data);
    });
};
