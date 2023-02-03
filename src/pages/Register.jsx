import Header from "../components/Header/Header";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUserAuth } from "../context/UserAuthContext";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { register } = useUserAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit");
    try {
      setError("");
      await register(email, password);
      navigate("/");
    } catch (err) {
      const errorMsg = err.message
        .replace("Firebase:", "")
        .replace("auth", "")
        .replace(/[.,\/#!$%\^&\*;{}=\_`~()]/g, "")
        .replace("Error", "Error :");
      setError(errorMsg);
    }
  };

  return (
    <div className=" max-w-7xl mx-auto min-h-screen w-full px-4 grid grid-rows-[0_auto]">
      <Header />

      <form
        className="grid grid-cols-1 gap-3 max-w-md justify-center p-10 dark:bg-slate-900  rounded-xl mx-auto place-self-center border border-slate-400 text-slate-500 "
        onSubmit={handleSubmit}
      >
        <h2 className="mb-3 text-center font-extrabold text-4xl dark:text-white ">
          Register
        </h2>
        <div
          className="text-red-600
        "
        >
          {error}
        </div>
        <label htmlFor="" className="dark:text-slate-400">
          Username
        </label>
        <input
          type="text"
          className="py-3 rounded-xl border border-slate-400 dark:bg-slate-400"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <label htmlFor="" className="dark:text-slate-400">
          Password
        </label>
        <input
          type="password"
          className="py-3 rounded-xl border border-slate-400 dark:bg-slate-400"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <p className="text-sm dark:text-slate-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="hover:text-cyan-500 hover:font-extrabold dark:hover:text-cyan-500 dark:hover:font-extrabold"
          >
            Login
          </Link>{" "}
          now{" "}
        </p>
        <button className=" mt-3 rounded-xl bg-cyan-500 py-3 text-white">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
