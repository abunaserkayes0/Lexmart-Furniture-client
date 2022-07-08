import { useEffect, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";

const SignIn = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [user, loading, error] = useAuthState(auth);
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] =
    useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, signUser, signLoading, signError] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, restError] =
    useSendPasswordResetEmail(auth);
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (signUser || userGoogle || user) {
      navigate(from, { replace: true });
    }
  }, [from, navigate, signUser, user, userGoogle]);
  let errorFind;
  if (errorGoogle || signError || error || restError) {
    errorFind = (
      <p className="text-danger">
        {signError?.message || errorGoogle?.message || error?.message}
      </p>
    );
  }

  if (signLoading || loadingGoogle || loading || sending) {
    return <Loading></Loading>;
  }

  const handelFromSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
    fetch("https://murmuring-basin-78335.herokuapp.com/signIn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((result) => {
        localStorage.setItem("token", result.token);
      });
  };

  const handelResetEmail = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("sent mail check you spam folder!");
    } else {
      alert("please enter your email!!!");
      return;
    }
  };
  return (
    <div className="w-50 mx-auto">
      <h2 className="py-4 fw-bold">Please LogIn</h2>
      <Form onSubmit={handelFromSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        {errorFind}
        <Button
          className="w-50 d-block mx-auto"
          variant="primary"
          type="submit"
        >
          LogIn
        </Button>
      </Form>
      <div className="d-flex align-items-center justify-content-center">
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-primary border border-3 rounded-pill fs-6 my-2"
        >
          <i className="fa-brands fa-google px-2"></i>Google SignIn
        </button>
      </div>
      <p>
        Don't Have an account? <Link to="/resister">Create an account</Link>
      </p>
      <p onClick={handelResetEmail} role="button">
        Forgotten Email?
      </p>
      <ToastContainer />
    </div>
  );
};

export default SignIn;
