import { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
const SignIn = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] =
    useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, signUser, signLoading, signError] =
    useSignInWithEmailAndPassword(auth);
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  let errorFind;
  if (errorGoogle || signError || error) {
    errorFind = <p className="text-danger">{signError?.message}</p>;
  }

  if (signLoading || loadingGoogle || loading) {
    return <Loading></Loading>;
  }

  if (signUser || userGoogle || user) {
    navigate(from, { replace: true });
  }

  const handelFromSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
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
        Don't Have an account?<Link to="/resister">Create an account</Link>
      </p>
    </div>
  );
};

export default SignIn;