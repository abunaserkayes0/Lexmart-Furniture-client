import { useEffect, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useSignInWithGoogle,
  useUpdateProfile
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
const Resister = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [bug, setBug] = useState("");
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [sendEmailVerification, sending, verifyError] =
    useSendEmailVerification(auth);
  const [
    createUserWithEmailAndPassword,
    createUser,
    createUserLoading,
    createUserError,
  ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (user || createUser) {
      navigate(from, { replace: true });
    }
  }, [user, createUser, from, navigate]);
  let errorFind;
  if (error || createUserError || updateError || verifyError) {
    errorFind = (
      <p className="text-danger">
        {createUserError?.message ||
          updateError?.message ||
          error?.message ||
          verifyError?.message}
      </p>
    );
  }
  if (loading || createUserLoading || sending) {
    return <Loading></Loading>;
  }

  if (updating) {
    return <Loading></Loading>;
  }
  const handelFromSubmit = async (e) => {
    e.preventDefault();
    const displayName = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (password.length >= 8) {
      await sendEmailVerification();
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: displayName });
      setBug("");
    } else {
      setBug("Password Greater than 8 characters");
      return;
    }
  };
  return (
    <div>
      <div className="w-50 mx-auto">
        <h2 className="py-4 fw-bold">Please Resister</h2>
        <Form onSubmit={handelFromSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Enter Your Name</Form.Label>
            <Form.Control
              ref={nameRef}
              type="text"
              placeholder="Enter Your Name"
            />
          </Form.Group>
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
            <p className="text-danger">{bug}</p>
            {errorFind}
          </Form.Group>
          <Button
            className="w-50 d-block mx-auto"
            variant="primary"
            type="submit"
          >
            Resister
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
          You have already account?<Link to="/signIn">Please SignIn</Link>
        </p>
      </div>
    </div>
  );
};

export default Resister;
