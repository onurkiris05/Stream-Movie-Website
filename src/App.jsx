import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Banner from "./pages/Banner";
import Header from "./pages/Header";
import Main from "./pages/Main";
import Footer from "./pages/Footer";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Main />
      <Footer />
    </>
  );
}

export default App;
