import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Banner from "./pages/Banner";
import Header from "./pages/Header";
import Main from "./pages/Main";
import Footer from "./pages/Footer";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const masterKey = "$2a$10$xCQaSMn7nIqmWLHzMBG.ZeG0o5QmLpbqK1iL18bHyuuRhAr3Tf6S2";

  const fetchData = () => {
    fetch("https://api.jsonbin.io/v3/b/67fe22d68561e97a50ffdc2e", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Access-Key": masterKey,
      },
    })
      .then((res) => res.json())
      .then((apiData) => setData(apiData.record))
      .catch((e) => console.error(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Banner movieData={data.movies} />
      <Main movieData={data.movies} blogData={data.blogs} />
      <Footer />
    </>
  );
}

export default App;
