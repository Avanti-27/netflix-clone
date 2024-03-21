import { useRef, useState } from "react";
import Header from "./Header";
import validateData from "../utils/validateData";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleToggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  const handleClick = () => {
    const message = validateData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    if (!isSignIn) {
      //Sign Up

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
        <form
          onSubmit={(e) => e.preventDefault()}
          className="absolute bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white p-6 bg-opacity-80"
        >
          <h1 className="font-bold text-3xl m-2 p-2">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-4 my-4 w-full bg-gray-700 bg-opacity-80"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email address"
            className="p-4 my-4 w-full bg-gray-700 bg-opacity-80"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-4 my-4 w-full  bg-gray-700 bg-opacity-80"
          />
          <p className="text-red-600 text-lg">{errorMessage}</p>
          <button
            className="p-4 my-6 w-full bg-red-600 font-bold"
            onClick={handleClick}
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p className="m-2 p-2 cursor-pointer" onClick={handleToggleForm}>
            {isSignIn
              ? "New to Netflix? Sign Up Now"
              : "Already have an account! Sign In here."}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
