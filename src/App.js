import Navbar from "./components/UI/Navbar/Navbar";
import Content from "./components/UI/content/Content";
import Header from "./components/UI/header/Header";

const App = () => {
  return (
    <div className="main">
      <div className="head">
        <Header />
      </div>

      <div className="body">
        <Content />

        <Navbar />
      </div>
    </div>
  );
};

export default App;
