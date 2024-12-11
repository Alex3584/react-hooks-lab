import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainContent from "./components/MainContent/MainContent";

function App() {
  return (
    <div className="app-container">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
