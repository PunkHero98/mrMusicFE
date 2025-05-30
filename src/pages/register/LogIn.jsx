import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LogIn = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({
    type: "",
    text: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await axios.post("http://localhost:8082/api/v1/auth/login", {
        username: form.username,
        password: form.password,
      });
      console.log("Login response data:", res.data);
      const data = res.data;

      localStorage.setItem("x-access-token", data.user.accessToken);

      if (res.status === 200) {
        setMessage({
          type: "success",
          text: data.message,
        });
        setForm({
          username: "",
          password: "",
        });
        navigate("/home");
      }
    } catch (error) {
      setMessage({
        type: "error",
        text: error.message,
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="m-0 p-0 h-screen items-center justify-center bg-warning/20">
      <h1 className="press_start text-center text-4xl pt-8 pb-4 text-primary">
        LOG IN
      </h1>
      <form
        onSubmit={handleSubmit}
        className="press_start text-xs tracking-widest w-full max-w-lg mx-auto mt-2 p-8 bg-background shadow-lg shadow-black rounded-lg border-4 border-muted"
      >
        <label className="block mb-2 text-text">USERNAME</label>
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
          className="w-full p-2 mb-4 border-4 focus:ring-2 orbitron_500 border-muted"
        />
        <label className="block mb-2 text-text">PASSWORD</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          className="w-full p-2 mb-4 border-4 focus:ring-2 orbitron_500 border-muted"
        />
        <div className="flex items-center justify-between mb-2 text-[0.7rem]">
          <div className="flex items-center">
            <input
              type="checkbox"
              className="w-6 h-6 appearance-none border-3 border-muted rounded-sm checked:bg-accent"
            />
            <label className="text-text ml-2">Remember me</label>
          </div>
          <div>
            <p className="text-primary underline">Forgot Password?</p>
          </div>
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full px-4 py-4 mt-2 text-center cursor-pointer bg-emphasis border-4 border-muted hover:bg-emphasis/90"
        >
          <span className="press_start text-lg text-warning">LOG IN</span>
        </button>
        {message && (
          <p
            className={`text-center mt-4 ${
              message.type === "error" ? "text-red-500" : "text-green-500"
            }`}
          >
            {message.text}
          </p>
        )}
        <div className="flex items-center tracking-normal text-[0.7rem] justify-between mt-4 ">
          <p>Dont't have an account?</p>
          <p
            onClick={() => navigate("/signup")}
            className="text-primary underline cursor-pointer"
          >
            SIGN UP
          </p>
        </div>
        <div>
          <p className="text-primary my-4 text-center">OR</p>
          <div className="flex justify-evenly items-center gap-2">
            <div>Face</div>
            <div>Face</div>
            <div>Face</div>
            <div>Face</div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
