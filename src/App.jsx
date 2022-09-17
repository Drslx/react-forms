import "./App.css";
import MyForm from "./components/MyForm";

function App() {
  return (
    <div className="App">
      <h2>Formulario</h2>

      <MyForm user={{ name: "Douglas", email: "drs@gmail.com" }} />
    </div>
  );
}

export default App;
