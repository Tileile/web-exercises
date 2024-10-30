import logo from './logo.svg';
import './App.css';

function Hello(){

  return (
    <p>Hello React!</p>
  )
}

  function Bye(){
    return (
      <p>Bye React...</p>
    )

}

function App() {
  return (
    <div className="App">
      <Hello  />
      <Bye />
    </div>
  );
}

export default App;
