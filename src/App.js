import "./App.css";
import TextForm from "./components/TextForm";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Navbar title="Google" />
      <div className="container my-5">
        <TextForm textHeading="Enter your Text to analyse" />
      </div>
    </>
  );
}

export default App;
