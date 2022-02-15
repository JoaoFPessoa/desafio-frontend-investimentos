import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}
fetch("http://localhost:3000/indicadores", {
  method: "GET",
  headers: new Headers({ "Content-type": "application/json" }),
})
  .then(async (response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
export default App;
