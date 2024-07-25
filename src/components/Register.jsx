import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ username: "", password: "" });
  const { username, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://calendertask-be.vercel.app/api/auth/register",
        formData
      );
      Cookies.set("token", res.data.token, { expires: 1 });
      console.log(res.data);
      navigate("/");
    } catch (err) {
      console.error(err.response.data);
      alert(err.response?.data.message);
    }
  };

  return (
    <div className="flex md:bg-fixed h-screen">
      <div
        className="w-1/2 bg-no-repeat bg-cover bg-center hidden md:block"
        style={{ backgroundImage: `url('assets/login.png')` }}
      ></div>
      <div className="w-full md:w-1/2 h-full overflow-auto flex flex-col items-center py-12">
        <div>
          <img src="/assets/logo.png" alt="Logo" className="w-[280px]" />
        </div>
        <div className="mt-10 text-center">
          <h1 className="text-4xl text-gray-600 mb-4 font-semibold">
            Welcome!
          </h1>
        </div>
        <form
          className="md:w-3/4 flex flex-col items-center mt-5 gap-3 px-8"
          onSubmit={onSubmit}
        >
          <div className="w-full flex flex-col gap-1">
            <label htmlFor="username">USERNAME</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={onChange}
              className="border rounded text-lg p-3"
              required
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <label htmlFor="password">PASSWORD</label>
            <input
              id="password"
              className="border rounded text-lg p-3"
              type="password"
              name="password"
              value={password}
              onChange={onChange}
              required
            />
          </div>
          <div className="w-full mt-1 flex justify-between">
            <div className="flex gap-1 items-center">
              <input
                type="checkbox"
                name="remember"
                id="remember"
                className="w-[17px] h-[17px]"
              />
              <label htmlFor="remember" className="text-md text-gray-500">
                Remember for 7 days
              </label>
            </div>
            <div>
              <Link to="/login">
                <span className="text-red-400 font-medium">
                  Forgot Password
                </span>
              </Link>
            </div>
          </div>
          <button
            type="submit"
            id="sbmit"
            className="w-full rounded bg-red-600 py-3 mt-3 text-xl text-white font-medium border hover:border-red-600 hover:bg-white hover:text-red-400"
          >
            Register
          </button>
          <div className="mt-5">
            <h5>
              Already have an account?{" "}
              <span className="text-red-400">
                <Link to="/login">
                  <span>Login</span>
                </Link>
              </span>
            </h5>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
