const Footer = () => {
  return (
    <div className="text-center py-5 bg-black text-white">
      <span className="fw-bold fs-3">LexMart Furniture</span>
      <ul className=" list-unstyled d-flex flex-wrap justify-content-center align-items-center gap-2">
        <li>Home</li>
        <li>Manage Items</li>
        <li>Add Items</li>
        <li>Feedback</li>
        <li>My Items</li>
      </ul>
      <h4>Stay In Touch</h4>
      <ul className=" list-unstyled d-flex flex-wrap justify-content-center align-items-center gap-2">
        <li>
          <i className="fa-brands fa-facebook-f"></i>
        </li>
        <li>
          <i className="fa-brands fa-instagram"></i>
        </li>
        <li>
          <i className="fa-brands fa-pinterest-p"></i>
        </li>
        <li>
          <i className="fa-brands fa-twitter"></i>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
