// AppWithCustomHook.jsx
import useField from './useField';
import './App.css';  // Add CSS if needed
import SingleCounter from './singleCounter';
import useLocalStorage from './useLocalStorage';

const AppWithCustomHook = () => {
  const nameInput = useField('text');
  const bornInput = useField('date');
  const heightInput = useField('number');
  const [name, setName] = useLocalStorage('name', '');
  const [born, setBorn] = useLocalStorage('born', '');
  const [beight, setHeight] = useLocalStorage('height', '');

  const handleSubmit = (event) => {


    event.preventDefault();
    setName(nameInput.value)
    setBorn(bornInput.value)
    setHeight(heightInput.value)
    console.log(nameInput.value, bornInput.value, heightInput.value)

    nameInput.reset();
    bornInput.reset();
    heightInput.reset();

  };

  return (
    <>
      <div className="app-container">
        <SingleCounter />
        <SingleCounter />
        <SingleCounter />
      </div>
      <div >
        <form onSubmit={handleSubmit}>
          <div>
            Name: <input {...nameInput.inputProps} />
          </div>
          <br />
          <div>
            Birthdate: <input {...bornInput.inputProps} />
          </div>
          <br />
          <div>
            Height: <input {...heightInput.inputProps} />
          </div>
          <button type="submit">Submit</button>
        </form>
        <div>
          {nameInput.value} {bornInput.value} {heightInput.value}
        </div>
      </div>

    </>
  );
};

export default AppWithCustomHook;