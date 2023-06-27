import logo from "./logo.svg";
import "./App.css";
import CategoryImageGrid from "./components/mainPageComponent/categoryImageGrid";

function App() {
  const test = [];
  return (
    <div className="App">
      <CategoryImageGrid data={test} />
    </div>
  );
}

export default App;
