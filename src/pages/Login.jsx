import { useState } from "react";
import Header from "../components/Header/Header";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      await logIn(email, password);
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
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/");
    } catch (err) {
      console.log(err.message);
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
          Login
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
          Not yet have an account?{" "}
          <Link
            to="/register"
            className="hover:text-cyan-500 hover:font-extrabold dark:hover:text-cyan-500 dark:hover:font-extrabold"
          >
            Register
          </Link>{" "}
          now{" "}
        </p>
        <button className=" mt-3 rounded-xl bg-cyan-500 py-3 text-white">
          Login
        </button>
        <button
          type="button"
          className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 justify-center flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
          onClick={handleGoogleSignIn}
        >
          <svg
            className="w-4 h-4 mr-2 -ml-1"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="google"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 488 512"
          >
            <path
              fill="currentColor"
              d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
            ></path>
          </svg>
          Sign in with Google
        </button>
      </form>
    </div>
  );
};

export default Login;
