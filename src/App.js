import "./App.css";
import Avatar from "./components/Avatar";
import Button from "./components/buttons";

function App() {
  return (
    <div className="App">
      <Avatar />
      <Button info="Add to cart" />
      <Button info="Find out more" />
    </div>
  );
}

export default App;
