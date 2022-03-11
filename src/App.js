import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Styles from "./index.module.scss";

// import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <button className={Styles.btn}>button text</button>
      <button>button text</button>
      <Footer />
    </div>
  );
}

export default App;
