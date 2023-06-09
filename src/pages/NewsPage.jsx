import { useEffect, useState } from "react";
import HomeButton from "../components/HomeButton";

function NewsPage() {
  const [articles, setArticles] = useState({});
  const [loading, setLoading] = useState(true);
  const [keyword, setKeyword] = useState("hitler");
  const [input, setInput] = useState("hitler");
  const [error, setError] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setLoading(true);
    setKeyword(input);
  };

  useEffect(() => {
    async function getData() {
      const url = `https://bing-news-search1.p.rapidapi.com/news/search?q=${keyword}&freshness=Day&textFormat=Raw&safeSearch=Off`;
      const options = {
        method: "GET",
        headers: {
          "X-BingApis-SDK": "true",
          "X-RapidAPI-Key":
            "3f0e94efe1msh5fb2e70d477a8b1p1c6caejsnbaf6707cacdb",
          "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
        },
      };

      const request = await fetch(url, options);
      const response = await request.json();

      if (response.value.length === 0) {
        setLoading(false);
        return setError(true);
      }

      setArticles(response.value);
      setLoading(false);
      setError(false);
    }
    getData();
  }, [keyword]);

  return (
    <div className="news-page">
      <div className="container-sm col-6 pt-5">
        <HomeButton />
        <h3 className="text-center mb-5">News</h3>
        <form onSubmit={submit} className="form-container d-flex">
          <input
            type="text"
            placeholder="Search"
            className="form-control me-3"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <button type="submit" className="btn btn-primary btn-dark">
            search
          </button>
        </form>
        {error ? (
          <h5 className="text-center mt-5">
            Maaf artikel yang anda cari tidak ditemukan :(
          </h5>
        ) : (
          <div className="container news-articles mt-5 pb-5">
            {loading ? (
              <p className="text-center">loading data...</p>
            ) : (
              articles.map((item) => {
                const key = Math.floor(Math.random() * 10000);
                return (
                  <div key={key} className="news-article row mt-5">
                    {item.image?.thumbnail && (
                      <img
                        src={item.image.thumbnail.contentUrl}
                        alt={item.description}
                        style={{ width: "150px" }}
                        className="col-2"
                      />
                    )}
                    <p className="description col">
                      <a
                        href={item.url}
                        target="_blank"
                        style={{ textDecoration: "none", color: "#000" }}
                      >
                        {item.name}
                      </a>
                    </p>
                    <time className="text-end">
                      Published :{" "}
                      {new Date(item.datePublished).toLocaleDateString()}
                    </time>
                  </div>
                );
              })
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default NewsPage;
