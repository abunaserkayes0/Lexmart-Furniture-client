import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="position-relative d-flex flex-column align-items-center justify-content-center">
      <img
        className="w-100"
        src="https://i.ibb.co/C89XdbF/notfound.png"
        alt=""
      />
      <button onClick={()=>navigate('/')} className="btn btn-info text-white position-absolute bottom-0">
        Go Back Home
      </button>
    </div>
  );
};

export default NotFound;
