import { Link } from "react-router-dom";

function News() {
  return (
    <div className="container col-4 news-container">
      <h3 className="news-title" id="news-title">
        NEWS
      </h3>
      <p className="news-article">Lihat berita tentang saya disini!</p>
      <Link className="link" to="/news">
        <button className="news-button">LIHAT BERITA</button>
      </Link>
    </div>
  );
}

export default News;
