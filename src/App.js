import "./App.css";
import PageContainer from "./pages/PageContainer";
import StarRatings from "./components/Stars/StarRatings";

function App() {
  return (
    <div className="App">
      <PageContainer />
      <StarRatings rate={4.5} />
    </div>
  );
}

export default App;
