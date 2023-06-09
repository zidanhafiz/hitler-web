import "./App.css";
import AboutMe from "./components/aboutMe";
import Achivement from "./components/achivement";
import Banner from "./components/banner";
import Footer from "./components/footer";
import JoinMe from "./components/joinMe";
import Navbar from "./components/navbar";
import News from "./components/news";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <AboutMe></AboutMe>
      <Achivement></Achivement>
      <div className="container-lg mt-5 joinnews-container">
        <div className="row text-center">
          <News></News>
          <JoinMe></JoinMe>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
