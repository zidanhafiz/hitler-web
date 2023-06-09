import data from "../assets/documents/achivement.js";
import { Fragment, useEffect, useState } from "react";

function IndicatorBtn(props) {
  const id = props.articleId;
  return (
    <>
      {data.map((item, i) => {
        return (
          <Fragment key={item.id}>
            {item.id === id ? (
              <button
                key={item.id}
                className="indicator-button active"
                onClick={(event) => props.click(event, i)}
              ></button>
            ) : (
              <button
                key={item.id}
                className="indicator-button"
                onClick={(event) => props.click(event, i)}
              ></button>
            )}
          </Fragment>
        );
      })}
    </>
  );
}

function Articles(props) {
  return (
    <>
      <div
        className="row d-flex align-items-center"
        style={{ animation: props.anim }}
        id={props.id}
      >
        <div className="col-5 text-center">
          <img
            src={props.img}
            className="carousel-images"
            style={{ width: props.style }}
          />
        </div>
        <div className="col carousel-articles">
          <p className="carousel-article">{props.paragraph}</p>
        </div>
      </div>
    </>
  );
}

function Carousel() {
  const [iterate, setIterate] = useState(0);
  const [image, setImage] = useState();
  const [article, setArticle] = useState();
  const [id, setId] = useState();
  const [width, setWidth] = useState("100%");
  const [slide, setSlide] = useState("fadeIn 500ms");
  const [name, setName] = useState();
  const [name2, setName2] = useState();

  useEffect(() => {
    if (iterate >= 0 && iterate < data.length) {
      const img = data[iterate].img;
      const art = data[iterate].art;
      const id = data[iterate].id;

      setTimeout(() => {
        if (iterate == 0) setWidth("60%");
        else setWidth("100%");

        setId(id);
        setArticle(art);
        setSlide(name);
        return setImage(img);
      }, 200);
      return setSlide(name2);
    } else if (iterate < 0) {
      return setIterate(2);
    }
    return setIterate(0);
  }, [iterate]);

  const getData = (e) => {
    if (e.target.classList[0] == "next-btn") {
      setName("fadeIn 500ms");
      setName2("fadeOut 500ms");
      setSlide();
      return setIterate(iterate + 1);
    }
    setSlide();
    setName2("fadeOutRev 500ms");
    setName("fadeInRev 500ms");
    console.log(e);
    return setIterate(iterate - 1);
  };

  const clickIndicators = (e, i) => {
    if (iterate < i) {
      setName("fadeIn 500ms");
      setName2("fadeOut 500ms");
      return setIterate(i);
    }
    setName("fadeInRev 500ms");
    setName2("fadeOutRev 500ms");
    return setIterate(i);
  };

  return (
    <div className="container-sm carousel-container rounded-5 mt-5 d-flex flex-column-reverse">
      <Articles
        id={id}
        anim={slide}
        img={image}
        paragraph={article}
        style={width}
      />
      <div className="indicator-button-group container text-center">
        <IndicatorBtn click={clickIndicators} articleId={id} />
      </div>
      <div className="carousel-button mt-3 text-center">
        <button onClick={getData} className="prev-btn rounded-circle">
          <i
            className="fa-solid fa-angle-left"
            style={{ color: "#ffffff" }}
          ></i>
        </button>
        <button onClick={getData} className="next-btn rounded-circle">
          <i
            className="next-btn fa-solid fa-angle-right"
            style={{ color: "#ffffff" }}
          ></i>
        </button>
      </div>
    </div>
  );
}

function Achivement() {
  return (
    <div className="container carousel">
      <h3 className="article-title text-center mb-3" id="achivement-title">
        ACHIVEMENT
      </h3>
      <Carousel />
    </div>
  );
}

export default Achivement;
