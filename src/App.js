import "./App.css";
import CustomField from "./components/CustomField";

function App() {
  return (
    <div className="App">
      <form>
        <CustomField label="name" value="" type="text" />
        <CustomField label="email" value="" type="text" />
        <CustomField label="channel" value="" type="text" />
        <button type="button">Submit</button>
      </form>
    </div>
  );
}

export default App;
