import { Link } from "react-router-dom";

function JoinMe() {
  return (
    <div className="container col-4 joinme-container">
      <h3 className="joinme-title" id="joinme-title">
        WANNA JOIN ME?
      </h3>
      <p className="joinme-article">
        Apakah kamu tertarik untuk bergabung denganku? Langsung saja isi
        formulir dengan klik tombol dibawah ini :)
      </p>

      <Link className="link" to="/join-me">
        <button className="joinme-button">ISI FORMULIR</button>
      </Link>
    </div>
  );
}

export default JoinMe;
