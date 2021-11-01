import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adminSignIn } from "../../redux/adminSlice";

const Login = () => {
  //   const [formData, setFormData] = useState({ email: "", password: "" });

  //   const handleFormData = (e) => {
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       [e.target.name]: e.target.value,
  //     }));
  //   };
  //state data : loading and error
  // const status=useSelector(state=>state.admin.status)
  const error = useSelector((state) => state.admin.error);
  const dispatch = useDispatch();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // console.log(userEmail, userPassword);
    dispatch(adminSignIn({ email: userEmail, password: userPassword }));
  };

  const canLogin = Boolean(userEmail) && Boolean(userPassword);

  const viewError =
    error && error.errors
      ? error.errors.map((err) => (
          <p className="text-xs text-red-500 ml-1 my-1">*{err.msg}</p>
        ))
      : error;
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-200 to-green-200">
      <form
        onSubmit={handleFormSubmit}
        className="w-96 max-w-md-sm min-w-min -mt-20 mx-auto flex flex-col rounded-md shadow-md px-2 py-3"
      >
        <p className="text-center text-2xl font-mono text-gray-600 my-2">
          Admin Login
        </p>
        {error && viewError}

        <input
          type="email"
          name="email"
          value={userEmail}
          className="my-2 border-b-2 border-purple-300 focus:outline-none focus:border-purple-600 px-1 bg-transparent py-1"
          placeholder="Email"
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          value={userPassword}
          className="my-2 border-b-2 border-purple-300 focus:outline-none focus:border-purple-600 px-1 bg-transparent py-1"
          placeholder="Password"
          onChange={(e) => setUserPassword(e.target.value)}
        />

        <button
          type="submit"
          className={`mt-4 mx-2 text-gray-500 border-2 border-purple-200 ${
            canLogin ? "bg-purple-400" : "bg-gray-300"
          } rounded-md py-1 font-mono focus:bg-purple-500 focus:shadow-sm focus:text-gray-100`}
          disabled={!canLogin}
        >
          {canLogin ? "Login" : "Please provide both email and password"}
        </button>
      </form>
    </div>
  );
};

export default Login;
