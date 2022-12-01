import "./App.css";
import { List } from "./List";
import { MapLoopList } from "./MapLoopList";

//Testingtesting

function ForLoopList() {
  const listItems = [];

  for (let i = 0; i < 5; i++) {
    listItems.push(<li key={i}>Item number {i}</li>);
  }

  return <ul>{listItems}</ul>;
}

function App() {
  const shoppingList = ["Flour", "Tea", "Coffe", "Potatos"];

  return (
    <div className="App">
      <ForLoopList />
      <MapLoopList />
      <List items={shoppingList} />
    </div>
  );
}

export default App;
