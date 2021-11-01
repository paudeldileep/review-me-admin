import axios from "../utils/axios";

const initialState = {
  data: null,
  status: "idle",
  message: null,
  error: null,
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case "product/loading": {
      return {
        ...state,
        message: null,
        status: "loading",
        error: null,
      };
    }
    case "product/update":
    case "product/delete": {
      return {
        ...state,
        message: action.payload,
        status: "idle",
        error: null,
      };
    }
    case "product/error": {
      return {
        ...state,
        message: null,
        status: "idle",
        error: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}

//action creators

export const loading = () => ({
  type: "product/loading",
});

export const productUpdated = (data) => ({
  type: "product/update",
  payload: data,
});

export const productDeleted = (data) => ({
  type: "product/update",
  payload: data,
});

//thunk functions

//1. Approve a product listing
export const approveProduct = (productId) => async (dispatch) => {
  dispatch(loading());
  axios
    .put(`/admin/product/${productId}`)
    .then((res) => dispatch(productUpdated(res.data)))
    .catch((err) => console.log(err.response.data));
};

//2. delete a product listing
export const deleteProduct = (productId) => async (dispatch) => {
  dispatch(loading());
  axios
    .delete(`/admin/product/${productId}`)
    .then((res) => dispatch(productDeleted(res.data)))
    .catch((err) => console.log(err.response.data));
};

//3. set featured/ remove featured product

export const setFeatured = (productId) => async (dispatch) => {
  dispatch(loading());
  axios
    .post(`/admin/product/featured/${productId}`)
    .then((res) => dispatch(productUpdated(res.data)))
    .catch((err) => console.log(err.response.data));
};
