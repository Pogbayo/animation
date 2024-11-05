import CoinPage from "./components/coin/Coin";
import { Faq } from "./components/FAQ/Faq";
import Fifth from "./components/fifth/Fifth";
import { First } from "./components/first/first";
import { Footer } from "./components/Footer/Footer";
import Formdata from "./components/formdata/Formdata";
import { Fourth } from "./components/fourth/fourth";
import Second from "./components/second/second";
import RoadMap from "./components/third/third";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <First />
                <Second />
                <RoadMap />
                <Fourth />
                <Fifth />
                <Faq />
                <Footer />
              </>
            }
          />
          <Route path="/coin" element={<CoinPage />} />
          <Route path="/form" element={<Formdata />} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;
