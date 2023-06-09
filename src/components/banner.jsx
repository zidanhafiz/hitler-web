import ImgBanner from "../assets/img/hitler-banner-title.jpg";

function Banner() {
  return (
    <div className="container-fluid banner-container">
      <div className="row" id="home">
        <div className="banner-section1 col-7 text-end">
          <div className="top-things text-end">
            <div className="circles d-flex flex-row-reverse">
              <div className="circle rounded-circle"></div>
              <div className="circle rounded-circle"></div>
              <div className="circle rounded-circle"></div>
            </div>
            <div className="rectangle mt-3"></div>
          </div>
          <div className="banner-articles1">
            <h1 className="banner-title">GUTEN TAG!</h1>
            <p className="banner-description">
              Saya adalah Adolf Hitler seorang pemimpin politik Jerman pada era
              Nazi yang dikenal karena kebijakan rasialis dan kekejaman yang
              menyebabkan Perang Dunia II dan Holocaust.
            </p>
          </div>
        </div>
        <div className="banner-section2 col">
          <div className="banner-articles2 d-flex flex-column align-items-center">
            <img
              className="image-banner-title"
              src={ImgBanner}
              alt="adolf-hitler"
            />
            <h4 className="banner-subtitle">ADOLF HITLER</h4>
          </div>
          <div className="rectangle mt-3"></div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
