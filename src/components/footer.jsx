function Footer() {
  return (
    <div className="container footer-container">
      <div className="row">
        <h5>FOLLOW ME AS A DEVELOPER</h5>
        <div className="logo">
          <a href="https://id-id.facebook.com/" target="_blank">
            <i
              className="fa-brands fa-facebook-f"
              style={{ color: "#ffffff" }}
            ></i>
          </a>
          <a href="https://twitter.com/" target="_blank">
            <i
              className="fa-brands fa-twitter"
              style={{ color: "#ffffff" }}
            ></i>
          </a>
          <a href="https://www.instagram.com/hafiz.rofiyani/" target="_blank">
            <i
              className="fa-brands fa-instagram"
              style={{ color: "#ffffff" }}
            ></i>
          </a>
          <a
            href="https://www.linkedin.com/in/zidan-hafiz-rapiyani-76b4871b9/"
            target="_blank"
          >
            <i
              className="fa-brands fa-linkedin"
              style={{ color: "#ffffff" }}
            ></i>
          </a>
          <a href="https://github.com/zidanhafiz" target="_blank">
            <i className="fa-brands fa-github" style={{ color: "#ffffff" }}></i>
          </a>
        </div>
      </div>
      <div className="row">
        <span className="copyright">copyright 2023 by Zidan Hafiz</span>
      </div>
    </div>
  );
}

export default Footer;
