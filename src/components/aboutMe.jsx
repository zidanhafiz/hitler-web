import AboutMeJson from "../assets/documents/aboutMe";

function Images(props) {
  return (
    <img
      className="aboutme-images"
      src={props.src}
      alt={props.alt}
      style={props.style}
    />
  );
}

function Articles(props) {
  return (
    <div className="container-fluid aboutme-articles">
      <div className="row d-flex align-items-center">
        <div className="col left">{props.left}</div>
        <div className="col right">{props.right}</div>
      </div>
    </div>
  );
}

function AboutMeArticles() {
  let i = 0;
  return (
    <>
      {AboutMeJson.map((item) => {
        if (i === 0 || i % 2 === 0) {
          i++;
          return (
            <Articles
              left={<Images src={item.img} alt={item.id} />}
              right={item.art}
              key={item.id}
            />
          );
        }
        i++;
        return (
          <Articles
            left={item.art}
            right={<Images src={item.img} alt={item.id} />}
            key={item.id}
          />
        );
      })}
    </>
  );
}

function AboutMe() {
  return (
    <div className="container about-me">
      <h3 className="text-center article-title" id="aboutme-title">
        ABOUT ME
      </h3>
      <div className="underline m-auto"></div>
      <AboutMeArticles />
    </div>
  );
}

export default AboutMe;
