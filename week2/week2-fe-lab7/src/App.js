import Greetings from './Greetings';
import './App.css'; // Import CSS file

function App() {
    return (
        <div className="App">
            <Greetings name="Alice" message="Welcome to the lab!" />
             <Greetings name="Bob" message="Good morning" />
        </div>
    );
}

export default App;