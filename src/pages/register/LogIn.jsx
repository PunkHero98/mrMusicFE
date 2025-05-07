import React from "react";

const LogIn = () => {
  return (
    <div className="m-0 p-0 h-screen items-center justify-center bg-warning/20">
      <h1 className="press_start text-center text-4xl pt-8 pb-4 text-primary">
        LOG IN
      </h1>
      <form className="press_start text-xs tracking-widest w-full max-w-lg mx-auto mt-2 p-8 bg-background shadow-lg shadow-black rounded-lg border-4 border-muted">
        <label className="block mb-2 text-text">USERNAME</label>
        <input
          type="text"
          className="w-full p-2 mb-4 border-4 focus:ring-2 orbitron_500 border-muted"
        />
        <label className="block mb-2 text-text">PASSWORD</label>
        <input
          type="text"
          className="w-full p-2 mb-4 border-4 focus:ring-2 orbitron_500 border-muted"
        />
        <div className="flex items-center justify-between mb-2 text-[0.7rem]">
          <div className="flex items-center">
            <input type="checkbox" className="w-6 h-6 appearance-none border-3 border-muted rounded-sm checked:bg-accent" />
            <label className="text-text ml-2">Remember me</label>
          </div>
          <div>
            <p className="text-primary underline">Forgot Password?</p>
          </div>
        </div>
        <button className="w-full px-4 py-4 mt-2 text-center cursor-pointer bg-emphasis border-4 border-muted hover:bg-emphasis/90">
          <span className="press_start text-lg text-warning">SIGN UP</span>
        </button>
        <div className="flex items-center tracking-normal text-[0.7rem] justify-between mt-4 ">
          <p>Dont't have an account?</p>
          <p className="text-primary underline">SIGN UP</p>
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
