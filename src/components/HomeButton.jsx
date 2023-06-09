import { Link } from "react-router-dom";

function HomeButton() {
  return (
    <div className="home-nav">
      <Link to="/" className="link">
        <i className="fa-solid fa-angle-left" style={{ color: "#000" }}></i>
        <span>Go Home</span>
      </Link>
    </div>
  );
}

export default HomeButton;
