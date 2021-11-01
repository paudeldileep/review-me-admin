import axios from "../utils/axios";
import setAuthToken from "../utils/setAuthToken";

const initialState = {
  adminData: null,
  isAuthenticated: false,
  status: "idle",
  error: null,
};

//reducer function
export default function adminReducer(state = initialState, action) {
  switch (action.type) {
    case "admin/adminFetched": {
      return {
        ...state,
        adminData: action.payload,
        isAuthenticated: true,
        status: "idle",
        error: null,
      };
    }
    case "admin/adminSignedIn": {
      return {
        ...state,
        status: "idle",
        error: null,
      };
    }
    case "admin/adminLoading":
    case "admin/adminSigningIn": {
      return {
        ...state,
        status: "loading",
      };
    }
    case "admin/adminError": {
      return {
        ...state,
        error: action.payload,
        status: "idle",
      };
    }
    case "admin/adminSignOut": {
      localStorage.removeItem("admin_token");
      setAuthToken(null);
      return {
        ...state,
        adminData: null,
        isAuthenticated: false,
      };
    }
    default:
      return state;
  }
}

//action creators
export const adminLoading = () => ({ type: "admin/adminLoading" });
export const adminFetched = (adminData) => ({
  type: "admin/adminFetched",
  payload: adminData,
});
export const adminError = (error) => ({
  type: "admin/adminError",
  payload: error,
});
export const adminSigningIn = () => ({ type: "admin/adminSigningIn" });
export const adminSignedIn = () => ({ type: "admin/adminSignedIn" });
// export const adminSigningUp = () => ({ type: "admin/adminSigningUp" });
// export const adminSignedUp = () => ({ type: "admin/adminSignedUp" });
export const adminSignOut = () => ({ type: "admin/adminSignOut" });

//Thunk functions

//#1. fetch admin based on token
export const fetchAdmin = () => async (dispatch) => {
  dispatch(adminLoading());
  axios
    .get("/admin")
    .then((res) => {
      dispatch(adminFetched(res.data));
    })
    .catch((err) => {
      if (err.response) {
        dispatch(adminError(err.response.data));
      }
      console.log(err.response);
    });
};

//#2.Admin sign in

export const adminSignIn = (adminData) => async (dispatch) => {
  dispatch(adminSigningIn());

  axios
    .post("/admin/login", adminData)
    .then((res) => {
      localStorage.setItem("admin_token", res.data);
      setAuthToken(res.data);
      dispatch(adminSignedIn());
      dispatch(fetchAdmin());
    })
    .catch((err) => {
      if (err.response) {
        dispatch(adminError(err.response.data));
      }
      console.log("err:", err);
    });
};

//custom selectors

export const selectAdminData = (state) => state.admin.adminData;
