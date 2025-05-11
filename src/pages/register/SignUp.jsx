import React, { useState } from "react";

const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({
    type: "",
    text: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (form.password !== form.confirmPassword) {
      setMessage({
        type: "error",
        text: "Passwords do not match",
      });
      return;
    }
    try {
      const res = await fetch("http://localhost:8082/api/v1/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: form.username,
          email: form.email,
          password: form.password,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      if (res.status === 200) {
        setMessage({
          type: "success",
          text: data.message,
        });
        setForm({
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      } else {
        setMessage({
          type: "error",
          text: data.message,
        });
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
        SIGN UP
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
        <label className="block mb-2 text-text">EMAIL</label>
        <input
          type="email"
          name="email"
          value={form.email}
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
        <label className="block mb-2 text-text">CONFIRM PASSWORD</label>
        <input
          type="password"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
          className="w-full p-2 mb-4 border-4 focus:ring-2 orbitron_500 border-muted"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="w-full px-4 py-4 mt-2 text-center cursor-pointer bg-emphasis border-4 border-muted hover:bg-emphasis/90"
        >
          <span className="press_start text-lg text-warning">SIGN UP</span>
        </button>
        {message && (
          <div
            className={`mt-4 text-center ${
              message.type === "error" ? "text-red-500" : "text-green-500"
            }`}
          >
            {message.text}
          </div>
        )}
        <div className="flex items-center tracking-normal text-[0.6rem] justify-between mt-4 ">
          <p>Already have an account?</p>
          <p className="text-primary underline">LOG IN</p>
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

export default SignUp;
