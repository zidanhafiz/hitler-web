import { Link } from "react-router-dom";
import HomeButton from "../components/HomeButton";

function JoinMePage() {
  return (
    <div className="joinme-page">
      <div className="container col-6 m-auto pt-5">
        <HomeButton />
        <h3 className="title text-center mb-5">FORMULIR PENDAFTARAN</h3>
        <div className="row text-end">
          <form>
            <input
              type="text"
              className="form-control mt-3"
              placeholder="Nama Lengkap"
            />
            <input
              type="text"
              className="form-control mt-4"
              placeholder="Nomor Handphone"
            />

            <input
              type="email"
              className="form-control mt-4"
              placeholder="Email"
            />
            <input
              type="text"
              className="form-control mt-4"
              placeholder="Alamat Rumah"
            />
            <textarea
              className="form-control mt-4"
              id="exampleFormControlTextarea1"
              rows="5"
              placeholder="Alasan ingin bergabung"
            ></textarea>
            <button type="submit" className="btn btn-primary btn-dark mt-5">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default JoinMePage;
